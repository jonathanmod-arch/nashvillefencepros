import { useParams, Link } from 'react-router-dom'
import PageHero from '../components/shared/PageHero'
import SponsorStrip from '../components/shared/SponsorStrip'
import CallbackForm from '../components/shared/CallbackForm'
import LeadGenSection from '../components/home/LeadGenSection'
import SafeImage from '../components/shared/SafeImage'
import { NEIGHBORHOODS } from '../data/siteData'
import { SERVICES } from '../data/services'
import { MapPin, ArrowRight, ArrowLeft, Check, ExternalLink } from 'lucide-react'
import { useDocumentMeta } from '../hooks/useDocumentMeta'
import { cleanMetaDescription } from '../lib/meta'
import { useStructuredData } from '../hooks/useStructuredData'
import {
  organization,
  breadcrumbList,
  collectionPageSchema,
  itemListSchema,
  placeSchema,
  serviceSchema,
} from '../lib/schema'
import { CITY } from '../config/city'

// Surface the same 12 cityPages services the cross-product is sitemapped
// against, so every neighborhood page links into its area-specific service
// pages. Uses the full service name (not the short form) for commercial
// intent — "Wood Fence Installation in Green Hills" reads as a CTA where
// "Wood in Green Hills" doesn't.
const CITY_SERVICE_LINKS = SERVICES.filter((s) => s.cityPages).map((s) => ({
  slug: s.slug,
  label: s.name,
}))

type LocalPlace = { name: string; note: string }

type NeighborhoodWithExtras = (typeof NEIGHBORHOODS)[number] & {
  // Local landmarks / amenities / things to do. Renders an "Around
  // {Area}" section on the service-area detail page. Populated for
  // the priority areas; other entries render without the section.
  // Optional so new entries can ship without forcing local-content
  // authorship up front.
  landmarks?: LocalPlace[]
  amenities?: LocalPlace[]
  thingsToDo?: LocalPlace[]
}

export default function Neighborhoods() {
  const { slug } = useParams<{ slug: string }>()
  const n = (slug ? NEIGHBORHOODS.find((x) => x.slug === slug) : undefined) as
    | NeighborhoodWithExtras
    | undefined

  useDocumentMeta({
    title: n
      ? `Fence Installation in ${n.name}, ${CITY.stateAbbr}`
      : `Fence Installation Areas in ${CITY.name} ${CITY.stateAbbr}`,
    description: n
      ? cleanMetaDescription(
          `Fence installation in ${n.name}, ${CITY.name} (ZIP ${n.zip}). Popular style: ${n.popularStyle}. Typical project ${n.avgCost}. Free quotes within 24 hours.`,
        )
      : cleanMetaDescription(
          `Local ${CITY.name} fence pricing, popular styles, and HOA notes by neighborhood across the ${CITY.name} metro — ${CITY.topServiceAreaCities.slice(1).join(', ')}, and more.`,
        ),
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
            name: `Fence Installation in ${n.name}, ${CITY.name} ${CITY.stateAbbr}`,
            description: `Fence installation services in ${n.name}. Popular style: ${n.popularStyle}. Typical project cost ${n.avgCost}.`,
          }),
        ]
      : [
          organization(),
          breadcrumbList([{ label: 'Service Areas' }]),
          collectionPageSchema({
            slug: '/service-areas',
            title: `${CITY.name} Service Areas`,
            description: `Local fence installation pricing, popular styles, and HOA notes for every city and neighborhood across the ${CITY.name} service area.`,
          }),
          itemListSchema(
            NEIGHBORHOODS.map((x) => ({
              name: x.name,
              url: `/service-areas/${x.slug}`,
            })),
            `${CITY.name} Service Area Fence Coverage`,
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
    const landmarks = n.landmarks ?? []
    const amenities = n.amenities ?? []
    const thingsToDo = n.thingsToDo ?? []
    const hasLocalContext =
      landmarks.length > 0 || amenities.length > 0 || thingsToDo.length > 0
    return (
      <>
        <PageHero
          eyebrow={`${CITY.name} · ZIP ${n.zip}`}
          title={`${n.name} Fence Installation Guide`}
          description={n.note}
          crumbs={[
            { label: 'Service Areas', to: '/service-areas' },
            { label: n.name },
          ]}
          right={<CallbackForm />}
        />
        <SponsorStrip />

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
                new build, the local landscape, lot sizes, soil, and tree cover, shapes what holds up.
              </p>
              <p className="text-body-lead mb-5">
                Most {n.name} homeowners landing on this page are weighing privacy, curb appeal, and
                neighborhood character. Our network has done hundreds of installs here and can match
                you with a crew that already knows the local nuances.
              </p>
              <p className="text-body-lead mb-5">
                A good fence is essential to protect your property, frame the yard, and add
                aesthetic appeal. In {n.name} the right call depends on lot size, HOA rules,
                and what your neighbors already run.
              </p>
              <p className="text-body-lead mb-5">
                The fence company network we list installs every common material here: wooden
                fence for backyard privacy, vinyl fence on HOA-controlled lots, aluminum fence
                along pools and front entries, and chain link fence on larger parcels or side
                runs out of view.
              </p>
              <p className="text-body-lead mb-8">
                Each fence contractor in our directory works at competitive prices with the
                attention to details that drive a clean, warrantied install. Whatever fencing
                solution fits your {n.name} home, residential or commercial, the top rated
                pros we recommend will walk you through fence styles and materials that hold up
                on your lot.
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

              <div className="mt-12 pt-10 border-t border-warmgray">
                <h3 className="heading-card !text-2xl mb-2">
                  Get Free {n.name} Quotes by Service
                </h3>
                <p className="text-body-lead mb-6">
                  Tap the service that fits your project for installed pricing, popular{' '}
                  {n.name} styles, and a free no-obligation quote from a vetted local
                  crew. Replies within 2 hours, sometimes minutes.
                </p>
                <div className="grid sm:grid-cols-2 gap-2">
                  {CITY_SERVICE_LINKS.map((cs) => (
                    <Link
                      key={cs.slug}
                      to={`/services/${cs.slug}/${n.slug}`}
                      className="flex items-center justify-between gap-2 px-3 py-2.5 rounded-lg text-sm text-onyx-700 hover:text-forest-500 hover:bg-warmgray transition-colors group"
                    >
                      <span>
                        {cs.label} in {n.name}
                      </span>
                      <ArrowRight className="w-3.5 h-3.5 text-onyx-300 group-hover:text-forest-500" />
                    </Link>
                  ))}
                </div>
                <div className="mt-5 flex flex-wrap gap-3 text-xs text-onyx-700/70">
                  <span className="inline-flex items-center gap-1">
                    <Check className="w-3.5 h-3.5 text-forest-500" /> Licensed & insured
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Check className="w-3.5 h-3.5 text-forest-500" /> Free, no-obligation quotes
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Check className="w-3.5 h-3.5 text-forest-500" /> Vetted {n.name} crews
                  </span>
                </div>
              </div>

              {hasLocalContext && (
                <div className="mt-12 pt-10 border-t border-warmgray">
                  <h3 className="heading-card !text-2xl mb-2">
                    Around {n.name}
                  </h3>
                  <p className="text-body-lead mb-6">
                    Local landmarks, amenities, and things to do — useful
                    context when a fence project bundles into a broader
                    yard or backyard build-out around the {n.name} area.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {landmarks.length > 0 && (
                      <div>
                        <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-oak-500 mb-3">
                          Landmarks
                        </div>
                        <ul className="space-y-3">
                          {landmarks.map((l) => (
                            <li key={l.name}>
                              <div className="text-sm font-bold text-onyx-700 leading-tight">
                                {l.name}
                              </div>
                              <div className="text-[13px] text-onyx-700/70 leading-snug mt-0.5">
                                {l.note}
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {amenities.length > 0 && (
                      <div>
                        <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-oak-500 mb-3">
                          Amenities
                        </div>
                        <ul className="space-y-3">
                          {amenities.map((a) => (
                            <li key={a.name}>
                              <div className="text-sm font-bold text-onyx-700 leading-tight">
                                {a.name}
                              </div>
                              <div className="text-[13px] text-onyx-700/70 leading-snug mt-0.5">
                                {a.note}
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {thingsToDo.length > 0 && (
                      <div>
                        <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-oak-500 mb-3">
                          Things to Do
                        </div>
                        <ul className="space-y-3">
                          {thingsToDo.map((t) => (
                            <li key={t.name}>
                              <div className="text-sm font-bold text-onyx-700 leading-tight">
                                {t.name}
                              </div>
                              <div className="text-[13px] text-onyx-700/70 leading-snug mt-0.5">
                                {t.note}
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              )}
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
              <div className="bg-warmgray rounded-2xl p-6">
                <div className="text-xs font-bold uppercase tracking-[0.18em] text-oak-500 mb-1">
                  Nearby Service Areas
                </div>
                <ul className="mt-3 space-y-2">
                  {NEIGHBORHOODS.filter((x) => x.slug !== n.slug)
                    .slice(0, 4)
                    .map((x) => (
                      <li key={x.slug}>
                        <Link
                          to={`/service-areas/${x.slug}`}
                          className="text-sm text-onyx-700 hover:text-forest-500 flex items-center gap-1"
                        >
                          <MapPin className="w-3 h-3 text-forest-500" /> {x.name}
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
              {'cityResources' in n && n.cityResources && n.cityResources.length > 0 && (
                <div className="bg-forest-500 text-white rounded-2xl p-6">
                  <div className="text-xs font-bold uppercase tracking-[0.18em] text-oak-300 mb-3">
                    City Permit Resources
                  </div>
                  <ul className="space-y-2.5">
                    {n.cityResources.map((r) => (
                      <li key={r.url}>
                        <a
                          href={r.url}
                          target="_blank"
                          rel="noopener noreferrer nofollow"
                          className="group flex items-start gap-2 text-sm text-white hover:text-oak-300"
                        >
                          <ExternalLink className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 text-oak-300 group-hover:text-oak-400" />
                          <span className="underline underline-offset-4 decoration-white/30 group-hover:decoration-oak-300">
                            {r.label}
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-3 text-[11px] text-white/65 leading-relaxed">
                    Official city page. Always confirm requirements directly with the municipality before installing.
                  </p>
                </div>
              )}
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
        title={`${CITY.name} Service Areas`}
        description="From Belle Meade estates to Murfreesboro new builds, pick your city or neighborhood for local pricing, popular styles, and HOA guidance."
        crumbs={[{ label: 'Service Areas' }]}
        right={<CallbackForm />}
      />
      <SponsorStrip />
      <section className="bg-white section-padding">
        <div className="container-wide">
          <div className="max-w-2xl mx-auto text-left space-y-4 mb-12">
            <p className="text-body-lead">
              Fence installation in {CITY.name} covers a sprawling metro. From {CITY.primaryCounty} County's
              Belle Meade estates and East {CITY.name} bungalows through {CITY.secondaryCounty} County's
              Franklin and Brentwood subdivisions.
            </p>
            <p className="text-body-lead">
              East into Wilson County's Mount Juliet and Lebanon, south to Murfreesboro and
              Spring Hill, north to Hendersonville and Gallatin. Every area has its own fence
              styles, HOA quirks, and price bands.
            </p>
            <p className="text-body-lead">
              A high quality fence is essential to protect your property and add aesthetic
              appeal, whether you need a residential fence in a quiet cul-de-sac or
              commercial fences around a local business.
            </p>
            <p className="text-body-lead">
              The fence contractor crews in our directory install every common material , 
              wooden fence, vinyl fence, aluminum fence, chain link fence, and ornamental
              iron, at competitive prices. Pick your city below for the top rated fence
              company picks in that area.
            </p>
          </div>
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
