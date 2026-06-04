import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Star,
  MapPin,
  Shield,
  Search,
  HelpCircle,
  Sparkles,
} from 'lucide-react'

type ProjectType = 'residential' | 'commercial'

type Contractor = {
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
}

const AREAS = [
  'All Areas',
  'Nashville',
  'Brentwood',
  'Franklin',
  'Hendersonville',
  'Murfreesboro',
  'Belle Meade',
]

const SERVICE_CATEGORIES = [
  { id: 'all', label: 'All Services' },
  { id: 'fencing', label: 'Fence Installers' },
  { id: 'gates', label: 'Gates & Automation' },
  { id: 'surveying', label: 'Land Surveyors' },
  { id: 'prep', label: 'Site Prep & Clearing' },
  { id: 'staining', label: 'Staining & Restoration' },
  { id: 'design', label: 'Fence & Landscape Design' },
] as const

const PROJECT_TYPES = [
  { id: 'all', label: 'All Projects' },
  { id: 'residential', label: 'Residential' },
  { id: 'commercial', label: 'Commercial' },
] as const

const BADGE_COLORS: Record<string, string> = {
  'Top Rated 2026':
    'bg-[#D4A373]/15 text-[#92400e] border border-[#D4A373]/40',
  'Verified Pro':
    'bg-[#1B4332]/10 text-[#1B4332] border border-[#1B4332]/25',
  'Premium Partner':
    'bg-[#1A1D1E]/10 text-[#1A1D1E] border border-[#1A1D1E]/20',
  'Commercial Specialist':
    'bg-blue-50 text-blue-800 border border-blue-200',
}

const categoryLabel = (id: string) =>
  SERVICE_CATEGORIES.find((c) => c.id === id)?.label ?? id

const contractors: Contractor[] = [
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
    name: 'Cumberland Boundary Surveyors',
    category: 'surveying',
    projectType: 'residential',
    description:
      'Licensed Tennessee land surveyors. Essential for mapping out your exact property boundaries before placing your new fence line.',
    areas: [
      'Nashville',
      'Brentwood',
      'Franklin',
      'Hendersonville',
      'Murfreesboro',
    ],
    specialties: ['Boundary Mapping', 'Plot Verification', 'Staking'],
    rating: 4.9,
    reviews: 73,
    badge: 'Verified Pro',
    license: 'RLS Certified',
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
  {
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
  },
]

export default function ContractorDirectory() {
  const [query, setQuery] = useState('')
  const [area, setArea] = useState<string>('All Areas')
  const [category, setCategory] = useState<string>('all')
  const [projectType, setProjectType] = useState<string>('all')

  const filtered = useMemo(
    () =>
      contractors.filter((c) => {
        const q = query.trim().toLowerCase()
        const matchesQuery =
          !q ||
          c.name.toLowerCase().includes(q) ||
          c.specialties.join(' ').toLowerCase().includes(q) ||
          c.description.toLowerCase().includes(q)
        const matchesArea = area === 'All Areas' || c.areas.includes(area)
        const matchesCategory = category === 'all' || c.category === category
        const matchesProject =
          projectType === 'all' || c.projectType === projectType
        return matchesQuery && matchesArea && matchesCategory && matchesProject
      }),
    [query, area, category, projectType],
  )

  const featured = filtered.filter((c) => c.featured)
  const rest = filtered.filter((c) => !c.featured)

  return (
    <section className="bg-white section-padding">
      <div className="container-wide">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="label-eyebrow">Vetted Local Pros</span>
          <h2 className="mt-3 heading-section">Best Fence Companies in Nashville</h2>
          <div className="heading-accent mx-auto" />
          <p className="mt-4 text-body-lead">
            Hand-picked, licensed, and reviewed by real Nashville homeowners.
            Filter by area, service, or project type.
          </p>
        </div>

        <div className="bg-[#F8F9FA] rounded-2xl p-5 border border-[#E2E8F0] mb-10">
          <div className="grid sm:grid-cols-[1fr_280px] gap-3 mb-4">
            <div className="relative">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-onyx-700/50" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search company or specialty…"
                className="w-full pl-10 pr-4 h-11 rounded-lg bg-white border border-[#E2E8F0] text-sm text-onyx-700 placeholder:text-onyx-700/50 focus:outline-none focus:border-forest-500 focus:ring-2 focus:ring-forest-500/10 transition"
              />
            </div>
            <div className="relative">
              <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-onyx-700/50 pointer-events-none" />
              <svg
                className="absolute right-3.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-onyx-700/50 pointer-events-none"
                viewBox="0 0 12 12"
                fill="none"
              >
                <path
                  d="M3 4.5l3 3 3-3"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <select
                value={area}
                onChange={(e) => setArea(e.target.value)}
                className="w-full pl-10 pr-9 h-11 rounded-lg bg-white border border-[#E2E8F0] text-sm text-onyx-700 appearance-none focus:outline-none focus:border-forest-500 focus:ring-2 focus:ring-forest-500/10 transition"
              >
                {AREAS.map((a) => (
                  <option key={a} value={a}>
                    {a}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <FilterRow label="Service:" accent="forest">
            {SERVICE_CATEGORIES.map((cat) => (
              <FilterPill
                key={cat.id}
                active={category === cat.id}
                onClick={() => setCategory(cat.id)}
                accent="forest"
              >
                {cat.label}
              </FilterPill>
            ))}
          </FilterRow>

          <div className="h-3" />

          <FilterRow label="Project:" accent="oak">
            {PROJECT_TYPES.map((pt) => (
              <FilterPill
                key={pt.id}
                active={projectType === pt.id}
                onClick={() => setProjectType(pt.id)}
                accent="oak"
              >
                {pt.label}
              </FilterPill>
            ))}
          </FilterRow>
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <HelpCircle className="w-12 h-12 text-onyx-700/30 mx-auto mb-4" />
            <h3 className="heading-card mb-2">No matches found</h3>
            <p className="text-onyx-700/70 max-w-md mx-auto">
              Try widening your selection — adjust the area, service, or
              project filters to see more pros.
            </p>
          </div>
        )}

        {featured.length > 0 && (
          <div className="mb-12">
            <div className="flex items-end justify-between mb-5 flex-wrap gap-2">
              <div>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-oak-500" />
                  <span className="label-eyebrow !text-oak-500">
                    Featured Pros
                  </span>
                </div>
                <h3 className="heading-card mt-1">Top-rated picks this month</h3>
              </div>
              <span className="text-sm text-onyx-700/60">
                {featured.length} featured · {rest.length} more below
              </span>
            </div>
            <motion.div
              layout
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              <AnimatePresence mode="popLayout">
                {featured.map((c) => (
                  <ContractorCard key={c.name} c={c} featured />
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        )}

        {rest.length > 0 && (
          <div>
            {featured.length > 0 && (
              <div className="mb-5">
                <span className="label-eyebrow">Full Directory</span>
                <h3 className="heading-card mt-1">All Nashville pros</h3>
              </div>
            )}
            <motion.div
              layout
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              <AnimatePresence mode="popLayout">
                {rest.map((c) => (
                  <ContractorCard key={c.name} c={c} />
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  )
}

function FilterRow({
  label,
  children,
  accent,
}: {
  label: string
  children: React.ReactNode
  accent: 'forest' | 'oak'
}) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <span
        className={`text-sm font-bold pr-1 ${
          accent === 'forest' ? 'text-[#1B4332]' : 'text-[#92400e]'
        }`}
      >
        {label}
      </span>
      {children}
    </div>
  )
}

function FilterPill({
  active,
  onClick,
  children,
  accent,
}: {
  active: boolean
  onClick: () => void
  children: React.ReactNode
  accent: 'forest' | 'oak'
}) {
  const activeClasses =
    accent === 'forest'
      ? 'bg-[#1B4332] text-white border-[#1B4332] shadow-sm'
      : 'bg-[#D4A373] text-white border-[#D4A373] shadow-sm'
  const inactiveClasses =
    'bg-white text-[#1A1D1E]/70 border-[#E2E8F0] hover:bg-white hover:text-[#1A1D1E]'
  return (
    <button
      type="button"
      onClick={onClick}
      className={`px-3.5 py-1.5 rounded-full border text-sm font-medium transition ${
        active ? activeClasses : inactiveClasses
      }`}
    >
      {children}
    </button>
  )
}

function ContractorCard({
  c,
  featured,
}: {
  c: Contractor
  featured?: boolean
}) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.3 }}
      className={`bg-white rounded-2xl border p-6 shadow-soft hover:shadow-medium transition-all duration-300 flex flex-col ${
        featured ? 'border-oak-200 ring-1 ring-oak-100' : 'border-[#E2E8F0]'
      }`}
    >
      <div className="flex items-start justify-between gap-2 mb-4">
        <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-onyx-700/70">
          <Shield className="w-3 h-3" />
          {c.license}
        </div>
        <span
          className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider whitespace-nowrap ${
            BADGE_COLORS[c.badge] ?? BADGE_COLORS['Verified Pro']
          }`}
        >
          {c.badge}
        </span>
      </div>

      <div className="flex items-center gap-2 mb-3">
        <div className="flex">
          {[0, 1, 2, 3, 4].map((i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < Math.round(c.rating)
                  ? 'fill-oak-400 text-oak-400'
                  : 'text-onyx-200'
              }`}
            />
          ))}
        </div>
        <span className="text-sm font-bold text-onyx-700">{c.rating}</span>
        <span className="text-xs text-onyx-700/60">({c.reviews} reviews)</span>
      </div>

      <h3 className="heading-card !text-xl leading-tight mb-1">{c.name}</h3>
      <div className="text-[11px] font-bold uppercase tracking-wider text-forest-500 mb-3">
        {categoryLabel(c.category)}
      </div>
      <p className="text-sm text-onyx-700/70 leading-relaxed mb-4 flex-1">
        {c.description}
      </p>

      <div className="flex flex-wrap gap-1.5 mb-5">
        {c.specialties.map((s) => (
          <span
            key={s}
            className="px-2.5 py-1 rounded-full bg-[#D4A373]/10 text-[#92400e] border border-[#D4A373]/20 text-[11px] font-semibold"
          >
            {s}
          </span>
        ))}
      </div>

      <div className="mb-5 pt-4 border-t border-[#E2E8F0]">
        <div className="text-[10px] font-bold uppercase tracking-wider text-onyx-700/50 mb-1.5">
          Area Coverage
        </div>
        <div className="flex items-start gap-1.5 text-xs text-onyx-700/80">
          <MapPin className="w-3.5 h-3.5 text-forest-500 mt-0.5 flex-shrink-0" />
          <span>{c.areas.join(' · ')}</span>
        </div>
      </div>

      <Link
        to="/get-quotes"
        className="block text-center bg-[#1B4332] text-white py-2.5 rounded-xl text-sm font-semibold hover:bg-[#1B4332]/90 transition-colors"
      >
        Request Quote
      </Link>
    </motion.div>
  )
}
