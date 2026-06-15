import { Link } from 'react-router-dom'
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  Clock,
  Hammer,
  Shield,
  Wrench,
} from 'lucide-react'
import PageHero from '../components/shared/PageHero'
import SponsorStrip from '../components/shared/SponsorStrip'
import CallbackForm from '../components/shared/CallbackForm'
import LeadGenSection from '../components/home/LeadGenSection'
import { useDocumentMeta } from '../hooks/useDocumentMeta'
import { useStructuredData } from '../hooks/useStructuredData'
import { organization, breadcrumbList, serviceSchema } from '../lib/schema'
import { CITY } from '../config/city'

const REPAIR_MATERIALS = [
  {
    name: 'Wood Fence Repair',
    keywords: 'Cedar, pressure-treated pine, picket repair',
    common: [
      'Leaning or sunken posts',
      'Rotted bottoms / picket replacement',
      'Storm-damaged sections',
      'Re-staining & sealing after repair',
    ],
    price: '$8–$22 / linear ft',
  },
  {
    name: 'Chain Link Fence Repair',
    keywords: 'Galvanized, vinyl-coated, wire fencing supplies',
    common: [
      'Bent or downed posts',
      'Stretched or torn mesh',
      'Gate alignment & latch fixes',
      'Tension wire and bottom rail repairs',
    ],
    price: '$6–$14 / linear ft',
  },
  {
    name: 'Vinyl Fence Repair',
    keywords: 'PVC panels, post sleeves, latch hardware',
    common: [
      'Cracked or yellowed panels',
      'Wind-damaged caps and post tops',
      'Loose pickets and rail brackets',
      'Concrete-set post replacement',
    ],
    price: '$12–$28 / linear ft',
  },
  {
    name: 'Aluminum & Iron Fence Repair',
    keywords: `Ornamental aluminum, wrought iron fence repair ${CITY.name}`,
    common: [
      'Rust spotting and repaint',
      'Bent rails and finials',
      'Welded picket repair',
      'Gate hinge & operator service',
    ],
    price: '$14–$36 / linear ft',
  },
  {
    name: 'Pet & Invisible Fence Repair',
    keywords: 'Boundary wire breaks, transmitter / collar issues',
    common: [
      'Buried boundary wire breaks',
      'Transmitter or surge damage',
      'Collar receiver replacement',
      'Containment retraining',
    ],
    price: '$140–$520 / visit',
  },
]

const WHEN_TO_REPAIR_VS_REPLACE = [
  {
    title: 'Repair makes sense when…',
    bullets: [
      'Less than 20% of the run is damaged',
      'Posts are still sound, only panels need work',
      'Fence is under 10 years old',
      'Hardware (gates, latches, hinges) is the failure point',
    ],
  },
  {
    title: 'Replace when…',
    bullets: [
      'Posts are leaning or rotted at the base across multiple sections',
      'Wood fence is 15+ years old with widespread weathering',
      'Code or HOA rules have changed and the existing fence is out of compliance',
      'Repair quote exceeds 60% of replacement cost',
    ],
  },
]

export default function Repair() {
  useDocumentMeta({
    title: `Fence Repair in ${CITY.name} ${CITY.stateAbbr}`,
    description: `${CITY.name} fence repair for wood, vinyl, chain link, aluminum, wrought iron, and pet fences. Compare licensed ${CITY.name} fence repair companies and get free repair estimates.`,
    canonical: '/repair',
  })

  useStructuredData([
    organization(),
    breadcrumbList([{ label: 'Fence Repair' }]),
    serviceSchema({
      slug: '/repair',
      name: `Fence Repair ${CITY.name} ${CITY.stateAbbr}`,
      description: `Wood, vinyl, chain link, aluminum, wrought iron, and pet fence repair services across ${CITY.name} ${CITY.stateAbbr}.`,
      priceLow: 4,
      priceHigh: 36,
      unitCode: 'FOT',
    }),
  ])

  return (
    <>
      <PageHero
        eyebrow={`${CITY.name} Fence Repair`}
        title={`Fence Repair ${CITY.name} ${CITY.stateAbbr}`}
        description={`Compare vetted ${CITY.name} fence repair companies for wood, vinyl, chain link, aluminum, wrought iron, and pet fence repairs. Free repair estimates, typically within 24 hours.`}
        crumbs={[{ label: 'Fence Repair' }]}
        right={<CallbackForm />}
      />
      <SponsorStrip />

      <section className="bg-white section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            {[
              { icon: Wrench, label: 'Material-specific crews', body: 'Wood, vinyl, chain link, aluminum, wrought iron, and pet fence specialists in one directory.' },
              { icon: Clock, label: 'Fast response', body: `Most ${CITY.name} fence repair quotes come back within 24–48 hours of submitting a request.` },
              { icon: Shield, label: 'Licensed & insured', body: 'Every repair contractor in our network carries general liability and workers\' comp.' },
              { icon: CheckCircle2, label: 'Repair-first', body: 'We match you with crews who actually do repairs, not just install-only fence companies.' },
            ].map((b) => {
              const Icon = b.icon
              return (
                <div key={b.label} className="rounded-2xl bg-warmgray p-6">
                  <div className="w-11 h-11 rounded-lg bg-forest-500 flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5 text-oak-300" />
                  </div>
                  <h3 className="heading-label !text-base mb-1.5">{b.label}</h3>
                  <p className="text-sm text-onyx-700/70 leading-relaxed">{b.body}</p>
                </div>
              )
            })}
          </div>

          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="label-eyebrow">By Material</span>
            <h2 className="mt-3 heading-section">What We Repair</h2>
            <div className="heading-accent mx-auto" />
            <div className="mt-5 text-left space-y-4">
              <p className="text-body-lead">
                {CITY.name} fence repair pricing varies by material, age, and access. The ranges
                below cover typical residential repairs in {CITY.primaryCounty} and {CITY.secondaryCounty} counties.
              </p>
              <p className="text-body-lead">
                Wooden fence post replacements, vinyl fence panel swaps, aluminum fence section
                rebuilds, chain link stretching, and ornamental iron weld work, all of it
                shows up on the same trucks.
              </p>
              <p className="text-body-lead">
                A good fence company doesn't just patch the failure point. The right contractor
                checks gate hardware, post footings, and adjacent runs so the repair holds up
                and you get the peace of mind that comes with a clean, warrantied job.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-14">
            {REPAIR_MATERIALS.map((m) => (
              <div
                key={m.name}
                className="bg-white rounded-2xl border border-[#E2E8F0] p-6"
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div>
                    <h3 className="heading-card !text-lg mb-1">{m.name}</h3>
                    <p className="text-xs text-onyx-700/60">{m.keywords}</p>
                  </div>
                  <span className="text-sm font-bold text-forest-500 whitespace-nowrap">
                    {m.price}
                  </span>
                </div>
                <ul className="space-y-2 mt-4">
                  {m.common.map((c) => (
                    <li
                      key={c}
                      className="flex items-start gap-2 text-sm text-onyx-700/80"
                    >
                      <Hammer className="w-3.5 h-3.5 text-forest-500 mt-1 flex-shrink-0" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-6 mb-14">
            {WHEN_TO_REPAIR_VS_REPLACE.map((c) => (
              <div
                key={c.title}
                className="rounded-2xl border border-[#E2E8F0] bg-warmgray p-6"
              >
                <h3 className="heading-card !text-lg mb-3">{c.title}</h3>
                <ul className="space-y-2">
                  {c.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-2 text-sm text-onyx-700/80"
                    >
                      <CheckCircle2 className="w-4 h-4 text-forest-500 mt-0.5 flex-shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="rounded-2xl bg-forest-500 text-white p-6 md:p-8 relative overflow-hidden">
            <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-oak-400/15 blur-3xl pointer-events-none" />
            <div className="relative grid md:grid-cols-[1fr_auto] gap-5 items-center">
              <div>
                <div className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-oak-400 mb-2">
                  <AlertTriangle className="w-3.5 h-3.5" /> Storm damage?
                </div>
                <h3 className="font-heading font-black text-white text-xl sm:text-2xl tracking-tightest leading-tight mb-2">
                  Fast-track repair quotes within 24 hours
                </h3>
                <p className="text-sm text-white/75 leading-relaxed max-w-xl">
                  Submit a request with photos and we'll route it to {CITY.name} fence
                  repair crews who can do emergency work, wood, vinyl, chain link,
                  aluminum, or iron.
                </p>
              </div>
              <Link
                to="/get-quotes#quote-form"
                className="inline-flex items-center justify-center gap-2 bg-oak-400 hover:bg-oak-300 text-forest-500 text-sm font-semibold px-5 py-3 rounded-lg transition-colors whitespace-nowrap"
              >
                Get Repair Quotes <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <LeadGenSection />
    </>
  )
}
