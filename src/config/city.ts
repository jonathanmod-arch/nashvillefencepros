import type { CityConfig } from './types'
import { nashville } from './cities/nashville/config'

/**
 * The active city for this build. Selected by VITE_CITY env var at build
 * time. If the env var is missing or doesn't match a known city, falls back
 * to Nashville.
 *
 * To ship a new city:
 *   1. Create src/config/cities/<id>/config.ts implementing CityConfig
 *   2. Import it below and add to the CITIES map
 *   3. Set VITE_CITY=<id> in the Vercel project for that city's deployment
 *
 * Per-city data (contractors, articles, neighborhoods) lives next to the
 * config in the same folder so a new city is a single directory drop-in.
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
