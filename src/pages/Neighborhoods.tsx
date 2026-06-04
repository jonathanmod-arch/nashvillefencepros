import { useParams, Link } from 'react-router-dom'
import PageHero from '../components/shared/PageHero'
import LeadGenSection from '../components/home/LeadGenSection'
import { NEIGHBORHOODS } from '../data/siteData'
import { MapPin, ArrowRight, ArrowLeft, Check } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Neighborhoods() {
  const { slug } = useParams<{ slug: string }>()

  if (slug) {
    const n = NEIGHBORHOODS.find((x) => x.slug === slug)
    if (!n) {
      return (
        <>
          <PageHero
            eyebrow="Not Found"
            title="Neighborhood Not Found"
            description="We don't have a guide for that area yet."
            crumbs={[{ label: 'Neighborhoods', to: '/neighborhoods' }]}
          />
          <div className="container-wide py-20 text-center">
            <Link to="/neighborhoods" className="btn-primary">
              <ArrowLeft className="w-4 h-4" /> Back to All Neighborhoods
            </Link>
          </div>
        </>
      )
    }
    return (
      <>
        <PageHero
          eyebrow={`Nashville · ZIP ${n.zip}`}
          title={`${n.name} Fence Installation Guide`}
          description={n.note}
          crumbs={[
            { label: 'Neighborhoods', to: '/neighborhoods' },
            { label: n.name },
          ]}
        />

        <section className="bg-white section-padding">
          <div className="container-wide grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <div className="aspect-[16/9] rounded-3xl overflow-hidden shadow-medium mb-8">
                <img
                  src={n.img}
                  alt={`Fence installation in ${n.name}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="text-3xl font-display font-bold text-forest-500 tracking-tightest mb-4">
                What Works in {n.name}
              </h2>
              <p className="text-body-lead mb-5">
                {n.note} Whether you're replacing an aging cedar fence or starting from scratch on a
                new build, the local landscape — lot sizes, soil, and tree cover — shapes what holds up.
              </p>
              <p className="text-body-lead mb-8">
                Most {n.name} homeowners landing on this page are weighing privacy, curb appeal, and
                neighborhood character. Our network has done hundreds of installs here and can match
                you with a crew that already knows the local nuances.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {[
                  'HOA-aware contractor matching',
                  'Historic overlay knowledge where applicable',
                  'Soil-appropriate post setting',
                  'Sloped-yard install experience',
                ].map((p) => (
                  <div key={p} className="flex items-start gap-2 p-4 rounded-xl bg-warmgray">
                    <Check className="w-4 h-4 text-forest-500 mt-1 flex-shrink-0" />
                    <span className="text-sm text-onyx-700">{p}</span>
                  </div>
                ))}
              </div>

              <Link to="/get-quotes" className="btn-primary">
                Get {n.name} Quotes <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <aside className="space-y-5">
              <div className="bg-warmgray rounded-2xl p-6">
                <div className="text-xs font-bold uppercase tracking-[0.18em] text-oak-500 mb-1">
                  Popular Style
                </div>
                <div className="text-xl font-display font-bold text-forest-500 tracking-tightest">
                  {n.popularStyle}
                </div>
              </div>
              <div className="bg-warmgray rounded-2xl p-6">
                <div className="text-xs font-bold uppercase tracking-[0.18em] text-oak-500 mb-1">
                  Average Project Cost
                </div>
                <div className="text-xl font-display font-bold text-forest-500 tracking-tightest">
                  {n.avgCost}
                </div>
              </div>
              <div className="bg-warmgray rounded-2xl p-6">
                <div className="text-xs font-bold uppercase tracking-[0.18em] text-oak-500 mb-1">
                  ZIP Code
                </div>
                <div className="text-xl font-display font-bold text-forest-500 tracking-tightest">
                  {n.zip}
                </div>
              </div>
              <div className="bg-forest-500 text-white rounded-2xl p-6">
                <div className="text-xs font-bold uppercase tracking-[0.18em] text-oak-300 mb-1">
                  Nearby Neighborhoods
                </div>
                <ul className="mt-3 space-y-2">
                  {NEIGHBORHOODS.filter((x) => x.slug !== n.slug)
                    .slice(0, 4)
                    .map((x) => (
                      <li key={x.slug}>
                        <Link
                          to={`/neighborhoods/${x.slug}`}
                          className="text-sm text-white/90 hover:text-oak-300 flex items-center gap-1"
                        >
                          <MapPin className="w-3 h-3" /> {x.name}
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            </aside>
          </div>
        </section>
        <LeadGenSection />
      </>
    )
  }

  return (
    <>
      <PageHero
        eyebrow="All Coverage Areas"
        title="Nashville Neighborhoods We Serve"
        description="From Belle Meade estates to Mount Juliet new builds — pick your area for local pricing, popular styles, and HOA guidance."
        crumbs={[{ label: 'Neighborhoods' }]}
      />
      <section className="bg-white section-padding">
        <div className="container-wide">
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
                  className="group block bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 border border-warmgray"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-warmgray">
                    <img
                      src={n.img}
                      alt={n.name}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-onyx-700/60 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <div className="text-white/80 text-xs">ZIP {n.zip}</div>
                      <div className="font-display font-bold text-white text-xl tracking-tightest">
                        {n.name}
                      </div>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-oak-500">
                      Popular Style
                    </div>
                    <div className="text-sm font-semibold text-onyx-700 mb-3">
                      {n.popularStyle}
                    </div>
                    <div className="text-xs font-bold text-forest-500">{n.avgCost}</div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <LeadGenSection />
    </>
  )
}
