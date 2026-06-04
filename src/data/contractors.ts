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
}

export const AREAS = [
  'All Areas',
  'Nashville',
  'Brentwood',
  'Franklin',
  'Hendersonville',
  'Murfreesboro',
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
}

export const categoryLabel = (id: string) =>
  SERVICE_CATEGORIES.find((c) => c.id === id)?.label ?? id

export const CONTRACTORS: Contractor[] = [
  {
    slug: 'music-city-fence-co',
    name: 'Music City Fence Co.',
    category: 'fencing',
    projectType: 'residential',
    description:
      "Nashville's largest residential fence installer. Specializing in high-end western red cedar privacy and premium vinyl fencing.",
    areas: ['Nashville', 'Brentwood', 'Franklin'],
    specialties: ['Wood Privacy', 'Vinyl Fence', 'Cedar'],
    rating: 4.9,
    reviews: 214,
    badge: 'Top Rated 2026',
    license: 'Licensed & Insured',
    featured: true,
    yearsInBusiness: 15,
    projectsCompleted: '1,800+',
    phone: '(615) 555-0101',
    phoneRaw: '+16155550101',
    website: 'https://musiccityfence.example',
    address: '1420 Broadway, Nashville, TN 37203',
    responseTime: 'Within 24 hrs',
    countiesServed: 'Davidson, Williamson, and Rutherford',
  },
  {
    slug: 'tennessee-fence-pros',
    name: 'Tennessee Fence Pros',
    category: 'fencing',
    projectType: 'residential',
    description:
      'Family-owned fence contractor serving the greater Nashville area. Known for fast residential chain-link, wood, and aluminum builds.',
    areas: ['Nashville', 'Hendersonville', 'Murfreesboro'],
    specialties: ['Chain Link', 'Aluminum', 'Wood'],
    rating: 4.8,
    reviews: 156,
    badge: 'Verified Pro',
    license: 'Licensed & Insured',
    yearsInBusiness: 22,
    projectsCompleted: '2,400+',
    phone: '(615) 555-0102',
    phoneRaw: '+16155550102',
    address: '305 Gallatin Pike, Nashville, TN 37206',
    responseTime: 'Within 48 hrs',
    countiesServed: 'Davidson, Sumner, and Rutherford',
  },
  {
    slug: 'williamson-county-fence-rail',
    name: 'Williamson County Fence & Rail',
    category: 'fencing',
    projectType: 'residential',
    description:
      "Brentwood and Franklin's trusted fence contractor. Specializing in HOA-compliant fencing and farm/ranch solutions for Williamson County.",
    areas: ['Brentwood', 'Franklin'],
    specialties: ['Vinyl Fence', 'Farm Fencing', 'HOA Approved'],
    rating: 4.9,
    reviews: 103,
    badge: 'Top Rated 2026',
    license: 'Licensed & Insured',
    featured: true,
    yearsInBusiness: 12,
    projectsCompleted: '900+',
    phone: '(615) 555-0103',
    phoneRaw: '+16155550103',
    website: 'https://wcfencerail.example',
    address: '742 Cool Springs Blvd, Franklin, TN 37067',
    responseTime: 'Within 24 hrs',
    countiesServed: 'Williamson and southern Davidson',
  },
  {
    slug: 'east-side-fence-company',
    name: 'East Side Fence Company',
    category: 'fencing',
    projectType: 'residential',
    description:
      "East Nashville's go-to specialist for horizontal cedar designs and historic commission overlay compliant backyard boundaries.",
    areas: ['Nashville', 'Hendersonville'],
    specialties: ['Horizontal Privacy', 'Custom Wood', 'Modern Design'],
    rating: 4.7,
    reviews: 127,
    badge: 'Verified Pro',
    license: 'Licensed & Insured',
    yearsInBusiness: 9,
    projectsCompleted: '650+',
    phone: '(615) 555-0104',
    phoneRaw: '+16155550104',
    address: '1108 Woodland St, Nashville, TN 37206',
    responseTime: 'Within 24 hrs',
    countiesServed: 'Davidson and Sumner',
  },
  {
    slug: 'middle-tennessee-commercial-fencing',
    name: 'Middle Tennessee Commercial Fencing',
    category: 'fencing',
    projectType: 'commercial',
    description:
      'Commercial and industrial fence specialist serving businesses across Tennessee. High-security solutions for any commercial application.',
    areas: ['Nashville', 'Murfreesboro'],
    specialties: ['Commercial Security', 'Chain Link', 'Barbed Wire'],
    rating: 4.8,
    reviews: 67,
    badge: 'Commercial Specialist',
    license: 'Licensed & Insured',
    yearsInBusiness: 18,
    projectsCompleted: '420+ sites',
    phone: '(615) 555-0105',
    phoneRaw: '+16155550105',
    address: '1500 Murfreesboro Pike, Nashville, TN 37217',
    responseTime: 'Within 48 hrs',
    countiesServed: 'Davidson, Rutherford, and Wilson',
  },
  {
    slug: 'belle-meade-fence-gate',
    name: 'Belle Meade Fence & Gate',
    category: 'gates',
    projectType: 'residential',
    description:
      'Specialists in custom estate entry gates. Installs structural ornamental wrought iron and premium solar automatic operator gates.',
    areas: ['Belle Meade', 'Brentwood', 'Franklin'],
    specialties: ['Automatic Gates', 'Ornamental Iron', 'Keypad Entry'],
    rating: 4.9,
    reviews: 89,
    badge: 'Premium Partner',
    license: 'Gate/Access Lic.',
    yearsInBusiness: 27,
    projectsCompleted: '550+',
    phone: '(615) 555-0106',
    phoneRaw: '+16155550106',
    website: 'https://bellemeadefence.example',
    address: '4505 Harding Pike, Nashville, TN 37205',
    responseTime: 'Within 24 hrs',
    countiesServed: 'Davidson and Williamson',
  },
  {
    slug: 'volt-guard-access-systems',
    name: 'Volt Guard Access Systems',
    category: 'gates',
    projectType: 'commercial',
    description:
      'State-certified technicians installing robust electronic driveway openers, card readers, and wireless app-controlled residential gates.',
    areas: ['Nashville', 'Brentwood', 'Murfreesboro'],
    specialties: ['LiftMaster Systems', 'Keypad Control', 'Maintenance'],
    rating: 4.8,
    reviews: 42,
    badge: 'Verified Pro',
    license: 'Electrical Lic.',
    yearsInBusiness: 11,
    projectsCompleted: '320+',
    phone: '(615) 555-0107',
    phoneRaw: '+16155550107',
    address: '900 8th Ave S, Nashville, TN 37203',
    responseTime: 'Within 48 hrs',
    countiesServed: 'Davidson, Williamson, and Rutherford',
  },
  {
    slug: 'cumberland-boundary-surveyors',
    name: 'Cumberland Boundary Surveyors',
    category: 'surveying',
    projectType: 'residential',
    description:
      'Licensed Tennessee land surveyors. Essential for mapping out your exact property boundaries before placing your new fence line.',
    areas: ['Nashville', 'Brentwood', 'Franklin', 'Hendersonville', 'Murfreesboro'],
    specialties: ['Boundary Mapping', 'Plot Verification', 'Staking'],
    rating: 4.9,
    reviews: 73,
    badge: 'Verified Pro',
    license: 'RLS Certified',
    yearsInBusiness: 16,
    projectsCompleted: '1,100+ surveys',
    phone: '(615) 555-0108',
    phoneRaw: '+16155550108',
    address: '210 25th Ave N, Nashville, TN 37203',
    responseTime: 'Within 24 hrs',
    countiesServed: 'Davidson, Williamson, Sumner, and Rutherford',
  },
  {
    slug: 'davidson-county-land-surveying',
    name: 'Davidson County Land Surveying',
    category: 'surveying',
    projectType: 'commercial',
    description:
      'Providing fast-turnaround boundary staking and topographic property layouts across Davidson and Williamson counties.',
    areas: ['Nashville', 'Belle Meade', 'Brentwood'],
    specialties: ['Boundary Staking', 'Property Line Pinning'],
    rating: 4.7,
    reviews: 31,
    badge: 'Verified Pro',
    license: 'RLS Certified',
    yearsInBusiness: 8,
    projectsCompleted: '480+ surveys',
    phone: '(615) 555-0109',
    phoneRaw: '+16155550109',
    address: '618 Church St, Nashville, TN 37219',
    responseTime: 'Within 48 hrs',
    countiesServed: 'Davidson and Williamson',
  },
  {
    slug: 'nashville-site-prep',
    name: 'Nashville Site Prep & Brush Clearing',
    category: 'prep',
    projectType: 'residential',
    description:
      'Specialists in clearing dense brush, overgrowth, tree limbs, and grading soil directly along prospective fence runs.',
    areas: ['Nashville', 'Hendersonville', 'Murfreesboro'],
    specialties: ['Brush Removal', 'Land Grading', 'Debris Hauling'],
    rating: 4.8,
    reviews: 64,
    badge: 'Verified Pro',
    license: 'Licensed & Insured',
    yearsInBusiness: 10,
    projectsCompleted: '740+',
    phone: '(615) 555-0110',
    phoneRaw: '+16155550110',
    address: '2600 Dickerson Pike, Nashville, TN 37207',
    responseTime: 'Within 24 hrs',
    countiesServed: 'Davidson, Sumner, and Rutherford',
  },
  {
    slug: 'tennessee-stain-seal-co',
    name: 'Tennessee Stain & Seal Co.',
    category: 'staining',
    projectType: 'residential',
    description:
      'Commercial-grade deep washing and premium oil-based staining that doubles the lifespan of pressure-treated wood fences.',
    areas: ['Nashville', 'Brentwood', 'Franklin', 'Murfreesboro'],
    specialties: ['Fence Staining', 'Power Washing', 'Wood Sealing'],
    rating: 4.9,
    reviews: 112,
    badge: 'Top Rated 2026',
    license: 'Licensed & Insured',
    featured: true,
    yearsInBusiness: 14,
    projectsCompleted: '1,300+ fences',
    phone: '(615) 555-0111',
    phoneRaw: '+16155550111',
    website: 'https://tnstainseal.example',
    address: '950 8th Ave S, Nashville, TN 37203',
    responseTime: 'Within 24 hrs',
    countiesServed: 'Davidson, Williamson, and Rutherford',
  },
  {
    slug: 'heritage-wood-restorations',
    name: 'Heritage Wood Restorations',
    category: 'staining',
    projectType: 'residential',
    description:
      'Specialists in revitalizing gray, weather-worn wood fences. Post straightening, picket replacements, and natural cedar sealing.',
    areas: ['Nashville', 'Belle Meade', 'Brentwood'],
    specialties: ['Wood Restoring', 'Picket Repair', 'Structural Sealing'],
    rating: 4.6,
    reviews: 58,
    badge: 'Verified Pro',
    license: 'Licensed & Insured',
    yearsInBusiness: 7,
    projectsCompleted: '380+ restorations',
    phone: '(615) 555-0112',
    phoneRaw: '+16155550112',
    address: '4216 Charlotte Ave, Nashville, TN 37209',
    responseTime: 'Within 48 hrs',
    countiesServed: 'Davidson and Williamson',
  },
  {
    slug: 'greenline-design-studio',
    name: 'Greenline Design Studio',
    category: 'design',
    projectType: 'residential',
    description:
      "Nashville-based outdoor design firm specializing in fence placement, privacy landscaping, and boundary beautification plans that complement your home's architecture.",
    areas: ['Nashville', 'Brentwood', 'Franklin', 'Belle Meade'],
    specialties: ['Fence Layout Design', 'Privacy Landscaping', 'Renderings'],
    rating: 4.9,
    reviews: 86,
    badge: 'Top Rated 2026',
    license: 'Licensed Designer',
    featured: true,
    yearsInBusiness: 9,
    projectsCompleted: '420+ designs',
    phone: '(615) 555-0113',
    phoneRaw: '+16155550113',
    website: 'https://greenlinestudio.example',
    address: '1200 Division St, Nashville, TN 37203',
    responseTime: 'Within 24 hrs',
    countiesServed: 'Davidson and Williamson',
  },
  {
    slug: 'outdoor-boundary-terrain-co',
    name: 'Outdoor Boundary by Terrain Co.',
    category: 'design',
    projectType: 'residential',
    description:
      'Full-service landscape architects who integrate fence lines, garden beds, and hardscape into cohesive outdoor living plans for Nashville properties.',
    areas: ['Nashville', 'Franklin', 'Hendersonville'],
    specialties: ['Landscape Architecture', '3D Planning', 'HOA Submissions'],
    rating: 4.8,
    reviews: 49,
    badge: 'Verified Pro',
    license: 'Licensed Designer',
    yearsInBusiness: 6,
    projectsCompleted: '210+ designs',
    phone: '(615) 555-0114',
    phoneRaw: '+16155550114',
    address: '88 Bridge Ave, Nashville, TN 37206',
    responseTime: 'Within 24 hrs',
    countiesServed: 'Davidson, Williamson, and Sumner',
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
      { label: 'Stain & Seal — Oil', sub: 'Premium penetrating oil, 6 ft fence', price: '$5–$8 / linear ft' },
      { label: 'Stain & Seal — Solid Color', sub: 'Two-coat solid stain', price: '$7–$11 / linear ft' },
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
