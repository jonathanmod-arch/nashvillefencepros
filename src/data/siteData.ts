import { IMAGES } from './imageUrls'

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
    img: IMAGES.fenceTypes['wood-privacy'],
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
    img: IMAGES.fenceTypes['vinyl'],
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
    img: IMAGES.fenceTypes['aluminum'],
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
    img: IMAGES.fenceTypes['chain-link'],
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
    img: IMAGES.fenceTypes['horizontal-privacy'],
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
    img: IMAGES.fenceTypes['farm-ranch'],
    features: ['Four-board, split-rail, wire', 'Livestock-safe spacing', 'Acreage-ready crews'],
    bestFor: 'Acreage, horses, rural Williamson/Sumner counties',
  },
  {
    slug: 'wrought-iron',
    name: 'Wrought Iron',
    short: 'Iron',
    priceLow: 48,
    priceHigh: 78,
    description:
      'Hand-forged wrought iron fence installation for Nashville estates, gated driveways, and historic homes. Custom finials, monograms, and automated entry options available.',
    img: IMAGES.fenceTypes['wrought-iron'] ?? IMAGES.fenceTypes['aluminum'],
    features: ['Hand-forged & welded', 'Custom monograms & finials', 'Pairs with automated gates'],
    bestFor: 'Estates, historic homes, automated entry gates',
  },
  {
    slug: 'pet-fence',
    name: 'Invisible & Pet Fence',
    short: 'Pet Fence',
    priceLow: 4,
    priceHigh: 12,
    description:
      'Invisible, hidden, and electric dog fence installation in Nashville. Boundary wire + GPS-collar systems trained to your yard, plus traditional pet-rated picket and chain link options.',
    img: IMAGES.fenceTypes['pet-fence'] ?? IMAGES.fenceTypes['chain-link'],
    features: ['Invisible & hidden boundary wire', 'GPS collar systems', 'Includes containment training'],
    bestFor: 'Dog owners, HOA-restricted yards, large lots',
  },
  {
    slug: 'pool-safety',
    name: 'Pool Safety Fence',
    short: 'Pool',
    priceLow: 24,
    priceHigh: 52,
    description:
      'Pool fence installation in Nashville that meets Tennessee\'s 2018 ISPSC barrier code. Aluminum, mesh, and glass pool fencing with self-closing, self-latching gates.',
    img: IMAGES.fenceTypes['pool-safety'] ?? IMAGES.fenceTypes['aluminum'],
    features: ['ISPSC code compliant', 'Self-closing, self-latching gate', 'Aluminum, mesh, or glass'],
    bestFor: 'In-ground pools, child safety, insurance compliance',
  },
]

export const NEIGHBORHOODS = [
  {
    slug: 'belle-meade',
    name: 'Belle Meade',
    zip: '37205',
    img: IMAGES.neighborhoods['belle-meade'],
    popularStyle: 'Ornamental Aluminum & Iron',
    avgCost: '$8,400 – $14,200',
    note: 'Estate lots, historic overlay rules. Aluminum and wrought iron dominate for both pools and front-yard estate fencing.',
  },
  {
    slug: 'green-hills',
    name: 'Green Hills',
    zip: '37215',
    img: IMAGES.neighborhoods['green-hills'],
    popularStyle: 'Wood Privacy & Aluminum',
    avgCost: '$5,800 – $9,800',
    note: 'Family neighborhoods with mature trees. Cedar privacy backyards paired with aluminum side gates are typical.',
  },
  {
    slug: 'east-nashville',
    name: 'East Nashville',
    zip: '37206',
    img: IMAGES.neighborhoods['east-nashville'],
    popularStyle: 'Horizontal Modern Cedar',
    avgCost: '$4,200 – $7,800',
    note: 'Design-forward bungalows. Horizontal slat cedar and mixed wood-metal fences define the look. Watch for historic overlays.',
  },
  {
    slug: 'germantown',
    name: 'Germantown',
    zip: '37208',
    img: IMAGES.neighborhoods['germantown'],
    popularStyle: 'Iron & Vinyl Privacy',
    avgCost: '$4,600 – $8,400',
    note: 'Historic district with strict design review. Wrought-iron front, vinyl or wood privacy rear is the standard.',
  },
  {
    slug: 'brentwood',
    name: 'Brentwood',
    zip: '37027',
    img: IMAGES.neighborhoods['brentwood'],
    popularStyle: 'Aluminum & Wood Privacy',
    avgCost: '$6,400 – $11,800',
    note: 'Williamson County. HOA-driven aluminum front fencing with cedar privacy backyards. Pool-code compliance is critical.',
  },
  {
    slug: 'franklin',
    name: 'Franklin',
    zip: '37064',
    img: IMAGES.neighborhoods['franklin'],
    popularStyle: 'Four-Board & Aluminum',
    avgCost: '$5,200 – $12,000',
    note: 'Mix of estate lots and acreage. Four-board farm fence is common on larger Williamson County parcels.',
  },
  {
    slug: 'twelve-south',
    name: '12 South',
    zip: '37204',
    img: IMAGES.neighborhoods['twelve-south'],
    popularStyle: 'Horizontal Cedar & Iron',
    avgCost: '$4,400 – $7,600',
    note: 'Trendy urban infill. Tight lots favor 6 ft horizontal cedar with steel gate hardware.',
  },
  {
    slug: 'sylvan-park',
    name: 'Sylvan Park',
    zip: '37209',
    img: IMAGES.neighborhoods['sylvan-park'],
    popularStyle: 'Wood Privacy & Modern Horizontal',
    avgCost: '$4,000 – $7,200',
    note: 'Walkable West Nashville. Mix of classic dog-ear cedar and modern horizontal builds.',
  },
  {
    slug: 'hendersonville',
    name: 'Hendersonville',
    zip: '37075',
    img: IMAGES.neighborhoods['hendersonville'],
    popularStyle: 'Vinyl Privacy & Aluminum',
    avgCost: '$4,800 – $8,800',
    note: 'Sumner County waterfront and subdivision homes. Vinyl is dominant for HOA-compliant privacy.',
  },
  {
    slug: 'mount-juliet',
    name: 'Mount Juliet',
    zip: '37122',
    img: IMAGES.neighborhoods['mount-juliet'],
    popularStyle: 'Wood Privacy & Chain Link',
    avgCost: '$3,800 – $7,200',
    note: 'Growing Wilson County suburb. New construction favors 6 ft cedar; chain link still common on larger lots.',
  },
  {
    slug: 'hermitage',
    name: 'Hermitage',
    zip: '37076',
    img: IMAGES.neighborhoods['hermitage'],
    popularStyle: 'Wood Privacy & Chain Link',
    avgCost: '$3,400 – $6,400',
    note: 'Established East Davidson County neighborhoods with practical wood privacy fencing throughout.',
  },
  {
    slug: 'forest-hills',
    name: 'Forest Hills',
    zip: '37215',
    img: IMAGES.neighborhoods['forest-hills'],
    popularStyle: 'Aluminum & Cedar Privacy',
    avgCost: '$7,800 – $13,400',
    note: 'Larger lots and rolling terrain. Sloped-yard aluminum and tall cedar privacy panels are most requested.',
  },
]
export type ResourceSection =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'ol'; items: string[] }
  | { type: 'table'; headers: string[]; rows: string[][] }
  | {
      type: 'callout'
      title: string
      text: string
      ctaLabel: string
      ctaHref: string
    }

export const RESOURCES = [
  {
    slug: 'wood-vs-vinyl-nashville',
    title: 'Wood vs. Vinyl: Which Fence Wins in Nashville?',
    category: 'Comparison',
    readTime: '7 min',
    excerpt:
      'How Middle Tennessee humidity, freeze-thaw cycles, and HOA rules tip the scale between cedar privacy and premium vinyl.',
    img: IMAGES.resources['wood-vs-vinyl-nashville'],
  },
  {
    slug: 'best-fences-for-dogs',
    title: 'The Best Fences for Dogs in Nashville Yards',
    category: 'Pets',
    readTime: '6 min',
    excerpt:
      'Climb-proof heights, dig guards, and material picks that keep golden retrievers in and coyotes out across Davidson County.',
    img: IMAGES.resources['best-fences-for-dogs'],
  },
  {
    slug: 'pool-fence-safety-tn',
    title: 'Pool Fence Safety Laws in Tennessee',
    category: 'Compliance',
    readTime: '5 min',
    excerpt:
      'A homeowner-friendly walkthrough of the 2018 ISPSC barrier code, self-closing gates, and 4 ft minimum requirements.',
    img: IMAGES.resources['pool-fence-safety-tn'],
  },
  {
    slug: 'metro-nashville-permits',
    title: 'Metro Nashville Fence Permit Guide',
    category: 'Permits',
    readTime: '8 min',
    excerpt:
      'When you do (and do not) need a permit, height limits by yard, and how to handle historic overlay districts.',
    img: IMAGES.resources['metro-nashville-permits'],
  },
  {
    slug: 'fence-cost-breakdown',
    title: 'Anatomy of a Nashville Fence Quote',
    category: 'Cost',
    readTime: '9 min',
    excerpt:
      'Line-item analysis: materials, labor, post-setting, gates, and the hidden costs that surprise first-time buyers.',
    img: IMAGES.resources['fence-cost-breakdown'],
  },
  {
    slug: 'horizontal-cedar-trend',
    title: 'Why Horizontal Cedar Took Over East Nashville',
    category: 'Trends',
    readTime: '5 min',
    excerpt:
      'The design history behind the slat-style fence dominating East Nashville, 12 South, and Sylvan Park bungalows.',
    img: IMAGES.resources['horizontal-cedar-trend'],
  },
  {
    slug: 'fence-repair-vs-replace-nashville',
    title: 'When to Repair vs. Replace Your Nashville Fence (The 60% Rule)',
    category: 'Repair',
    readTime: '7 min',
    excerpt:
      'A simple cost-based rule for deciding whether to repair or replace a damaged Nashville fence — plus material-by-material repair cost ranges from Davidson and Williamson Counties.',
    img: IMAGES.resources['fence-cost-breakdown'],
    body: [
      {
        type: 'p',
        text: "Standing in your Nashville backyard staring at a leaning fence is one of the more confusing moments of homeownership. Repair the section that's failing, or rip the whole thing out and start over? Local fence pros use a simple rule to decide: if the repair quote comes in above 60% of a full replacement, replacement is the better long-term call. Below that, repair wins. Here's how to actually run that math on a Nashville fence — material by material — and what the typical repair numbers look like in Davidson and Williamson Counties this year.",
      },
      { type: 'h2', text: 'The 60% Rule, Explained' },
      {
        type: 'p',
        text: "The rule borrows from how insurance adjusters already think about partial structures. When the cost to fix what's broken passes roughly 60% of a brand-new replacement, you stop coming out ahead. Three things flip at that threshold: the warranty resets across the entire run, the rest of the structure gets the same useful life as the repaired sections, and you stop layering new wood onto posts that are already aging out.",
      },
      {
        type: 'p',
        text: "Work the math with real Nashville numbers. A 180 ft cedar privacy fence runs about $5,400 installed ($30 per linear foot). Your 60% breakpoint is $3,240. If the repair quote comes in at $2,800 — repair. If it comes in at $3,800 — replace and reset the clock.",
      },
      { type: 'h2', text: 'When Repair Is the Right Call' },
      {
        type: 'ul',
        items: [
          'Less than 20% of the total run is damaged',
          'Posts are still sound — only panels, pickets, or rails need attention',
          'Fence is under 10 years old',
          'Hardware is the failure point (latches, hinges, post caps, gate operators)',
          "You're staying in the home fewer than 5 years",
          'Damage is isolated to one fence line, not the full perimeter',
        ],
      },
      { type: 'h2', text: 'When You Should Replace Instead' },
      {
        type: 'ul',
        items: [
          'Posts are leaning or rotted at the base across multiple sections',
          "Wood fence is 15+ years old with widespread weathering and graying",
          'Repair quote exceeds 60% of a full replacement',
          'Metro code or your HOA has changed and the existing fence is non-compliant',
          "You're planning to sell within 12 months — buyers price an aging fence as a liability",
          'The original fence skipped concrete-set posts and the soil is no longer holding them',
        ],
      },
      { type: 'h2', text: 'Nashville Fence Repair Cost by Material' },
      {
        type: 'p',
        text: 'Repair pricing in Middle Tennessee depends on three things: the material, how much of the run is affected, and how urgent the job is. Storm-season repairs in April and May run 15–25% above winter pricing because every Nashville crew is backlogged.',
      },
      {
        type: 'table',
        headers: ['Material', 'Typical repair range', 'Most common fix'],
        rows: [
          ['Wood (cedar / pressure-treated)', '$8–$22 / linear ft', 'Picket replacement + post reset'],
          ['Vinyl (PVC)', '$12–$28 / linear ft', 'Cracked panel swap + post sleeve'],
          ['Chain link', '$6–$14 / linear ft', 'Re-stretched mesh + bent post repair'],
          ['Ornamental aluminum', '$14–$26 / linear ft', 'Bent rail / rust spot repair + repaint'],
          ['Wrought iron', '$18–$36 / linear ft', 'Welded picket repair + gate hinge service'],
          ['Pet / invisible fence', '$140–$520 / visit', 'Boundary wire break repair + collar service'],
        ],
      },
      { type: 'h2', text: 'Common Repair Failures by Season in Nashville' },
      {
        type: 'p',
        text: "Middle Tennessee weather is harder on fences than the national average. The combination of clay-heavy soil, freeze-thaw cycles, and a real spring storm season creates a predictable repair calendar — and a predictable contractor backlog every April.",
      },
      {
        type: 'ul',
        items: [
          'Spring (Mar–May): wind-blown sections, broken posts, tree-fall damage — biggest backlog of the year',
          'Summer (Jun–Aug): wood swelling, post rot at the base, gate sag from heat expansion',
          'Fall (Sep–Nov): leaf debris pile-up against panels, leaning posts before freeze',
          "Winter (Dec–Feb): chain link mesh stretch from ice load, frost heave on shallow-set posts",
        ],
      },
      { type: 'h2', text: 'How to Get a Credible Repair Quote' },
      {
        type: 'ul',
        items: [
          'Photograph every damaged section before any contractor visits',
          'Ask for a line-item quote — material, labor, post setting, and disposal split out separately',
          'Get 2–3 quotes for any repair over $1,500',
          'Verify the contractor actually does repair work, not just full installs (many Nashville crews skip repairs)',
          'Confirm material warranty pass-through if you bought the original fence within the last 10 years',
        ],
      },
      {
        type: 'callout',
        title: 'Get repair quotes from Nashville crews who actually do repairs',
        text: 'We route your photos and address to vetted Nashville fence repair companies that specialize in repair (not just installation). Most homeowners hear back within 24 hours.',
        ctaLabel: 'Get Free Repair Quotes',
        ctaHref: '/repair',
      },
      { type: 'h2', text: 'Bottom Line' },
      {
        type: 'p',
        text: "Repair vs. replace mostly answers itself once you've run the math. Pull a real replacement quote and a real repair quote, drop them into the 60% calculation, and pair the answer against how long you plan to own the home. Moving in two years? Lean repair. Staying ten? The math almost always points to replace — and you get a fresh warranty out of it.",
      },
      {
        type: 'p',
        text: "If the damage is from a storm and you're filing an insurance claim, the math gets a third variable: what the insurer will cover. Documentation in the first 24 hours is everything — start with photos before any debris gets moved.",
      },
    ] as ResourceSection[],
  },
  {
    slug: 'storm-damaged-fence-nashville-insurance',
    title: 'Storm-Damaged Fence in Nashville: Insurance Claim + Same-Week Repair',
    category: 'Repair',
    readTime: '6 min',
    excerpt:
      "Step-by-step Nashville guide to documenting storm fence damage, filing your Tennessee homeowner's insurance claim, and getting same-week fence repair from a vetted local contractor.",
    img: IMAGES.resources['fence-cost-breakdown'],
    body: [
      {
        type: 'p',
        text: "Middle Tennessee gets hit with severe weather every spring. Between the wind events that roll through Davidson and Wilson Counties from March to June, the occasional derecho, and tornado activity across Williamson and Rutherford, a fence is one of the most-damaged outdoor structures on Nashville properties. If your fence took damage in a Nashville storm, you're in a small window where your insurance company, contractor availability, and your own documentation all need to come together fast. Move quickly and you can have it filed and repaired inside a week. Move slowly and you're looking at a 4–6 week contractor backlog plus a potentially weaker claim.",
      },
      { type: 'h2', text: 'First 24 Hours — Document Everything' },
      {
        type: 'p',
        text: "Strong insurance claims have the most documentation, captured fastest. Your goal in the first day is to build a record an adjuster can't push back on.",
      },
      {
        type: 'ol',
        items: [
          'Photograph every damaged section from multiple angles before anyone removes debris',
          'Take a wide shot showing the property line and where the fence sits on it',
          'Photograph adjacent damage too — fallen trees, scattered panel debris, damaged shed roofs (context matters)',
          'Record the date, time, and weather event (a National Weather Service report URL helps your claim)',
          'Save any city or county debris-removal notices that get posted to your door or mailbox',
          "Keep all debris on your property until the adjuster sees it (or until your own photos clearly show it existed)",
        ],
      },
      { type: 'h2', text: "Filing the Claim with Your Tennessee Insurer" },
      {
        type: 'p',
        text: "Standard HO-3 homeowner's policies in Tennessee treat fences as 'other structures' — typically capped at 10% of your dwelling coverage. So if your home is insured for $400,000, you have up to $40,000 of fence and other-structure coverage available, minus deductible.",
      },
      {
        type: 'ul',
        items: [
          'Call your insurer\'s claims line within 48 hours of the storm — speed matters',
          'Tennessee statute gives insurers 30 days to acknowledge a claim and 60 days to investigate',
          'Your deductible applies (usually $1,000–$2,500 — sometimes higher for named-storm wind/hail)',
          'Ask explicitly whether your policy has separate wind/hail coverage with its own deductible',
          'Request the claim number and adjuster name in writing before you hang up',
        ],
      },
      { type: 'h2', text: "What's Covered vs Not Covered" },
      {
        type: 'p',
        text: 'Tennessee homeowner policies cover sudden, accidental damage. Anything gradual or wear-related gets denied.',
      },
      {
        type: 'table',
        headers: ['Usually covered', 'Usually denied'],
        rows: [
          ['Wind damage from a documented storm', 'Gradual rot or aging'],
          ['Hail damage to vinyl and aluminum', 'Leaning from soft soil (no triggering event)'],
          ['Fallen tree damage (your tree or a neighbor\'s)', 'Poor original installation'],
          ['Vehicle impact', 'Lack of maintenance / staining'],
          ['Vandalism', 'Pet damage from your own animal'],
        ],
      },
      { type: 'h2', text: 'Getting a Repair Estimate the Adjuster Will Accept' },
      {
        type: 'ul',
        items: [
          'Get the quote on contractor letterhead — handwritten estimates often get pushed back',
          'Include separate line items for labor, materials, post setting, and debris haul-off',
          'Have the contractor explicitly note "storm-related" or "wind damage" if that\'s the cause',
          'Match the original spec (height, material, post depth) — upgrades come out of your pocket',
          'Include a project timeline — adjusters approve faster when they see a real start date',
        ],
      },
      { type: 'h2', text: "Same-Week Repair — What's Actually Realistic" },
      {
        type: 'p',
        text: "After a major storm event in Nashville, every reputable fence company's phone rings nonstop for two weeks. Getting on a schedule within seven days is doable but requires you to move on the contractor's schedule, not yours.",
      },
      {
        type: 'ul',
        items: [
          'Most Nashville crews are 2–3 weeks out normally — that stretches to 4–6 weeks after major storms',
          'Same-week repair is realistic if you have photos + spec ready and accept any crew with bandwidth',
          'Some Nashville fence companies run dedicated "storm response" crews — ask explicitly',
          "Don't sign with the first knock-on-door contractor — verify license and insurance through the directory first",
          'If your claim is approved, you control the contractor choice — your insurer doesn\'t pick for you',
        ],
      },
      {
        type: 'callout',
        title: 'Need same-week storm fence repair in Nashville?',
        text: "Upload your damage photos and address — we route to Nashville fence repair crews with bandwidth this week. Wood, vinyl, chain link, aluminum, and wrought iron all covered.",
        ctaLabel: 'Get Storm Repair Quotes',
        ctaHref: '/repair',
      },
      { type: 'h2', text: 'Common Nashville Storm-Damage Patterns' },
      {
        type: 'ul',
        items: [
          'Wind-blown sections — usually 2–4 adjacent panels need replacement, posts often survive',
          'Snapped wood posts — wind torque breaks pressure-treated posts at ground level',
          'Tree-fall damage — full section replacement plus post reset and clean-up',
          "Hail dimpling on vinyl — mostly cosmetic, hard to claim unless severe",
          'Chain link mesh stretch — usually fixable for under $300',
          'Bent ornamental aluminum rails — straighten + repaint, rarely full replacement',
        ],
      },
      { type: 'h2', text: 'Mistakes to Avoid' },
      {
        type: 'ul',
        items: [
          'Removing debris before the adjuster has seen it (or before you have time-stamped photos)',
          'Accepting the first contractor who knocks on your door post-storm',
          'Signing an "Assignment of Benefits" form without legal review — it transfers your claim payment to the contractor',
          'Starting DIY repair before the claim is approved (insurers can deny the claim entirely)',
          'Skipping the line-item breakdown on your estimate',
        ],
      },
      { type: 'h2', text: "After Your Claim Is Approved" },
      {
        type: 'p',
        text: "Once your approval letter is in hand, you have flexibility most homeowners don't realize: insurance doesn't dictate which contractor does the repair. Get 2–3 quotes — the claim approval is the floor, not the ceiling. Match the original spec or upgrade and pay the difference out of pocket. Confirm timeline in writing before signing.",
      },
      {
        type: 'p',
        text: "If your repair quote came in well below the 60% threshold of a full replacement, you're in good shape. If it's close to or above that line, talk to your contractor about a full replacement — your insurance proceeds typically apply either way, and you get a fresh fence with a fresh warranty.",
      },
    ] as ResourceSection[],
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
  { label: 'Nashville Homeowners Served', value: 2400, suffix: '+' },
  { label: 'Fence Projects Completed', value: 3800, suffix: '+' },
  { label: 'Average Fence Cost Savings', value: 22, suffix: '%', prefix: '$' },
  { label: 'Combined Contractor Experience', value: 85, suffix: ' yrs' },
]

const GALLERY_CATEGORIES = [
  'Wood Privacy',
  'Aluminum',
  'Vinyl',
  'Wood Privacy',
  'Gates',
  'Vinyl',
  'Aluminum',
  'Wood Privacy',
  'Gates',
]
export const GALLERY = IMAGES.gallery.map((img, i) => ({
  id: i + 1,
  category: GALLERY_CATEGORIES[i] ?? 'Wood Privacy',
  img,
}))
