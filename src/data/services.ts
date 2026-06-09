import { IMAGES } from './imageUrls'

/**
 * Service catalog — single source of truth for every service page on the site.
 *
 * Each entry powers `/services/<slug>` (Nashville-wide detail page) and, when
 * `cityPages: true`, the cross-product `/services/<slug>/<area-slug>` routes
 * for each NEIGHBORHOODS entry.
 *
 * Buckets group services for the hub at `/services` and the bucket landings
 * at `/services/<bucket-slug>`. Pages render through `src/pages/Services.tsx`
 * which branches on URL shape (hub vs bucket vs detail vs city overlay).
 */

export const SERVICE_BUCKETS = [
  {
    slug: 'fence-installation',
    name: 'Fence Installation',
    summary: 'Professional installation in every major material and style.',
    eyebrow: 'Installation',
  },
  {
    slug: 'specialty',
    name: 'Specialty & Purpose-Built Fencing',
    summary: 'Fencing designed for a specific job — privacy, pools, pets, security, sound, gardens.',
    eyebrow: 'Specialty',
  },
  {
    slug: 'gates',
    name: 'Gates & Access Control',
    summary: 'Walk gates, driveway gates, automated systems, operators, and access control hardware.',
    eyebrow: 'Gates',
  },
  {
    slug: 'repair',
    name: 'Repair, Restoration & Maintenance',
    summary: 'Bring an old fence back to life — repairs, replacements, staining, washing, ongoing maintenance.',
    eyebrow: 'Repair',
  },
  {
    slug: 'outdoor-structures',
    name: 'Related Outdoor Structures',
    summary: 'Pergolas, railings, retaining walls, privacy screens, dumpster enclosures.',
    eyebrow: 'Structures',
  },
  {
    slug: 'site-prep',
    name: 'Project Planning & Site Prep',
    summary: 'Everything before the first post goes in — surveys, permits, HOA approval, demo, grading.',
    eyebrow: 'Site Prep',
  },
  {
    slug: 'commercial-agricultural',
    name: 'Commercial & Agricultural',
    summary: 'Warehouse, industrial, sports field, livestock, municipal, and government fencing.',
    eyebrow: 'Commercial',
  },
  {
    slug: 'custom',
    name: 'Custom Work & Added Value',
    summary: 'Custom design, real estate inspections, warranty programs, ongoing maintenance plans.',
    eyebrow: 'Custom',
  },
] as const

export type ServiceBucket = (typeof SERVICE_BUCKETS)[number]['slug']

export type Service = {
  slug: string
  bucket: ServiceBucket
  name: string
  short?: string
  pageTitle?: string
  description: string
  features: string[]
  bestFor: string
  priceLow?: number
  priceHigh?: number
  unitCode?: 'FOT' | 'HUR' | 'PCE'
  img: string
  cityPages: boolean
  keywords?: string[]
}

export const SERVICES: Service[] = [
  // === Fence Installation ===
  {
    slug: 'wood-fence',
    bucket: 'fence-installation',
    name: 'Wood Fence Installation',
    short: 'Wood',
    description:
      'Cedar, pressure-treated pine, and redwood fence installation across Nashville and Middle Tennessee. Privacy, picket, split-rail, and shadow-box styles, set in concrete with code-compliant post depth.',
    features: ['Cedar, pine, redwood', 'Privacy, picket, split-rail', '6–8 ft heights', '15–25 year lifespan'],
    bestFor: 'Privacy, traditional aesthetics, dog owners, classic Middle Tennessee curb appeal',
    priceLow: 22,
    priceHigh: 35,
    unitCode: 'FOT',
    img: IMAGES.fenceTypes['wood-privacy'],
    cityPages: true,
    keywords: ['wood fence installation', 'cedar fence', 'privacy fence', 'picket fence'],
  },
  {
    slug: 'vinyl-fence',
    bucket: 'fence-installation',
    name: 'Vinyl Fence Installation',
    short: 'Vinyl',
    description:
      'Premium vinyl and PVC fence installation in Nashville. Low-maintenance privacy and decorative panels in white, tan, and woodgrain finishes — no staining, no rot, no rust, lifetime manufacturer warranties.',
    features: ['Zero maintenance', 'Lifetime warranties common', 'White, tan, woodgrain', 'HOA-friendly'],
    bestFor: 'Long-term value, modern subdivisions, HOA-restricted yards, low-effort homeowners',
    priceLow: 32,
    priceHigh: 48,
    unitCode: 'FOT',
    img: IMAGES.fenceTypes['vinyl'],
    cityPages: true,
    keywords: ['vinyl fence installation', 'PVC fence', 'maintenance-free fence'],
  },
  {
    slug: 'aluminum-fence',
    bucket: 'fence-installation',
    name: 'Aluminum Fence Installation',
    short: 'Aluminum',
    description:
      'Powder-coated ornamental aluminum fence installation in Nashville. The wrought-iron look at a fraction of the weight and price, pool-code compliant, no rust, dominant in Belle Meade, Forest Hills, and Brentwood estates.',
    features: ['Rust-proof', 'Pool-code compliant', 'Sloped-yard friendly', '25+ year lifespan'],
    bestFor: 'Curb appeal, pools, estate properties, sloped lots',
    priceLow: 38,
    priceHigh: 62,
    unitCode: 'FOT',
    img: IMAGES.fenceTypes['aluminum'],
    cityPages: true,
    keywords: ['aluminum fence installation', 'ornamental aluminum', 'metal fence'],
  },
  {
    slug: 'chain-link-fence',
    bucket: 'fence-installation',
    name: 'Chain Link Fence Installation',
    short: 'Chain Link',
    description:
      'Galvanized and vinyl-coated chain link fence installation in Nashville. Affordable, durable, quick to install, available in classic silver or black vinyl-coated for residential and commercial use.',
    features: ['Lowest installed cost', 'Black vinyl-coated upgrade', 'Quick install', '20+ year lifespan'],
    bestFor: 'Pet containment, large lots, budget projects, side and rear runs',
    priceLow: 12,
    priceHigh: 22,
    unitCode: 'FOT',
    img: IMAGES.fenceTypes['chain-link'],
    cityPages: true,
    keywords: ['chain link fence installation', 'galvanized fence', 'budget fence'],
  },
  {
    slug: 'horizontal-cedar-fence',
    bucket: 'fence-installation',
    name: 'Horizontal Cedar Fence Installation',
    short: 'Horizontal Cedar',
    description:
      'On-trend horizontal cedar slat fence installation in Nashville. The signature modern look for East Nashville, 12 South, Sylvan Park, and design-forward builds. Steel-post-core spec available for long-term straightness.',
    features: ['Architectural look', 'Cedar or composite', 'Steel-post-core option', 'Mixed wood/metal builds'],
    bestFor: 'Modern homes, East Nashville and 12 South, design-forward yards',
    priceLow: 38,
    priceHigh: 58,
    unitCode: 'FOT',
    img: IMAGES.fenceTypes['horizontal-privacy'],
    cityPages: true,
    keywords: ['horizontal cedar fence', 'modern fence', 'horizontal slat fence'],
  },

  // === Specialty & Purpose-Built ===
  {
    slug: 'privacy-fence',
    bucket: 'specialty',
    name: 'Privacy Fence Installation',
    short: 'Privacy',
    description:
      'Full-height privacy fence installation in Nashville. 6 ft and 8 ft solid-panel screening for backyards, patios, and pools — cedar, vinyl, or composite, with code-compliant front/side yard transitions.',
    features: ['6 ft and 8 ft heights', 'Wood, vinyl, composite', 'HOA-approved panel styles', 'Full backyard screening'],
    bestFor: 'Backyard privacy, pool screening, urban infill lots, sound buffer',
    priceLow: 24,
    priceHigh: 48,
    unitCode: 'FOT',
    img: IMAGES.fenceTypes['wood-privacy'],
    cityPages: true,
    keywords: ['privacy fence installation', 'tall privacy fence', 'backyard privacy'],
  },
  {
    slug: 'pool-fence',
    bucket: 'specialty',
    name: 'Pool Safety Fence Installation',
    short: 'Pool',
    description:
      'Pool fence installation in Nashville that meets the 2018 ISPSC barrier code. Aluminum, mesh, glass, and narrow-profile vinyl options with self-closing self-latching gates and inspector-ready hardware.',
    features: ['ISPSC code compliant', 'Self-closing self-latching gate', 'Aluminum, mesh, or glass', 'Passes Metro inspection'],
    bestFor: 'In-ground pools, child safety, insurance compliance, Belle Meade and Forest Hills estate pools',
    priceLow: 24,
    priceHigh: 52,
    unitCode: 'FOT',
    img: IMAGES.fenceTypes['pool-safety'] ?? IMAGES.fenceTypes['aluminum'],
    cityPages: true,
    keywords: ['pool fence installation', 'pool safety barrier', 'ISPSC pool fence'],
  },
  {
    slug: 'security-fence',
    bucket: 'specialty',
    name: 'Security & Perimeter Fence Installation',
    short: 'Security',
    description:
      'Security and perimeter fence installation in Nashville for homes, businesses, and industrial sites. Anti-climb heights, welded mesh, ornamental steel, and access-control integration for high-value properties.',
    features: ['Anti-climb design', 'Welded mesh or ornamental steel', 'Integrated access control', 'Residential and commercial'],
    bestFor: 'High-value homes, commercial perimeters, industrial sites, gated communities',
    priceLow: 38,
    priceHigh: 95,
    unitCode: 'FOT',
    img: IMAGES.fenceTypes['wrought-iron'] ?? IMAGES.fenceTypes['aluminum'],
    cityPages: true,
    keywords: ['security fence installation', 'perimeter fence', 'commercial fence'],
  },
  {
    slug: 'pet-fence',
    bucket: 'specialty',
    name: 'Pet & Dog Fence Installation',
    short: 'Pet Fence',
    description:
      'Pet-rated picket, chain link, and invisible dog fence installation in Nashville. Boundary wire and GPS-collar systems trained to your yard, plus traditional containment with dig guards and jump-proof heights.',
    features: ['Pet-rated picket and chain link', 'Invisible boundary systems', 'Dig guards and jump-proof heights', 'Containment training included'],
    bestFor: 'Dog owners, multi-dog households, large lots, escape-artist breeds',
    priceLow: 4,
    priceHigh: 12,
    unitCode: 'FOT',
    img: IMAGES.fenceTypes['pet-fence'] ?? IMAGES.fenceTypes['chain-link'],
    cityPages: true,
    keywords: ['pet fence installation', 'dog fence', 'invisible fence'],
  },
  {
    slug: 'hidden-pet-fence',
    bucket: 'specialty',
    name: 'Hidden Dog Fence',
    short: 'Hidden Pet Fence',
    pageTitle: 'Hidden Dog Fence Installation in Nashville',
    description:
      'Nashville hidden dog fence installers handle buried boundary wire systems, GPS collar setups, and HOA-friendly invisible dog fences. Includes yard mapping, containment training, and a money-back trial period.',
    features: ['Buried boundary wire (no visible fence)', 'GPS or wireless collar systems', 'HOA-friendly invisible install', 'Containment training included'],
    bestFor: 'Nashville dog owners with HOA-restricted yards, large lots, or homes where visible fencing is not allowed',
    priceLow: 6,
    priceHigh: 14,
    unitCode: 'FOT',
    img: IMAGES.fenceTypes['hidden-pet-fence'] ?? IMAGES.fenceTypes['pet-fence'],
    cityPages: true,
    keywords: ['hidden dog fence', 'invisible dog fence', 'buried wire fence', 'nashville hidden dog fence installers'],
  },

  // === Gates ===
  {
    slug: 'driveway-gates',
    bucket: 'gates',
    name: 'Driveway Gate Installation',
    short: 'Driveway Gates',
    description:
      'Driveway gate installation in Nashville — ornamental iron, aluminum, and wood gates with manual or automated operators. Includes column work, trenching, electrical, and UL325-compliant safety devices.',
    features: ['Ornamental iron, aluminum, or wood', 'Manual or automated operators', 'LiftMaster / FAAC operator brands', 'UL325 safety devices standard'],
    bestFor: 'Estates, gated driveways, security-conscious homeowners, automated entries',
    priceLow: 2000,
    priceHigh: 45000,
    unitCode: 'PCE',
    img: IMAGES.fenceTypes['wrought-iron'] ?? IMAGES.fenceTypes['aluminum'],
    cityPages: true,
    keywords: ['driveway gate installation', 'automatic gate', 'electric gate'],
  },

  // === Repair ===
  {
    slug: 'fence-repair',
    bucket: 'repair',
    name: 'Fence Repair & Restoration',
    short: 'Repair',
    description:
      'Fence repair and restoration in Nashville for wood, vinyl, chain link, aluminum, wrought iron, and pet fences. Post replacement, leaning correction, board/panel swaps, hardware fixes, and seasonal maintenance.',
    features: ['Post, board, and panel replacement', 'Leaning fence correction', 'Hardware and gate repair', 'Material-specific specialists'],
    bestFor: 'Storm damage, aging fences, sticking gates, pre-sale property prep',
    priceLow: 8,
    priceHigh: 36,
    unitCode: 'FOT',
    img: IMAGES.fenceTypes['chain-link'],
    cityPages: true,
    keywords: ['fence repair', 'fence restoration', 'leaning fence repair', 'post replacement'],
  },
]

export const servicesByBucket = (bucket: ServiceBucket): Service[] =>
  SERVICES.filter((s) => s.bucket === bucket)

export const findService = (slug: string): Service | undefined =>
  SERVICES.find((s) => s.slug === slug)

export const findBucket = (slug: string) =>
  SERVICE_BUCKETS.find((b) => b.slug === slug)
