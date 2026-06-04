import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { MapPin, ArrowRight } from 'lucide-react'
import { NEIGHBORHOODS } from '../../data/siteData'

export default function NeighborhoodsSection() {
  return (
    <section className="bg-warmgray section-padding">
      <div className="container-wide">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="label-eyebrow">Local Coverage</span>
          <h2 className="mt-3 heading-section">Nashville Neighborhoods We Serve</h2>
          <p className="mt-4 text-body-lead">
            Every Nashville area has its own fence personality — material trends, HOA quirks,
            and price bands. Find yours.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {NEIGHBORHOODS.map((n, i) => (
            <motion.div
              key={n.slug}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.4, delay: i * 0.03 }}
            >
              <Link
                to={`/neighborhoods/${n.slug}`}
                className="group block bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-warmgray">
                  <img
                    src={n.img}
                    alt={`Fence installation in ${n.name}, Nashville`}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-onyx-700/60 via-onyx-700/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="flex items-center gap-1.5 text-white/80 text-xs mb-1">
                      <MapPin className="w-3 h-3" /> ZIP {n.zip}
                    </div>
                    <div className="font-display font-bold text-white text-xl tracking-tightest">
                      {n.name}
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-oak-500">
                        Popular Style
                      </div>
                      <div className="text-sm font-semibold text-onyx-700">
                        {n.popularStyle}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-oak-500">
                        Avg. Project
                      </div>
                      <div className="text-sm font-semibold text-forest-500">
                        {n.avgCost}
                      </div>
                    </div>
                  </div>
                  <div className="pt-3 border-t border-warmgray flex items-center justify-between">
                    <span className="text-xs font-semibold text-forest-500">
                      View {n.name} Guide
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 text-forest-500 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/neighborhoods" className="btn-secondary">
            View All Neighborhoods <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
