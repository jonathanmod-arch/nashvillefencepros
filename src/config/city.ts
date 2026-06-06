import type { CityConfig } from './types'
import { nashville } from './cities/nashville/config'

/**
 * The active city for this build. Selected by VITE_CITY env var at build
 * time. If the env var is missing or doesn't match a known city, falls back
 * to Nashville.
 *
 * ─── Shipping a new city ──────────────────────────────────────────────
 *
 * The site shell (Navbar, Footer, page meta, JSON-LD schema, index.html,
 * sitemap.xml, llms.txt) reads from CITY and swaps automatically. The
 * per-city *content* — contractors, neighborhoods, article bodies — lives
 * in src/data/ and must be edited/replaced for the new city.
 *
 *   1. Create src/config/cities/<id>/config.ts implementing CityConfig.
 *   2. Import it below and add it to the CITIES map keyed by <id>.
 *   3. Replace per-city content in src/data/ to match:
 *      - contractors.ts (CONTRACTORS, AREAS, SAMPLE_REVIEWS)
 *      - siteData.ts    (NEIGHBORHOODS, RESOURCES, FAQS, BENEFITS, STATS)
 *      - imageUrls.ts   (neighborhoods key + any resource images)
 *   4. Set VITE_CITY=<id> on the Vercel project for that city's domain.
 *   5. Deploy. The prebuild script regenerates sitemap + llms.txt from
 *      the active CITY + data, and Vite swaps the index.html tokens.
 */
const CITIES: Record<string, CityConfig> = {
  nashville,
}

const viteCity =
  typeof import.meta !== 'undefined'
    ? (import.meta as { env?: { VITE_CITY?: string } }).env?.VITE_CITY
    : undefined
const nodeCity = typeof process !== 'undefined' ? process.env?.VITE_CITY : undefined
const activeId = viteCity ?? nodeCity ?? 'nashville'

export const CITY: CityConfig = CITIES[activeId] ?? nashville

export type { CityConfig } from './types'
