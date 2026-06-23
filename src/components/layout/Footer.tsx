import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube } from 'lucide-react'
import { COMPANY, FENCE_TYPES, NEIGHBORHOODS, fenceTypeServiceUrl } from '../../data/siteData'
import { CITY } from '../../config/city'

const POPULAR_NEIGHBORHOOD_SLUGS = [
  'belle-meade',
  'green-hills',
  'east-nashville',
  'brentwood',
  'franklin',
]

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
              {CITY.name}'s most trusted resource for fence installation. We connect homeowners with vetted local pros and arm you with the data to choose well.
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
                  <Link to={fenceTypeServiceUrl(t.slug)} className="text-onyx-200 hover:text-oak-300 transition-colors">
                    {t.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-white font-heading font-bold text-[11px] uppercase tracking-[0.22em] mb-4">
              Pricing & Permits
            </h4>
            <ul className="space-y-2 text-[13px]">
              <li><Link to="/cost-guide" className="text-onyx-200 hover:text-oak-300 transition-colors">{CITY.name} Cost Guide</Link></li>
              <li><Link to="/permits" className="text-onyx-200 hover:text-oak-300 transition-colors">{CITY.permitOffice.shortName} Permit Rules</Link></li>
              <li><Link to="/pool-fence-code" className="text-onyx-200 hover:text-oak-300 transition-colors">Pool Fence Code</Link></li>
              <li><Link to="/historic-overlays" className="text-onyx-200 hover:text-oak-300 transition-colors">Historic Overlays</Link></li>
              <li><Link to="/services/fence-repair" className="text-onyx-200 hover:text-oak-300 transition-colors">Fence Repair {CITY.name}</Link></li>
              <li><Link to="/services/commercial-fencing" className="text-onyx-200 hover:text-oak-300 transition-colors">Commercial Fencing</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-white font-heading font-bold text-[11px] uppercase tracking-[0.22em] mb-4">
              Company
            </h4>
            <ul className="space-y-2 text-[13px]">
              <li><Link to="/about" className="text-onyx-200 hover:text-oak-300 transition-colors">About</Link></li>
              <li><Link to="/resources" className="text-onyx-200 hover:text-oak-300 transition-colors">Resource Center</Link></li>
              <li><Link to="/get-quotes#quote-form" className="text-onyx-200 hover:text-oak-300 transition-colors">Request a Quote</Link></li>
              <li><Link to="/submit-listing" className="text-onyx-200 hover:text-oak-300 transition-colors">Submit Your Business</Link></li>
              <li><Link to="/advertise" className="text-oak-300 hover:text-oak-400 font-semibold transition-colors">Advertise With Us →</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-white font-heading font-bold text-[11px] uppercase tracking-[0.22em] mb-4">
              Service Areas
            </h4>
            <ul className="space-y-2 text-[13px]">
              {POPULAR_NEIGHBORHOOD_SLUGS.map((slug) => {
                const n = NEIGHBORHOODS.find((x) => x.slug === slug)
                if (!n) return null
                return (
                  <li key={n.slug}>
                    <Link to={`/service-areas/${n.slug}`} className="text-onyx-200 hover:text-oak-300 transition-colors">
                      {n.name}
                    </Link>
                  </li>
                )
              })}
            </ul>
            <Link to="/service-areas" className="inline-block mt-3 text-[10px] font-bold uppercase tracking-[0.22em] text-oak-400 hover:text-oak-300">
              View All Areas →
            </Link>
          </div>
        </div>

        {/* Quick Facts is identical boilerplate on every page; wrap it in
            data-nosnippet so Google never picks one of these paragraphs as
            the SERP snippet on a page whose primary content is thinner
            than the footer prose. Users still see it. */}
        <div data-nosnippet className="mt-14 pt-10 border-t border-onyx-500">
          <h4 className="text-white text-[12px] font-bold uppercase tracking-[0.24em] mb-8">
            {CITY.name} Fence Quick Facts
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
                {CITY.name} Permit Rules
              </h5>
              <p className="text-[13px] text-onyx-300 leading-relaxed">
                Most residential fences under 6 ft do not require a {CITY.permitOffice.shortName} permit. Fences in historic overlays may require additional approval. Always check with {CITY.permitOffice.name} directly.
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
                Call {CITY.dig811.name} before digging. Get a property survey to confirm boundary lines. Check HOA CC&Rs for approved fence styles and colors. Notify neighbors as a courtesy.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-onyx-500 bg-onyx-700">
        <div className="container-wide py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          {/* data-nosnippet keeps the boilerplate disclaimer out of Google's
              meta-description fallback. Without this, Google was picking it
              as the SERP snippet on dynamic pages where other prose was
              thinner than the disclaimer paragraph. */}
          <p
            data-nosnippet
            className="text-[12px] text-onyx-300/80 leading-relaxed max-w-4xl"
          >
            {CITY.siteName} is an editorial directory. We do not perform fence
            work. Verify permits with {CITY.permitOffice.name} before any install.
          </p>
          <div className="flex items-center gap-4 text-[12px] text-onyx-300 whitespace-nowrap">
            <Link to="/privacy" className="hover:text-oak-300 transition-colors">
              Privacy
            </Link>
            <Link to="/terms" className="hover:text-oak-300 transition-colors">
              Terms
            </Link>
            <span>© {new Date().getFullYear()} {CITY.domain}</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
