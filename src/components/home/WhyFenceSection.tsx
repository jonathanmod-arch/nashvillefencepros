import { Eye, Shield, Sparkles, PawPrint, Droplets, TrendingUp } from 'lucide-react'
import { BENEFITS } from '../../data/siteData'
import { IMAGES } from '../../data/imageUrls'
import SafeImage from '../shared/SafeImage'
import { CITY } from '../../config/city'

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  'eye-off': Eye,
  shield: Shield,
  sparkles: Sparkles,
  paw: PawPrint,
  droplet: Droplets,
  'trending-up': TrendingUp,
}

export default function WhyFenceSection() {
  return (
    <section className="bg-warmgray section-padding">
      <div className="container-wide">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-14 items-center mb-14 lg:mb-16">
          <div>
            <span className="label-eyebrow">Why Homeowners Choose Us</span>
            <h2 className="mt-3 heading-section">
              Why {CITY.name} Homeowners Install Fences
            </h2>
            <div className="heading-accent" />
            <div className="mt-6 space-y-4">
              <p className="text-body-lead">
                From acreage in {CITY.secondaryCounty} County to urban infill in East {CITY.name}, the right
                fence does more than mark a line, it solves a specific problem.
              </p>
              <p className="text-body-lead">
                A high quality fence is essential to protect your property, frame the yard, and
                add aesthetic appeal, whether that's a wooden fence for backyard privacy or
                aluminum around a pool.
              </p>
              <p className="text-body-lead">
                The fence contractor crews in our directory match the right fence styles and
                materials to your lot, at competitive prices, with the attention to details
                that turn a fencing solution into peace of mind.
              </p>
            </div>
          </div>

          <div className="relative reveal-up" style={{ animationDelay: '0.1s' }}>
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
              className="absolute -bottom-5 left-4 sm:left-8 bg-white rounded-2xl shadow-strong px-6 py-5 max-w-[260px] reveal-up"
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {BENEFITS.map((b, i) => {
            const Icon = ICONS[b.icon] ?? Shield
            return (
              <div
                key={b.title}
                className="reveal-up group bg-white rounded-xl p-6 shadow-soft hover:shadow-medium hover:-translate-y-0.5 transition-all duration-300 border border-warmgray hover:border-forest-100"
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                <div className="w-11 h-11 rounded-lg bg-forest-50 flex items-center justify-center group-hover:bg-forest-500 transition-colors mb-4">
                  <Icon className="w-5 h-5 text-forest-500 group-hover:text-oak-300 transition-colors" />
                </div>
                <h3 className="heading-label !text-[17px] mb-1.5">{b.title}</h3>
                <p className="font-body text-[13.5px] text-onyx-700/70 leading-relaxed">{b.body}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
