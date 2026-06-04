import { Link } from 'react-router-dom'
import { Phone, ArrowRight } from 'lucide-react'
import { COMPANY } from '../../data/siteData'

export default function StickyMobileCTA() {
  return (
    <div
      className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-[#E2E8F0] shadow-[0_-4px_16px_rgba(0,0,0,0.08)]"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
    >
      <div className="container-wide flex items-center gap-2 px-4 py-3">
        <a
          href={`tel:${COMPANY.phoneRaw}`}
          className="flex-1 inline-flex items-center justify-center gap-2 h-12 rounded-lg border border-forest-500 bg-white text-forest-500 font-semibold text-sm transition-colors active:bg-forest-50"
          aria-label={`Call ${COMPANY.phone}`}
        >
          <Phone className="w-4 h-4" /> Call
        </a>
        <Link
          to="/get-quotes"
          className="flex-1 inline-flex items-center justify-center gap-2 h-12 rounded-lg bg-forest-500 text-white font-semibold text-sm transition-colors active:bg-forest-600"
          aria-label="Get a free fence quote"
        >
          Free Quote <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  )
}
