import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube } from 'lucide-react'
import { COMPANY, FENCE_TYPES, NEIGHBORHOODS } from '../../data/siteData'

export default function Footer() {
  return (
    <footer className="bg-onyx-700 text-onyx-100">
      <div className="container-wide pt-14 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-md bg-forest-500 flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-oak-300" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M3 21V7l3-3 3 3v14M9 21V7l3-3 3 3v14M15 21V7l3-3 3 3v14M2 11h20M2 17h20" />
                </svg>
              </div>
              <span className="font-heading font-bold text-white text-base tracking-tightest">
                {COMPANY.name}
              </span>
            </div>
            <p className="text-[13px] text-onyx-200 leading-relaxed mb-5 max-w-sm">
              Nashville's most trusted resource for fence installation. We connect homeowners with vetted local pros and arm you with the data to choose well.
            </p>
            <div className="space-y-2 text-[13px]">
              <a href={`tel:${COMPANY.phoneRaw}`} className="flex items-center gap-2.5 text-onyx-100 hover:text-oak-300 transition-colors">
                <Phone className="w-3.5 h-3.5 text-oak-400" /> {COMPANY.phone}
              </a>
              <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-2.5 text-onyx-100 hover:text-oak-300 transition-colors">
                <Mail className="w-3.5 h-3.5 text-oak-400" /> {COMPANY.email}
              </a>
              <div className="flex items-center gap-2.5 text-onyx-200">
                <MapPin className="w-3.5 h-3.5 text-oak-400" /> {COMPANY.address}
              </div>
            </div>
            <div className="flex items-center gap-2 mt-5">
              {[Facebook, Instagram, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social"
                  className="w-8 h-8 rounded-md border border-onyx-500 flex items-center justify-center hover:bg-forest-500 hover:border-forest-500 transition-all"
                >
                  <Icon className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-white font-heading font-bold text-[11px] uppercase tracking-[0.22em] mb-4">
              Fence Types
            </h4>
            <ul className="space-y-2 text-[13px]">
              {FENCE_TYPES.map((t) => (
                <li key={t.slug}>
                  <Link to={`/fence-types/${t.slug}`} className="text-onyx-200 hover:text-oak-300 transition-colors">
                    {t.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-white font-heading font-bold text-[11px] uppercase tracking-[0.22em] mb-4">
              Pricing & Permits
            </h4>
            <ul className="space-y-2 text-[13px]">
              <li><Link to="/cost-guide" className="text-onyx-200 hover:text-oak-300 transition-colors">Nashville Cost Guide</Link></li>
              <li><Link to="/cost-guide" className="text-onyx-200 hover:text-oak-300 transition-colors">Interactive Calculator</Link></li>
              <li><Link to="/permits" className="text-onyx-200 hover:text-oak-300 transition-colors">Metro Permit Rules</Link></li>
              <li><Link to="/permits" className="text-onyx-200 hover:text-oak-300 transition-colors">Height Limits by Yard</Link></li>
              <li><Link to="/permits" className="text-onyx-200 hover:text-oak-300 transition-colors">Pool Fence Code</Link></li>
              <li><Link to="/permits" className="text-onyx-200 hover:text-oak-300 transition-colors">Historic Overlays</Link></li>
              <li><Link to="/resources" className="text-onyx-200 hover:text-oak-300 transition-colors">Resource Center</Link></li>
              <li><Link to="/advertise" className="text-oak-300 hover:text-oak-400 font-semibold transition-colors">Advertise With Us →</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-white font-heading font-bold text-[11px] uppercase tracking-[0.22em] mb-4">
              Neighborhoods
            </h4>
            <ul className="grid grid-cols-2 gap-x-3 gap-y-2 text-[13px]">
              {NEIGHBORHOODS.slice(0, 10).map((n) => (
                <li key={n.slug}>
                  <Link to={`/neighborhoods/${n.slug}`} className="text-onyx-200 hover:text-oak-300 transition-colors">
                    {n.name}
                  </Link>
                </li>
              ))}
            </ul>
            <Link to="/neighborhoods" className="inline-block mt-3 text-[10px] font-bold uppercase tracking-[0.22em] text-oak-400 hover:text-oak-300">
              View All Areas →
            </Link>
          </div>
        </div>

        <div className="mt-14 pt-10 border-t border-onyx-500">
          <h4 className="text-white text-[12px] font-bold uppercase tracking-[0.24em] mb-8">
            Nashville Fence Quick Facts
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            <div>
              <h5 className="text-white font-heading font-bold text-[14px] mb-3 tracking-tightest">
                Average Fence Costs
              </h5>
              <p className="text-[13px] text-onyx-300 leading-relaxed">
                Wood: $3,300–$6,750 · Vinyl: $4,800–$7,200 · Aluminum: $4,500–$7,800 · Chain Link: $1,800–$3,900 · Wrought Iron: $5,700–$9,750
              </p>
            </div>
            <div>
              <h5 className="text-white font-heading font-bold text-[14px] mb-3 tracking-tightest">
                Nashville Permit Rules
              </h5>
              <p className="text-[13px] text-onyx-300 leading-relaxed">
                Most residential fences under 6 ft do not require a Metro Nashville permit. Fences in historic overlays may require additional approval. Always check with Metro Nashville Planning.
              </p>
            </div>
            <div>
              <h5 className="text-white font-heading font-bold text-[14px] mb-3 tracking-tightest">
                Height Regulations
              </h5>
              <p className="text-[13px] text-onyx-300 leading-relaxed">
                Front yard: max 3.5 ft (solid) or 4 ft (open). Rear/side yard: max 8 ft. Corner lots have visibility triangle requirements. HOA rules may be more restrictive.
              </p>
            </div>
            <div>
              <h5 className="text-white font-heading font-bold text-[14px] mb-3 tracking-tightest">
                Before You Install
              </h5>
              <p className="text-[13px] text-onyx-300 leading-relaxed">
                Call Tennessee 811 before digging. Get a property survey to confirm boundary lines. Check HOA CC&Rs for approved fence styles and colors. Notify neighbors as a courtesy.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-onyx-500 bg-onyx-700">
        <div className="container-wide py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <p className="text-[12px] text-onyx-300 leading-relaxed max-w-4xl">
            <span className="text-white font-semibold">Disclaimer:</span> NashvilleFencePros.com is an independent local fence information and contractor referral platform created to help homeowners make informed fencing decisions. We are not a licensed contractor. Always verify permits and regulations with Metro Nashville directly.
          </p>
          <p className="text-[12px] text-onyx-300 whitespace-nowrap">
            © {new Date().getFullYear()} NashvilleFencePros.com
          </p>
        </div>
      </div>
    </footer>
  )
}
