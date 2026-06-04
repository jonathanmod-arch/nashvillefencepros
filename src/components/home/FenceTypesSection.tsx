import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { FENCE_TYPES } from '../../data/siteData'
import SafeImage from '../shared/SafeImage'

export default function FenceTypesSection() {
  return (
    <section className="bg-white section-padding">
      <div className="container-wide">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="label-eyebrow">Materials & Styles</span>
          <h2 className="mt-3 heading-section">Nashville Fence Types & Styles</h2>
          <div className="heading-accent mx-auto" />
          <p className="mt-4 text-body-lead">
            Six material families cover 95% of Middle Tennessee installs. Compare cost,
            durability, and the look that fits your yard.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {FENCE_TYPES.map((t, i) => (
            <div
              key={t.slug}
              className="reveal-up"
              style={{ animationDelay: `${i * 0.04}s` }}
            >
              <Link
                to={`/fence-types/${t.slug}`}
                className="group block bg-white rounded-xl overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300 border border-warmgray hover:-translate-y-0.5"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-warmgray">
                  <SafeImage
                    src={t.img}
                    alt={`${t.name} fence in Nashville`}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                  />
                  <div className="absolute top-2.5 left-2.5 bg-white/95 backdrop-blur-sm px-2.5 py-0.5 rounded-full text-[11px] font-bold text-forest-500">
                    ${t.priceLow}–${t.priceHigh}/ft
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="heading-card !text-[18px] mb-1.5">{t.name}</h3>
                  <p className="font-body text-[13px] text-onyx-700/70 leading-relaxed line-clamp-3">
                    {t.description}
                  </p>
                  <div className="mt-4 pt-3.5 border-t border-warmgray flex items-center justify-between">
                    <span className="text-[10px] uppercase font-bold tracking-[0.18em] text-oak-500">
                      Best for {t.bestFor.split(',')[0]}
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 text-forest-500 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
