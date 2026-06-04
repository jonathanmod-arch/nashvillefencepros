import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Youtube } from 'lucide-react'
import { COMPANY, FENCE_TYPES, NEIGHBORHOODS } from '../../data/siteData'

export default function Footer() {
  return (
    <footer className="bg-onyx-700 text-onyx-100">
      <div className="container-wide py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-10 h-10 rounded-lg bg-forest-500 flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-oak-300" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M3 21V7l3-3 3 3v14M9 21V7l3-3 3 3v14M15 21V7l3-3 3 3v14M2 11h20M2 17h20" />
                </svg>
              </div>
              <span className="font-display font-bold text-white text-lg tracking-tightest">
                {COMPANY.name}
              </span>
            </div>
            <p className="text-sm text-onyx-200 leading-relaxed mb-5">
              Nashville's most trusted resource for fence installation. We connect homeowners with vetted local pros and arm you with the data to choose well.
            </p>
            <div className="space-y-2.5 text-sm">
              <a href={`tel:${COMPANY.phoneRaw}`} className="flex items-center gap-2.5 text-onyx-100 hover:text-oak-300 transition-colors">
                <Phone className="w-4 h-4 text-oak-400" /> {COMPANY.phone}
              </a>
              <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-2.5 text-onyx-100 hover:text-oak-300 transition-colors">
                <Mail className="w-4 h-4 text-oak-400" /> {COMPANY.email}
              </a>
              <div className="flex items-center gap-2.5 text-onyx-200">
                <MapPin className="w-4 h-4 text-oak-400" /> {COMPANY.address}
              </div>
              <div className="flex items-center gap-2.5 text-onyx-200">
                <Clock className="w-4 h-4 text-oak-400" /> {COMPANY.hours}
              </div>
            </div>
            <div className="flex items-center gap-3 mt-5">
              <a href="#" aria-label="Facebook" className="w-9 h-9 rounded-md border border-onyx-500 flex items-center justify-center hover:bg-forest-500 hover:border-forest-500 transition-all">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Instagram" className="w-9 h-9 rounded-md border border-onyx-500 flex items-center justify-center hover:bg-forest-500 hover:border-forest-500 transition-all">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" aria-label="YouTube" className="w-9 h-9 rounded-md border border-onyx-500 flex items-center justify-center hover:bg-forest-500 hover:border-forest-500 transition-all">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-display font-bold text-sm uppercase tracking-[0.2em] mb-5">
              Fence Types
            </h4>
            <ul className="space-y-2.5 text-sm">
              {FENCE_TYPES.map((t) => (
                <li key={t.slug}>
                  <Link to={`/fence-types/${t.slug}`} className="text-onyx-200 hover:text-oak-300 transition-colors">
                    {t.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-display font-bold text-sm uppercase tracking-[0.2em] mb-5">
              Pricing & Permits
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/cost-guide" className="text-onyx-200 hover:text-oak-300 transition-colors">Nashville Cost Guide</Link></li>
              <li><Link to="/cost-guide" className="text-onyx-200 hover:text-oak-300 transition-colors">Interactive Calculator</Link></li>
              <li><Link to="/permits" className="text-onyx-200 hover:text-oak-300 transition-colors">Metro Permit Rules</Link></li>
              <li><Link to="/permits" className="text-onyx-200 hover:text-oak-300 transition-colors">Height Limits</Link></li>
              <li><Link to="/permits" className="text-onyx-200 hover:text-oak-300 transition-colors">Pool Fence Code</Link></li>
              <li><Link to="/permits" className="text-onyx-200 hover:text-oak-300 transition-colors">Historic Overlays</Link></li>
              <li><Link to="/resources" className="text-onyx-200 hover:text-oak-300 transition-colors">Resource Center</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-display font-bold text-sm uppercase tracking-[0.2em] mb-5">
              Neighborhoods
            </h4>
            <ul className="grid grid-cols-2 gap-x-3 gap-y-2.5 text-sm">
              {NEIGHBORHOODS.slice(0, 10).map((n) => (
                <li key={n.slug}>
                  <Link to={`/neighborhoods/${n.slug}`} className="text-onyx-200 hover:text-oak-300 transition-colors">
                    {n.name}
                  </Link>
                </li>
              ))}
            </ul>
            <Link to="/neighborhoods" className="inline-block mt-4 text-xs font-bold uppercase tracking-[0.18em] text-oak-400 hover:text-oak-300">
              View All Areas →
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-10 border-t border-onyx-500">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-3">
              <h4 className="text-oak-400 text-[10px] font-bold uppercase tracking-[0.22em] mb-3">
                Nashville Fence Quick Facts
              </h4>
              <p className="text-xs text-onyx-200 leading-relaxed">
                <strong className="text-white">Average installed cost in Nashville (2026):</strong> $3,300–$7,200 for a typical 150–200 linear ft residential fence.{' '}
                <strong className="text-white">Metro Nashville height limits:</strong> rear/side yards up to 8 ft; front yards limited to 3.5 ft for solid privacy fencing and 4 ft for open-style (picket, aluminum, ornamental).{' '}
                <strong className="text-white">Permits:</strong> not required for standard residential fences under 8 ft outside historic overlays, but always required in flood zones and historic districts (Germantown, parts of East Nashville, Edgefield).{' '}
                <strong className="text-white">Dig-safe:</strong> Tennessee state law requires calling{' '}
                <a href="tel:811" className="text-oak-300 underline">811</a>{' '}
                at least 3 business days before digging post holes — Tennessee 811 will mark public utilities for free.{' '}
                <strong className="text-white">Pool fence code:</strong> Tennessee follows the 2018 ISPSC, requiring a minimum 4 ft barrier with self-closing, self-latching gates around in-ground pools.{' '}
                <strong className="text-white">Average linear-ft pricing:</strong> chain link $12–$22, wood privacy $22–$35, vinyl $32–$48, horizontal cedar $38–$58, ornamental aluminum $38–$62.{' '}
                <strong className="text-white">Most-served neighborhoods:</strong> Belle Meade, Green Hills, East Nashville, Germantown, Brentwood, Franklin, 12 South, Sylvan Park, Hendersonville, Mount Juliet, Hermitage, and Forest Hills.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-onyx-500">
        <div className="container-wide py-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-onyx-300">
            © {new Date().getFullYear()} {COMPANY.name}. All rights reserved. Independent referral resource — not a licensed contractor.
          </p>
          <div className="flex items-center gap-5 text-xs text-onyx-300">
            <a href="#" className="hover:text-oak-300">Privacy</a>
            <a href="#" className="hover:text-oak-300">Terms</a>
            <a href="#" className="hover:text-oak-300">Accessibility</a>
            <a href="#" className="hover:text-oak-300">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
