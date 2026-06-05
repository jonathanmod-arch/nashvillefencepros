/**
 * Sitemap + robots.txt generator.
 *
 * Enumerates every public route — 15 static pages plus every dynamic
 * contractor / fence type / neighborhood / resource slug — and writes the
 * resulting XML to public/sitemap.xml. Also writes a matching robots.txt
 * that points Google at the sitemap.
 *
 * Runs automatically as the `prebuild` step, so the deployed sitemap is
 * always in sync with the data files.
 *
 * Manual run:
 *   npx tsx scripts/generate-sitemap.ts
 */
import { writeFileSync, mkdirSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { CONTRACTORS } from '../src/data/contractors'
import { FENCE_TYPES, NEIGHBORHOODS, RESOURCES, RESOURCE_PUBLISHED_AT } from '../src/data/siteData'

const SITE_URL = 'https://nashvillefenceguide.com'

const STATIC_ROUTES: string[] = [
  '/',
  '/contractors',
  '/fence-types',
  '/cost-guide',
  '/permits',
  '/neighborhoods',
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
  ...NEIGHBORHOODS.map((n) => ({ loc: `${SITE_URL}/neighborhoods/${n.slug}`, lastmod: today })),
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

const here = dirname(fileURLToPath(import.meta.url))
const publicDir = resolve(here, '..', 'public')
mkdirSync(publicDir, { recursive: true })
writeFileSync(resolve(publicDir, 'sitemap.xml'), sitemapXml, 'utf8')
writeFileSync(resolve(publicDir, 'robots.txt'), robotsTxt, 'utf8')

console.log(`Wrote ${urls.length} URLs to public/sitemap.xml`)
console.log(`Wrote public/robots.txt`)
