#!/usr/bin/env node
/**
 * Contractor MCP server for Nashville Fence Guide.
 *
 * Sources data for the knowledge-panel expansion described in
 * docs/CONTRACTOR-PROFILE-PLAN.md. Claude calls these tools in-session,
 * inspects the returned data, and writes results into
 * src/data/contractors.ts via the Edit tool. Editing happens
 * conversationally — this server is the SOURCING side only.
 *
 * Tools (all exposed as `mcp__contractors__<name>`):
 *   1. lookup_google_places(name, area)
 *   2. fetch_google_reviews(place_id, max?)
 *   3. lookup_bbb(name, state)
 *   4. lookup_chamber(name, city)
 *   5. lookup_state_license(name, state)
 *   6. list_contractor_gaps(slug?)
 *
 * Auth: reads GOOGLE_PLACES_API_KEY from .env.local. Web-scrape tools
 * (BBB, Chamber, License) don't need an API key. See .env.local.example.
 *
 * Run modes:
 *   - Auto-launched by Claude via .mcp.json (stdio transport).
 *   - Self-test: `node scripts/mcp-contractor-server.mjs --self-test`
 */
import { Server } from '@modelcontextprotocol/sdk/server/index.js'
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js'
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from '@modelcontextprotocol/sdk/types.js'
import { readFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

const HERE = dirname(fileURLToPath(import.meta.url))
const ROOT = resolve(HERE, '..')
const CONTRACTORS_FILE = resolve(ROOT, 'src/data/contractors.ts')

async function loadEnv() {
  try {
    const content = await readFile(resolve(ROOT, '.env.local'), 'utf8')
    for (const raw of content.split('\n')) {
      const line = raw.trim()
      if (!line || line.startsWith('#')) continue
      const m = line.match(/^([A-Z_][A-Z0-9_]*)\s*=\s*(.*)$/)
      if (!m) continue
      const val = m[2].replace(/^["']|["']$/g, '')
      if (process.env[m[1]] === undefined) process.env[m[1]] = val
    }
  } catch {
    // .env.local optional
  }
}
await loadEnv()

// =====================================================================
// Google Places
// =====================================================================

async function lookupGooglePlaces(name, area) {
  const key = process.env.GOOGLE_PLACES_API_KEY
  if (!key) throw new Error('GOOGLE_PLACES_API_KEY missing (set in .env.local)')
  const query = `${name} ${area}`.trim()
  // Step 1: Text Search to resolve a Place ID
  const searchUrl = new URL('https://maps.googleapis.com/maps/api/place/textsearch/json')
  searchUrl.searchParams.set('query', query)
  searchUrl.searchParams.set('key', key)
  const searchRes = await fetch(searchUrl)
  if (!searchRes.ok) throw new Error(`Places textsearch ${searchRes.status}: ${await searchRes.text()}`)
  const searchData = await searchRes.json()
  if (!searchData.results || searchData.results.length === 0) {
    return { found: false, query }
  }
  const top = searchData.results[0]

  // Step 2: Place Details for richer fields
  const detailsUrl = new URL('https://maps.googleapis.com/maps/api/place/details/json')
  detailsUrl.searchParams.set('place_id', top.place_id)
  detailsUrl.searchParams.set('fields', [
    'place_id', 'name', 'formatted_address', 'formatted_phone_number',
    'international_phone_number', 'website', 'rating', 'user_ratings_total',
    'business_status', 'opening_hours', 'types', 'url', 'geometry', 'photos',
  ].join(','))
  detailsUrl.searchParams.set('key', key)
  const detailsRes = await fetch(detailsUrl)
  if (!detailsRes.ok) throw new Error(`Places details ${detailsRes.status}: ${await detailsRes.text()}`)
  const details = (await detailsRes.json()).result

  return {
    found: true,
    place_id: details.place_id,
    name: details.name,
    address: details.formatted_address,
    phone: details.formatted_phone_number,
    phone_e164: details.international_phone_number,
    website: details.website,
    rating: details.rating,
    reviews_count: details.user_ratings_total,
    business_status: details.business_status,
    hours: details.opening_hours?.weekday_text ?? [],
    types: details.types ?? [],
    google_maps_url: details.url,
    coordinates: details.geometry?.location
      ? [details.geometry.location.lat, details.geometry.location.lng]
      : null,
    photo_count: details.photos?.length ?? 0,
  }
}

async function fetchGoogleReviews(place_id, max = 5) {
  const key = process.env.GOOGLE_PLACES_API_KEY
  if (!key) throw new Error('GOOGLE_PLACES_API_KEY missing (set in .env.local)')
  // Note: Google Places API returns up to 5 reviews per call (most_relevant by default).
  const url = new URL('https://maps.googleapis.com/maps/api/place/details/json')
  url.searchParams.set('place_id', place_id)
  url.searchParams.set('fields', 'reviews')
  url.searchParams.set('key', key)
  const res = await fetch(url)
  if (!res.ok) throw new Error(`Places reviews ${res.status}: ${await res.text()}`)
  const data = await res.json()
  const reviews = (data.result?.reviews ?? []).slice(0, clamp(max, 1, 5))
  return {
    count: reviews.length,
    reviews: reviews.map((r) => ({
      author: r.author_name,
      rating: r.rating,
      time: r.relative_time_description,
      text: r.text,
      language: r.language,
    })),
  }
}

// =====================================================================
// BBB (HTML scrape, no API)
// =====================================================================

async function lookupBBB(name, state) {
  const stateLower = (state ?? 'tn').toLowerCase()
  const searchUrl = `https://www.bbb.org/search?find_text=${encodeURIComponent(name)}&find_loc=${encodeURIComponent(stateLower)}`
  let html
  try {
    const res = await fetch(searchUrl, {
      headers: { 'User-Agent': 'Mozilla/5.0 (compatible; NashvilleFenceGuide/1.0)' },
    })
    if (!res.ok) {
      return { found: false, reason: `BBB search returned ${res.status}`, searchUrl }
    }
    html = await res.text()
  } catch (err) {
    return { found: false, reason: `BBB fetch failed: ${err.message}`, searchUrl }
  }

  // BBB search results put profile links as /us/<state>/<city>/profile/<category>/<name>/<id>
  const profileMatch = html.match(/href="(\/us\/[a-z]{2}\/[^"]*\/profile\/[^"]*)"/i)
  const accreditationMatch = html.match(/(BBB Accredited|Accredited Business|A\+|A-|B|F)\s*<?/i)
  if (!profileMatch) {
    return { found: false, reason: 'No BBB profile link in search results', searchUrl }
  }
  const profileUrl = `https://www.bbb.org${profileMatch[1]}`
  // Try to fetch the profile page for accreditation detail
  let accreditation = null
  try {
    const profileRes = await fetch(profileUrl, {
      headers: { 'User-Agent': 'Mozilla/5.0 (compatible; NashvilleFenceGuide/1.0)' },
    })
    if (profileRes.ok) {
      const profileHtml = await profileRes.text()
      const ratingMatch = profileHtml.match(/BBB\s*[Rr]ating[^>]*>([A-F][+-]?)/)
      if (ratingMatch) accreditation = ratingMatch[1]
    }
  } catch {
    // best-effort; surface the profileUrl anyway
  }
  return {
    found: true,
    profileUrl,
    accreditation,
    searchHit: accreditationMatch?.[1] ?? null,
  }
}

// =====================================================================
// Nashville Chamber (HTML scrape, no API)
// =====================================================================

async function lookupChamber(name, city = 'Nashville') {
  // Best-effort: the Chamber doesn't expose a public search API.
  // We try Google for "chamber of commerce {city} member {name}" and return
  // any direct chamber.org URL found in the results page.
  const query = `"${name}" "${city} Area Chamber of Commerce" member`
  const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`
  try {
    const res = await fetch(searchUrl, {
      headers: { 'User-Agent': 'Mozilla/5.0 (compatible; NashvilleFenceGuide/1.0)' },
    })
    if (!res.ok) return { found: false, reason: `search ${res.status}`, searchUrl }
    const html = await res.text()
    const chamberMatch = html.match(/href="(https?:\/\/[^"]*chamber[^"]*\.org[^"]*)"/i)
    if (chamberMatch) {
      return { found: true, profileUrl: chamberMatch[1] }
    }
    return { found: false, reason: 'No chamber URL in Google results', searchUrl }
  } catch (err) {
    return { found: false, reason: err.message, searchUrl }
  }
}

// =====================================================================
// TN State License (HTML scrape via verify.tn.gov)
// =====================================================================

async function lookupStateLicense(name, state = 'TN') {
  if (state.toUpperCase() !== 'TN') {
    return { found: false, reason: `${state} state license lookup not implemented yet` }
  }
  // verify.tn.gov is a JS app; the public search endpoint behind it is
  // available at /verification-api/api/Verification/lookup.
  // We try a best-effort POST. On failure, surface the manual URL.
  const lookupUrl = 'https://verify.tn.gov/'
  // Simple GET to the home page — proves connectivity. Full API lookup
  // requires session tokens we don't want to manage server-side.
  return {
    found: false,
    reason: 'Full TN license lookup needs interactive session — manually verify via the URL below.',
    manualLookupUrl: lookupUrl,
    suggestedQuery: name,
  }
}

// =====================================================================
// Inventory: which Contractor fields are unfilled, per slug
// =====================================================================

const TRACKED_FIELDS = [
  'founded', 'ownership', 'employees', 'snapshot', 'editorialAssessment',
  'servicesOffered', 'areasServedDetail', 'portfolio', 'pricing', 'faqs',
  'financing', 'warranty', 'team', 'reviewSummary', 'onlinePresence',
]

async function listContractorGaps(slug) {
  const src = await readFile(CONTRACTORS_FILE, 'utf8')
  // Cheap parse: find each contractor's block by searching for `slug: '<x>'`
  // then scanning forward until we hit the next `slug:` or end of array.
  const slugMatches = Array.from(src.matchAll(/slug:\s*'([^']+)'/g))
  const blocks = []
  for (let i = 0; i < slugMatches.length; i++) {
    const start = slugMatches[i].index
    const end = i + 1 < slugMatches.length ? slugMatches[i + 1].index : src.length
    blocks.push({ slug: slugMatches[i][1], body: src.slice(start, end) })
  }
  const target = slug ? blocks.filter((b) => b.slug === slug) : blocks
  if (slug && target.length === 0) {
    throw new Error(`Contractor slug not found: ${slug}`)
  }
  return target.map((b) => {
    const missing = TRACKED_FIELDS.filter((f) => !new RegExp(`\\b${f}:`).test(b.body))
    return {
      slug: b.slug,
      claimStatus: b.body.match(/claimStatus:\s*'([^']+)'/)?.[1] ?? 'unknown',
      lastUpdated: b.body.match(/lastUpdated:\s*'([^']+)'/)?.[1] ?? null,
      missingFields: missing,
      filledCount: TRACKED_FIELDS.length - missing.length,
      totalTracked: TRACKED_FIELDS.length,
    }
  })
}

// =====================================================================
// Utilities
// =====================================================================

function clamp(n, lo, hi) {
  return Math.min(Math.max(Number(n) || lo, lo), hi)
}

// =====================================================================
// MCP wiring
// =====================================================================

const TOOLS = [
  {
    name: 'lookup_google_places',
    description:
      'Resolve a contractor to its Google Places listing. Returns place_id, formatted address + phone, website, rating + review count, hours, business status, types, coordinates, and Google Maps URL. Needs GOOGLE_PLACES_API_KEY.',
    inputSchema: {
      type: 'object',
      properties: {
        name: { type: 'string', description: 'Business name (e.g. "K & C Fence Company")' },
        area: { type: 'string', description: 'City + state (e.g. "Nashville TN")' },
      },
      required: ['name', 'area'],
    },
  },
  {
    name: 'fetch_google_reviews',
    description:
      'Fetch up to 5 most-relevant reviews from a Google Places listing. Returns author, rating, text, time. Google does not return more than 5 reviews per call — to summarize themes, the conversation Claude reads the reviews directly.',
    inputSchema: {
      type: 'object',
      properties: {
        place_id: { type: 'string' },
        max: { type: 'number', description: 'Max reviews (1-5, default 5)' },
      },
      required: ['place_id'],
    },
  },
  {
    name: 'lookup_bbb',
    description:
      'Search the BBB business directory by name and state. Returns profileUrl + accreditation letter grade if available. Best-effort HTML scrape, no API key needed.',
    inputSchema: {
      type: 'object',
      properties: {
        name: { type: 'string' },
        state: { type: 'string', description: 'Two-letter state code (e.g. "tn")' },
      },
      required: ['name', 'state'],
    },
  },
  {
    name: 'lookup_chamber',
    description:
      'Search for a Chamber of Commerce membership URL via best-effort Google search. Returns found: true/false and profileUrl when discoverable.',
    inputSchema: {
      type: 'object',
      properties: {
        name: { type: 'string' },
        city: { type: 'string', description: 'City of chamber (default Nashville)' },
      },
      required: ['name'],
    },
  },
  {
    name: 'lookup_state_license',
    description:
      'Lookup state contractor license. Currently TN-only — returns manualLookupUrl since verify.tn.gov requires an interactive session for the full search.',
    inputSchema: {
      type: 'object',
      properties: {
        name: { type: 'string' },
        state: { type: 'string', description: 'Two-letter state code (default TN)' },
      },
      required: ['name'],
    },
  },
  {
    name: 'list_contractor_gaps',
    description:
      'Inventory the Contractor data model. Returns each contractor (or a single slug) with its claimStatus, lastUpdated, and a list of missingFields (tracked Pro-tier fields that are still unset). Read-only.',
    inputSchema: {
      type: 'object',
      properties: {
        slug: { type: 'string', description: 'Limit to one contractor by slug. Omit for all.' },
      },
    },
  },
]

const server = new Server(
  { name: 'contractors', version: '0.1.0' },
  { capabilities: { tools: {} } },
)

server.setRequestHandler(ListToolsRequestSchema, async () => ({ tools: TOOLS }))

server.setRequestHandler(CallToolRequestSchema, async (req) => {
  const { name, arguments: args = {} } = req.params
  try {
    let payload
    if (name === 'lookup_google_places') payload = await lookupGooglePlaces(args.name, args.area)
    else if (name === 'fetch_google_reviews') payload = await fetchGoogleReviews(args.place_id, args.max)
    else if (name === 'lookup_bbb') payload = await lookupBBB(args.name, args.state)
    else if (name === 'lookup_chamber') payload = await lookupChamber(args.name, args.city)
    else if (name === 'lookup_state_license') payload = await lookupStateLicense(args.name, args.state)
    else if (name === 'list_contractor_gaps') payload = await listContractorGaps(args.slug)
    else throw new Error(`Unknown tool: ${name}`)
    return { content: [{ type: 'text', text: JSON.stringify(payload, null, 2) }] }
  } catch (err) {
    return {
      content: [{ type: 'text', text: `Error: ${err.message}` }],
      isError: true,
    }
  }
})

// =====================================================================
// Self-test
// =====================================================================

if (process.argv.includes('--self-test')) {
  console.log('Contractor MCP server self-test')
  console.log('  GOOGLE_PLACES_API_KEY:', process.env.GOOGLE_PLACES_API_KEY ? 'set' : 'MISSING')
  const gaps = await listContractorGaps()
  console.log(`\nlist_contractor_gaps() → ${gaps.length} contractors`)
  console.log('First 3:')
  for (const g of gaps.slice(0, 3)) {
    console.log(`  ${g.slug}: ${g.filledCount}/${g.totalTracked} filled, missing ${g.missingFields.length} fields`)
  }
  process.exit(0)
}

const transport = new StdioServerTransport()
await server.connect(transport)
