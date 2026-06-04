import { motion } from 'framer-motion'
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
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="label-eyebrow">Why Homeowners Choose Us</span>
          <h2 className="mt-3 heading-section">
            Why Nashville Homeowners Install Fences
          </h2>
          <p className="mt-4 text-body-lead">
            From acreage in Williamson County to urban infill in East Nashville, the right fence
            does more than mark a line — it solves a specific problem.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {BENEFITS.map((b, i) => {
            const Icon = ICONS[b.icon] ?? Shield
            return (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group bg-white rounded-2xl p-7 shadow-soft hover:shadow-medium hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-forest-100"
              >
                <div className="w-12 h-12 rounded-xl bg-forest-50 flex items-center justify-center group-hover:bg-forest-500 transition-colors mb-5">
                  <Icon className="w-6 h-6 text-forest-500 group-hover:text-oak-300 transition-colors" />
                </div>
                <h3 className="text-lg font-display font-bold text-forest-500 mb-2">
                  {b.title}
                </h3>
                <p className="text-sm text-onyx-500 leading-relaxed">{b.body}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
