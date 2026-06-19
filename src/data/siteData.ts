import { IMAGES } from './imageUrls'
import { CITY } from '../config/city'

export const COMPANY = {
  name: CITY.company.name,
  phone: CITY.company.phone,
  phoneRaw: CITY.company.phoneRaw,
  email: CITY.company.email,
  address: CITY.company.address,
  streetAddress: CITY.company.streetAddress,
  postalCode: CITY.company.postalCode,
  hours: CITY.company.hours,
}

export const RESOURCE_PUBLISHED_AT = '2026-06-01T08:00:00-05:00'

/**
 * Current month's Gold Sponsor displayed in the SponsorStrip just under
 * the hero on most pages. Set to `null` to hide the strip everywhere.
 *
 * `profileHref` accepts an internal path (e.g. `/contractors/<slug>`) or
 * an external URL (starting with `http`). When external, the link gets
 * the sitewide `rel="noopener noreferrer nofollow"` treatment.
 */
export const SPONSOR: {
  name: string
  initials: string
  tagline: string
  rating: number
  reviews: number
  profileHref: string
} | null = {
  name: 'Music City Fence Co.',
  initials: 'MC',
  tagline: `${CITY.name}'s #1 Residential Fence Installer · Licensed & Insured · Free Estimates`,
  rating: 4.9,
  reviews: 214,
  profileHref: '/contractors',
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
    slug: 'hidden-pet-fence',
    name: 'Hidden Dog Fence',
    short: 'Hidden Pet Fence',
    pageTitle: 'Hidden Dog Fence Installation in Nashville',
    priceLow: 6,
    priceHigh: 14,
    description:
      'Nashville hidden dog fence installers handle buried boundary wire systems, GPS collar setups, and HOA-friendly invisible dog fences. Most installs run $6–$14 per linear foot of buried wire plus the collar and transmitter package. Includes yard mapping, containment training, and a money-back trial period from the contractors we work with.',
    img: IMAGES.fenceTypes['hidden-pet-fence'] ?? IMAGES.fenceTypes['pet-fence'],
    features: [
      'Buried boundary wire (no visible fence)',
      'GPS or wireless collar systems',
      'HOA-friendly invisible install',
      'Containment training included',
    ],
    bestFor:
      'Nashville dog owners with HOA-restricted yards, large lots, or homes where visible fencing is not allowed',
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
    landmarks: [
      { name: 'Belle Meade Historic Site & Winery', note: 'Antebellum mansion and former thoroughbred farm at 5025 Harding Pike; 30+ acres open for tours and tastings.' },
      { name: 'Cheekwood Estate & Gardens', note: '55-acre botanical garden and 1930s mansion at 1200 Forrest Park Dr; seasonal exhibits run year-round.' },
      { name: 'Percy Warner Park', note: '2,684 acres bordering Belle Meade — the largest municipally administered park in Tennessee.' },
      { name: 'The Parthenon', note: 'Full-scale Centennial Park replica with the Athena Parthenos statue and art museum, 2500 West End Ave.' },
      { name: 'Belle Meade Country Club', note: 'Private 1901-founded club at 815 Belle Meade Blvd hosting the annual Iroquois Steeplechase.' },
    ],
    amenities: [
      { name: 'Belle Meade Plaza', note: 'Local shopping center anchored by Publix and CVS at 4548 Harding Pike.' },
      { name: 'Saint Thomas West Hospital', note: 'Level III trauma center at 4220 Harding Pike, the closest hospital to Belle Meade.' },
      { name: 'The Mall at Green Hills', note: 'Flagship Nordstrom, Apple, and Tiffany & Co. at 2126 Abbott Martin Rd, about 5 minutes east.' },
      { name: 'Whole Foods Market Belle Meade', note: 'Full-service grocery at 4021 Hillsboro Pike, the closest Whole Foods to the neighborhood.' },
    ],
    thingsToDo: [
      { name: 'Iroquois Steeplechase', note: 'Annual May horse race at Percy Warner Park drawing 25,000+ spectators since 1941.' },
      { name: 'Cheekwood seasonal festivals', note: 'Cheekwood in Bloom (spring tulips), Holiday LIGHTS, and Pumpkin Village rotate through the year.' },
      { name: 'Warner Parks trails', note: '12+ miles of paved and unpaved trails for hiking, running, and equestrian use.' },
      { name: 'Belle Meade Plantation tours', note: 'Carriage House restaurant on site plus a winery tasting room for adult-focused visits.' },
      { name: 'Frist Art Museum', note: '10 minutes east at 919 Broadway in the historic 1934 post office building, rotating exhibitions.' },
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
    landmarks: [
      { name: 'The Mall at Green Hills', note: '750,000 sqft luxury mall at 2126 Abbott Martin Rd, anchor for Apple, Nordstrom, Tiffany & Co.' },
      { name: 'Bluebird Cafe', note: 'Legendary 100-seat songwriter venue at 4104 Hillsboro Pike; alumni include Garth Brooks and Taylor Swift.' },
      { name: 'Lipscomb University', note: 'Private university at 1 University Park Dr with a 65-acre campus inside the neighborhood.' },
      { name: 'Radnor Lake State Natural Area', note: '1,368-acre nature preserve 3 miles south at 1160 Otter Creek Rd; no pets, no bicycles.' },
      { name: 'Hill Center Green Hills', note: 'Outdoor mixed-use shopping center across from the mall at 4017 Hillsboro Pike.' },
    ],
    amenities: [
      { name: 'Whole Foods Market Green Hills', note: 'Full-service grocery anchor at 4021 Hillsboro Pike.' },
      { name: 'Publix at Hill Center', note: 'Convenient pickup-and-go grocery at 4015 Hillsboro Circle.' },
      { name: 'YMCA Green Hills', note: 'Family fitness facility at 4041 Hillsboro Pike with pool and group classes.' },
      { name: 'Green Hills Branch Library', note: 'Nashville Public Library branch at 3701 Benham Ave, kid programming and study rooms.' },
    ],
    thingsToDo: [
      { name: 'Bluebird Cafe shows', note: 'Two songwriter rounds nightly; tickets routinely sell out within minutes of release.' },
      { name: 'Radnor Lake trails', note: '6+ miles of foot trails with deer, otter, and bald-eagle sightings inside the city limits.' },
      { name: 'Hillsboro Village', note: 'Adjacent walking strip with Pancake Pantry, Belcourt Theatre, and local boutiques.' },
      { name: 'Belcourt Theatre', note: '1925-era cinema at 2102 Belcourt Ave running indie, foreign, and 35mm screenings.' },
      { name: 'Catbird Seat', note: 'High-end tasting-menu restaurant at 1711 Division St, perpetual best-restaurant list inclusion.' },
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
    landmarks: [
      { name: 'Five Points', note: 'Main commercial intersection at Woodland and 11th Streets — anchor of the East Nashville restaurant scene.' },
      { name: 'Edgefield Historic District', note: 'National Register of Historic Places residential district of Victorian and Queen Anne homes.' },
      { name: 'Shelby Bottoms Greenway', note: '900+ acres of paved trail and bottomland forest along the Cumberland River.' },
      { name: 'Lockeland Springs Park', note: 'Neighborhood-park anchor with playground and the historic Lockeland Spring monument.' },
      { name: 'East Nashville Magnet High School', note: 'Metro Nashville Public Schools magnet at 110 Gallatin Pike S.' },
    ],
    amenities: [
      { name: 'Turnip Truck Natural Market', note: 'Local organic grocery at 970 Woodland St, neighborhood institution since 2001.' },
      { name: 'East Nashville Farmers Market', note: 'Wednesday-afternoon seasonal market at Shelby Park, May through October.' },
      { name: 'Tennova Healthcare East', note: 'Full-service hospital at 73 Glenn St, the closest ER to the neighborhood.' },
      { name: 'Sweet 16th Bakery', note: 'Cult-favorite bakery at 311 N 16th St with a fiercely loyal local following.' },
    ],
    thingsToDo: [
      { name: 'Tomato Art Fest', note: 'Annual August street festival in Five Points celebrating the tomato as fruit AND vegetable since 2004.' },
      { name: 'Shelby Bottoms trails', note: '5+ miles of paved greenway connecting to Cornelia Fort Air Park and the Cumberland River.' },
      { name: 'Five Points dining + nightlife', note: 'Walking-distance restaurants including Margot, Lockeland Table, and I Dream of Weenie.' },
      { name: 'The Basement East', note: '"The Beast" — independent live music venue at 917 Woodland St rebuilt after the 2020 tornado.' },
      { name: 'East Side Hootenanny', note: 'Free outdoor music series at the East Park amphitheater on summer Sunday evenings.' },
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
    landmarks: [
      { name: 'Germantown Historic District', note: 'Nashville\'s oldest residential neighborhood, founded 1850s; on the National Register of Historic Places.' },
      { name: 'First Horizon Park', note: 'Nashville Sounds AAA baseball stadium at 19 Junior Gilliam Way; 10,000-seat venue opened in 2015.' },
      { name: 'Bicentennial Capitol Mall State Park', note: '19-acre state park at 600 James Robertson Pkwy with the Tennessee history walk and World War II memorial.' },
      { name: 'Tennessee State Capitol', note: '1859 Greek Revival statehouse at 600 Dr. M.L.K. Jr. Blvd, two blocks south of the historic district.' },
      { name: 'Nashville Farmers\' Market', note: 'Year-round indoor and outdoor market at 900 Rosa L. Parks Blvd hosting 100+ vendors.' },
    ],
    amenities: [
      { name: 'Nashville Farmers\' Market', note: 'Daily-open grocery + restaurants + flea market with free covered parking.' },
      { name: 'Tennova Healthcare Centennial', note: 'Major hospital at 2300 Patterson St about 10 minutes west of the historic district.' },
      { name: 'Rolf and Daughters', note: 'Acclaimed restaurant at 700 Taylor St — multiple James Beard nominations.' },
      { name: 'City House', note: 'Italian-influenced Southern restaurant at 1222 4th Ave N, brick-oven pizza staple.' },
    ],
    thingsToDo: [
      { name: 'Sounds baseball games', note: '70-game home schedule April through September with skyline views from First Horizon Park.' },
      { name: 'Tennessee State Museum', note: 'Free state museum at 1000 Rosa L. Parks Blvd opened in 2018, focused on Tennessee history.' },
      { name: 'Bicentennial Mall walks', note: 'Quarter-mile granite map of Tennessee plus the 95-bell carillon, runs an hour at the top.' },
      { name: 'Oktoberfest', note: 'Annual October street festival on 4th Avenue celebrating the neighborhood\'s German heritage since 1980.' },
      { name: 'Henrietta Red', note: 'Seafood-focused restaurant at 1200 4th Ave N from chef Julia Sullivan; oyster bar and wood-fired program.' },
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
    landmarks: [
      { name: 'Maryland Farms', note: 'Corporate office park along Maryland Way home to Tractor Supply, Comdata, and dozens of regional HQs.' },
      { name: 'Crockett Park', note: '167-acre municipal park at 1500 Volunteer Pkwy with athletic fields, playgrounds, and the Cool Springs House.' },
      { name: 'Brentwood Library', note: 'Williamson County branch at 8109 Concord Rd with maker space and large community-room program.' },
      { name: 'Owl Creek Park', note: '23-acre park at 911 Concord Pass with walking trails and disc-golf course.' },
      { name: 'Concord Park', note: '13-acre park anchoring the Concord Road corridor with sports fields and a 1.2-mile loop trail.' },
    ],
    amenities: [
      { name: 'CoolSprings Galleria', note: 'Major mall at 1800 Galleria Blvd anchored by Macy\'s, Dillard\'s, and Belk; the south Williamson retail center.' },
      { name: 'Whole Foods Market Brentwood', note: 'Full-service grocery anchor at 782 Old Hickory Blvd.' },
      { name: 'Williamson Medical Center', note: 'Full-service hospital at 4321 Carothers Pkwy, the closest hospital to most Brentwood ZIP codes.' },
      { name: 'YMCA Maryland Farms', note: 'Large family Y at 5101 Maryland Way with indoor pool and group classes.' },
    ],
    thingsToDo: [
      { name: 'Brentwood Country Club golf', note: 'Private 18-hole course at 5123 Country Club Dr; affiliated with Belle Meade C.C. memberships.' },
      { name: 'Maryland Way Trail', note: '4-mile paved trail looping through Maryland Farms and connecting to Crockett Park.' },
      { name: 'Hot August Wines', note: 'Annual August wine-and-food fundraiser hosted at Maryland Farms by Currey Ingram Academy.' },
      { name: 'Brentwood Library author series', note: 'Regular touring-author events including James Patterson and Liane Moriarty appearances.' },
      { name: 'Smith Park', note: '46-acre nature-focused park off Wikle Rd East with a creek-side boardwalk.' },
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
    landmarks: [
      { name: 'Downtown Franklin Historic District', note: '15-block 19th-century commercial district along Main Street, National Register listed since 1972.' },
      { name: 'Carnton Plantation', note: '1826 Civil War-era home at 1345 Eastern Flank Cir; site of the November 1864 Battle of Franklin field hospital.' },
      { name: 'The Franklin Theatre', note: '1937 art-deco cinema at 419 Main St restored in 2011, runs first-run films and live music.' },
      { name: 'Carter House', note: '1830 farmhouse at 1140 Columbia Ave that became the focal point of the Battle of Franklin.' },
      { name: 'Williamson County Performing Arts Center', note: '1,000-seat theater at 905 Murfreesboro Rd hosting Studio Tenn productions and touring acts.' },
    ],
    amenities: [
      { name: 'The Factory at Franklin', note: 'Adaptive-reuse retail and event venue in a former 1920s stove factory at 230 Franklin Rd.' },
      { name: 'Williamson Medical Center', note: 'Full-service hospital at 4321 Carothers Pkwy serving all of Williamson County.' },
      { name: 'Publix at Cool Springs', note: 'Grocery anchor at 7048 Bakers Bridge Ave with full pharmacy and delivery.' },
      { name: 'CoolSprings Galleria', note: '15-minute drive north on Mack Hatcher; the largest mall in south-of-Nashville Williamson.' },
    ],
    thingsToDo: [
      { name: 'Pilgrimage Music Festival', note: 'Annual late-September music festival at Harlinsdale Farm — headliners have included Justin Timberlake and Foo Fighters.' },
      { name: 'Main Street Festival', note: 'Annual April art-and-craft festival drawing 125,000+ to downtown Franklin since 1983.' },
      { name: 'Franklin Theatre concerts', note: 'Intimate 300-seat live-music room with reliable national touring-act bookings.' },
      { name: 'Harlinsdale Farm Park', note: '200-acre former Tennessee Walking Horse farm now a public park at 239 Franklin Rd.' },
      { name: 'Civil War battlefield tours', note: 'Walking tours of the Battle of Franklin sites organized by the Battle of Franklin Trust.' },
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
      {
        type: 'p',
        text: "One more credential worth asking about while you're checking paperwork: trade association membership. The [American Fence Association](https://www.americanfenceassociation.com) is the industry's national body, and member companies commit to a code of ethics plus have access to the AFA's Certified Fence Professional (CFP) program. AFA membership isn't a license substitute, and plenty of solid Nashville crews aren't members. But when a contractor IS a member, it signals they're investing in trade education beyond what Tennessee licensing requires. Ask if they're an AFA member, and ask if anyone on the crew holds the CFP designation.",
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
        text: "Driveway gates are the project people get talked into wrong. Every couple of weeks somebody calls me about a fence install and drops the gate question halfway through, and then we spend an hour on the gate. The wrong contractor on a gate job is the difference between a system that opens for fifteen years and a system that's on its second operator by year three. So let's keep it tight. There are about a dozen shops across Davidson, Williamson, and Rutherford I'd trust with a residential driveway gate. Three I'd call first. Any honest list of the Best Drive Gate Contractors in Nashville has to include these three.",
      },
      { type: 'h2', text: 'Why These Three' },
      {
        type: 'p',
        text: "Three things matter when you're picking a gate contractor, and none of them are 'they have a fancy truck.'",
      },
      {
        type: 'ul',
        items: [
          "Real shop, real address, real phone. If the portfolio is catalog photos from the manufacturer's website and the 'service area' is 'Middle Tennessee,' you're talking to a middleman who's about to sub the work out. Every shop on this list has a building you can drive to.",
          "They specialize in gate work, not 'we'll figure it out.' Ornamental iron, automated aluminum with real operator brands (LiftMaster, FAAC, that tier), or full-service residential automation. Match the specialty to your project, not the other way around.",
          "One pick in each county. Wherever your driveway sits in the metro, at least one of these crews knows your zip and has poured concrete in your dirt.",
        ],
      },
      {
        type: 'p',
        text: "Trade association membership is the tiebreaker when the three above are even. [American Fence Association](https://www.americanfenceassociation.com) membership or a Certified Fence Professional on staff both signal a shop that's plugged into the trade beyond what Tennessee licensing requires. Worth asking when you're calling for quotes.",
      },
      {
        type: 'p',
        text: "Rankings are my honest take on who I'd call first for a typical residential install. Your project may fit #2 or #3 better. The notes under each one flag where each shop wins.",
      },
      { type: 'h2', text: '#1. Madison Steel & Iron Works of TN' },
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
      { type: 'h2', text: '#2. American Fence and Gate, LLC' },
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
      { type: 'h2', text: '#3. Master Fence' },
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
      { type: 'h2', text: 'Run a Nashville Gate Shop?' },
      {
        type: 'p',
        text: "Plenty of good gate contractors operate quietly across Middle Tennessee. If yours has a real address, a real phone, and a website with actual project photos (not catalog stock), the [submit your business](/submit-listing) form is open. Include your state or municipal license info. We update this list periodically.",
      },
      { type: 'h2', text: 'One Last Thing' },
      {
        type: 'p',
        text: "Gate work is the one fence-adjacent project where the wrong contractor genuinely costs you. The fence company that quoted the cheap install will leave you with sticking operators, mis-calibrated photo eyes, and a service contract someone else has to honor. The three picks above are picks because they don't do that. Call all three for a quote, compare specs side by side, and pick the one whose answers to the operator-and-permit questions read cleanest. That's the gate that opens on year ten.",
      },
    ] as ResourceSection[],
  },
  {
    slug: 'best-deck-builders-nashville',
    title: 'Best Deck Builders in Nashville',
    category: 'Decks',
    readTime: '8 min',
    excerpt:
      'Three ranked picks for deck and screened-porch installation in the Nashville metro, Outdoor Woodworks Inc (Davidson), Harpeth Decks (Williamson), and The Covered Patio (Rutherford). Plus how to vet any deck contractor before signing.',
    img: IMAGES.resources['best-deck-builders-nashville'],
    imageAlt: 'Wood deck slats in warm sunlight on a Nashville property, best deck builders guide',
    body: [
      {
        type: 'p',
        text: "Most deck phone calls start the same way. 'We got three quotes and they all said something different.' Yeah, they did. That's what happens when one's quoting Trex Transcend, one's quoting pressure-treated, and one's quietly subbing the framing to whoever's available that week. Sorting the quote is half the work. Picking the contractor first makes the quote sorting easier. There are about ten shops across Davidson, Williamson, and Rutherford I'd trust with a residential deck build, and three I'd actually call first. These are them. Same approach as last week's [Best Driveway Gate Companies in Nashville](/resources/best-gate-installation-companies-nashville).",
      },
      { type: 'h2', text: 'Why These Three' },
      {
        type: 'p',
        text: "Three things matter when you're picking a deck contractor.",
      },
      {
        type: 'ul',
        items: [
          "Real shop, real address, real phone. If the portfolio is stock photos and the 'service area' is 'Middle Tennessee,' you're talking to a middleman who's about to sub the framing out. Every shop here has a building you can drive to.",
          "Deck specialization, not 'we do everything.' Composite, cedar, pressure-treated, pergolas, screened porches. Pick the one whose answer to 'what do you build most?' actually matches your project, not the general remodeler who'll learn the composite brand lineup on your dime.",
          "One pick in each county. Wherever the project sits in the metro, at least one of these shops knows your zip and has set ledger bolts on a house like yours.",
        ],
      },
      {
        type: 'p',
        text: "Rankings are my honest take on who I'd call first for a typical residential build. Your project may fit #2 or #3 better. The notes under each one flag where each shop wins.",
      },
      { type: 'h2', text: '#1. Outdoor Woodworks Inc' },
      {
        type: 'p',
        text: "Outdoor Woodworks has been building custom decks, screened porches, and wood fences out of an 805 Rivergate Parkway shop in Goodlettsville since 1997. That's nearly thirty years of in-the-field work, and the headline detail is that Chris Griffith, the original owner, is still on the jobs. Most decade-plus deck companies in Nashville have transitioned to crew-and-project-manager mode by year ten. Outdoor Woodworks did not.",
      },
      {
        type: 'p',
        text: "For a homeowner in Madison, Hermitage, Bordeaux, Inglewood, or anywhere across the northern Davidson belt, this is the call when you want the longest-tenured shop you can actually walk into. The trade-off is breadth. Their model is custom builds with the owner involved, so they're not a high-volume composite-installation shop. Timeline is typically 4 to 6 weeks from contract to ground-break.",
      },
      {
        type: 'p',
        text: 'Why we ranked them here:',
      },
      {
        type: 'ul',
        items: [
          'Nearly 30 years of in-house deck and screened-porch work at a real Goodlettsville street address.',
          'Owner-operator model. Chris Griffith pulls his own permits and is on-site for the build.',
          'Custom design capability that pairs with wood fence work, useful when the deck and the surrounding privacy fence go in as one project.',
          'Licensed, bonded, and insured for residential structural work, not just general handyman scope.',
        ],
      },
      {
        type: 'p',
        text: 'Best fit: custom wood decks and screened porches across the northern Davidson belt. Properties where you want the owner involved and can wait 4 to 6 weeks.',
      },
      {
        type: 'p',
        text: 'Profile and contact: [Outdoor Woodworks Inc](/contractors/outdoor-woodworks), Davidson County, (615) 450-1721.',
      },
      { type: 'h2', text: '#2. Harpeth Decks' },
      {
        type: 'p',
        text: "Harpeth Decks is the Williamson County pick. Daniel Jones started the shop in 2019 out of a Mallory Station Road suite in Franklin and built it around a deck-only model. No fence work, no remodeling, no roofing. Just decks, screened porches, and the composite manufacturers' certification ladders. They're Trex, TimberTech, Deckorators, and Fiberon certified, which matters because each of those brands has its own warranty and installation spec, and the certifications are how Trex (for one) actually validates a 25-year labor warranty.",
      },
      {
        type: 'p',
        text: "For a homeowner in Cool Springs, Westhaven, McKay's Mill, Fieldstone Farms, or anywhere across the Brentwood-Franklin-Nolensville HOA belt who is looking at a composite upgrade or a new build, the deck-only focus pays off. Seven years in business is the sweet spot. Long enough to have a real portfolio and references. Short enough that they're not over-booked the way the Google local pack names are.",
      },
      {
        type: 'p',
        text: 'Why we ranked them here:',
      },
      {
        type: 'ul',
        items: [
          'Deck-only specialization. No fence or remodeling sideline diluting the focus.',
          'Certified installer for all four major composite brands (Trex, TimberTech, Deckorators, Fiberon), which directly affects the manufacturer warranty on your finished deck.',
          'Real Mallory Station Road suite in Franklin and a portfolio of Cool Springs and Westhaven projects.',
          'Williamson County is most of their service area, so they know the HOA submittal patterns for the major neighborhoods.',
        ],
      },
      {
        type: 'p',
        text: 'Best fit: composite deck upgrades and new builds across the Williamson HOA belt. New-construction homeowners closing with the deck scope still open.',
      },
      {
        type: 'p',
        text: 'Profile and contact: [Harpeth Decks](/contractors/harpeth-decks), Williamson County, (615) 219-9164.',
      },
      { type: 'h2', text: '#3. The Covered Patio' },
      {
        type: 'p',
        text: "The Covered Patio is the Rutherford pick. Family-owned by Taylor Ford out of a 1833 Ward Drive office in Murfreesboro, they specialize in the work that the wood-only deck shops in the region won't quote: screened-in rooms, covered patios with roof extensions, retractable-awning enclosures, and pergola builds with finished overhead structure. They have 400-plus five-star reviews and an active Rutherford County Chamber membership, both rare for shops not already sitting at the top of the search results.",
      },
      {
        type: 'p',
        text: "Why they're #3 rather than higher on the list: their sweet spot is the covered or screened build, which is a particular ask. If you want an open wood or composite deck with no roof, #1 or #2 are probably better fits. But for the homeowner who actually wants the roof, the screens, and the year-round outdoor room, this is the call.",
      },
      {
        type: 'p',
        text: 'Why we ranked them here:',
      },
      {
        type: 'ul',
        items: [
          'Specialization in covered and screened outdoor rooms, the work that often falls between deck builders and general contractors.',
          'Verifiable Ward Drive office, named owner (Taylor Ford), and Rutherford County Chamber membership.',
          '400-plus five-star reviews across Google and review sites, atypical for shops outside the top SEO tier.',
          'Coverage of Rutherford and southern Middle Tennessee, where standalone deck shops are scarcer than further north.',
        ],
      },
      {
        type: 'p',
        text: 'Best fit: screened porches, covered patios, and pergola-with-roof builds across Murfreesboro, Smyrna, and the southern metro. Homeowners who want a year-round outdoor space rather than a seasonal open deck.',
      },
      {
        type: 'p',
        text: 'Profile and contact: [The Covered Patio](/contractors/the-covered-patio), Rutherford County, (615) 649-7757.',
      },
      { type: 'h2', text: 'What to Ask Any Nashville Deck Contractor Before You Sign' },
      {
        type: 'p',
        text: "Three picks is three picks. None of them are perfect for every project, and there are good deck builders out there I don't know about. Whoever you call, the seven questions in our [Questions to Ask Before Hiring a Nashville Fence Installer](/resources/hire-nashville-fence-installer-questions) article apply just as well to deck work, because the same licensing, insurance, permit, and warranty issues show up. Five questions that are deck-specific:",
      },
      {
        type: 'ol',
        items: [
          "What composite brand AND warranty class are you quoting? Trex Transcend, TimberTech AZEK Vintage, and Deckorators Voyage have meaningfully different price points and warranties from their entry lines. Get the exact brand and class in writing.",
          "What's the joist and beam material? Pressure-treated southern yellow pine is standard, ground-contact rated is the upgrade, and steel framing is the long-term play. The difference is 15 years versus 40 on the structure under your boards.",
          "Hidden fasteners or face-screwed? Hidden is the modern look on composite, face-screwed is faster and cheaper on cedar. Make sure the quoted price matches the answer.",
          "Will you pull the permit and meet the Metro Codes inspector on-site? Decks over 30 inches off grade need a structural inspection in Metro Nashville. The 'we'll just leave the paperwork' answer fails more inspections than it passes.",
          "What's the post footing depth and concrete spec? Nashville's frost line is shallow but a 400-plus square foot deck needs 24 to 36 inches of footing depth with proper Sonotube and concrete to avoid the seven-year settle that wrecks ledger boards.",
        ],
      },
      {
        type: 'p',
        text: "Their answers to those five usually predict whether the deck is the one you brag about at year ten or the one you're rebuilding at year eight. The [Anatomy of a Nashville Fence Quote](/resources/fence-cost-breakdown) article covers the same line-item logic that applies to deck quotes. Materials, labor, framing, fasteners, railing, and any permit work should each be priced separately.",
      },
      { type: 'h2', text: 'Run a Nashville Deck Shop?' },
      {
        type: 'p',
        text: "Plenty of good deck builders operate quietly across Middle Tennessee. If yours has a real address, a real phone, and a website with actual project photos (not stock), the [submit your business](/submit-listing) form is open. Include your license info. We update this list periodically.",
      },
      { type: 'h2', text: 'One Last Thing' },
      {
        type: 'p',
        text: "Decks are the project where the cheap quote burns you twice. The first time when the boards start cupping at year four because the joist spec was wrong. The second time when you find out the manufacturer warranty doesn't apply because the installer wasn't brand-certified. The three picks above are picks because they don't do that. Get three quotes side by side, compare the brand, joist, fastener, and warranty answers, and pick the one whose answers read cleanest. That's the deck that opens onto year fifteen.",
      },
    ] as ResourceSection[],
  },
  {
    slug: 'pool-safety-barriers-nashville',
    title: 'Pool Safety Barriers in Nashville: Mesh, Aluminum, Glass, or Vinyl?',
    category: 'Comparison',
    readTime: '8 min',
    excerpt:
      "Buyer's guide to the four pool barrier types that pass 2018 ISPSC code in Tennessee — removable mesh, ornamental aluminum, glass panels, and narrow-profile vinyl picket. What each costs in Nashville, where each wins, and what I'd actually install if it were my pool.",
    img: IMAGES.resources['pool-safety-barriers-nashville'],
    imageAlt: 'Aluminum pool safety barrier around a Nashville backyard pool, pool barrier types compared',
    body: [
      {
        type: 'p',
        text: "Every spring my phone lights up with the same call. 'We're putting in a pool and the contractor is quoting us a removable mesh barrier, is that the right call?' Sometimes it is. Often it's not. Pool barriers are one of those backyard projects where the cheapest code-compliant option is the one inspectors approve fastest, which is why a lot of Nashville pools end up with a removable mesh that the kid figures out how to walk around by age six. The real question on a pool barrier project isn't 'will this pass code,' it's 'will this be the right barrier fifteen years from now?' Let me run through the four real options the way I would on a backyard walk-around in Forest Hills or Brentwood, and tell you what I'd actually install if the pool was mine.",
      },
      { type: 'h2', text: "Quick Recap: What 'Code-Compliant' Actually Means" },
      {
        type: 'p',
        text: "Tennessee enforces the 2018 ISPSC pool barrier code at the state level, and Metro Nashville Codes applies it to every residential pool. The full requirement list is in our [Pool Fence Safety Laws in Tennessee](/resources/pool-fence-safety-tn) guide, but the cliff notes: 48-inch minimum height, openings under 4 inches anywhere in the barrier, no climbable horizontals on the outside face, self-closing self-latching gates with the latch 54 inches above grade, and a maximum 2-inch gap at the bottom (4 inches if the surface is a concrete slab). Every barrier on this list passes those rules when installed right. The interesting question is which one you actually want to live with.",
      },
      { type: 'h2', text: 'The Four Barriers That Pass ISPSC in Nashville' },
      {
        type: 'p',
        text: 'Pool barriers in Davidson and Williamson typically fall into one of these four buckets. Each one has a sweet spot and a list of trade-offs. Pick the bucket that fits your yard first, then work the install variables.',
      },
      { type: 'h3', text: '1. Removable Mesh Pool Barriers' },
      {
        type: 'p',
        text: "Black polyester mesh stretched over thin aluminum poles set into ground sleeves drilled into the pool deck. The whole barrier comes apart for the off-season and re-installs in about 30 minutes. Most Nashville mesh installs run $14 to $22 per linear foot, putting a typical 80-foot pool barrier with a self-closing gate at $1,400 to $2,200 installed.",
      },
      {
        type: 'p',
        text: "Where it wins: budget, removability, decent visibility through the mesh, fastest install of the four. Pool parties feel uninterrupted because you can pull the barrier between the gathering and the water. The mesh is forgiving in a way the others aren't — kids who run into it bounce, they don't bruise.",
      },
      {
        type: 'p',
        text: "Where it loses: aesthetics (a black mesh wall in a Forest Hills backyard reads 'pool fence,' not 'integrated landscape'), durability (5 to 7 years before UV degrades the mesh and pole sleeves loosen in the deck), and the climb question. Mesh is harder to climb than people think, but a determined seven-year-old figures it out by year three. If your safety calculus depends on the barrier alone, no pool alarm, no door alarm, no cover, mesh is not where you'd start.",
      },
      { type: 'h3', text: '2. Ornamental Aluminum' },
      {
        type: 'p',
        text: "Powder-coated aluminum pickets, usually black, at 48 or 54 inches tall, with narrow picket spacing under 4 inches and a code-compliant self-closing gate. This is what most code-compliant Nashville pool installs land on once they look past mesh. Installed cost runs $35 to $55 per linear foot for residential 4-foot, plus $450 to $850 for the gate. A typical 80-foot pool barrier with one gate hits $3,300 to $5,250 installed.",
      },
      {
        type: 'p',
        text: "Where it wins: lifespan (powder-coated aluminum hits 25-plus years in Nashville humidity with zero maintenance), aesthetics (reads as ornamental, not as 'safety barrier'), zero rust, and serious climb-resistance when the picket profile is right. The pool-rated profiles eliminate any horizontal that can serve as a foothold.",
      },
      {
        type: 'p',
        text: "Where it loses: cost (roughly twice mesh), permanence (you're not pulling it down for a Saturday cookout), and the visual block. A 54-inch aluminum picket fence is visible from every angle of the yard. Some homeowners prefer the visual openness of glass for exactly that reason.",
      },
      { type: 'h3', text: '3. Glass Panel Pool Barriers' },
      {
        type: 'p',
        text: "Tempered glass panels (12mm minimum thickness) mounted on stainless steel posts or set into a frameless channel system. The highest install cost of the four by a wide margin, anywhere from $120 to $240 per linear foot in Davidson and Williamson, so an 80-foot pool barrier with one gate hits $10,000 to $19,500 installed.",
      },
      {
        type: 'p',
        text: "Where it wins: visual openness (the barrier disappears from most viewing angles), high-end aesthetic, zero climb-aid horizontals at all, and a maintenance pattern of 'wipe it down twice a year.' For a Belle Meade pool deck or a Forest Hills modern build where the landscape sightlines matter, glass is the call.",
      },
      {
        type: 'p',
        text: "Where it loses: cost (4 to 6x aluminum), spotting in Nashville's hard water (you'll be wiping mineral marks twice a week if the pool sees heavy use), and replacement complexity. A broken panel takes 2 to 4 weeks to source-match, and pool toys hitting glass crack it. Panel replacements aren't cheap.",
      },
      { type: 'h3', text: '4. Vinyl Picket (Narrow-Profile)' },
      {
        type: 'p',
        text: "Vinyl picket with sub-4-inch spacing, 48-inch height, and code-compliant gate hardware. The trick is the profile, standard 6-inch vinyl picket spacing fails ISPSC immediately. The pool-rated profile sits at 3.5 to 3.75-inch picket spacing. Installed cost runs $32 to $48 per linear foot, so an 80-foot barrier with a gate hits $2,900 to $4,250.",
      },
      {
        type: 'p',
        text: "Where it wins: maintenance-free aesthetic, white-or-tan color options that work with HOA architectural review, decent climb resistance at the narrow profile, and a 25-year manufacturer warranty on the vinyl itself. A common pick on Williamson County HOA pool builds where aluminum reads too industrial.",
      },
      {
        type: 'p',
        text: "Where it loses: limited color palette (mostly white, sometimes tan or gray), visual heft (vinyl always reads as 'fence' even at narrow spacing), and the post anchor question. Vinyl posts pulled out of clay-heavy Nashville soil within 5 years if the installer didn't set them deep with concrete. Spec at least 30-inch post depth set in concrete and you'll be fine.",
      },
      { type: 'h2', text: "What I'd Install on My Own Pool" },
      {
        type: 'p',
        text: 'If it were my pool, the call would depend on the yard and the kids:',
      },
      {
        type: 'ul',
        items: [
          'Estate property, no specific kid-safety urgency, sightline-focused yard: glass.',
          'Standard residential pool, kids under 12, normal yard, want it to last: ornamental aluminum at 48 inches with a narrow picket profile.',
          'Williamson County HOA build where aluminum reads too industrial for ARC review: narrow-profile vinyl picket.',
          'Rental property, budget-driven, planning to swap out in 5 to 7 years: removable mesh.',
        ],
      },
      {
        type: 'p',
        text: "The default I'd push toward for most family pools in the Nashville metro is aluminum. The cost premium over mesh pays back in lifespan within 8 years, the aesthetic doesn't shout 'safety barrier,' and the climb-resistance is meaningfully better when the picket profile is specced right. Glass is the upgrade pick. Vinyl is the HOA-friendly pick. Mesh is the rental pick.",
      },
      { type: 'h2', text: 'What to Ask Your Nashville Pool Barrier Installer' },
      {
        type: 'p',
        text: 'Code compliance is the floor. These five questions separate the installer who passes inspection on the first walk from the one who needs a return visit and a punch list:',
      },
      {
        type: 'ol',
        items: [
          "What's the picket profile and on-center spacing? Sub-4-inch is mandatory, but some profiles handle it more elegantly. Get the exact dimension in writing.",
          'Show me the gate hardware spec, self-closing AND self-latching, latch at 54 inches minimum, swing direction away from the pool. Magna Latch or equivalent.',
          'How are you anchoring the posts in our soil type? Davidson and Williamson clay needs at least 30-inch post depth set in concrete for any barrier expected to last past year five.',
          "What's the climb-aid plan for any decorative top rails? Horizontals under 45 inches apart on the outside face are climbable per ISPSC, even when they look like trim.",
          "Will you be on-site for the Metro Codes pool barrier inspection? The 'we'll just leave the paperwork' answer fails more inspections than it passes, and a failed inspection means you reschedule the entire pool fill date.",
        ],
      },
      {
        type: 'p',
        text: "Anyone hedging on any of those five is the wrong installer. The [seven questions in our installer-vetting guide](/resources/hire-nashville-fence-installer-questions) apply double for pool barrier work, because the failure mode here isn't a leaning fence at year three, it's the kind of failure mode you can't ever fix.",
      },
      { type: 'h2', text: 'One Last Thing' },
      {
        type: 'p',
        text: "Pool barriers are the one fence-adjacent project where the cheap option isn't just lower quality, it's actively riskier. Removable mesh that gets pulled and not re-installed before a kid finds the pool is the highest-frequency drowning scenario in Tennessee residential pool incident data. Pick the barrier you want to live with for ten-plus years, the install crew who can pass Metro Codes on the first inspection, and the gate hardware that closes itself even when you're not watching. The 'we'll save a thousand on the barrier' line is the line right before the unspeakable phone call. Pick once, install right, walk away.",
      },
    ] as ResourceSection[],
  },
  {
    slug: 'fence-before-or-after-deck-nashville',
    title: 'Fence Before or After a New Deck? The Order Most Nashville Crews Use',
    category: 'Planning',
    readTime: '6 min',
    excerpt:
      "Short answer: deck first, fence after. The exception is when part of your fence attaches to the deck. Here's what changes the order, what damages a new fence, and how to keep both crews from working over each other.",
    img: IMAGES.resources['fence-before-or-after-deck-nashville'],
    imageAlt: "Horizontal cedar privacy fence next to a wood deck in a Nashville backyard",
    body: [
      {
        type: 'p',
        text: "Deck first, fence after. That's the order on roughly 80% of Nashville backyard projects, and it's the order both contractors will quietly prefer if you ask them. The exception is when a stretch of fence physically attaches to the deck — a privacy screen on the deck side, or a walk-gate where the deck meets the yard. Those get built as part of the deck job, not the fence job. Everything else in this article is the reasoning, and the situations that flip the order.",
      },
      { type: 'h2', text: 'Why Deck First, Almost Always' },
      {
        type: 'p',
        text: "Deck demo and deck framing brings equipment into your yard. Not always heavy equipment — a small attached deck might just be two guys with a wheelbarrow — but anything bigger means a skid steer, a dump trailer, sometimes a mini excavator for the footings. Anything mechanized rolling through your yard will damage a new fence. The fresh concrete around a fence post takes 24 to 48 hours to set hard. A skid steer that brushes a post in hour 20 leaves it leaning for the rest of its life.",
      },
      {
        type: 'p',
        text: "Excavation is the bigger one. Even a modest attached deck means four to twelve footings dug 24 to 36 inches down. If any of those footings sit within six feet of your fence line, you're working in soil that's already supporting a fence post. Dig a footing too close, you destabilize the post next to it. Dig three, you'll lean a section.",
      },
      {
        type: 'p',
        text: "Then there's the material trip. Deck lumber comes in 10 and 12-foot bundles. They get unloaded somewhere — usually the front yard or the driveway — and carried through the side gate or over the fence. Watch a crew carry 200 board-feet of pressure-treated 2x10s over a fresh fence top rail sometime. The cracked rail isn't always visible from the ground, but you'll find it when the next storm pushes that section.",
      },
      { type: 'h2', text: 'When Fence Comes First Anyway' },
      {
        type: 'p',
        text: "The order flips for three real reasons:",
      },
      {
        type: 'ul',
        items: [
          "The fence and deck aren't anywhere near each other. Back perimeter fence and a small front-yard deck — independent projects, run them in whatever order the contractors are available.",
          "You need pet containment during a long deck build. If you have dogs and the deck is going to be a three-week job with crew in and out of the yard, getting the fence in first saves you from leashing them four times a day. The fence crew finishes in two to five days. The deck might take three weeks.",
          "Fall or winter timing with a slow deck contractor. If you're starting in October and your deck builder has a six-week lead time, the fence can go in now and you'll have privacy through the wait. Just confirm the deck crew can stage their equipment without crossing the new fence run.",
        ],
      },
      { type: 'h2', text: 'Same-Week Builds Where Both Get Installed Together' },
      {
        type: 'p',
        text: "Two configurations don't really have an order, because the deck and fence get built as one job:",
      },
      {
        type: 'p',
        text: "The privacy screen attached to the deck. A six to eight-foot horizontal cedar wall between you and the neighbor, anchored to the deck framing, often holding up a string of café lights. That's deck, not fence — your deck contractor builds it as part of the deck. If you treat it like a fence job and call a fence company, they'll either say no or quote it like a custom one-off, which costs more.",
      },
      {
        type: 'p',
        text: "The walk-gate from the deck to the yard. When the deck spans across what was the fence line, the gate gets framed into the deck and the fence terminates into it. Same crew on both, same week, ideally same permit pull.",
      },
      { type: 'h2', text: 'Permits, HOAs, and the 30-Day Trap' },
      {
        type: 'p',
        text: "Metro Nashville fence under eight feet doesn't need a permit. Decks over 30 inches off the ground or attached to the house do — and the permit takes two to three weeks once submitted. Knowing this is half the planning. The other half is the HOA.",
      },
      {
        type: 'p',
        text: "Most Williamson County subdivisions — Brentwood, Franklin, Spring Hill — want the full backyard plan in one Architectural Review Committee submission. Deck plus fence plus landscaping plus pergola, reviewed as a finished aesthetic. Submitting the deck first and then coming back for the fence later gets you 30 to 45 days of review for the deck, then 30 to 45 more for the fence. One packet with everything saves you 30 days. The [full Williamson County HOA playbook](/resources/metro-nashville-permits) walks through the submission shape ARC reviewers actually look at.",
      },
      { type: 'h2', text: 'Where the Money Leaks' },
      {
        type: 'p',
        text: "Two cost decisions ride on the order:",
      },
      {
        type: 'p',
        text: "Same trip vs. separate trips. If one fence company handles both the perimeter fence and the deck-attached privacy screen — and a lot of them can, the cedar work is identical — you pay one mobilization fee instead of two. That's $200 to $400 saved. Have the conversation up front; most quotes don't break mobilization out as a line item, but it's in there.",
      },
      {
        type: 'p',
        text: "Matching the stain. A new cedar deck and a new cedar fence stained in the same week, by the same crew, with the same can of stain, look like one project. Stain them a year apart and they will never quite match — the older one has weathered, the new one is still pulling oil. If matching matters to you, get them both built and stained in the same window. If it doesn't, ignore this and stain on whatever schedule suits the weather. The [line-item breakdown of a Nashville fence quote](/resources/fence-cost-breakdown) shows where stain and finish usually hide.",
      },
      {
        type: 'p',
        text: "Damage repair is the other one. Fence first, deck demo damages it, you're paying to fix what you just bought. The deck contractor's general liability probably covers it, but you'll spend a week of phone tag getting it sorted while a cracked rail sits in your yard. The hassle is worse than the money.",
      },
      { type: 'h2', text: 'Coordinating Two Crews Who Don\'t Talk to Each Other' },
      {
        type: 'p',
        text: "Nashville fence companies don't build decks. Deck companies don't build fences. You'll have two contractors who've never met and aren't naturally inclined to coordinate. Three questions to ask each of them before you sign anything:",
      },
      {
        type: 'ul',
        items: [
          "What's your window? You want consecutive windows, not overlapping. Deck week 1-3, fence week 4. Or deck week 1-2, fence week 3, if the deck is small.",
          "Are you OK with the other contractor on-site while you work? Some are fine; some want exclusive yard access. The deck guys usually want exclusive access for the framing days — there are sheets of plywood and cuts happening that don't pair well with another crew.",
          "Who's responsible if your equipment damages the other contractor's work? Get the answer in writing if either of them hedges. Standard answer is the damaging contractor's general liability, but the document trail matters more than the verbal agreement.",
        ],
      },
      {
        type: 'p',
        text: "Most of the time both contractors will say the right things. The issue is when neither knows the other one is coming, and the deck crew shows up Monday to find a fresh fence post in their dig zone. A two-minute call between the project managers prevents that.",
      },
      { type: 'h2', text: 'Edge Cases Worth Knowing' },
      {
        type: 'p',
        text: "Pool deck plus pool fence is a different sequence entirely — excavation first, fence second (Tennessee pool code requires the barrier in place before the pool can be filled), deck last. The [pool fence code rules in Tennessee](/resources/pool-fence-safety-tn) get specific about which fence configurations satisfy the barrier requirement, because not every fence does.",
      },
      {
        type: 'p',
        text: "Replacement fence plus new deck is the easy version. Demo the old fence as part of the deck crew's site prep — they're already swinging tools and have a dumpster on site — and the fence company comes in after both are done. Saves a day of labor on each side.",
      },
      {
        type: 'p',
        text: "Grading or land clearing work always goes first. If the yard needs to be leveled or cleared before either crew can work, that's day one and the rest plans around it.",
      },
      { type: 'h2', text: 'Wrapping It Up' },
      {
        type: 'p',
        text: "The default is deck first, fence after. Most Nashville projects fit that. The exceptions are the integrated builds where the fence is part of the deck, the pet-containment situations where you want the fence sooner, and the unusual cases where the fence and deck are on opposite sides of the yard and the order doesn't matter at all. Talk to both contractors before either of them shows up, get their windows aligned, and tell each one that the other exists. That's most of the coordination problem solved. If you're still picking the fence contractor itself, the [seven questions to ask any Nashville installer](/resources/hire-nashville-fence-installer-questions) apply here too — the deck-adjacent fence work is a slightly higher-skill job than a perimeter privacy fence, and you want a crew that's comfortable working around someone else's project.",
      },
    ] as ResourceSection[],
  },
  {
    slug: 'driveway-gate-permits-nashville',
    title: 'Driveway Gate Permits in Nashville: What You Actually Need, and What You Don\'t',
    category: 'Permits',
    readTime: '7 min',
    // Per-article publish date overrides the global RESOURCE_PUBLISHED_AT for
    // the home-hero "New {Mon DD}:" pill. ISO date is anchored noon-UTC at
    // format time so the timezone shift doesn't bump it back a day.
    publishedAt: '2026-06-12',
    excerpt:
      "A manual swing gate doesn't need a Metro permit. The electric operator does. The right-of-way setback gets people in trouble more than either one. Here's how Nashville actually inspects driveway gates.",
    img: IMAGES.resources['driveway-gate-permits-nashville'],
    imageAlt: 'Black ornamental driveway gate set back from a Nashville street with stone columns',
    body: [
      {
        type: 'p',
        text: "A standard manual driveway gate built as part of a fence under 8 feet doesn't need a Metro Nashville permit. An electric operator does — you need an electrical permit for the power run. If any part of the gate crosses or swings into the public right-of-way, you also need a Public Works ROW permit. And whether or not a permit is required, the setback from the road is a separate code rule that catches a lot of homeowners flat-footed. Below is what triggers each permit, what doesn't, and the order most contractors don't tell you to handle first.",
      },
      { type: 'h2', text: 'The Short Answer' },
      { type: 'p', text: 'For the impatient:' },
      {
        type: 'ul',
        items: [
          'Manual swing or slide gate, under 8 ft, no electric operator → no Metro permit. Just install.',
          'Electric operator, hardwired or trickle-charged from the house → electrical permit for the power circuit.',
          'Gate over 8 ft tall, or attached to a masonry column over 4 ft → building permit.',
          'Gate or sweep arc that crosses the public right-of-way → Public Works ROW permit.',
          'Williamson County HOA — Brentwood, Franklin, Spring Hill, Cool Springs → ARC approval, regardless of what Metro says.',
          'Property where the address has a fire hydrant inside the trigger distance → Knox Box required for emergency override.',
        ],
      },
      { type: 'h2', text: 'The Electrical Permit Is Where People Get Caught' },
      {
        type: 'p',
        text: "A homeowner watches a YouTube install video, buys a $1,200 solar opener kit, mounts it themselves, and never thinks about a permit because there's no concrete being poured. Six months later a Metro inspector walks by during a different job, sees the operator and the buried conduit running back toward the house, and writes a stop-work order until it's permitted and inspected.",
      },
      {
        type: 'p',
        text: "Metro Codes treats any low-voltage gate operator that runs off household current as an electrical installation. The conduit run from the panel out to the gate post is a permit pull and an inspection — typically $90 to $140 for the permit and a one-day turnaround on the inspection. Solar-only operators are technically outside this because there's no household circuit involved, but as soon as you tie in a charging trickle line from the house, you're back inside the permit.",
      },
      {
        type: 'p',
        text: "The fix is dumb-simple if you know it in advance: have your gate contractor or a licensed electrician pull the permit before they cut the trench. After the fact, the same inspection costs more and a few inspectors will ask you to uncover the conduit run to verify burial depth — 18 inches for direct-bury at our soil type, 12 inches if it's in PVC conduit.",
      },
      { type: 'h2', text: 'The Right-of-Way Trap That Has Nothing to Do With Permits' },
      {
        type: 'p',
        text: "Metro Public Works owns the first 10 to 25 feet behind the street curb — the exact number varies by road class. It's in your plat survey if you have one, and Public Works will tell you over the phone otherwise. That land is technically yours but encumbered by an easement, which means you can't build into it without a ROW permit and you can't have a gate that swings into it on either side.",
      },
      {
        type: 'p',
        text: "The setback that matters most is the one the gate needs from the public roadway. Public Works asks for at least 20 feet between the back of the curb and the closed position of the gate. The reasoning: a vehicle waiting for the gate to open should be fully off the public road. Twenty feet is roughly one car length plus a few feet of buffer. Some properties on busier roads — Hillsboro, Granny White, Old Hickory Boulevard — get asked for 25 or 30 feet because the speed of through-traffic makes a queued vehicle a hazard sooner.",
      },
      {
        type: 'p',
        text: "The mistake people make is measuring from the property line instead of the curb. Property line is usually 10 to 15 feet inside the curb. If you put your gate at the property line, you have a gate roughly 10 feet from the road, and you'll get a courtesy phone call from Public Works inside a month. The fix at that point is moving the gate, which is exactly the install bill twice.",
      },
      { type: 'h2', text: 'HOA Approval Comes Before Everything Else' },
      {
        type: 'p',
        text: "This is the upstream one. If you're inside a Williamson County subdivision — most of Brentwood, Franklin, Cool Springs, Spring Hill — the ARC packet is the gating step. Skip it and you'll get a violation letter and a mandate to remove the gate at your cost, regardless of whether Metro approved everything downstream.",
      },
      {
        type: 'p',
        text: "The ARC packet wants the gate elevation drawing, the column material — stone, brick, stucco, painted metal — the operator hardware brand, and the keypad location. Some HOAs ban swing gates entirely and only allow slide gates because the sweep arc is more predictable from the street. Others ban anything but pedestrian-scale 4-foot gates on driveways. Read your covenants before you spec a single piece of hardware. The [Williamson County HOA submission shape](/resources/metro-nashville-permits) covers what those packets typically require alongside the Metro rules.",
      },
      { type: 'h2', text: 'Fire Marshal — The Knox Box Rule' },
      {
        type: 'p',
        text: "If your driveway is the only access to a residence, and the residence has a fire hydrant within a certain distance, Metro Fire Marshal can require a Knox Box override on the gate operator. The Knox Box is a small lockbox that holds the manual override key, accessible only by Nashville Fire keys. One-time $300-ish hardware addition, not a permit, but it has to be installed and active before the gate passes inspection.",
      },
      {
        type: 'p',
        text: "This catches people on the rural end of Davidson County and across into Williamson — Joelton, Whites Creek, parts of Forest Hills, anywhere you have one driveway serving one house with a hydrant on the line. Ask your installer to call the Fire Marshal's office before you specify the operator. The answer comes fast and it saves you from retrofitting the lockbox after the install crew has already packed up.",
      },
      { type: 'h2', text: 'UL 325 Isn\'t a Permit, But It\'s How You Pass Inspection' },
      {
        type: 'p',
        text: "Every automatic gate operator sold legally in the U.S. has to be UL 325 compliant. That covers the obstruction sensing — the gate has to reverse if it hits anything — the photo-eye safety beams, and the edge sensors on slide gates. There's no permit for it. The operator either is or isn't compliant when you buy it. But if you have an old non-compliant operator from before 2016 and you replace your gate around it, the inspector pulling the electrical permit will flag the operator and tell you it has to come out.",
      },
      {
        type: 'p',
        text: "Two practical implications. Don't buy a used operator off Marketplace unless you can verify the UL 325 listing. And if you're swapping a manual gate for an electric one on existing posts, plan to spend another $300 to $500 on photo eyes and edge sensors that weren't on the manual job. Those aren't optional — they're how the operator passes its own listing test.",
      },
      { type: 'h2', text: 'The Order Most Contractors Don\'t Walk You Through' },
      { type: 'p', text: 'The approvals and permits stack in this sequence:' },
      {
        type: 'ol',
        items: [
          'HOA / ARC approval first. Gets you the right to build at all in subdivisions.',
          'Survey or plat review. Confirms where the right-of-way line actually sits and how far back the gate has to land.',
          'Public Works ROW permit if the gate or sweep crosses the easement.',
          'Electrical permit pulled by your gate contractor or a licensed electrician.',
          'Fire Marshal sign-off if the address has a hydrant within the trigger distance.',
          'Install the gate and operator.',
          'Schedule the electrical inspection.',
          'Final operability test and Knox Box install if required.',
        ],
      },
      {
        type: 'p',
        text: "Skipping HOA approval is the most expensive mistake because you can be ordered to remove a fully installed gate. Skipping the electrical permit is the most common one — almost always discovered during an unrelated inspection later. Skipping the setback calculation is the most embarrassing, because there's no fix for a gate three feet too close to the road except moving it.",
      },
      { type: 'h2', text: 'When You Probably Don\'t Need Any of This' },
      {
        type: 'p',
        text: "A manual swing gate built as part of a perimeter fence under 8 ft, set more than 20 feet back from the curb, no electric anything, no masonry columns over 4 ft, no HOA — no permits. Just build it. Most rural Davidson County lots and a fair amount of older East Nashville and Inglewood properties fall in this bucket. The fence contractor handles it as part of the fence job, the gate becomes a wider section with hinges, and the only inspection is whether your neighbor likes the color.",
      },
      {
        type: 'p',
        text: "That's the answer for maybe 30% of Nashville driveway gates. The other 70% have at least one of the triggers above and need at least one approval. Knowing which bucket you're in before you sign anything is the difference between a $0 paperwork bill and a $1,400 retrofit. If you're still pricing the install side, the [cost ranges for Nashville driveway gates](/resources/driveway-gate-cost-nashville) walk through what the build actually runs, and the [shortlist of Nashville gate installers](/resources/best-gate-installation-companies-nashville) is a useful place to start the conversation.",
      },
      { type: 'h2', text: 'Wrapping It Up' },
      {
        type: 'p',
        text: "Three things will save you money on a Nashville driveway gate project: pulling the electrical permit before the trench is cut, measuring the setback from the curb instead of the property line, and getting HOA approval before you spec hardware. The rest is dollars and time, both of which are easier to plan when the rules are clear upfront. The [walk-through of Metro Nashville's other fence and structure permits](/resources/metro-nashville-permits) covers the parent rules these gate rules sit inside, and the [seven questions every Nashville fence installer should answer](/resources/hire-nashville-fence-installer-questions) apply just as cleanly to gate contractors — most fence companies handle gate work in-house anyway.",
      },
    ] as ResourceSection[],
  },
  {
    slug: 'deck-cost-nashville',
    title: 'How Much Does a New Deck Cost in Nashville?',
    category: 'Decks',
    readTime: '7 min',
    publishedAt: '2026-06-13',
    excerpt:
      'Honest installed price ranges for new decks in Nashville — pressure-treated pine to premium composite, ground-level to elevated multi-level. Plus the line items most quotes leave off and the permit traps that catch homeowners on Metro builds.',
    img: IMAGES.resources['deck-cost-nashville'],
    imageAlt: 'New composite deck with cedar privacy fence at a Nashville home, deck cost guide',
    body: [
      {
        type: 'p',
        text: "A new deck in Nashville runs anywhere from $4,000 to $120,000-plus. That's the actual span, and where your project lands inside it depends on five things: square footage, elevation off the ground, decking material, whether the deck attaches to the house, and what neighborhood you're in (HOA review and permit overhead is real money). Below is the way I'd walk through it at the end of your driveway in Brentwood or Inglewood, and how to read any deck quote that hits your inbox.",
      },
      { type: 'h2', text: 'The Four Cost Tiers in Nashville' },
      {
        type: 'p',
        text: "Most decks in Davidson and Williamson Counties fall into one of these buckets. Pick the bucket first, then work the line items inside it.",
      },
      {
        type: 'table',
        headers: ['Tier', 'What you get', 'Installed cost in Nashville'],
        rows: [
          ['Ground-level basic', '100-180 sqft pressure-treated pine, no railings, 0-1 stair', '$3,500-$7,500'],
          ['Mid-range elevated', '200-350 sqft, PT framing, composite or cedar decking, full railings', '$10,000-$22,000'],
          ['Premium composite', '350-500 sqft, full composite, powder-coated aluminum rails, hidden fasteners', '$22,000-$45,000'],
          ['Custom outdoor living', '500+ sqft, multi-level, pergola or roof, built-in features', '$45,000-$120,000+'],
        ],
      },
      {
        type: 'p',
        text: "The mid-range bracket is where most of my Nashville builds land. The most common phone call is 'I want something nicer than my dad's deck but I'm not building a resort,' and the honest answer is usually 'OK, 280 square feet, composite decking on PT framing, full railings, single stair run — somewhere around $14,500 to $18,000 depending on how high off the ground you're sitting.'",
      },
      { type: 'h2', text: 'Per-Square-Foot, Because That\'s How Most Estimators Quote' },
      {
        type: 'table',
        headers: ['Decking material', 'Installed cost per sqft in Nashville'],
        rows: [
          ['Pressure-treated pine', '$25-$40'],
          ['Western red cedar', '$30-$50'],
          ['Mid-grade composite (Trex Enhance)', '$40-$65'],
          ['Premium composite (TimberTech, Trex Transcend)', '$55-$85'],
          ['Hardwood (ipé, mahogany)', '$70-$110'],
        ],
      },
      {
        type: 'p',
        text: "The per-square-foot number includes the framing, decking surface, railings, and one set of stairs. It assumes a flat rectangular deck near the ground, no built-ins. Every variation from that adds a multiplier.",
      },
      { type: 'h2', text: 'The Line Items Hiding in a Deck Quote' },
      {
        type: 'p',
        text: "A real deck quote has at least nine separate cost lines. If yours is one number on a page, ask for the breakdown before you sign.",
      },
      {
        type: 'ul',
        items: [
          'Permit fee plus drawings: $200-$700 in Metro Nashville. Decks over 30 inches off the ground or attached to the house require a permit. Some require an engineer stamp on top ($400-$1,200 extra).',
          "Demo of an existing deck: $1,000-$4,000 if you're replacing. Skip if it's a new build on bare ground.",
          'Footings: $80-$150 each, typically 4-12 footings on a residential deck. Concrete piers or helical piles, 30-42 inches deep in Nashville clay.',
          'Framing: $8-$14 per square foot. Pressure-treated 2x10 or 2x12 joists, beams, and posts. Always specify ground-contact-rated lumber for anything touching dirt.',
          'Decking surface: $4-$15 per sqft for pine, $8-$22 for composite, $15-$28 for hardwood. The biggest single variable in the quote.',
          'Railings: $35-$120 per linear foot. Code requires guards on any deck more than 30 inches off grade. Composite with metal balusters is the modern Nashville default.',
          'Stairs: $1,200-$4,000 per stair run, depending on rise and run.',
          "Ledger flashing and hardware: $300-$800. Don't skip this and don't accept it bundled into another line. Bad flashing is the number-one cause of rot inside the house wall ten years later.",
          'Skirt or fascia: $400-$1,500. The finished look around the deck base. Cosmetic-only — but only if the framing is vented behind it.',
        ],
      },
      { type: 'h2', text: 'What Drives the Price Up' },
      {
        type: 'ul',
        items: [
          'Elevation. Anything more than 8 feet off the ground adds $4,000-$15,000 — engineered beams, taller posts, mandatory guard rails, and usually a separate engineer review.',
          'Multi-level or wraparound. Each level is basically a separate small deck. Roughly 1.3x to 1.8x the simple-rectangle price of the same total square footage.',
          'Composite versus pine. The material is 1.5x to 3x. The labor is roughly the same, but board cost stacks fast across 400 square feet.',
          'Built-ins. Benches, planters, pergolas, partial roofs: add $5,000-$30,000-plus depending on the spec.',
          "Curves or angles. Anything that isn't a 90-degree corner runs 20-40 percent over straight-edge framing.",
          'HOA review in Williamson County subdivisions. Brentwood, Franklin, Cool Springs: 4-8 weeks of waiting plus $300-$1,500 in review fees. Some HOAs reject pressure-treated decking outright and force composite.',
        ],
      },
      { type: 'h2', text: 'What Keeps the Price Down' },
      {
        type: 'ul',
        items: [
          'Ground-level builds. No railings, no stairs, no engineering, no separate inspection.',
          'Rectangular footprint, single elevation.',
          "Pressure-treated pine. Still the most affordable, and Nashville's climate doesn't punish it the way Florida or coastal Carolina do.",
          'Standard joist spacing (16 inches on center). Tightening to 12-inch on-center for the firmer composite feel adds 20 percent to framing.',
          'One site access point with no carrying materials over fences. If your only access is a 36-inch side gate, plan to pay a delivery upcharge.',
          'Off-season build. November through February gets you discounted labor in Nashville, weather permitting. Most crews are slow then and will trim 5-10 percent.',
        ],
      },
      { type: 'h2', text: 'Hidden Costs Most Quotes Skip' },
      {
        type: 'p',
        text: "Six line items that show up on the final invoice if they weren't on the first quote:",
      },
      {
        type: 'ul',
        items: [
          'Engineer stamp on elevated decks: $400-$1,200. Metro Codes inspectors ask for it on anything more than 4 feet off grade with a complex framing plan.',
          'HOA approval review and resubmission: $300-$1,500 plus the wait. ARC packets get rejected the first time on cosmetic items — railing color, skirt material — and the revision cycle adds weeks.',
          'Asbestos siding removal at the ledger attachment point on pre-1980 homes: $800-$2,500. Common in older East Nashville, Inglewood, and parts of West Meade. Required by code if disturbed.',
          "Old footings that weren't to code. If you're replacing a deck, expect the existing footings to fail inspection: $1,500-$4,500 to dig and reset.",
          'Utility relocation. A footing that hits a gas, water, or electrical line needs the utility moved before the deck can go in: $500-$3,000.',
          'Difficult-site-access fee: $200-$800. Steep slope, narrow gate, no street parking — the crew passes some of that through.',
        ],
      },
      { type: 'h2', text: 'Maintenance Costs Are a Real Line Item Too' },
      {
        type: 'ul',
        items: [
          'Pressure-treated pine: re-stain every 2-3 years, $400-$1,200 per cycle.',
          'Western red cedar: re-stain every 2-3 years, $500-$1,500 per cycle.',
          'Composite: annual cleaning plus a cap-board inspection, $0-$300 if you do it yourself, $300-$700 hired out.',
          'Hardwood: oil every 2-4 years, $600-$2,000 per cycle.',
          'Railing repair after a few seasons of Tennessee weather: $200-$2,000 depending on what failed. Wood balusters crack first.',
        ],
      },
      { type: 'h2', text: 'Does a New Deck Actually Add Property Value?' },
      {
        type: 'p',
        text: "Reality check from the Nashville appraiser side. A mid-range deck ($12,000-$22,000) recovers 60-75 percent of installed cost at sale, which is one of the better returns on any exterior project. A premium composite deck ($30,000-plus) recovers closer to 50-60 percent because MLS comps don't yet separate composite from PT in this market. Custom outdoor-living buildouts at $50,000-plus recover less of the dollar amount, but they meaningfully accelerate time-on-market — homes with a built-out backyard sell faster in the same price band, particularly to family buyers in the Sumner County and 615 exurbs.",
      },
      { type: 'h2', text: 'How to Read a Deck Quote' },
      {
        type: 'p',
        text: "Seven things to verify before you sign:",
      },
      {
        type: 'ol',
        items: [
          'Footing count, depth, and material. "4 concrete piers at 36 inches" is a spec. "Standard footings" is a slogan.',
          'Joist size, spacing, and treatment grade. "PT 2x10, 16-inch on-center, ground-contact-rated where applicable" is a spec.',
          'Decking brand AND product line. "Trex Enhance Naturals in Coastal Bluff" is a spec. "Composite decking" is a slogan that lets the contractor swap to whatever\'s cheap that week.',
          'Railing spec by brand and product. Code-compliant 36-inch guard for anything over 30 inches of fall.',
          "Ledger attachment method, hardware, and flashing brand. This is where decks fail twenty years out. Don't accept a bullet point that just says 'attach to house.'",
          'Permit responsibility. Who pulls. Who pays. Who attends the inspection.',
          'Three separate warranties: framing structural (often 5-10 years), decking material (manufacturer-backed, 25-50 years on composite), install workmanship (1-2 years).',
        ],
      },
      {
        type: 'p',
        text: "If any of those seven are missing, ask before signing. The same logic that applies to a [fence quote breakdown](/resources/fence-cost-breakdown) applies double to a deck quote, because the deck is structural and the consequences of skipped specs show up as actual rot or collapse later, not just an ugly fence line.",
      },
      { type: 'h2', text: 'Red Flags in a Deck Quote' },
      {
        type: 'ul',
        items: [
          'Quote without a permit line on a deck over 30 inches off the ground.',
          'Pressure-treated decking marketed as "composite" in the description. Read the actual product spec.',
          'Missing flashing detail on the ledger attachment. The single biggest cause of deck-related house damage in the Nashville market.',
          'Skirt or fascia installed without ventilation behind it — traps moisture and rots the framing from the inside in five years.',
          'A single warranty number that doesn\'t separate material from workmanship.',
          'Two-week turnaround on a complex deck. Custom framing and proper ledger flashing take 6-10 weeks. Anyone promising faster is using stock components or skipping permits.',
          'Verbal estimate with no written breakdown. The number you got verbally is not the number you\'ll be billed.',
          'Deposit over 50 percent. The Nashville norm is 25-40 percent.',
        ],
      },
      {
        type: 'p',
        text: "The same screening logic from the [seven questions to ask any Nashville fence installer](/resources/hire-nashville-fence-installer-questions) article applies to deck builders — actually more strictly, because deck work involves structural framing, weatherproofing, and elevated guard-rail code that residential carpenter crews don't always nail on the first inspection. If you're shopping, the [shortlist of Nashville deck builders](/resources/best-deck-builders-nashville) is where to start, and the [build-order article on decks plus fences](/resources/fence-before-or-after-deck-nashville) covers what to do if both projects are happening in the same window.",
      },
      { type: 'h2', text: 'One Last Thing' },
      {
        type: 'p',
        text: "The deck is the only exterior project on the house with skin contact. You'll walk on it barefoot in July, lean on the rails watching a storm roll across Davidson County, and sit on the steps at 11 p.m. when the dog's been outside too long. It's worth spending at the level you want to live with for the next decade. The cheap deck is the one with the silvery boards and the spongy spot near the stair landing that you've been meaning to fix since 2024. The right deck is the one you forget is new — because it just feels like part of the house. Spend at the right level. Get the flashing detail in writing. And don't sign anything that doesn't separate the decking brand from the framing spec.",
      },
    ] as ResourceSection[],
  },
  {
    slug: 'composite-vs-wood-decking-privacy-fence',
    title: 'Composite vs Wood Decking: Which Works Better With Privacy Fencing?',
    category: 'Comparison',
    readTime: '7 min',
    publishedAt: '2026-06-15',
    excerpt:
      'Composite holds color while your cedar fence greys. Wood matches but means a re-stain cycle on both. Heat retention, color drift, clearance, and the 10-year cost in Nashville — broken down side by side.',
    img: IMAGES.resources['composite-vs-wood-decking-privacy-fence'],
    imageAlt: 'Composite deck next to a cedar privacy fence in a Nashville backyard, material comparison',
    body: [
      {
        type: 'p',
        text: "Composite decking next to a cedar privacy fence ages into two different finishes — composite stays the color you bought, cedar greys to silver. Wood decking next to a cedar fence ages together because you re-stain both on the same cycle. Which is better depends on whether you want the deck and fence to read as one project at year five, or two. The rest of this article is the numbers behind that choice — heat, color drift, clearance, cost, and the 10-year maintenance bill in Nashville.",
      },
      { type: 'h2', text: 'Do composite and a cedar privacy fence even look good together?' },
      {
        type: 'p',
        text: "Yes, if you pick the composite color before the fence stain. Mid-tone composite boards in the Trex Enhance Naturals range or TimberTech Reserve read as a deliberate contrast against a freshly stained cedar fence — same warm undertone, different surface texture. The match looks intentional. The combination that fails is a gray-toned composite (Trex Enhance Saddle, Reserve Driftwood) against a freshly stained warm cedar — the gray reads cold, the cedar reads orange, and they fight each other from across the yard.",
      },
      {
        type: 'p',
        text: "The fix is sequencing. Pick the composite first, then have the fence stained in a complementary tone. Cabot Solid Stain in Cedar Tone Brown gets the closest match for warm composites; Cabot Stain in Driftwood Gray pairs cool composites. Order the stain sample card before either contractor breaks ground.",
      },
      { type: 'h2', text: 'Will the composite deck get too hot to walk on in a Nashville July?' },
      {
        type: 'p',
        text: "Yes — and the privacy fence next to it makes it hotter. Composite boards in direct sun run 35-50°F above ambient air temp. In a Nashville July at 95°F ambient, that's 130-145°F surface temp. Add a 6-foot solid privacy fence on the south side trapping radiant heat against the deck, and you add another 5-8°F. Lighter composite colors (Trex Enhance Naturals in Coastal Bluff, TimberTech Vintage in Weathered Teak) run 10-15°F cooler than dark colors (Trex Transcend Spiced Rum, TimberTech Reserve Mocha). If you're putting composite next to a south- or west-facing fence, pick the lightest color you'll tolerate.",
      },
      {
        type: 'p',
        text: "Wood decking sits 15-25°F cooler than composite in the same sun because wood conducts heat slower than the PVC + wood-fiber composite matrix. Cedar specifically runs cooler than pressure-treated pine because the cells are less dense. If your deck takes 6-plus hours of direct sun a day and barefoot use is the primary mode — kids, dogs, pool entry — wood wins this category outright.",
      },
      { type: 'h2', text: 'What happens to the color over five years?' },
      {
        type: 'p',
        text: "Composite stays inside 5-10 percent of original color through year 10. Manufacturer warranties cover fade and stain up to 25-30 years (Trex Transcend at 25, TimberTech Advanced PVC at 30, mid-grade Trex Enhance at 25). The drift is real but measured in single-digit percentages — mostly visible when you place a fresh replacement board next to old ones.",
      },
      {
        type: 'p',
        text: "Cedar privacy fence, untreated and unstained, goes from honey-brown to driftwood silver in 12-18 months in Tennessee humidity. Stained cedar — the Nashville norm, semi-transparent oil stain re-applied every 2-3 years — holds its color across the cycle but the stain itself dulls by month 18.",
      },
      {
        type: 'p',
        text: "Wood decking, whether cedar or pressure-treated pine, follows the same arc as the fence. Re-stain the fence, re-stain the deck, same weekend. They age together.",
      },
      {
        type: 'p',
        text: "The visible outcome at year five with composite + cedar fence is two distinct planes: deck still warm-toned, fence silvered. Some homeowners read that as 'modern and intentional.' Others read it as 'the deck is newer than the fence.' Decide which you'd rather see before you order materials.",
      },
      { type: 'h2', text: 'How close can the privacy fence sit to the deck edge?' },
      {
        type: 'p',
        text: "4 inches minimum for either material. Composite needs 4-6 inches of air gap on the fence-side joist for ventilation — boards under a fence with no airflow grow mildew on the underside in two summers and the warranty doesn't cover it. Wood decking needs the same gap for the opposite reason: standing moisture between deck and fence rots both faster.",
      },
      {
        type: 'p',
        text: "If your privacy fence is already in and sits closer than 4 inches to where the deck will go, the deck contractor has two options. Set the deck framing back to create the gap (loses 4-6 inches of usable surface), or install a continuous vented spacer along the fence-adjacent joist. The spacer adds about $120 to the build and saves the warranty on composite installs.",
      },
      { type: 'h2', text: 'Does the maintenance schedule actually match between materials?' },
      {
        type: 'p',
        text: "No, and that's the strongest argument for picking one or the other deliberately. Here's the 10-year maintenance bill for a typical 350-square-foot Nashville deck adjacent to 80 linear feet of cedar privacy fence:",
      },
      {
        type: 'table',
        headers: ['Year', 'Composite deck + cedar fence', 'Wood deck + cedar fence'],
        rows: [
          ['0 (install)', '$22,700', '$14,700'],
          ['Year 2', 'Stain fence: $450', 'Stain both: $900'],
          ['Year 4', 'Cleaning + stain fence: $700', 'Stain both: $900'],
          ['Year 6', 'Stain fence: $450', 'Stain both: $1,000'],
          ['Year 8', 'Cleaning + cap-board repair + stain fence: $900', 'Stain both: $1,000'],
          ['Year 10', 'Stain fence: $500', 'Stain both + spot board replace: $1,500'],
          ['10-year total', '$25,700', '$20,000'],
        ],
      },
      {
        type: 'p',
        text: "Composite costs $5,700 more across 10 years on this footprint. That's the premium for not having to keep the deck on the same stain cycle as the fence. If you want a backyard you don't have to schedule around, composite is worth it. If your deck is part of a 'stain everything one weekend in April' routine, wood wins on cost and visual continuity.",
      },
      { type: 'h2', text: 'What\'s the actual installed cost gap in Nashville right now?' },
      {
        type: 'p',
        text: "Pressure-treated pine deck on PT framing runs $25-$40 per square foot installed in Davidson and Williamson Counties as of mid-2026. Mid-grade composite (Trex Enhance) on PT framing runs $40-$65 per square foot. Premium composite (TimberTech, Trex Transcend) runs $55-$85 per square foot. On the 350-square-foot example above:",
      },
      {
        type: 'ul',
        items: [
          'Pressure-treated pine deck: $8,750-$14,000',
          'Western red cedar deck (warmer than PT, still wood): $10,500-$17,500',
          'Mid-grade composite deck: $14,000-$22,750',
          'Premium composite deck: $19,250-$29,750',
        ],
      },
      {
        type: 'p',
        text: "The composite premium is real and front-loaded. The 10-year math closes some of the gap through skipped re-stains but doesn't reverse it. If budget is the primary constraint and you're OK with the spring stain cycle, pressure-treated pine plus a cedar privacy fence is the cheapest combination that doesn't look cheap. The [full deck cost breakdown by material](/resources/deck-cost-nashville) covers what each line item runs across the four tiers.",
      },
      { type: 'h2', text: 'When should you pick composite over wood with a privacy fence?' },
      {
        type: 'p',
        text: "Five situations where composite is the right call:",
      },
      {
        type: 'ul',
        items: [
          "Your privacy fence is vinyl, not cedar. Vinyl doesn't grey or need re-staining, so the visual-match argument for wood decking goes away. Composite + vinyl ages together at a measured 5-10 percent drift.",
          'You have a pool inside the privacy fence enclosure. Pool decks see chlorine splashback that destroys wood fibers in 3-4 years. Composite shrugs it off and the warranty stays valid.',
          'The deck takes more than 6 hours of direct sun a day AND a north-side privacy fence partially shades it. Composite holds color through the half-shade cycle; wood bleaches unevenly across the line.',
          "You travel, rent the property, or otherwise don't want to schedule yard work. Composite needs annual cleaning, not re-staining — about 90 minutes versus a full weekend.",
          "You're inside an HOA that mandates composite decking. Several Brentwood and Franklin subdivisions require it as of 2026 covenant updates. Match the deck to the mandate.",
        ],
      },
      { type: 'h2', text: 'When does real wood decking still beat composite next to a privacy fence?' },
      {
        type: 'p',
        text: "Four situations where wood wins:",
      },
      {
        type: 'ul',
        items: [
          'The fence is fresh cedar and you want the deck to age with it. Wood-on-wood at year five reads as one project. Composite-on-cedar at year five reads as two materials.',
          'Barefoot use is the primary mode (kids, dogs, pool). Wood runs 15-25°F cooler than composite in Nashville July sun. That difference is the line between "comfortable" and "shoes on."',
          "Budget tops out under $15 per square foot installed. Composite doesn't fit that envelope; pressure-treated pine does.",
          'You re-stain the fence every other spring anyway. The deck stain ride-along is a half-day of additional work that costs you the same gallon of stain you already opened. No new schedule, no new vendor.',
        ],
      },
      { type: 'h2', text: 'What do most Nashville deck builders actually recommend in 2026?' },
      {
        type: 'p',
        text: "Two-bucket pattern across Davidson and Williamson installs. Composite for new builds where the homeowner wants a 15-year set-and-forget deck. Wood for replacements and add-ons to existing wood fences where matching the aesthetic matters more than the maintenance break. The split is roughly 55-45 in favor of composite as of mid-2026, up from 35-65 wood-dominant five years ago. The reason isn't price — composite is still 1.5-2x — it's that the 10-year maintenance line item is climbing faster than the composite premium as labor rates rise in the Nashville market.",
      },
      {
        type: 'p',
        text: "The pattern most installers actively warn against: premium composite next to an unfinished cedar fence with no plan for the fence over the next decade. The deck outlasts the fence by years, and replacing the fence around an existing premium deck adds 15-20 percent to the fence install because the crew has to work around the finished decking.",
      },
      { type: 'h2', text: 'What\'s the build-order if both are getting installed in the same window?' },
      {
        type: 'p',
        text: "Fence first by 3-5 days. The fence crew can stage materials in the yard without crossing finished decking. Once the fence is in, the deck crew can use it as a layout reference — the deck joists usually run parallel to one fence run. Reverse order, deck first then fence, means the fence crew is walking on, leaning over, and occasionally dropping tools on a $20,000 composite surface. The [build-order article on decks plus fences](/resources/fence-before-or-after-deck-nashville) covers the coordination logistics in more detail.",
      },
      { type: 'h2', text: 'What\'s the one-line recommendation if you don\'t want to read all of this?' },
      {
        type: 'p',
        text: "Match the deck to the fence's expected lifespan. If you'll re-stain the fence forever, pick wood. If the fence will end up replaced or painted in the next 8 years, pick composite. The [shortlist of Nashville deck builders](/resources/best-deck-builders-nashville) is where to start once you've picked the material, and the [seven questions to ask any Nashville installer](/resources/hire-nashville-fence-installer-questions) apply equally to deck contractors — actually more strictly, because the deck is structural and the cost of a bad install shows up faster.",
      },
    ] as ResourceSection[],
  },
  {
    slug: 'pergola-vs-covered-patio-nashville',
    title: 'Pergola vs Covered Patio: Which Actually Keeps You Dry in Nashville?',
    category: 'Comparison',
    readTime: '7 min',
    publishedAt: '2026-06-16',
    excerpt:
      'A bare pergola is a beautiful sculpture that does not function as a roof. A covered patio is the boring right answer 80 percent of the time. The middle-ground options cost more than you think. Nashville-specific math, no hedging.',
    img: IMAGES.resources['pergola-vs-covered-patio-nashville'],
    imageAlt: 'Cedar pergola over a Nashville backyard patio, pergola vs covered patio comparison',
    body: [
      {
        type: 'p',
        text: "A bare wood pergola — the kind that shows up in every Instagram backyard photo — does almost nothing for you in a Nashville July thunderstorm. A covered patio with a real solid roof does. That's the entire comparison in one sentence, and I'm not going to pretend it's more complicated than it is. The interesting question is what you actually want — shade and aesthetics, or shade plus weather protection — and how much you're willing to pay for the middle-ground options that try to do both without committing. Below is the math, the actual Nashville-specific HOA wrinkles, and which crew you call for which.",
      },
      { type: 'h2', text: 'Does a bare pergola keep the rain off you in a July thunderstorm?' },
      {
        type: 'p',
        text: "No. It does not. Stop kidding yourself.",
      },
      {
        type: 'p',
        text: "The slats sit 4-6 inches apart so the structure breathes and looks airy in the listing photo. Rain falls through that gap onto your shoulders, your phone, your bourbon, and the cedar deck you spent $19,000 on last year. A 20-minute Nashville pop-up storm dumps roughly half an inch of water on whatever's underneath, and a pergola does almost nothing to slow it down. Wood pergolas are not roofs. They are sculptures with mood lighting potential.",
      },
      {
        type: 'p',
        text: "The retrofit options — climbing vines, retractable canopies, polycarbonate panels, stretched shade fabric — all exist because the people who built pergolas figured out within one summer that they didn't actually have a roof. Every one of those add-ons is the homeowner equivalent of duct-taping a tarp to the rafters and pretending it was the plan all along.",
      },
      { type: 'h2', text: 'When does a bare pergola actually make sense in Nashville?' },
      {
        type: 'p',
        text: "Three situations. That's it. Three.",
      },
      {
        type: 'ul',
        items: [
          'Pure architectural moment in a side yard or front yard where the patio furniture does not actually live. Looks great, photographs well, your designer is happy, you sip coffee under it twice a year.',
          'Climbing-vine trellis as part of a real landscape plan — wisteria, climbing roses, kiwifruit. The vines become the roof in year three or four. Cool, but you are now signed up for 20 years of vine maintenance, and wisteria will absolutely pull a $7,000 pergola out of plumb if you stop pruning it.',
          'HOA-mandated lattice in a neighborhood that does not allow solid roof structures over the rear patio. Parts of Brentwood, Belle Meade, and Forest Hills enforce this in their covenants. The pergola is the only legal option.',
        ],
      },
      {
        type: 'p',
        text: "If you're not in one of those three buckets, you don't want a pergola. You want what a pergola is pretending to be — a covered patio.",
      },
      { type: 'h2', text: 'What does a covered patio actually do, and why is it boring?' },
      {
        type: 'p',
        text: "A covered patio is a solid roof — shingled or metal — attached to the house, with proper rafters and beams. Same construction as the house roof itself. Total weather protection. Ceiling fans, recessed lighting, infrared heaters mount cleanly into the rafters. The patio is usable in any weather short of a tornado warning.",
      },
      {
        type: 'p',
        text: "Why I call it boring: it looks like another room added onto the house. There is no Instagram angle that makes a covered patio look unique. It just looks like a house with a porch on the back. The aesthetic loss is real if you cared about the open-sky thing. The functional gain is the entire reason to build one.",
      },
      {
        type: 'p',
        text: "Most Nashville homes built before 2000 already have a small covered back porch and a larger uncovered patio behind it. The covered porch is where you actually live in July. The uncovered patio is where you grill on the four nights a year the weather is genuinely perfect. The pre-2000 architects had this figured out.",
      },
      { type: 'h2', text: 'What does each one cost installed in Nashville?' },
      {
        type: 'table',
        headers: ['Structure', 'Footprint', 'Installed cost in Nashville'],
        rows: [
          ['Bare cedar pergola', '12×16 ft, posts + beams + slats', '$4,800-$9,500'],
          ['Bare aluminum pergola', '12×16 ft, powder-coated', '$7,500-$14,000'],
          ['Pergola + polycarbonate roof', 'Cedar/aluminum + clear or tinted panels', 'add $2,800-$5,200'],
          ['Motorized louvered pergola', 'Equinox / StruXure / Renson, smart-home wired', '$25,000-$60,000'],
          ['Standard covered patio', '12×16 ft, shingled roof matching house', '$14,000-$28,000'],
          ['Premium covered patio', 'Cathedral ceiling, fan, beadboard, recessed lighting', '$24,000-$48,000'],
        ],
      },
      {
        type: 'p',
        text: "One-line summary you can hand your spouse: a bare pergola is one-third the price of a covered patio. The motorized louvered pergola is twice the price of a covered patio. The polycarbonate-roof pergola lands in the same price band as a basic covered patio but looks worse and protects the same amount.",
      },
      { type: 'h2', text: 'Is the polycarbonate-roof pergola the smart middle ground or the worst of both worlds?' },
      {
        type: 'p',
        text: "It works. You stay dry. From underneath you still see the slats above the polycarbonate, which preserves the airy pergola look from inside the structure. From the yard looking back, it reads as a corrugated plastic roof bolted to wood beams. There is no version of polycarbonate that hides itself — it always looks like greenhouse material because it is greenhouse material.",
      },
      {
        type: 'p',
        text: "The right move is to either lean all the way in (matte bronze polycarbonate, hidden gutters integrated into the beams, color-matched trim) or skip it entirely and build a real covered patio. The half-measure where you bolt clear corrugated panels to a $4,000 cedar pergola and call it done looks exactly like what it is — duct tape on a furniture-grade structure. Your neighbor will know. Your appraiser will know. You will know.",
      },
      { type: 'h2', text: 'What about the motorized louvered pergola (Equinox, StruXure, Renson)?' },
      {
        type: 'p',
        text: "Honest opinion: this is the only pergola variant that genuinely competes with a covered patio for utility. The aluminum louvers tilt open for sun, close for rain. A roof-mounted sensor closes them automatically when a storm rolls in. Heaters, lights, speakers, and screens integrate into the rafter cavities. It is a real outdoor room with a programmable roof.",
      },
      {
        type: 'p',
        text: "The catches are real. $25-$60K installed, motors and electronics that the Nashville humidity beats on every summer, and a five-year service bill that nobody wants to discuss in the sales pitch — motor replacement runs $1,200-$3,000 per louver bank, and the smart-home integration breaks every time one of the brands EOLs their app or pivots to a new platform.",
      },
      {
        type: 'p',
        text: "The Williamson County HOA wrinkle nobody warned you about: several Brentwood, Franklin, and Cool Springs subdivisions have started rejecting motorized louvered pergolas in 2025 and 2026 ARC reviews. The argument is that motorized louvers qualify as 'permanent structure with mechanical systems' and aren't covered by the pergola exemption in the covenants. Get the ARC sign-off in writing before you spec one — verbal yes from the committee chair does not survive the next neighbor complaint. The [Williamson County HOA submission playbook](/resources/metro-nashville-permits) covers what the packet should include before you sit down with the ARC.",
      },
      { type: 'h2', text: 'Which one should you build if you actually plan to use the backyard year-round?' },
      {
        type: 'p',
        text: "Covered patio. Sorry. It's not even close.",
      },
      {
        type: 'p',
        text: "Nashville's outdoor season is bookended by 95°F afternoons in July and 25°F mornings in January. A covered patio with two ceiling fans and a small infrared heater stays comfortable from late March through November and through a decent chunk of December if you commit to the heater. A bare pergola gets you maybe May, late September, and three perfect weeks in October. The cost-per-usable-hour math is brutal on the pergola if you actually wanted an outdoor room.",
      },
      {
        type: 'p',
        text: "If you have $30K to spend on the backyard and you want one outdoor room you'll use, the right answer is covered patio plus a ceiling fan plus a $400 heater. If you have $30K and you want a bare pergola plus an outdoor kitchen plus a fire feature, get the kitchen and the fire feature, skip the pergola entirely, and use the back wall of the house as your weather protection. That's not a sad compromise — it's a better backyard for the money.",
      },
      { type: 'h2', text: 'Which one should you build if it\'s purely aesthetic and weekend entertaining?' },
      {
        type: 'p',
        text: "Bare pergola, honestly. The aesthetic case is real. A 12×16 cedar pergola with string lights and climbing wisteria is genuinely beautiful in a way no covered patio will ever be. If your 'outdoor time' is a two-hour dinner with friends in the 60-80°F window of spring and fall, that is exactly what the pergola is for. Lean into it.",
      },
      {
        type: 'p',
        text: "Just be honest with yourself that you're buying a sculpture, not a structure. Don't show up two summers from now asking the contractor to bolt polycarbonate to the rafters because you realized you wanted a roof — that's the path that looks the worst and costs the most over time. Either commit to the open-sky thing or commit to the covered patio. The hybrid path is what eats budget and breaks the aesthetic at the same time.",
      },
      { type: 'h2', text: 'What\'s the build order if you\'re doing this alongside a fence or deck project?' },
      {
        type: 'p',
        text: "Same crew if possible. Most Nashville deck builders also build pergolas and covered patios — the framing crew that's already on site can swing into rafter framing without a separate mobilization fee. The Saturday morning where you have one truck in the driveway is the cheapest version of this project.",
      },
      {
        type: 'p',
        text: "Build order matters more than people think. Get the deck framed, set the pergola or patio cover posts THROUGH the deck framing (notched, not bolted to the surface), THEN deck the surface, THEN do the roof finish work. Building the deck surface first and trying to set 6×6 posts through finished cedar boards is the expensive version that ruins the deck warranty. If you're also doing a fence, the [build-order article on decks plus fences](/resources/fence-before-or-after-deck-nashville) covers the broader sequencing logic.",
      },
      { type: 'h2', text: 'What are most Nashville deck and pergola contractors actually building in 2026?' },
      {
        type: 'p',
        text: "Rough split across the active install base: 60% covered patios, 25% bare pergolas, 12% motorized louvered pergolas, 3% polycarbonate-roof pergolas. Most contractors will quietly steer you toward the covered patio if you tell them you actually plan to use the space. The pergola crowd is mostly designer-driven projects in Belle Meade, Forest Hills, and the older parts of Green Hills where the architecture supports the look and the owner cares about the aesthetic for its own sake.",
      },
      {
        type: 'p',
        text: "The polycarbonate-roof variant has been declining since 2023. Customers see a few up-close, decide it looks too commercial, and either go bare or upgrade to the motorized louvered pergola. The middle-ground pergola-plus-plastic concept is dying out in Nashville and I'd argue that's correct.",
      },
      { type: 'h2', text: 'What\'s the one-line recommendation?' },
      {
        type: 'p',
        text: "If you want to use the backyard in the rain: covered patio. If you want a beautiful sculpture in your yard for occasional entertaining: bare pergola. If you have a serious budget and want both at once: motorized louvered pergola, eyes wide open on the service cost. There is no honest middle ground at the polycarbonate-retrofit price band, and pretending there is will cost you twice. The [shortlist of Nashville deck builders](/resources/best-deck-builders-nashville) covers most of the contractors who build all three of these — same crews, different upcharges.",
      },
    ] as ResourceSection[],
  },
  {
    slug: 'best-plants-privacy-fence-nashville',
    title: 'Best Plants to Grow Along a Privacy Fence in Nashville (and What to Never Plant)',
    category: 'Landscaping',
    readTime: '7 min',
    publishedAt: '2026-06-17',
    excerpt:
      'Leyland cypress will break your fence in eight years. Running bamboo will eat your neighbor\'s yard. Climbing hydrangea is the right answer if you can wait four years. Here\'s the actual plant list for a Nashville privacy fence, and the three plants every contractor begs you not to put there.',
    img: IMAGES.resources['best-plants-privacy-fence-nashville'],
    imageAlt: 'Privacy fence with climbing plants and shrubs in a Nashville backyard',
    body: [
      {
        type: 'p',
        text: "The right plant along a privacy fence in Nashville depends on three things: how much sun the line gets, whether the fence is wood or vinyl, and whether you're willing to wait four years for the look you actually want. The wrong plants — Leyland cypress, running bamboo, English ivy on cedar, wisteria on anything — will cost you the fence or your neighbor's relationship inside the first decade. Below is the actual list of plants that work, the cost ranges, and which Nashville landscape contractors will quietly steer you toward the smart picks versus the ones still pushing the cheap fast-growers.",
      },
      { type: 'h2', text: 'What\'s the one plant every Nashville fence contractor begs you not to put against the fence?' },
      {
        type: 'p',
        text: "Leyland cypress. I cannot say this strongly enough. Leyland cypress (Cupressus × leylandii) is the cheap green hedge plant every big-box nursery pushes because it grows three feet a year and the row looks great in year three. The catch lands in year eight. Adult roots break fence posts. The dense canopy starves the fence panel of airflow and the cedar rots from the back side faster than the front. And — this is the part nobody warns you about — Leyland cypress dies en masse in Tennessee. Seiridium canker shows up around year 12-15, and the entire row turns brown over a single summer.",
      },
      {
        type: 'p',
        text: "Drive through Brentwood, Franklin, or any 2010s-era subdivision in Williamson County and count the dead Leyland rows. They're everywhere. The replacement bill for a 100-foot dead row plus the fence repair underneath: $4,500-$9,500. The original 100-foot Leyland row cost the homeowner $1,200-$2,000. Doing it right the first time would have cost $3,500-$5,500 for slower-growing screens that don't die. The Leyland math never works out. Anyone selling you a Leyland row in 2026 either hasn't been in the trade long enough to see one die or doesn't care because you'll be calling someone else for the replacement.",
      },
      { type: 'h2', text: 'What about bamboo? Isn\'t bamboo supposed to be the privacy plant?' },
      {
        type: 'p',
        text: "Yes — and also absolutely not. There are two bamboo families and they behave like different species. Running bamboo (Phyllostachys family) spreads underground via rhizomes and will absolutely eat your neighbor's yard within six to eight years. Clumping bamboo (Fargesia, Bambusa) stays in tidy clumps and does the job beautifully.",
      },
      {
        type: 'p',
        text: "If your landscaper is quoting you 'golden bamboo' or 'black bamboo' at $40 per plant, that's almost certainly running bamboo. Walk away. Williamson County and parts of Davidson County have started enforcing setback rules and homeowner-paid removal orders when running bamboo crosses property lines. The neighbor's lawsuit math runs $8,000-$25,000 in remediation and legal fees once it gets serious, and the precedent in Tennessee small-claims is bad — the planting homeowner pays.",
      },
      {
        type: 'p',
        text: "Clumping bamboo, on the other hand, is wonderful. Fargesia 'Rufa' is the workhorse — handles our heat and humidity, dense screen, no rhizome problem. Runs $60-$120 per plant on 4-foot centers. A 100-foot screen lands at $1,800-$3,200 for plants alone. Worth every dollar if you want the bamboo aesthetic done correctly.",
      },
      { type: 'h2', text: 'What\'s the actual best plant for a Nashville privacy fence?' },
      {
        type: 'p',
        text: "Climbing hydrangea (Hydrangea anomala petiolaris) on a wood or aluminum fence with eastern or northern exposure. Best plant for the job in our climate, and the one most landscapers won't recommend because it takes four years to look like anything. Year one: nothing. Year two: a few leaves and your spouse asks why you spent $700. Year three: starting to climb. Year four: covered with white lacecap flowers in May, dense green coverage through October. Years five through twenty: gorgeous, low-maintenance, peels off cleanly the day you ever need to replace the fence behind it.",
      },
      {
        type: 'p',
        text: "Cost: $35-$60 per plant, 6-foot spacing for a covered fence. 100 linear feet is 17 plants, call it $700 installed plus another $400-$600 for soil amendment and a wire trellis. The math is incredible if you can survive the awkward years. The catch: climbing hydrangea does not love full afternoon sun in our climate. South- and west-facing fences need a different plant.",
      },
      { type: 'h2', text: 'What works on a south- or west-facing fence that bakes all afternoon?' },
      {
        type: 'p',
        text: "Carolina jessamine (Gelsemium sempervirens) is the answer for the hot exposure. Native to the Southeast, evergreen, yellow trumpet flowers in February and March when you actually need a color signal, handles full sun and Tennessee humidity without complaint. $20-$35 per plant, 5-foot spacing. A 100-foot fence is 20 plants at $500-$700 installed.",
      },
      {
        type: 'p',
        text: "The other workhorse for full sun: Confederate jasmine (Trachelospermum jasminoides). It's zone-pushing in our area but reliable in protected microclimates. Fragrant white flowers in May and June, dense evergreen coverage, fast establishment after a slow year one. Needs protection in a hard winter — the 2022 Christmas freeze that bottomed out around 1°F killed a lot of unprotected jasmine. Most years it shrugs off the cold and you forget you have it.",
      },
      {
        type: 'p',
        text: "Both are vining plants. Both need a stainless wire trellis stapled to the fence to climb. The trellis adds about $4-$6 per linear foot to the install. Skipping the trellis is the number-one reason vines fail in Nashville — the homeowner buys the plants, sticks them in the ground next to a bare fence panel, and three years later there's a sad tangle on the dirt because nothing was guiding the vine up.",
      },
      { type: 'h2', text: 'What about a real evergreen hedge instead of a vine?' },
      {
        type: 'p',
        text: "Two answers, depending on lot size. For a tight side yard (under 4 feet of plant width available): 'Sky Pencil' Japanese holly. Columnar, 6-8 feet tall at maturity, 2 feet wide. Stays out of the fence entirely, doesn't need pruning, holds its shape for decades. $80-$140 per plant on 3-foot spacing. A 100-foot screen is 34 plants at $3,000-$4,800 installed. Premium price, but it's the only narrow evergreen that actually works in our heat.",
      },
      {
        type: 'p',
        text: "For a wider side or back yard (5-plus feet of plant width available): Nellie R. Stevens holly. The Nashville landscape contractor default for a reason — fast, hardy, dense, evergreen, red berries in winter, doesn't kill the fence. $60-$100 per plant on 4-5 foot spacing. 100-foot screen is 25 plants at $1,800-$3,000 installed. Boring choice that works for 30 years.",
      },
      {
        type: 'p',
        text: "Skip Italian cypress (it's not Italy here, they die), arborvitae (deer destroy them in any Williamson County yard with deer pressure), and wax myrtle (looks great year one, sparse year five, and the bottom always goes leggy).",
      },
      { type: 'h2', text: 'What plants ruin wood fences the fastest?' },
      {
        type: 'p',
        text: "Three offenders, in order of damage caused:",
      },
      {
        type: 'ul',
        items: [
          "English ivy (Hedera helix) on cedar. The ivy's aerial roots pry into the cedar grain, lift the stain, and lock in moisture against the wood. A stained cedar fence with mature English ivy has 8-10 years of life instead of 15-18. Skip it. Also it's invasive in Tennessee and Metro Parks has started removal programs.",
          "Wisteria (Wisteria sinensis) on any wood fence. Wisteria gets thicker every year. By year 7 the trunk is the size of your wrist and it has pulled the fence into a slow lean. By year 12 it's pulling rails off entirely. Beautiful in bloom, structurally lethal. Only plant wisteria on a heavy pergola or a steel-cabled arbor designed to hold the weight.",
          'Japanese honeysuckle (Lonicera japonica). Spreads aggressively, wraps anything climbable, shelters voles that then chew on the fence base. Native bee gardens love it; fences hate it. Plant it in the back of the yard if you must have it, not on the fence.',
        ],
      },
      { type: 'h2', text: 'What plants don\'t ruin the fence?' },
      {
        type: 'p',
        text: "Carolina jessamine, climbing hydrangea, Confederate jasmine, and — with a caveat — clematis. All four climb with tendrils or twining stems that don't dig into the wood. All four come off cleanly the day you ever need to replace a fence panel. Clematis varieties like 'Sweet Autumn' and 'Henryi' are reliable in our heat zone; the fancier large-flowered hybrids you see at the boutique nurseries struggle in July.",
      },
      {
        type: 'p',
        text: "The hard rule: anything with aerial roots (English ivy, Boston ivy, climbing fig, trumpet vine) damages cedar over a decade. Anything with twining stems or tendrils is fine. If you don't know which family your vine is in, look up before you plant.",
      },
      { type: 'h2', text: 'Does Nashville\'s deer pressure change the plant choices?' },
      {
        type: 'p',
        text: "Yes, and it gets worse every year. In any yard within a half-mile of the Cumberland River, Percy Warner Park, Radnor Lake, or the Williamson County subdivisions backing onto wooded land, deer pressure is genuine and most of the textbook 'good' fence plants get browsed flat in their first winter.",
      },
      {
        type: 'p',
        text: "Deer-resistant fence plants that actually work in Nashville: Carolina jessamine (mildly toxic, deer leave it alone), Nellie Stevens holly (the spines stop them), Confederate jasmine (deer don't love it), 'Sky Pencil' holly (same spine logic as Nellie). Plants the deer destroy: clematis (browsed flat), English ivy (the few months of fresh growth gets eaten down to the woody stems), most hostas planted under the fence line as understory.",
      },
      {
        type: 'p',
        text: "A 7-foot wood privacy fence solves the deer-browse problem entirely if your back lot abuts the woods. The [build-order article on decks plus fences](/resources/fence-before-or-after-deck-nashville) covers why building the fence first matters when you're also doing landscape work — getting the deer-proof boundary up before you put $2,500 of plants in the ground saves you from feeding the local herd in year one.",
      },
      { type: 'h2', text: 'How do you actually install plants along a new fence without killing either?' },
      {
        type: 'p',
        text: "Three rules:",
      },
      {
        type: 'ol',
        items: [
          'Wait 30 days after the fence install before you plant. Fresh cedar leaches tannins for the first month and plants set against the freshly stained wood get root burn. The fence contractor wants to invoice for the landscape on the same day; resist that, even if it costs you a separate trip charge.',
          'Set plants 12-18 inches off the fence for vines, 24-36 inches for hedges. The "right at the fence line" install is what fails because the plant has no root-expansion room and the fence has no airflow behind it. Both die slowly.',
          'Use a 4-inch mulch ring around each plant, NOT a continuous mulch bed running the length of the fence. The continuous bed traps moisture against the bottom rail, rots the cedar, and invites termites. The discrete rings let water move and keep the fence dry.',
        ],
      },
      {
        type: 'p',
        text: "Contractor pricing patterns to know: most Nashville landscape companies will quote a 'fence-line install' for $35-$60 per linear foot installed (plants + soil amendment + trellis if needed + mulch + warranty). That's about right. The companies quoting $15-$20 per linear foot are using Leyland cypress, running bamboo, or both. You now know what to do with those quotes.",
      },
      { type: 'h2', text: 'What\'s the one-line recommendation if you\'re not going to read the whole thing?' },
      {
        type: 'p',
        text: "Climbing hydrangea on shaded fences. Carolina jessamine on sunny fences. Nellie Stevens holly if you want a hedge instead of a vine. Run from Leyland cypress, running bamboo, English ivy, and wisteria like the bad ideas they are. If you're shopping for a contractor, filter the [directory](/contractors) to Landscaping and you'll see the shops actually capable of having this conversation — and the [seven questions to ask any Nashville installer](/resources/hire-nashville-fence-installer-questions) apply just as cleanly to landscape contractors as they do to fence pros, because the cost of getting this wrong shows up on both the fence and the plants.",
      },
    ] as ResourceSection[],
  },
  {
    slug: 'pergola-permits-nashville',
    title: 'Pergola Permits in Metro Nashville: The 200 Sqft Trap and What Else Will Catch You',
    category: 'Permits',
    readTime: '7 min',
    publishedAt: '2026-06-18',
    excerpt:
      "A freestanding pergola under 200 sqft skips the Metro permit. An attached one always needs one. Motorized louvered pergolas need both a building and an electrical permit. Williamson County HOAs make Metro's process look fast. Here's the real rule set, the gaming pattern most contractors quietly use, and what happens when you skip the paperwork.",
    img: IMAGES.resources['pergola-permits-nashville'],
    imageAlt: 'Cedar pergola on a Nashville back patio, pergola permit guide',
    body: [
      {
        type: 'p',
        text: "A freestanding pergola under 200 square feet does not need a Metro Nashville building permit. An attached pergola — bolted to the house, sharing a roof tie-in, or anchored to the deck framing — always needs one. A motorized louvered pergola needs both a building permit and an electrical permit. And if you're inside any Williamson County subdivision with an HOA — Brentwood, Franklin, Cool Springs, Spring Hill — the ARC approval will take 4-8 weeks and will outweigh the Metro side by a wide margin. Below is the actual rule set, the threshold-gaming pattern most contractors will quietly walk you through, and what happens when you skip the permits entirely.",
      },
      { type: 'h2', text: 'Does a pergola actually need a permit in Metro Nashville?' },
      {
        type: 'p',
        text: "It depends on three things: footprint, attachment, and whether there's an operator. Freestanding pergola under 200 sqft, no electrical, no attachment to the house — no Metro permit, just build it. Anything over 200 sqft, attached to the house or deck, or carrying an electric operator — yes, building permit at minimum, often electrical on top.",
      },
      {
        type: 'p',
        text: "The honest answer most contractors won't lead with: most residential cedar pergolas land between 12×16 (192 sqft) and 14×18 (252 sqft). Those two footprints straddle the threshold. The difference between 'no permit needed' and '$200-$400 permit plus 2-3 weeks of review' comes down to whether you built 8 extra square feet of footprint. Contractors absolutely point this out as a feature.",
      },
      { type: 'h2', text: 'What\'s the 200 sqft threshold and why do contractors keep flirting with it?' },
      {
        type: 'p',
        text: "Metro Codes exempts accessory structures under 200 sqft from the building permit requirement, provided they're freestanding, single-story, and don't carry habitable floor area. Pergolas qualify when the math works. A 12×16 footprint lands at 192 sqft — 8 square feet under the threshold. The design is identical in structural terms to a 12×18 at 216 sqft, but the smaller footprint dodges the permit fee and the review window.",
      },
      {
        type: 'p',
        text: "The gaming pattern: build the 12×16, sometimes drift the patio apron or deck up to the pergola edge so the visual footprint looks larger, occasionally add a 4×4 attached cedar trellis the next year that quietly brings the effective footprint over 200 sqft. Metro inspectors don't drive around hunting for this — but a neighbor complaint triggers a full review, and the original exempt structure gets re-evaluated against the as-built. The 200 sqft trap works until it doesn't. The neighbor-complaint scenario in Williamson County, Belle Meade, and Forest Hills is the most common trigger.",
      },
      { type: 'h2', text: 'Why does an attached pergola always need a permit?' },
      {
        type: 'p',
        text: "Attached pergolas — anchored to the house structure, the deck framing, or a load-bearing column — count as structural additions under Metro Code. The 200 sqft exemption only applies to freestanding accessory structures. The attached version transfers load to the house, and that's what Metro Codes inspects.",
      },
      {
        type: 'p',
        text: "Why Metro cares: the bolts that hold the pergola ledger board to the house wall are pulling on the rim joist or band board. Done correctly, fine. Done wrong — incorrect fastener spacing, missing flashing, no through-bolts where the structure demands them — the pergola pulls the wall in a storm or sags into the gutter inside 5 years. The inspection process verifies the attachment hardware, the flashing detail, and the load path. Contractors who frame attached pergolas as 'just a few bolts in the ledger' are skipping the permit and the inspection. Looks great year one. The structural failure shows up in year 6-12 when a heavy storm puts the gust load on the structure or when the wall's wood swells and contracts around the fasteners.",
      },
      { type: 'h2', text: 'What about motorized louvered pergolas (Equinox, StruXure, Renson)?' },
      {
        type: 'p',
        text: "Always permitted. No exceptions. The motorized louver mechanism is treated as both a structural element (the louvers carry weight when open or closed) and an electrical installation. Metro requires a building permit for the structure and a separate electrical permit for the operator wiring. Combined permit cost: typically $400-$700 in Metro Nashville. Combined inspection schedule: one structural inspection, one electrical inspection, both scheduled separately.",
      },
      {
        type: 'p',
        text: "Williamson County wrinkle, repeated from the [Pergola vs Covered Patio breakdown](/resources/pergola-vs-covered-patio-nashville): several Brentwood, Franklin, and Cool Springs subdivisions have started rejecting motorized louvered pergolas outright in 2025-2026 ARC reviews. The committee's read is that motors plus louvers plus electrical wiring qualify as 'structure with mechanical systems' and aren't covered by the pergola exemption in the covenants. Verify the ARC approval BEFORE pulling the Metro permit, because Metro will happily issue the permit and the HOA will still tell you to take it down.",
      },
      { type: 'h2', text: 'How does the HOA approval process actually work in Williamson County?' },
      {
        type: 'p',
        text: "Slower, stricter, and more arbitrary than Metro. Most Williamson County HOAs require ARC (Architectural Review Committee) approval before any exterior structure goes in. The packet typically wants the site plan with the pergola location marked, elevation drawings showing the height profile from each side, materials list (cedar species, stain color, hardware finish), connection details if attached, and a photo of the proposed location with the structure outlined.",
      },
      {
        type: 'p',
        text: "Review time: 4-8 weeks for a clean submission. 8-16 weeks if the committee requests revisions. Most ARCs meet monthly, so a packet that misses the cutoff waits a full extra month for the next meeting. The committee can deny for aesthetic reasons that Metro Codes legally cannot — Brentwood Country Club neighborhoods reject pergolas that don't match the existing house material, Cool Springs subdivisions reject anything over 9 feet of overall height, Westhaven and McKay's Mill have a 'no metal structure' rule that excludes most aluminum pergolas outright.",
      },
      {
        type: 'p',
        text: "Translation: in Williamson County, the HOA review is the hard part. Metro is the easy part. Most homeowners get this backwards because Metro is the entity that sends inspectors, and the ARC is just a volunteer committee. The volunteer committee can cost you 12 weeks and a redesign.",
      },
      { type: 'h2', text: 'What happens if I skip the permit and just build it?' },
      {
        type: 'p',
        text: "Three outcomes, depending on where you build:",
      },
      {
        type: 'ul',
        items: [
          'Metro Nashville proper (Davidson County, no HOA): you probably get away with it until you sell the house. Most title companies pull a permit history on inspection contingency. An unpermitted pergola becomes a 5-day delay on closing while you pay the retroactive permit fee ($500-$1,200 with the after-the-fact surcharge) and schedule the inspection. Annoying, not catastrophic.',
          'Belle Meade, Forest Hills, or Oak Hill: each city has its own codes department and yes, they do drive around. Belle Meade in particular issues citations within 30 days of an unpermitted structure showing up. Fine: $250-$800 plus the retroactive permit plus inspection. Average remediation: $1,200-$2,500.',
          'Any Williamson County HOA: the neighbor complaint triggers a covenant violation letter from the ARC. Best case, you pay the late ARC fee plus the Metro permit and get retroactive approval. Worst case, the ARC denies and orders removal at your cost. Average remediation: $2,500-$8,000 to take down and re-install correctly.',
        ],
      },
      {
        type: 'p',
        text: "The 'build under cover of darkness and apologize later' pattern works at Metro Nashville maybe 60 percent of the time. In Belle Meade it works 5 percent of the time. In Williamson HOA neighborhoods it works zero percent of the time. The math is not in your favor outside Davidson County.",
      },
      { type: 'h2', text: 'What does the permit actually cost in Metro Nashville?' },
      {
        type: 'p',
        text: "Building permit for a residential pergola: $200-$400 depending on the declared structure value and footprint. Electrical permit if you have a motorized operator or hardwired lighting that runs off house current: $90-$180. Plan review fee on top if Metro requires structural drawings (typically over 250 sqft or with attached construction): $150-$300.",
      },
      {
        type: 'p',
        text: "Total range for a standard residential pergola pulled correctly: $200-$880. Total for a motorized louvered install: $400-$1,200 once you stack the building permit, electrical permit, plan review, and the dual inspection schedule. Compare those numbers to a $4,800 bare cedar pergola or a $32,000 motorized louvered install — the permit fee is 1 to 4 percent of the project. Skipping it to save that fraction is the math nobody can defend out loud.",
      },
      { type: 'h2', text: 'How long does the permit process actually take?' },
      {
        type: 'p',
        text: "Standard residential pergola permit through Metro Codes: 5-15 business days from submission to issued permit. Add another 1-2 days for the post-construction inspection scheduling. Plan review (required on attached structures or pergolas over 250 sqft) adds 2-3 weeks. The plan reviewer queues vary by season — late winter is fast (2-3 days), April through July is slow (3-4 weeks) because of the spring deck-building rush.",
      },
      {
        type: 'p',
        text: "Electrical permit for the operator runs a separate 3-7 business day track. If you're combining Metro permit plus Williamson HOA approval, the HOA is always the longer wait. The right order is HOA first, Metro second — pull the HOA submission first, get the approval in writing, THEN file the Metro permit so the schedules don't desync. The Metro permit doesn't expire fast enough to be a problem on this stack.",
      },
      { type: 'h2', text: 'What about historic overlays in East Nashville and Germantown?' },
      {
        type: 'p',
        text: "Different process entirely. Pergolas in Edgefield, Lockeland Springs, Germantown, Belle Meade Conservation, and the other Metro historic overlays go through the Metro Historic Zoning Commission (MHZC) first. MHZC reviews focus on visibility from the street. A pergola tucked in the back corner of a lot, fully hidden by the house from the street view, often gets administrative-level approval in 5-10 days. A pergola visible from the public right-of-way goes to the full commission for a hearing — that adds 4-8 weeks and the design has to match the approved materials list (no aluminum, cedar only, specific hardware finishes, no motorized mechanisms in most cases).",
      },
      {
        type: 'p',
        text: "MHZC fee: $25-$150 depending on the review level. Free for administrative approvals. The commission's website lists the criteria — and the [walk-through of Metro Nashville's other fence and structure permits](/resources/metro-nashville-permits) covers how the historic-overlay process interlocks with the regular Metro Codes track.",
      },
      { type: 'h2', text: 'What\'s the build-order if you\'re getting both the permit and the HOA approval?' },
      {
        type: 'p',
        text: "Three-stage stack:",
      },
      {
        type: 'ol',
        items: [
          'Survey or plat review first. Confirms the property setbacks and the right-of-way line so you know where the pergola can legally land. Avoid the embarrassing rebuild that comes from missing the rear-yard setback by 2 feet.',
          'HOA / ARC submission second. Goes in 4-8 weeks before you want the contractor to break ground. Get the approval letter in writing before you spend money on permits. No verbal approvals — they do not survive a neighbor complaint.',
          'Metro permit plus electrical permit third. With ARC approval in hand, file the permits. They typically clear in 1-2 weeks for the standard residential pergola, 2-3 weeks for an attached or motorized structure.',
        ],
      },
      {
        type: 'p',
        text: "Schedule the contractor to break ground the week AFTER the Metro permit is issued. Most Nashville pergola installers will hold a slot up to 30 days out without a deposit on the basis of a pending permit — beyond that, expect a 25 percent reserve. The same parallel logic applies to driveway gates with electric operators, walked through in the [Driveway Gate Permits article](/resources/driveway-gate-permits-nashville).",
      },
      { type: 'h2', text: 'What\'s the one-line recommendation?' },
      {
        type: 'p',
        text: "Freestanding under 200 sqft, no electrical, no HOA: build it. Anything attached, over 200 sqft, motorized, or inside a Williamson County HOA: pull the permit and get the approval before you sign the install contract, even if your contractor tells you it's fine. The [Pergola vs Covered Patio article](/resources/pergola-vs-covered-patio-nashville) covers which structure type to actually pick before the permit question even comes up, and the [shortlist of Nashville deck builders](/resources/best-deck-builders-nashville) is where to find the contractors who'll pull the paperwork without you having to ask twice.",
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
  { label: `${CITY.name} Homeowners Served`, value: 2400, suffix: '+' },
  { label: 'Contractors Listed', value: 40, suffix: '+' },
  { label: 'Average Costs Saved', value: 22, suffix: '%' },
  { label: 'Combined Contractor Experience', value: 575, suffix: ' yrs' },
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
