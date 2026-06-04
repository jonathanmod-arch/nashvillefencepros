import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Star, ShieldCheck, MapPin, ArrowRight } from 'lucide-react'
import { CONTRACTORS } from '../../data/siteData'

export default function ContractorDirectory() {
  return (
    <section className="bg-white section-padding">
      <div className="container-wide">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="label-eyebrow">Pre-Vetted Pros</span>
          <h2 className="mt-3 heading-section">Best Fence Companies in Nashville</h2>
          <div className="heading-accent mx-auto" />
          <p className="mt-4 text-body-lead">
            Every contractor on this list is licensed, insured, and background-checked.
            Compare specialties, ratings, and service areas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CONTRACTORS.slice(0, 6).map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="bg-white rounded-2xl border border-warmgray p-6 shadow-soft hover:shadow-medium transition-all duration-300 flex flex-col"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="heading-card !text-lg leading-tight">
                    {c.name}
                  </h3>
                  <div className="mt-1 text-xs text-onyx-400">
                    {c.yearsInBusiness} years in business
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
                <span className="text-xs text-onyx-400">({c.reviews} reviews)</span>
              </div>

              <p className="text-sm text-onyx-700/70 leading-relaxed mb-4 flex-1">
                {c.blurb}
              </p>

              <div className="space-y-3 mb-5">
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.15em] text-oak-500 mb-1.5">
                    Specialties
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {c.specialties.map((s) => (
                      <span
                        key={s}
                        className="px-2 py-0.5 rounded-md bg-warmgray text-[11px] font-semibold text-onyx-700"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-start gap-1.5 text-xs text-onyx-700/70">
                  <MapPin className="w-3.5 h-3.5 text-forest-500 flex-shrink-0 mt-0.5" />
                  <span>{c.areas.join(' · ')}</span>
                </div>
              </div>

              <Link
                to="/get-quotes"
                className="btn-primary !py-2.5 w-full"
              >
                Request Quote <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/contractors" className="btn-secondary">
            View Full Directory <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
