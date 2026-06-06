import { IMAGES } from './imageUrls'
import { CITY } from '../config/city'

export const COMPANY = {
  name: CITY.company.name,
  phone: CITY.company.phone,
  phoneRaw: CITY.company.phoneRaw,
  email: CITY.company.email,
  address: CITY.company.address,
  hours: CITY.company.hours,
}

export const RESOURCE_PUBLISHED_AT = '2026-06-01T08:00:00-05:00'

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
    cityResources: [
      { label: 'City of Belle Meade fence FAQ', url: 'https://citybellemeade.org/faq/fences/' },
    ],
  },
  {
    slug: 'green-hills',
    name: 'Green Hills',
    zip: '37215',
    img: IMAGES.neighborhoods['green-hills'],
    popularStyle: 'Wood Privacy & Aluminum',
    avgCost: '$5,800 – $9,800',
    note: 'Family neighborhoods with mature trees. Cedar privacy backyards paired with aluminum side gates are typical.',
    cityResources: [
      { label: 'Metro Nashville Codes fence permits', url: 'https://www.nashville.gov/departments/codes/construction-and-permits/building-permits-central/fence' },
    ],
  },
  {
    slug: 'east-nashville',
    name: 'East Nashville',
    zip: '37206',
    img: IMAGES.neighborhoods['east-nashville'],
    popularStyle: 'Horizontal Modern Cedar',
    avgCost: '$4,200 – $7,800',
    note: 'Design-forward bungalows. Horizontal slat cedar and mixed wood-metal fences define the look. Watch for historic overlays.',
    cityResources: [
      { label: 'Metro Nashville Codes fence permits', url: 'https://www.nashville.gov/departments/codes/construction-and-permits/building-permits-central/fence' },
    ],
  },
  {
    slug: 'germantown',
    name: 'Germantown',
    zip: '37208',
    img: IMAGES.neighborhoods['germantown'],
    popularStyle: 'Iron & Vinyl Privacy',
    avgCost: '$4,600 – $8,400',
    note: 'Historic district with strict design review. Wrought-iron front, vinyl or wood privacy rear is the standard.',
    cityResources: [
      { label: 'Metro Nashville Codes fence permits', url: 'https://www.nashville.gov/departments/codes/construction-and-permits/building-permits-central/fence' },
      { label: 'Metro Historic Zoning Commission design guidelines', url: 'https://www.nashville.gov/departments/planning/historic-zoning-information/districts-and-design-guidelines' },
    ],
  },
  {
    slug: 'brentwood',
    name: 'Brentwood',
    zip: '37027',
    img: IMAGES.neighborhoods['brentwood'],
    popularStyle: 'Aluminum & Wood Privacy',
    avgCost: '$6,400 – $11,800',
    note: 'Williamson County. HOA-driven aluminum front fencing with cedar privacy backyards. Pool-code compliance is critical.',
    cityResources: [
      { label: 'City of Brentwood FAQs', url: 'https://www.brentwoodtn.gov/your-government/faqs' },
    ],
  },
  {
    slug: 'franklin',
    name: 'Franklin',
    zip: '37064',
    img: IMAGES.neighborhoods['franklin'],
    popularStyle: 'Four-Board & Aluminum',
    avgCost: '$5,200 – $12,000',
    note: 'Mix of estate lots and acreage. Four-board farm fence is common on larger Williamson County parcels.',
    cityResources: [
      { label: 'City of Franklin construction handouts', url: 'https://www.franklintn.gov/government/departments-a-j/building-and-neighborhood-services/permit-applications-information/construction-handouts' },
    ],
  },
  {
    slug: 'twelve-south',
    name: '12 South',
    zip: '37204',
    img: IMAGES.neighborhoods['twelve-south'],
    popularStyle: 'Horizontal Cedar & Iron',
    avgCost: '$4,400 – $7,600',
    note: 'Trendy urban infill. Tight lots favor 6 ft horizontal cedar with steel gate hardware.',
    cityResources: [
      { label: 'Metro Nashville Codes fence permits', url: 'https://www.nashville.gov/departments/codes/construction-and-permits/building-permits-central/fence' },
    ],
  },
  {
    slug: 'sylvan-park',
    name: 'Sylvan Park',
    zip: '37209',
    img: IMAGES.neighborhoods['sylvan-park'],
    popularStyle: 'Wood Privacy & Modern Horizontal',
    avgCost: '$4,000 – $7,200',
    note: 'Walkable West Nashville. Mix of classic dog-ear cedar and modern horizontal builds.',
    cityResources: [
      { label: 'Metro Nashville Codes fence permits', url: 'https://www.nashville.gov/departments/codes/construction-and-permits/building-permits-central/fence' },
    ],
  },
  {
    slug: 'hendersonville',
    name: 'Hendersonville',
    zip: '37075',
    img: IMAGES.neighborhoods['hendersonville'],
    popularStyle: 'Vinyl Privacy & Aluminum',
    avgCost: '$4,800 – $8,800',
    note: 'Sumner County waterfront and subdivision homes. Vinyl is dominant for HOA-compliant privacy.',
    cityResources: [
      { label: 'City of Hendersonville permit applications', url: 'https://www.hvilletn.org/421/Apply-for-a-Permit' },
    ],
  },
  {
    slug: 'mount-juliet',
    name: 'Mount Juliet',
    zip: '37122',
    img: IMAGES.neighborhoods['mount-juliet'],
    popularStyle: 'Wood Privacy & Chain Link',
    avgCost: '$3,800 – $7,200',
    note: 'Growing Wilson County suburb. New construction favors 6 ft cedar; chain link still common on larger lots.',
    cityResources: [
      { label: 'Mount Juliet Building & Codes Department', url: 'https://www.mtjuliet-tn.gov/150/Building-Codes-Department' },
    ],
  },
  {
    slug: 'hermitage',
    name: 'Hermitage',
    zip: '37076',
    img: IMAGES.neighborhoods['hermitage'],
    popularStyle: 'Wood Privacy & Chain Link',
    avgCost: '$3,400 – $6,400',
    note: 'Established East Davidson County neighborhoods with practical wood privacy fencing throughout.',
    cityResources: [
      { label: 'Metro Nashville Codes fence permits', url: 'https://www.nashville.gov/departments/codes/construction-and-permits/building-permits-central/fence' },
    ],
  },
  {
    slug: 'forest-hills',
    name: 'Forest Hills',
    zip: '37215',
    img: IMAGES.neighborhoods['forest-hills'],
    popularStyle: 'Aluminum & Cedar Privacy',
    avgCost: '$7,800 – $13,400',
    note: 'Larger lots and rolling terrain. Sloped-yard aluminum and tall cedar privacy panels are most requested.',
    cityResources: [
      { label: 'City of Forest Hills permitting process', url: 'https://www.cityofforesthills.com/building-zoning/page/permitting-process' },
    ],
  },
  {
    slug: 'nashville',
    name: 'Nashville',
    zip: '37203',
    img: IMAGES.neighborhoods['nashville'],
    popularStyle: 'Mixed, All Materials',
    avgCost: '$3,800 – $9,800',
    note: 'Davidson County core. Every fence material is represented from historic-overlay neighborhoods to new East Nashville builds, check overlay status before submitting designs.',
    cityResources: [
      { label: 'Metro Nashville Codes fence permits', url: 'https://www.nashville.gov/departments/codes/construction-and-permits/building-permits-central/fence' },
      { label: 'Metro Historic Zoning Commission design guidelines', url: 'https://www.nashville.gov/departments/planning/historic-zoning-information/districts-and-design-guidelines' },
    ],
  },
  {
    slug: 'murfreesboro',
    name: 'Murfreesboro',
    zip: '37130',
    img: IMAGES.neighborhoods['murfreesboro'],
    popularStyle: 'Vinyl Privacy & Aluminum',
    avgCost: '$4,200 – $8,400',
    note: 'Largest Rutherford County city and one of the fastest-growing in the state. HOA subdivisions favor 6 ft vinyl and aluminum; rural lots still run chain link and farm board.',
    cityResources: [
      { label: 'City of Murfreesboro accessory structure & fence permits', url: 'https://www.murfreesborotn.gov/2767/Accessory-Structure-and-Fence-Permits-In' },
    ],
  },
  {
    slug: 'spring-hill',
    name: 'Spring Hill',
    zip: '37174',
    img: IMAGES.neighborhoods['spring-hill'],
    popularStyle: 'Vinyl & Aluminum',
    avgCost: '$4,400 – $8,800',
    note: 'Williamson and Maury County line. Heavy new-construction with HOA-driven vinyl and aluminum installs; pool-code applies to most backyard builds.',
    cityResources: [
      { label: 'City of Spring Hill permit applications', url: 'https://www.springhilltn.org/884/Applications-Permits' },
    ],
  },
  {
    slug: 'gallatin',
    name: 'Gallatin',
    zip: '37066',
    img: IMAGES.neighborhoods['gallatin'],
    popularStyle: 'Aluminum & Wood Privacy',
    avgCost: '$4,400 – $9,200',
    note: 'Sumner County seat north of Hendersonville. Old Hickory Lake homes lean aluminum and wrought iron; subdivisions favor wood privacy with vinyl gates.',
    cityResources: [
      { label: 'City of Gallatin fence requirements', url: 'https://www.gallatintn.gov/1816/Fence-Requirements' },
    ],
  },
  {
    slug: 'smyrna',
    name: 'Smyrna',
    zip: '37167',
    img: IMAGES.neighborhoods['smyrna'],
    popularStyle: 'Wood Privacy & Chain Link',
    avgCost: '$3,400 – $6,800',
    note: 'Rutherford County. Practical 6 ft wood privacy and chain link still dominate older lots; newer subdivisions follow the vinyl-and-aluminum HOA pattern.',
    cityResources: [
      { label: 'Town of Smyrna building permits', url: 'https://www.townofsmyrna.org/departments/building_safety/permits.php' },
    ],
  },
  {
    slug: 'lebanon',
    name: 'Lebanon',
    zip: '37087',
    img: IMAGES.neighborhoods['lebanon'],
    popularStyle: 'Four-Board & Wood Privacy',
    avgCost: '$3,800 – $8,400',
    note: 'Wilson County seat. Mix of acreage and subdivisions, four-board farm fence is common on rural parcels, cedar privacy in town and around the square.',
    cityResources: [
      { label: 'City of Lebanon fence permit FAQ', url: 'https://www.lebanontn.org/FAQ.aspx?QID=94' },
    ],
  },
  {
    slug: 'nolensville',
    name: 'Nolensville',
    zip: '37135',
    img: IMAGES.neighborhoods['nolensville'],
    popularStyle: 'Aluminum & Vinyl',
    avgCost: '$5,200 – $10,800',
    note: 'Fast-growing south Williamson County town. Newer HOA-restricted neighborhoods favor aluminum or vinyl; pool-barrier inspections are strict.',
    cityResources: [
      { label: 'Town of Nolensville permit applications', url: 'https://www.nolensvilletn.gov/page/applications-permit' },
    ],
  },
  {
    slug: 'columbia',
    name: 'Columbia',
    zip: '38401',
    img: IMAGES.neighborhoods['columbia'],
    popularStyle: 'Four-Board & Wood Privacy',
    avgCost: '$3,600 – $7,800',
    note: 'Maury County seat south of Spring Hill. Acreage homes lean farm fencing; downtown and newer subdivision lots run cedar privacy.',
    cityResources: [
      { label: 'City of Columbia fences page', url: 'https://www.columbiatn.com/587/Fences' },
    ],
  },
  {
    slug: 'clarksville',
    name: 'Clarksville',
    zip: '37040',
    img: IMAGES.neighborhoods['clarksville'],
    popularStyle: 'Chain Link & Wood Privacy',
    avgCost: '$3,200 – $6,400',
    note: 'Montgomery County, northwest of Nashville near Fort Campbell. Military turnover drives demand for fast-install chain link and standard 6 ft cedar privacy.',
    cityResources: [
      { label: 'City of Clarksville fence permit FAQ', url: 'https://www.cityofclarksville.com/faq.aspx?TID=36' },
    ],
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
    imageAlt: 'Cedar privacy fence in a Nashville backyard, wood vs vinyl fence comparison',
    body: [
      {
        type: 'p',
        text: "Every week I get this phone call: 'We're trying to decide between wood and vinyl, what would you do?' And every week I have to answer the question they actually meant, which is not the one they asked. People almost always know which one they like; what they really want to know is whether their preference is going to embarrass them in five years. Let me run through both materials the way I would on a driveway consult, what each one actually costs in Nashville, where each one wins, and the math that flips the answer.",
      },
      { type: 'h2', text: 'The Five Nashville Variables That Actually Matter' },
      {
        type: 'p',
        text: "Before either material is the right answer, you need to know your inputs. Skip these and the comparison turns into a Pinterest argument.",
      },
      {
        type: 'ul',
        items: [
          "Sun exposure on the fence line. South- and west-facing runs in Nashville hit 140-plus degrees of surface temperature on a July afternoon. That breaks cheap vinyl and bakes cheap stain.",
          "Lot dimensions. Long runs reward vinyl's per-foot maintenance math. Short runs (under 80 feet) hide cedar's bigger maintenance bill.",
          "HOA jurisdiction. Brentwood and Franklin subdivisions are essentially vinyl-or-aluminum-only territory. Davidson County outside an overlay lets you do whatever you want.",
          "How long you're staying. The breakeven on vinyl versus cedar lands at year 8-10. Selling in 4? Cedar wins. Staying 15? Vinyl wins.",
          "How much you actually want to think about this fence. Cedar is a maintained material. Vinyl is a leave-it-alone material. Pick the temperament that matches yours.",
        ],
      },
      { type: 'h2', text: 'Cedar, The Honest Case For' },
      {
        type: 'p',
        text: "Western red cedar is still the best-looking fence material on a Nashville bungalow at year zero. The grain, the warmth, the way it reads against red brick or white painted siding, vinyl doesn't compete on first impression. There's a reason every infill build in East Nashville and 12 South still spec'd cedar through the 2010s and into the 2020s.",
      },
      {
        type: 'ul',
        items: [
          "$28-38 per linear foot installed in Davidson County for standard 6-foot vertical privacy. $42-58 for horizontal cedar, see the [horizontal cedar trend article](/resources/horizontal-cedar-trend) for that whole story.",
          "Repairs are simple and cheap. A bad picket is a $6 board and 10 minutes. A bad vinyl panel is a $180 panel and a careful uninstall.",
          "Wood weathers to a silver-gray patina that looks intentional. Vinyl doesn't weather, it just gets dirty.",
          "Material is locally available. Nashville lumber yards stock cedar; vinyl panels usually ship in from out of state and add 3-7 days to the project timeline.",
        ],
      },
      { type: 'h2', text: 'Cedar, The Honest Case Against' },
      {
        type: 'p',
        text: "What contractors don't always volunteer about cedar in Middle Tennessee:",
      },
      {
        type: 'ul',
        items: [
          "Untreated cedar in Nashville needs a stain or seal every 2-3 years to keep its color. Skip it and the gray-out happens within 18 months.",
          "Bottom-rail rot is real. Even good cedar takes contact with damp clay soil poorly. Plan to replace the bottom 6 inches of pickets within 8-10 years on a south-facing run.",
          "Posts go before pickets. Pressure-treated 4x4 posts in Nashville clay soil last 12-15 years if set right, less if they weren't.",
          "Cedar warps. Some boards lose flatness within a year. Quality of the source lumber matters more than people realize, there's a big difference between Select Tight Knot grade and the no-grade big-box bundles.",
        ],
      },
      { type: 'h2', text: 'Premium Vinyl, The Honest Case For' },
      {
        type: 'p',
        text: "Premium vinyl earns its premium. Not the $18-a-foot stuff at the big-box store, the $32-44-a-foot manufacturer panels you'd order through a real fence company.",
      },
      {
        type: 'ul',
        items: [
          "Zero maintenance for the life of the fence. No stain, no seal, no picket replacement, no rotted bottoms.",
          "Holds up to Nashville heat better than cheap vinyl. Premium vinyl is UV-stabilized through the panel thickness, not just on the surface.",
          "Manufacturer warranties of 15-25 years are standard. Cedar doesn't come with anything comparable.",
          "Cleans with a garden hose. Algae and mildew that come off cedar with a power washer come off vinyl with a sponge.",
          "HOAs love it. If you're in Brentwood, Franklin, Nolensville, or Spring Hill, the ARC paperwork is faster for vinyl than cedar four times out of five.",
        ],
      },
      { type: 'h2', text: 'Premium Vinyl, The Honest Case Against' },
      {
        type: 'ul',
        items: [
          "$32-44 per linear foot installed in Nashville for standard 6-foot privacy. About 25-40 percent more than cedar at signing.",
          "Cheap vinyl is a disaster. The big-box panels at $18 a foot installed save you money up front and cost you a full replacement at year 4-6. Sagging in August is the tell. If you're going vinyl in Nashville, go premium or skip it.",
          "Once a panel is damaged, you can't patch it. You uninstall the whole panel, slide in a new one, and pay $180-280 for the replacement panel plus labor.",
          "Looks like vinyl. From 20 feet away premium vinyl looks fine. Up close, the texture and the seam lines still read as plastic. Some people don't care; some people do.",
        ],
      },
      { type: 'h2', text: 'The Real Cost Math Over 15 Years' },
      {
        type: 'p',
        text: "Here's the comparison most contractors don't run for you. A 150-foot fence in Nashville, 15-year total cost:",
      },
      {
        type: 'table',
        headers: ['', 'Cedar privacy', 'Premium vinyl'],
        rows: [
          ['Install cost', '$5,250', '$6,750'],
          ['Stain every 3 years (5 cycles)', '$2,400', '$0'],
          ['Picket / panel replacement', '$650', '$200'],
          ['Post replacement', '$800', '$0'],
          ['15-year total', '$9,100', '$6,950'],
        ],
      },
      {
        type: 'p',
        text: "Vinyl wins the 15-year math by about $2,150. Cedar wins the day-one math by $1,500. The crossover point lands somewhere around year 8-10 depending on how thorough you are about the every-3-years stain. The [Anatomy of a Nashville Fence Quote](/resources/fence-cost-breakdown) article walks through the line items behind those numbers.",
      },
      { type: 'h2', text: 'Where Cedar Still Wins in Nashville' },
      {
        type: 'ul',
        items: [
          "[Historic overlay neighborhoods](/historic-overlays), Edgefield, Germantown, Lockeland Springs. Vinyl rarely gets past Historic Zoning Commission review. Cedar is the default.",
          "Horizontal modern look. The slat aesthetic in East Nashville and 12 South only works in cedar (or composite at a similar price). No premium vinyl manufacturer makes a horizontal slat panel that looks intentional.",
          "You're selling inside 4 years. Cedar's lower install cost outperforms vinyl's lower maintenance cost on short timelines.",
          "Lots over 1 acre. Vinyl makes sense on a 150-foot urban perimeter. On a half-mile farm run in Williamson County, the vinyl premium adds up fast and the maintenance argument shrinks.",
        ],
      },
      { type: 'h2', text: 'Where Vinyl Wins' },
      {
        type: 'ul',
        items: [
          "HOA neighborhoods that require it. Don't fight the ARC.",
          "Backyards around pools. Constant moisture and chlorine spray are the worst conditions for cedar. Vinyl shrugs both off. (Pool barriers also need to clear the state code, see the [Pool Fence Safety](/resources/pool-fence-safety-tn) article.)",
          "Anyone who doesn't want to think about their fence again.",
          "You're staying 10-plus years. The maintenance math catches up by year 8-10 and pulls away from there.",
        ],
      },
      { type: 'h2', text: 'The One Comparison Mistake Most Homeowners Make' },
      {
        type: 'p',
        text: "They compare $5,250 cedar to $6,750 premium vinyl and decide cedar is the deal. Then they get a $4,200 quote from a cheap vinyl outfit and switch to that. Six months later they have a sagging panel in July and another $5,800 in their future when they have to replace the whole run with premium vinyl.",
      },
      {
        type: 'p',
        text: "If you're going vinyl in Nashville, go premium or don't go vinyl at all. Cheap vinyl is the worst category of fence in this climate.",
      },
      { type: 'h2', text: 'One Last Thing' },
      {
        type: 'p',
        text: "There's no universal winner between cedar and premium vinyl in Nashville. The right call depends on your sun exposure, your HOA, your timeline, and your tolerance for maintenance. The wrong call is the third option, a cheap version of either material. A bad cedar fence and a cheap vinyl fence both fail in three years. A good cedar fence and a premium vinyl fence both work for fifteen. Spend the right number on the right material, and the question of which one stops mattering.",
      },
    ] as ResourceSection[],
  },
  {
    slug: 'best-fences-for-dogs',
    title: 'The Best Fences for Dogs in Nashville Yards',
    category: 'Pets',
    readTime: '6 min',
    excerpt:
      'Climb-proof heights, dig guards, and material picks that keep golden retrievers in and coyotes out across Davidson County.',
    img: IMAGES.resources['best-fences-for-dogs'],
    imageAlt: 'Two dogs running on a fenced lawn, best fences for dogs in Nashville yards',
    body: [
      {
        type: 'p',
        text: "Here's the thing nobody tells you when you bring a dog home in Nashville: the fence is a homework assignment your dog is about to grade. I've installed somewhere north of a thousand residential fences across Davidson and Williamson counties, and I've also been the guy who shows up two months later because Bella the Husky figured out she's basically a deer. So before you pick a material, a height, or a Pinterest aesthetic, let me walk you through what your dog is actually going to test.",
      },
      { type: 'h2', text: 'The Three Questions Your Dog Is About to Ask' },
      {
        type: 'p',
        text: "Picture them at the back door the morning the install crew finishes. They're not admiring the cedar grain. They're running a three-question diagnostic on your investment, in roughly this order:",
      },
      {
        type: 'ul',
        items: [
          'Can I jump it?',
          'Can I dig under it?',
          'Can I see something I want to chase?',
        ],
      },
      {
        type: 'p',
        text: "Most fence advice on the internet talks about the first one. The dogs that actually escape my installs in Nashville almost always escape on the second or third. Plan for all three.",
      },
      { type: 'h2', text: 'Height, Read Your Dog, Not Just the Tape Measure' },
      {
        type: 'p',
        text: "Forget 'small dog needs 4 ft, big dog needs 6 ft.' That guideline is going to get a Border Collie owner some unpleasant phone calls from a neighbor down the street. Athleticism matters more than size, and breed-driven prey drive matters more than both.",
      },
      { type: 'h3', text: 'The height map that actually works in Nashville' },
      {
        type: 'ul',
        items: [
          'Under 25 lbs, low energy: 4 ft. Maltese, Cavalier, a French Bulldog with the personality of a coffee table, fine.',
          'Under 25 lbs, high energy (Jack Russell, Mini Schnauzer, Dachshund): 5 ft. Or 4 ft with a serious dig footer, because these guys are diggers.',
          'Between 25 and 50 lbs, casual: 5 ft. Most family Goldens, Labs, mixed-breed adoptees who like the couch more than the yard.',
          'Between 25 and 50 lbs, athletic (Border Collies, Aussies, anything herding): 6 ft. They are not jumping for fun, they are jumping because they are bored and they have a plan.',
          'Over 50 lbs, athletic (Huskies, Vizslas, working-line German Shepherds, any Pit-mix with a healthy prey drive): 6 ft minimum, plus a 45-degree inward-angled top extension or a coyote roller along the rail. Looks ridiculous. Works.',
        ],
      },
      {
        type: 'p',
        text: "If your dog is already an escape artist when you call me, they've cleared a 5-ft chain link at a friend's house, say, start the conversation at 7 ft and we'll work backwards from there.",
      },
      { type: 'h2', text: 'Materials That Actually Hold Up to Dogs' },
      {
        type: 'p',
        text: "Every material has a quirk when there's a dog inside the fence line. Here's the honest breakdown.",
      },
      { type: 'h3', text: 'Wood Privacy (Cedar)' },
      {
        type: 'p',
        text: "Western red cedar holds up fine to teeth in the short term. The real problem is the cedar fence next door that your dog stares at every day, slowly turning it into a chew toy. Cedar is also a teething puppy's favorite snack, if you have a young one or a separation-anxiety case, plan to replace the bottom 6 inches of pickets within two years. Adding a horizontal 2x4 cap rail at the top discourages climbers and costs almost nothing.",
      },
      { type: 'h3', text: 'Chain Link' },
      {
        type: 'p',
        text: "Cheap, fast, dog-proof if you spec the right height. The downside is that everyone can see your dog, including the mail carrier, the squirrels, and the Doberman two houses down. If you have a reactive dog, chain link will hand them a full-time job they don't need. Black vinyl-coated chain link costs about 20 percent more than galvanized and looks dramatically less industrial, usually worth the upgrade.",
      },
      { type: 'h3', text: 'Vinyl' },
      {
        type: 'p',
        text: "Smooth, dense, almost impossible to chew or scratch up. Vinyl is the move if you have a determined chewer, a panel that would be sawdust by Tuesday in cedar stays pristine for years in vinyl. Premium vinyl runs $32 to $44 a linear foot installed in Nashville, so you pay for that durability. July heat softens cheaper vinyl, buy from a contractor who has actually pulled out a sagging fence in August, not one selling out of a builder-grade catalog.",
      },
      { type: 'h3', text: 'Aluminum Ornamental' },
      {
        type: 'p',
        text: "Looks great, sails through HOA review in neighborhoods that want consistency, and gives a dog excellent visibility (good for confident dogs, bad for reactive ones). The detail that surprises every homeowner: picket spacing. Four inches is the max for puppies or small breeds, a Mini Pinscher will be on the lawn in 30 seconds through anything wider. If you are not sure, specify 3 7/8 inches and move on.",
      },
      { type: 'h3', text: 'Welded Wire and Farm Mesh' },
      {
        type: 'p',
        text: "Best for acreage outside Brentwood, Franklin, and the rural pockets of Williamson County. Cheaper per foot than privacy fencing and holds large dogs fine. Don't try to use it as a standalone barrier for a determined Husky, it will bow at the push points. Pair it with sturdy line posts every 8 feet, and add a hot wire along the top if you really need to keep something in.",
      },
      { type: 'h2', text: 'The Underground Game' },
      {
        type: 'p',
        text: "If your dog is a digger, and Beagles, Huskies, Terriers, and Dachshunds are factory-shipped as diggers, the fence itself isn't enough. The trench under the fence is.",
      },
      {
        type: 'p',
        text: "Three dig-prevention options, cheap to expensive:",
      },
      {
        type: 'ul',
        items: [
          'L-footer: bend 18 inches of welded wire mesh outward along the ground at the base of the fence, then bury it 2-3 inches under sod. The dog hits buried mesh on the first dig attempt and gives up. Cheap materials, one day of labor.',
          'Gravel trench: 12 inches of compacted gravel buried directly under the fence line. Dogs hate digging in gravel, and it doubles as drainage on flatter Davidson County lots. Middle option for cost and effort.',
          'Concrete curb: a 6-inch concrete strip poured along the fence line. Permanent, a little ugly until the grass grows over it, completely dog-proof. Adds $8-12 per linear foot to the install.',
        ],
      },
      {
        type: 'p',
        text: "Whatever you pick, make sure your installer talks about it. If you mention you have a dog and they don't bring up dig prevention on their own, that's a yellow flag and you should ask follow-up questions before signing anything.",
      },
      { type: 'h2', text: 'Privacy vs. Visibility, A Behavior Question, Not an Aesthetic' },
      {
        type: 'p',
        text: "Counterintuitive insight from a guy who has been on a lot of backyard consults: solid privacy is not always the right call. If your dog is reactive, barks at squirrels, lunges at strollers, has a problem with the school bus, a privacy fence is heaven. They can't see the trigger, they don't react, the neighbors stop leaving notes.",
      },
      {
        type: 'p',
        text: "But if your dog is anxious, afraid of noises, suspicious of the unknown, solid privacy can make it worse. They hear the trigger but can't verify what it is, which is the dog brain's worst-case scenario. A see-through aluminum or a 4-inch picket spacing lets them check, confirm it's fine, and go back to napping.",
      },
      {
        type: 'p',
        text: "Mix-and-match works: 6 ft cedar privacy along the side neighbor (the loud one) and 5 ft aluminum across the back (the view of the woods). Most install crews in Nashville will quote that combination without blinking.",
      },
      { type: 'h2', text: 'Nashville-Specific Stuff Nobody Else Will Tell You' },
      {
        type: 'p',
        text: "Three things that come up in this metro that don't make it into the standard fence guides.",
      },
      { type: 'h3', text: 'Coyotes are real and they are athletic' },
      {
        type: 'p',
        text: "If you are on the outskirts of Davidson County, in the rural parts of Williamson, or anywhere with a wooded greenway behind you, you have coyote pressure whether you have seen one or not. A 4-ft fence is a suggestion to a coyote. Plan for 5 ft minimum, no foot holds on the top rail (no horizontal stringer they can use as a step), and serious dig prevention. Coyotes are diggers too.",
      },
      { type: 'h3', text: 'HOAs run this town' },
      {
        type: 'p',
        text: "Brentwood, Franklin, and most of the planned communities require black aluminum or specific privacy specs. Get the architectural review board paperwork before the install crew shows up, the redo cost if you skip this is somewhere between $1,500 and the full project price. A good fence contractor should ask about HOA paperwork in the first ten minutes of the consultation. If they don't, ask them.",
      },
      { type: 'h3', text: 'Historic overlays do not care about your dog' },
      {
        type: 'p',
        text: "Edgefield, Germantown, Lockeland Springs, Belle Meade Conservation, they care about the street-facing elevation, not your golden retriever's containment plan. The compromise that wins approval: traditional ornamental iron or picket out front (the part the review board sees), and modern dog-appropriate cedar or wire in the rear yard. The [Historic Zoning Commission](/historic-overlays) isn't your enemy. They just want to see a thoughtful application.",
      },
      { type: 'h2', text: 'What I Wish More People Asked Before They Hired Me' },
      {
        type: 'p',
        text: "Eight questions that separate the contractors who think about dogs from the ones who think about linear footage:",
      },
      {
        type: 'ol',
        items: [
          'What dig prevention do you include in the base bid? (If the answer is none, that is fine, just price the add-on now, not later.)',
          'What is the picket spacing in inches? (Four-inch max for puppies and small breeds.)',
          'How do you set the gate latch? Most escapes happen through gates, not fences, your dog has been watching you open the gate for weeks.',
          'How do you handle the gap between the fence bottom and uneven ground? (This is where small dogs escape.)',
          'What is the warranty if a dog damages the fence? (Usually none, but if it is offered, that is a sign the contractor has thought about dog installs.)',
          "Have you installed for breed X before? A lot of contractors have never installed a coyote roller.",
          'What is the tallest height the HOA will approve at my exact address?',
          'Can I see one of your installs that is at least three years old, preferably one with a dog?',
        ],
      },
      {
        type: 'p',
        text: "Good answers to all eight earn the deposit. Vague answers to half of them mean keep calling.",
      },
      { type: 'h2', text: 'One Last Thing' },
      {
        type: 'p',
        text: "Your dog will get out of any fence once if they really want to. The job of a good fence isn't to be uncrackable, it's to be a 99-percent containment system that buys you the time to fix the gate latch, plug the soft spot in the trench, or call your contractor back to add the section you didn't think you needed. Pick someone who treats the install as the start of the relationship, not the end. The right fence company will pick up the phone in October when the November rain washes out the L-footer they put in for you in May.",
      },
    ],
  },
  {
    slug: 'pool-fence-safety-tn',
    title: 'Pool Fence Safety Laws in Tennessee',
    category: 'Compliance',
    readTime: '5 min',
    excerpt:
      'A homeowner-friendly walkthrough of the 2018 ISPSC barrier code, self-closing gates, and 4 ft minimum requirements.',
    img: IMAGES.resources['pool-fence-safety-tn'],
    imageAlt: 'Swimming pool with lounge chairs and a code-compliant barrier, Tennessee pool fence safety laws',
    body: [
      {
        type: 'p',
        text: "If you have a pool in Nashville and your fence is on the wrong side of the 2018 ISPSC code, two things can happen. The bad one is a child drowns and the lawsuit ends your retirement plan. The annoying one is a Metro inspector pulls into your driveway, puts a tape measure on the gate latch, and writes you a re-inspection ticket. I've seen both. The job of this article is to help you avoid the first and reduce the friction of the second.",
      },
      { type: 'h2', text: 'What Tennessee Actually Requires' },
      {
        type: 'p',
        text: "Tennessee adopted the 2018 International Swimming Pool and Spa Code at the state level, and Metro Nashville Codes enforces it. The short version is six rules that catch 95 percent of pool barrier failures:",
      },
      {
        type: 'ul',
        items: [
          'Minimum 4 ft barrier height from finished grade to the top of the fence.',
          'No gap anywhere a 4-inch sphere could pass, between pickets, under the fence, around posts.',
          'No horizontal members within 45 inches of the bottom (would let a child climb the fence like a ladder).',
          'Self-closing, self-latching gate that swings AWAY from the pool.',
          'Gate latch positioned at 54 inches minimum from grade.',
          'Chain link mesh 1.25 inches or smaller, standard 2-1/4" diamond chain link fails on the diagonal.',
        ],
      },
      {
        type: 'p',
        text: "Those are the legal minimums. Lots of HOAs tighten them further, and most homeowner insurance carriers have their own pool barrier riders that pile on additional rules. Always check both before signing a contract.",
      },
      { type: 'h2', text: 'The Five Inspection Failures I See Every Single Time' },
      {
        type: 'p',
        text: "When I get called to a pool job, half the time it's a new install that flunked the first inspection. The same five things, over and over.",
      },
      { type: 'h3', text: 'Latch hardware' },
      {
        type: 'p',
        text: "The cheap latches builders use on side-yard gates aren't pool-rated. They look fine, they work fine on the gate to your trash cans, and they don't pass on a pool barrier. Spend the extra $40 on a Magna Latch or equivalent pool-rated self-latching mechanism. Mount it at exactly 54 inches plus a half-inch buffer, inspectors round down.",
      },
      { type: 'h3', text: 'Self-closing hinges' },
      {
        type: 'p',
        text: "A standard hinge does not pass. You need spring-loaded self-closing hinges, properly tensioned so the gate closes within about five seconds when released from open. If you have to push the gate the last six inches to get it to latch, the inspector fails you. Adjust tension before the inspection.",
      },
      { type: 'h3', text: 'The 45-inch climbing rule' },
      {
        type: 'p',
        text: "If you have any horizontal rail between the bottom of the fence and 45 inches up, the inspector flags it. Plenty of off-the-shelf aluminum and vinyl fence kits have a mid-rail at 28 to 32 inches. That fails. Either spec a kit without that rail or pay a little more for custom panels, far cheaper than a redo.",
      },
      { type: 'h3', text: 'Gap under the fence on sloped yards' },
      {
        type: 'p',
        text: "This trips up everyone. When the ground falls away from the fence line, you get a triangle-shaped gap at the low end. If a 4-inch sphere passes under, you fail. The fix is to step the fence down in 4-foot or 8-foot sections so each post bottom sits flush with grade, with the bottom rail following the step rather than the slope.",
      },
      { type: 'h3', text: 'Pet doors and low windows in the house wall' },
      {
        type: 'p',
        text: "If your house wall is part of the pool barrier, and it usually is on the side facing the pool deck, any pet door or window low enough for a child to climb through fails. The fix isn't subtle. Block them off, replace with fixed glass, or rebuild the barrier so the house wall isn't part of it.",
      },
      { type: 'h2', text: 'When You Actually Need a Permit' },
      {
        type: 'p',
        text: "Three scenarios trigger a Metro Codes permit on a pool barrier in Nashville:",
      },
      {
        type: 'ul',
        items: [
          'New pool installation, the pool permit includes the barrier.',
          'Pool barrier replacement, any tear-down and rebuild.',
          'Material change, switching from chain link to aluminum, for example.',
        ],
      },
      {
        type: 'p',
        text: "Cosmetic work, adding decorative trim, repainting, doesn't require a permit. But if you're touching the height, the gate hardware, or the panel structure, pull the permit. The reinspection-and-correction cost dwarfs the permit fee every single time.",
      },
      { type: 'h2', text: 'Materials Metro Inspectors Approve Consistently' },
      { type: 'h3', text: 'Aluminum ornamental' },
      {
        type: 'p',
        text: "The gold standard for pool barriers in Nashville. Vertical pickets at 3-7/8 inch spacing, no horizontal climbable rail in the middle, drains well, looks intentional. Costs more than chain link, less than welded wrought iron, and holds up better than both in a chlorine-spray environment.",
      },
      { type: 'h3', text: 'Cedar privacy with pool-rated specs' },
      {
        type: 'p',
        text: "Wood works, but only if you spec it correctly. Standard 5/8-inch dog-ear pickets can warp and create gaps over a single Nashville summer. Use 1x6 boards minimum, install with stainless or hot-dipped galvanized fasteners, and pour a 6-inch concrete curb under the bottom rail on sloped sections to seal the gap.",
      },
      { type: 'h3', text: 'Vinyl with pool-pickets' },
      {
        type: 'p',
        text: "Premium vinyl is great. Cheap vinyl sags in a Nashville August and creates climbable gaps as the panels deform. Don't skimp on the panel weight, and verify the manufacturer's pool-code spec sheet before you sign.",
      },
      { type: 'h2', text: 'Chain Link, Read This Before You Buy' },
      {
        type: 'p',
        text: "Standard 2-1/4 inch diamond chain link does NOT pass pool code. The mesh is too big, a 4-inch sphere fits through it on the diagonal, and that's the test the inspector runs. If your existing chain link is 2-1/4 inch, you have three real options:",
      },
      {
        type: 'ul',
        items: [
          'Add privacy slats, Metro will accept properly installed slats as filling the gap. Verify the specific slat brand with Codes before you buy.',
          'Replace with 1.25-inch tight-mesh chain link, which is sold as security-grade.',
          'Replace with a different material entirely.',
        ],
      },
      {
        type: 'p',
        text: "Don't just hope the inspector misses the gap. They have a 4-inch test sphere in the truck for exactly this reason.",
      },
      { type: 'h2', text: 'The Metro Nashville Inspection Process' },
      {
        type: 'p',
        text: "Three things that catch homeowners off guard when they actually book the inspection:",
      },
      {
        type: 'ul',
        items: [
          "Inspectors schedule within five business days of the permit, but the actual inspection slot can land a couple weeks out depending on season. Plan the install timeline around the inspection, not the other way around.",
          "Pool fill cannot legally happen until the barrier passes. If you're racing to be in the water by Memorial Day, this matters.",
          "The inspector wants to see the gate close and latch on its own. Have a screwdriver on the truck, a stuck latch or weak hinge tension fails the inspection, and a 30-second tweak passes it.",
        ],
      },
      { type: 'h2', text: 'What to Ask Your Pool Fence Contractor' },
      {
        type: 'ol',
        items: [
          "Have you pulled at least ten Metro Codes pool permits in the last twelve months?",
          "Do you stock Magna Latch or equivalent pool-rated hardware on the truck, or do you order it the day of install?",
          "What's your step-down approach on sloped yards?",
          "How do you handle the house-wall section of the barrier?",
          "Will you be on-site for the Codes inspection?",
        ],
      },
      { type: 'h2', text: 'One Last Thing' },
      {
        type: 'p',
        text: "Pool fences are the one place in residential fencing where the cheap option gets people killed. They're also the one place where the regulations are clear, the inspectors are reasonable, and a couple hundred extra dollars buys you the right hardware. Spend it. Buy yourself the peace of mind that the legal exposure is gone and the kid-from-down-the-street risk is as low as you can make it.",
      },
    ],
  },
  {
    slug: 'metro-nashville-permits',
    title: 'Metro Nashville Fence Permit Guide',
    category: 'Permits',
    readTime: '8 min',
    excerpt:
      'When you do (and do not) need a permit, height limits by yard, and how to handle historic overlay districts.',
    img: IMAGES.resources['metro-nashville-permits'],
    imageAlt: 'Modern Nashville home with manicured lawn, Metro Nashville fence permit guide',
    body: [
      {
        type: 'p',
        text: "I've pulled somewhere around four hundred fence permits at the Metro Codes office on Korean Veterans Boulevard, and I can tell you the actual hard part isn't the application. The hard part is figuring out whether you needed the permit at all, and if so, which Metro department you owe a phone call to first. This article is the short version of every conversation I've had on a Nashville driveway in the last decade.",
      },
      { type: 'h2', text: 'The Honest 80/20, When You Need a Permit' },
      {
        type: 'p',
        text: "For an average single-family residential fence in Nashville, you do NOT need a Metro Codes permit if all of the following are true:",
      },
      {
        type: 'ul',
        items: [
          'The fence is 8 feet tall or shorter.',
          'The property is NOT in a historic overlay district.',
          'There is no pool, pond, or water feature the fence is also serving as a barrier for.',
          'You are not in a designated flood zone with a fence in the regulated area.',
          'The fence is not part of a commercial property.',
        ],
      },
      {
        type: 'p',
        text: "Hit all five and you can install without a Metro permit. That's how the majority of cedar privacy fences in Davidson County get built, no paperwork, just measure and dig. But miss even one and you're in permit territory, and Metro absolutely follows up on unpermitted work that crosses their radar (a neighbor complaint, a pool inspection, a real-estate disclosure).",
      },
      { type: 'h2', text: 'Height Limits by Yard, The Map You Actually Need' },
      {
        type: 'p',
        text: "Even without a permit, Metro has zoning rules on height. These apply whether you're permitting or not, and your contractor should know them cold. Show them this list at the consultation if you want to see who knows their job:",
      },
      {
        type: 'ul',
        items: [
          'Front yard, solid panel (privacy, vinyl, solid wood): 3.5 feet maximum.',
          'Front yard, open style (picket, ornamental aluminum, iron): 4 feet maximum.',
          'Side yard: 8 feet maximum on a standard residential lot.',
          'Rear yard: 8 feet maximum.',
          'Corner-lot sight triangle (within 30 feet of an intersection): 3 feet maximum, no exceptions, no negotiation.',
          'Pool barrier: 4 feet minimum (this is a separate state-level rule that overrides the zoning numbers).',
        ],
      },
      {
        type: 'p',
        text: "If you want a taller fence than these, say a 10-foot acoustic fence along a noisy back street, you need a Metro Codes variance and a building permit. Expect to add 30 to 60 days to the project timeline.",
      },
      { type: 'h2', text: 'The Permit Process When You Actually Need One' },
      {
        type: 'p',
        text: "When a permit is required, the steps are short but easy to mess up.",
      },
      { type: 'h3', text: 'Step 1, Confirm your zoning' },
      {
        type: 'p',
        text: "Pull up your property on the Metro Davidson Parcel Viewer and verify the zoning district, the overlay status, and any flood zone designation. This is free and takes 90 seconds. Bring screenshots to the contractor consultation so you both look at the same data.",
      },
      { type: 'h3', text: 'Step 2, Submit the application' },
      {
        type: 'p',
        text: "You can apply online through the Metro ePermits portal or walk into the Codes office. Walk-ins used to be faster; the online portal has caught up in the last two years and is now my default. You'll need a site plan (a hand-drawn parcel map with the fence line marked is fine), the proposed materials, and the height. Fee is around $50-100 for a residential fence permit at time of writing, but verify the current schedule.",
      },
      { type: 'h3', text: 'Step 3, Wait for plan review' },
      {
        type: 'p',
        text: "Plan review takes anywhere from one day to two weeks depending on Codes' backlog. A clean, simple residential fence application typically clears in 3-5 business days. Historic overlay applications take longer because they also route through the Historic Zoning Commission.",
      },
      { type: 'h3', text: 'Step 4, Inspection after install' },
      {
        type: 'p',
        text: "Most residential fence permits in Nashville require a single rough-and-final inspection after the install is complete. Schedule it through Metro, meet the inspector on site, and have the permit number ready. Pool barriers add a separate barrier inspection, see the [Pool Fence Safety](/resources/pool-fence-safety-tn) article for the details.",
      },
      { type: 'h2', text: 'Historic Overlay Districts, A Different Animal' },
      {
        type: 'p',
        text: "Nashville has eight active [historic overlay districts](/historic-overlays) as of this writing, and your fence application in any of them goes through the Metro Historic Zoning Commission BEFORE it goes through Codes. The districts that come up most often in fence work:",
      },
      {
        type: 'ul',
        items: [
          'Edgefield (East Nashville)',
          'Germantown',
          'Lockeland Springs',
          'Richland-West End',
          'Hillsboro-West End',
          'Belle Meade Conservation (technically a separate city, even stricter)',
        ],
      },
      {
        type: 'p',
        text: "The Historic Zoning Commission cares almost entirely about street-facing elevations. They want to see materials, height, and style that fit the period of the district. The compromise that wins approval almost every time: traditional wood picket or wrought iron on the front yard, modern dog-appropriate cedar or aluminum in the rear yard where reviewers can't see it from the street.",
      },
      {
        type: 'p',
        text: "Submit the Preservation Permit application through Metro Historic Zoning. Once approved, the preservation permit attaches to your standard Metro Codes building permit. Skipping the HZC step and going straight to Codes is a guaranteed reject, they catch it on plan review and route you back. Plan an extra 4-6 weeks for the HZC review window.",
      },
      { type: 'h2', text: 'HOA Versus Metro, They Are Not the Same' },
      {
        type: 'p',
        text: "Brentwood, Franklin, Spring Hill, most of the planned communities, and even some neighborhoods inside Davidson County have HOAs with their own architectural review boards. The HOA is a private contract you signed at closing. Metro is the government. They run on completely separate tracks.",
      },
      {
        type: 'p',
        text: "Metro approval does not satisfy your HOA. HOA approval does not satisfy Metro. You need both, in any order, before the dig. The HOA review is usually faster (1-2 weeks) but the rules are often tighter, many HOAs require specific colors, specific materials, or specific manufacturers. Read your CC&Rs before you get a quote, not after.",
      },
      { type: 'h2', text: "Tennessee 811, Don't Skip This" },
      {
        type: 'p',
        text: "Before any post hole goes in the ground in Tennessee, state law requires you (or your contractor) to call 811 and give a minimum of three business days notice. The free Tennessee 811 utility-marking service will come out, paint flags for gas, electric, water, fiber, and telecom, and that's it. Don't skip it.",
      },
      {
        type: 'p',
        text: "Hitting a gas line is a five-figure fine plus restoration plus whatever the gas company decides to add. Hitting a fiber line is the same plus an angry tech crew rerouting service for the block. Hitting a water line is just inconvenient and embarrassing. Your contractor should make the 811 call. If they don't, that's a major yellow flag.",
      },
      { type: 'h2', text: 'Common Homeowner Mistakes That Cost Money' },
      {
        type: 'ul',
        items: [
          'Assuming the permit covers the HOA review. They are separate processes.',
          'Building the fence before HZC approval in a historic district. Removal at your expense is the standard penalty.',
          'Setting a corner-lot fence above 3 feet within the sight triangle. Metro will make you tear it down.',
          'Not pulling a permit for a commercial property fence "because it is just a small one." Commercial fences always need a permit, regardless of size.',
          'Replacing an existing fence at a different height without checking the current rules. Old grandfathered heights do not always transfer to new construction.',
        ],
      },
      { type: 'h2', text: 'Questions to Ask Your Fence Contractor About Permits' },
      {
        type: 'ol',
        items: [
          'Do you pull the Metro Codes permit on my behalf, or am I pulling it myself? (Almost every reputable contractor pulls it for you, included in the bid.)',
          'How many Metro fence permits have you pulled in the last 12 months?',
          'Will you submit the HZC application if my property is in a historic overlay?',
          'Do you make the Tennessee 811 call, or do I?',
          'What happens to my deposit if the permit gets denied?',
        ],
      },
      { type: 'h2', text: 'One Last Thing' },
      {
        type: 'p',
        text: "Metro Codes inspectors are reasonable people doing a routine job. Your fence project is the 47th of their day. Have the permit number ready, walk the line with them, and let them do the work. The permit fee is the cheapest part of the project, and the peace of mind of a closed-out permit is worth dramatically more on the day you sell the house. Get it done right the first time.",
      },
    ],
  },
  {
    slug: 'fence-cost-breakdown',
    title: 'Anatomy of a Nashville Fence Quote',
    category: 'Cost',
    readTime: '9 min',
    excerpt:
      'Line-item analysis: materials, labor, post-setting, gates, and the hidden costs that surprise first-time buyers.',
    img: IMAGES.resources['fence-cost-breakdown'],
    imageAlt: 'Black metal fence in front of a Nashville lawn, anatomy of a Nashville fence quote',
    body: [
      {
        type: 'p',
        text: "Three contractors hand you three quotes. One is $4,200, one is $5,800, one is $7,400. Same fence. Same yard. What's actually going on? In my experience the answer is almost never that the cheap guy is hiding savings or that the expensive guy is gouging, it's that the three of them are quoting three different scopes and burying the differences in the line items. This article is a flashlight for the fine print.",
      },
      { type: 'h2', text: 'The Anatomy of an Honest Fence Quote' },
      {
        type: 'p',
        text: "A complete residential fence quote in Nashville should have, at minimum, these line items broken out. If any of them are missing, ask why before you sign.",
      },
      {
        type: 'ul',
        items: [
          'Materials (boards, posts, hardware), usually quoted per linear foot.',
          'Labor, either rolled into the per-foot rate or broken out separately.',
          'Post setting and concrete.',
          'Gates (each one priced individually).',
          'Demolition and haul-off of the existing fence.',
          'Permits and fees.',
          'Tennessee 811 utility marking coordination.',
          'Site prep and minor grading.',
          'Cleanup and final walkthrough.',
        ],
      },
      {
        type: 'p',
        text: "A quote that's just 'Wood Privacy Fence, $5,800' is not a quote. It's a number on a napkin. Push for the line items. A contractor who can't break them out either doesn't know their own costs or doesn't want you to know.",
      },
      { type: 'h2', text: 'Materials, Per Linear Foot Means Different Things' },
      {
        type: 'p',
        text: "Materials are usually the biggest single line and the easiest place to skim. Cedar privacy fence runs $28 to $38 per linear foot installed in Nashville, premium vinyl runs $32 to $44, aluminum ornamental runs $30 to $48, chain link runs $12 to $22. Those are the typical 2026 ranges for Davidson and Williamson County jobs. Below the bottom of each range, ask what's getting cut.",
      },
      {
        type: 'p',
        text: "The three places contractors save money on materials without telling you:",
      },
      {
        type: 'ul',
        items: [
          'Picket thickness. A 5/8-inch dog-ear cedar picket is the bargain spec. 3/4-inch is the standard. 1-inch is premium. Pickets warp at thinner gauges, especially through a Nashville summer.',
          'Post grade. 4x4 pressure-treated posts are standard for wood privacy. 6x6 posts on gate ends and corners are upgrade territory. Steel posts wrapped in wood sleeves are commercial-grade. Cheap quotes use the smallest post they can get away with.',
          'Hardware. Galvanized screws and nails are baseline. Stainless steel costs more, lasts decades, and is what you want anywhere salt or moisture lingers. A quote that says "fasteners" without specifying material is hiding something.',
        ],
      },
      { type: 'h2', text: 'Post Setting, Where Nashville Soil Punishes Shortcuts' },
      {
        type: 'p',
        text: "Middle Tennessee has clay soil that swells, contracts, and freezes a few inches deep most winters. A fence post that's set wrong here looks fine on day one and leans within 18 months. The right post-setting spec in Nashville:",
      },
      {
        type: 'ul',
        items: [
          'Post hole depth: 30 inches minimum for a 6-foot fence, 36 inches for an 8-foot fence. The frost line in Nashville is shallow, 8-10 inches, but the leverage on a tall fence in clay soil punishes shallow posts.',
          'Concrete: a 60-pound bag of high-strength concrete per post is the floor. A bag and a half per post is the contractor who actually does it right. Quotes that don\'t mention concrete on the post-setting line are using dirt-pack, and that fence will lean.',
          'Gravel base: 3-4 inches of crushed stone at the bottom of every post hole for drainage. Skipping this is the number one reason wood posts rot from the bottom up.',
        ],
      },
      {
        type: 'p',
        text: "If the quote says 'set posts in concrete' and that's it, ask follow-up questions. If they say 'set posts' with no concrete spec, walk away.",
      },
      { type: 'h2', text: 'Gates, Always More Than You Think' },
      {
        type: 'p',
        text: "Gates are where the budget surprises live. A walk-gate adds $250-400 to a wood fence install, $400-700 to a vinyl, and $500-900 to an aluminum ornamental. A double drive-gate (the wide one for vehicles) is $1,200-2,800 depending on material and hardware. Automatic operators are another $1,800-3,200 on top.",
      },
      {
        type: 'p',
        text: "Three line items to verify on every gate:",
      },
      {
        type: 'ul',
        items: [
          'Posts: gate posts are bigger and set deeper than line posts. 6x6 wood or steel-reinforced are standard for wide gates. Check the spec.',
          'Hardware: gate hinges and latches take far more abuse than fence hardware. Pool-rated self-closing hinges run $80 each. Standard residential hinges are $20. Big difference, easy to substitute, hard to see after install.',
          'Hardware warranty: most fence warranties exclude gate hardware. Ask. A separate hardware warranty is reasonable to expect on a higher-end install.',
        ],
      },
      { type: 'h2', text: "Demolition and Haul-Off, The Forgotten Line" },
      {
        type: 'p',
        text: "If you have an existing fence, removing it and hauling it away is not free. Most Nashville contractors charge $4-8 per linear foot for tear-out, depending on whether the posts are set in concrete. A 150-foot existing chain link comes out for $600-1,200. A 150-foot old cedar fence with the bottom rotted comes out for $750-1,500.",
      },
      {
        type: 'p',
        text: "Look for the demo line. If it's missing from the quote, ask if it's bundled into labor or excluded. 'Excluded' means you're tearing it out, which is a real Saturday of work and a dump truck rental.",
      },
      { type: 'h2', text: 'Permits, 811, and the Stuff That Looks Small' },
      {
        type: 'p',
        text: "These line items individually are minor, collectively they add up to a few hundred dollars, and missing them is how budgets blow.",
      },
      {
        type: 'ul',
        items: [
          'Metro Codes permit: $50-100 for a residential fence permit when required. Should be a line item if your project needs one.',
          'Historic Zoning Commission application: another $100-150 in overlay districts.',
          'Tennessee 811 utility marking: free service, but the contractor builds the scheduling time into their labor bid. Verify they handle the call.',
          'Site survey: needed if your property lines aren\'t marked. $400-900 in Davidson County, more in Williamson for larger lots.',
          'Stake-out before dig: the contractor walking the line with you to mark every post location. This is critical and should happen 24-48 hours before the install crew shows up.',
        ],
      },
      { type: 'h2', text: 'The Hidden Costs That Surprise First-Time Buyers' },
      {
        type: 'p',
        text: "Things that don't always make the initial quote but show up on the final invoice:",
      },
      {
        type: 'ul',
        items: [
          'Tree-line clearing. If brush is in the way, expect $4-9 per linear foot of clearing labor. Worth getting in writing.',
          'Rock encounters. Limestone is everywhere under Nashville soil. Hitting bedrock can add $40-80 per post hole. Reputable contractors quote this as a contingency rather than a surprise.',
          'Grade changes. Stepped fence on slopes adds 10-15% to the labor.',
          'Long material runs. Hauling fence panels into a backyard with no driveway access adds an hour of crew time per day.',
          'HOA color or stain requirements. Specified stain colors add $3-6 per linear foot.',
          'Concrete curb for pool barriers. $8-12 per linear foot, almost always missing from quote 1.',
        ],
      },
      { type: 'h2', text: 'How to Compare Three Quotes That Look Different' },
      {
        type: 'p',
        text: "The biggest mistake homeowners make is comparing the total at the bottom. The real comparison is line by line. Ask each contractor to break their quote into the categories above. If one of them refuses, that's your answer.",
      },
      {
        type: 'p',
        text: "Then for each category, ask: is the spec the same? Same picket thickness, same post size, same concrete spec, same hardware grade, same demo scope, same warranty terms. Once you normalize the specs, the price differences shrink to almost nothing, usually within 8-12 percent.",
      },
      {
        type: 'p',
        text: "If after normalizing, one quote is still 20+ percent cheaper, something is missing. Find it before you sign.",
      },
      { type: 'h2', text: 'Red Flags in a Quote' },
      {
        type: 'ul',
        items: [
          'No itemized line breakdown.',
          'No mention of post depth or concrete.',
          'No demo and haul-off line for a replacement project.',
          'No mention of permits in a permit-required scenario.',
          '50% deposit demanded up front. (30% is the Nashville standard for residential fence work. Anything higher is a yellow flag and 100% is a red flag.)',
          'No written warranty.',
          'Verbal-only quote ("I\'ll text you the number tomorrow"). Get it in writing.',
          'Pressure to sign today for a "special price."',
        ],
      },
      { type: 'h2', text: 'What to Ask Before You Sign' },
      {
        type: 'ol',
        items: [
          'Is this quote good for 30 days or 60 days?',
          'What is your deposit structure?',
          'What is the warranty on labor? On materials? On gate hardware separately?',
          'Who handles the Metro Codes permit and the Tennessee 811 call?',
          'What is your change-order process if you hit rock or have to clear brush?',
          'How many crews do you have, and which one will be on my install?',
          'Can I see two recent installs in my zip code, with the customers contact info?',
          'What is your callback policy if a post leans within the warranty window?',
        ],
      },
      { type: 'h2', text: 'One Last Thing' },
      {
        type: 'p',
        text: "Cheap fence quotes are not a deal, they're usually a smaller scope with the cuts hidden in the line items. Expensive quotes aren't a rip-off, they're usually a contractor doing the work the right way and explaining each dollar. Honest middle quotes from contractors who can explain every line are almost always the right answer. The cheapest fence in Nashville is the one you put in correctly the first time.",
      },
    ],
  },
  {
    slug: 'horizontal-cedar-trend',
    title: 'Why Horizontal Cedar Took Over East Nashville',
    category: 'Trends',
    readTime: '5 min',
    excerpt:
      'The design history behind the slat-style fence dominating East Nashville, 12 South, and Sylvan Park bungalows.',
    img: IMAGES.resources['horizontal-cedar-trend'],
    imageAlt: 'Horizontal cedar slat fence, East Nashville horizontal privacy trend',
    body: [
      {
        type: 'p',
        text: "Drive through Five Points, walk a block in 12 South, take a left in Sylvan Park, same fence. Long horizontal cedar slats, sometimes with a gap between them, almost always six feet tall, almost always around a bungalow built or renovated in the last 12 years. I've installed enough of these now that I can usually name the architect from the corner board. Here's the design story, the actual cost, and the technical reality of the trend I get asked about more than any other.",
      },
      { type: 'h2', text: 'Where the Look Came From' },
      {
        type: 'p',
        text: "The horizontal cedar fence is a mid-century revival. Architects in California in the 1950s and 1960s built ranch homes with horizontal slat fences and pergolas because the look complemented low-slung roof lines and big horizontal windows. When the mid-century aesthetic came back into broader residential design in the 2010s, partly through the Dwell magazine crowd, partly through Pinterest, partly because a generation of homeowners stopped wanting their houses to look like every other suburban Colonial, the horizontal fence came with it.",
      },
      {
        type: 'p',
        text: "Nashville's role in this is specific. The East Nashville rebuild wave from roughly 2012 onward filled neighborhoods like Lockeland Springs, Eastwood, and Cleveland Park with infill bungalows and modern-cottage builds. Their architects pulled from the same mid-century playbook. The horizontal fence wasn't a trend they invented, it was a finishing choice that fit the architecture. By 2018, builders were quoting horizontal cedar as the standard rear-yard option on every spec home east of the Cumberland.",
      },
      { type: 'h2', text: 'Why People Actually Want It' },
      {
        type: 'p',
        text: "Set aside the Instagram angle for a second. The horizontal fence has three real functional advantages over a traditional vertical privacy fence:",
      },
      {
        type: 'ul',
        items: [
          'It reads as a single design element instead of a row of pickets, which makes a small urban lot feel more intentional and less hemmed-in.',
          'The horizontal lines extend the eye horizontally, which makes a 30-foot-deep backyard feel longer than it is. Architects use the same trick on interior baseboards.',
          'A small reveal gap between slats (usually 1/4 to 1/2 inch) lets a tiny bit of light and air through without sacrificing privacy. Vertical privacy fences are totally solid.',
        ],
      },
      {
        type: 'p',
        text: "If you have a 4,800-square-foot lot in East Nashville with neighbors 10 feet on either side, the horizontal fence does more work for your backyard than vertical privacy. If you're in Brentwood on a half-acre, the design impact is smaller and the cost premium harder to justify.",
      },
      { type: 'h2', text: "What It Actually Costs in Nashville" },
      {
        type: 'p',
        text: "Horizontal cedar runs $42-58 per linear foot installed in Nashville right now. That's 20-40 percent more than vertical cedar privacy ($28-38) and about the same as premium vinyl. The premium comes from three places:",
      },
      {
        type: 'ul',
        items: [
          'More material per linear foot. Horizontal slats are usually 1x4 or 1x6 cedar, and you need a lot of them, typically 14-18 slats across a 6-foot-tall section. Vertical privacy uses bigger boards in fewer pieces.',
          'Posts must be set straighter. Horizontal slats expose any post that\'s off-plumb because the slat line shows it. Vertical pickets forgive a half-inch of post wobble. Horizontal slats do not.',
          'More cutting and fitting. Each slat is individually leveled. A two-person crew installs maybe 60 feet of horizontal fence per day; the same crew installs 100-120 feet of vertical privacy.',
        ],
      },
      { type: 'h2', text: "The Material Spec That Actually Holds Up" },
      {
        type: 'p',
        text: "I've ripped out plenty of horizontal fences that looked perfect on day one and bowed within two summers. The boards moved, the posts shifted, or the fastener pattern was wrong. The spec I write for clients now, after a decade of installs in Nashville's clay-and-humidity climate:",
      },
      { type: 'h3', text: 'Boards' },
      {
        type: 'p',
        text: "1x6 western red cedar, S4S (smooth four sides), tongue-and-groove if you want the cleanest reveal, butt-jointed if you want a small intentional gap. 1x4 cedar looks more delicate but moves more, only use it on short runs or in a backyard where you can keep an eye on it.",
      },
      { type: 'h3', text: 'Posts' },
      {
        type: 'p',
        text: "Steel posts inside cedar sleeves. This is the spec that separates the contractors who've been doing this for ten years from the ones who haven't. Wood posts in horizontal-slat fences telegraph every bit of movement to the slats. Steel posts (2x2-inch or 2x3-inch galvanized tube) wrapped in a cedar sleeve give you both the look and a structurally sound post.",
      },
      { type: 'h3', text: 'Fasteners' },
      {
        type: 'p',
        text: "Stainless steel face screws, two per slat at each post, pre-drilled. Galvanized nails will rust through the cedar within five years and bleed black streaks down each board. The fastener bill on a horizontal cedar fence is twice the bill on vertical privacy. Worth it.",
      },
      { type: 'h3', text: 'Top and Bottom Caps' },
      {
        type: 'p',
        text: "A horizontal top cap (a 2x6 cedar running flat across the top) ties the look together and protects the end grain of the slats from rain. Skip it and the top edges weather faster than the rest of the fence.",
      },
      { type: 'h2', text: "Where Horizontal Fences Go Wrong" },
      {
        type: 'p',
        text: "Five mistakes I see often, in rough order of how expensive they are to fix:",
      },
      {
        type: 'ul',
        items: [
          'Wood posts on a long run. The fence will lean within three years. Steel cores are not optional.',
          'No bottom cap or sealed end grain. Water wicks up from the ground, the bottom slats cup, the look falls apart.',
          'Uniform slat spacing on uneven ground. Set the post centers level first; if you slat-by-slat on a slope, the gaps look random and amateur.',
          'Cheap cedar grade. Knotty B-grade cedar costs less but bleeds resin and warps faster. Use Select Tight Knot grade minimum.',
          'No setback from grade. The bottom slat sitting on dirt is a guaranteed early failure point. Hold it 2-3 inches off the ground.',
        ],
      },
      { type: 'h2', text: 'Maintenance, Realistic, Not Aspirational' },
      {
        type: 'p',
        text: "Horizontal cedar weathers to a silver-gray within 18 months if you leave it untreated. Some people love the patina; some people hate it and call me asking why their brand-new fence looks old. There's no in-between, so decide which camp you're in before the install.",
      },
      {
        type: 'p',
        text: "If you want the cedar to stay warm-brown, plan on a re-stain every 2-3 years with a penetrating oil-based product. Budget $4-7 per linear foot for a professional re-stain in Nashville. DIY is possible but the labor is more than people expect on a 150-foot run.",
      },
      { type: 'h2', text: 'Historic Overlay Considerations' },
      {
        type: 'p',
        text: "Three of the four neighborhoods where horizontal cedar is most popular, Edgefield, Germantown, and Lockeland Springs, are inside [historic overlay districts](/historic-overlays). The Historic Zoning Commission tends to be skeptical of horizontal slat fences in front yards. They read as too modern for the period of the neighborhoods.",
      },
      {
        type: 'p',
        text: "The compromise that gets approved consistently: traditional picket or wrought iron in the front yard (the street-facing elevation the HZC reviews), horizontal cedar in the rear yard where review concerns drop dramatically. Plan for HZC review whether you're touching the front or not, and prepare to demonstrate that the rear yard fence is not visible from the public right-of-way.",
      },
      { type: 'h2', text: "Want the Look Cheaper? Here's How" },
      {
        type: 'p',
        text: "Three legitimate ways to get the horizontal aesthetic without the full $50-per-foot price tag:",
      },
      {
        type: 'ul',
        items: [
          'Wider slat profile, 1x6 instead of 1x4 cuts the slat count almost in half and the labor with it. Looks slightly less refined, but only the contractor will notice from the street.',
          'Hybrid panels, alternating horizontal cedar with steel-mesh inserts is cheaper than full cedar and reads as more modern, not less.',
          'Composite alternatives, Trex and similar composite manufacturers now make horizontal-style fence panels. The look is close, the price is similar to cedar, and they do not need re-staining. The trade-off is texture; composite reads as plastic up close.',
        ],
      },
      { type: 'h2', text: 'One Last Thing' },
      {
        type: 'p',
        text: "Horizontal cedar isn't a trend that's going anywhere. The architectural style it pairs with is going to be in production in Nashville for another 20 years, and the fence aesthetic is built into the design language of the homes. If you're putting one in, spend the extra money on steel post cores and stainless fasteners. It's the difference between a fence that looks great forever and one that looks great until summer of year three. The horizontal cedar fence you want is the one you don't have to think about for 20 years.",
      },
    ],
  },
  {
    slug: 'fence-repair-vs-replace-nashville',
    title: 'When to Repair vs. Replace Your Nashville Fence (The 60% Rule)',
    category: 'Repair',
    readTime: '7 min',
    excerpt:
      'A simple cost-based rule for deciding whether to repair or replace a damaged Nashville fence, plus material-by-material repair cost ranges from Davidson and Williamson Counties.',
    img: IMAGES.resources['fence-repair-vs-replace-nashville'],
    imageAlt: 'Aging chain link fence with weather-worn posts, Nashville fence repair vs replace 60 percent rule',
    body: [
      {
        type: 'p',
        text: "Standing in your Nashville backyard staring at a leaning fence is one of the more confusing decisions in homeownership. Patch the section that's failing, or pull the whole thing out and start over? I get the call constantly, usually the morning after a storm or the morning a real estate agent tells someone the fence is killing their list price. The good news is the math is straightforward. The bad news is most contractors don't run it for you because the bigger job pays better. So let me run it with you.",
      },
      { type: 'h2', text: 'The 60% Rule' },
      {
        type: 'p',
        text: "Adjusters use this rule on partial structures all day. Fence contractors who've been around use it too. The premise: if the cost to fix what's broken passes roughly 60 percent of a brand-new replacement, you stop coming out ahead. Three things flip at that threshold. The warranty resets across the whole run instead of just the patch. The rest of the fence gets the same useful life as the repaired sections. And you stop bolting fresh cedar onto posts that are already two years from leaning.",
      },
      {
        type: 'p',
        text: "Run the math with Nashville numbers and it's clean. A 180-foot cedar privacy fence runs about $5,400 installed ($30 per linear foot at the moment). Your 60 percent breakpoint is $3,240. If the repair quote comes in at $2,800, repair, no question. If it comes in at $3,800, replace, reset the clock, get the new warranty.",
      },
      { type: 'h2', text: 'When Repair Is Genuinely the Right Call' },
      {
        type: 'ul',
        items: [
          'Less than 20 percent of the total run is damaged.',
          'Posts are still sound, only panels, pickets, or rails need attention.',
          'The fence is under 10 years old and the rest of it has plenty of life left.',
          "Hardware is the actual failure point, latches, hinges, post caps, gate operators. None of those require a full rebuild.",
          "You're staying in the home fewer than 5 years and want the patch to outlast your closing date.",
          'Damage is isolated to one fence line, not the full perimeter.',
        ],
      },
      { type: 'h2', text: "When You Should Just Replace" },
      {
        type: 'ul',
        items: [
          'Posts are leaning or rotted at the base across multiple sections, patching is buying you maybe 18 months.',
          'A wood fence is 15+ years old with widespread weathering, graying, and bottom-rail rot.',
          'The repair quote exceeds 60 percent of a full replacement (this is the rule).',
          'Metro code or your HOA has changed and the existing fence is non-compliant, the patch still leaves you non-compliant.',
          "You're planning to sell within 12 months, buyers price an aging fence as a liability, not a feature.",
          'The original fence skipped concrete on the posts and the soil is no longer holding them. There is no patch for that. The posts have to come out.',
        ],
      },
      { type: 'h2', text: 'Nashville Fence Repair Cost by Material' },
      {
        type: 'p',
        text: "Repair pricing in Middle Tennessee depends on three things: the material, how much of the run is affected, and how urgent the job is. Storm-season repairs in April and May run 15-25 percent above winter pricing because every Nashville crew is backed up. If you can wait until February, you save money. Most people can't wait, but it's worth knowing.",
      },
      {
        type: 'table',
        headers: ['Material', 'Typical repair range', 'Most common fix'],
        rows: [
          ['Wood (cedar / pressure-treated)', '$8-$22 / linear ft', 'Picket replacement + post reset'],
          ['Vinyl (PVC)', '$12-$28 / linear ft', 'Cracked panel swap + post sleeve'],
          ['Chain link', '$6-$14 / linear ft', 'Re-stretched mesh + bent post repair'],
          ['Ornamental aluminum', '$14-$26 / linear ft', 'Bent rail / rust-spot repair + repaint'],
          ['Wrought iron', '$18-$36 / linear ft', 'Welded picket repair + gate hinge service'],
          ['Pet / invisible fence', '$140-$520 / visit', 'Boundary wire break repair + collar service'],
        ],
      },
      { type: 'h2', text: 'The Nashville Repair Calendar Every Contractor Knows' },
      {
        type: 'p',
        text: "Middle Tennessee weather is harder on fences than the national average. Clay-heavy soil, freeze-thaw cycles, a real spring storm season, they create a predictable repair calendar and a predictable contractor backlog every April. If you've never had a fence here through a full year, here's what each season hands you.",
      },
      {
        type: 'ul',
        items: [
          "Spring (March-May): wind-blown sections, broken posts at ground level, tree-fall damage. This is the biggest backlog of the year. Every reputable crew is 4-6 weeks out by April 15.",
          "Summer (June-August): wood swelling and warping, post rot at the base, gate sag from heat expansion. Cheaper materials show their cracks now.",
          "Fall (September-November): leaf debris piling up against panels, leaning posts that need to be reset before the freeze. The cheapest season to repair, fewer competing jobs.",
          "Winter (December-February): chain link mesh stretching from ice load, frost heave on shallow-set posts. Slowest season for contractors, fastest turnaround for you.",
        ],
      },
      { type: 'h2', text: 'How to Get a Credible Repair Quote' },
      {
        type: 'p',
        text: "Half the contractors who advertise repairs in Nashville actually prefer not to do them. Repairs are smaller jobs, weirder access, and harder to estimate cleanly. You want a crew that genuinely takes repair work, not one who'll quote it high to push you toward replacement.",
      },
      {
        type: 'ul',
        items: [
          'Photograph every damaged section before any contractor visits. This locks the scope and protects you from estimate creep.',
          'Ask for a line-item quote, material, labor, post setting, and disposal split out separately. Lump-sum repair quotes hide things.',
          'Get 2-3 quotes for any repair over $1,500. The spread will tell you a lot.',
          "Verify the contractor actually does repair work, not just full installs. Ask 'How many repair jobs did you do in the last 60 days?' If it's under 5, they're not really in the repair business.",
          "Confirm material warranty pass-through if you bought the original fence within the last 10 years. Plenty of manufacturer warranties cover the materials even when a different contractor does the repair labor.",
        ],
      },
      {
        type: 'callout',
        title: 'Get repair quotes from Nashville crews who actually do repairs',
        text: 'We route your photos and address to vetted Nashville fence repair companies that specialize in repair, not just installation. Most homeowners hear back within 24 hours.',
        ctaLabel: 'Get Free Repair Quotes',
        ctaHref: '/repair',
      },
      { type: 'h2', text: 'One Last Thing' },
      {
        type: 'p',
        text: "Repair vs. replace mostly answers itself once you've run the math. Pull a real replacement quote and a real repair quote, drop them into the 60 percent calculation, and pair the answer against how long you plan to own the home. Moving in two years? Lean repair. Staying ten? The math almost always points to replace, and you get a fresh warranty out of it.",
      },
      {
        type: 'p',
        text: "If the damage is from a storm and you're filing an insurance claim, the math gets a third variable: what the insurer will cover. Documentation in the first 24 hours is everything, photos before debris gets moved, photos of adjacent damage, the National Weather Service summary for that exact date. The [Storm-Damaged Fence guide](/resources/storm-damaged-fence-nashville-insurance) on this site walks you through that part. Otherwise, run the 60 percent rule, pick the right call, and the rest is just scheduling.",
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
    img: IMAGES.resources['storm-damaged-fence-nashville-insurance'],
    imageAlt: 'Weathered wooden gate at a Nashville-area property, storm-damaged fence insurance claim guide',
    body: [
      {
        type: 'p',
        text: "If you woke up to a fence on the ground in Nashville this spring, get in line. Middle Tennessee runs a storm season from roughly March to June that hits Davidson and Wilson the hardest, with Williamson and Rutherford catching the tail of every system that comes off the Cumberland Plateau. I've done storm-damage walkthroughs the morning after derechos, tornadoes, and ordinary 60-mph squalls. The homeowners who get repaired fastest and reimbursed the most are the ones who do four things in roughly the right order. This article is those four things.",
      },
      { type: 'h2', text: 'First 24 Hours, Document Like an Adjuster Is Reading It' },
      {
        type: 'p',
        text: "The single biggest predictor of a clean insurance claim is the photo set you take before you touch anything. Adjusters work on documentation, not vibes. The lighter your photo set, the lighter the check.",
      },
      {
        type: 'ol',
        items: [
          'Photograph every damaged section from at least three angles before anyone moves a board.',
          'Take a wide shot showing the property line and where the fence sits on it. Context matters.',
          'Photograph adjacent damage too, fallen trees, panel debris in the neighbor\'s yard, the dent in the shed roof. The adjuster decides cause from the surrounding scene.',
          'Note the date, time, and weather event. A National Weather Service summary URL pasted into your claim notes is gold.',
          'Save any Metro or county debris-removal notices that get posted to your door, they timestamp the event.',
          "Keep all debris on your property until the adjuster has seen it in person or you have time-stamped photos that prove it existed.",
        ],
      },
      { type: 'h2', text: "Filing the Claim, Tennessee Specifics" },
      {
        type: 'p',
        text: "Standard HO-3 homeowner policies in Tennessee treat fences as 'other structures', usually capped at 10 percent of your dwelling coverage. So if the house is insured for $400,000, you have up to $40,000 of other-structures coverage available, minus the deductible. That ceiling is plenty for almost any residential fence rebuild. The bottleneck is timing and paperwork, not the policy limit.",
      },
      {
        type: 'ul',
        items: [
          "Call your insurer's claims line within 48 hours of the storm. Earlier is better. Adjusters batch by call date.",
          "Tennessee statute gives insurers 30 days to acknowledge a claim and 60 days to investigate. They use most of it. Plan accordingly.",
          "Your deductible applies, usually $1,000-$2,500, sometimes higher for named-storm wind or hail.",
          "Ask explicitly whether your policy has a separate wind/hail deductible. Plenty of TN policies do.",
          "Get the claim number and the adjuster's name in writing before you hang up. Email them to yourself.",
        ],
      },
      { type: 'h2', text: "What's Actually Covered vs Denied" },
      {
        type: 'p',
        text: "Homeowner policies cover sudden accidental damage. Anything gradual gets denied. The line between the two is where the disagreements happen.",
      },
      {
        type: 'table',
        headers: ['Usually covered', 'Usually denied'],
        rows: [
          ['Wind damage from a documented storm', 'Gradual rot or aging'],
          ['Hail damage to vinyl and aluminum', 'Leaning from soft soil with no triggering event'],
          ["Fallen tree damage (yours or the neighbor's)", 'Poor original installation'],
          ['Vehicle impact', 'Lack of maintenance or stain failure'],
          ['Vandalism', 'Pet damage from your own animal'],
        ],
      },
      {
        type: 'p',
        text: "The 'leaning post with no triggering event' denial trips up more homeowners than any other line. If your fence has been gradually tilting for two years and the storm finished it off, the adjuster will rule it pre-existing. The fix is to demonstrate the storm caused the failure, same-day photos, weather data for that exact address, snapped wood at ground level rather than rotten.",
      },
      { type: 'h2', text: 'Getting an Estimate the Adjuster Will Actually Accept' },
      {
        type: 'p',
        text: "Half the claim friction I see is the estimate itself, not the damage. Adjusters trust formatted, line-itemized contractor estimates and push back on anything that looks rushed.",
      },
      {
        type: 'ul',
        items: [
          "Get the quote on contractor letterhead. A handwritten estimate works in a pinch but gets a slower review.",
          "Separate line items for labor, materials, post setting, hardware, and debris haul-off.",
          "Have the contractor explicitly write 'storm-related' or 'wind damage' on the quote if that's the cause.",
          "Match the original spec, same height, same material, same post depth. Upgrades come out of your pocket, not the claim.",
          "Include a real start date. Adjusters approve faster when they see a project timeline rather than 'TBD.'",
        ],
      },
      { type: 'h2', text: "Same-Week Repair, What's Realistic After a Major Storm" },
      {
        type: 'p',
        text: "Every reputable Nashville fence company's phone rings nonstop for two weeks after a major storm event. Crews that are normally 2-3 weeks out stretch to 4-6 weeks. Same-week repair is doable but it requires three things: your photos and spec ready before the first phone call, your contractor flexible on which crew shows up, and you willing to accept the first qualified team with bandwidth.",
      },
      {
        type: 'ul',
        items: [
          'Some Nashville fence companies run a dedicated storm-response crew. Ask explicitly when you call.',
          "Don't sign with the first knock-on-door contractor who shows up in your driveway. Storm chasers move from city to city and disappear when the warranty calls start.",
          "Verify license and insurance through a directory or the Tennessee Board for Licensing Contractors before you hand over a check.",
          "If your claim is approved, you pick the contractor, not your insurer. They'll suggest one but you're not bound to it.",
        ],
      },
      {
        type: 'callout',
        title: 'Need same-week storm fence repair in Nashville?',
        text: "Upload your damage photos and address, we route to Nashville fence repair crews with bandwidth this week. Wood, vinyl, chain link, aluminum, and wrought iron all covered.",
        ctaLabel: 'Get Storm Repair Quotes',
        ctaHref: '/repair',
      },
      { type: 'h2', text: 'Common Nashville Storm-Damage Patterns I See Every Spring' },
      {
        type: 'ul',
        items: [
          'Wind-blown sections, usually 2-4 adjacent panels need replacement and the posts survive intact.',
          'Snapped wood posts at ground level, wind torque shears pressure-treated posts where moisture has weakened them. The fix is post replacement plus new concrete.',
          'Tree-fall damage, full section replacement plus post reset plus tree debris cleanup. Often the most expensive line on a storm claim.',
          'Hail dimpling on vinyl, mostly cosmetic, hard to claim unless severe. If the panels are functionally fine, the adjuster usually denies.',
          'Chain link mesh stretch, easy fix, under $300 most of the time. Tighten, replace tension bars, walk away.',
          'Bent aluminum rails, straighten the rails, repaint the affected sections, full replacement is rarely necessary.',
        ],
      },
      { type: 'h2', text: 'The Five Mistakes That Hurt Your Claim' },
      {
        type: 'ul',
        items: [
          "Removing debris before the adjuster has seen it (or before you have time-stamped photos).",
          "Accepting the first contractor who knocks on your door post-storm. The good ones are too busy to door-knock.",
          "Signing an 'Assignment of Benefits' form without reading it. AOB hands your claim payment directly to the contractor, which is fine if they're reputable and a disaster if they're not.",
          "Starting DIY repair before the claim is approved. Most insurers can deny the claim entirely if you altered the damage scene.",
          "Skipping the line-item breakdown on your estimate. Lump-sum quotes get scrutinized harder and approved slower.",
        ],
      },
      { type: 'h2', text: "After Your Claim Is Approved" },
      {
        type: 'p',
        text: "Once the approval letter is in hand, you have more leverage than most homeowners realize. The insurance company doesn't pick your contractor. You do. Get 2-3 quotes, the claim amount is the floor, not the ceiling. Match the original spec or upgrade and pay the difference out of pocket.",
      },
      {
        type: 'p',
        text: "If the repair quote comes in well below 60 percent of a full replacement, you're in good shape, repair is the right call. If it's close to or above that line, talk to the contractor about a full replacement. (The full [60 Percent Rule walkthrough](/resources/fence-repair-vs-replace-nashville) explains the math.) Your insurance proceeds usually apply either way, and you get a fresh fence with a fresh warranty instead of a patched one with a clock.",
      },
      { type: 'h2', text: 'One Last Thing' },
      {
        type: 'p',
        text: "Storm-damaged fences are the easiest insurance claims to file and the easiest to mess up. The homeowners who do it right take 40 photos in the first hour, file inside 48 hours, get a real contractor with letterhead to write the estimate, and pick someone with their license number on the truck instead of in the parking lot. Do those four things and the check shows up. Skip any of them and you're paying a deductible plus the gap. Move fast.",
      },
    ] as ResourceSection[],
  },
  {
    slug: 'hire-nashville-fence-installer-questions',
    title: '7 Questions to Ask Before Hiring a Nashville Fence Installer',
    category: 'Hiring',
    readTime: '8 min',
    excerpt:
      'Nashville-specific vetting checklist for fence contractors, Tennessee licensing, 811 dig-safe, post depth, HOA approvals, payment terms, and the three recent installs every reputable Nashville crew should be able to show you.',
    img: IMAGES.resources['hire-nashville-fence-installer-questions'],
    imageAlt: 'Black metal fence in front of a green Nashville lawn, questions to ask before hiring a Nashville fence installer',
    body: [
      {
        type: 'p',
        text: "Hiring a fence installer in Nashville is a $4,000 to $8,000 decision for most homeowners, bigger than a new fridge, smaller than a kitchen remodel, with none of the buyer protections of either. Here's the kicker: Tennessee doesn't issue a state-level residential contractor license for any fence job under $25,000. The bar to print 'Nashville fence company' on a truck door is essentially zero, and that's reflected in the quality range I see when I follow up on the leans, the sags, and the warranty calls. The seven questions below separate the crews that show up on time with concrete-set posts from the ones who leave you with a leaning fence inside the warranty window. Ask all seven before you sign anything.",
      },
      { type: 'h2', text: '1. Are you licensed in Tennessee and properly insured?' },
      {
        type: 'p',
        text: "Tennessee does not require a state contractor license for residential fence work under $25,000. Above that threshold, the Tennessee Board for Licensing Contractors requires a general contractor license. Either way, the two pieces of paper you actually want in hand are a current Certificate of Insurance showing general liability (minimum $1M is the Nashville standard) and workers' comp coverage. The right way to verify is to ask the contractor's insurance broker to email the COI directly to you, not a copy forwarded from the contractor's office.",
      },
      {
        type: 'p',
        text: "Why this matters in plain English: if a crew member gets hurt on your property and the contractor doesn't carry workers' comp, your homeowner's insurance becomes the next target. A single serious back injury claim runs six figures. The $40 in postage to verify is the cheapest insurance you'll ever buy.",
      },
      {
        type: 'p',
        text: "If you get 'we're fully insured' without a COI in hand, or if the contractor pushes back on having the broker email proof directly, that's the answer. The good ones make it easy because they have nothing to hide.",
      },
      { type: 'h2', text: '2. Will you call Tennessee 811 before digging, and how many days ahead?' },
      {
        type: 'p',
        text: "Tennessee's Underground Utility Damage Prevention Act requires a minimum of three business days notice to Tennessee 811 before any excavation, fence post holes included. That's not a suggestion, it's state law. Nicking a gas line, fiber bundle, or water main triggers per-incident fines plus repair costs that can run into the thousands. The gas strikes are the most expensive: a 3/4-inch line nick can mean a four-figure to five-figure repair plus liability if the outage affects the neighbors.",
      },
      {
        type: 'p',
        text: "Tennessee 811 marks public utilities for free. Private utilities, your irrigation lines, your low-voltage landscape lighting, your sprinkler valves, your septic field, are on you. Any contractor worth hiring will ask you about private utility runs at the consultation. If they don't, ask them.",
      },
      {
        type: 'p',
        text: "If you hear 'we'll just be careful,' or 'we don't need to call for shallow posts,' or 'we can dig the same day you sign,' you're done. The 3-business-day notice cannot be compressed and anyone offering to skip it is offering to put your gas line on the line for the schedule.",
      },
      { type: 'h2', text: '3. Are posts set in concrete, and how deep?' },
      {
        type: 'p',
        text: "Nashville's published frost line sits around 12 inches, but the clay-heavy soil here heaves more than the depth alone suggests. The industry standard for residential fence posts in Davidson and Williamson Counties is 24 to 36 inches deep, set in concrete, with a 6-inch gravel base at the bottom of the hole for drainage. For any privacy fence at 6 feet or taller, 36 inches is the minimum a reputable Nashville crew will quote.",
      },
      {
        type: 'p',
        text: "Post depth is the single biggest predictor of how long your fence stays straight. Shallow posts in Nashville clay equal a leaning fence inside three winters, and the failure usually shows up in the warranty window. Concrete versus tamped-dirt-only is the other variable, concrete is the default for any privacy fence, and 'we don't always need concrete' is the wrong answer from anyone quoting a 6-foot or taller fence.",
      },
      {
        type: 'p',
        text: "The answers you want to hear: '30 inches minimum, 36 inches on 6-foot privacy and corners, set in concrete, gravel at the bottom.' Anything vaguer than that and you're betting on the crew's good day.",
      },
      { type: 'h2', text: "4. What's your warranty on materials AND labor, separately?" },
      {
        type: 'p',
        text: "Two different warranties cover your fence and they don't always come together. The material warranty comes from the manufacturer and passes through the installer, typically 15-25 years on premium vinyl, 1-5 years on pressure-treated wood, lifetime structural on aluminum and iron from established brands. The labor warranty is what the contractor offers on the installation itself: leaning posts, gate alignment, panel attachment defects, hardware failures.",
      },
      {
        type: 'p',
        text: "What you actually want is at least a 1-year labor warranty in writing. The 'lifetime warranty' you see in contractor marketing usually refers to the manufacturer's material warranty, not the contractor's own work. If your gate sags after six months because of a bad install, the manufacturer doesn't cover it. The contractor's labor warranty does, but only if it exists in writing.",
      },
      {
        type: 'p',
        text: "Verbal warranties are not warranties. 'Warranty included' without separating material from labor is the contractor hoping you don't ask follow-up questions. Anything under 90 days on labor is a sign that the crew expects something to fail and doesn't want to come back. Get it in the contract.",
      },
      { type: 'h2', text: '5. Who handles HOA approval and Metro Codes submissions?' },
      {
        type: 'p',
        text: "Most Williamson County subdivisions, Brentwood, Franklin, Nolensville, Spring Hill, require Architectural Review Committee approval before installation. Nashville's historic overlays (Germantown, Edgefield, Lockeland Springs, Belle Meade Conservation, Hillsboro-West End, Richland-West End) require Historic Zoning Commission review. Both processes take 2-6 weeks. The real question is whether the contractor will help submit the paperwork or hand you a stack of PDFs and wish you luck.",
      },
      {
        type: 'p',
        text: "Installing a non-compliant fence in a historic overlay can result in a removal order at your expense. I've watched one homeowner pay for the install, pay for the removal, and pay for the second install. HOA violations can mean fines plus a forced rebuild to spec. A contractor who knows the local approval landscape and submits on your behalf is worth a small premium over one who treats compliance as your job.",
      },
      {
        type: 'p',
        text: "If they don't know which Nashville neighborhoods are in historic overlays, that's the answer. If they refuse to participate in HOA submissions, that's the answer. If they tell you to handle the Metro Codes filing for a flood-zone or 8-foot-plus fence by yourself, that's the answer.",
      },
      { type: 'h2', text: "6. What's your payment schedule, and how much do you want upfront?" },
      {
        type: 'p',
        text: "Industry norm for Nashville fence contractors is 30-50 percent deposit, balance on completion. Larger jobs (200-plus linear feet) might break into three payments: deposit, material delivery, completion. A contractor running an established Nashville crew can usually float materials for 1-2 weeks against a 30 percent deposit. Anyone demanding 100 percent upfront, cash-only, or a Friday deadline tied to a manufactured urgency is telling you something about their business.",
      },
      {
        type: 'p',
        text: "Here's the math that should keep you cautious. Tennessee small claims court caps at $25,000 and recovery rates on disappeared contractors are well below 20 percent per consumer affairs data. The deposit you hand over is effectively unrecoverable if the contractor walks. Keep deposits under 50 percent. Never pay cash without a signed contract. And never pay a deposit tied to an external deadline, 'starts Monday but only if you pay today' is a sales tactic, not a real schedule.",
      },
      { type: 'h2', text: "7. Can I see three recent Nashville installs you've completed?" },
      {
        type: 'p',
        text: "Photos in a portfolio are easy to fake or borrow from manufacturer marketing. The strongest signal that a Nashville fence company is real and consistent is being able to share three specific addresses, or named neighborhoods plus photos, for jobs completed in the last six months. Drive past two of them. The fence that's six months old tells you what your fence will look like six months from now, leaning posts, gate sag, weathering, fastener bleed all show up in that window.",
      },
      {
        type: 'p',
        text: "Bonus move: ask whether you can speak to one of those homeowners. A contractor with a strong Nashville reputation will have at least one customer happy to take a 5-minute reference call. That call is the cheapest due diligence available.",
      },
      {
        type: 'p',
        text: "'We've done so many we don't remember' is a non-answer. Refusal to share any specific addresses is a non-answer. A portfolio that's identical to three other contractor websites in town means the photos came from a manufacturer's marketing kit, not the contractor's actual installs.",
      },
      { type: 'h2', text: 'How to put these questions to work' },
      {
        type: 'p',
        text: "When you request quotes from Nashville fence installers, ask all seven questions in the same order, in writing where you can. Save every answer. The contractor who answers all seven clearly and in detail, in under 24 hours, is almost always the right pick, independent of price. The contractor who hedges on any single one of them is the wrong call no matter how good the quote looks on paper. A great quote from a contractor who can't answer question 3 isn't a deal, it's the prelude to a warranty call you can't make.",
      },
      {
        type: 'callout',
        title: 'Skip the vetting, browse vetted Nashville fence installers',
        text: 'Every contractor in our Nashville directory has already cleared the seven questions above: Tennessee insurance verified, 811 protocol confirmed, post-depth spec on file, warranty in writing, HOA process documented, transparent payments, and verified recent local installs.',
        ctaLabel: 'Browse the Directory',
        ctaHref: '/contractors',
      },
      { type: 'h2', text: 'Bottom line' },
      {
        type: 'p',
        text: "There's no Tennessee state license you can verify online, no Yelp star average that reliably catches a bad installer, and no warranty boilerplate that protects you from a leaning fence in three years. The seven questions above are the closest thing the Nashville fence industry has to a vetting checklist, and asking them costs nothing. Combine the answers with a 24-hour response window and you'll narrow a list of 10 quote requests down to the two contractors actually worth signing with.",
      },
      {
        type: 'p',
        text: "Ready to start collecting quotes? Submit your project once and we'll route it to up to three vetted Nashville fence installers, every one of them already pre-screened against this checklist.",
      },
    ] as ResourceSection[],
  },
  {
    slug: 'property-line-survey-nashville-fence',
    title: 'Property Line Surveys Before Your Nashville Fence Install',
    category: 'Planning',
    readTime: '7 min',
    excerpt:
      'When you actually need a property line survey before installing a fence in Nashville, what it costs in Davidson and Williamson Counties, and the Tennessee adverse-possession risk if you skip it.',
    img: IMAGES.resources['property-line-survey-nashville-fence'],
    imageAlt: 'Wooden fence along a residential property boundary, Nashville property line survey guide',
    body: [
      {
        type: 'p',
        text: "About one in five fence calls I take is on a project that's already going wrong. The most expensive way for a fence project to go wrong in Nashville isn't a leaning post or a bent panel, it's a property line dispute. I've watched two scenarios this year that didn't have to happen. A homeowner in Inglewood paid to remove a six-month-old cedar fence that turned out to be 14 inches over the line. A Brentwood couple lost a 4-foot strip of their backyard because the neighbor's chain link had sat over the line for more than seven years. Both could have been avoided with a $700 survey. This article is how to know when you need one.",
      },
      { type: 'h2', text: 'The Three Scenarios Where You Need a Survey Before You Sign Anything' },
      {
        type: 'ul',
        items: [
          "New build, OR your subdivision was platted more than 25 years ago. Original corner pins are often gone, weathered into the soil, buried under landscaping, or pulled out during utility work. Without pins, your fence line is just a guess.",
          "Your neighbor's fence, garden bed, or driveway is anywhere near where you think the line is. Assume at least one of you is wrong. I've never been to a property where both sides agreed on the line without a survey and were both right.",
          "You're putting in any fence taller than 4 feet within 10 feet of a side or front line. Metro setback rules apply in this zone, and getting them wrong is a removal order.",
        ],
      },
      { type: 'h2', text: 'When You Can Probably Skip the Full Survey' },
      {
        type: 'ul',
        items: [
          "You have a recent (under 5 years) recorded plat with corner pins still visible and unmoved.",
          "The new fence sits more than 5 feet inside the closest known line, well clear of any plausible dispute.",
          "You're replacing an existing fence in the exact same location and no neighbor has ever objected to where the old one was.",
          "You're in a new subdivision (under 10 years) and the developer's recorded pin survey is on file with the county.",
        ],
      },
      { type: 'h2', text: 'What a Tennessee Property Survey Actually Costs in Nashville' },
      {
        type: 'p',
        text: "Four flavors of survey come up in fence work. Costs are 2026 ranges for Davidson and Williamson Counties, Wilson, Sumner, and Rutherford run roughly the same.",
      },
      { type: 'h3', text: 'Pin survey, the cheapest' },
      {
        type: 'p',
        text: "A licensed surveyor locates your existing corner pins, verifies them against the recorded plat, and re-flags or re-sets any that have gone missing. If pins exist and there's no question about lot dimensions, this is enough for most fence projects. $400-700 in Davidson County. Fastest turnaround, usually 1-2 weeks.",
      },
      { type: 'h3', text: 'Boundary survey, the standard' },
      {
        type: 'p',
        text: "The surveyor verifies your lot dimensions against your deed, sets new pins at every corner, and stakes the line at intermediate points (usually every 50 feet). This is what every reputable fence contractor wants to see for a project on or near a line. $700-1,400 in Davidson and Williamson. 2-4 week turnaround in normal conditions.",
      },
      { type: 'h3', text: 'Topographic survey' },
      {
        type: 'p',
        text: "Boundary survey plus elevations. Useful if you have a sloped lot and the contractor needs to plan a stepped fence, or if you're combining the fence with grading or hardscape work. $1,200-2,500.",
      },
      { type: 'h3', text: 'Title or ALTA survey' },
      {
        type: 'p',
        text: "Boundary survey plus all recorded easements, encumbrances, and rights-of-way. Required by some lenders, very rarely needed for a fence project alone. $1,500-2,500. Skip unless your title company has specifically asked for it.",
      },
      { type: 'h2', text: 'The Tennessee Adverse Possession Risk Most Homeowners Have Never Heard Of' },
      {
        type: 'p',
        text: "Tennessee has an adverse possession statute. With color of title (a flawed deed that the occupier reasonably believed gave them the land), the statutory window is 7 years. Without color of title, straight squatter math, it's 20 years. Either way, the practical rule is the same: if a neighbor uses a strip of your land openly, continuously, and exclusively for the statutory window, they can claim it as theirs. I'm not a lawyer; this is a contractor's translation of the law that you should verify with one before acting on it.",
      },
      {
        type: 'p',
        text: "The classic Nashville version: their grandfather's fence has been 18 inches inside your line since 1962, and three deeds ago somebody described the lot using that fence as the boundary instead of the recorded plat. By the time you bought the house, the strip was already legally lost. The buyers who avoid this are the ones who get a boundary survey BEFORE closing and renegotiate (or walk) if the lines don't match the fence.",
      },
      {
        type: 'p',
        text: "How to protect yourself if you spot an encroachment now: get a current survey, send the neighbor a certified letter documenting that you don't agree to the fence location, and require it removed or relocated by a specific date. The certified letter is what breaks the clock, courts read it as you exercising your possession rights. Talk to a Tennessee real-estate attorney before sending it. The letter is the cheap part; the path that follows it matters.",
      },
      { type: 'h2', text: 'What a Fence Contractor Actually Wants From a Survey' },
      {
        type: 'p',
        text: "When you hand me a survey at the consultation, here's the order I look at things:",
      },
      {
        type: 'ul',
        items: [
          "Physical stakes in the ground at every corner I can see from the truck. PDFs without physical markers don't help me dig holes.",
          "A drawing showing the new fence line offset from the surveyed line, three to six inches inside, never directly on it. Building on the exact line invites every kind of dispute, and most municipalities want a small setback anyway.",
          "Notes on every easement crossing the lot, utility, drainage, sewer, shared driveway. Posts can't go in easements without the easement holder's written permission.",
          "The date the survey was completed. Under 18 months is fresh. Over 5 years is stale and I'll want a re-pin before we dig.",
        ],
      },
      { type: 'h2', text: 'Working With a Tennessee Land Surveyor' },
      {
        type: 'p',
        text: "All survey work in Tennessee requires a state-licensed Registered Land Surveyor. The license number, RLS-followed-by-digits, appears on every legitimate surveyor's drawing. If it isn't there, you don't have a legal survey, you have an expensive map. Look for someone with active Davidson and Williamson County experience; older subdivisions in these counties have plat quirks that surveyors from out of region miss.",
      },
      {
        type: 'p',
        text: "Get the quote in writing with a turnaround time. 3-4 weeks from contract to deliverables is the normal window in Nashville. Faster than 2 weeks usually costs a rush fee. Storm season (April-June) and end-of-year (November-December) are the slowest periods because insurance adjusters are pulling surveyors for claims work, plan around it.",
      },
      { type: 'h2', text: 'Two Stories I Tell Every Homeowner Who Tries to Skip This' },
      {
        type: 'p',
        text: "Story one. East Nashville bungalow, 2017 install. The owner relied on Google Earth measurements and the corner of the neighbor's old fence to estimate the line. Six months after the install, the neighbor's surveyor flagged 14 inches of encroachment along a 70-foot run. Removal cost $1,800. Re-install cost $4,800. A pin survey at the start would have been $600. Total avoidable cost: $6,000.",
      },
      {
        type: 'p',
        text: "Story two. Brentwood couple, inherited the property. The neighbor's chain link had been over the recorded line for at least nine years. By the time they realized it during a refinance survey, the 7-year adverse possession window had already run, and the title insurance company recommended a quiet-title action to clear the cloud. They lost a 4-foot-wide strip across the back of the lot, roughly 280 square feet of lawn. A survey done at the original purchase would have flagged it and given them a window to act.",
      },
      { type: 'h2', text: 'What to Ask a Surveyor Before You Hire' },
      {
        type: 'ol',
        items: [
          "What's your Tennessee RLS license number? (Verify it's current with the state board before you sign.)",
          "How many residential boundary surveys have you done in my county in the last 12 months?",
          "What's included, pin replacement, physical stakes, recorded drawing, follow-up if a neighbor disputes?",
          "What's the turnaround from contract to deliverables?",
          "Do you provide stakes for the new fence line offset, or just the property line itself?",
          "What's your fee structure if you find an encroachment that requires a corrected drawing?",
        ],
      },
      { type: 'h2', text: 'One Last Thing' },
      {
        type: 'p',
        text: "A property line survey is the cheapest insurance available on a fence install. The $700 cost of a clean pin survey is less than the cost of moving a single fence section, dramatically less than the cost of a property dispute, and orders of magnitude less than the cost of losing four feet of your backyard to a 1962 fence line. Get it before you sign the contractor's quote. Hand the surveyor's drawing to whoever you hire. Tell them to set the new fence three to six inches inside the line. Sleep better.",
      },
    ] as ResourceSection[],
  },
  {
    slug: 'driveway-gate-cost-nashville',
    title: 'How Much Does a Driveway Gate Cost in Nashville?',
    category: 'Gates',
    readTime: '6 min',
    excerpt:
      'Real installed price ranges for driveway gates in Nashville, from a basic $2,000 single swing to a $40,000 estate gate, plus the line items most contractors leave off the first quote.',
    img: IMAGES.resources['driveway-gate-cost-nashville'],
    imageAlt: 'Black metal driveway gate at a Nashville home, driveway gate cost guide',
    body: [
      {
        type: 'p',
        text: "The first question every homeowner asks me on a driveway gate consultation is 'about how much?' The honest answer is 'somewhere between $2,000 and $45,000.' That's not a dodge, it's the actual range, and where your project lands in it depends on six things that almost nobody asks about up front. Let me walk you through the math the way I would at the end of your driveway in Brentwood or Belle Meade, and you'll be able to read any gate quote that hits your inbox.",
      },
      { type: 'h2', text: 'The Four Cost Tiers in Nashville' },
      {
        type: 'p',
        text: "Most driveway gates in Davidson and Williamson Counties fall into one of these four buckets. Pick the bucket first, then work the line items.",
      },
      {
        type: 'table',
        headers: ['Tier', 'What you get', 'Installed cost in Nashville'],
        rows: [
          ['Manual entry', 'Single swing wood or aluminum, no operator, manual latch', '$1,800-$3,500'],
          ['Mid-range automated', 'Single-leaf ornamental aluminum, basic operator, keypad', '$5,500-$10,500'],
          ['Premium automated', 'Dual swing or sliding, premium operator, full access control', '$10,500-$18,000'],
          ['Custom estate', 'Ornamental iron, cellular intercom + video, multiple operators', '$18,000-$45,000+'],
        ],
      },
      {
        type: 'p',
        text: "Most of my Nashville installs land in the mid-range bracket. The most common phone call is 'I want something that looks like the neighbor's gate but not $20,000,' and the honest answer is usually 'OK, that's an aluminum single-leaf with a LiftMaster operator and a keypad, $7,500 to $9,500.'",
      },
      { type: 'h2', text: 'The Line Items Hiding in a Driveway Gate Quote' },
      {
        type: 'p',
        text: "A real driveway gate quote has at least eight separate cost lines. If yours is one number on a page, ask for the breakdown before you sign.",
      },
      {
        type: 'ul',
        items: [
          'Gate fabrication (the actual metal or wood): the biggest line. Varies hugely with material, aluminum runs $1,800-3,500 for a single 10-12 ft leaf, ornamental iron runs $3,500-8,500 for the same footprint.',
          'Operator (the motor + controller): $1,200-3,200. LiftMaster Elite, FAAC, BFT, and HySecurity are the brands you actually want. The cheap operators in the catalog get returned to the shop within two years.',
          'Access control (how guests open the gate): $400-2,800. Keypad alone is the floor. Cellular intercom with video is the ceiling.',
          'Gate posts and foundations: $400-1,200. Gate posts are bigger than fence posts and go deeper, 36-48 inches in Nashville clay, set in concrete.',
          'Safety devices (UL325 compliant): $200-500. Photo eyes are the minimum, loop detectors and edge sensors are the standard on a residential operator.',
          'Electrical run from the house: $500-2,500. This is the surprise that blows budgets. Trenching through 80 feet of landscaped yard with a buried conduit costs real money.',
          'Programming and commissioning: usually rolled into the operator install, but ask. A gate that\'s installed but never properly calibrated will fail inside six months.',
          "Permit fee: $50-150 in some Metro Nashville zones. Most residential driveway gates don't require a permit, but verify before signing, historic overlays and HOA neighborhoods often do.",
        ],
      },
      { type: 'h2', text: 'What Drives the Price Up' },
      {
        type: 'p',
        text: "Six factors push gate cost above the mid-range bracket in Nashville:",
      },
      {
        type: 'ul',
        items: [
          'Width. Every foot beyond 12 feet adds material and structural cost. A 16-foot dual swing costs roughly 1.6x a 10-foot single, not 1.6x the material, the operator and posts both go up too.',
          'Slope. Sloped driveways need offset hinges or a custom-designed leaf shape. Driveways with more than 6 inches of fall across the gate opening usually need a sliding gate instead of swing, which adds $1,500-3,000.',
          'Distance from electrical source. Trenching the conduit run is often as expensive as the gate itself if your house service panel is 80+ feet from the gate location.',
          'Ornamental fabrication. Welded scrolls, custom panels, and forged finials add 30-60 percent to a quote versus straight vertical pickets.',
          'Access control complexity. A cellular intercom with video calling adds $1,500-2,800 over a basic keypad, plus an ongoing cellular service plan ($30-50 monthly).',
          'HOA design requirements. Belle Meade, Forest Hills, and most Williamson County subdivisions spec specific gate styles. Match them or your install gets pulled.',
        ],
      },
      { type: 'h2', text: 'What Keeps the Price Down' },
      {
        type: 'ul',
        items: [
          'Standard widths (10-12 feet single, 14-16 feet double). Operators are sized in these increments and material yards stock to these dimensions.',
          'A flat driveway near the house. Short electrical runs and standard hinge geometry both save real money.',
          'Solar operator. Eliminates the electrical trench entirely. Adds $400-900 to the operator price but saves $1,000-2,500 on trenching. Net savings on most jobs.',
          'Simple keypad versus cellular intercom. Keypad is $400-800 installed, cellular intercom is $1,800-3,200.',
          'Aluminum versus ornamental iron. Aluminum runs $1,800-3,500 for a single leaf. Iron runs $3,500-8,500 for the same.',
        ],
      },
      { type: 'h2', text: 'Hidden Costs Most Quotes Skip' },
      {
        type: 'p',
        text: "Five line items that show up on the final invoice if they weren't on the first quote:",
      },
      {
        type: 'ul',
        items: [
          'Driveway widening if the existing pour is too narrow to accommodate posts plus gate clearance. $800-2,200.',
          'HOA approval review fee: $50-300, plus 2-6 weeks of waiting.',
          'Concrete pier footings for gate posts that go deeper than expected. $200-400 extra per post if the soil is rocky or saturated.',
          'B-rated versus commercial operator. If you have a long driveway and the gate cycles 30+ times per day, you need a commercial-grade operator ($800-1,600 upgrade).',
          'Cellular service plan for intercom: $30-50 per month, ongoing. Easy to forget when comparing install quotes.',
        ],
      },
      { type: 'h2', text: 'Maintenance Costs Are a Line Item Too' },
      {
        type: 'p',
        text: "A driveway gate is the only fence-adjacent product on the property with moving parts. Plan for it:",
      },
      {
        type: 'ul',
        items: [
          'Annual operator service: $150-400 (recommended on premium operators, optional on basic).',
          'Battery replacement (UPS backup or solar): $80-200, every 3-4 years.',
          'Hinge bushing replacement: $200-500, typically around year 7 on heavy gates.',
          'Operator replacement: $1,800-3,500, expected around year 12-15.',
          'Refinishing iron: $400-900, every 5-7 years.',
        ],
      },
      { type: 'h2', text: 'Does a Driveway Gate Actually Add Property Value?' },
      {
        type: 'p',
        text: "Reality check from the appraiser side: yes, but not at the rate the gate sales pitch suggests. A $5,000 economy gate adds roughly $3,000-4,000 to appraised value on a typical Nashville lot, call it 60-80 percent recovery. A $20,000 premium estate gate adds roughly $12,000-15,000. The bigger win is buyer perception and curb appeal, not the appraisal number. Gated driveways read as a category signal in the Nashville market, and homes with them tend to sell faster.",
      },
      { type: 'h2', text: 'How to Read a Driveway Gate Quote' },
      {
        type: 'p',
        text: "The five things to verify before you sign:",
      },
      {
        type: 'ol',
        items: [
          'The gate is on its own line, separate from the operator.',
          "The operator brand AND series. 'LiftMaster Elite 8500W' is a real spec. 'LiftMaster operator' is a slogan.",
          'Safety devices are listed by name (photo eyes minimum, loop detector recommended).',
          'Electrical scope is explicit, who pulls the permit, who trenches, who runs the conduit, who connects to the panel.',
          'Three separate warranties spelled out, gate warranty (often lifetime structural), operator warranty (1-5 years), install warranty (90 days to 2 years).',
        ],
      },
      {
        type: 'p',
        text: "If any of those five are missing, ask before signing. The same logic that applies to a [fence quote](/resources/fence-cost-breakdown) applies to a gate quote, only doubled.",
      },
      { type: 'h2', text: 'Red Flags in a Driveway Gate Quote' },
      {
        type: 'ul',
        items: [
          'Quote without operator brand and model.',
          "No safety devices listed. UL325 compliance is the legal bar, gates installed without it carry liability if a kid or pet gets hit.",
          "Vague 'automation included' without specifying access control type.",
          "Deposit over 50 percent. The Nashville norm is 30-50 percent.",
          'No permit line for jurisdictions that require one.',
          'Sub-2-week turnaround on a premium gate. Custom fabrication takes 4-8 weeks, period. Anyone promising faster is using off-the-shelf stock.',
        ],
      },
      {
        type: 'p',
        text: "The same screening logic from the [Questions to Ask Before Hiring a Nashville Fence Installer](/resources/hire-nashville-fence-installer-questions) article applies to gate installers, actually more strictly, because gate work involves electrical and high-cycle mechanical parts that residential fence crews don't always handle correctly. When in doubt, browse our directory of Nashville [gates and access systems](/contractors) specialists.",
      },
      { type: 'h2', text: 'One Last Thing' },
      {
        type: 'p',
        text: "Driveway gates are one of the few exterior upgrades where the difference between a $5,000 install and a $15,000 install is genuinely visible from the street every day. The cheap gate is the one you'll be replacing in seven years. The right gate is the one you'll forget you have, because it just opens when it should and closes when it should, and looks the same in year ten as it did the week it went in. Spend at the level you want to live with. Then forget you spent it.",
      },
    ] as ResourceSection[],
  },
  {
    slug: 'best-gate-installation-companies-nashville',
    title: 'Best Driveway Gate Companies in Nashville',
    category: 'Gates',
    readTime: '8 min',
    excerpt:
      'Three ranked picks for driveway gate installation in the Nashville metro, Madison Steel & Iron Works of TN (Davidson), American Fence and Gate (Williamson), and Master Fence (Rutherford). Plus how to vet any gate contractor before signing.',
    img: IMAGES.resources['best-gate-installation-companies-nashville'],
    imageAlt: 'Black metal driveway gate on a Nashville property, best gate installation companies guide',
    body: [
      {
        type: 'p',
        text: "The Nashville gate market is a strange one. A handful of established names dominate Google's local pack, fine companies, often very good, often booked three months out at premium pricing. Behind them is a deeper bench of legitimate shops that quietly do the bulk of the actual installs across Davidson, Williamson, and Rutherford counties, and any honest list of the Best Drive Gate Contractors in Nashville has to include them. This article picks three of those quieter shops, ranked in the order I'd start calling for quotes on most residential driveway gate projects.",
      },
      { type: 'h2', text: 'How These Three Got the Pick' },
      {
        type: 'p',
        text: "Three filters separate the recommendations below from the rest of the field.",
      },
      {
        type: 'ul',
        items: [
          "Verifiable local presence, a public address, a real phone number, project work documented through their own website or active Google Maps listing. Not a stock photo gallery scraped from a manufacturer's catalog.",
          "Specialization that matches what most Nashville driveway gate projects actually need, ornamental iron fabrication, automated aluminum with LiftMaster or FAAC class operators, or full-service residential automation. Not 'we do everything' marketing copy.",
          "Geographic spread across the metro. One pick in Davidson County, one in Williamson, one in Rutherford, so wherever your driveway sits, at least one of these crews has install experience in your zip code.",
        ],
      },
      {
        type: 'p',
        text: "Rankings reflect my honest take on who I'd recommend first for a typical residential install. Your specific project may be a better fit for #2 or #3, the per-company notes flag where each one wins.",
      },
      { type: 'h2', text: '#1, Madison Steel & Iron Works of TN' },
      {
        type: 'p',
        text: "Madison Steel & Iron Works has been fabricating ornamental and wrought iron in the Nashville metro for over 65 years. That's the headline. The detail that earns the top ranking on this list is what they actually do versus what most 'gate companies' in this market do: they make the gate, in-house, in their Madison shop on Woodruff Street, then their own crew installs it. The catalog gate companies down the road order panels from out-of-state manufacturers and bolt them together on your driveway. Madison Steel fabricates from scratch.",
      },
      {
        type: 'p',
        text: "For a homeowner who wants an ornamental iron driveway gate that's actually custom, sized to the existing brick columns, designed to coordinate with railings on the front porch, matched to the historic character of a Belle Meade or Forest Hills property, this is the call. The trade-off is timeline. Custom fabrication runs 4 to 8 weeks, not 2.",
      },
      {
        type: 'p',
        text: "Why we ranked them here:",
      },
      {
        type: 'ul',
        items: [
          "65+ years of in-house ornamental and wrought iron fabrication, all in the Nashville metro.",
          "Custom driveway gate designs sized to the actual columns and driveway opening, not catalog-ordered.",
          "Architectural metalwork capability, railings, fence panels, stair rails, that can be designed to match the new gate so the front of the house reads as one project.",
          "Operates within a 50-mile radius of Madison, TN, so install scheduling is genuinely local.",
        ],
      },
      {
        type: 'p',
        text: "Best fit: estate-grade ornamental iron driveway gates, fully custom designs, and properties where the gate needs to coordinate with other ironwork on the lot. Davidson and Sumner counties, plus the wealthier Williamson neighborhoods within the 50-mile radius.",
      },
      {
        type: 'p',
        text: "Profile and contact: [Madison Steel & Iron Works of TN](/contractors/madison-steel-iron-works), Davidson County, (615) 865-8214.",
      },
      { type: 'h2', text: '#2, American Fence and Gate, LLC' },
      {
        type: 'p',
        text: "American Fence and Gate runs out of Brentwood and covers the Williamson County HOA belt, Franklin, Nolensville, Spring Hill, plus southern Davidson and the upscale Nashville neighborhoods (Green Hills, Belle Meade). The thing they do that the catalog gate companies don't is the whole package: fence, gate, automation, brick column work, and the maintenance that comes after. One contract, one crew, one warranty.",
      },
      {
        type: 'p',
        text: "For a homeowner planning a fence-and-gate-and-columns project at the same time, common when a new build closes or a property gets a major front-yard refresh, running it through one contractor saves the seam between the fence company and the gate company. That seam is where most install problems hide six months in.",
      },
      {
        type: 'p',
        text: "Why we ranked them here:",
      },
      {
        type: 'ul',
        items: [
          "Full-service residential and light commercial scope, fence, gate, automation, and brick column work under a single contract.",
          "Specialization in automated security gates with ornamental aluminum, steel, and wrought iron options.",
          "Service area covers the Williamson County HOA neighborhoods where coordinated fence-plus-gate-plus-column projects are the norm.",
          "Strong fit for new-build properties closing with the fence-and-gate scope still open.",
        ],
      },
      {
        type: 'p',
        text: "Best fit: residential and light commercial coordinated projects, fence, gate, and brick columns done as one install. Brentwood, Franklin, Nolensville, Green Hills, Belle Meade, Spring Hill.",
      },
      {
        type: 'p',
        text: "Profile and contact: [American Fence and Gate](/contractors/american-fence-and-gate), Williamson County, (615) 833-2120.",
      },
      { type: 'h2', text: '#3, Master Fence' },
      {
        type: 'p',
        text: "Master Fence is the Rutherford County pick. They run out of a Veterans Parkway shop in Murfreesboro and cover Murfreesboro itself plus the Smyrna, Manchester, La Vergne corridor down through southern Middle Tennessee. Family-owned, with the specialty that matters for that geography: aluminum driveway gates connected to electronic access controls and keypads. Most of the southern Rutherford developments built since the mid-2010s have HOA-spec aluminum that Master Fence has installed on repeat.",
      },
      {
        type: 'p',
        text: "Why they're #3 rather than higher on the list: less crew coverage in the Davidson and Williamson core, so if you're north of Smyrna they may not be the fastest install. But for anyone south of the airport, this is the call I'd make first.",
      },
      {
        type: 'p',
        text: "Why we ranked them here:",
      },
      {
        type: 'ul',
        items: [
          "Family-owned and locally operated out of Murfreesboro.",
          "Specialization in aluminum driveway gates with electronic access, keypads, card readers, basic intercom.",
          "Coverage of Rutherford and Coffee counties, where southern Middle Tennessee homeowners rarely have a good local gate option.",
          "Also does wood and farm fencing alongside the gate work, useful on acreage where the perimeter fence and the entry gate go in as one project.",
        ],
      },
      {
        type: 'p',
        text: "Best fit: residential aluminum gates with automation across southern Middle Tennessee, Rutherford and Coffee counties primarily. Acreage properties where farm fence and a driveway gate are bid together.",
      },
      {
        type: 'p',
        text: "Profile and contact: [Master Fence](/contractors/master-fence), Rutherford County, (615) 692-8299.",
      },
      { type: 'h2', text: 'What to Ask Any Nashville Gate Contractor Before You Sign' },
      {
        type: 'p',
        text: "Three picks is three picks, none of them are perfect for every project, and there are good gate installers I don't know about that you might find. Whoever you call, the seven questions in our [Questions to Ask Before Hiring a Nashville Fence Installer](/resources/hire-nashville-fence-installer-questions) article apply double for gate work, because gate jobs involve electrical, mechanical, and safety devices that pure fence crews don't always handle correctly. Five questions specific to gate work:",
      },
      {
        type: 'ol',
        items: [
          "What operator brand AND model? Not 'an operator', the actual brand and series (LiftMaster Elite 8500W, FAAC E045, etc.). Cheap operators get pulled within two years.",
          "Which UL325 safety devices come standard? Photo eyes are the minimum, loop detectors and edge sensors are the residential standard. If they have to upsell safety, that's a yellow flag.",
          "Who pulls the electrical permit and trenches from the panel? Get the scope explicit in writing. Gate trenching surprises are the most common budget blow-up.",
          "What's the cellular service plan for the intercom (if applicable) and whose name is it under? Monthly fees add up if no one's tracking them.",
          "Will you be on-site for the Metro Codes inspection if one is required? The 'we'll just send the paperwork' answer fails more inspections than it passes.",
        ],
      },
      {
        type: 'p',
        text: "Their answers to those five are usually the difference between a gate that opens reliably for ten years and one that's on its second operator by year three. The [Anatomy of a Fence Quote](/resources/fence-cost-breakdown) article covers the line-item logic that applies to gate quotes too, operator, access control, posts, and electrical should each be priced separately.",
      },
      { type: 'h2', text: 'How We Built This List' },
      {
        type: 'p',
        text: "The strategy for this article: the names already dominating the Google local pack don't need our help. The shops below the fold, legitimate, capable, and quieter, get a fairer shot here when we rank the Best Drive Gate Contractors in Nashville. Future entries in the Best [X] in Nashville series follow the same brief: three verified picks researched from outside the top results, ranked by honest fit for the most common local projects. No paid placements, no affiliate deals.",
      },
      {
        type: 'p',
        text: "If you run a Nashville gate shop and want to be considered for inclusion as we publish more of these, the [submit your business](/submit-listing) form is open. Provide a real address, a real phone number, a website with project photos, and any state or municipal licenses, and we'll review.",
      },
      { type: 'h2', text: 'One Last Thing' },
      {
        type: 'p',
        text: "Gate work is the one fence-adjacent project where the wrong contractor genuinely costs you. The fence company that quoted the cheap install will leave you with sticking operators, mis-calibrated photo eyes, and a service contract someone else has to honor. The three picks above are picks because they don't do that. Call all three for a quote, compare specs side by side, and pick the one whose answers to the operator-and-permit questions read cleanest. That's the gate that opens on year ten.",
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
    a: 'Yes, Tennessee state law requires you (or your contractor) to call 811 at least 3 business days before digging. Tennessee 811 will mark public utilities for free. Hitting a gas, fiber, or water line can result in thousands of dollars in damages and fines.',
  },
  {
    q: 'How much does a fence cost in Nashville per linear foot?',
    a: 'Installed prices in Middle Tennessee typically run: chain link $12–$22/ft, wood privacy $22–$35/ft, vinyl $32–$48/ft, horizontal cedar $38–$58/ft, ornamental aluminum $38–$62/ft. Gates, demo of old fence, and difficult terrain add to the total.',
  },
  {
    q: 'Do my neighbor and I split the cost of a shared fence?',
    a: 'Tennessee has no statewide "good neighbor" cost-sharing statute, so cost-splitting is voluntary. Most Nashville neighbors agree to split if both parties want the fence, get the agreement in writing and clarify ownership of the finished (smooth) side.',
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
    body: 'A defined perimeter deters opportunistic break-ins and clearly marks property boundaries for everyone, including delivery drivers.',
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
