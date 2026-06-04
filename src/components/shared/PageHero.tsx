import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

type Crumb = { label: string; to?: string }

export default function PageHero({
  eyebrow,
  title,
  description,
  crumbs,
}: {
  eyebrow: string
  title: string
  description?: string
  crumbs?: Crumb[]
}) {
  return (
    <section className="relative bg-forest-500 text-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-oak-400/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full bg-forest-700/40 blur-3xl" />
      </div>
      <div className="container-wide relative py-16 md:py-24">
        {crumbs && (
          <nav className="flex items-center gap-1.5 text-xs text-white/70 mb-5">
            <Link to="/" className="hover:text-oak-300">Home</Link>
            {crumbs.map((c, i) => (
              <span key={i} className="flex items-center gap-1.5">
                <ChevronRight className="w-3 h-3" />
                {c.to ? (
                  <Link to={c.to} className="hover:text-oak-300">{c.label}</Link>
                ) : (
                  <span className="text-oak-300">{c.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}
        <span className="text-xs font-bold uppercase tracking-[0.22em] text-oak-400">
          {eyebrow}
        </span>
        <h1 className="mt-3 text-4xl md:text-6xl font-display font-bold tracking-tightest leading-[1.05] text-balance max-w-4xl">
          {title}
        </h1>
        {description && (
          <p className="mt-5 text-white/80 text-lg leading-relaxed max-w-2xl">
            {description}
          </p>
        )}
      </div>
    </section>
  )
}
