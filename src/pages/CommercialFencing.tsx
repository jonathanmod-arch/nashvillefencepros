import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Construction,
  Factory,
  Lock,
  Shield,
} from 'lucide-react'
import PageHero from '../components/shared/PageHero'
import CallbackForm from '../components/shared/CallbackForm'
import LeadGenSection from '../components/home/LeadGenSection'
import { useDocumentMeta } from '../hooks/useDocumentMeta'
import { useStructuredData } from '../hooks/useStructuredData'
import { organization, breadcrumbList, serviceSchema } from '../lib/schema'

const USE_CASES = [
  {
    icon: Factory,
    title: 'Industrial & Warehouse',
    body: 'Galvanized chain link perimeters, vinyl-coated black mesh, and barbed-wire top guards for Davidson and Rutherford County industrial sites.',
  },
  {
    icon: Lock,
    title: 'Security & Access Control',
    body: 'High-security fencing with anti-climb mesh, automated slide and swing gates, keypad and card-reader integration.',
  },
  {
    icon: Building2,
    title: 'Multifamily & HOA',
    body: 'Apartment, condo, and HOA-managed perimeter fencing in ornamental aluminum, vinyl, or chain link to spec.',
  },
  {
    icon: Construction,
    title: 'Construction & Temporary',
    body: 'Construction-site fence installation in Nashville with rental panels, barricades, and short-term security perimeters.',
  },
]

const SPECS = [
  { label: 'Common heights', value: '6 ft to 12 ft' },
  { label: 'Materials', value: 'Galvanized chain link, vinyl-coated black mesh, ornamental aluminum, steel palisade' },
  { label: 'Add-ons', value: 'Barbed wire, razor coil, anti-climb mesh, privacy slats, windscreen' },
  { label: 'Gate options', value: 'Cantilever slide, double swing, keypad, card reader, video intercom' },
  { label: 'Service area', value: 'Nashville, Brentwood, Franklin, Hendersonville, Murfreesboro, La Vergne, Lebanon' },
  { label: 'Insurance', value: '$1M+ general liability, workers\' comp on every crew' },
]

export default function CommercialFencing() {
  useDocumentMeta({
    title: 'Commercial Fence Installation Nashville | Security Fencing TN',
    description:
      'Commercial fence installation in Nashville, chain link, security fencing, automated gates, and temporary construction-site fencing. Compare licensed commercial fence contractors and get free Nashville TN quotes.',
    canonical: '/commercial-fencing',
  })

  useStructuredData([
    organization(),
    breadcrumbList([{ label: 'Commercial Fencing' }]),
    serviceSchema({
      slug: '/commercial-fencing',
      name: 'Commercial Fence Installation Nashville',
      description:
        'Commercial and industrial fence installation in Nashville, galvanized chain link, security fencing, automated gates, and construction-site temporary perimeters.',
      audience: 'BusinessAudience',
    }),
  ])

  return (
    <>
      <PageHero
        eyebrow="Commercial Fencing"
        title="Commercial Fence Installation Nashville"
        description="Security fencing installation services in Nashville for industrial sites, warehouses, multifamily properties, and construction perimeters. Compare licensed commercial fence contractors in Davidson and Williamson counties."
        crumbs={[{ label: 'Commercial Fencing' }]}
        right={<CallbackForm />}
      />

      <section className="bg-white section-padding">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="label-eyebrow">Use Cases</span>
            <h2 className="mt-3 heading-section">Built for Tennessee Job Sites</h2>
            <div className="heading-accent mx-auto" />
            <div className="mt-5 text-left space-y-4">
              <p className="text-body-lead">
                From single security perimeters to multi-site rollouts, our network of
                commercial fence installation companies in Nashville handles every common
                material.
              </p>
              <p className="text-body-lead">
                Code-sized chain link around warehouses and lots, ornamental aluminum at
                corporate entries, vinyl around multifamily playgrounds, welded ornamental
                iron at premium properties.
              </p>
              <p className="text-body-lead">
                A reliable commercial fence is essential to protect your property, control
                access, and add aesthetic appeal at the curb. Each top rated contractor in our
                directory pairs high quality materials with the attention to details that turn
                a security fencing solution into long-term peace of mind.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
            {USE_CASES.map((u) => {
              const Icon = u.icon
              return (
                <div
                  key={u.title}
                  className="rounded-2xl bg-warmgray p-6"
                >
                  <div className="w-11 h-11 rounded-lg bg-forest-500 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-oak-300" />
                  </div>
                  <h3 className="heading-label !text-base mb-1.5">{u.title}</h3>
                  <p className="text-sm text-onyx-700/70 leading-relaxed">{u.body}</p>
                </div>
              )
            })}
          </div>

          <div className="grid lg:grid-cols-[1fr_360px] gap-8 items-start mb-14">
            <div>
              <span className="label-eyebrow">Security Fencing Installation Services</span>
              <h2 className="mt-3 heading-card !text-2xl mb-3">
                Specs & coverage
              </h2>
              <p className="text-onyx-700/80 leading-relaxed mb-6">
                Every Nashville commercial fence install is bid against the same spec
                sheet so you can compare on equal footing, material grade, height,
                gate count, and add-ons like privacy slats or anti-climb mesh.
              </p>

              <div className="rounded-2xl border border-[#E2E8F0] overflow-hidden">
                {SPECS.map((s, i) => (
                  <div
                    key={s.label}
                    className={`grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-2 px-5 py-3.5 ${
                      i % 2 === 0 ? 'bg-white' : 'bg-warmgray/50'
                    }`}
                  >
                    <div className="text-xs font-bold uppercase tracking-wider text-onyx-700/60">
                      {s.label}
                    </div>
                    <div className="text-sm text-onyx-700/90">{s.value}</div>
                  </div>
                ))}
              </div>
            </div>

            <aside className="space-y-5 lg:sticky lg:top-24">
              <div className="rounded-2xl bg-forest-500 text-white p-6 relative overflow-hidden">
                <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-oak-400/15 blur-3xl" />
                <div className="relative">
                  <div className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-oak-400 mb-2">
                    <Shield className="w-3.5 h-3.5" /> Free RFP review
                  </div>
                  <h3 className="font-heading font-black text-white text-xl tracking-tightest leading-tight mb-2">
                    Have a spec sheet already?
                  </h3>
                  <p className="text-sm text-white/80 leading-relaxed mb-5">
                    Upload your drawings or RFP and we'll route it to commercial fence
                    contractors who fit the scope and timeline.
                  </p>
                  <Link
                    to="/get-quotes#quote-form"
                    className="block text-center bg-oak-400 hover:bg-oak-300 text-forest-500 font-semibold text-sm px-5 py-3 rounded-lg transition-colors"
                  >
                    Get Commercial Quotes
                  </Link>
                </div>
              </div>

              <div className="rounded-2xl border border-[#E2E8F0] bg-white p-6">
                <h3 className="heading-label !text-base mb-3">Also covered</h3>
                <ul className="space-y-2 text-sm text-onyx-700/80">
                  {[
                    'Dumpster enclosure fencing',
                    'Storage yard perimeters',
                    'Stadium & venue temporary installs',
                    'Solar-farm and substation security',
                    'Sports court and ball-stop fencing',
                  ].map((x) => (
                    <li key={x} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-forest-500 mt-1 flex-shrink-0" />
                      {x}
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>

          <div className="rounded-2xl bg-warmgray p-6 md:p-8">
            <div className="grid md:grid-cols-[1fr_auto] gap-5 items-center">
              <div>
                <h3 className="heading-card !text-xl mb-2">
                  Looking for residential fence installation in Nashville TN?
                </h3>
                <p className="text-sm text-onyx-700/70 leading-relaxed max-w-xl">
                  Our residential directory covers wood privacy, vinyl, aluminum, chain link, horizontal cedar, pet/invisible, pool safety, and wrought iron fence installation.
                </p>
              </div>
              <Link to="/contractors" className="btn-secondary whitespace-nowrap">
                Browse Residential Pros <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <LeadGenSection />
    </>
  )
}
