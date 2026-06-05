import { useParams, Link } from 'react-router-dom'
import PageHero from '../components/shared/PageHero'
import CallbackForm from '../components/shared/CallbackForm'
import LeadGenSection from '../components/home/LeadGenSection'
import SafeImage from '../components/shared/SafeImage'
import { NEIGHBORHOODS } from '../data/siteData'
import { MapPin, ArrowRight, ArrowLeft, Check } from 'lucide-react'
import { useDocumentMeta } from '../hooks/useDocumentMeta'
import { useStructuredData } from '../hooks/useStructuredData'
import {
  organization,
  breadcrumbList,
  collectionPageSchema,
  itemListSchema,
  placeSchema,
  serviceSchema,
} from '../lib/schema'

export default function Neighborhoods() {
  const { slug } = useParams<{ slug: string }>()
  const n = slug ? NEIGHBORHOODS.find((x) => x.slug === slug) : undefined

  useDocumentMeta({
    title: n
      ? `${n.name} Fence Installation TN | Nashville Fence Guide`
      : 'Nashville Service Areas | Fence Installation by City & Neighborhood',
    description: n
      ? `Fence installation in ${n.name}, Nashville TN (${n.zip}). Popular style: ${n.popularStyle}. Typical project ${n.avgCost}. Compare vetted ${n.name} fence installers and get free quotes.`
      : 'Compare Nashville fence installation by service area — Murfreesboro, Franklin, Brentwood, Hendersonville, Mount Juliet, Spring Hill, Smyrna, Clarksville, and every Davidson County neighborhood. Local pricing, popular styles, HOA notes.',
    canonical: slug ? `/service-areas/${slug}` : '/service-areas',
  })

  useStructuredData(
    slug && n
      ? [
          organization(),
          breadcrumbList([
            { label: 'Service Areas', to: '/service-areas' },
            { label: n.name },
          ]),
          placeSchema(n),
          serviceSchema({
            slug: `/service-areas/${slug}`,
            name: `Fence Installation in ${n.name}, Nashville TN`,
            description: `Fence installation services in ${n.name}. Popular style: ${n.popularStyle}. Typical project cost ${n.avgCost}.`,
          }),
        ]
      : [
          organization(),
          breadcrumbList([{ label: 'Service Areas' }]),
          collectionPageSchema({
            slug: '/service-areas',
            title: 'Nashville Service Areas',
            description:
              'Local fence installation pricing, popular styles, and HOA notes for every city and neighborhood across the Nashville service area.',
          }),
          itemListSchema(
            NEIGHBORHOODS.map((x) => ({
              name: x.name,
              url: `/service-areas/${x.slug}`,
            })),
            'Nashville Service Area Fence Coverage',
          ),
        ],
  )

  if (slug) {
    if (!n) {
      return (
        <>
          <PageHero
            eyebrow="Not Found"
            title="Service Area Not Found"
            description="We don't have a guide for that area yet."
            crumbs={[{ label: 'Service Areas', to: '/service-areas' }]}
          />
          <div className="container-wide py-20 text-center">
            <Link to="/service-areas" className="btn-primary">
              <ArrowLeft className="w-4 h-4" /> Back to All Service Areas
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
            { label: 'Service Areas', to: '/service-areas' },
            { label: n.name },
          ]}
          right={<CallbackForm />}
        />

        <section className="bg-white section-padding">
          <div className="container-wide grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <div className="aspect-[16/9] rounded-3xl overflow-hidden shadow-medium mb-8">
                <SafeImage
                  src={n.img}
                  alt={`Fence installation in ${n.name}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="heading-section !text-3xl mb-2">
                What Works in {n.name}
              </h2>
              <div className="heading-accent mb-4" />
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

              <Link to="/get-quotes#quote-form" className="btn-primary">
                Get {n.name} Quotes <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <aside className="space-y-5">
              <div className="bg-warmgray rounded-2xl p-6">
                <div className="text-xs font-bold uppercase tracking-[0.18em] text-oak-500 mb-1">
                  Popular Style
                </div>
                <div className="text-xl font-heading font-bold text-forest-500 tracking-tightest">
                  {n.popularStyle}
                </div>
              </div>
              <div className="bg-warmgray rounded-2xl p-6">
                <div className="text-xs font-bold uppercase tracking-[0.18em] text-oak-500 mb-1">
                  Average Project Cost
                </div>
                <div className="text-xl font-heading font-bold text-forest-500 tracking-tightest">
                  {n.avgCost}
                </div>
              </div>
              <div className="bg-warmgray rounded-2xl p-6">
                <div className="text-xs font-bold uppercase tracking-[0.18em] text-oak-500 mb-1">
                  ZIP Code
                </div>
                <div className="text-xl font-heading font-bold text-forest-500 tracking-tightest">
                  {n.zip}
                </div>
              </div>
              <div className="bg-forest-500 text-white rounded-2xl p-6">
                <div className="text-xs font-bold uppercase tracking-[0.18em] text-oak-300 mb-1">
                  Nearby Service Areas
                </div>
                <ul className="mt-3 space-y-2">
                  {NEIGHBORHOODS.filter((x) => x.slug !== n.slug)
                    .slice(0, 4)
                    .map((x) => (
                      <li key={x.slug}>
                        <Link
                          to={`/service-areas/${x.slug}`}
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
        title="Nashville Service Areas"
        description="From Belle Meade estates to Murfreesboro new builds — pick your city or neighborhood for local pricing, popular styles, and HOA guidance."
        crumbs={[{ label: 'Service Areas' }]}
        right={<CallbackForm />}
      />
      <section className="bg-white section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {NEIGHBORHOODS.map((n, i) => (
              <div
                key={n.slug}
                className="reveal-up"
                style={{ animationDelay: `${i * 0.03}s` }}
              >
                <Link
                  to={`/service-areas/${n.slug}`}
                  className="group block bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 border border-warmgray"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-warmgray">
                    <SafeImage
                      src={n.img}
                      alt={n.name}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-onyx-700/60 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <div className="text-white/80 text-xs">ZIP {n.zip}</div>
                      <div className="font-heading font-bold text-white text-xl tracking-tightest">
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
              </div>
            ))}
          </div>
        </div>
      </section>
      <LeadGenSection />
    </>
  )
}
