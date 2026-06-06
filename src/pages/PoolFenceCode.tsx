import { Link } from 'react-router-dom'
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  Droplets,
  FileText,
  Ruler,
  Shield,
} from 'lucide-react'
import PageHero from '../components/shared/PageHero'
import CallbackForm from '../components/shared/CallbackForm'
import LeadGenSection from '../components/home/LeadGenSection'
import { useDocumentMeta } from '../hooks/useDocumentMeta'
import { useStructuredData } from '../hooks/useStructuredData'
import {
  organization,
  breadcrumbList,
  articleSchema,
  serviceSchema,
} from '../lib/schema'
import { RESOURCE_PUBLISHED_AT } from '../data/siteData'
import { CITY } from '../config/city'

const CODE_REQUIREMENTS = [
  {
    icon: Ruler,
    title: 'Minimum 4 ft height',
    body: 'The barrier must be at least 48 inches measured from the finished ground on the side away from the pool.',
  },
  {
    icon: Shield,
    title: 'Vertical clearance ≤ 2 inches',
    body: 'Bottom of the fence to grade cannot exceed 2" (4" if the surface is solid like a concrete slab).',
  },
  {
    icon: Ruler,
    title: 'Openings ≤ 4 inches',
    body: 'No opening anywhere in the barrier may allow passage of a 4-inch sphere, picket spacing, lattice, gates, all of it.',
  },
  {
    icon: FileText,
    title: 'Self-closing, self-latching gate',
    body: 'Latch release must be at least 54" above grade, on the pool side, with the gate swinging away from the pool.',
  },
  {
    icon: AlertTriangle,
    title: 'No climb-aid horizontals',
    body: 'Horizontal members on the outside face spaced under 45" apart effectively become a ladder, code-non-compliant.',
  },
  {
    icon: Droplets,
    title: 'House-as-barrier rule',
    body: 'If the home forms part of the barrier, doors leading to the pool need alarms or self-closing self-latching mechanisms.',
  },
]

const COMMON_VIOLATIONS = [
  'Chain link mesh with diamond openings larger than 1.75"',
  'Picket fence with spacing wider than 4"',
  'Gate that closes but does not self-latch',
  'Gate latch installed under 54" above grade',
  'Decorative horizontal rails under 45" apart (climbable)',
  'Bottom of fence sitting more than 2" off grade',
  'Pool gate that swings inward (toward pool) instead of outward',
  'House sliding door without alarm or self-closing hardware',
]

const APPROVED_MATERIALS = [
  { name: 'Powder-coated aluminum (4 ft+)', note: `Most common ${CITY.name} code-compliant choice. Vertical pickets, narrow spacing.` },
  { name: 'Mesh pool fence (removable)', note: 'Black polyester mesh on aluminum poles. Often used as a secondary inner barrier.' },
  { name: 'Glass panel fence', note: 'Tempered glass on stainless posts. Premium look, full visibility, fully code-compliant when sized right.' },
  { name: 'Vinyl picket (4 ft+, < 4" spacing)', note: 'Must use the narrow-picket profile, not standard 6" privacy spacing.' },
]

export default function PoolFenceCode() {
  useDocumentMeta({
    title: `Pool Fence Code ${CITY.name} ${CITY.stateAbbr} | ISPSC Compliance Guide 2026`,
    description: `Pool fence code requirements in ${CITY.name} ${CITY.stateAbbr}, ${CITY.state} ISPSC barrier rules, minimum height, gate latch, common inspection failures, and how to install a pool fence that passes the first time.`,
    canonical: '/pool-fence-code',
  })

  useStructuredData([
    organization(),
    breadcrumbList([{ label: 'Pool Fence Code' }]),
    articleSchema({
      slug: '/pool-fence-code',
      title: `${CITY.name} Pool Fence Code & ISPSC Compliance Guide`,
      description: `${CITY.state} pool fence code requirements, ${CITY.permitOffice.shortName} inspection rules, common violations, approved materials, and the permit process for residential pool barriers.`,
      category: 'Compliance',
      image: `${CITY.siteUrl}/og.jpg`,
      publishedAt: RESOURCE_PUBLISHED_AT,
    }),
    serviceSchema({
      slug: '/pool-fence-code',
      name: `ISPSC-Compliant Pool Fence Installation in ${CITY.name}`,
      description: `Pool fence installation that meets ${CITY.state} ISPSC barrier code on the first inspection, aluminum, mesh, and glass options.`,
    }),
  ])

  return (
    <>
      <PageHero
        eyebrow="Pool Fence Compliance"
        title={`Pool Fence Code ${CITY.name} ${CITY.stateAbbr}`}
        description={`${CITY.state} adopted the ${CITY.poolBarrierCode} pool barrier code. Here's every requirement that matters for ${CITY.name} homeowners installing or replacing a pool fence, plus the violations ${CITY.permitOffice.shortName} inspectors flag most often.`}
        crumbs={[{ label: 'Pool Fence Code' }]}
        right={<CallbackForm />}
      />

      <section className="bg-white section-padding">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="label-eyebrow">ISPSC 2018</span>
            <h2 className="mt-3 heading-section">Six Requirements That Matter Most</h2>
            <div className="heading-accent mx-auto" />
            <p className="mt-4 text-body-lead">
              Tennessee enforces the 2018 International Swimming Pool and Spa Code at the
              state level.{' '}
              <a
                href="https://www.nashville.gov/departments/codes/construction-and-permits/building-permits-central/fence"
                target="_blank"
                rel="noopener noreferrer"
                className="text-forest-500 underline underline-offset-4 hover:text-forest-600"
              >
                Metro Nashville Codes
              </a>{' '}
              applies it to every residential pool installation and every pool-barrier
              replacement. For how the same rules apply outside Nashville,{' '}
              <a
                href="https://tnfencerules.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-forest-500 underline underline-offset-4 hover:text-forest-600"
              >
                tnfencerules.com
              </a>{' '}
              summarises pool-barrier requirements across Tennessee.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
            {CODE_REQUIREMENTS.map((r) => {
              const Icon = r.icon
              return (
                <div key={r.title} className="bg-warmgray rounded-2xl p-6">
                  <div className="w-11 h-11 rounded-lg bg-forest-500 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-oak-300" />
                  </div>
                  <h3 className="heading-label !text-base mb-1.5">{r.title}</h3>
                  <p className="text-sm text-onyx-700/70 leading-relaxed">{r.body}</p>
                </div>
              )
            })}
          </div>

          <div className="grid lg:grid-cols-2 gap-6 mb-14">
            <div className="rounded-2xl border border-red-100 bg-red-50/40 p-6">
              <div className="flex items-center gap-2 mb-3">
                <AlertTriangle className="w-5 h-5 text-red-600" />
                <h3 className="heading-card !text-lg">Common {CITY.name} Inspection Failures</h3>
              </div>
              <p className="text-sm text-onyx-700/70 mb-4 leading-relaxed">
                These are the violations Metro inspectors flag most often on pool-fence
                final inspections.
              </p>
              <ul className="space-y-2">
                {COMMON_VIOLATIONS.map((v) => (
                  <li key={v} className="flex items-start gap-2 text-sm text-onyx-700/85">
                    <span className="text-red-600 mt-0.5">×</span>
                    {v}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-forest-100 bg-forest-50/40 p-6">
              <div className="flex items-center gap-2 mb-3">
                <CheckCircle2 className="w-5 h-5 text-forest-500" />
                <h3 className="heading-card !text-lg">Code-Compliant Materials in {CITY.name}</h3>
              </div>
              <p className="text-sm text-onyx-700/70 mb-4 leading-relaxed">
                Materials Metro inspectors approve consistently when installed to spec.
              </p>
              <ul className="space-y-3">
                {APPROVED_MATERIALS.map((m) => (
                  <li key={m.name}>
                    <div className="text-sm font-semibold text-onyx-700">{m.name}</div>
                    <div className="text-xs text-onyx-700/70 mt-0.5">{m.note}</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-warmgray rounded-2xl p-6 md:p-8 mb-12">
            <h3 className="heading-card !text-xl mb-4">Permit & Inspection Process</h3>
            <ol className="space-y-3 text-sm text-onyx-700/85">
              {[
                'Submit fence design with Metro Codes when permit is required (any pool barrier installed alongside a new in-ground pool needs a Codes review).',
                'Schedule rough inspection after posts are set but before gate hardware install.',
                'Schedule final inspection after the gate is hung and self-latch is installed.',
                'Inspector measures: barrier height, opening size, latch height, gate swing direction, climbability of horizontals.',
                'If you fail, you have 30 days to correct and re-inspect, usually at no additional fee.',
              ].map((step, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-forest-500 text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
          </div>

          <div className="rounded-2xl bg-forest-500 text-white p-6 md:p-8 relative overflow-hidden">
            <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-oak-400/15 blur-3xl pointer-events-none" />
            <div className="relative grid md:grid-cols-[1fr_auto] gap-5 items-center">
              <div>
                <div className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-oak-400 mb-2">
                  Pass first inspection
                </div>
                <h3 className="font-heading font-black text-white text-xl sm:text-2xl tracking-tightest leading-tight mb-2">
                  Hire a {CITY.name} pool-fence installer who knows the code
                </h3>
                <p className="text-sm text-white/75 leading-relaxed max-w-xl">
                  Our pool-safety category lists {CITY.name} installers who have done 50+
                  code-compliant pool barriers and have a 100% first-inspection pass rate.
                </p>
              </div>
              <Link
                to="/contractors"
                className="inline-flex items-center justify-center gap-2 bg-oak-400 hover:bg-oak-300 text-forest-500 text-sm font-semibold px-5 py-3 rounded-lg transition-colors whitespace-nowrap"
              >
                Find Pool-Fence Pros <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="mt-8 grid sm:grid-cols-2 gap-4 text-sm">
            <Link
              to="/fence-types/pool-safety"
              className="block bg-white border border-[#E2E8F0] rounded-xl p-5 hover:border-forest-500 transition-colors"
            >
              <div className="font-heading font-bold text-forest-500 mb-1">
                Pool fence pricing per linear foot →
              </div>
              <div className="text-onyx-700/70 text-xs">
                See aluminum / mesh / glass pool fence cost ranges in {CITY.name}.
              </div>
            </Link>
            <Link
              to="/permits"
              className="block bg-white border border-[#E2E8F0] rounded-xl p-5 hover:border-forest-500 transition-colors"
            >
              <div className="font-heading font-bold text-forest-500 mb-1">
                {CITY.name} fence permits & rules →
              </div>
              <div className="text-onyx-700/70 text-xs">
                Metro height limits, dig-safe 811, and historic overlay requirements.
              </div>
            </Link>
          </div>
        </div>
      </section>

      <LeadGenSection />
    </>
  )
}
