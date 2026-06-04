import { useState } from 'react'
import PageHero from '../components/shared/PageHero'
import LeadGenSection from '../components/home/LeadGenSection'
import { CONTRACTORS } from '../data/siteData'
import { Star, ShieldCheck, MapPin, ArrowRight, Search } from 'lucide-react'
import { Link } from 'react-router-dom'

const ALL_AREAS = Array.from(
  new Set(CONTRACTORS.flatMap((c) => c.areas)),
).sort()

export default function Contractors() {
  const [query, setQuery] = useState('')
  const [area, setArea] = useState<string>('All')

  const filtered = CONTRACTORS.filter((c) => {
    const matchesQuery = !query || (
      c.name.toLowerCase().includes(query.toLowerCase()) ||
      c.specialties.join(' ').toLowerCase().includes(query.toLowerCase())
    )
    const matchesArea = area === 'All' || c.areas.includes(area)
    return matchesQuery && matchesArea
  })

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
          <div className="flex flex-col lg:flex-row gap-3 mb-10 p-4 bg-warmgray rounded-2xl">
            <div className="relative flex-1">
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
              className="px-4 py-3 rounded-lg bg-white border border-warmgray text-sm focus:outline-none focus:border-forest-500 lg:w-64"
            >
              <option value="All">All service areas</option>
              {ALL_AREAS.map((a) => (
                <option key={a} value={a}>
                  {a}
                </option>
              ))}
            </select>
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-20 text-onyx-400">
              No contractors match those filters yet.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((c) => (
                <div
                  key={c.name}
                  className="bg-white rounded-2xl border border-warmgray p-6 shadow-soft hover:shadow-medium transition-all duration-300 flex flex-col"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-display font-bold text-forest-500 text-lg tracking-tightest leading-tight">
                        {c.name}
                      </h3>
                      <div className="mt-1 text-xs text-onyx-400">
                        {c.yearsInBusiness} years · Licensed & Insured
                      </div>
                    </div>
                    <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-forest-50 text-[10px] font-bold uppercase tracking-[0.15em] text-forest-500">
                      <ShieldCheck className="w-3 h-3" /> Vetted
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
                    <span className="text-xs text-onyx-400">({c.reviews})</span>
                  </div>
                  <p className="text-sm text-onyx-500 leading-relaxed mb-4 flex-1">
                    {c.blurb}
                  </p>
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
                  <div className="flex items-start gap-1.5 text-xs text-onyx-500 mb-5">
                    <MapPin className="w-3.5 h-3.5 text-forest-500 flex-shrink-0 mt-0.5" />
                    <span>{c.areas.join(' · ')}</span>
                  </div>
                  <Link to="/get-quotes" className="btn-primary !py-2.5 w-full">
                    Request Quote <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <LeadGenSection />
    </>
  )
}
