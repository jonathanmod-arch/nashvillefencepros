import { useEffect } from 'react'
import { CITY } from '../config/city'

type Meta = {
  title: string
  description?: string
  canonical?: string
  noindex?: boolean
}

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

const SITE_URL = CITY.siteUrl

// Brand suffix appended to every page title for SERP recognition. Derived
// from CITY.siteName so the Charlotte deploy (Charlotte Fence Guide) gets
// the right suffix automatically. Pages whose title already mentions the
// brand (About, Terms, Privacy, Cost Guide, Advertise) are skipped so we
// don't double up.
const TITLE_SUFFIX = ` | ${CITY.siteName}`
function withBrandSuffix(title: string): string {
  if (title.includes(CITY.siteName)) return title
  return `${title}${TITLE_SUFFIX}`
}

function ensureTag<T extends HTMLElement>(
  selector: string,
  create: () => T,
): T {
  let el = document.head.querySelector<T>(selector)
  if (!el) {
    el = create()
    document.head.appendChild(el)
  }
  return el
}

export function useDocumentMeta({
  title,
  description,
  canonical,
  noindex,
}: Meta) {
  useEffect(() => {
    const fullTitle = withBrandSuffix(title)
    const prevTitle = document.title
    document.title = fullTitle

    const descTag = ensureTag<HTMLMetaElement>(
      'meta[name="description"]',
      () => {
        const m = document.createElement('meta')
        m.setAttribute('name', 'description')
        return m
      },
    )
    const prevDesc = descTag.getAttribute('content') ?? ''
    if (description) descTag.setAttribute('content', description)

    const ogTitle = ensureTag<HTMLMetaElement>(
      'meta[property="og:title"]',
      () => {
        const m = document.createElement('meta')
        m.setAttribute('property', 'og:title')
        return m
      },
    )
    const prevOgTitle = ogTitle.getAttribute('content') ?? ''
    ogTitle.setAttribute('content', fullTitle)

    const ogDesc = ensureTag<HTMLMetaElement>(
      'meta[property="og:description"]',
      () => {
        const m = document.createElement('meta')
        m.setAttribute('property', 'og:description')
        return m
      },
    )
    const prevOgDesc = ogDesc.getAttribute('content') ?? ''
    if (description) ogDesc.setAttribute('content', description)

    const canonicalHref = canonical
      ? canonical.startsWith('http')
        ? canonical
        : `${SITE_URL}${canonical}`
      : `${SITE_URL}${window.location.pathname}`
    const canonicalLink = ensureTag<HTMLLinkElement>(
      'link[rel="canonical"]',
      () => {
        const l = document.createElement('link')
        l.setAttribute('rel', 'canonical')
        return l
      },
    )
    const prevCanonical = canonicalLink.getAttribute('href') ?? ''
    canonicalLink.setAttribute('href', canonicalHref)

    let robotsTag: HTMLMetaElement | null = null
    if (noindex) {
      robotsTag = ensureTag<HTMLMetaElement>('meta[name="robots"]', () => {
        const m = document.createElement('meta')
        m.setAttribute('name', 'robots')
        return m
      })
      robotsTag.setAttribute('content', 'noindex,nofollow')
    }

    if (!noindex && typeof window.gtag === 'function') {
      window.gtag('event', 'page_view', {
        page_path: window.location.pathname + window.location.search,
        page_location: canonicalHref,
        page_title: fullTitle,
      })
    }

    return () => {
      document.title = prevTitle
      if (description) descTag.setAttribute('content', prevDesc)
      ogTitle.setAttribute('content', prevOgTitle)
      if (description) ogDesc.setAttribute('content', prevOgDesc)
      canonicalLink.setAttribute('href', prevCanonical)
      if (robotsTag) robotsTag.remove()
    }
  }, [title, description, canonical, noindex])
}
