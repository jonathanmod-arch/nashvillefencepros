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
import {
  CONTRACTORS,
  AREAS,
  SERVICE_CATEGORIES,
  PROJECT_TYPES,
  BADGE_COLORS,
  categoryLabel,
  type Contractor,
} from '../../data/contractors'

export default function ContractorDirectory() {
  const [query, setQuery] = useState('')
  const [area, setArea] = useState<string>('All Areas')
  const [category, setCategory] = useState<string>('all')
  const [projectType, setProjectType] = useState<string>('all')

  const filtered = useMemo(
    () =>
      CONTRACTORS.filter((c) => {
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

        <div className="bg-[#F8F9FA] rounded-2xl p-5 border border-[#E2E8F0] mb-8">
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

        <div className="mb-6 text-sm text-onyx-700/70">
          Showing <span className="font-semibold text-onyx-700">{filtered.length}</span>{' '}
          professional{filtered.length === 1 ? '' : 's'}
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
                  <ContractorCard key={c.slug} c={c} featured />
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
                  <ContractorCard key={c.slug} c={c} />
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
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-warmgray flex items-center justify-center">
            <Shield className="w-3.5 h-3.5 text-onyx-700/60" />
          </div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-onyx-700/70 px-2 py-1 rounded-md bg-warmgray">
            {c.license}
          </span>
        </div>
        <span
          className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider whitespace-nowrap ${
            BADGE_COLORS[c.badge] ?? BADGE_COLORS['Verified Pro']
          }`}
        >
          {c.badge}
        </span>
      </div>

      <h3 className="heading-card !text-xl leading-tight mb-1">{c.name}</h3>
      <div className="text-[11px] font-bold uppercase tracking-wider text-oak-500 mb-3">
        {categoryLabel(c.category)}
      </div>
      <p className="text-sm text-onyx-700/70 leading-relaxed mb-4 flex-1">
        {c.description}
      </p>

      <div className="flex items-center gap-2 mb-4">
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

      <div className="mb-4 pt-4 border-t border-[#E2E8F0]">
        <div className="text-[10px] font-bold uppercase tracking-wider text-onyx-700/50 mb-1.5 flex items-center gap-1">
          <MapPin className="w-3 h-3" /> Area Coverage
        </div>
        <div className="text-xs text-onyx-700/80">
          {c.areas.join(' · ')}
        </div>
      </div>

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

      <div className="grid grid-cols-2 gap-2">
        <Link
          to={`/contractors/${c.slug}`}
          className="block text-center bg-white text-[#1B4332] border border-[#1B4332] py-2.5 rounded-xl text-sm font-semibold hover:bg-[#1B4332]/5 transition-colors"
        >
          View Profile
        </Link>
        <Link
          to="/get-quotes"
          className="block text-center bg-[#1B4332] text-white py-2.5 rounded-xl text-sm font-semibold hover:bg-[#1B4332]/90 transition-colors"
        >
          Request Quote
        </Link>
      </div>
    </motion.div>
  )
}
