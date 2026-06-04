import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, Menu, X, ChevronDown } from 'lucide-react'
import { COMPANY, FENCE_TYPES } from '../../data/siteData'

const NAV_LINKS = [
  { to: '/cost-guide', label: 'Cost Guide' },
  { to: '/permits', label: 'Permits & Rules' },
  { to: '/neighborhoods', label: 'Neighborhoods' },
  { to: '/contractors', label: 'Find a Pro' },
  { to: '/resources', label: 'Resources' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [typesOpen, setTypesOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setTypesOpen(false)
  }, [location.pathname])

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-forest-500 text-white text-xs">
        <div className="container-wide flex items-center justify-between py-2">
          <p className="hidden sm:block tracking-wide">
            Nashville's #1 Fence Resource & Contractor Referral Platform
          </p>
          <a
            href={`tel:${COMPANY.phoneRaw}`}
            className="flex items-center gap-1.5 font-semibold hover:text-oak-300 transition-colors"
          >
            <Phone className="w-3.5 h-3.5" /> Call {COMPANY.phone}
          </a>
        </div>
      </div>

      <div
        className={`transition-all duration-300 ${
          scrolled
            ? 'bg-white/90 backdrop-blur-md shadow-soft'
            : 'bg-white'
        }`}
      >
        <div className="container-wide flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-lg bg-forest-500 flex items-center justify-center group-hover:bg-forest-600 transition-colors">
              <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-oak-300" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M3 21V7l3-3 3 3v14M9 21V7l3-3 3 3v14M15 21V7l3-3 3 3v14M2 11h20M2 17h20" />
              </svg>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-display font-bold text-forest-500 text-lg tracking-tightest">
                Nashville Fence Pros
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-oak-500">
                Trusted Local Resource
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            <div
              className="relative"
              onMouseEnter={() => setTypesOpen(true)}
              onMouseLeave={() => setTypesOpen(false)}
            >
              <button className="flex items-center gap-1 px-3.5 py-2 text-sm font-semibold text-onyx-700 hover:text-forest-500 transition-colors">
                Fence Types <ChevronDown className="w-3.5 h-3.5" />
              </button>
              <AnimatePresence>
                {typesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 pt-2 w-72"
                  >
                    <div className="bg-white rounded-xl shadow-strong border border-warmgray p-2">
                      {FENCE_TYPES.map((t) => (
                        <Link
                          key={t.slug}
                          to={`/fence-types/${t.slug}`}
                          className="flex items-center justify-between px-3 py-2.5 rounded-md hover:bg-warmgray group"
                        >
                          <div>
                            <div className="text-sm font-semibold text-onyx-700 group-hover:text-forest-500">
                              {t.name}
                            </div>
                            <div className="text-xs text-onyx-400">
                              ${t.priceLow}–${t.priceHigh}/linear ft
                            </div>
                          </div>
                          <ChevronDown className="w-4 h-4 -rotate-90 text-onyx-300 group-hover:text-forest-500" />
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {NAV_LINKS.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  `px-3.5 py-2 text-sm font-semibold transition-colors ${
                    isActive ? 'text-forest-500' : 'text-onyx-700 hover:text-forest-500'
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Link to="/get-quotes" className="btn-primary !py-2.5 !px-5">
              Get Free Quotes
            </Link>
          </div>

          <button
            className="lg:hidden p-2 rounded-md text-onyx-700"
            onClick={() => setMobileOpen((s) => !s)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-white border-t border-warmgray overflow-hidden"
          >
            <div className="container-wide py-4 flex flex-col gap-1">
              <div className="py-2">
                <div className="text-xs uppercase font-bold tracking-[0.18em] text-oak-500 mb-2">
                  Fence Types
                </div>
                {FENCE_TYPES.map((t) => (
                  <Link
                    key={t.slug}
                    to={`/fence-types/${t.slug}`}
                    className="block py-2 text-sm font-semibold text-onyx-700"
                  >
                    {t.name}
                  </Link>
                ))}
              </div>
              <div className="border-t border-warmgray pt-2">
                {NAV_LINKS.map((l) => (
                  <NavLink
                    key={l.to}
                    to={l.to}
                    className="block py-2.5 text-sm font-semibold text-onyx-700"
                  >
                    {l.label}
                  </NavLink>
                ))}
              </div>
              <Link to="/get-quotes" className="btn-primary mt-3">
                Get Free Quotes
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
