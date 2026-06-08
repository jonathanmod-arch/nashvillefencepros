import { Link } from 'react-router-dom'
import { Star, ExternalLink, ArrowRight } from 'lucide-react'
import { SPONSOR } from '../../data/siteData'
import { monthYearString } from '../../lib/resourceTitle'

export default function SponsorStrip() {
  if (!SPONSOR) return null

  const monthYear = monthYearString().toUpperCase()
  const isExternal = SPONSOR.profileHref.startsWith('http')

  const buttonClasses =
    'inline-flex items-center gap-1.5 bg-forest-500 hover:bg-forest-600 text-white text-xs sm:text-sm font-semibold px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg transition-colors whitespace-nowrap'
  const profileButtonContent = (
    <>
      View Profile <ExternalLink className="w-3 h-3" />
    </>
  )

  return (
    <section
      aria-label={`${monthYear} Gold Sponsor: ${SPONSOR.name}`}
      className="bg-warmgray border-b border-[#E2E8F0]"
    >
      <div className="container-wide py-3 sm:py-4">
        <div className="flex items-center gap-3 sm:gap-5">
          <div className="hidden sm:flex flex-col text-[10px] md:text-[11px] font-bold uppercase tracking-[0.18em] text-oak-500 leading-tight flex-shrink-0">
            <div>{monthYear}</div>
            <div>Gold Sponsor</div>
          </div>
          <div
            aria-hidden="true"
            className="sm:hidden text-[9px] font-bold uppercase tracking-[0.15em] text-oak-500 leading-tight flex-shrink-0"
          >
            Sponsor
          </div>
          <div className="hidden sm:block w-px h-9 bg-[#E2E8F0] flex-shrink-0" />

          <div
            aria-hidden="true"
            className="w-9 h-9 sm:w-11 sm:h-11 rounded-lg bg-forest-500 text-white font-heading font-black text-[13px] sm:text-base flex items-center justify-center flex-shrink-0"
          >
            {SPONSOR.initials}
          </div>

          <div className="min-w-0 flex-1">
            <div className="font-heading font-bold text-onyx-700 text-sm sm:text-base leading-tight truncate">
              {SPONSOR.name}
            </div>
            <div className="hidden sm:block text-[11px] md:text-xs text-onyx-700/70 leading-tight truncate mt-0.5">
              {SPONSOR.tagline}
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-1 text-sm flex-shrink-0">
            <Star className="w-3.5 h-3.5 fill-oak-400 text-oak-400" />
            <span className="font-bold text-onyx-700">{SPONSOR.rating}</span>
            <span className="text-onyx-700/60">({SPONSOR.reviews} reviews)</span>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            {isExternal ? (
              <a
                href={SPONSOR.profileHref}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className={buttonClasses}
              >
                {profileButtonContent}
              </a>
            ) : (
              <Link to={SPONSOR.profileHref} className={buttonClasses}>
                {profileButtonContent}
              </Link>
            )}
            <Link
              to="/advertise"
              className="hidden md:inline-flex items-center gap-1 text-xs lg:text-sm font-semibold text-onyx-700/70 hover:text-forest-500 transition-colors whitespace-nowrap"
            >
              Advertise <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
