import { useParams, Link } from 'react-router-dom'
import PageHero from '../components/shared/PageHero'
import SponsorStrip from '../components/shared/SponsorStrip'
import CallbackForm from '../components/shared/CallbackForm'
import LeadGenSection from '../components/home/LeadGenSection'
import SafeImage from '../components/shared/SafeImage'
import { FENCE_TYPES } from '../data/siteData'
import { ArrowRight, ArrowLeft, Check, Wrench, Calendar, Ruler } from 'lucide-react'
import { useDocumentMeta } from '../hooks/useDocumentMeta'
import { useStructuredData } from '../hooks/useStructuredData'
import {
  organization,
  breadcrumbList,
  collectionPageSchema,
  itemListSchema,
  serviceSchema,
} from '../lib/schema'
import { CITY } from '../config/city'

const FENCE_TYPE_META: Record<string, { title: string; description: string }> = {
  'wood-privacy': {
    title: `Wood Privacy Fence Installation ${CITY.name} ${CITY.stateAbbr} | Cedar Fencing`,
    description: `Wood privacy fence installation in ${CITY.name} ${CITY.stateAbbr}. Cedar privacy fencing, 6 ft and 8 ft heights, $22–$35 per linear foot installed. Compare vetted ${CITY.name} wood fence installers and get free quotes.`,
  },
  vinyl: {
    title: `Vinyl Fence Installation ${CITY.name} ${CITY.stateAbbr} | Premium PVC Fencing`,
    description: `Vinyl fence installation in ${CITY.name} ${CITY.stateAbbr}. Premium PVC privacy and picket vinyl fencing, $32–$48 per linear foot. Compare licensed ${CITY.name} vinyl fence installers and get free quotes.`,
  },
  aluminum: {
    title: `Aluminum Fence Installation ${CITY.name} ${CITY.stateAbbr} | Ornamental Metal`,
    description: `Aluminum and metal fence installation in ${CITY.name} ${CITY.stateAbbr}. Powder-coated ornamental aluminum from $38–$62 per linear foot, pool-code compliant. Compare ${CITY.name} aluminum fence installers.`,
  },
  'chain-link': {
    title: `Chain Link Fence Installation ${CITY.name} ${CITY.stateAbbr} | Wire Fencing`,
    description: `Chain link fence installation in ${CITY.name} ${CITY.stateAbbr}. Galvanized and black vinyl-coated chain link from $12–$22 per linear foot, plus wire fencing supplies in ${CITY.name}. Compare vetted installers.`,
  },
  'horizontal-privacy': {
    title: `Horizontal Cedar Privacy Fence Installation ${CITY.name}`,
    description: `Horizontal cedar privacy fence installation in ${CITY.name}. Modern slat fencing for East ${CITY.name}, 12 South, and Sylvan Park, $38–$58 per linear foot. Compare design-build ${CITY.name} fence installers.`,
  },
  'farm-ranch': {
    title: `Farm & Ranch Fence Installation ${CITY.name} ${CITY.stateAbbr} | ${CITY.secondaryCounty} + Sumner`,
    description: `Farm and ranch fence installation across ${CITY.secondaryCounty}, Sumner, and Wilson Counties. Four-board, split-rail, and wire fencing supplies in ${CITY.name} from $8–$18 per linear foot.`,
  },
  'wrought-iron': {
    title: `Wrought Iron Fence Installation ${CITY.name} ${CITY.stateAbbr} | Estate Iron`,
    description: `Wrought iron fence installation in ${CITY.name} ${CITY.stateAbbr}. Hand-forged ornamental iron fences and automated gates for Belle Meade, Forest Hills, and Brentwood estates. Compare iron fence installers + iron fence repair ${CITY.name}.`,
  },
  'pet-fence': {
    title: `Invisible & Pet Fence Installation ${CITY.name} ${CITY.stateAbbr} | Dog Fences`,
    description: `Invisible, hidden, and electric dog fence installation in ${CITY.name}. Best-rated invisible fence installation in ${CITY.name} plus traditional pet fence installation services. Compare ${CITY.name} best dog fence installers.`,
  },
  'hidden-pet-fence': {
    title: `${CITY.name} Hidden Dog Fence Installers | Buried Wire & GPS Collar Systems`,
    description: `${CITY.name} hidden dog fence installers, compare vetted contractors of buried boundary wire and GPS collar systems for dogs in ${CITY.name} ${CITY.stateAbbr}. Pricing per linear foot, containment training included, free quotes within 24 hours.`,
  },
  'pool-safety': {
    title: `Pool Fence Installation ${CITY.name} ${CITY.stateAbbr} | ISPSC Pool Barriers`,
    description: `Pool fence installation in ${CITY.name} ${CITY.stateAbbr} that meets the ${CITY.poolBarrierCode} barrier code. Aluminum, mesh, and glass pool fencing installation and repair services in ${CITY.name} from vetted installers.`,
  },
}

export default function FenceTypes() {
  const { slug } = useParams<{ slug: string }>()

  const typeMeta = slug ? FENCE_TYPE_META[slug] : undefined
  const fenceType = slug ? FENCE_TYPES.find((x) => x.slug === slug) : undefined
  useDocumentMeta({
    title:
      typeMeta?.title ??
      `${CITY.name} Fence Types & Materials | Installation Guide`,
    description:
      typeMeta?.description ??
      `Compare every ${CITY.name} fence type, wood privacy, vinyl, aluminum, chain link, horizontal cedar, farm & ranch, wrought iron, pet/invisible, and pool safety fencing. Pricing per linear ft + vetted ${CITY.name} installers.`,
    canonical: slug ? `/fence-types/${slug}` : '/fence-types',
  })

  useStructuredData(
    slug && fenceType
      ? [
          organization(),
          breadcrumbList([
            { label: 'Fence Types', to: '/fence-types' },
            { label: fenceType.name },
          ]),
          serviceSchema({
            slug: `/fence-types/${slug}`,
            name: `${fenceType.name} Fence Installation in ${CITY.name} ${CITY.stateAbbr}`,
            description: fenceType.description,
            priceLow: fenceType.priceLow,
            priceHigh: fenceType.priceHigh,
            unitCode: 'FOT',
          }),
        ]
      : [
          organization(),
          breadcrumbList([{ label: 'Fence Types' }]),
          collectionPageSchema({
            slug: '/fence-types',
            title: `${CITY.name} Fence Types & Materials`,
            description: `Compare every ${CITY.name} fence type, wood privacy, vinyl, aluminum, chain link, horizontal cedar, farm and ranch, wrought iron, pet, and pool safety fencing.`,
          }),
          itemListSchema(
            FENCE_TYPES.map((t) => ({
              name: t.name,
              url: `/fence-types/${t.slug}`,
            })),
            `${CITY.name} Fence Type Catalog`,
          ),
        ],
  )

  if (slug) {
    const t = FENCE_TYPES.find((x) => x.slug === slug)
    if (!t) {
      return (
        <>
          <PageHero
            eyebrow="Not Found"
            title="Fence Type Not Found"
            crumbs={[{ label: 'Fence Types', to: '/fence-types' }]}
          />
          <div className="container-wide py-20 text-center">
            <Link to="/fence-types" className="btn-primary">
              <ArrowLeft className="w-4 h-4" /> Back to All Fence Types
            </Link>
          </div>
        </>
      )
    }
    const related = FENCE_TYPES.filter((x) => x.slug !== t.slug).slice(0, 3)
    return (
      <>
        <PageHero
          eyebrow="Fence Material Guide"
          title={t.pageTitle ?? `${t.name} Fencing in ${CITY.name}`}
          description={t.description}
          crumbs={[
            { label: 'Fence Types', to: '/fence-types' },
            { label: t.name },
          ]}
          right={<CallbackForm />}
        />
        <SponsorStrip />

        <section className="bg-white section-padding">
          <div className="container-wide grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <div className="aspect-[16/9] rounded-3xl overflow-hidden shadow-medium mb-8">
                <SafeImage
                  src={t.img}
                  alt={`${t.name} fence installation in ${CITY.name}, ${CITY.stateAbbr}`}
                  className="w-full h-full object-cover"
                  sizes="(min-width: 1024px) 66vw, 100vw"
                  widths={[480, 768, 1024, 1280, 1600]}
                  priority
                />
              </div>

              <h2 className="heading-section !text-3xl mb-2">
                The Look, the Cost, the Lifespan
              </h2>
              <div className="heading-accent mb-4" />
              <p className="text-body-lead mb-5">{t.description}</p>
              <p className="text-body-lead mb-8">
                Across {CITY.primaryCounty} and {CITY.secondaryCounty} counties, {t.name.toLowerCase()} installs range from{' '}
                <strong className="text-forest-500">${t.priceLow}–${t.priceHigh} per linear foot</strong> installed , 
                materials and labor included. Exact pricing depends on height, terrain, and gate count.
              </p>

              <h3 className="heading-card !text-2xl mb-4">
                What's Included
              </h3>
              <div className="grid sm:grid-cols-2 gap-3 mb-10">
                {t.features.map((f) => (
                  <div key={f} className="flex items-start gap-2 p-4 rounded-xl bg-warmgray">
                    <Check className="w-4 h-4 text-forest-500 mt-1 flex-shrink-0" />
                    <span className="text-sm text-onyx-700">{f}</span>
                  </div>
                ))}
              </div>

              <h3 className="heading-card !text-2xl mb-4">
                Best Fit For
              </h3>
              <p className="text-body-lead mb-8">{t.bestFor}.</p>

              <Link to="/get-quotes#quote-form" className="btn-primary">
                Get {t.name} Quotes <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <aside className="space-y-5">
              <div className="bg-forest-500 text-white rounded-2xl p-6">
                <div className="text-xs font-bold uppercase tracking-[0.18em] text-oak-300 mb-1">
                  Installed Price Range
                </div>
                <div className="text-3xl font-heading font-bold text-white tracking-tightest">
                  ${t.priceLow}–${t.priceHigh}
                </div>
                <div className="text-sm text-white/70 mt-1">per linear foot</div>
              </div>

              <div className="bg-warmgray rounded-2xl p-6">
                <Wrench className="w-5 h-5 text-forest-500 mb-2" />
                <div className="text-xs font-bold uppercase tracking-[0.18em] text-oak-500 mb-1">
                  Maintenance
                </div>
                <p className="text-sm text-onyx-700">
                  {t.slug === 'vinyl' || t.slug === 'aluminum'
                    ? 'Virtually maintenance-free. Soap and water rinse once a year.'
                    : t.slug === 'chain-link'
                    ? 'Inspect for bent posts after storms; otherwise minimal.'
                    : 'Stain or seal every 2–3 years for maximum lifespan.'}
                </p>
              </div>

              <div className="bg-warmgray rounded-2xl p-6">
                <Calendar className="w-5 h-5 text-forest-500 mb-2" />
                <div className="text-xs font-bold uppercase tracking-[0.18em] text-oak-500 mb-1">
                  Install Timeline
                </div>
                <p className="text-sm text-onyx-700">
                  2–4 days for a typical 180 ft residential install, weather permitting.
                </p>
              </div>

              <div className="bg-warmgray rounded-2xl p-6">
                <Ruler className="w-5 h-5 text-forest-500 mb-2" />
                <div className="text-xs font-bold uppercase tracking-[0.18em] text-oak-500 mb-1">
                  Common Heights
                </div>
                <p className="text-sm text-onyx-700">
                  Most {CITY.name} homeowners install at 6 ft for privacy or 4 ft for open
                  styles. 8 ft is allowed in rear/side yards.
                </p>
              </div>
            </aside>
          </div>
        </section>

        <section className="bg-warmgray section-padding">
          <div className="container-wide">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="label-eyebrow">Compare</span>
              <h2 className="mt-3 heading-section">Other Fence Types</h2>
              <div className="heading-accent mx-auto" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  to={`/fence-types/${r.slug}`}
                  className="group block bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <SafeImage
                      src={r.img}
                      alt={r.name}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="heading-card !text-lg mb-1">
                      {r.name}
                    </h3>
                    <div className="text-sm text-onyx-400">
                      ${r.priceLow}–${r.priceHigh}/ft installed
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <LeadGenSection />
      </>
    )
  }

  return (
    <>
      <PageHero
        eyebrow="Materials & Styles"
        title={`${CITY.name} Fence Types & Styles`}
        description={`Cedar privacy, vinyl, aluminum, chain link, horizontal modern, farm, six material families that cover almost every ${CITY.name} install.`}
        crumbs={[{ label: 'Fence Types' }]}
        right={<CallbackForm />}
      />
      <SponsorStrip />
      <section className="bg-white section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {FENCE_TYPES.map((t, i) => (
              <div
                key={t.slug}
                className="reveal-up"
                style={{ animationDelay: `${i * 0.04}s` }}
              >
                <Link
                  to={`/fence-types/${t.slug}`}
                  className="group block bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-strong transition-all duration-300 border border-warmgray hover:-translate-y-1"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-warmgray">
                    <SafeImage
                      src={t.img}
                      alt={`${t.name} fence in ${CITY.name}`}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-forest-500">
                      ${t.priceLow}–${t.priceHigh}/ft
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="heading-card !text-xl mb-2">
                      {t.name}
                    </h3>
                    <p className="text-sm text-onyx-700/70 leading-relaxed line-clamp-3">
                      {t.description}
                    </p>
                    <div className="mt-4 pt-4 border-t border-warmgray flex items-center justify-between">
                      <span className="text-xs uppercase font-bold tracking-[0.15em] text-oak-500">
                        Best for {t.bestFor.split(',')[0]}
                      </span>
                      <ArrowRight className="w-4 h-4 text-forest-500 group-hover:translate-x-1 transition-transform" />
                    </div>
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
