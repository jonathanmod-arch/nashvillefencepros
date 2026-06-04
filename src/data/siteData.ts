export const COMPANY = {
  name: 'Nashville Fence Pros',
  phone: '(615) 555-0100',
  phoneRaw: '+16155550100',
  email: 'hello@nashvillefencepros.com',
  address: 'Nashville, TN',
  hours: 'Mon–Sat, 7:00 AM – 7:00 PM',
}

export const FENCE_TYPES = [
  {
    slug: 'wood-privacy',
    name: 'Wood Privacy',
    short: 'Wood',
    priceLow: 22,
    priceHigh: 35,
    description:
      'Classic cedar and pressure-treated pine privacy fences. The most popular Nashville choice for backyards, offering warmth, full screening, and easy customization.',
    img: 'https://images.unsplash.com/photo-1599644425057-08538b2c08c4?auto=format&fit=crop&w=1200&q=80',
    features: ['6–8 ft height options', 'Cedar, pine, redwood', '15–25 year lifespan'],
    bestFor: 'Privacy, traditional aesthetics, dog owners',
  },
  {
    slug: 'vinyl',
    name: 'Premium Vinyl',
    short: 'Vinyl',
    priceLow: 32,
    priceHigh: 48,
    description:
      'Maintenance-free vinyl panels in white, tan, and woodgrain finishes. No staining, no rot, and a clean modern look that suits new-build Nashville subdivisions.',
    img: 'https://images.unsplash.com/photo-1595407753234-0882f1e77954?auto=format&fit=crop&w=1200&q=80',
    features: ['Zero maintenance', 'Lifetime warranties common', 'Will not rot or rust'],
    bestFor: 'Long-term value, modern subdivisions, HOA-friendly',
  },
  {
    slug: 'aluminum',
    name: 'Ornamental Aluminum',
    short: 'Aluminum',
    priceLow: 38,
    priceHigh: 62,
    description:
      'Elegant powder-coated aluminum with the look of wrought iron at a fraction of the weight. The dominant choice in Belle Meade, Forest Hills, and Brentwood estates.',
    img: 'https://images.unsplash.com/photo-1568833312500-cd6a64fda4ef?auto=format&fit=crop&w=1200&q=80',
    features: ['Rust-proof', 'Pool-code compliant', 'Sloped-yard friendly'],
    bestFor: 'Curb appeal, pools, prestige neighborhoods',
  },
  {
    slug: 'chain-link',
    name: 'Galvanized Chain Link',
    short: 'Chain Link',
    priceLow: 12,
    priceHigh: 22,
    description:
      'Affordable, durable, and quick to install. Available in classic silver or vinyl-coated black for a more refined backyard look.',
    img: 'https://images.unsplash.com/photo-1568374346154-6b8b75c00ab1?auto=format&fit=crop&w=1200&q=80',
    features: ['Lowest cost option', 'Black vinyl-coated upgrade', '20+ year lifespan'],
    bestFor: 'Pet containment, large lots, budget projects',
  },
  {
    slug: 'horizontal-privacy',
    name: 'Modern Horizontal Privacy',
    short: 'Horizontal',
    priceLow: 38,
    priceHigh: 58,
    description:
      'On-trend horizontal slat fencing in cedar or composite. The signature look for East Nashville, 12 South, and Sylvan Park modern builds.',
    img: 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?auto=format&fit=crop&w=1200&q=80',
    features: ['Architectural look', 'Cedar or composite', 'Mixed wood / metal options'],
    bestFor: 'Modern homes, East Nashville, design-forward yards',
  },
  {
    slug: 'farm-ranch',
    name: 'Farm & Ranch',
    short: 'Farm',
    priceLow: 8,
    priceHigh: 18,
    description:
      'Four-board, split-rail, and high-tensile wire fencing for acreage in Williamson and Sumner counties. Built for horses, livestock, and large property lines.',
    img: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80',
    features: ['Four-board, split-rail, wire', 'Livestock-safe spacing', 'Acreage-ready crews'],
    bestFor: 'Acreage, horses, rural Williamson/Sumner counties',
  },
]

export const NEIGHBORHOODS = [
  {
    slug: 'belle-meade',
    name: 'Belle Meade',
    zip: '37205',
    img: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80',
    popularStyle: 'Ornamental Aluminum & Iron',
    avgCost: '$8,400 – $14,200',
    note: 'Estate lots, historic overlay rules. Aluminum and wrought iron dominate for both pools and front-yard estate fencing.',
  },
  {
    slug: 'green-hills',
    name: 'Green Hills',
    zip: '37215',
    img: 'https://images.unsplash.com/photo-1592595896616-c37162298647?auto=format&fit=crop&w=1200&q=80',
    popularStyle: 'Wood Privacy & Aluminum',
    avgCost: '$5,800 – $9,800',
    note: 'Family neighborhoods with mature trees. Cedar privacy backyards paired with aluminum side gates are typical.',
  },
  {
    slug: 'east-nashville',
    name: 'East Nashville',
    zip: '37206',
    img: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1200&q=80',
    popularStyle: 'Horizontal Modern Cedar',
    avgCost: '$4,200 – $7,800',
    note: 'Design-forward bungalows. Horizontal slat cedar and mixed wood-metal fences define the look. Watch for historic overlays.',
  },
  {
    slug: 'germantown',
    name: 'Germantown',
    zip: '37208',
    img: 'https://images.unsplash.com/photo-1572120360610-d971b9d7767c?auto=format&fit=crop&w=1200&q=80',
    popularStyle: 'Iron & Vinyl Privacy',
    avgCost: '$4,600 – $8,400',
    note: 'Historic district with strict design review. Wrought-iron front, vinyl or wood privacy rear is the standard.',
  },
  {
    slug: 'brentwood',
    name: 'Brentwood',
    zip: '37027',
    img: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1200&q=80',
    popularStyle: 'Aluminum & Wood Privacy',
    avgCost: '$6,400 – $11,800',
    note: 'Williamson County. HOA-driven aluminum front fencing with cedar privacy backyards. Pool-code compliance is critical.',
  },
  {
    slug: 'franklin',
    name: 'Franklin',
    zip: '37064',
    img: 'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&w=1200&q=80',
    popularStyle: 'Four-Board & Aluminum',
    avgCost: '$5,200 – $12,000',
    note: 'Mix of estate lots and acreage. Four-board farm fence is common on larger Williamson County parcels.',
  },
  {
    slug: 'twelve-south',
    name: '12 South',
    zip: '37204',
    img: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80',
    popularStyle: 'Horizontal Cedar & Iron',
    avgCost: '$4,400 – $7,600',
    note: 'Trendy urban infill. Tight lots favor 6 ft horizontal cedar with steel gate hardware.',
  },
  {
    slug: 'sylvan-park',
    name: 'Sylvan Park',
    zip: '37209',
    img: 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?auto=format&fit=crop&w=1200&q=80',
    popularStyle: 'Wood Privacy & Modern Horizontal',
    avgCost: '$4,000 – $7,200',
    note: 'Walkable West Nashville. Mix of classic dog-ear cedar and modern horizontal builds.',
  },
  {
    slug: 'hendersonville',
    name: 'Hendersonville',
    zip: '37075',
    img: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1200&q=80',
    popularStyle: 'Vinyl Privacy & Aluminum',
    avgCost: '$4,800 – $8,800',
    note: 'Sumner County waterfront and subdivision homes. Vinyl is dominant for HOA-compliant privacy.',
  },
  {
    slug: 'mount-juliet',
    name: 'Mount Juliet',
    zip: '37122',
    img: 'https://images.unsplash.com/photo-1572120360610-d971b9d7767c?auto=format&fit=crop&w=1200&q=80',
    popularStyle: 'Wood Privacy & Chain Link',
    avgCost: '$3,800 – $7,200',
    note: 'Growing Wilson County suburb. New construction favors 6 ft cedar; chain link still common on larger lots.',
  },
  {
    slug: 'hermitage',
    name: 'Hermitage',
    zip: '37076',
    img: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80',
    popularStyle: 'Wood Privacy & Chain Link',
    avgCost: '$3,400 – $6,400',
    note: 'Established East Davidson County neighborhoods with practical wood privacy fencing throughout.',
  },
  {
    slug: 'forest-hills',
    name: 'Forest Hills',
    zip: '37215',
    img: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1200&q=80',
    popularStyle: 'Aluminum & Cedar Privacy',
    avgCost: '$7,800 – $13,400',
    note: 'Larger lots and rolling terrain. Sloped-yard aluminum and tall cedar privacy panels are most requested.',
  },
]

export const CONTRACTORS = [
  {
    name: 'Music City Fence Co.',
    rating: 4.9,
    reviews: 312,
    areas: ['Nashville', 'Brentwood', 'Franklin'],
    specialties: ['Wood Privacy', 'Aluminum', 'Custom Gates'],
    yearsInBusiness: 18,
    licensed: true,
    insured: true,
    blurb:
      'Family-owned since 2006. Known for crisp cedar privacy installs and same-week scheduling across Davidson and Williamson counties.',
  },
  {
    name: 'Tennessee Fence Pros',
    rating: 4.8,
    reviews: 248,
    areas: ['Nashville', 'Hendersonville', 'Mt. Juliet'],
    specialties: ['Vinyl', 'Chain Link', 'Farm Fence'],
    yearsInBusiness: 22,
    licensed: true,
    insured: true,
    blurb:
      'Veteran-led crew serving all of Middle Tennessee. Strong on vinyl and large-acreage farm fence with in-house dig-safe coordination.',
  },
  {
    name: 'East Side Fence Company',
    rating: 4.9,
    reviews: 187,
    areas: ['East Nashville', '12 South', 'Germantown'],
    specialties: ['Horizontal Cedar', 'Modern Steel', 'Designer Gates'],
    yearsInBusiness: 9,
    licensed: true,
    insured: true,
    blurb:
      'Boutique design-build crew specializing in horizontal cedar, blackened steel, and architectural gate hardware for urban infill.',
  },
  {
    name: 'Belle Meade Fence & Gate',
    rating: 5.0,
    reviews: 142,
    areas: ['Belle Meade', 'Green Hills', 'Forest Hills'],
    specialties: ['Wrought Iron', 'Aluminum', 'Estate Gates'],
    yearsInBusiness: 27,
    licensed: true,
    insured: true,
    blurb:
      'Three decades of estate fencing. Ornamental aluminum, custom iron, and automated entry gates for West Nashville luxury homes.',
  },
  {
    name: 'Cumberland Fence Builders',
    rating: 4.7,
    reviews: 401,
    areas: ['Nashville Metro', 'Hermitage', 'Antioch'],
    specialties: ['Wood', 'Chain Link', 'Repairs'],
    yearsInBusiness: 14,
    licensed: true,
    insured: true,
    blurb:
      'High-volume residential crew with the fastest turnarounds in the region. Strong fit for straightforward 6 ft cedar and chain link installs.',
  },
  {
    name: 'Heritage Hills Fencing',
    rating: 4.9,
    reviews: 96,
    areas: ['Franklin', 'Brentwood', 'Nolensville'],
    specialties: ['Four-Board', 'Aluminum', 'Horse Fence'],
    yearsInBusiness: 16,
    licensed: true,
    insured: true,
    blurb:
      'Williamson County specialists in four-board farm fence, horse-safe wire, and aluminum entry gates for acreage properties.',
  },
]

export const RESOURCES = [
  {
    slug: 'wood-vs-vinyl-nashville',
    title: 'Wood vs. Vinyl: Which Fence Wins in Nashville?',
    category: 'Comparison',
    readTime: '7 min',
    excerpt:
      'How Middle Tennessee humidity, freeze-thaw cycles, and HOA rules tip the scale between cedar privacy and premium vinyl.',
    img: 'https://images.unsplash.com/photo-1599644425057-08538b2c08c4?auto=format&fit=crop&w=1200&q=80',
  },
  {
    slug: 'best-fences-for-dogs',
    title: 'The Best Fences for Dogs in Nashville Yards',
    category: 'Pets',
    readTime: '6 min',
    excerpt:
      'Climb-proof heights, dig guards, and material picks that keep golden retrievers in and coyotes out across Davidson County.',
    img: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=1200&q=80',
  },
  {
    slug: 'pool-fence-safety-tn',
    title: 'Pool Fence Safety Laws in Tennessee',
    category: 'Compliance',
    readTime: '5 min',
    excerpt:
      'A homeowner-friendly walkthrough of the 2018 ISPSC barrier code, self-closing gates, and 4 ft minimum requirements.',
    img: 'https://images.unsplash.com/photo-1568833312500-cd6a64fda4ef?auto=format&fit=crop&w=1200&q=80',
  },
  {
    slug: 'metro-nashville-permits',
    title: 'Metro Nashville Fence Permit Guide',
    category: 'Permits',
    readTime: '8 min',
    excerpt:
      'When you do (and do not) need a permit, height limits by yard, and how to handle historic overlay districts.',
    img: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1200&q=80',
  },
  {
    slug: 'fence-cost-breakdown',
    title: 'Anatomy of a Nashville Fence Quote',
    category: 'Cost',
    readTime: '9 min',
    excerpt:
      'Line-item analysis: materials, labor, post-setting, gates, and the hidden costs that surprise first-time buyers.',
    img: 'https://images.unsplash.com/photo-1595407753234-0882f1e77954?auto=format&fit=crop&w=1200&q=80',
  },
  {
    slug: 'horizontal-cedar-trend',
    title: 'Why Horizontal Cedar Took Over East Nashville',
    category: 'Trends',
    readTime: '5 min',
    excerpt:
      'The design history behind the slat-style fence dominating East Nashville, 12 South, and Sylvan Park bungalows.',
    img: 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?auto=format&fit=crop&w=1200&q=80',
  },
]

export const FAQS = [
  {
    q: 'Do I need a permit to install a fence in Nashville?',
    a: 'In most cases Metro Nashville does not require a permit for a standard residential fence under 8 ft in rear/side yards and under 4 ft in front yards. Permits are required for fences in flood zones, historic overlays (Germantown, parts of East Nashville), and any fence over 8 ft. Always confirm with Metro Codes before breaking ground.',
  },
  {
    q: 'How tall can my fence be in Nashville?',
    a: 'Metro Nashville code allows up to 8 ft in rear and side yards. Front yards are limited to 3.5 ft for solid privacy fences and 4 ft for open-style fences (picket, aluminum, ornamental). Corner lots and double-frontage lots have additional setback rules.',
  },
  {
    q: 'Do I have to call before digging fence posts?',
    a: 'Yes — Tennessee state law requires you (or your contractor) to call 811 at least 3 business days before digging. Tennessee 811 will mark public utilities for free. Hitting a gas, fiber, or water line can result in thousands of dollars in damages and fines.',
  },
  {
    q: 'How much does a fence cost in Nashville per linear foot?',
    a: 'Installed prices in Middle Tennessee typically run: chain link $12–$22/ft, wood privacy $22–$35/ft, vinyl $32–$48/ft, horizontal cedar $38–$58/ft, ornamental aluminum $38–$62/ft. Gates, demo of old fence, and difficult terrain add to the total.',
  },
  {
    q: 'Do my neighbor and I split the cost of a shared fence?',
    a: 'Tennessee has no statewide "good neighbor" cost-sharing statute, so cost-splitting is voluntary. Most Nashville neighbors agree to split if both parties want the fence — get the agreement in writing and clarify ownership of the finished (smooth) side.',
  },
  {
    q: 'What is the most durable fence material for Tennessee weather?',
    a: 'Ornamental aluminum and premium vinyl handle Middle Tennessee humidity, freeze-thaw cycles, and summer storms best. Cedar performs well when stained every 2–3 years. Pressure-treated pine is the most affordable but needs the most upkeep.',
  },
  {
    q: 'How long does fence installation take?',
    a: 'A typical 150–200 linear-ft residential install takes 2–4 days for wood or vinyl and 1–3 days for chain link. Aluminum and custom gates can extend timelines. Concrete-set posts add a 24–48 hour cure window before panels go up.',
  },
  {
    q: 'Will an HOA approve my fence in Brentwood or Franklin?',
    a: 'Most Williamson County HOAs require architectural review before installation. Aluminum and vinyl in approved colors are usually fast-tracked. Wood privacy is often approved with a uniform 6 ft height. Submit plans and a material sample before ordering.',
  },
]

export const BENEFITS = [
  {
    title: 'Privacy',
    body: 'Block sight lines from busy streets and close-set neighbors. 6 ft cedar or vinyl is the Nashville standard for full screening.',
    icon: 'eye-off',
  },
  {
    title: 'Security',
    body: 'A defined perimeter deters opportunistic break-ins and clearly marks property boundaries for everyone — including delivery drivers.',
    icon: 'shield',
  },
  {
    title: 'Curb Appeal',
    body: 'A clean fence line lifts the look of the entire yard. Aluminum and horizontal cedar add the most resale-grade polish.',
    icon: 'sparkles',
  },
  {
    title: 'Pet Safety',
    body: 'Keep dogs in and wildlife out with the right height, dig guards, and gate hardware sized to your breed and yard.',
    icon: 'paw',
  },
  {
    title: 'Pool Compliance',
    body: 'Tennessee follows the 2018 ISPSC pool barrier code. Self-closing, self-latching 4 ft minimum fencing is required around in-ground pools.',
    icon: 'droplet',
  },
  {
    title: 'Property Value',
    body: 'A well-built fence can return 50–70% of its installed cost at sale and accelerate time-on-market for family buyers.',
    icon: 'trending-up',
  },
]

export const STATS = [
  { label: 'Happy Homeowners', value: 1200, suffix: '+' },
  { label: 'Avg. Contractor Rating', value: 4.9, suffix: '', decimals: 1 },
  { label: 'Avg. Response Time', value: 48, suffix: ' hrs' },
  { label: 'Licensed & Insured', value: 100, suffix: '%' },
]

export const GALLERY = [
  { id: 1, category: 'Wood Privacy', img: 'https://images.unsplash.com/photo-1599644425057-08538b2c08c4?auto=format&fit=crop&w=900&q=80' },
  { id: 2, category: 'Aluminum', img: 'https://images.unsplash.com/photo-1568833312500-cd6a64fda4ef?auto=format&fit=crop&w=900&q=80' },
  { id: 3, category: 'Vinyl', img: 'https://images.unsplash.com/photo-1595407753234-0882f1e77954?auto=format&fit=crop&w=900&q=80' },
  { id: 4, category: 'Wood Privacy', img: 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?auto=format&fit=crop&w=900&q=80' },
  { id: 5, category: 'Gates', img: 'https://images.unsplash.com/photo-1572120360610-d971b9d7767c?auto=format&fit=crop&w=900&q=80' },
  { id: 6, category: 'Vinyl', img: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=900&q=80' },
  { id: 7, category: 'Aluminum', img: 'https://images.unsplash.com/photo-1568374346154-6b8b75c00ab1?auto=format&fit=crop&w=900&q=80' },
  { id: 8, category: 'Wood Privacy', img: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=900&q=80' },
  { id: 9, category: 'Gates', img: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=900&q=80' },
]
