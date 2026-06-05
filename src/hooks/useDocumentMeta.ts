import { useEffect } from 'react'

type Meta = {
  title: string
  description?: string
  canonical?: string
  noindex?: boolean
}

const SITE_URL = 'https://nashvillefenceguide.com'

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
    const prevTitle = document.title
    document.title = title

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
    ogTitle.setAttribute('content', title)

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
