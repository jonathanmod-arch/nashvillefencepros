import { Link } from 'react-router-dom'
import { ArrowRight, Award, Clock, ShieldCheck, Users } from 'lucide-react'
import { IMAGES } from '../../data/imageUrls'
import SafeImage from '../shared/SafeImage'
import { CITY } from '../../config/city'

type Step = { num: string; title: string; body: string }

const STEPS: Step[] = [
  {
    num: '01',
    title: 'Tell us your project',
    body: 'Share your address, fence type, footage, and timeline. Two minutes, one form.',
  },
  {
    num: '02',
    title: `We match vetted ${CITY.name} pros`,
    body: `Up to 3 licensed ${CITY.name} contractors whose specialties fit your project — hand-picked, not bid out to a queue.`,
  },
  {
    num: '03',
    title: 'Compare detailed quotes',
    body: 'Line-item proposals (materials, labor, gates, permits) within 48 hours. Pick the pro. No obligation.',
  },
]

type TrustBadge = { icon: React.ComponentType<{ className?: string }>; label: string }

const TRUST_BADGES: TrustBadge[] = [
  { icon: ShieldCheck, label: 'Vetted & Licensed' },
  { icon: Users, label: 'Multiple Bids' },
  { icon: Clock, label: '24-hr Response' },
  { icon: Award, label: 'No Lowballers' },
]

export default function HowItWorksSection() {
  return (
    <section className="bg-warmgray section-padding">
      <div className="container-wide">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-14 items-center">
          <div>
            <span className="label-eyebrow">How It Works</span>
            <h2 className="mt-3 heading-section">
              Find a {CITY.name} Fence Pro in 3 Steps
            </h2>
            <div className="heading-accent" />
            <p className="mt-6 text-body-lead">
              One short form, vetted local installers, line-item quotes in 48 hours. No bidding wars, no per-lead fees, no pressure.
            </p>

            <div className="mt-8 space-y-4">
              {STEPS.map((s) => (
                <div
                  key={s.num}
                  className="bg-white rounded-2xl p-6 shadow-soft border border-warmgray flex items-start gap-5"
                >
                  <div className="font-heading font-black text-onyx-700 text-4xl sm:text-5xl tracking-tightest leading-none flex-shrink-0">
                    {s.num}
                  </div>
                  <div className="min-w-0">
                    <h3 className="heading-label !text-[17px] mb-1.5">{s.title}</h3>
                    <p className="font-body text-sm text-onyx-700/70 leading-relaxed">
                      {s.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {TRUST_BADGES.map((b) => {
                const Icon = b.icon
                return (
                  <div
                    key={b.label}
                    className="flex items-center gap-2 bg-white rounded-xl border border-warmgray px-3 py-2.5"
                  >
                    <div className="w-7 h-7 rounded-md bg-forest-50 text-forest-500 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-[12px] font-semibold text-onyx-700 leading-tight">
                      {b.label}
                    </span>
                  </div>
                )
              })}
            </div>

            <Link
              to="/get-quotes#quote-form"
              className="mt-8 inline-flex items-center gap-2 bg-forest-500 hover:bg-forest-600 text-white text-base font-semibold px-6 py-3.5 rounded-lg transition-colors"
            >
              Get Free {CITY.name} Quotes <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div
            className="relative reveal-up pb-16 sm:pb-20 lg:pb-0"
            style={{ animationDelay: '0.1s' }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-strong w-full h-[420px] lg:h-[480px] bg-warmgray">
              <SafeImage
                src={IMAGES.hero}
                alt={`${CITY.nameLower}-fence-installers`}
                className="w-full h-full object-cover"
                sizes="(min-width: 1024px) 45vw, 100vw"
                widths={[640, 768, 1024, 1280, 1600]}
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-forest-500/15 via-transparent to-transparent" />
            </div>

            <div
              className="absolute bottom-0 lg:-bottom-5 left-4 sm:left-8 bg-white rounded-2xl shadow-strong px-6 py-5 max-w-[260px] reveal-up"
              style={{ animationDelay: '0.4s' }}
            >
              <div className="text-[11px] font-semibold text-onyx-400 mb-1">
                Average Project Cost
              </div>
              <div className="text-[38px] font-heading font-black text-forest-500 tracking-tightest leading-none">
                {CITY.heroCardPrice}
              </div>
              <div className="text-[12px] text-onyx-500 mt-1.5">
                {CITY.heroCardSubline}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
