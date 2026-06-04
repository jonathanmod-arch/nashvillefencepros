import { useMemo, useState } from 'react'
import PageHero from '../components/shared/PageHero'
import LeadGenSection from '../components/home/LeadGenSection'
import {
  CONTRACTORS,
  FENCE_TYPE_FILTERS,
  CUSTOMER_TYPES,
  type Contractor,
} from '../data/siteData'
import { Star, ShieldCheck, MapPin, ArrowRight, Search, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'

const ALL_AREAS = Array.from(
  new Set(CONTRACTORS.flatMap((c) => c.areas)),
).sort()

export default function Contractors() {
  const [query, setQuery] = useState('')
  const [area, setArea] = useState<string>('All')
  const [fenceType, setFenceType] = useState<string>('All')
  const [customer, setCustomer] = useState<string>('All')

  const filtered = useMemo(
    () =>
      CONTRACTORS.filter((c) => {
        const q = query.trim().toLowerCase()
        const matchesQuery =
          !q ||
          c.name.toLowerCase().includes(q) ||
          c.specialties.join(' ').toLowerCase().includes(q)
        const matchesArea = area === 'All' || c.areas.includes(area)
        const matchesType = fenceType === 'All' || c.types.includes(fenceType)
        const matchesCustomer =
          customer === 'All' || c.customerTypes.includes(customer)
        return matchesQuery && matchesArea && matchesType && matchesCustomer
      }),
    [query, area, fenceType, customer],
  )

  const featured = filtered.filter((c) => c.featured)
  const rest = filtered.filter((c) => !c.featured)
  const activeFilters =
    Number(area !== 'All') +
    Number(fenceType !== 'All') +
    Number(customer !== 'All') +
    (query.trim() ? 1 : 0)

  return (
    <>
      <PageHero
        eyebrow="Vetted Local Pros"
        title="Best Fence Companies in Nashville"
        description="Hand-picked, licensed, insured, and rated by real Nashville homeowners. Compare specialties and service areas."
        crumbs={[{ label: 'Find a Pro' }]}
      />

      <section className="bg-white section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-10 p-4 bg-warmgray rounded-2xl">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-onyx-400" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by name or specialty…"
                className="w-full pl-11 pr-4 py-3 rounded-lg bg-white border border-warmgray text-sm focus:outline-none focus:border-forest-500"
              />
            </div>
            <select
              value={area}
              onChange={(e) => setArea(e.target.value)}
              className="px-4 py-3 rounded-lg bg-white border border-warmgray text-sm focus:outline-none focus:border-forest-500"
            >
              <option value="All">All service areas</option>
              {ALL_AREAS.map((a) => (
                <option key={a} value={a}>
                  {a}
                </option>
              ))}
            </select>
            <select
              value={fenceType}
              onChange={(e) => setFenceType(e.target.value)}
              className="px-4 py-3 rounded-lg bg-white border border-warmgray text-sm focus:outline-none focus:border-forest-500"
            >
              <option value="All">All fence types</option>
              {FENCE_TYPE_FILTERS.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
            <select
              value={customer}
              onChange={(e) => setCustomer(e.target.value)}
              className="px-4 py-3 rounded-lg bg-white border border-warmgray text-sm focus:outline-none focus:border-forest-500"
            >
              <option value="All">Residential & Commercial</option>
              {CUSTOMER_TYPES.map((t) => (
                <option key={t} value={t}>
                  {t} only
                </option>
              ))}
            </select>
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-onyx-700/60">
              No contractors match those filters yet. Try widening your search.
            </div>
          )}

          {featured.length > 0 && (
            <div className="mb-12">
              <div className="flex items-end justify-between mb-5 flex-wrap gap-2">
                <div>
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-oak-500" />
                    <span className="label-eyebrow !text-oak-500">Featured Pros</span>
                  </div>
                  <h2 className="heading-card mt-1">Top-rated picks this month</h2>
                </div>
                <span className="text-sm text-onyx-700/60">
                  {featured.length} featured · {rest.length} more below
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featured.map((c) => (
                  <ContractorCard key={c.name} c={c} featured />
                ))}
              </div>
            </div>
          )}

          {rest.length > 0 && (
            <div>
              {featured.length > 0 && (
                <div className="flex items-end justify-between mb-5 flex-wrap gap-2">
                  <div>
                    <span className="label-eyebrow">Full Directory</span>
                    <h2 className="heading-card mt-1">
                      All Nashville pros
                      {activeFilters > 0 && (
                        <span className="ml-2 text-onyx-700/50 font-normal text-base">
                          ({rest.length} match)
                        </span>
                      )}
                    </h2>
                  </div>
                </div>
              )}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {rest.map((c) => (
                  <ContractorCard key={c.name} c={c} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <LeadGenSection />
    </>
  )
}

function ContractorCard({ c, featured }: { c: Contractor; featured?: boolean }) {
  return (
    <div
      className={`bg-white rounded-2xl border p-6 shadow-soft hover:shadow-medium transition-all duration-300 flex flex-col ${
        featured ? 'border-oak-200 ring-1 ring-oak-100' : 'border-warmgray'
      }`}
    >
      <div className="flex items-start justify-between gap-2 mb-3">
        <div className="min-w-0">
          <h3 className="heading-card !text-lg leading-tight">{c.name}</h3>
          <div className="mt-1 text-xs text-onyx-700/60">
            {c.yearsInBusiness} years · Licensed & Insured
          </div>
        </div>
        <div className="flex flex-col items-end gap-1.5 flex-shrink-0">
          {featured && (
            <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-oak-400 text-forest-500 text-[10px] font-bold uppercase tracking-[0.15em]">
              <Sparkles className="w-3 h-3" /> Featured
            </div>
          )}
          <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-forest-50 text-[10px] font-bold uppercase tracking-[0.15em] text-forest-500">
            <ShieldCheck className="w-3 h-3" /> Vetted
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2 mb-3">
        <div className="flex">
          {[0, 1, 2, 3, 4].map((i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < Math.round(c.rating) ? 'fill-oak-400 text-oak-400' : 'text-onyx-200'
              }`}
            />
          ))}
        </div>
        <span className="text-sm font-bold text-onyx-700">{c.rating}</span>
        <span className="text-xs text-onyx-700/60">({c.reviews})</span>
      </div>

      <p className="text-sm text-onyx-700/70 leading-relaxed mb-4 flex-1">{c.blurb}</p>

      <div className="flex flex-wrap gap-1.5 mb-3">
        {c.specialties.map((s) => (
          <span
            key={s}
            className="px-2 py-0.5 rounded-md bg-warmgray text-[11px] font-semibold text-onyx-700"
          >
            {s}
          </span>
        ))}
      </div>

      <div className="flex flex-wrap items-center gap-1.5 mb-3 text-[11px] font-semibold">
        {c.customerTypes.map((t) => (
          <span
            key={t}
            className="px-2 py-0.5 rounded-md bg-forest-50 text-forest-500"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="flex items-start gap-1.5 text-xs text-onyx-700/70 mb-5">
        <MapPin className="w-3.5 h-3.5 text-forest-500 flex-shrink-0 mt-0.5" />
        <span>{c.areas.join(' · ')}</span>
      </div>

      <Link to="/get-quotes" className="btn-primary !py-2.5 w-full">
        Request Quote <ArrowRight className="w-3.5 h-3.5" />
      </Link>
    </div>
  )
}
