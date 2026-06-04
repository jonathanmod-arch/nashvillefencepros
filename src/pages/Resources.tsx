import { useParams, Link } from 'react-router-dom'
import PageHero from '../components/shared/PageHero'
import LeadGenSection from '../components/home/LeadGenSection'
import SafeImage from '../components/shared/SafeImage'
import { RESOURCES } from '../data/siteData'
import { Clock, ArrowRight, ArrowLeft } from 'lucide-react'
import { motion } from 'framer-motion'

const CATEGORY_COLORS: Record<string, string> = {
  Comparison: 'bg-forest-50 text-forest-500',
  Pets: 'bg-oak-50 text-oak-700',
  Compliance: 'bg-onyx-700 text-oak-300',
  Permits: 'bg-forest-500 text-white',
  Cost: 'bg-oak-400 text-forest-500',
  Trends: 'bg-warmgray text-onyx-700',
}

export default function Resources() {
  const { slug } = useParams<{ slug: string }>()

  if (slug) {
    const r = RESOURCES.find((x) => x.slug === slug)
    if (!r) {
      return (
        <>
          <PageHero
            eyebrow="Not Found"
            title="Guide Not Found"
            crumbs={[{ label: 'Resources', to: '/resources' }]}
          />
          <div className="container-wide py-20 text-center">
            <Link to="/resources" className="btn-primary">
              <ArrowLeft className="w-4 h-4" /> Back to Resources
            </Link>
          </div>
        </>
      )
    }
    const related = RESOURCES.filter((x) => x.slug !== r.slug).slice(0, 3)
    return (
      <>
        <PageHero
          eyebrow={r.category}
          title={r.title}
          description={r.excerpt}
          crumbs={[{ label: 'Resources', to: '/resources' }, { label: r.category }]}
        />
        <section className="bg-white section-padding">
          <div className="container-wide grid lg:grid-cols-3 gap-12">
            <article className="lg:col-span-2">
              <div className="aspect-[16/9] rounded-3xl overflow-hidden shadow-medium mb-8">
                <SafeImage src={r.img} alt={r.title} className="w-full h-full object-cover" />
              </div>
              <div className="flex items-center gap-4 text-xs text-onyx-400 mb-6">
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" /> {r.readTime} read
                </span>
                <span>· Nashville-specific guide</span>
              </div>
              <div className="prose-content space-y-5 text-onyx-700">
                <p className="text-lg leading-relaxed">
                  {r.excerpt} This guide walks through what Middle Tennessee homeowners
                  actually run into — not generic national advice.
                </p>
                <h2 className="heading-card !text-2xl mt-8">
                  Why This Matters in Nashville
                </h2>
                <p className="leading-relaxed">
                  Nashville's mix of historic neighborhoods, fast-growing suburbs, and
                  large-lot acreage means a one-size-fits-all approach rarely works. Climate
                  swings from summer humidity to ice storms also influence which materials
                  hold up over the typical 15–25 year fence lifecycle.
                </p>
                <h2 className="heading-card !text-2xl mt-8">
                  Key Things to Know
                </h2>
                <ul className="space-y-3 pl-5 list-disc marker:text-oak-500">
                  <li>Local Metro permit rules typically allow up to 8 ft in rear and side yards.</li>
                  <li>Historic overlay districts have stricter approval processes.</li>
                  <li>Tennessee 811 marking is required at least 3 business days before digging.</li>
                  <li>HOA review applies to most Williamson County subdivisions.</li>
                  <li>Pool fences must comply with the 2018 ISPSC barrier code.</li>
                </ul>
                <h2 className="heading-card !text-2xl mt-8">
                  Bottom Line
                </h2>
                <p className="leading-relaxed">
                  Getting the right fence in Nashville comes down to material fit,
                  contractor experience, and respect for local code. Use this guide as a
                  starting point — then bring in 2–3 vetted quotes to nail down the
                  specifics for your yard.
                </p>
                <div className="bg-forest-50 border-l-4 border-forest-500 rounded-r-xl p-5 mt-8">
                  <div className="text-xs font-bold uppercase tracking-[0.18em] text-oak-700 mb-1">
                    Next Step
                  </div>
                  <p className="text-sm text-forest-500 font-semibold">
                    Compare quotes from up to 3 vetted Nashville fence pros — free, no
                    pressure.
                  </p>
                  <Link to="/get-quotes" className="btn-primary mt-4 !py-2.5">
                    Get Free Quotes <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </article>

            <aside>
              <div className="sticky top-32 space-y-5">
                <div className="bg-warmgray rounded-2xl p-6">
                  <h3 className="heading-label !text-lg mb-4">
                    Related Guides
                  </h3>
                  <ul className="space-y-4">
                    {related.map((x) => (
                      <li key={x.slug}>
                        <Link
                          to={`/resources/${x.slug}`}
                          className="group flex gap-3 items-start"
                        >
                          <div className="w-14 h-14 rounded-lg overflow-hidden flex-shrink-0">
                            <SafeImage
                              src={x.img}
                              alt={x.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-onyx-700 group-hover:text-forest-500 leading-tight">
                              {x.title}
                            </div>
                            <div className="text-xs text-onyx-400 mt-1">
                              {x.readTime} read
                            </div>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
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
        eyebrow="Resource Center"
        title="Nashville Fence Resource Center"
        description="In-depth, locally-written guides on every part of installing a fence in Middle Tennessee."
        crumbs={[{ label: 'Resources' }]}
      />
      <section className="bg-white section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {RESOURCES.map((r, i) => (
              <motion.div
                key={r.slug}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
              >
                <Link
                  to={`/resources/${r.slug}`}
                  className="group block bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 border border-warmgray h-full"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-warmgray">
                    <SafeImage
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
                    <h3 className="heading-card !text-lg leading-tight mb-2">
                      {r.title}
                    </h3>
                    <p className="text-sm text-onyx-700/70 leading-relaxed line-clamp-3 mb-4">
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
        </div>
      </section>
      <LeadGenSection />
    </>
  )
}
