import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Phone, Menu, X, ChevronDown } from 'lucide-react'
import { COMPANY } from '../../data/siteData'
import { SERVICE_BUCKETS, servicesByBucket } from '../../data/services'
import { CITY } from '../../config/city'

const NAV_LINKS = [
  { to: '/cost-guide', label: 'Costs & Pricing' },
  { to: '/permits', label: 'Permits & Rules' },
  { to: '/contractors', label: 'Find a Pro' },
  { to: '/service-areas', label: 'Service Areas' },
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2 flex items-center justify-between text-[11px] sm:text-xs font-body">
          <p className="font-semibold">
            {CITY.hashTagLine}
          </p>
          <a
            href={`tel:${COMPANY.phoneRaw}`}
            className="hidden sm:flex items-center gap-1 font-semibold hover:text-oak-400 transition-colors"
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
          <div className="flex items-center gap-2.5">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-9 h-9 rounded-md bg-forest-500 flex items-center justify-center group-hover:bg-forest-600 transition-colors">
                <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-oak-300" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M3 21V7l3-3 3 3v14M9 21V7l3-3 3 3v14M15 21V7l3-3 3 3v14M2 11h20M2 17h20" />
                </svg>
              </div>
              <div className="hidden lg:flex flex-col leading-tight">
                <span className="font-heading font-bold text-onyx-700 text-base leading-tight">
                  {CITY.name}
                </span>
                <span className="font-heading font-bold text-forest-500 text-base leading-tight -mt-1">
                  FenceGuide
                </span>
              </div>
            </Link>
            <a
              href={`tel:${COMPANY.phoneRaw}`}
              className="lg:hidden inline-flex items-center gap-1.5 font-heading font-bold text-forest-500 text-base hover:text-forest-600 transition-colors"
            >
              <Phone className="w-4 h-4" />
              {COMPANY.phone}
            </a>
          </div>

          <nav className="hidden lg:flex items-center gap-1">
            <div
              className="relative"
              onMouseEnter={() => setTypesOpen(true)}
              onMouseLeave={() => setTypesOpen(false)}
            >
              <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-onyx-700 hover:text-forest-500 transition-colors">
                Services <ChevronDown className="w-3.5 h-3.5" />
              </button>
              <div
                className={`absolute top-full left-0 pt-2 w-72 transition-all duration-150 ${
                  typesOpen
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 -translate-y-1 pointer-events-none'
                }`}
              >
                <div className="bg-white rounded-xl shadow-strong border border-warmgray p-2">
                  {SERVICE_BUCKETS.map((b) => {
                    const count = servicesByBucket(b.slug).length
                    return (
                      <Link
                        key={b.slug}
                        to={`/services/${b.slug}`}
                        className="flex items-center justify-between px-3 py-2.5 rounded-md hover:bg-warmgray group"
                      >
                        <div className="text-sm font-semibold text-onyx-700 group-hover:text-forest-500">
                          {b.name}
                        </div>
                        <div className="flex items-center gap-2 text-xs text-onyx-400 group-hover:text-forest-500">
                          {count}
                          <ChevronDown className="w-3.5 h-3.5 -rotate-90" />
                        </div>
                      </Link>
                    )
                  })}
                  <div className="mt-1 pt-2 border-t border-warmgray">
                    <Link
                      to="/services"
                      className="flex items-center justify-between px-3 py-2.5 rounded-md hover:bg-forest-50 group"
                    >
                      <div className="text-sm font-bold text-forest-500">
                        All services
                      </div>
                      <ChevronDown className="w-3.5 h-3.5 -rotate-90 text-forest-500" />
                    </Link>
                  </div>
                </div>
              </div>
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
              to="/get-quotes#quote-form"
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

      <div
        className={`lg:hidden bg-white border-t border-[#E2E8F0] grid overflow-hidden transition-[grid-template-rows,opacity] duration-200 ease-out ${
          mobileOpen
            ? 'grid-rows-[1fr] opacity-100'
            : 'grid-rows-[0fr] opacity-0'
        }`}
        aria-hidden={!mobileOpen}
      >
        <div className="overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-col gap-1">
            <div className="py-2">
              <div className="text-[10px] uppercase font-bold tracking-[0.22em] text-oak-500 mb-2">
                Services
              </div>
              {SERVICE_BUCKETS.map((b) => {
                const count = servicesByBucket(b.slug).length
                return (
                  <Link
                    key={b.slug}
                    to={`/services/${b.slug}`}
                    className="flex items-center justify-between py-2 text-sm font-medium text-onyx-700"
                    tabIndex={mobileOpen ? 0 : -1}
                  >
                    <span>{b.name}</span>
                    <span className="text-xs text-onyx-400">{count}</span>
                  </Link>
                )
              })}
              <Link
                to="/services"
                className="block mt-2 py-2 text-sm font-bold text-forest-500"
                tabIndex={mobileOpen ? 0 : -1}
              >
                All services →
              </Link>
            </div>
            <div className="border-t border-warmgray pt-2 mt-2">
              {NAV_LINKS.map((l) => (
                <NavLink
                  key={l.label}
                  to={l.to}
                  className="block py-2.5 text-sm font-medium text-onyx-700"
                  tabIndex={mobileOpen ? 0 : -1}
                >
                  {l.label}
                </NavLink>
              ))}
            </div>
            <Link
              to="/get-quotes#quote-form"
              className="bg-forest-500 hover:bg-forest-600 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors text-center mt-3"
              tabIndex={mobileOpen ? 0 : -1}
            >
              Get Fence Quotes
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
