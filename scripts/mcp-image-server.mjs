#!/usr/bin/env node
/**
 * Image MCP server for Nashville Fence Guide.
 *
 * Wraps Unsplash + Pexels search and gives Claude a hands-on loop for
 * picking images during a build session:
 *
 *   1. search_unsplash / search_pexels   ← see candidates + thumbnails
 *   2. set_image                          ← write the picked URL into
 *                                           src/data/imageUrls.ts
 *                                           and record attribution
 *   3. list_image_slots                   ← inventory existing keys and
 *                                           service slugs missing images
 *
 * Auth: reads UNSPLASH_ACCESS_KEY and PEXELS_API_KEY from .env.local
 * (gitignored). See .env.local.example.
 *
 * Run modes:
 *   - Auto-launched by Claude via .mcp.json (stdio transport).
 *   - Self-test: `node scripts/mcp-image-server.mjs --self-test`
 */
import { Server } from '@modelcontextprotocol/sdk/server/index.js'
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js'
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from '@modelcontextprotocol/sdk/types.js'
import { readFile, writeFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

const HERE = dirname(fileURLToPath(import.meta.url))
const ROOT = resolve(HERE, '..')
const IMAGE_URLS_FILE = resolve(ROOT, 'src/data/imageUrls.ts')
const ATTRIBUTION_FILE = resolve(ROOT, 'src/data/imageAttribution.json')
const SERVICES_FILE = resolve(ROOT, 'src/data/services.ts')
const CATEGORIES = ['fenceTypes', 'neighborhoods', 'resources', 'gallery', 'services']

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
    // .env.local optional; env may be set externally
  }
}
await loadEnv()

// ----- Provider search wrappers ---------------------------------------

async function searchUnsplash(query, count = 6) {
  const key = process.env.UNSPLASH_ACCESS_KEY
  if (!key) throw new Error('UNSPLASH_ACCESS_KEY missing (set in .env.local)')
  const url = new URL('https://api.unsplash.com/search/photos')
  url.searchParams.set('query', query)
  url.searchParams.set('per_page', String(clamp(count, 1, 12)))
  url.searchParams.set('orientation', 'landscape')
  const res = await fetch(url, { headers: { Authorization: `Client-ID ${key}` } })
  if (!res.ok) throw new Error(`Unsplash ${res.status}: ${await res.text()}`)
  const data = await res.json()
  return data.results.map((p) => ({
    id: p.id,
    full_url: `https://images.unsplash.com/photo-${p.id}?auto=format&fit=crop&w=1200&q=80`,
    thumb_url: p.urls?.thumb,
    alt: p.alt_description ?? '',
    description: p.description ?? '',
    photographer: p.user?.name ?? '',
    photographer_url: p.user?.links?.html ?? '',
    source_url: p.links?.html ?? '',
  }))
}

async function searchPexels(query, count = 6) {
  const key = process.env.PEXELS_API_KEY
  if (!key) throw new Error('PEXELS_API_KEY missing (set in .env.local)')
  const url = new URL('https://api.pexels.com/v1/search')
  url.searchParams.set('query', query)
  url.searchParams.set('per_page', String(clamp(count, 1, 12)))
  url.searchParams.set('orientation', 'landscape')
  const res = await fetch(url, { headers: { Authorization: key } })
  if (!res.ok) throw new Error(`Pexels ${res.status}: ${await res.text()}`)
  const data = await res.json()
  return data.photos.map((p) => ({
    id: p.id,
    full_url: p.src?.large2x ?? p.src?.large,
    thumb_url: p.src?.tiny ?? p.src?.small,
    alt: p.alt ?? '',
    description: p.alt ?? '',
    photographer: p.photographer ?? '',
    photographer_url: p.photographer_url ?? '',
    source_url: p.url ?? '',
  }))
}

// ----- imageUrls.ts edit helpers --------------------------------------

function validateUrl(provider, url) {
  if (provider === 'unsplash' && !/^https?:\/\/(images\.)?unsplash\.com\//.test(url))
    throw new Error('Unsplash URL must be hosted on unsplash.com')
  if (provider === 'pexels' && !/^https?:\/\/[a-z0-9-]*\.?pexels\.com\//.test(url))
    throw new Error('Pexels URL must be hosted on pexels.com')
}

async function setImage(args) {
  const { category, key, url, provider, attribution = {} } = args
  if (!CATEGORIES.includes(category)) throw new Error(`Unknown category: ${category}`)
  validateUrl(provider, url)

  let src = await readFile(IMAGE_URLS_FILE, 'utf8')

  if (category === 'gallery') {
    const idx = Number(key)
    if (!Number.isInteger(idx) || idx < 0) throw new Error('gallery key must be a 0-indexed integer string')
    const m = src.match(/(gallery:\s*\[)([\s\S]*?)(\n\s*\])/)
    if (!m) throw new Error('Could not find gallery array in imageUrls.ts')
    const body = m[2]
    const lines = body.split('\n')
    let entryIdx = 0
    const updated = lines.map((ln) => {
      const hit = ln.match(/^(\s*)(['"])([^'"]+)\2(,?)\s*$/)
      if (!hit) return ln
      if (entryIdx++ === idx) return `${hit[1]}'${url}'${hit[4]}`
      return ln
    })
    if (entryIdx <= idx) throw new Error(`gallery index ${idx} out of range (length ${entryIdx})`)
    src = src.replace(/(gallery:\s*\[)([\s\S]*?)(\n\s*\])/, `$1${updated.join('\n')}$3`)
  } else {
    // Match a flat object block (no nested braces — URL strings only).
    // Body excludes the trailing `}` AND any `as <Type>` annotation that
    // might follow, so the cast stays intact across edits.
    const blockRe = new RegExp(`(${category}:\\s*\\{)([^{}]*)(\\})`, 'm')
    const m = src.match(blockRe)
    if (!m) throw new Error(`Could not find ${category} block in imageUrls.ts`)
    const head = m[1]
    let body = m[2]
    const tail = m[3]
    const keyEsc = key.replace(/'/g, "\\'")
    const lineRe = new RegExp(`(['"]${escapeRe(keyEsc)}['"]\\s*:\\s*['"])[^'"]+(['"],?)`)
    if (lineRe.test(body)) {
      body = body.replace(lineRe, `$1${url}$2`)
    } else {
      // Insert a new entry. Preserve existing indentation if present; default
      // to 4 spaces (matches the rest of the file).
      const indent = body.match(/\n( +)['"]/)?.[1] ?? '    '
      const trimmed = body.replace(/\s+$/, '')
      const sep = trimmed.endsWith(',') || trimmed === '' ? '' : ','
      body = `${trimmed}${sep}\n${indent}'${keyEsc}': '${url}',\n  `
    }
    src = src.replace(blockRe, `${head}${body}${tail}`)
  }

  await writeFile(IMAGE_URLS_FILE, src, 'utf8')
  await recordAttribution(category, key, { url, provider, ...attribution })

  return { ok: true, category, key, url }
}

async function recordAttribution(category, key, record) {
  let attr = {}
  try {
    attr = JSON.parse(await readFile(ATTRIBUTION_FILE, 'utf8'))
  } catch {
    // file may not exist yet
  }
  attr[`${category}:${key}`] = { ...record, updated_at: new Date().toISOString() }
  await writeFile(ATTRIBUTION_FILE, JSON.stringify(attr, null, 2) + '\n', 'utf8')
}

async function listImageSlots(category) {
  const src = await readFile(IMAGE_URLS_FILE, 'utf8')
  const result = {}
  const targets = category ? [category] : CATEGORIES
  for (const cat of targets) {
    if (!CATEGORIES.includes(cat)) continue
    if (cat === 'gallery') {
      const m = src.match(/gallery:\s*\[([\s\S]*?)\n\s*\]/)
      const urls = m ? (m[1].match(/['"][^'"]+['"]/g) ?? []) : []
      result[cat] = { type: 'array', length: urls.length }
    } else {
      const m = src.match(new RegExp(`${cat}:\\s*\\{([\\s\\S]*?)\\n\\s*\\}`, 'm'))
      const keys = m
        ? Array.from(m[1].matchAll(/['"]([^'"]+)['"]\s*:/g)).map((x) => x[1])
        : []
      result[cat] = { type: 'object', keys }
    }
  }
  if (!category || category === 'services') {
    try {
      const servicesSrc = await readFile(SERVICES_FILE, 'utf8')
      const allSlugs = Array.from(servicesSrc.matchAll(/slug:\s*['"]([^'"]+)['"]/g)).map((m) => m[1])
      const existing = result.services?.keys ?? []
      result.services_missing = allSlugs.filter((s) => !existing.includes(s))
    } catch {
      // services file optional
    }
  }
  return result
}

// ----- Utilities ------------------------------------------------------

function clamp(n, lo, hi) {
  return Math.min(Math.max(Number(n) || lo, lo), hi)
}
function escapeRe(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

// ----- MCP wiring -----------------------------------------------------

const TOOLS = [
  {
    name: 'search_unsplash',
    description:
      'Search Unsplash for stock photos. Returns up to N candidates with thumbnail URLs (viewable inline), full hotlinkable URL, and photographer attribution. Default count 6, max 12.',
    inputSchema: {
      type: 'object',
      properties: {
        query: { type: 'string', description: 'Search terms (e.g. "horizontal cedar fence modern home")' },
        count: { type: 'number', description: 'Number of results (1–12, default 6)' },
      },
      required: ['query'],
    },
  },
  {
    name: 'search_pexels',
    description: 'Search Pexels for stock photos. Same return shape as search_unsplash.',
    inputSchema: {
      type: 'object',
      properties: {
        query: { type: 'string' },
        count: { type: 'number' },
      },
      required: ['query'],
    },
  },
  {
    name: 'set_image',
    description:
      'Write a picked image URL into src/data/imageUrls.ts under IMAGES.<category>.<key> and record the attribution sidecar in src/data/imageAttribution.json. Validates URL is hosted on the named provider.',
    inputSchema: {
      type: 'object',
      properties: {
        category: {
          type: 'string',
          enum: CATEGORIES,
          description: 'Which IMAGES namespace to update.',
        },
        key: {
          type: 'string',
          description: 'Slug for named categories, or 0-indexed integer string for gallery.',
        },
        url: { type: 'string', description: 'Full image URL (must match provider domain).' },
        provider: { type: 'string', enum: ['unsplash', 'pexels'] },
        attribution: {
          type: 'object',
          properties: {
            photographer: { type: 'string' },
            photographer_url: { type: 'string' },
            source_url: { type: 'string' },
            description: { type: 'string' },
          },
        },
      },
      required: ['category', 'key', 'url', 'provider'],
    },
  },
  {
    name: 'list_image_slots',
    description:
      'List the current keys in each IMAGES.<category>. When category is omitted or is "services", also reports services_missing: service slugs from src/data/services.ts that do not yet have an IMAGES.services entry.',
    inputSchema: {
      type: 'object',
      properties: {
        category: { type: 'string', enum: CATEGORIES },
      },
    },
  },
]

const server = new Server(
  { name: 'images', version: '0.1.0' },
  { capabilities: { tools: {} } },
)

server.setRequestHandler(ListToolsRequestSchema, async () => ({ tools: TOOLS }))

server.setRequestHandler(CallToolRequestSchema, async (req) => {
  const { name, arguments: args = {} } = req.params
  try {
    let payload
    if (name === 'search_unsplash') payload = await searchUnsplash(args.query, args.count)
    else if (name === 'search_pexels') payload = await searchPexels(args.query, args.count)
    else if (name === 'set_image') payload = await setImage(args)
    else if (name === 'list_image_slots') payload = await listImageSlots(args.category)
    else throw new Error(`Unknown tool: ${name}`)
    return { content: [{ type: 'text', text: JSON.stringify(payload, null, 2) }] }
  } catch (err) {
    return {
      content: [{ type: 'text', text: `Error: ${err.message}` }],
      isError: true,
    }
  }
})

// ----- Self-test mode -------------------------------------------------

if (process.argv.includes('--self-test')) {
  console.log('Image MCP server self-test')
  console.log('  UNSPLASH_ACCESS_KEY:', process.env.UNSPLASH_ACCESS_KEY ? 'set' : 'MISSING')
  console.log('  PEXELS_API_KEY:     ', process.env.PEXELS_API_KEY ? 'set' : 'MISSING')
  const slots = await listImageSlots()
  console.log('\nlist_image_slots() →')
  console.log(JSON.stringify(slots, null, 2))
  process.exit(0)
}

const transport = new StdioServerTransport()
await server.connect(transport)
