/**
 * Sitemap + robots.txt + llms.txt generator.
 *
 * Enumerates every public route — 15 static pages plus every dynamic
 * contractor / fence type / neighborhood / resource slug — and writes
 * sitemap.xml, robots.txt, and llms.txt to public/. Everything derives
 * from CITY + the data files so a new city deploy gets its own crawler
 * artifacts without manual editing.
 *
 * Runs automatically as the `prebuild` step, so deployed crawler files
 * are always in sync with the data and config.
 *
 * Manual run:
 *   npx tsx scripts/generate-sitemap.ts
 */
import { writeFileSync, mkdirSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { CONTRACTORS } from '../src/data/contractors'
import { FENCE_TYPES, NEIGHBORHOODS, RESOURCES, RESOURCE_PUBLISHED_AT } from '../src/data/siteData'
import { CITY } from '../src/config/city'

const SITE_URL = CITY.siteUrl

const STATIC_ROUTES: string[] = [
  '/',
  '/contractors',
  '/fence-types',
  '/cost-guide',
  '/permits',
  '/service-areas',
  '/resources',
  '/repair',
  '/commercial-fencing',
  '/pool-fence-code',
  '/historic-overlays',
  '/about',
  '/get-quotes',
  '/advertise',
  '/submit-listing',
  '/privacy',
  '/terms',
]

type UrlEntry = { loc: string; lastmod: string }

const today = new Date().toISOString().slice(0, 10)

const urls: UrlEntry[] = [
  ...STATIC_ROUTES.map((path) => ({ loc: `${SITE_URL}${path}`, lastmod: today })),
  ...FENCE_TYPES.map((t) => ({ loc: `${SITE_URL}/fence-types/${t.slug}`, lastmod: today })),
  ...NEIGHBORHOODS.map((n) => ({ loc: `${SITE_URL}/service-areas/${n.slug}`, lastmod: today })),
  ...CONTRACTORS.map((c) => ({ loc: `${SITE_URL}/contractors/${c.slug}`, lastmod: today })),
  ...RESOURCES.map((r) => ({
    loc: `${SITE_URL}/resources/${r.slug}`,
    lastmod: RESOURCE_PUBLISHED_AT.slice(0, 10),
  })),
]

const escapeXml = (s: string): string =>
  s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${escapeXml(u.loc)}</loc>
    <lastmod>${u.lastmod}</lastmod>
  </url>`,
  )
  .join('\n')}
</urlset>
`

const robotsTxt = `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`

const CORE_PAGES: { path: string; label: string; desc: string }[] = [
  { path: '/', label: 'Home', desc: `Overview of ${CITY.name} fence installation — costs, repair, vetted local contractors, free quotes.` },
  { path: '/contractors', label: 'Find a Pro', desc: `Directory of vetted ${CITY.name} fence installers, gate companies, land surveyors, site prep crews, staining specialists, and outdoor design firms. Filter by area, service category, and project type.` },
  { path: '/service-areas', label: 'Service Areas', desc: `Local pricing, popular styles, and HOA notes for every ${CITY.name}-area city and neighborhood we cover.` },
  { path: '/fence-types', label: 'Fence Types', desc: 'Compare wood privacy, vinyl, aluminum, chain link, horizontal cedar, farm and ranch, wrought iron, pet, and pool safety fencing.' },
  { path: '/cost-guide', label: 'Cost Guide', desc: `Real installed prices for fence installation in ${CITY.name} by material and project size.` },
  { path: '/permits', label: 'Permits and Rules', desc: `${CITY.permitOffice.name} fence permit requirements, height limits, dig-safe 811 protocol, and pool fence code.` },
  { path: '/repair', label: 'Fence Repair', desc: `${CITY.name} fence repair pricing by material and the 60-percent repair-versus-replace rule.` },
  { path: '/commercial-fencing', label: 'Commercial Fencing', desc: `Security fence and access control for ${CITY.name} businesses, multifamily, and industrial sites.` },
  { path: '/pool-fence-code', label: 'Pool Fence Code', desc: `${CITY.poolBarrierCode} pool barrier requirements as enforced in ${CITY.permitOffice.name}.` },
  { path: '/historic-overlays', label: 'Historic Overlay Fence Rules', desc: `${CITY.name} historic overlay district fence approval — submission steps, approved materials.` },
  { path: '/resources', label: 'Resource Center', desc: `In-depth guides for ${CITY.metroLabel} homeowners.` },
  { path: '/get-quotes', label: `Get Free Fence Quotes`, desc: `Submit project details to receive up to three quotes from vetted ${CITY.name} fence pros.` },
  { path: '/submit-listing', label: 'Submit Your Business', desc: `Free listing for verified ${CITY.state} fence, gate, surveying, and outdoor-living contractors.` },
  { path: '/advertise', label: 'Advertise', desc: `Premium directory placement, category sponsorship, and homepage features for ${CITY.name} fence contractors.` },
  { path: '/about', label: 'About', desc: 'Mission, methodology, and disclosure.' },
]

const FENCE_TYPE_DESCRIPTIONS: Record<string, string> = {
  'wood-privacy': `Cedar privacy fencing — materials, installed cost per linear foot, lifespan in ${CITY.metroLabel}.`,
  'vinyl': 'Premium PVC fencing — HOA compatibility, maintenance, cost.',
  'aluminum': 'Ornamental metal fencing for pools and front yards.',
  'chain-link': 'Galvanized and vinyl-coated chain link — residential and commercial use.',
  'horizontal-privacy': `Modern slat-style cedar fencing popular in design-forward ${CITY.name} neighborhoods.`,
  'farm-ranch': `Four-board and woven-wire fencing for acreage across ${CITY.metroLabel}.`,
  'wrought-iron': 'Estate-grade welded iron fencing.',
  'pet-fence': `Containment solutions for ${CITY.name} dog owners.`,
  'pool-safety': 'ISPSC-compliant pool barriers.',
}

const llmsLines: string[] = []
llmsLines.push(`# ${CITY.siteName}`)
llmsLines.push('')
llmsLines.push(`> ${CITY.siteName} is an independent directory and resource platform for fence installation in the ${CITY.name}, ${CITY.stateAbbr} metro area. We connect homeowners with vetted local fence contractors and publish plain-English guides on cost, permits, materials, repair, and adjacent outdoor-living services. Coverage spans ${CITY.counties.join(', ')} counties.`)
llmsLines.push('')
llmsLines.push('## Core pages')
llmsLines.push('')
for (const p of CORE_PAGES) {
  llmsLines.push(`- [${p.label}](${SITE_URL}${p.path}): ${p.desc}`)
}
llmsLines.push('')
llmsLines.push('## Fence type pages')
llmsLines.push('')
for (const t of FENCE_TYPES) {
  const desc = FENCE_TYPE_DESCRIPTIONS[t.slug] ?? `${t.name} fence installation in ${CITY.name}.`
  llmsLines.push(`- [${t.name} Fence Installation ${CITY.name}](${SITE_URL}/fence-types/${t.slug}): ${desc}`)
}
llmsLines.push('')
llmsLines.push('## Service area pages')
llmsLines.push('')
for (const n of NEIGHBORHOODS) {
  llmsLines.push(`- [${n.name} Fence Installation](${SITE_URL}/service-areas/${n.slug}): ${n.popularStyle}, typical project ${n.avgCost}.`)
}
llmsLines.push('')
llmsLines.push('## Resource articles')
llmsLines.push('')
for (const r of RESOURCES) {
  llmsLines.push(`- [${r.title}](${SITE_URL}/resources/${r.slug}): ${r.excerpt}`)
}
llmsLines.push('')
llmsLines.push('## Legal')
llmsLines.push('')
llmsLines.push(`- [Privacy Policy](${SITE_URL}/privacy): Data collection, sharing, and choices.`)
llmsLines.push(`- [Terms of Use](${SITE_URL}/terms): Site terms and contractor referral disclaimer.`)
llmsLines.push('')
llmsLines.push('## Optional')
llmsLines.push('')
llmsLines.push(`- [Sitemap](${SITE_URL}/sitemap.xml): XML sitemap of every indexed page.`)
llmsLines.push(`- [Robots](${SITE_URL}/robots.txt): Crawler directives.`)
const llmsTxt = llmsLines.join('\n') + '\n'

const here = dirname(fileURLToPath(import.meta.url))
const publicDir = resolve(here, '..', 'public')
mkdirSync(publicDir, { recursive: true })
writeFileSync(resolve(publicDir, 'sitemap.xml'), sitemapXml, 'utf8')
writeFileSync(resolve(publicDir, 'robots.txt'), robotsTxt, 'utf8')
writeFileSync(resolve(publicDir, 'llms.txt'), llmsTxt, 'utf8')

console.log(`Wrote ${urls.length} URLs to public/sitemap.xml`)
console.log(`Wrote public/robots.txt`)
console.log(`Wrote public/llms.txt`)
