import { IMAGES } from './imageUrls'

export const COMPANY = {
  name: 'Nashville Fence Guide',
  phone: '(615) 560-9956',
  phoneRaw: '+16155609956',
  email: 'hello@nashvillefenceguide.com',
  address: 'Nashville, TN',
  hours: 'Mon–Sat, 7:00 AM – 7:00 PM',
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
  {
    slug: 'nashville',
    name: 'Nashville',
    zip: '37203',
    img: IMAGES.neighborhoods['nashville'],
    popularStyle: 'Mixed — All Materials',
    avgCost: '$3,800 – $9,800',
    note: 'Davidson County core. Every fence material is represented from historic-overlay neighborhoods to new East Nashville builds — check overlay status before submitting designs.',
  },
  {
    slug: 'murfreesboro',
    name: 'Murfreesboro',
    zip: '37130',
    img: IMAGES.neighborhoods['murfreesboro'],
    popularStyle: 'Vinyl Privacy & Aluminum',
    avgCost: '$4,200 – $8,400',
    note: 'Largest Rutherford County city and one of the fastest-growing in the state. HOA subdivisions favor 6 ft vinyl and aluminum; rural lots still run chain link and farm board.',
  },
  {
    slug: 'spring-hill',
    name: 'Spring Hill',
    zip: '37174',
    img: IMAGES.neighborhoods['spring-hill'],
    popularStyle: 'Vinyl & Aluminum',
    avgCost: '$4,400 – $8,800',
    note: 'Williamson and Maury County line. Heavy new-construction with HOA-driven vinyl and aluminum installs; pool-code applies to most backyard builds.',
  },
  {
    slug: 'gallatin',
    name: 'Gallatin',
    zip: '37066',
    img: IMAGES.neighborhoods['gallatin'],
    popularStyle: 'Aluminum & Wood Privacy',
    avgCost: '$4,400 – $9,200',
    note: 'Sumner County seat north of Hendersonville. Old Hickory Lake homes lean aluminum and wrought iron; subdivisions favor wood privacy with vinyl gates.',
  },
  {
    slug: 'smyrna',
    name: 'Smyrna',
    zip: '37167',
    img: IMAGES.neighborhoods['smyrna'],
    popularStyle: 'Wood Privacy & Chain Link',
    avgCost: '$3,400 – $6,800',
    note: 'Rutherford County. Practical 6 ft wood privacy and chain link still dominate older lots; newer subdivisions follow the vinyl-and-aluminum HOA pattern.',
  },
  {
    slug: 'lebanon',
    name: 'Lebanon',
    zip: '37087',
    img: IMAGES.neighborhoods['lebanon'],
    popularStyle: 'Four-Board & Wood Privacy',
    avgCost: '$3,800 – $8,400',
    note: 'Wilson County seat. Mix of acreage and subdivisions — four-board farm fence is common on rural parcels, cedar privacy in town and around the square.',
  },
  {
    slug: 'nolensville',
    name: 'Nolensville',
    zip: '37135',
    img: IMAGES.neighborhoods['nolensville'],
    popularStyle: 'Aluminum & Vinyl',
    avgCost: '$5,200 – $10,800',
    note: 'Fast-growing south Williamson County town. Newer HOA-restricted neighborhoods favor aluminum or vinyl; pool-barrier inspections are strict.',
  },
  {
    slug: 'columbia',
    name: 'Columbia',
    zip: '38401',
    img: IMAGES.neighborhoods['columbia'],
    popularStyle: 'Four-Board & Wood Privacy',
    avgCost: '$3,600 – $7,800',
    note: 'Maury County seat south of Spring Hill. Acreage homes lean farm fencing; downtown and newer subdivision lots run cedar privacy.',
  },
  {
    slug: 'clarksville',
    name: 'Clarksville',
    zip: '37040',
    img: IMAGES.neighborhoods['clarksville'],
    popularStyle: 'Chain Link & Wood Privacy',
    avgCost: '$3,200 – $6,400',
    note: 'Montgomery County, northwest of Nashville near Fort Campbell. Military turnover drives demand for fast-install chain link and standard 6 ft cedar privacy.',
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
    imageAlt: 'Cedar privacy fence in a Nashville backyard — wood vs vinyl fence comparison',
  },
  {
    slug: 'best-fences-for-dogs',
    title: 'The Best Fences for Dogs in Nashville Yards',
    category: 'Pets',
    readTime: '6 min',
    excerpt:
      'Climb-proof heights, dig guards, and material picks that keep golden retrievers in and coyotes out across Davidson County.',
    img: IMAGES.resources['best-fences-for-dogs'],
    imageAlt: 'Two dogs running on a fenced lawn — best fences for dogs in Nashville yards',
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
      { type: 'h2', text: 'Height — Read Your Dog, Not Just the Tape Measure' },
      {
        type: 'p',
        text: "Forget 'small dog needs 4 ft, big dog needs 6 ft.' That guideline is going to get a Border Collie owner some unpleasant phone calls from a neighbor down the street. Athleticism matters more than size — and breed-driven prey drive matters more than both.",
      },
      { type: 'h3', text: 'The height map that actually works in Nashville' },
      {
        type: 'ul',
        items: [
          'Under 25 lbs, low energy: 4 ft. Maltese, Cavalier, a French Bulldog with the personality of a coffee table — fine.',
          'Under 25 lbs, high energy (Jack Russell, Mini Schnauzer, Dachshund): 5 ft. Or 4 ft with a serious dig footer, because these guys are diggers.',
          'Between 25 and 50 lbs, casual: 5 ft. Most family Goldens, Labs, mixed-breed adoptees who like the couch more than the yard.',
          'Between 25 and 50 lbs, athletic (Border Collies, Aussies, anything herding): 6 ft. They are not jumping for fun, they are jumping because they are bored and they have a plan.',
          'Over 50 lbs, athletic (Huskies, Vizslas, working-line German Shepherds, any Pit-mix with a healthy prey drive): 6 ft minimum, plus a 45-degree inward-angled top extension or a coyote roller along the rail. Looks ridiculous. Works.',
        ],
      },
      {
        type: 'p',
        text: "If your dog is already an escape artist when you call me — they've cleared a 5-ft chain link at a friend's house, say — start the conversation at 7 ft and we'll work backwards from there.",
      },
      { type: 'h2', text: 'Materials That Actually Hold Up to Dogs' },
      {
        type: 'p',
        text: "Every material has a quirk when there's a dog inside the fence line. Here's the honest breakdown.",
      },
      { type: 'h3', text: 'Wood Privacy (Cedar)' },
      {
        type: 'p',
        text: "Western red cedar holds up fine to teeth in the short term. The real problem is the cedar fence next door that your dog stares at every day, slowly turning it into a chew toy. Cedar is also a teething puppy's favorite snack — if you have a young one or a separation-anxiety case, plan to replace the bottom 6 inches of pickets within two years. Adding a horizontal 2x4 cap rail at the top discourages climbers and costs almost nothing.",
      },
      { type: 'h3', text: 'Chain Link' },
      {
        type: 'p',
        text: "Cheap, fast, dog-proof if you spec the right height. The downside is that everyone can see your dog, including the mail carrier, the squirrels, and the Doberman two houses down. If you have a reactive dog, chain link will hand them a full-time job they don't need. Black vinyl-coated chain link costs about 20 percent more than galvanized and looks dramatically less industrial — usually worth the upgrade.",
      },
      { type: 'h3', text: 'Vinyl' },
      {
        type: 'p',
        text: "Smooth, dense, almost impossible to chew or scratch up. Vinyl is the move if you have a determined chewer — a panel that would be sawdust by Tuesday in cedar stays pristine for years in vinyl. Premium vinyl runs $32 to $44 a linear foot installed in Nashville, so you pay for that durability. July heat softens cheaper vinyl — buy from a contractor who has actually pulled out a sagging fence in August, not one selling out of a builder-grade catalog.",
      },
      { type: 'h3', text: 'Aluminum Ornamental' },
      {
        type: 'p',
        text: "Looks great, sails through HOA review in neighborhoods that want consistency, and gives a dog excellent visibility (good for confident dogs, bad for reactive ones). The detail that surprises every homeowner: picket spacing. Four inches is the max for puppies or small breeds — a Mini Pinscher will be on the lawn in 30 seconds through anything wider. If you are not sure, specify 3 7/8 inches and move on.",
      },
      { type: 'h3', text: 'Welded Wire and Farm Mesh' },
      {
        type: 'p',
        text: "Best for acreage outside Brentwood, Franklin, and the rural pockets of Williamson County. Cheaper per foot than privacy fencing and holds large dogs fine. Don't try to use it as a standalone barrier for a determined Husky — it will bow at the push points. Pair it with sturdy line posts every 8 feet, and add a hot wire along the top if you really need to keep something in.",
      },
      { type: 'h2', text: 'The Underground Game' },
      {
        type: 'p',
        text: "If your dog is a digger — and Beagles, Huskies, Terriers, and Dachshunds are factory-shipped as diggers — the fence itself isn't enough. The trench under the fence is.",
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
      { type: 'h2', text: 'Privacy vs. Visibility — A Behavior Question, Not an Aesthetic' },
      {
        type: 'p',
        text: "Counterintuitive insight from a guy who has been on a lot of backyard consults: solid privacy is not always the right call. If your dog is reactive — barks at squirrels, lunges at strollers, has a problem with the school bus — a privacy fence is heaven. They can't see the trigger, they don't react, the neighbors stop leaving notes.",
      },
      {
        type: 'p',
        text: "But if your dog is anxious — afraid of noises, suspicious of the unknown — solid privacy can make it worse. They hear the trigger but can't verify what it is, which is the dog brain's worst-case scenario. A see-through aluminum or a 4-inch picket spacing lets them check, confirm it's fine, and go back to napping.",
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
        text: "If you are on the outskirts of Davidson County, in the rural parts of Williamson, or anywhere with a wooded greenway behind you — you have coyote pressure whether you have seen one or not. A 4-ft fence is a suggestion to a coyote. Plan for 5 ft minimum, no foot holds on the top rail (no horizontal stringer they can use as a step), and serious dig prevention. Coyotes are diggers too.",
      },
      { type: 'h3', text: 'HOAs run this town' },
      {
        type: 'p',
        text: "Brentwood, Franklin, and most of the planned communities require black aluminum or specific privacy specs. Get the architectural review board paperwork before the install crew shows up — the redo cost if you skip this is somewhere between $1,500 and the full project price. A good fence contractor should ask about HOA paperwork in the first ten minutes of the consultation. If they don't, ask them.",
      },
      { type: 'h3', text: 'Historic overlays do not care about your dog' },
      {
        type: 'p',
        text: "Edgefield, Germantown, Lockeland Springs, Belle Meade Conservation — they care about the street-facing elevation, not your golden retriever's containment plan. The compromise that wins approval: traditional ornamental iron or picket out front (the part the review board sees), and modern dog-appropriate cedar or wire in the rear yard. The Historic Zoning Commission isn't your enemy. They just want to see a thoughtful application.",
      },
      { type: 'h2', text: 'What I Wish More People Asked Before They Hired Me' },
      {
        type: 'p',
        text: "Eight questions that separate the contractors who think about dogs from the ones who think about linear footage:",
      },
      {
        type: 'ol',
        items: [
          'What dig prevention do you include in the base bid? (If the answer is none, that is fine — just price the add-on now, not later.)',
          'What is the picket spacing in inches? (Four-inch max for puppies and small breeds.)',
          'How do you set the gate latch? Most escapes happen through gates, not fences — your dog has been watching you open the gate for weeks.',
          'How do you handle the gap between the fence bottom and uneven ground? (This is where small dogs escape.)',
          'What is the warranty if a dog damages the fence? (Usually none, but if it is offered, that is a sign the contractor has thought about dog installs.)',
          "Have you installed for breed X before? A lot of contractors have never installed a coyote roller.",
          'What is the tallest height the HOA will approve at my exact address?',
          'Can I see one of your installs that is at least three years old — preferably one with a dog?',
        ],
      },
      {
        type: 'p',
        text: "Good answers to all eight earn the deposit. Vague answers to half of them mean keep calling.",
      },
      { type: 'h2', text: 'One Last Thing' },
      {
        type: 'p',
        text: "Your dog will get out of any fence once if they really want to. The job of a good fence isn't to be uncrackable — it's to be a 99-percent containment system that buys you the time to fix the gate latch, plug the soft spot in the trench, or call your contractor back to add the section you didn't think you needed. Pick someone who treats the install as the start of the relationship, not the end. The right fence company will pick up the phone in October when the November rain washes out the L-footer they put in for you in May.",
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
          'No gap anywhere a 4-inch sphere could pass — between pickets, under the fence, around posts.',
          'No horizontal members within 45 inches of the bottom (would let a child climb the fence like a ladder).',
          'Self-closing, self-latching gate that swings AWAY from the pool.',
          'Gate latch positioned at 54 inches minimum from grade.',
          'Chain link mesh 1.25 inches or smaller — standard 2-1/4" diamond chain link fails on the diagonal.',
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
        text: "The cheap latches builders use on side-yard gates aren't pool-rated. They look fine, they work fine on the gate to your trash cans, and they don't pass on a pool barrier. Spend the extra $40 on a Magna Latch or equivalent pool-rated self-latching mechanism. Mount it at exactly 54 inches plus a half-inch buffer — inspectors round down.",
      },
      { type: 'h3', text: 'Self-closing hinges' },
      {
        type: 'p',
        text: "A standard hinge does not pass. You need spring-loaded self-closing hinges, properly tensioned so the gate closes within about five seconds when released from open. If you have to push the gate the last six inches to get it to latch, the inspector fails you. Adjust tension before the inspection.",
      },
      { type: 'h3', text: 'The 45-inch climbing rule' },
      {
        type: 'p',
        text: "If you have any horizontal rail between the bottom of the fence and 45 inches up, the inspector flags it. Plenty of off-the-shelf aluminum and vinyl fence kits have a mid-rail at 28 to 32 inches. That fails. Either spec a kit without that rail or pay a little more for custom panels — far cheaper than a redo.",
      },
      { type: 'h3', text: 'Gap under the fence on sloped yards' },
      {
        type: 'p',
        text: "This trips up everyone. When the ground falls away from the fence line, you get a triangle-shaped gap at the low end. If a 4-inch sphere passes under, you fail. The fix is to step the fence down in 4-foot or 8-foot sections so each post bottom sits flush with grade, with the bottom rail following the step rather than the slope.",
      },
      { type: 'h3', text: 'Pet doors and low windows in the house wall' },
      {
        type: 'p',
        text: "If your house wall is part of the pool barrier — and it usually is on the side facing the pool deck — any pet door or window low enough for a child to climb through fails. The fix isn't subtle. Block them off, replace with fixed glass, or rebuild the barrier so the house wall isn't part of it.",
      },
      { type: 'h2', text: 'When You Actually Need a Permit' },
      {
        type: 'p',
        text: "Three scenarios trigger a Metro Codes permit on a pool barrier in Nashville:",
      },
      {
        type: 'ul',
        items: [
          'New pool installation — the pool permit includes the barrier.',
          'Pool barrier replacement — any tear-down and rebuild.',
          'Material change — switching from chain link to aluminum, for example.',
        ],
      },
      {
        type: 'p',
        text: "Cosmetic work — adding decorative trim, repainting — doesn't require a permit. But if you're touching the height, the gate hardware, or the panel structure, pull the permit. The reinspection-and-correction cost dwarfs the permit fee every single time.",
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
      { type: 'h2', text: 'Chain Link — Read This Before You Buy' },
      {
        type: 'p',
        text: "Standard 2-1/4 inch diamond chain link does NOT pass pool code. The mesh is too big — a 4-inch sphere fits through it on the diagonal, and that's the test the inspector runs. If your existing chain link is 2-1/4 inch, you have three real options:",
      },
      {
        type: 'ul',
        items: [
          'Add privacy slats — Metro will accept properly installed slats as filling the gap. Verify the specific slat brand with Codes before you buy.',
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
          "The inspector wants to see the gate close and latch on its own. Have a screwdriver on the truck — a stuck latch or weak hinge tension fails the inspection, and a 30-second tweak passes it.",
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
    body: [
      {
        type: 'p',
        text: "I've pulled somewhere around four hundred fence permits at the Metro Codes office on Korean Veterans Boulevard, and I can tell you the actual hard part isn't the application. The hard part is figuring out whether you needed the permit at all, and if so, which Metro department you owe a phone call to first. This article is the short version of every conversation I've had on a Nashville driveway in the last decade.",
      },
      { type: 'h2', text: 'The Honest 80/20 — When You Need a Permit' },
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
        text: "Hit all five and you can install without a Metro permit. That's how the majority of cedar privacy fences in Davidson County get built — no paperwork, just measure and dig. But miss even one and you're in permit territory, and Metro absolutely follows up on unpermitted work that crosses their radar (a neighbor complaint, a pool inspection, a real-estate disclosure).",
      },
      { type: 'h2', text: 'Height Limits by Yard — The Map You Actually Need' },
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
        text: "If you want a taller fence than these — say a 10-foot acoustic fence along a noisy back street — you need a Metro Codes variance and a building permit. Expect to add 30 to 60 days to the project timeline.",
      },
      { type: 'h2', text: 'The Permit Process When You Actually Need One' },
      {
        type: 'p',
        text: "When a permit is required, the steps are short but easy to mess up.",
      },
      { type: 'h3', text: 'Step 1 — Confirm your zoning' },
      {
        type: 'p',
        text: "Pull up your property on the Metro Davidson Parcel Viewer and verify the zoning district, the overlay status, and any flood zone designation. This is free and takes 90 seconds. Bring screenshots to the contractor consultation so you both look at the same data.",
      },
      { type: 'h3', text: 'Step 2 — Submit the application' },
      {
        type: 'p',
        text: "You can apply online through the Metro ePermits portal or walk into the Codes office. Walk-ins used to be faster; the online portal has caught up in the last two years and is now my default. You'll need a site plan (a hand-drawn parcel map with the fence line marked is fine), the proposed materials, and the height. Fee is around $50-100 for a residential fence permit at time of writing, but verify the current schedule.",
      },
      { type: 'h3', text: 'Step 3 — Wait for plan review' },
      {
        type: 'p',
        text: "Plan review takes anywhere from one day to two weeks depending on Codes' backlog. A clean, simple residential fence application typically clears in 3-5 business days. Historic overlay applications take longer because they also route through the Historic Zoning Commission.",
      },
      { type: 'h3', text: 'Step 4 — Inspection after install' },
      {
        type: 'p',
        text: "Most residential fence permits in Nashville require a single rough-and-final inspection after the install is complete. Schedule it through Metro, meet the inspector on site, and have the permit number ready. Pool barriers add a separate barrier inspection — see the Pool Fence Safety article for the details.",
      },
      { type: 'h2', text: 'Historic Overlay Districts — A Different Animal' },
      {
        type: 'p',
        text: "Nashville has eight active historic overlay districts as of this writing, and your fence application in any of them goes through the Metro Historic Zoning Commission BEFORE it goes through Codes. The districts that come up most often in fence work:",
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
        text: "Submit the Preservation Permit application through Metro Historic Zoning. Once approved, the preservation permit attaches to your standard Metro Codes building permit. Skipping the HZC step and going straight to Codes is a guaranteed reject — they catch it on plan review and route you back. Plan an extra 4-6 weeks for the HZC review window.",
      },
      { type: 'h2', text: 'HOA Versus Metro — They Are Not the Same' },
      {
        type: 'p',
        text: "Brentwood, Franklin, Spring Hill, most of the planned communities, and even some neighborhoods inside Davidson County have HOAs with their own architectural review boards. The HOA is a private contract you signed at closing. Metro is the government. They run on completely separate tracks.",
      },
      {
        type: 'p',
        text: "Metro approval does not satisfy your HOA. HOA approval does not satisfy Metro. You need both, in any order, before the dig. The HOA review is usually faster (1-2 weeks) but the rules are often tighter — many HOAs require specific colors, specific materials, or specific manufacturers. Read your CC&Rs before you get a quote, not after.",
      },
      { type: 'h2', text: "Tennessee 811 — Don't Skip This" },
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
          'Do you pull the Metro Codes permit on my behalf, or am I pulling it myself? (Almost every reputable contractor pulls it for you — included in the bid.)',
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
    body: [
      {
        type: 'p',
        text: "Three contractors hand you three quotes. One is $4,200, one is $5,800, one is $7,400. Same fence. Same yard. What's actually going on? In my experience the answer is almost never that the cheap guy is hiding savings or that the expensive guy is gouging — it's that the three of them are quoting three different scopes and burying the differences in the line items. This article is a flashlight for the fine print.",
      },
      { type: 'h2', text: 'The Anatomy of an Honest Fence Quote' },
      {
        type: 'p',
        text: "A complete residential fence quote in Nashville should have, at minimum, these line items broken out. If any of them are missing, ask why before you sign.",
      },
      {
        type: 'ul',
        items: [
          'Materials (boards, posts, hardware) — usually quoted per linear foot.',
          'Labor — either rolled into the per-foot rate or broken out separately.',
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
        text: "A quote that's just 'Wood Privacy Fence — $5,800' is not a quote. It's a number on a napkin. Push for the line items. A contractor who can't break them out either doesn't know their own costs or doesn't want you to know.",
      },
      { type: 'h2', text: 'Materials — Per Linear Foot Means Different Things' },
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
      { type: 'h2', text: 'Post Setting — Where Nashville Soil Punishes Shortcuts' },
      {
        type: 'p',
        text: "Middle Tennessee has clay soil that swells, contracts, and freezes a few inches deep most winters. A fence post that's set wrong here looks fine on day one and leans within 18 months. The right post-setting spec in Nashville:",
      },
      {
        type: 'ul',
        items: [
          'Post hole depth: 30 inches minimum for a 6-foot fence, 36 inches for an 8-foot fence. The frost line in Nashville is shallow — 8-10 inches — but the leverage on a tall fence in clay soil punishes shallow posts.',
          'Concrete: a 60-pound bag of high-strength concrete per post is the floor. A bag and a half per post is the contractor who actually does it right. Quotes that don\'t mention concrete on the post-setting line are using dirt-pack, and that fence will lean.',
          'Gravel base: 3-4 inches of crushed stone at the bottom of every post hole for drainage. Skipping this is the number one reason wood posts rot from the bottom up.',
        ],
      },
      {
        type: 'p',
        text: "If the quote says 'set posts in concrete' and that's it, ask follow-up questions. If they say 'set posts' with no concrete spec, walk away.",
      },
      { type: 'h2', text: 'Gates — Always More Than You Think' },
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
      { type: 'h2', text: "Demolition and Haul-Off — The Forgotten Line" },
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
        text: "Then for each category, ask: is the spec the same? Same picket thickness, same post size, same concrete spec, same hardware grade, same demo scope, same warranty terms. Once you normalize the specs, the price differences shrink to almost nothing — usually within 8-12 percent.",
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
        text: "Cheap fence quotes are not a deal — they're usually a smaller scope with the cuts hidden in the line items. Expensive quotes aren't a rip-off — they're usually a contractor doing the work the right way and explaining each dollar. Honest middle quotes from contractors who can explain every line are almost always the right answer. The cheapest fence in Nashville is the one you put in correctly the first time.",
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
    imageAlt: 'Horizontal cedar slat fence — East Nashville horizontal privacy trend',
    body: [
      {
        type: 'p',
        text: "Drive through Five Points, walk a block in 12 South, take a left in Sylvan Park — same fence. Long horizontal cedar slats, sometimes with a gap between them, almost always six feet tall, almost always around a bungalow built or renovated in the last 12 years. I've installed enough of these now that I can usually name the architect from the corner board. Here's the design story, the actual cost, and the technical reality of the trend I get asked about more than any other.",
      },
      { type: 'h2', text: 'Where the Look Came From' },
      {
        type: 'p',
        text: "The horizontal cedar fence is a mid-century revival. Architects in California in the 1950s and 1960s built ranch homes with horizontal slat fences and pergolas because the look complemented low-slung roof lines and big horizontal windows. When the mid-century aesthetic came back into broader residential design in the 2010s — partly through the Dwell magazine crowd, partly through Pinterest, partly because a generation of homeowners stopped wanting their houses to look like every other suburban Colonial — the horizontal fence came with it.",
      },
      {
        type: 'p',
        text: "Nashville's role in this is specific. The East Nashville rebuild wave from roughly 2012 onward filled neighborhoods like Lockeland Springs, Eastwood, and Cleveland Park with infill bungalows and modern-cottage builds. Their architects pulled from the same mid-century playbook. The horizontal fence wasn't a trend they invented — it was a finishing choice that fit the architecture. By 2018, builders were quoting horizontal cedar as the standard rear-yard option on every spec home east of the Cumberland.",
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
          'More material per linear foot. Horizontal slats are usually 1x4 or 1x6 cedar, and you need a lot of them — typically 14-18 slats across a 6-foot-tall section. Vertical privacy uses bigger boards in fewer pieces.',
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
        text: "1x6 western red cedar, S4S (smooth four sides), tongue-and-groove if you want the cleanest reveal, butt-jointed if you want a small intentional gap. 1x4 cedar looks more delicate but moves more — only use it on short runs or in a backyard where you can keep an eye on it.",
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
      { type: 'h2', text: 'Maintenance — Realistic, Not Aspirational' },
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
        text: "Three of the four neighborhoods where horizontal cedar is most popular — Edgefield, Germantown, and Lockeland Springs — are inside historic overlay districts. The Historic Zoning Commission tends to be skeptical of horizontal slat fences in front yards. They read as too modern for the period of the neighborhoods.",
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
          'Wider slat profile — 1x6 instead of 1x4 cuts the slat count almost in half and the labor with it. Looks slightly less refined, but only the contractor will notice from the street.',
          'Hybrid panels — alternating horizontal cedar with steel-mesh inserts is cheaper than full cedar and reads as more modern, not less.',
          'Composite alternatives — Trex and similar composite manufacturers now make horizontal-style fence panels. The look is close, the price is similar to cedar, and they do not need re-staining. The trade-off is texture; composite reads as plastic up close.',
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
      'A simple cost-based rule for deciding whether to repair or replace a damaged Nashville fence — plus material-by-material repair cost ranges from Davidson and Williamson Counties.',
    img: IMAGES.resources['fence-repair-vs-replace-nashville'],
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
    img: IMAGES.resources['storm-damaged-fence-nashville-insurance'],
    body: [
      {
        type: 'p',
        text: "If you woke up to a fence on the ground in Nashville this spring, get in line. Middle Tennessee runs a storm season from roughly March to June that hits Davidson and Wilson the hardest, with Williamson and Rutherford catching the tail of every system that comes off the Cumberland Plateau. I've done storm-damage walkthroughs the morning after derechos, tornadoes, and ordinary 60-mph squalls. The homeowners who get repaired fastest and reimbursed the most are the ones who do four things in roughly the right order. This article is those four things.",
      },
      { type: 'h2', text: 'First 24 Hours — Document Like an Adjuster Is Reading It' },
      {
        type: 'p',
        text: "The single biggest predictor of a clean insurance claim is the photo set you take before you touch anything. Adjusters work on documentation, not vibes. The lighter your photo set, the lighter the check.",
      },
      {
        type: 'ol',
        items: [
          'Photograph every damaged section from at least three angles before anyone moves a board.',
          'Take a wide shot showing the property line and where the fence sits on it. Context matters.',
          'Photograph adjacent damage too — fallen trees, panel debris in the neighbor\'s yard, the dent in the shed roof. The adjuster decides cause from the surrounding scene.',
          'Note the date, time, and weather event. A National Weather Service summary URL pasted into your claim notes is gold.',
          'Save any Metro or county debris-removal notices that get posted to your door — they timestamp the event.',
          "Keep all debris on your property until the adjuster has seen it in person or you have time-stamped photos that prove it existed.",
        ],
      },
      { type: 'h2', text: "Filing the Claim — Tennessee Specifics" },
      {
        type: 'p',
        text: "Standard HO-3 homeowner policies in Tennessee treat fences as 'other structures' — usually capped at 10 percent of your dwelling coverage. So if the house is insured for $400,000, you have up to $40,000 of other-structures coverage available, minus the deductible. That ceiling is plenty for almost any residential fence rebuild. The bottleneck is timing and paperwork, not the policy limit.",
      },
      {
        type: 'ul',
        items: [
          "Call your insurer's claims line within 48 hours of the storm. Earlier is better. Adjusters batch by call date.",
          "Tennessee statute gives insurers 30 days to acknowledge a claim and 60 days to investigate. They use most of it. Plan accordingly.",
          "Your deductible applies — usually $1,000-$2,500, sometimes higher for named-storm wind or hail.",
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
        text: "The 'leaning post with no triggering event' denial trips up more homeowners than any other line. If your fence has been gradually tilting for two years and the storm finished it off, the adjuster will rule it pre-existing. The fix is to demonstrate the storm caused the failure — same-day photos, weather data for that exact address, snapped wood at ground level rather than rotten.",
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
          "Match the original spec — same height, same material, same post depth. Upgrades come out of your pocket, not the claim.",
          "Include a real start date. Adjusters approve faster when they see a project timeline rather than 'TBD.'",
        ],
      },
      { type: 'h2', text: "Same-Week Repair — What's Realistic After a Major Storm" },
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
          "If your claim is approved, you pick the contractor — not your insurer. They'll suggest one but you're not bound to it.",
        ],
      },
      {
        type: 'callout',
        title: 'Need same-week storm fence repair in Nashville?',
        text: "Upload your damage photos and address — we route to Nashville fence repair crews with bandwidth this week. Wood, vinyl, chain link, aluminum, and wrought iron all covered.",
        ctaLabel: 'Get Storm Repair Quotes',
        ctaHref: '/repair',
      },
      { type: 'h2', text: 'Common Nashville Storm-Damage Patterns I See Every Spring' },
      {
        type: 'ul',
        items: [
          'Wind-blown sections — usually 2-4 adjacent panels need replacement and the posts survive intact.',
          'Snapped wood posts at ground level — wind torque shears pressure-treated posts where moisture has weakened them. The fix is post replacement plus new concrete.',
          'Tree-fall damage — full section replacement plus post reset plus tree debris cleanup. Often the most expensive line on a storm claim.',
          'Hail dimpling on vinyl — mostly cosmetic, hard to claim unless severe. If the panels are functionally fine, the adjuster usually denies.',
          'Chain link mesh stretch — easy fix, under $300 most of the time. Tighten, replace tension bars, walk away.',
          'Bent aluminum rails — straighten the rails, repaint the affected sections, full replacement is rarely necessary.',
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
        text: "Once the approval letter is in hand, you have more leverage than most homeowners realize. The insurance company doesn't pick your contractor. You do. Get 2-3 quotes — the claim amount is the floor, not the ceiling. Match the original spec or upgrade and pay the difference out of pocket.",
      },
      {
        type: 'p',
        text: "If the repair quote comes in well below 60 percent of a full replacement, you're in good shape — repair is the right call. If it's close to or above that line, talk to the contractor about a full replacement. Your insurance proceeds usually apply either way, and you get a fresh fence with a fresh warranty instead of a patched one with a clock.",
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
      'Nashville-specific vetting checklist for fence contractors — Tennessee licensing, 811 dig-safe, post depth, HOA approvals, payment terms, and the three recent installs every reputable Nashville crew should be able to show you.',
    img: IMAGES.resources['hire-nashville-fence-installer-questions'],
    body: [
      {
        type: 'p',
        text: "Hiring a Nashville fence installer is a $4,000–$8,000 decision for most homeowners — bigger than appliances, smaller than a kitchen remodel, with no single warranty signal as strong as either. Tennessee doesn't issue a state-level residential fence contractor license for jobs under $25,000, which means the bar to call yourself a Nashville fence company is essentially zero. The seven questions below separate the crews that show up on time with concrete-set posts from the ones that leave you with a leaning fence inside the warranty window.",
      },
      { type: 'h2', text: '1. Are you licensed in Tennessee and properly insured?' },
      {
        type: 'p',
        text: "Tennessee doesn't require a state contractor license for residential fence work under $25,000. Above that, the Tennessee Board for Licensing Contractors requires a general contractor license. Either way, the two pieces of paper you actually want in hand are a current Certificate of Insurance showing general liability (minimum $1M is standard for Nashville) and workers' comp coverage. Ask the contractor's insurance broker to email the COI directly to you — not a copy forwarded from the contractor's office.",
      },
      {
        type: 'p',
        text: "Why it matters: If a crew member gets hurt on your property and the contractor doesn't carry workers' comp, your homeowner's insurance becomes the next target. A single back injury claim can run six figures.",
      },
      {
        type: 'ul',
        items: [
          'Red flag: vague responses like "we\'re fully insured" without sending a COI',
          'Red flag: reluctance to have the broker email proof directly',
          'Red flag: policy that expires in the next 30 days',
        ],
      },
      { type: 'h2', text: '2. Will you call Tennessee 811 before digging, and how many days in advance?' },
      {
        type: 'p',
        text: "Tennessee's Underground Utility Damage Prevention Act requires at least three business days notice to Tennessee 811 before any excavation, including fence post holes. That's not a suggestion — it's state law. Nicking a gas line, fiber run, or water main triggers per-incident fines plus repair costs that can run into the thousands. Gas strikes are the most expensive: a ¾-inch line nick can mean a four- to five-figure repair plus liability if the outage affects neighbors.",
      },
      {
        type: 'p',
        text: "Tennessee 811 marks public utilities for free. Private utilities — your own irrigation lines, low-voltage landscape lighting, sprinkler valves, septic field — are on you. Ask the contractor how they handle private utility detection.",
      },
      {
        type: 'ul',
        items: [
          'Red flag: "we\'ll just be careful" or "we don\'t need to call for shallow posts"',
          'Red flag: any plan to dig the same day you sign — the 3-business-day notice can\'t be compressed',
          'Red flag: contractor offers to skip 811 to "save time"',
        ],
      },
      { type: 'h2', text: '3. Are posts set in concrete, and how deep below the frost line?' },
      {
        type: 'p',
        text: "Middle Tennessee's published frost line sits around 12 inches, but Nashville's clay-heavy soil heaves with freeze-thaw cycles more than the depth suggests. The industry standard for residential fence posts in Davidson and Williamson Counties is 24–36 inches deep, set in concrete, with a 6-inch gravel base at the bottom of the hole for drainage. For 6 ft privacy fence and taller, 36 inches is the minimum a reputable Nashville crew will quote.",
      },
      {
        type: 'p',
        text: "Post depth is the single biggest predictor of how long your fence stays straight. Shallow posts in Nashville clay equal a leaning fence inside three winters. Concrete vs. tamped-dirt-only is the other variable — concrete is the default for any privacy fence, and 'we don't always need concrete' is the wrong answer.",
      },
      {
        type: 'ul',
        items: [
          'Red flag: posts set in dirt only without concrete',
          'Red flag: depth quotes under 24 inches for any privacy fence',
          'Red flag: "we\'ll see how deep we need to go" with no spec in writing',
          'Red flag: no gravel base at the bottom of the post hole',
        ],
      },
      { type: 'h2', text: '4. What\'s your warranty on materials AND labor — separately?' },
      {
        type: 'p',
        text: "Two different warranties cover your fence and they don't always come together. The material warranty comes from the manufacturer and passes through the installer — typically 15–25 years on premium vinyl, 1–5 years on pressure-treated wood, lifetime structural on aluminum and iron from established brands. The labor warranty is what the contractor offers on the installation itself: leaning posts, gate alignment, panel attachment defects, hardware failures.",
      },
      {
        type: 'p',
        text: "Look for at least a 1-year labor warranty in writing. A 'lifetime warranty' advertised on the contractor's marketing usually refers to the manufacturer's material warranty — not the contractor's own work. If your gate sags after six months because of a bad install, the manufacturer warranty doesn't cover it. The contractor's labor warranty does, but only if it exists in writing.",
      },
      {
        type: 'ul',
        items: [
          'Red flag: verbal-only warranty commitments',
          'Red flag: "warranty included" without separating material from labor',
          'Red flag: anything under 90 days on labor',
          'Red flag: contractor refuses to put the warranty terms in the contract',
        ],
      },
      { type: 'h2', text: '5. Who handles HOA approval and Metro Codes submissions?' },
      {
        type: 'p',
        text: "Most Williamson County subdivisions (Brentwood, Franklin, Nolensville, Spring Hill) require Architectural Review Committee approval before installation. Nashville historic overlays — Germantown, Edgefield, parts of East Nashville, Belle Meade Conservation, Hillsboro-West End, Richland-West End — require Historic Zoning Commission review. Both processes take 2–6 weeks. The question is whether the contractor will help with the submission paperwork or leave it to you.",
      },
      {
        type: 'p',
        text: "Installing a non-compliant fence in a historic overlay can result in a removal order at your expense. HOA violations can mean fines and a forced rebuild to spec. A contractor who knows the local approval landscape and helps submit is worth a small premium over one who hands you a stack of forms.",
      },
      {
        type: 'ul',
        items: [
          'Red flag: contractor refuses to participate in HOA submissions',
          "Red flag: doesn't know which Nashville neighborhoods are in historic overlays",
          'Red flag: insists you handle Metro Codes filings alone for flood-zone or 8+ ft fences',
        ],
      },
      { type: 'h2', text: '6. What\'s your payment schedule, and how much do you require upfront?' },
      {
        type: 'p',
        text: "Industry norm for Nashville fence contractors is 30–50% deposit, balance on completion. Larger jobs (200+ linear ft) might break into three payments: deposit, material delivery, completion. A contractor running an established Nashville crew can usually float materials for 1–2 weeks against a 30% deposit. Anyone demanding 100% upfront, cash-only, or a Friday deadline tied to a contrived urgency is a red flag.",
      },
      {
        type: 'p',
        text: "Tennessee small claims court caps at $25,000 and recovery rates on disappeared contractors are below 20% per consumer affairs data. The deposit you hand over is effectively unrecoverable if the contractor walks. Keep deposits under 50% and never pay cash without a signed contract.",
      },
      {
        type: 'ul',
        items: [
          'Red flag: 100% payment upfront',
          'Red flag: cash-only requests',
          'Red flag: no written contract or vague payment milestones',
          'Red flag: deposit tied to an external deadline ("starts Monday but only if you pay today")',
        ],
      },
      { type: 'h2', text: '7. Can I see three recent Nashville installs you\'ve completed?' },
      {
        type: 'p',
        text: "Photos in a portfolio are easy to fake or borrow from manufacturer marketing. The strongest signal a Nashville fence company is real and consistent is being able to share three specific addresses (or named neighborhoods plus photos) for jobs completed in the last 6 months. Drive past two of them. The fence that's six months old tells you what your fence will look like six months from now — leaning posts, gate sag, and weathering all show up in that window.",
      },
      {
        type: 'p',
        text: "Bonus signal: ask whether you can speak to one of those homeowners. A contractor with a strong Nashville reputation will have at least one customer who's happy to take a 5-minute reference call.",
      },
      {
        type: 'ul',
        items: [
          'Red flag: "we\'ve done so many we don\'t remember"',
          'Red flag: refusal to share any specific addresses or neighborhoods',
          'Red flag: only out-of-state or stock-looking photos',
          'Red flag: portfolio identical to other Nashville contractors\' websites',
        ],
      },
      { type: 'h2', text: 'How to put these questions to work' },
      {
        type: 'p',
        text: "When you request fence installation quotes in Nashville, ask all seven questions in the same order, ideally in writing. Save every answer. The contractor who answers all seven clearly and in detail, in under 24 hours, is almost always the right pick — independent of price. The contractor who hedges on any single one of them is the wrong call no matter how good their quote looks on paper.",
      },
      {
        type: 'callout',
        title: 'Skip the vetting — browse vetted Nashville fence installers',
        text: 'Every contractor in our Nashville directory has already cleared the seven questions above: Tennessee insurance verified, 811 protocol confirmed, post-depth spec on file, warranty in writing, HOA process documented, transparent payments, and verified recent local installs.',
        ctaLabel: 'Browse the Directory',
        ctaHref: '/contractors',
      },
      { type: 'h2', text: 'Bottom line' },
      {
        type: 'p',
        text: "There's no Tennessee state license you can verify online, no Yelp star average that reliably catches a bad installer, and no warranty boilerplate that protects you from a leaning fence in three years. The seven questions above are the closest thing the Nashville fence industry has to a vetting checklist — and asking them costs nothing. Combine the answers with a 24-hour response window and you'll narrow a list of 10 quote requests down to the two contractors actually worth signing with.",
      },
      {
        type: 'p',
        text: "Ready to start collecting quotes? Submit your project once and we'll route it to up to three vetted Nashville fence installers — every one of them already pre-screened against this checklist.",
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
