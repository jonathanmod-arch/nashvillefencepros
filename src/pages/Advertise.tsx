import { useMemo, useState } from 'react'
import {
  ArrowRight,
  BarChart3,
  Check,
  Clipboard,
  ClipboardCheck,
  Globe2,
  Mail,
  MapPin,
  Phone,
  Search,
  Star,
  TrendingUp,
  Users,
} from 'lucide-react'
import { COMPANY } from '../data/siteData'
import { useDocumentMeta } from '../hooks/useDocumentMeta'
import { useStructuredData } from '../hooks/useStructuredData'
import {
  organization,
  breadcrumbList,
  webPageSchema,
} from '../lib/schema'

type Plan = {
  name: string
  price: string
  blurb: string
  features: string[]
  cta: string
  ctaTo?: string
  highlight?: 'popular' | 'best' | 'premium'
  dark?: boolean
}

const PLANS: Plan[] = [
  {
    name: 'Premium Listing',
    price: '$99',
    blurb: 'Get noticed with a standout listing and direct lead forwarding.',
    features: [
      'Enhanced directory listing',
      'Lead forwarding to your inbox',
      'Priority placement in search results',
      'Contact button on listing',
    ],
    cta: 'Get Started',
  },
  {
    name: 'Category Feature',
    price: '$249',
    blurb: 'Own your service category and capture more leads in your specialty.',
    features: [
      'Featured placement in your category',
      'Lead forwarding to your inbox',
      'Company showcase article on blog',
      'Enhanced directory listing',
      '"Featured" badge on your card',
    ],
    cta: 'Get Started',
    highlight: 'popular',
  },
  {
    name: 'Directory Feature',
    price: '$349',
    blurb:
      'Maximum visibility across the platform — homepage, directory, and blog.',
    features: [
      'Homepage featured contractor spot',
      'Directory page featured placement',
      'Enhanced listing page',
      'Lead forwarding to your inbox',
      'Company showcase article on blog',
      'Priority support',
    ],
    cta: 'Get Started',
    highlight: 'best',
    dark: true,
  },
  {
    name: 'Homepage Sponsor',
    price: '$499',
    blurb:
      'Maximum brand exposure with a dedicated sponsor banner on the homepage.',
    features: [
      'Dedicated homepage sponsor banner',
      'Logo + tagline + CTA link',
      'Seen by every homepage visitor',
      'Monthly performance report',
      'Lead forwarding to your inbox',
      'Company showcase article on blog',
    ],
    cta: 'Contact Us',
    highlight: 'premium',
  },
]

const SERVICES = [
  {
    icon: Search,
    name: 'Google My Business Optimization',
    blurb:
      'We audit, optimize, and manage your Google Business Profile so you show up in local map searches across Nashville. Includes photo uploads, review response management, and category optimization.',
    startingAt: '$149/mo',
  },
  {
    icon: Globe2,
    name: 'Website Management',
    blurb:
      'Monthly website maintenance, content updates, speed optimization, and security monitoring. Keep your online presence professional and up to date without lifting a finger.',
    startingAt: '$199/mo',
  },
  {
    icon: BarChart3,
    name: 'Local SEO Services',
    blurb:
      'Get your business ranking for "fence contractor Nashville" and other high-intent keywords. Includes on-page SEO, local citations, backlink building, and monthly ranking reports.',
    startingAt: '$299/mo',
  },
]

const SITE_URL = 'https://nashvillefencelist.com'

const BADGE_CODE = `<a href="${SITE_URL}/contractors" target="_blank" rel="noopener noreferrer" style="display:inline-flex;align-items:center;gap:8px;padding:8px 14px;font-family:system-ui,-apple-system,'Segoe UI',sans-serif;font-size:13px;font-weight:600;text-decoration:none;color:#1B4332;background:#fff;border:1px solid #1B4332;border-radius:9999px;line-height:1;">
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1B4332" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 12l2 2 4-4"/><circle cx="12" cy="12" r="10"/></svg>
  Verified on NashvilleFenceList.com
</a>`

const CARD_CODE = `<a href="${SITE_URL}/contractors" target="_blank" rel="noopener noreferrer" style="display:inline-flex;flex-direction:column;gap:8px;padding:16px 20px;font-family:system-ui,-apple-system,'Segoe UI',sans-serif;text-decoration:none;background:#fff;border:1px solid #E2E8F0;border-radius:12px;max-width:280px;color:#1A1D1E;">
  <div style="display:flex;align-items:center;gap:10px;">
    <div style="width:32px;height:32px;border-radius:6px;background:#1B4332;color:#fff;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:800;letter-spacing:-0.02em;">NF</div>
    <div style="font-size:10px;color:#1A1D1E;opacity:0.55;font-weight:700;letter-spacing:0.15em;text-transform:uppercase;">Verified Pro</div>
  </div>
  <div style="font-size:14px;font-weight:700;color:#1A1D1E;line-height:1.25;">Featured on Nashville Fence List</div>
  <div style="display:flex;align-items:center;gap:6px;font-size:12px;color:#1A1D1E;opacity:0.7;">
    <span style="color:#D4A373;letter-spacing:1px;">★★★★★</span>
    <span>4.9 by Nashville homeowners</span>
  </div>
</a>`

export default function Advertise() {
  useDocumentMeta({
    title: 'Advertise on Nashville Fence List | Lead Gen for Fence Contractors',
    description:
      'Advertise to thousands of Nashville homeowners hiring fence installers. Premium listings, category sponsorships, and homepage placement on the leading Nashville fence directory. From $99/mo, month-to-month.',
    canonical: '/advertise',
  })

  useStructuredData([
    organization(),
    breadcrumbList([{ label: 'Advertise' }]),
    webPageSchema({
      slug: '/advertise',
      title: 'Advertise on Nashville Fence List',
      description:
        'Premium listings, category sponsorships, and homepage placement on the leading Nashville fence directory.',
    }),
  ])
  return (
    <>
      <Hero />
      <Pricing />
      <Services />
      <WidgetSection />
      <ContactSection />
    </>
  )
}

function Hero() {
  return (
    <section className="bg-forest-500 text-white relative overflow-hidden">
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-oak-400/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full bg-forest-700/40 blur-3xl pointer-events-none" />
      <div className="container-wide relative py-16 md:py-20 text-center">
        <span className="label-eyebrow !text-oak-400">Partner With Us</span>
        <h1 className="mt-3 font-heading font-black tracking-tightest leading-none">
          <span className="block text-4xl sm:text-5xl lg:text-6xl text-white">
            Reach Nashville Homeowners
          </span>
          <span className="block text-4xl sm:text-5xl lg:text-6xl text-oak-400 mt-1">
            Ready to Buy
          </span>
        </h1>
        <p className="mt-5 font-body text-white/70 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
          NashvilleFenceList.com connects thousands of Nashville homeowners and
          businesses with fence contractors every month. Get your company in front of
          high-intent buyers.
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl mx-auto">
          <StatCard icon={Users} value="12,000+" label="Monthly visitors" />
          <StatCard icon={MapPin} value="100%" label="Nashville-focused traffic" />
          <StatCard icon={TrendingUp} value="4.8★" label="Avg. contractor rating" />
        </div>
      </div>
    </section>
  )
}

function StatCard({
  icon: Icon,
  value,
  label,
}: {
  icon: React.ComponentType<{ className?: string }>
  value: string
  label: string
}) {
  return (
    <div className="rounded-2xl bg-white/5 border border-white/10 p-6 text-center">
      <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center mx-auto mb-3">
        <Icon className="w-4 h-4 text-oak-400" />
      </div>
      <div className="font-heading font-black text-white text-3xl tracking-tightest leading-none">
        {value}
      </div>
      <div className="font-body text-xs text-white/70 mt-1.5">{label}</div>
    </div>
  )
}

function Pricing() {
  return (
    <section className="bg-white section-padding">
      <div className="container-wide">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="label-eyebrow">Advertising Packages</span>
          <h2 className="mt-3 heading-section">Choose Your Plan</h2>
          <div className="heading-accent mx-auto" />
          <p className="mt-4 text-body-lead">
            All plans are month-to-month with no long-term contracts. Cancel anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
          {PLANS.map((p) => (
            <PlanCard key={p.name} plan={p} />
          ))}
        </div>
      </div>
    </section>
  )
}

function PlanCard({ plan }: { plan: Plan }) {
  const dark = plan.dark
  const wrapper = dark
    ? 'bg-forest-500 text-white border border-forest-500 ring-1 ring-oak-400/40'
    : 'bg-white text-onyx-700 border border-[#E2E8F0]'

  const badgeStyles: Record<NonNullable<Plan['highlight']>, string> = {
    popular: 'bg-oak-400 text-forest-500',
    best: 'bg-oak-400 text-forest-500',
    premium: 'bg-[#1A1D1E] text-white',
  }

  const badgeLabel: Record<NonNullable<Plan['highlight']>, string> = {
    popular: 'Popular',
    best: 'Best Value',
    premium: 'Premium',
  }

  return (
    <div className={`relative rounded-2xl p-6 flex flex-col ${wrapper}`}>
      {plan.highlight && (
        <span
          className={`absolute top-4 right-4 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
            badgeStyles[plan.highlight]
          }`}
        >
          {badgeLabel[plan.highlight]}
        </span>
      )}

      <h3
        className={`font-heading font-bold text-lg tracking-tightest ${
          dark ? 'text-white' : 'text-onyx-700'
        }`}
      >
        {plan.name}
      </h3>
      <div className="mt-2 flex items-baseline gap-1">
        <span
          className={`font-heading font-black text-4xl tracking-tightest ${
            dark ? 'text-white' : 'text-onyx-700'
          }`}
        >
          {plan.price}
        </span>
        <span className={`text-sm ${dark ? 'text-white/60' : 'text-onyx-700/60'}`}>
          /mo
        </span>
      </div>
      <p
        className={`mt-3 font-body text-sm leading-relaxed ${
          dark ? 'text-white/70' : 'text-onyx-700/70'
        }`}
      >
        {plan.blurb}
      </p>

      <ul className="mt-5 space-y-2.5 flex-1">
        {plan.features.map((f) => (
          <li
            key={f}
            className={`flex items-start gap-2 text-sm ${
              dark ? 'text-white/85' : 'text-onyx-700/85'
            }`}
          >
            <span
              className={`mt-0.5 w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 ${
                dark ? 'bg-oak-400 text-forest-500' : 'bg-forest-50 text-forest-500'
              }`}
            >
              <Check className="w-2.5 h-2.5" strokeWidth={3} />
            </span>
            {f}
          </li>
        ))}
      </ul>

      <a
        href="#advertise-contact"
        className={`mt-6 inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold transition-colors ${
          dark
            ? 'bg-oak-400 text-forest-500 hover:bg-oak-300'
            : 'bg-forest-500 text-white hover:bg-forest-600'
        }`}
      >
        {plan.cta}
      </a>
    </div>
  )
}

function Services() {
  return (
    <section className="bg-warmgray section-padding">
      <div className="container-wide">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="label-eyebrow">Additional Services</span>
          <h2 className="mt-3 heading-section">Grow Your Online Presence</h2>
          <div className="heading-accent mx-auto" />
          <p className="mt-4 text-body-lead">
            Beyond directory placement, we offer full-service digital marketing for
            Nashville fence contractors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {SERVICES.map((s) => {
            const Icon = s.icon
            return (
              <div
                key={s.name}
                className="bg-white rounded-2xl border border-[#E2E8F0] p-6 flex flex-col"
              >
                <div className="w-11 h-11 rounded-lg bg-forest-50 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-forest-500" />
                </div>
                <h3 className="font-heading font-bold text-lg text-onyx-700 tracking-tightest mb-2">
                  {s.name}
                </h3>
                <p className="font-body text-sm text-onyx-700/70 leading-relaxed flex-1">
                  {s.blurb}
                </p>
                <div className="mt-5 pt-5 border-t border-[#E2E8F0]">
                  <div className="text-xs text-onyx-700/60">Starting at</div>
                  <div className="font-heading font-bold text-onyx-700 text-lg">
                    {s.startingAt}
                  </div>
                  <a
                    href="#advertise-contact"
                    className="mt-3 inline-flex items-center justify-center gap-1.5 w-full px-4 py-2.5 rounded-lg border border-forest-500 text-forest-500 text-sm font-semibold hover:bg-forest-50 transition-colors"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function WidgetSection() {
  const [variant, setVariant] = useState<'badge' | 'card'>('badge')
  const [copied, setCopied] = useState(false)
  const code = variant === 'badge' ? BADGE_CODE : CARD_CODE

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      /* ignore */
    }
  }

  return (
    <section className="bg-white section-padding">
      <div className="container-wide">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="label-eyebrow">Free Widget</span>
          <h2 className="mt-3 heading-section">Add a Badge to Your Website</h2>
          <div className="heading-accent mx-auto" />
          <p className="mt-4 text-body-lead">
            Show your customers you're a verified Nashville Fence List professional.
            Copy and paste the code anywhere on your website.
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-[#F8F9FA] rounded-2xl border border-[#E2E8F0] p-5">
          <div className="inline-flex p-1 bg-white rounded-lg border border-[#E2E8F0] mb-5">
            <button
              type="button"
              onClick={() => setVariant('badge')}
              className={`px-4 py-1.5 rounded-md text-sm font-semibold transition-colors ${
                variant === 'badge'
                  ? 'bg-forest-500 text-white'
                  : 'text-onyx-700/70 hover:text-onyx-700'
              }`}
            >
              Badge
            </button>
            <button
              type="button"
              onClick={() => setVariant('card')}
              className={`px-4 py-1.5 rounded-md text-sm font-semibold transition-colors ${
                variant === 'card'
                  ? 'bg-forest-500 text-white'
                  : 'text-onyx-700/70 hover:text-onyx-700'
              }`}
            >
              Card
            </button>
          </div>

          <div className="bg-white rounded-xl border border-[#E2E8F0] p-8 flex items-center justify-center mb-4">
            {variant === 'badge' ? <BadgePreview /> : <CardPreview />}
          </div>

          <div className="relative">
            <pre className="bg-[#1A1D1E] text-onyx-100 rounded-xl p-4 pr-24 text-[11.5px] leading-relaxed overflow-x-auto whitespace-pre-wrap break-all font-mono">
              {code}
            </pre>
            <button
              type="button"
              onClick={copy}
              className="absolute top-3 right-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white text-onyx-700 text-xs font-semibold hover:bg-warmgray transition-colors"
              aria-label="Copy embed code"
            >
              {copied ? (
                <>
                  <ClipboardCheck className="w-3.5 h-3.5 text-forest-500" /> Copied
                </>
              ) : (
                <>
                  <Clipboard className="w-3.5 h-3.5" /> Copy
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

function BadgePreview() {
  return (
    <span
      className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-white border border-forest-500 text-forest-500 text-[13px] font-semibold"
      style={{ fontFamily: "system-ui, -apple-system, 'Segoe UI', sans-serif" }}
    >
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M9 12l2 2 4-4" />
        <circle cx="12" cy="12" r="10" />
      </svg>
      Verified on NashvilleFenceList.com
    </span>
  )
}

function CardPreview() {
  return (
    <a
      href="#"
      onClick={(e) => e.preventDefault()}
      className="inline-flex flex-col gap-2 px-5 py-4 bg-white border border-[#E2E8F0] rounded-xl max-w-[280px] no-underline"
      style={{ fontFamily: "system-ui, -apple-system, 'Segoe UI', sans-serif" }}
    >
      <div className="flex items-center gap-2.5">
        <div className="w-8 h-8 rounded-md bg-forest-500 text-white font-bold text-xs flex items-center justify-center">
          NF
        </div>
        <div className="text-[10px] text-onyx-700/55 font-bold uppercase tracking-[0.15em]">
          Verified Pro
        </div>
      </div>
      <div className="text-sm font-bold text-onyx-700 leading-tight">
        Featured on Nashville Fence List
      </div>
      <div className="flex items-center gap-1.5 text-xs text-onyx-700/70">
        <span className="text-oak-400 tracking-wider">★★★★★</span>
        <span>4.9 by Nashville homeowners</span>
      </div>
    </a>
  )
}

function ContactSection() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    interest: '',
    message: '',
  })

  const interestOptions = useMemo(
    () => [
      'Premium Listing — $99/mo',
      'Category Feature — $249/mo',
      'Directory Feature — $349/mo',
      'Homepage Sponsor — $499/mo',
      'Google My Business Optimization',
      'Website Management',
      'Local SEO Services',
      'General inquiry',
    ],
    [],
  )

  const handle =
    (k: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setForm((s) => ({ ...s, [k]: e.target.value }))

  return (
    <section
      id="advertise-contact"
      className="bg-onyx-700 text-white section-padding scroll-mt-24"
    >
      <div className="container-wide grid lg:grid-cols-2 gap-12 items-start">
        <div>
          <span className="block font-body text-sm font-semibold uppercase tracking-widest text-oak-400 mb-3">
            Get In Touch
          </span>
          <h2 className="font-heading font-black text-white text-3xl sm:text-4xl tracking-tightest leading-[1.05] mb-4">
            Ready to Grow Your Business?
          </h2>
          <div className="w-12 h-0.5 bg-oak-400 mb-6" />
          <p className="font-body text-lg text-white/70 leading-relaxed mb-8">
            Fill out the form and we'll reach out within one business day to discuss
            the best options for your company.
          </p>

          <div className="space-y-2.5 mb-8">
            <a
              href={`mailto:${COMPANY.email}`}
              className="flex items-center gap-3 text-sm text-white/80 hover:text-oak-400 transition-colors"
            >
              <span className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                <Mail className="w-4 h-4 text-oak-400" />
              </span>
              {COMPANY.email}
            </a>
            <a
              href={`tel:${COMPANY.phoneRaw}`}
              className="flex items-center gap-3 text-sm text-white/80 hover:text-oak-400 transition-colors"
            >
              <span className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                <Phone className="w-4 h-4 text-oak-400" />
              </span>
              {COMPANY.phone}
            </a>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <div className="font-heading font-bold text-white text-sm mb-3">
              Why advertise with us?
            </div>
            <ul className="space-y-2.5 text-sm text-white/80">
              {[
                '100% Nashville-focused, high-intent traffic',
                'No long-term contracts — month-to-month',
                'Dedicated account support',
                'Real lead forwarding, not just impressions',
              ].map((line) => (
                <li key={line} className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-oak-400 mt-1 flex-shrink-0" />
                  {line}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-strong p-6 md:p-8 text-onyx-700">
          {submitted ? (
            <div className="text-center py-12">
              <div className="w-14 h-14 rounded-full bg-forest-500 mx-auto flex items-center justify-center mb-4">
                <Check className="w-7 h-7 text-white" strokeWidth={2.5} />
              </div>
              <h3 className="font-heading font-black text-onyx-700 text-2xl tracking-tightest mb-2">
                Inquiry received
              </h3>
              <p className="text-onyx-700/70 max-w-sm mx-auto text-sm leading-relaxed">
                Thanks for reaching out. We'll respond within one business day to walk
                you through the right plan for your business.
              </p>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault()
                setSubmitted(true)
              }}
              className="space-y-4"
            >
              <h3 className="font-heading font-bold text-lg text-onyx-700 mb-4">
                Advertising Inquiry
              </h3>

              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Your Name" required>
                  <input
                    required
                    value={form.name}
                    onChange={handle('name')}
                    placeholder="Jane Smith"
                    className="ad-input"
                  />
                </Field>
                <Field label="Company Name" required>
                  <input
                    required
                    value={form.company}
                    onChange={handle('company')}
                    placeholder="Your Fence Co."
                    className="ad-input"
                  />
                </Field>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Email" required>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={handle('email')}
                    placeholder="jane@yourco.com"
                    className="ad-input"
                  />
                </Field>
                <Field label="Phone">
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={handle('phone')}
                    placeholder="(615) 555-0100"
                    className="ad-input"
                  />
                </Field>
              </div>

              <Field label="I'm interested in…" required>
                <select
                  required
                  value={form.interest}
                  onChange={handle('interest')}
                  className="ad-input"
                >
                  <option value="">Select an option</option>
                  {interestOptions.map((o) => (
                    <option key={o} value={o}>
                      {o}
                    </option>
                  ))}
                </select>
              </Field>

              <Field label="Message">
                <textarea
                  rows={4}
                  value={form.message}
                  onChange={handle('message')}
                  placeholder="Tell us a bit about your business and goals…"
                  className="ad-input resize-y"
                />
              </Field>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 bg-forest-500 hover:bg-forest-600 text-white text-base font-semibold px-5 py-3.5 rounded-lg transition-colors"
              >
                Send Inquiry <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-xs text-onyx-700/50 text-center">
                We'll respond within one business day. No spam. Ever.
              </p>
            </form>
          )}
        </div>
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
