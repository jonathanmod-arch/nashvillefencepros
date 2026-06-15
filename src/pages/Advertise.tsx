import { useState } from 'react'
import {
  ArrowRight,
  Award,
  CheckCircle2,
  Check,
  ChevronDown,
  Mail,
  Megaphone,
  Phone,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Users,
  Zap,
} from 'lucide-react'
import { COMPANY } from '../data/siteData'
import { useDocumentMeta } from '../hooks/useDocumentMeta'
import { useStructuredData } from '../hooks/useStructuredData'
import {
  organization,
  breadcrumbList,
  webPageSchema,
} from '../lib/schema'
import { CITY } from '../config/city'

type Plan = {
  id: 'free' | 'pro' | 'sponsor'
  name: string
  price: string
  priceSuffix: string
  blurb: string
  features: string[]
  cta: string
  ctaHref: string
  highlight?: boolean
  trialNote?: string
}

const PLANS: Plan[] = [
  {
    id: 'free',
    name: 'Free',
    price: '$0',
    priceSuffix: '/month',
    blurb: 'Get found by local homeowners',
    features: [
      'Business profile page',
      'Contact info displayed (phone + email)',
      'Service area listing',
      'Up to 3 photos',
      'Listed in search results',
      'Monthly profile view stats',
      'Quote request notifications',
    ],
    cta: 'Claim Your Listing',
    ctaHref: '#add-your-business',
  },
  {
    id: 'pro',
    name: 'Pro',
    price: '$79',
    priceSuffix: '/month',
    blurb: 'Unlimited leads + featured placement',
    features: [
      'Everything in Free, plus:',
      'Website link on profile AND search results',
      'Featured placement on city pages',
      'Verified Pro badge on every surface',
      'Priority in search results',
      'Lead analytics dashboard (views, clicks, quotes)',
      'Unlimited photos & portfolio',
      'Google review integration',
    ],
    cta: 'Start Free Trial',
    ctaHref: '#start-pro-trial',
    highlight: true,
    trialNote: 'One fence job pays for 4+ years',
  },
  {
    id: 'sponsor',
    name: 'Sitewide Sponsor',
    price: '$999',
    priceSuffix: '/month',
    blurb: 'Brand-level placement across the entire site',
    features: [
      'Everything in Pro, plus:',
      'Sponsor banner on the home page',
      'Banner across every directory + resource page',
      'Logo on every contractor card',
      'Co-marketing on monthly resource articles',
      'Dedicated landing page',
      'Monthly performance report',
      'Priority support',
    ],
    cta: 'Contact Sales',
    ctaHref: '#add-your-business',
  },
]

// Plans available in the ROI slider. Free isn't on the picker because the
// per-lead math doesn't apply, and Sitewide Sponsor is brand-level rather
// than direct-attribution lead-gen. The calculator stays focused on Pro,
// where the per-lead math is most defensible.
const ROI_PLANS = [
  { id: 'pro', name: 'Pro', price: 79, leads: 12 },
  { id: 'sponsor', name: 'Sitewide Sponsor', price: 999, leads: 40 },
] as const

type PlanId = (typeof ROI_PLANS)[number]['id']

const FAQ_ITEMS = [
  {
    q: 'What does "unlimited leads" mean?',
    a: `Every quote request submitted in your service area on ${CITY.siteName} gets forwarded directly to your inbox. No caps, no per-lead surcharges, no bidding wars with other contractors. The same lead doesn't get sold to 4 other shops. You pay the flat monthly fee — that's it.`,
  },
  {
    q: 'Can I cancel anytime?',
    a: 'Yes. Pro is month-to-month with no contracts. Cancel from your dashboard or email us — your listing reverts to the Free plan automatically and stays live in the directory. No cancellation fee.',
  },
  {
    q: 'Is there a free trial?',
    a: 'Yes — 14 days of full Pro access, no charge. We collect a card to verify the business but nothing is billed until the trial ends. Cancel before day 14 and you pay nothing.',
  },
  {
    q: `How is ${CITY.siteName} different from HomeAdvisor or Angi?`,
    a: 'Three differences. First, the same lead doesn\'t get sold to multiple contractors — you\'re the only Pro who hears about it. Second, no per-lead pricing — one flat monthly fee whether you get 3 leads or 30. Third, we publish editorial content (cost guides, permit walkthroughs, hiring questions) that drives the traffic, not paid ad bidding. Homeowners arrive ready to talk, not after clicking a sponsored result.',
  },
  {
    q: 'How do I claim my existing listing?',
    a: `If your business already appears in our directory (sourced from public Google Business Profile data), use the "claim" link on your profile page to verify ownership. We confirm via the phone number on file. Claim is free — Pro upgrades from there.`,
  },
  {
    q: 'How does the Sitewide Sponsor slot work?',
    a: 'One sponsor at a time per city. Logo and link in the header strip on every page, dedicated landing page, and co-marketing on the monthly resource articles. We don\'t run multiple sponsors against each other — exclusive brand placement. Limited to one slot per category at any given time.',
  },
]

export default function Advertise() {
  useDocumentMeta({
    title: `Advertise on ${CITY.siteName}`,
    description: `Grow your ${CITY.name} fence business with unlimited leads. Free directory listing, $79/mo Pro plan with 14-day free trial, or sitewide brand sponsorship. Month-to-month, cancel anytime.`,
    canonical: '/advertise',
  })

  useStructuredData([
    organization(),
    breadcrumbList([{ label: 'Advertise' }]),
    webPageSchema({
      slug: '/advertise',
      title: `Advertise on ${CITY.siteName}`,
      description: `Free directory listing or $79/mo Pro with unlimited leads in ${CITY.name}.`,
    }),
  ])

  return (
    <>
      <Hero />
      <Pricing />
      <MathStrip />
      <ROICalculator />
      <FAQSection />
      <StartProTrial />
      <AddYourBusiness />
    </>
  )
}

// ---------------------------------------------------------------------------
// Hero
// ---------------------------------------------------------------------------

function Hero() {
  return (
    <section className="bg-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-forest-50/60 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full bg-oak-50/40 blur-3xl" />
      </div>
      <div className="container-wide relative pt-14 pb-10 md:pt-20 md:pb-14 text-center">
        <span className="label-eyebrow">Partner With Us</span>
        <h1 className="mt-3 font-heading font-black tracking-tightest leading-[1.05] text-onyx-700">
          <span className="block text-4xl sm:text-5xl lg:text-6xl">
            Grow Your {CITY.name}
          </span>
          <span className="block text-4xl sm:text-5xl lg:text-6xl text-forest-500 mt-1">
            Fence Business
          </span>
        </h1>
        <p className="mt-5 font-body text-base sm:text-lg text-onyx-700/70 leading-relaxed max-w-2xl mx-auto">
          One simple choice. Unlimited leads. No per-lead fees, no bidding wars.
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
          <HeroCallout
            icon={Zap}
            title="Unlimited Leads"
            body={`Every quote request in your ${CITY.name} area goes straight to you. No caps.`}
          />
          <HeroCallout
            icon={TrendingUp}
            title="Top Placement"
            body={`Featured at the top of your ${CITY.name} city page where homeowners look first.`}
          />
          <HeroCallout
            icon={ShieldCheck}
            title="No Contracts"
            body="Month-to-month. Cancel anytime. Your listing reverts to free automatically."
          />
        </div>
      </div>
    </section>
  )
}

function HeroCallout({
  icon: Icon,
  title,
  body,
}: {
  icon: React.ComponentType<{ className?: string }>
  title: string
  body: string
}) {
  return (
    <div className="text-center">
      <div className="w-11 h-11 rounded-xl bg-forest-50 text-forest-500 flex items-center justify-center mx-auto mb-3">
        <Icon className="w-5 h-5" />
      </div>
      <div className="font-heading font-bold text-onyx-700 text-lg tracking-tightest">
        {title}
      </div>
      <p className="mt-1.5 text-sm text-onyx-700/65 leading-relaxed max-w-xs mx-auto">
        {body}
      </p>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Pricing — three plans
// ---------------------------------------------------------------------------

function Pricing() {
  return (
    <section className="bg-warmgray section-padding">
      <div className="container-wide">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="label-eyebrow">Pricing</span>
          <h2 className="mt-3 heading-section">Pick a Plan</h2>
          <div className="heading-accent mx-auto" />
          <p className="mt-4 text-body-lead">
            Free forever or upgrade to Pro for unlimited leads. Sitewide Sponsor for brand-level placement across every page.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch max-w-6xl mx-auto">
          {PLANS.map((p) => (
            <PlanCard key={p.id} plan={p} />
          ))}
        </div>
      </div>
    </section>
  )
}

function PlanCard({ plan }: { plan: Plan }) {
  const isPro = plan.highlight
  return (
    <div
      className={`relative rounded-2xl p-7 flex flex-col bg-white ${
        isPro
          ? 'border-2 border-forest-500 shadow-medium'
          : 'border border-[#E2E8F0]'
      }`}
    >
      {isPro && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-forest-500 text-white text-[11px] font-bold uppercase tracking-wider">
          Best Value
        </span>
      )}

      <h3 className="font-heading font-bold text-onyx-700 text-2xl tracking-tightest">
        {plan.name}
      </h3>
      <p className="mt-1 text-sm text-onyx-700/65">{plan.blurb}</p>

      <div className="mt-5 flex items-baseline gap-1">
        <span className="font-heading font-black text-5xl text-onyx-700 tracking-tightest">
          {plan.price}
        </span>
        <span className="text-sm text-onyx-700/55">{plan.priceSuffix}</span>
      </div>

      {plan.trialNote && (
        <p className="mt-2 text-sm font-semibold text-forest-500">
          {plan.trialNote}
        </p>
      )}

      <a
        href={plan.ctaHref}
        className={`mt-6 inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3.5 text-sm font-semibold transition-colors ${
          isPro
            ? 'bg-forest-500 text-white hover:bg-forest-600'
            : 'bg-white text-forest-500 border-2 border-forest-500 hover:bg-forest-50'
        }`}
      >
        {plan.cta}
        {isPro && <ArrowRight className="w-4 h-4" />}
      </a>

      <div className="mt-6 pt-6 border-t border-[#E2E8F0]">
        {isPro && (
          <p className="text-xs text-onyx-700/55 mb-3">Everything in Free, plus:</p>
        )}
        <ul className="space-y-2.5">
          {plan.features
            .filter((f) => !f.startsWith('Everything in'))
            .map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm text-onyx-700/85">
                <Check className="w-4 h-4 text-forest-500 flex-shrink-0 mt-0.5" strokeWidth={3} />
                <span>{f}</span>
              </li>
            ))}
        </ul>
      </div>
    </div>
  )
}

// ---------------------------------------------------------------------------
// "The Math is Simple" strip — short ROI summary
// ---------------------------------------------------------------------------

function MathStrip() {
  return (
    <section className="bg-white pt-2 pb-12">
      <div className="container-wide max-w-4xl">
        <div className="rounded-2xl bg-forest-50 border border-forest-100 px-6 py-8 md:px-10 md:py-10 text-center">
          <h3 className="font-heading font-bold text-onyx-700 text-2xl tracking-tightest mb-6">
            The Math is Simple
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <MathStat value="$79" label="Monthly cost" />
            <MathStat value="$4,500" label="Average fence job" />
            <MathStat value="57× ROI" label="From just one job" valueColor="text-forest-500" />
          </div>
          <p className="mt-6 text-sm text-onyx-700/70">
            Close just one Pro lead and {CITY.siteName} pays for itself 57 times over.
          </p>
        </div>
      </div>
    </section>
  )
}

function MathStat({
  value,
  label,
  valueColor = 'text-onyx-700',
}: {
  value: string
  label: string
  valueColor?: string
}) {
  return (
    <div>
      <div className={`font-heading font-black text-4xl tracking-tightest ${valueColor}`}>
        {value}
      </div>
      <div className="text-sm text-onyx-700/60 mt-1">{label}</div>
    </div>
  )
}

// ---------------------------------------------------------------------------
// ROI Calculator — kept from previous implementation, plan options trimmed
// ---------------------------------------------------------------------------

function ROICalculator() {
  const [planId, setPlanId] = useState<PlanId>('pro')
  const [avgTicket, setAvgTicket] = useState(4500)
  const [profitMargin, setProfitMargin] = useState(35)
  const [closeRate, setCloseRate] = useState(30)

  const plan = ROI_PLANS.find((p) => p.id === planId) ?? ROI_PLANS[0]
  const leads = plan.leads

  const newCustomers = leads * (closeRate / 100)
  const monthlyRevenue = newCustomers * avgTicket
  const monthlyProfit = monthlyRevenue * (profitMargin / 100)
  const avgProfitPerJob = avgTicket * (profitMargin / 100)
  const valuePerLead = avgTicket * (closeRate / 100)
  const netMarginPerLead = valuePerLead * (profitMargin / 100)
  const netAfterPlan = monthlyProfit - plan.price
  const roiMultiple = plan.price > 0 ? monthlyProfit / plan.price : 0

  const fmtMoney = (n: number) =>
    n >= 1000 ? `$${Math.round(n).toLocaleString()}` : `$${n.toFixed(2)}`

  const closeFill = ((closeRate - 10) / 80) * 100

  return (
    <section className="bg-onyx-700 text-white section-padding relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-oak-400/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full bg-forest-700/40 blur-3xl" />
      </div>
      <div className="container-wide relative">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="block font-body text-sm font-semibold uppercase tracking-widest text-oak-400 mb-3">
            Lead Value Calculator
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-4xl text-white tracking-tightest leading-[1.05] mb-3">
            What's a {CITY.name} Fence Lead Worth to Your Shop?
          </h2>
          <div className="w-12 h-0.5 bg-oak-400 mx-auto mb-5" />
          <p className="font-body text-base text-white/70">
            Plug in your numbers. We'll show you the actual value of a single lead, your projected monthly revenue, and the profit you'd net before lead-gen costs.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="mb-4">
            <div className="text-xs font-bold uppercase tracking-[0.15em] text-white/70 mb-3 text-center">
              Pick a Plan, drag the sliders below to see your ROI
            </div>
            <div className="grid grid-cols-2 gap-3 max-w-2xl mx-auto">
              {ROI_PLANS.map((p) => {
                const active = p.id === planId
                return (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => setPlanId(p.id)}
                    className={`text-left rounded-2xl border p-4 transition-all ${
                      active
                        ? 'bg-oak-400/15 border-oak-400 ring-2 ring-oak-400/40'
                        : 'bg-white/5 border-white/10 hover:border-white/30 hover:bg-white/10'
                    }`}
                  >
                    <div
                      className={`text-[10px] font-bold uppercase tracking-[0.18em] mb-1 ${
                        active ? 'text-oak-400' : 'text-white/50'
                      }`}
                    >
                      {active ? 'Selected' : 'Plan'}
                    </div>
                    <div className="font-heading font-bold text-white text-base leading-tight">
                      {p.name}
                    </div>
                    <div className="mt-2 flex items-baseline justify-between gap-2">
                      <span className="text-white font-heading font-black text-xl tracking-tightest">
                        ${p.price}
                        <span className="text-xs font-semibold text-white/60 ml-0.5">/mo</span>
                      </span>
                      <span className="text-xs font-semibold text-oak-400">
                        {p.leads}+ leads/mo
                      </span>
                    </div>
                  </button>
                )
              })}
            </div>
          </div>

          <div className="bg-white/5 rounded-2xl p-6 border border-white/10 mb-4">
            <label className="block text-xs font-bold uppercase tracking-[0.15em] text-white/70 mb-3">
              Average ticket per install
            </label>
            <div className="flex items-center gap-2">
              <span className="font-heading font-bold text-oak-400 text-2xl">$</span>
              <input
                type="number"
                value={avgTicket}
                onChange={(e) => setAvgTicket(Math.max(0, Number(e.target.value) || 0))}
                min={0}
                className="roi-input"
              />
            </div>
          </div>

          <div className="bg-white/5 rounded-2xl p-6 border border-white/10 mb-10 space-y-7">
            <div>
              <div className="flex items-baseline justify-between mb-3">
                <div>
                  <div className="text-sm font-semibold text-white">Profit Margin</div>
                  <div className="text-xs text-white/60">Before advertising costs</div>
                </div>
                <div className="text-2xl font-heading font-bold text-oak-400 tracking-tightest">
                  {profitMargin}%
                </div>
              </div>
              <input
                type="range"
                min={0}
                max={100}
                value={profitMargin}
                onChange={(e) => setProfitMargin(Number(e.target.value))}
                className="roi-slider"
                style={{
                  background: `linear-gradient(to right, #D4A373 0%, #D4A373 ${profitMargin}%, rgba(255,255,255,0.15) ${profitMargin}%, rgba(255,255,255,0.15) 100%)`,
                }}
              />
              <div className="flex justify-between text-[10px] text-white/40 mt-1.5">
                <span>0%</span>
                <span>25%</span>
                <span>50%</span>
                <span>75%</span>
                <span>100%</span>
              </div>
            </div>

            <div>
              <div className="flex items-baseline justify-between mb-3">
                <div>
                  <div className="text-sm font-semibold text-white">Close Rate</div>
                  <div className="text-xs text-white/60">Of leads you actually convert</div>
                </div>
                <div className="text-2xl font-heading font-bold text-oak-400 tracking-tightest">
                  {closeRate}%
                </div>
              </div>
              <input
                type="range"
                min={10}
                max={90}
                value={closeRate}
                onChange={(e) => setCloseRate(Number(e.target.value))}
                className="roi-slider"
                style={{
                  background: `linear-gradient(to right, #D4A373 0%, #D4A373 ${closeFill}%, rgba(255,255,255,0.15) ${closeFill}%, rgba(255,255,255,0.15) 100%)`,
                }}
              />
              <div className="flex justify-between text-[10px] text-white/40 mt-1.5">
                <span>10%</span>
                <span>30%</span>
                <span>50%</span>
                <span>70%</span>
                <span>90%</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { label: 'Avg. Profit Per Job', sub: 'Before cost of lead generation', value: fmtMoney(avgProfitPerJob) },
              { label: 'New Customers / Month', sub: 'From these leads', value: Math.round(newCustomers).toLocaleString() },
              { label: 'Actual Value of a Lead', sub: 'Revenue per lead delivered', value: fmtMoney(valuePerLead) },
              { label: 'Net Margin Per Lead', sub: 'Actual value × profit margin', value: fmtMoney(netMarginPerLead) },
              { label: 'Total Monthly Revenue', sub: 'For your fence business', value: fmtMoney(monthlyRevenue) },
              { label: 'Total Monthly Profit', sub: 'Before cost of lead generation', value: fmtMoney(monthlyProfit) },
            ].map((m) => (
              <div key={m.label} className="bg-white rounded-2xl p-6 text-onyx-700 shadow-strong">
                <div className="font-heading font-bold text-onyx-700 text-base leading-tight mb-1">
                  {m.label}
                </div>
                <div className="text-xs text-onyx-700/60 mb-4">{m.sub}</div>
                <div className="text-4xl font-heading font-black text-forest-500 tracking-tightest leading-none">
                  {m.value}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl bg-forest-500 text-white p-6 md:p-8 relative overflow-hidden">
            <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-oak-400/20 blur-3xl pointer-events-none" />
            <div className="relative grid md:grid-cols-[1fr_auto] gap-6 items-center">
              <div>
                <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-oak-400 mb-2">
                  Plan ROI
                </div>
                <div className="font-heading font-black text-white text-2xl md:text-3xl tracking-tightest leading-tight">
                  On the {plan.name} at ${plan.price}/mo, you net{' '}
                  <span className={netAfterPlan >= 0 ? 'text-oak-400' : 'text-white'}>
                    {netAfterPlan >= 0
                      ? fmtMoney(netAfterPlan)
                      : `-${fmtMoney(Math.abs(netAfterPlan))}`}
                  </span>
                  /mo after the listing fee.
                </div>
                <p className="text-sm text-white/75 mt-3 leading-relaxed max-w-2xl">
                  ${Math.round(monthlyProfit).toLocaleString()} projected monthly profit minus the ${plan.price} plan cost. Tap a different plan above to compare.
                </p>
              </div>
              <div className="text-center md:text-right md:border-l md:border-white/15 md:pl-6">
                <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-oak-400 mb-1">
                  Return Multiple
                </div>
                <div className="font-heading font-black text-oak-400 text-5xl md:text-6xl tracking-tightest leading-none">
                  {roiMultiple.toFixed(1)}
                  <span className="text-3xl md:text-4xl">×</span>
                </div>
                <div className="text-xs text-white/60 mt-2">profit ÷ plan cost</div>
              </div>
            </div>
          </div>

          <div className="text-center mt-10">
            <a
              href="#start-pro-trial"
              className="inline-flex items-center justify-center gap-2 bg-oak-400 hover:bg-oak-300 text-forest-500 text-base font-semibold px-6 py-3.5 rounded-lg transition-colors"
            >
              Start Pro Free Trial <ArrowRight className="w-4 h-4" />
            </a>
            <p className="text-xs text-white/50 mt-3">
              Numbers are projections. Actuals depend on your sales process and follow-up speed.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        .roi-input {
          width: 100%;
          padding: 0.625rem 0.875rem;
          border-radius: 0.5rem;
          border: 1px solid rgba(255, 255, 255, 0.18);
          background: rgba(255, 255, 255, 0.04);
          font-size: 18px;
          font-weight: 600;
          color: #fff;
          outline: none;
          transition: all .15s ease;
          font-family: inherit;
        }
        .roi-input:focus {
          border-color: #D4A373;
          background: rgba(255, 255, 255, 0.08);
          box-shadow: 0 0 0 3px rgba(212, 163, 115, 0.15);
        }
        .roi-input::-webkit-outer-spin-button,
        .roi-input::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
        .roi-input[type=number] { -moz-appearance: textfield; }
        .roi-slider {
          width: 100%;
          height: 6px;
          border-radius: 999px;
          outline: none;
          -webkit-appearance: none;
          appearance: none;
          cursor: pointer;
        }
        .roi-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 22px;
          height: 22px;
          background: #D4A373;
          border-radius: 50%;
          cursor: pointer;
          box-shadow: 0 0 0 4px rgba(212, 163, 115, 0.2);
          transition: box-shadow .15s ease;
          border: 2px solid #1A1D1E;
        }
        .roi-slider::-webkit-slider-thumb:hover {
          box-shadow: 0 0 0 6px rgba(212, 163, 115, 0.3);
        }
        .roi-slider::-moz-range-thumb {
          width: 22px;
          height: 22px;
          background: #D4A373;
          border: 2px solid #1A1D1E;
          border-radius: 50%;
          cursor: pointer;
          box-shadow: 0 0 0 4px rgba(212, 163, 115, 0.2);
        }
      `}</style>
    </section>
  )
}

// ---------------------------------------------------------------------------
// FAQ
// ---------------------------------------------------------------------------

function FAQSection() {
  return (
    <section className="bg-white section-padding">
      <div className="container-wide max-w-3xl">
        <div className="text-center mb-10">
          <span className="label-eyebrow">FAQ</span>
          <h2 className="mt-3 heading-section">Frequently Asked Questions</h2>
          <div className="heading-accent mx-auto" />
        </div>

        <div className="space-y-3">
          {FAQ_ITEMS.map((item) => (
            <FAQRow key={item.q} q={item.q} a={item.a} />
          ))}
        </div>
      </div>
    </section>
  )
}

function FAQRow({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="rounded-xl border border-[#E2E8F0] bg-white">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
      >
        <span className="font-heading font-bold text-onyx-700 text-base">{q}</span>
        <ChevronDown
          className={`w-5 h-5 text-forest-500 flex-shrink-0 transition-transform ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>
      {open && (
        <div className="px-5 pb-5 -mt-1 text-sm text-onyx-700/75 leading-relaxed">
          {a}
        </div>
      )}
    </div>
  )
}

// ---------------------------------------------------------------------------
// Start Pro Trial — dedicated Pro signup form
// ---------------------------------------------------------------------------

function StartProTrial() {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [hp, setHp] = useState('')
  const [form, setForm] = useState({
    businessName: '',
    email: '',
    city: CITY.name,
    state: CITY.stateAbbr,
  })

  const set = <K extends keyof typeof form>(k: K, v: (typeof form)[K]) =>
    setForm((s) => ({ ...s, [k]: v }))

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (submitting) return
    setSubmitting(true)
    setError(null)
    try {
      const res = await fetch('/api/notify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          formType: 'pro-trial-start',
          data: form,
          _hp: hp,
        }),
      })
      if (!res.ok) throw new Error('Submission failed')
      setSubmitted(true)
    } catch {
      setError('Sorry, something went wrong. Please try again or email us directly.')
    } finally {
      setSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <section id="start-pro-trial" className="bg-warmgray section-padding">
        <div className="container-wide max-w-xl text-center">
          <div className="bg-white rounded-2xl border border-[#E2E8F0] p-8 md:p-10">
            <div className="w-14 h-14 rounded-full bg-forest-500 mx-auto flex items-center justify-center mb-5">
              <CheckCircle2 className="w-7 h-7 text-white" />
            </div>
            <h2 className="heading-card !text-2xl mb-3">Trial request received</h2>
            <p className="text-sm text-onyx-700/75 leading-relaxed">
              We'll email {form.businessName ? `${form.businessName} at ${form.email}` : form.email}{' '}
              within one business day with the trial activation link and onboarding steps.
              No charge until day 14.
            </p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="start-pro-trial" className="bg-warmgray section-padding">
      <div className="container-wide max-w-xl">
        <div className="text-center mb-8">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-forest-50 text-forest-500 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            14-day free trial
          </span>
          <h2 className="mt-4 heading-section">Start {CITY.siteName} Pro</h2>
          <p className="mt-3 text-body-lead">
            Unlimited leads, featured placement, verified badge.{' '}
            <span className="font-semibold">$79/mo</span> after trial — cancel anytime.
          </p>
        </div>

        <div className="bg-forest-50 border border-forest-100 rounded-2xl p-5 mb-5">
          <ul className="space-y-2 text-sm text-onyx-700/85">
            {[
              `Unlimited leads in your ${CITY.name} area`,
              `Featured at the top of your ${CITY.name} city page`,
              'Verified Pro badge on your profile',
              'One fence job pays for 4+ years',
            ].map((f) => (
              <li key={f} className="flex items-start gap-2">
                <Check className="w-4 h-4 text-forest-500 flex-shrink-0 mt-0.5" strokeWidth={3} />
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>

        <form
          onSubmit={onSubmit}
          className="bg-white rounded-2xl border border-[#E2E8F0] p-6 md:p-8 space-y-4"
        >
          <Field label="Business Name" required>
            <input
              required
              value={form.businessName}
              onChange={(e) => set('businessName', e.target.value)}
              placeholder="Your Fence Company"
              className="ad-input"
            />
          </Field>
          <Field label="Email" required>
            <input
              required
              type="email"
              value={form.email}
              onChange={(e) => set('email', e.target.value)}
              placeholder="you@company.com"
              className="ad-input"
            />
          </Field>
          <div className="grid grid-cols-2 gap-3">
            <Field label="City" required>
              <input
                required
                value={form.city}
                onChange={(e) => set('city', e.target.value)}
                className="ad-input"
              />
            </Field>
            <Field label="State" required>
              <input
                required
                value={form.state}
                onChange={(e) => set('state', e.target.value)}
                className="ad-input"
              />
            </Field>
          </div>

          <input
            type="text"
            name="_hp"
            tabIndex={-1}
            autoComplete="off"
            value={hp}
            onChange={(e) => setHp(e.target.value)}
            className="hidden"
            aria-hidden="true"
          />

          {error && (
            <div className="rounded-lg bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={submitting}
            className="w-full inline-flex items-center justify-center gap-2 bg-forest-500 hover:bg-forest-600 disabled:bg-onyx-700/30 disabled:cursor-not-allowed text-white text-base font-semibold px-5 py-3.5 rounded-lg transition-colors"
          >
            {submitting ? 'Starting…' : (<>Start Free Trial <ArrowRight className="w-4 h-4" /></>)}
          </button>

          <div className="flex items-center justify-center gap-2 text-[11px] text-onyx-700/55 pt-1">
            <ShieldCheck className="w-3.5 h-3.5 text-forest-500" />
            Secure checkout
            <span aria-hidden>·</span>
            Cancel anytime
            <span aria-hidden>·</span>
            No charge for 14 days
          </div>
        </form>
      </div>

      <style>{`
        .ad-input {
          width: 100%;
          padding: 0.75rem 1rem;
          border-radius: 0.5rem;
          border: 1px solid #E2E8F0;
          background: #F8F9FA;
          font-size: 16px;
          color: #1A1D1E;
          outline: none;
          transition: all .15s ease;
          font-family: inherit;
        }
        .ad-input:focus {
          border-color: #1B4332;
          background: #fff;
          box-shadow: 0 0 0 3px rgba(27,67,50,.08);
        }
      `}</style>
    </section>
  )
}

// ---------------------------------------------------------------------------
// Add Your Business — Free signup
// ---------------------------------------------------------------------------

function AddYourBusiness() {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [hp, setHp] = useState('')
  const [form, setForm] = useState({
    businessName: '',
    contactName: '',
    email: '',
    phone: '',
    city: CITY.name,
    state: CITY.stateAbbr,
    website: '',
    about: '',
  })

  const set = <K extends keyof typeof form>(k: K, v: (typeof form)[K]) =>
    setForm((s) => ({ ...s, [k]: v }))

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (submitting) return
    setSubmitting(true)
    setError(null)
    try {
      const res = await fetch('/api/notify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          formType: 'add-your-business-free',
          data: form,
          _hp: hp,
        }),
      })
      if (!res.ok) throw new Error('Submission failed')
      setSubmitted(true)
    } catch {
      setError('Sorry, something went wrong. Please try again or email us directly.')
    } finally {
      setSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <section id="add-your-business" className="bg-white section-padding">
        <div className="container-wide max-w-xl text-center">
          <div className="bg-warmgray rounded-2xl border border-[#E2E8F0] p-8 md:p-10">
            <div className="w-14 h-14 rounded-full bg-forest-500 mx-auto flex items-center justify-center mb-5">
              <CheckCircle2 className="w-7 h-7 text-white" />
            </div>
            <h2 className="heading-card !text-2xl mb-3">Listing request received</h2>
            <p className="text-sm text-onyx-700/75 leading-relaxed">
              We'll review and email {form.email} within two business days with the live listing
              URL and instructions for upgrading to Pro whenever you're ready.
            </p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="add-your-business" className="bg-white section-padding">
      <div className="container-wide grid lg:grid-cols-[1fr_1.1fr] gap-10 items-start">
        <div>
          <h2 className="heading-section">Add Your Fence Business</h2>
          <div className="heading-accent" />
          <p className="mt-4 text-body-lead">
            Don't see your business on {CITY.siteName}? Add it for free and start connecting with
            homeowners searching for fence contractors in your area.
          </p>

          <div className="mt-8 space-y-5">
            <Benefit
              icon={Users}
              title="Reach More Customers"
              body={`Get found by homeowners searching for fence contractors in your ${CITY.name} area. Our SEO-optimized pages rank on Google.`}
            />
            <Benefit
              icon={Award}
              title="Showcase Your Work"
              body="Display your ratings, reviews, photos, and specialties. Stand out from the competition."
            />
            <Benefit
              icon={Megaphone}
              title="Grow Your Business"
              body="Pro listings get featured placement, unlimited leads, and direct notifications. Upgrade anytime."
            />
          </div>

          <div className="mt-8 rounded-2xl bg-warmgray border border-[#E2E8F0] p-5">
            <div className="text-xs font-bold uppercase tracking-[0.15em] text-onyx-700/55 mb-3">
              Free vs Pro
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <div className="font-semibold text-onyx-700 mb-2">Free Listing</div>
                <ul className="space-y-1 text-onyx-700/75">
                  <li>Basic profile</li>
                  <li>Contact info</li>
                  <li>Service area</li>
                  <li>3 photos</li>
                </ul>
              </div>
              <div>
                <div className="font-semibold text-forest-500 mb-2">Pro — $79/mo</div>
                <ul className="space-y-1 text-onyx-700/75">
                  <li>Unlimited leads</li>
                  <li>Featured placement</li>
                  <li>Verified Pro badge</li>
                  <li>Unlimited photos</li>
                  <li>Lead notifications</li>
                  <li>14-day free trial</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <form
          onSubmit={onSubmit}
          className="bg-white rounded-2xl border border-[#E2E8F0] p-6 md:p-8 space-y-4"
        >
          <div>
            <h3 className="font-heading font-bold text-onyx-700 text-xl tracking-tightest">
              Add Your Business — Free
            </h3>
            <p className="mt-1 text-xs text-onyx-700/55">
              No credit card required. Listing live within 2 business days.
            </p>
          </div>

          <Field label="Business Name" required>
            <input
              required
              value={form.businessName}
              onChange={(e) => set('businessName', e.target.value)}
              placeholder="Your Fence Company"
              className="ad-input"
            />
          </Field>
          <Field label="Contact Name" required>
            <input
              required
              value={form.contactName}
              onChange={(e) => set('contactName', e.target.value)}
              placeholder="John Smith"
              className="ad-input"
            />
          </Field>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Field label="Email" required>
              <input
                required
                type="email"
                value={form.email}
                onChange={(e) => set('email', e.target.value)}
                placeholder="you@company.com"
                className="ad-input"
              />
            </Field>
            <Field label="Phone" required>
              <input
                required
                type="tel"
                value={form.phone}
                onChange={(e) => set('phone', e.target.value)}
                placeholder="(615) 123-4567"
                className="ad-input"
              />
            </Field>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <Field label="City" required>
              <input
                required
                value={form.city}
                onChange={(e) => set('city', e.target.value)}
                className="ad-input"
              />
            </Field>
            <Field label="State" required>
              <input
                required
                value={form.state}
                onChange={(e) => set('state', e.target.value)}
                className="ad-input"
              />
            </Field>
          </div>
          <Field label="Website (optional)">
            <input
              type="url"
              value={form.website}
              onChange={(e) => set('website', e.target.value)}
              placeholder="https://yourcompany.com"
              className="ad-input"
            />
          </Field>
          <Field label="Tell us about your business">
            <textarea
              rows={3}
              value={form.about}
              onChange={(e) => set('about', e.target.value)}
              placeholder="Services, materials, years in business…"
              className="ad-input resize-y"
            />
          </Field>

          <input
            type="text"
            name="_hp"
            tabIndex={-1}
            autoComplete="off"
            value={hp}
            onChange={(e) => setHp(e.target.value)}
            className="hidden"
            aria-hidden="true"
          />

          {error && (
            <div className="rounded-lg bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={submitting}
            className="w-full inline-flex items-center justify-center gap-2 bg-forest-500 hover:bg-forest-600 disabled:bg-onyx-700/30 disabled:cursor-not-allowed text-white text-base font-semibold px-5 py-3.5 rounded-lg transition-colors"
          >
            {submitting ? 'Submitting…' : (<>Submit Free Listing <ArrowRight className="w-4 h-4" /></>)}
          </button>

          <div className="flex items-center justify-center gap-3 text-[11px] text-onyx-700/55 pt-1">
            <a href={`mailto:${COMPANY.email}`} className="inline-flex items-center gap-1 hover:text-forest-500">
              <Mail className="w-3.5 h-3.5" /> {COMPANY.email}
            </a>
            <span aria-hidden>·</span>
            <a href={`tel:${COMPANY.phoneRaw}`} className="inline-flex items-center gap-1 hover:text-forest-500">
              <Phone className="w-3.5 h-3.5" /> {COMPANY.phone}
            </a>
          </div>
        </form>
      </div>
    </section>
  )
}

function Benefit({
  icon: Icon,
  title,
  body,
}: {
  icon: React.ComponentType<{ className?: string }>
  title: string
  body: string
}) {
  return (
    <div className="flex items-start gap-3">
      <div className="w-11 h-11 rounded-xl bg-forest-50 text-forest-500 flex items-center justify-center flex-shrink-0">
        <Icon className="w-5 h-5" />
      </div>
      <div>
        <div className="font-heading font-bold text-onyx-700 text-base tracking-tightest">
          {title}
        </div>
        <p className="mt-1 text-sm text-onyx-700/65 leading-relaxed">{body}</p>
      </div>
    </div>
  )
}

function Field({
  label,
  required,
  children,
}: {
  label: string
  required?: boolean
  children: React.ReactNode
}) {
  return (
    <label className="block">
      <span className="block text-xs font-semibold uppercase tracking-[0.15em] text-onyx-700/60 mb-1.5">
        {label}
        {required && <span className="text-oak-500 ml-1">*</span>}
      </span>
      {children}
    </label>
  )
}
