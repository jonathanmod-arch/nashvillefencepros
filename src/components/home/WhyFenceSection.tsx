import { Eye, Shield, Sparkles, PawPrint, Droplets, TrendingUp } from 'lucide-react'
import { BENEFITS } from '../../data/siteData'

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
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="label-eyebrow">Why Homeowners Choose Us</span>
          <h2 className="mt-3 heading-section">
            Why Nashville Homeowners Install Fences
          </h2>
          <div className="heading-accent mx-auto" />
          <div className="mt-5 text-left space-y-4">
            <p className="text-body-lead">
              From acreage in Williamson County to urban infill in East Nashville, the right
              fence does more than mark a line — it solves a specific problem.
            </p>
            <p className="text-body-lead">
              A high quality fence is essential to protect your property, frame the yard, and
              add aesthetic appeal — whether that's a wooden fence for backyard privacy or
              aluminum around a pool.
            </p>
            <p className="text-body-lead">
              The fence contractor crews in our directory match the right fence styles and
              materials to your lot, at competitive prices, with the attention to details
              that turn a fencing solution into peace of mind.
            </p>
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
