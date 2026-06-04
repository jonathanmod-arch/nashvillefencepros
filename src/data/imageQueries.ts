/**
 * Single source of truth for what to search on Pexels per image slot.
 * Edit this file, then run `npm run fetch-images` to refresh URLs.
 */
export const IMAGE_QUERIES = {
  hero: 'cedar wood privacy fence backyard',
  fenceTypes: {
    'wood-privacy': 'cedar wood privacy fence backyard',
    'vinyl': 'white vinyl fence yard',
    'aluminum': 'black aluminum metal fence',
    'chain-link': 'chain link fence yard',
    'horizontal-privacy': 'horizontal wood slat fence modern',
    'farm-ranch': 'split rail farm fence pasture',
    'wrought-iron': 'wrought iron estate fence gate',
    'pet-fence': 'dog backyard pet fence',
    'pool-safety': 'pool safety fence backyard',
  },
  neighborhoods: {
    'belle-meade': 'estate home wrought iron fence',
    'green-hills': 'suburban backyard wood fence',
    'east-nashville': 'craftsman bungalow wood fence',
    'germantown': 'historic townhouse iron fence',
    'brentwood': 'large suburban home aluminum fence',
    'franklin': 'farm white fence rural tennessee',
    'twelve-south': 'horizontal cedar fence urban',
    'sylvan-park': 'cottage home wood fence',
    'hendersonville': 'lakefront home vinyl fence',
    'mount-juliet': 'suburban backyard cedar fence',
    'hermitage': 'wood fence residential backyard',
    'forest-hills': 'estate wood privacy fence',
  },
  resources: {
    'wood-vs-vinyl-nashville': 'cedar fence panels boards',
    'best-fences-for-dogs': 'dog backyard wood fence',
    'pool-fence-safety-tn': 'pool fence safety barrier',
    'metro-nashville-permits': 'wooden fence backyard installation',
    'fence-cost-breakdown': 'fence post construction installation',
    'horizontal-cedar-trend': 'horizontal wood slat fence modern home',
  },
  gallery: [
    'wood privacy fence backyard',
    'aluminum fence yard',
    'white vinyl fence',
    'horizontal wood fence modern',
    'wrought iron gate driveway',
    'tan vinyl fence panels',
    'chain link fence residential',
    'cedar fence boards installation',
    'modern wood gate driveway',
  ],
} as const

export type FenceTypeSlug = keyof typeof IMAGE_QUERIES.fenceTypes
export type NeighborhoodSlug = keyof typeof IMAGE_QUERIES.neighborhoods
export type ResourceSlug = keyof typeof IMAGE_QUERIES.resources
