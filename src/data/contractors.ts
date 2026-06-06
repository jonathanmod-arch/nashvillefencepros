import { IMAGES } from './imageUrls'

export type ProjectType = 'residential' | 'commercial'

export type Contractor = {
  slug: string
  name: string
  category: string
  projectType: ProjectType
  description: string
  areas: string[]
  specialties: string[]
  rating: number
  reviews: number
  badge: string
  license: string
  featured?: boolean
  yearsInBusiness: number
  projectsCompleted: string
  phone: string
  phoneRaw: string
  website?: string
  address: string
  responseTime: string
  countiesServed: string
  googleMapsUrl?: string
  placeId?: string
  coordinates?: [number, number]
  source?: 'directory' | 'google-maps'
}

export const AREAS = [
  'All Areas',
  'Nashville',
  'Brentwood',
  'Franklin',
  'Hendersonville',
  'Murfreesboro',
  'Mt. Juliet',
  'Belle Meade',
]

export const SERVICE_CATEGORIES = [
  { id: 'all', label: 'All Services' },
  { id: 'fencing', label: 'Fence Installers' },
  { id: 'gates', label: 'Gates & Automation' },
  { id: 'surveying', label: 'Land Surveyors' },
  { id: 'prep', label: 'Site Prep & Clearing' },
  { id: 'staining', label: 'Staining & Restoration' },
  { id: 'design', label: 'Fence & Landscape Design' },
] as const

export const PROJECT_TYPES = [
  { id: 'all', label: 'All Projects' },
  { id: 'residential', label: 'Residential' },
  { id: 'commercial', label: 'Commercial' },
] as const

export const BADGE_COLORS: Record<string, string> = {
  'Top Rated 2026':
    'bg-[#1B4332] text-white border border-[#1B4332]',
  'Verified Pro':
    'bg-[#D4A373]/15 text-[#92400e] border border-[#D4A373]/40',
  'Premium Partner':
    'bg-[#1A1D1E]/10 text-[#1A1D1E] border border-[#1A1D1E]/20',
  'Commercial Specialist':
    'bg-blue-50 text-blue-800 border border-blue-200',
  'Listed on Google':
    'bg-blue-50 text-blue-700 border border-blue-200',
}

export const categoryLabel = (id: string) =>
  SERVICE_CATEGORIES.find((c) => c.id === id)?.label ?? id

export const CONTRACTORS: Contractor[] = [
  {
    slug: 'k-and-c-fence-company',
    name: 'K & C Fence Company',
    category: 'fencing',
    projectType: 'residential',
    description:
      'Family-owned Nashville fence contractor serving Middle Tennessee since 2008. Installs wood, vinyl, aluminum, and chain link fences for residential and commercial clients.',
    areas: ['Nashville', 'Brentwood'],
    specialties: ['Wood Privacy', 'Vinyl', 'Chain Link', 'Aluminum'],
    rating: 0,
    reviews: 0,
    badge: 'Listed on Google',
    license: 'Public Listing',
    featured: true,
    yearsInBusiness: 0,
    projectsCompleted: '',
    phone: '(615) 562-7651',
    phoneRaw: '+16155627651',
    website: 'https://www.fencenashville.net',
    address: '2503 Hart Street, Nashville, TN 37207',
    responseTime: '',
    countiesServed: 'Davidson and surrounding Middle Tennessee',
    googleMapsUrl:
      'https://www.google.com/maps/search/?api=1&query=K+%26+C+Fence+Company+Nashville+TN',
    source: 'google-maps',
  },
  {
    slug: 'yard-dog-fence',
    name: 'Yard Dog Fence',
    category: 'fencing',
    projectType: 'residential',
    description:
      'Local fence contractor installing wood, aluminum, chain link, PVC, and pool fencing throughout Nashville, Clarksville, and the Middle Tennessee area.',
    areas: ['Nashville'],
    specialties: ['Wood', 'Aluminum', 'Chain Link', 'Pool Fencing'],
    rating: 0,
    reviews: 0,
    badge: 'Listed on Google',
    license: 'Public Listing',
    yearsInBusiness: 0,
    projectsCompleted: '',
    phone: '(615) 995-8548',
    phoneRaw: '+16159958548',
    website: 'https://yarddogfence.com',
    address: '86 Thompson Ln, Nashville, TN 37211',
    responseTime: '',
    countiesServed: 'Davidson and surrounding Middle Tennessee',
    googleMapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Yard+Dog+Fence+Nashville+TN',
    source: 'google-maps',
  },
  {
    slug: 'pro-line-fence-co',
    name: 'Pro-Line Fence Co.',
    category: 'fencing',
    projectType: 'commercial',
    description:
      'Serving Nashville and Middle Tennessee for over 18 years with privacy fences, security fencing for businesses, and automatic gates with access control.',
    areas: ['Nashville', 'Brentwood', 'Franklin'],
    specialties: ['Privacy Fencing', 'Commercial Security', 'Automatic Gates', 'Wrought Iron'],
    rating: 0,
    reviews: 0,
    badge: 'Listed on Google',
    license: 'Public Listing',
    yearsInBusiness: 0,
    projectsCompleted: '',
    phone: '(615) 642-0678',
    phoneRaw: '+16156420678',
    website: 'https://prolinefencecompany.com',
    address: '923 Oldham Dr, Nolensville, TN 37135',
    responseTime: '',
    countiesServed: 'Williamson, Davidson, and surrounding counties',
    googleMapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Pro-Line+Fence+Co+Nolensville+TN',
    source: 'google-maps',
  },
  {
    slug: 'echo-fence',
    name: 'Echo Fence, LLC',
    category: 'fencing',
    projectType: 'residential',
    description:
      'Franklin-based fence company specializing in aluminum and wood fence installation, automated gates, farm fencing, and chain link across Williamson County.',
    areas: ['Franklin', 'Brentwood'],
    specialties: ['Aluminum', 'Wood', 'Farm Fencing', 'Automated Gates'],
    rating: 0,
    reviews: 0,
    badge: 'Listed on Google',
    license: 'Public Listing',
    yearsInBusiness: 0,
    projectsCompleted: '',
    phone: '(615) 806-5367',
    phoneRaw: '+16158065367',
    website: 'https://www.echofencetn.com',
    address: '1113 Sneed Glen Dr, Franklin, TN 37069',
    responseTime: '',
    countiesServed: 'Williamson and surrounding counties',
    googleMapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Echo+Fence+LLC+Franklin+TN',
    source: 'google-maps',
  },
  {
    slug: 'heron-building-co',
    name: 'Heron Building Co',
    category: 'fencing',
    projectType: 'residential',
    description:
      'Licensed Tennessee fence and gate contractor designing and building wood, aluminum, and vinyl fences, pool enclosures, and estate gates across Franklin, Brentwood, and Nashville.',
    areas: ['Franklin', 'Brentwood', 'Nashville'],
    specialties: ['Wood Privacy', 'Aluminum', 'Vinyl', 'Custom Gates'],
    rating: 0,
    reviews: 0,
    badge: 'Listed on Google',
    license: 'Public Listing',
    yearsInBusiness: 0,
    projectsCompleted: '',
    phone: '(615) 241-0574',
    phoneRaw: '+16152410574',
    website: 'https://heronbuildingco.com',
    address: '6200 Hospitality Drive, Suite 108, Franklin, TN 37067',
    responseTime: '',
    countiesServed: 'Williamson and Davidson',
    googleMapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Heron+Building+Co+Franklin+TN',
    source: 'google-maps',
  },
  {
    slug: 'master-fence',
    name: 'Master Fence, LLC',
    category: 'fencing',
    projectType: 'residential',
    description:
      'Locally owned Murfreesboro fence company offering wood, vinyl, aluminum, chain link, farm fencing, and custom gate systems throughout Middle Tennessee.',
    areas: ['Murfreesboro', 'Nashville'],
    specialties: ['Wood', 'Vinyl', 'Aluminum', 'Farm Fencing'],
    rating: 0,
    reviews: 0,
    badge: 'Listed on Google',
    license: 'Public Listing',
    yearsInBusiness: 0,
    projectsCompleted: '',
    phone: '(615) 692-8299',
    phoneRaw: '+16156928299',
    website: 'https://masterfencetn.com',
    address: '239 Veterans Parkway, Suite E, Murfreesboro, TN 37128',
    responseTime: '',
    countiesServed: 'Rutherford, Davidson, and surrounding counties',
    googleMapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Master+Fence+LLC+Murfreesboro+TN',
    source: 'google-maps',
  },
  {
    slug: 'precision-fencing',
    name: 'Precision Fencing, LLC',
    category: 'fencing',
    projectType: 'residential',
    description:
      'Family-owned Murfreesboro fence company in business since 2001, offering aluminum, vinyl, PVC, farm/woven wire, chain link fencing, and automated gates for residential and commercial properties.',
    areas: ['Murfreesboro'],
    specialties: ['Aluminum', 'Vinyl', 'Farm Fencing', 'Chain Link'],
    rating: 0,
    reviews: 0,
    badge: 'Listed on Google',
    license: 'Public Listing',
    yearsInBusiness: 0,
    projectsCompleted: '',
    phone: '(615) 562-1197',
    phoneRaw: '+16155621197',
    website: 'https://www.precisionfencingllc.com',
    address: '4028 Leanna Rd, Murfreesboro, TN 37129',
    responseTime: '',
    countiesServed: 'Rutherford and surrounding counties',
    googleMapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Precision+Fencing+LLC+Murfreesboro+TN',
    source: 'google-maps',
  },
  {
    slug: 'hooper-fence',
    name: 'Hooper Fence',
    category: 'fencing',
    projectType: 'residential',
    description:
      'Family-owned Murfreesboro fencing company installing ornamental aluminum, vinyl, wood, and farm fencing using U.S.-made products.',
    areas: ['Murfreesboro'],
    specialties: ['Ornamental Aluminum', 'Vinyl', 'Wood', 'Farm Fencing'],
    rating: 0,
    reviews: 0,
    badge: 'Listed on Google',
    license: 'Public Listing',
    yearsInBusiness: 0,
    projectsCompleted: '',
    phone: '(615) 551-8448',
    phoneRaw: '+16155518448',
    website: 'http://www.hooperfence.com',
    address: '1503 W College St, Murfreesboro, TN 37129',
    responseTime: '',
    countiesServed: 'Rutherford and surrounding counties',
    googleMapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Hooper+Fence+Murfreesboro+TN',
    source: 'google-maps',
  },
  {
    slug: 'mid-center-fence',
    name: 'Mid Center Fence, LLC',
    category: 'fencing',
    projectType: 'residential',
    description:
      'Mt. Juliet fence contractor offering wood privacy, picket, three- and four-rail farm fencing, vinyl picket and privacy, commercial fencing, and rental fencing with a one-year workmanship warranty.',
    areas: ['Mt. Juliet', 'Nashville'],
    specialties: ['Wood Privacy', 'Vinyl', 'Farm Fencing', 'Rentals'],
    rating: 0,
    reviews: 0,
    badge: 'Listed on Google',
    license: 'Public Listing',
    yearsInBusiness: 0,
    projectsCompleted: '',
    phone: '(615) 283-7411',
    phoneRaw: '+16152837411',
    website: 'https://www.midcenterfence.com',
    address: '1009 Lance Ct, Mount Juliet, TN 37122',
    responseTime: '',
    countiesServed: 'Wilson, Davidson, and surrounding counties',
    googleMapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Mid+Center+Fence+LLC+Mount+Juliet+TN',
    source: 'google-maps',
  },
  {
    slug: 'volunteer-fence-company',
    name: 'Volunteer Fence Company LLC',
    category: 'fencing',
    projectType: 'residential',
    description:
      'Hendersonville-based family-owned company with over 45 years installing wood, chain link, PVC, brick, and iron fences plus gates and handrails for residential, commercial, and farm properties.',
    areas: ['Hendersonville', 'Nashville'],
    specialties: ['Wood', 'Chain Link', 'Iron Fence', 'Farm Fencing'],
    rating: 0,
    reviews: 0,
    badge: 'Listed on Google',
    license: 'Public Listing',
    featured: true,
    yearsInBusiness: 0,
    projectsCompleted: '',
    phone: '(615) 822-6530',
    phoneRaw: '+16158226530',
    website: 'https://www.volunteerfencellc.com',
    address: '198 Molly Walton Drive, Hendersonville, TN 37075',
    responseTime: '',
    countiesServed: 'Sumner, Davidson, and surrounding counties',
    googleMapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Volunteer+Fence+Company+Hendersonville+TN',
    source: 'google-maps',
  },
  {
    slug: 'kowboy-fence-co',
    name: 'Kowboy Fence Co.',
    category: 'fencing',
    projectType: 'residential',
    description:
      'Nashville fence installation and wholesale company providing aluminum, vinyl, wood, farm, and chain link fencing for residential and commercial projects across Middle Tennessee.',
    areas: ['Nashville', 'Brentwood'],
    specialties: ['Aluminum', 'Vinyl', 'Wood', 'Farm Fencing'],
    rating: 0,
    reviews: 0,
    badge: 'Listed on Google',
    license: 'Public Listing',
    yearsInBusiness: 0,
    projectsCompleted: '',
    phone: '(615) 410-6120',
    phoneRaw: '+16154106120',
    website: 'https://www.kowboyfence.com',
    address: '6201 Centennial Blvd, Nashville, TN 37209',
    responseTime: '',
    countiesServed: 'Davidson and surrounding Middle Tennessee',
    googleMapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Kowboy+Fence+Co+Nashville+TN',
    source: 'google-maps',
  },
  {
    slug: 'franklin-fence-and-deck',
    name: 'Franklin Fence & Deck',
    category: 'fencing',
    projectType: 'residential',
    description:
      'Locally owned Franklin fencing and decking contractor in business since 1984, serving Williamson County including Brentwood, Franklin, and the surrounding area.',
    areas: ['Franklin', 'Brentwood'],
    specialties: ['Wood Privacy', 'Vinyl', 'Aluminum', 'Decks'],
    rating: 0,
    reviews: 0,
    badge: 'Listed on Google',
    license: 'Public Listing',
    featured: true,
    yearsInBusiness: 0,
    projectsCompleted: '',
    phone: '(615) 790-8428',
    phoneRaw: '+16157908428',
    website: 'https://www.franklinfenceanddeck.com',
    address: '1741 W Main St, Franklin, TN 37064',
    responseTime: '',
    countiesServed: 'Williamson and surrounding counties',
    googleMapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Franklin+Fence+%26+Deck+Franklin+TN',
    source: 'google-maps',
  },
  {
    slug: 'quality-fence-and-deck',
    name: 'Quality Fence and Deck LLC',
    category: 'fencing',
    projectType: 'residential',
    description:
      'Family-owned Murfreesboro fence and deck company offering custom wood, vinyl, aluminum, ornamental steel, security, privacy, and chain link fencing for residential and commercial properties.',
    areas: ['Murfreesboro'],
    specialties: ['Wood', 'Vinyl', 'Aluminum', 'Ornamental Steel'],
    rating: 0,
    reviews: 0,
    badge: 'Listed on Google',
    license: 'Public Listing',
    yearsInBusiness: 0,
    projectsCompleted: '',
    phone: '(615) 547-9524',
    phoneRaw: '+16155479524',
    website: 'https://qualityfenceanddeck.com',
    address: '7560 Leanna Central Valley Rd, Murfreesboro, TN 37129',
    responseTime: '',
    countiesServed: 'Rutherford and surrounding counties',
    googleMapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Quality+Fence+and+Deck+Murfreesboro+TN',
    source: 'google-maps',
  },
  {
    slug: 'rio-grande-fence-co-nashville',
    name: 'Rio Grande Fence Co. of Nashville',
    category: 'fencing',
    projectType: 'commercial',
    description:
      'Nashville-based commercial and industrial fence contractor founded in 1958, installing chain link, ornamental steel and aluminum, wood, vinyl, access control gates, and temporary fencing.',
    areas: ['Nashville', 'Brentwood', 'Franklin'],
    specialties: ['Chain Link', 'Commercial Security', 'Access Control Gates', 'Temporary Fencing'],
    rating: 0,
    reviews: 0,
    badge: 'Listed on Google',
    license: 'Public Listing',
    yearsInBusiness: 0,
    projectsCompleted: '',
    phone: '(615) 244-4766',
    phoneRaw: '+16152444766',
    website: 'https://www.rgfence.com',
    address: '1410 Lebanon Pike, Nashville, TN 37210',
    responseTime: '',
    countiesServed: 'Davidson, Williamson, and surrounding Middle Tennessee',
    googleMapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Rio+Grande+Fence+Co+Nashville+TN',
    source: 'google-maps',
  },
  {
    slug: 'east-tennessee-fence-co',
    name: 'East Tennessee Fence Co',
    category: 'fencing',
    projectType: 'residential',
    description:
      'Local fence contractor serving the Knoxville and East Tennessee region. Listed on Google Maps under the fence contractor category, current ratings, reviews, hours, and contact details are maintained on the live Google listing.',
    areas: ['Knoxville', 'East Tennessee'],
    specialties: ['Wood Fence', 'Chain Link', 'Residential Installation'],
    rating: 0,
    reviews: 0,
    badge: 'Listed on Google',
    license: 'Public Listing',
    yearsInBusiness: 0,
    projectsCompleted: '',
    phone: '',
    phoneRaw: '',
    address: 'Knoxville, TN',
    responseTime: '',
    countiesServed: 'Knox and surrounding East Tennessee',
    googleMapsUrl:
      'https://www.google.com/maps/place/East+Tennessee+Fence+Co/@35.845548,-83.894237,15z/data=!4m6!3m5!1s0x885c1f2b6fa4ac71:0x532f5f526c40be32!8m2!3d35.845548!4d-83.894237!16s%2Fg%2F1vpfk7s9',
    placeId: '0x885c1f2b6fa4ac71:0x532f5f526c40be32',
    coordinates: [35.845548, -83.894237],
    source: 'google-maps',
  },
  {
    slug: 'elantra-gate-systems',
    name: 'Elantra Gate Systems',
    category: 'gates',
    projectType: 'residential',
    description:
      'Authorized dealer in Fairview, TN that designs, installs, and services automated driveway gates, gate operators, and access control systems (FAAC, Viking, LiftMaster, USAutomatic, ButterflyMX, CellGate) for residential estates and commercial sites across Middle and East Tennessee.',
    areas: ['Franklin', 'Brentwood', 'Nashville'],
    specialties: ['Automatic Gates', 'FAAC Operators', 'LiftMaster Systems', 'Access Control'],
    rating: 0,
    reviews: 0,
    badge: 'Listed on Google',
    license: 'Public Listing',
    yearsInBusiness: 0,
    projectsCompleted: '',
    phone: '(615) 298-4283',
    phoneRaw: '+16152984283',
    website: 'https://elantragate.com',
    address: '1414 Fairview Blvd, Fairview, TN 37062',
    responseTime: '',
    countiesServed: 'Williamson, Davidson, and surrounding Middle Tennessee',
    googleMapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Elantra+Gate+Systems+Fairview+TN',
    source: 'google-maps',
  },
  {
    slug: 'chesnut-land-surveying',
    name: 'Chesnut Land Surveying LLC',
    category: 'surveying',
    projectType: 'residential',
    description:
      'Tennessee-licensed Registered Land Surveyor firm based in Nashville performing boundary retracement surveys, property line staking for fence installs, and topographic surveys across Davidson, Williamson, Wilson, Sumner, Cheatham, and Robertson counties.',
    areas: ['Nashville', 'Brentwood', 'Franklin', 'Hendersonville'],
    specialties: ['Boundary Surveys', 'Property Line Staking', 'Topographic Surveys', 'RLS Certified'],
    rating: 0,
    reviews: 0,
    badge: 'Listed on Google',
    license: 'Public Listing',
    yearsInBusiness: 0,
    projectsCompleted: '',
    phone: '(256) 557-3285',
    phoneRaw: '+12565573285',
    website: 'https://chesnutsurveying.com',
    address: '2828 Old Hickory Blvd, Nashville, TN 37221',
    responseTime: '',
    countiesServed: 'Davidson, Williamson, Wilson, Sumner, Cheatham, and Robertson',
    googleMapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Chesnut+Land+Surveying+Nashville+TN',
    source: 'google-maps',
  },
  {
    slug: 'all-terrain-land-clearing',
    name: 'All Terrain Land Clearing and Brush Control',
    category: 'prep',
    projectType: 'residential',
    description:
      'Family-owned site prep operator out of Spring Hill providing land clearing, forestry mulching, brush control, stump grinding, laser grading, driveway installs, and excavating for residential lots across the Nashville metro.',
    areas: ['Franklin', 'Brentwood'],
    specialties: ['Land Clearing', 'Forestry Mulching', 'Brush Removal', 'Laser Grading'],
    rating: 0,
    reviews: 0,
    badge: 'Listed on Google',
    license: 'Public Listing',
    yearsInBusiness: 0,
    projectsCompleted: '',
    phone: '(931) 446-6056',
    phoneRaw: '+19314466056',
    website: 'https://www.allterrainlandclearing.com',
    address: '3084 Duplex Rd, Spring Hill, TN 37174',
    responseTime: '',
    countiesServed: 'Williamson, Maury, and surrounding Middle Tennessee',
    googleMapsUrl:
      'https://www.google.com/maps/search/?api=1&query=All+Terrain+Land+Clearing+Spring+Hill+TN',
    source: 'google-maps',
  },
  {
    slug: 'mid-south-seal-and-stain',
    name: 'Mid South Seal & Stain',
    category: 'staining',
    projectType: 'residential',
    description:
      'Lebanon-based outdoor wood restoration specialist doing fence and deck cleaning, staining, and sealing with the Baker\'s Gray Away and Southern Stain and Seal system, plus concrete and aggregate sealing throughout Middle Tennessee.',
    areas: ['Mt. Juliet', 'Nashville', 'Hendersonville'],
    specialties: ['Fence Staining', 'Deck Sealing', 'Wood Restoration', 'Power Washing'],
    rating: 0,
    reviews: 0,
    badge: 'Listed on Google',
    license: 'Public Listing',
    yearsInBusiness: 0,
    projectsCompleted: '',
    phone: '(615) 210-9268',
    phoneRaw: '+16152109268',
    website: 'https://www.midsouthsealandstain.com',
    address: '116 Marks Cir Suite A, Lebanon, TN 37087',
    responseTime: '',
    countiesServed: 'Wilson, Davidson, and surrounding Middle Tennessee',
    googleMapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Mid+South+Seal+and+Stain+Lebanon+TN',
    source: 'google-maps',
  },
  {
    slug: 'landscape-solutions',
    name: 'Landscape Solutions',
    category: 'design',
    projectType: 'residential',
    description:
      'Nashville design-build outdoor contractor that handles landscape design, custom privacy fencing, pergolas and trellises, hardscape installation, and permitting under a single point of contact for residential projects across Middle Tennessee.',
    areas: ['Nashville', 'Brentwood', 'Franklin'],
    specialties: ['Landscape Design-Build', 'Privacy Landscaping', 'Custom Fencing', 'Hardscape Design'],
    rating: 0,
    reviews: 0,
    badge: 'Listed on Google',
    license: 'Public Listing',
    yearsInBusiness: 0,
    projectsCompleted: '',
    phone: '(615) 852-5009',
    phoneRaw: '+16158525009',
    website: 'https://landscapetn.com',
    address: '609 Newsome Ave, Nashville, TN 37211',
    responseTime: '',
    countiesServed: 'Davidson, Williamson, and surrounding Middle Tennessee',
    googleMapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Landscape+Solutions+Nashville+TN',
    source: 'google-maps',
  },
  {
    slug: 'madison-steel-iron-works',
    name: 'Madison Steel & Iron Works of TN',
    category: 'gates',
    projectType: 'residential',
    description:
      'Madison Steel & Iron Works fabricates custom wrought iron and ornamental iron driveway and entry gates, fencing, handrails, and architectural metalwork for residential and commercial properties within a 50-mile radius of Nashville. In-house fabrication, locally installed.',
    areas: ['Nashville', 'Hendersonville', 'Brentwood', 'Belle Meade'],
    specialties: ['Ornamental Iron', 'Wrought Iron', 'Driveway Gates', 'Custom Fabrication'],
    rating: 0,
    reviews: 0,
    badge: 'Listed on Google',
    license: 'Public Listing',
    yearsInBusiness: 0,
    projectsCompleted: '',
    phone: '(615) 865-8214',
    phoneRaw: '+16158658214',
    website: 'https://madisonsteeltn.com',
    address: '312 Woodruff St, Madison, TN 37115',
    responseTime: '',
    countiesServed: 'Davidson, Sumner, Williamson, and surrounding Middle Tennessee',
    googleMapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Madison+Steel+%26+Iron+Works+Madison+TN',
    source: 'google-maps',
  },
  {
    slug: 'american-fence-and-gate',
    name: 'American Fence and Gate, LLC',
    category: 'gates',
    projectType: 'residential',
    description:
      'Brentwood-based full-service residential and light commercial fence and gate company specializing in automated security gates plus ornamental aluminum, steel, wrought iron, wood, and brick fencing and columns. Serves Nashville, Franklin, Brentwood, Nolensville, Green Hills, Belle Meade, and Spring Hill.',
    areas: ['Brentwood', 'Franklin', 'Nashville'],
    specialties: ['Automated Gates', 'Ornamental Aluminum', 'Wrought Iron', 'Brick Columns'],
    rating: 0,
    reviews: 0,
    badge: 'Listed on Google',
    license: 'Public Listing',
    yearsInBusiness: 0,
    projectsCompleted: '',
    phone: '(615) 833-2120',
    phoneRaw: '+16158332120',
    website: 'https://www.americanfenceandmore.com',
    address: '9707 Turquoise Ln, Brentwood, TN 37027',
    responseTime: '',
    countiesServed: 'Williamson, Davidson, and surrounding Middle Tennessee',
    googleMapsUrl:
      'https://www.google.com/maps/search/?api=1&query=American+Fence+and+Gate+Brentwood+TN',
    source: 'google-maps',
  },
]

export const SAMPLE_REVIEWS = [
  {
    name: 'Sarah M.',
    initial: 'S',
    date: 'May 2026',
    source: 'Google',
    rating: 5,
    text: 'Absolutely fantastic work. Our cedar privacy fence looks stunning and the team was professional from start to finish. On time, on budget.',
  },
  {
    name: 'James T.',
    initial: 'J',
    date: 'April 2026',
    source: 'Google',
    rating: 5,
    text: 'Best fence company in Nashville. Third time hiring them and they never disappoint. Highly recommend for any wood fence project.',
  },
  {
    name: 'Rachel K.',
    initial: 'R',
    date: 'March 2026',
    source: 'Google',
    rating: 4,
    text: 'Great quality work. Minor scheduling delay but they communicated throughout and the final result is excellent.',
  },
]

export const PRICING_GUIDE_BY_CATEGORY: Record<
  string,
  { items: { label: string; sub: string; price: string }[] }
> = {
  fencing: {
    items: [
      { label: 'Wood Privacy Fence', sub: 'Western red cedar, 6 ft tall', price: '$28–$38 / linear ft' },
      { label: 'Vinyl Privacy Fence', sub: 'Premium vinyl panels, 6 ft tall', price: '$32–$44 / linear ft' },
      { label: 'Picket Fence', sub: 'Painted wood or vinyl, 4 ft tall', price: '$18–$26 / linear ft' },
      { label: 'Minimum Project', sub: 'Applies to all new installations', price: '$1,200' },
    ],
  },
  gates: {
    items: [
      { label: 'Single Swing Gate', sub: 'Wrought iron, up to 6 ft wide', price: '$1,400–$2,600' },
      { label: 'Double Drive Gate', sub: 'Wrought iron, up to 14 ft wide', price: '$3,200–$5,800' },
      { label: 'Automatic Operator', sub: 'LiftMaster or equivalent, single', price: '$1,800–$3,200' },
      { label: 'Keypad / Card Reader', sub: 'Programming + install', price: '$650–$1,200' },
    ],
  },
  surveying: {
    items: [
      { label: 'Boundary Survey', sub: 'Standard residential lot under ½ acre', price: '$650–$1,100' },
      { label: 'Property Line Staking', sub: 'Marked stakes every 50 ft along fence run', price: '$425–$750' },
      { label: 'Topographic Layout', sub: 'Elevation map for sloped yards', price: '$950–$1,800' },
      { label: 'Plat Verification', sub: 'Cross-check existing recorded plat', price: '$250' },
    ],
  },
  prep: {
    items: [
      { label: 'Brush & Debris Removal', sub: 'Per linear ft along fence run', price: '$4–$9 / linear ft' },
      { label: 'Land Grading', sub: 'Sloped or uneven yards', price: '$1.50–$3.20 / sq ft' },
      { label: 'Tree Limb / Stump Removal', sub: 'Per item, average backyard tree', price: '$280–$650' },
      { label: 'Haul-Off Fee', sub: 'Standard dump truck load', price: '$420' },
    ],
  },
  staining: {
    items: [
      { label: 'Power Wash', sub: 'Soft wash + cleaning, per linear ft', price: '$2.50–$4 / linear ft' },
      { label: 'Stain & Seal, Oil', sub: 'Premium penetrating oil, 6 ft fence', price: '$5–$8 / linear ft' },
      { label: 'Stain & Seal, Solid Color', sub: 'Two-coat solid stain', price: '$7–$11 / linear ft' },
      { label: 'Minimum Project', sub: 'Applies to all jobs', price: '$650' },
    ],
  },
  design: {
    items: [
      { label: 'Site Visit + Concept', sub: 'On-site walkthrough and sketch', price: '$350' },
      { label: 'Full Layout Plan', sub: 'CAD drawings + planting list', price: '$1,400–$2,800' },
      { label: '3D Rendering', sub: 'Two photoreal views', price: '$650–$1,100' },
      { label: 'HOA Submission Package', sub: 'Drawings + materials specs', price: '$425' },
    ],
  },
}

export const galleryFor = (category: string) => {
  const fenceImgs = Object.values(IMAGES.fenceTypes)
  const galleryImgs = IMAGES.gallery
  const pool = [...fenceImgs, ...galleryImgs]
  const offset =
    Math.abs(category.split('').reduce((a, c) => a + c.charCodeAt(0), 0)) % pool.length
  return Array.from({ length: 6 }, (_, i) => pool[(offset + i) % pool.length])
}
