import { useEffect, useRef, useState, RefObject } from 'react'
import { Star } from 'lucide-react'
import { STATS } from '../../data/siteData'

function useInViewOnce(ref: RefObject<HTMLElement>, threshold = 0.3): boolean {
  const [inView, setInView] = useState(false)
  useEffect(() => {
    if (inView) return
    const el = ref.current
    if (!el) return
    if (typeof IntersectionObserver === 'undefined') {
      setInView(true)
      return
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [ref, threshold, inView])
  return inView
}

function useCountUp(target: number, durationMs = 1400, start = false) {
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
  }, [target, durationMs, start])
  return value
}

type Stat = (typeof STATS)[number] & { prefix?: string }

function StatItem({ stat, inView }: { stat: Stat; inView: boolean }) {
  const value = useCountUp(stat.value, 1500, inView)
  const display = Math.round(value).toLocaleString()
  return (
    <div className="text-center">
      <div className="font-heading font-black text-forest-500 tracking-tightest leading-none text-4xl">
        {stat.prefix}
        {display}
        {stat.suffix}
      </div>
      <div className="mt-3 font-body font-medium text-onyx-700/80 text-sm leading-snug max-w-[220px] mx-auto">
        {stat.label}
      </div>
    </div>
  )
}

export default function TrustBar() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInViewOnce(ref, 0.3)
  return (
    <section className="bg-white border-y border-warmgray">
      <div ref={ref} className="container-wide py-12 md:py-16">
        <div
          className={`flex items-center justify-center gap-3 mb-10 md:mb-14 ${
            inView ? 'reveal-up' : 'opacity-0'
          }`}
        >
          <div className="flex items-center gap-0.5">
            {[0, 1, 2, 3, 4].map((i) => (
              <Star key={i} className="w-[18px] h-[18px] fill-oak-400 text-oak-400" />
            ))}
          </div>
          <span className="font-body text-onyx-700 text-[15px] md:text-[16px]">
            Rated 4.9/5 by Nashville homeowners
          </span>
        </div>

        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-6 ${
            inView ? 'reveal-up' : 'opacity-0'
          }`}
          style={inView ? { animationDelay: '0.1s' } : undefined}
        >
          {STATS.map((s) => (
            <StatItem key={s.label} stat={s as Stat} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  )
}
