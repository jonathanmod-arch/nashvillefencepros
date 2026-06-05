import PageHero from '../components/shared/PageHero'
import CostGuideSection from '../components/home/CostGuideSection'
import LeadGenSection from '../components/home/LeadGenSection'
import { FENCE_TYPES } from '../data/siteData'
import { TrendingUp, AlertTriangle, Layers } from 'lucide-react'
import { useDocumentMeta } from '../hooks/useDocumentMeta'
import { useStructuredData } from '../hooks/useStructuredData'
import {
  organization,
  breadcrumbList,
  articleSchema,
  serviceSchema,
} from '../lib/schema'
import { RESOURCE_PUBLISHED_AT } from '../data/siteData'

const LINE_ITEMS = [
  { label: 'Posts & Concrete', share: 18, note: '4×4 posts set in concrete, 8 ft on center.' },
  { label: 'Pickets / Panels', share: 28, note: 'Material grade drives most of this number.' },
  { label: 'Rails & Hardware', share: 12, note: 'Top, middle, and bottom rails plus fasteners.' },
  { label: 'Labor', share: 30, note: 'Crew time, dig-safe coordination, cleanup.' },
  { label: 'Gates', share: 8, note: '$280–$650 per walk gate; $700–$1,800 per drive gate.' },
  { label: 'Permit / Misc.', share: 4, note: 'Permit fees, dump fees, surveying when needed.' },
]

export default function CostGuide() {
  useDocumentMeta({
    title: 'Fence Installation Cost Nashville 2026 | Price by Material | Nashville Fence Guide',
    description:
      'Real Nashville fence installation cost data for wood, vinyl, chain link, aluminum, wrought iron, pet, and pool fences. Interactive Nashville fence cost calculator + price-per-linear-foot ranges by material.',
    canonical: '/cost-guide',
  })

  useStructuredData([
    organization(),
    breadcrumbList([{ label: 'Cost Guide' }]),
    articleSchema({
      slug: '/cost-guide',
      title: 'Nashville Fence Installation Cost Guide 2026',
      description:
        'Installed price ranges for wood, vinyl, chain link, aluminum, wrought iron, pet, and pool fences in Nashville TN with material-by-material breakdowns.',
      category: 'Cost',
      image: 'https://nashvillefenceguide.com/og.jpg',
      publishedAt: RESOURCE_PUBLISHED_AT,
    }),
    serviceSchema({
      slug: '/cost-guide',
      name: 'Nashville Fence Installation Cost Estimates',
      description:
        'Per-linear-foot Nashville installed fence cost ranges from licensed local contractors.',
    }),
  ])
  return (
    <>
      <PageHero
        eyebrow="Nashville Cost Guide"
        title="Fence Installation Cost in Nashville TN"
        description="Real installed prices for fence installation in Nashville, Brentwood, Franklin, Hendersonville, and Murfreesboro — wood, vinyl, chain link, aluminum, wrought iron, privacy, pet, and pool fencing covered, plus the line items hiding behind your quote."
        crumbs={[{ label: 'Cost Guide' }]}
      />

      <CostGuideSection />

      <section className="bg-white section-padding">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="label-eyebrow">Material Pricing</span>
            <h2 className="mt-3 heading-section">Installed Cost by Fence Type</h2>
            <div className="heading-accent mx-auto" />
            <p className="mt-4 text-body-lead">
              Prices below reflect a typical 6 ft residential install in the Nashville metro
              area, including materials, posts, and labor.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl shadow-soft border border-warmgray">
            <table className="w-full text-sm">
              <thead className="bg-forest-500 text-white">
                <tr>
                  <th className="text-left px-5 py-4 font-semibold">Material</th>
                  <th className="text-left px-5 py-4 font-semibold">Low</th>
                  <th className="text-left px-5 py-4 font-semibold">High</th>
                  <th className="text-left px-5 py-4 font-semibold">Best For</th>
                </tr>
              </thead>
              <tbody>
                {FENCE_TYPES.map((t, i) => (
                  <tr
                    key={t.slug}
                    className={i % 2 === 0 ? 'bg-white' : 'bg-warmgray'}
                  >
                    <td className="px-5 py-4 font-semibold text-forest-500">{t.name}</td>
                    <td className="px-5 py-4 text-onyx-700">${t.priceLow}/ft</td>
                    <td className="px-5 py-4 text-onyx-700">${t.priceHigh}/ft</td>
                    <td className="px-5 py-4 text-onyx-500">{t.bestFor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-warmgray section-padding">
        <div className="container-wide grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <span className="label-eyebrow">Where Your Money Goes</span>
            <h2 className="mt-3 heading-section">Inside a $6,000 Nashville Fence Quote</h2>
            <div className="heading-accent" />
            <p className="mt-4 text-body-lead">
              Roughly 60% of a typical install is materials, 30% is labor, and the
              remainder covers gates, permits, and disposal. Here's how the breakdown
              usually shakes out for a 180 ft cedar privacy fence.
            </p>
          </div>
          <div className="bg-white rounded-3xl p-6 md:p-8 shadow-soft">
            {LINE_ITEMS.map((l) => (
              <div key={l.label} className="py-3 border-b border-warmgray last:border-b-0">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-semibold text-forest-500">{l.label}</span>
                  <span className="text-sm font-bold text-oak-700">{l.share}%</span>
                </div>
                <div className="h-2 rounded-full bg-warmgray overflow-hidden">
                  <div
                    className="h-full bg-forest-500"
                    style={{ width: `${l.share * 2.5}%` }}
                  />
                </div>
                <p className="text-xs text-onyx-400 mt-1.5">{l.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white section-padding">
        <div className="container-wide grid md:grid-cols-3 gap-6">
          {[
            {
              icon: TrendingUp,
              title: 'Prices Trending Up 4–6%',
              body: 'Cedar lumber has stabilized but skilled labor is still the biggest year-over-year increase for Middle Tennessee.',
            },
            {
              icon: Layers,
              title: 'Bundle to Save',
              body: 'Adding a gate or fence-line landscaping at the same time can shave 8–12% versus phasing the work.',
            },
            {
              icon: AlertTriangle,
              title: 'Watch For Cheap Bids',
              body: 'Under-market quotes often skip concrete-set posts, use lower-grade hardware, or assume no demo of old fencing.',
            },
          ].map((c) => {
            const Icon = c.icon
            return (
              <div key={c.title} className="p-6 rounded-2xl border border-warmgray">
                <Icon className="w-6 h-6 text-forest-500 mb-3" />
                <h3 className="heading-label mb-2">
                  {c.title}
                </h3>
                <p className="text-sm text-onyx-700/70 leading-relaxed">{c.body}</p>
              </div>
            )
          })}
        </div>
      </section>

      <LeadGenSection />
    </>
  )
}
