import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { STATS } from '../../data/siteData'

function useCountUp(target: number, decimals = 0, durationMs = 1400, start = false) {
  const [value, setValue] = useState(0)
  const startedRef = useRef(false)
  useEffect(() => {
    if (!start || startedRef.current) return
    startedRef.current = true
    const startTime = performance.now()
    let raf = 0
    const tick = (t: number) => {
      const elapsed = t - startTime
      const progress = Math.min(elapsed / durationMs, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(target * eased)
      if (progress < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [target, durationMs, start, decimals])
  return value
}

function StatItem({ stat, inView }: { stat: typeof STATS[number]; inView: boolean }) {
  const value = useCountUp(stat.value, stat.decimals ?? 0, 1500, inView)
  const display =
    stat.decimals !== undefined
      ? value.toFixed(stat.decimals)
      : Math.round(value).toLocaleString()
  return (
    <div className="text-center">
      <div className="text-4xl md:text-5xl font-display font-bold text-forest-500 tracking-tightest">
        {display}
        <span className="text-oak-500">{stat.suffix}</span>
      </div>
      <div className="mt-2 text-xs md:text-sm uppercase font-semibold tracking-[0.15em] text-onyx-400">
        {stat.label}
      </div>
    </div>
  )
}

export default function TrustBar() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.4 })
  return (
    <section className="bg-white border-y border-warmgray">
      <div ref={ref} className="container-wide py-10 md:py-14">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {STATS.map((s) => (
            <StatItem key={s.label} stat={s} inView={inView} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
