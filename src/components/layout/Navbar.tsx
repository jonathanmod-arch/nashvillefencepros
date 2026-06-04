import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, Menu, X, ChevronDown } from 'lucide-react'
import { COMPANY, FENCE_TYPES } from '../../data/siteData'

const NAV_LINKS = [
  { to: '/cost-guide', label: 'Costs & Pricing' },
  { to: '/permits', label: 'Permits & Rules' },
  { to: '/repair', label: 'Fence Repair' },
  { to: '/contractors', label: 'Find a Pro' },
  { to: '/neighborhoods', label: 'Neighborhoods' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [typesOpen, setTypesOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
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
      <div className="bg-forest-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2 flex items-center justify-between text-xs font-body">
          <p className="hidden sm:block">
            Nashville's #1 Fence Resource & Contractor Referral Platform
          </p>
          <a
            href={`tel:${COMPANY.phoneRaw}`}
            className="flex items-center gap-1 font-semibold hover:text-oak-400 transition-colors"
          >
            <Phone className="w-3 h-3" /> {COMPANY.phone}
          </a>
        </div>
      </div>

      <div
        className={`transition-all duration-300 ${
          scrolled
            ? 'bg-white shadow-sm border-b border-[#E2E8F0]'
            : 'bg-white/95 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded bg-forest-500 flex items-center justify-center group-hover:bg-forest-600 transition-colors">
              <span className="font-heading font-bold text-sm text-white">NF</span>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-heading font-bold text-onyx-700 text-base leading-tight">
                Nashville
              </span>
              <span className="font-heading font-bold text-forest-500 text-base leading-tight -mt-1">
                FencePros
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            <div
              className="relative"
              onMouseEnter={() => setTypesOpen(true)}
              onMouseLeave={() => setTypesOpen(false)}
            >
              <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-onyx-700 hover:text-forest-500 transition-colors">
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
                          <ChevronDown className="w-3.5 h-3.5 -rotate-90 text-onyx-300 group-hover:text-forest-500" />
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {NAV_LINKS.map((l) => (
              <NavLink
                key={l.label}
                to={l.to}
                className={({ isActive }) =>
                  `px-3 py-2 text-sm font-medium transition-colors ${
                    isActive ? 'text-forest-500' : 'text-onyx-700 hover:text-forest-500'
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/get-quotes"
              className="bg-forest-500 hover:bg-forest-600 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
            >
              Get Fence Quotes
            </Link>
          </div>

          <button
            className="lg:hidden flex items-center justify-center w-11 h-11 -mr-2 rounded-md text-onyx-700 hover:bg-warmgray transition-colors"
            onClick={() => setMobileOpen((s) => !s)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
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
            className="lg:hidden bg-white border-t border-[#E2E8F0] overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-col gap-1">
              <div className="py-2">
                <div className="text-[10px] uppercase font-bold tracking-[0.22em] text-oak-500 mb-2">
                  Fence Types
                </div>
                {FENCE_TYPES.map((t) => (
                  <Link
                    key={t.slug}
                    to={`/fence-types/${t.slug}`}
                    className="block py-2 text-sm font-medium text-onyx-700"
                  >
                    {t.name}
                  </Link>
                ))}
              </div>
              <div className="border-t border-warmgray pt-2">
                {NAV_LINKS.map((l) => (
                  <NavLink
                    key={l.label}
                    to={l.to}
                    className="block py-2.5 text-sm font-medium text-onyx-700"
                  >
                    {l.label}
                  </NavLink>
                ))}
              </div>
              <Link
                to="/get-quotes"
                className="bg-forest-500 hover:bg-forest-600 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors text-center mt-3"
              >
                Get Fence Quotes
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
