/**
 * Single source of truth for what to search on Pexels per image slot.
 * Edit this file, then run `npm run fetch-images` to refresh URLs.
 *
 * Query notes:
 * - 2–3 word queries beat 5+ word queries on Pexels search.
 * - The most distinctive noun goes first (e.g. "wrought iron fence",
 *   not "Nashville home wrought iron fence").
 * - Don't include city / state names — Pexels doesn't tag by US city.
 *   Geo signal happens via slot mapping, not query content.
 */
export const IMAGE_QUERIES = {
  hero: 'cedar fence backyard',
  fenceTypes: {
    'wood-privacy': 'cedar privacy fence',
    'vinyl': 'white vinyl fence',
    'aluminum': 'black aluminum fence',
    'chain-link': 'chain link fence',
    'horizontal-privacy': 'modern horizontal fence',
    'farm-ranch': 'split rail farm fence',
    'wrought-iron': 'wrought iron fence gate',
    'pet-fence': 'dog yard fence',
    'pool-safety': 'pool fence aluminum',
  },
  // Neighborhood queries describe the AREA (architecture / setting),
  // not the fence type. Cards read as "this is the look of [area]"
  // rather than another fence close-up.
  neighborhoods: {
    'belle-meade': 'estate driveway gate',
    'green-hills': 'brick home suburban',
    'east-nashville': 'craftsman bungalow porch',
    'germantown': 'brick row house historic',
    'brentwood': 'large suburban home',
    'franklin': 'white farmhouse rural',
    'twelve-south': 'modern home porch',
    'sylvan-park': 'cottage home porch',
    'hendersonville': 'lakefront home',
    'mount-juliet': 'new suburban home',
    'hermitage': 'ranch style home',
    'forest-hills': 'luxury home driveway',
  },
  // Resource images should match the article topic, not the umbrella
  // category — repair articles get repair photos, not generic fence shots.
  resources: {
    'wood-vs-vinyl-nashville': 'cedar fence detail',
    'best-fences-for-dogs': 'dog backyard',
    'pool-fence-safety-tn': 'swimming pool fence',
    'metro-nashville-permits': 'fence post construction',
    'fence-cost-breakdown': 'fence installation work',
    'horizontal-cedar-trend': 'modern horizontal fence',
    'fence-repair-vs-replace-nashville': 'old weathered wood fence',
    'storm-damaged-fence-nashville-insurance': 'fallen tree damage yard',
    'hire-nashville-fence-installer-questions': 'fence contractor installation',
  },
  gallery: [
    'cedar fence',
    'black aluminum fence',
    'white vinyl fence',
    'modern horizontal fence',
    'iron gate',
    'tan vinyl picket',
    'chain link mesh',
    'cedar fence boards',
    'wood driveway gate',
  ],
} as const

export type FenceTypeSlug = keyof typeof IMAGE_QUERIES.fenceTypes
export type NeighborhoodSlug = keyof typeof IMAGE_QUERIES.neighborhoods
export type ResourceSlug = keyof typeof IMAGE_QUERIES.resources
