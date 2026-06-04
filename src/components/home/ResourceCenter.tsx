import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Clock, ArrowRight } from 'lucide-react'
import { RESOURCES } from '../../data/siteData'

const CATEGORY_COLORS: Record<string, string> = {
  Comparison: 'bg-forest-50 text-forest-500',
  Pets: 'bg-oak-50 text-oak-700',
  Compliance: 'bg-onyx-700 text-oak-300',
  Permits: 'bg-forest-500 text-white',
  Cost: 'bg-oak-400 text-forest-500',
  Trends: 'bg-warmgray text-onyx-700',
}

export default function ResourceCenter() {
  return (
    <section className="bg-warmgray section-padding">
      <div className="container-wide">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="label-eyebrow">Learn Before You Build</span>
          <h2 className="mt-3 heading-section">Nashville Fence Resource Center</h2>
          <p className="mt-4 text-body-lead">
            In-depth guides built for Middle Tennessee homeowners — written by local pros.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {RESOURCES.map((r, i) => (
            <motion.div
              key={r.slug}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.45, delay: i * 0.04 }}
            >
              <Link
                to={`/resources/${r.slug}`}
                className="group block bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 h-full"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-warmgray">
                  <img
                    src={r.img}
                    alt={r.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div
                    className={`absolute top-3 left-3 px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-[0.15em] ${
                      CATEGORY_COLORS[r.category] ?? 'bg-white text-forest-500'
                    }`}
                  >
                    {r.category}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-display font-bold text-forest-500 text-lg tracking-tightest leading-tight mb-2 line-clamp-2">
                    {r.title}
                  </h3>
                  <p className="text-sm text-onyx-500 leading-relaxed line-clamp-3 mb-4">
                    {r.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-onyx-400">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {r.readTime} read
                    </span>
                    <span className="flex items-center gap-1 font-semibold text-forest-500 group-hover:translate-x-1 transition-transform">
                      Read Guide <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/resources" className="btn-secondary">
            Browse All Guides <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
