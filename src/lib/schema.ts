import { COMPANY, FAQS } from '../data/siteData'
import { categoryLabel, type Contractor } from '../data/contractors'

export type SchemaEntity = Record<string, unknown> & {
  '@type': string | string[]
}

const SITE_URL = 'https://nashvillefencelist.com'
const ORG_ID = `${SITE_URL}/#org`
const LOCAL_BUSINESS_ID = `${SITE_URL}/#localbusiness`
const WEBSITE_ID = `${SITE_URL}/#website`

export const siteUrl = (path: string) =>
  path.startsWith('http') ? path : `${SITE_URL}${path}`

const organizationRef = () => ({ '@id': ORG_ID })

export function organization(): SchemaEntity {
  return {
    '@type': 'Organization',
    '@id': ORG_ID,
    name: COMPANY.name,
    url: SITE_URL,
    logo: `${SITE_URL}/og.jpg`,
    telephone: COMPANY.phone,
    email: COMPANY.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Nashville',
      addressRegion: 'TN',
      addressCountry: 'US',
    },
    areaServed: [
      'Nashville, TN',
      'Brentwood, TN',
      'Franklin, TN',
      'Hendersonville, TN',
      'Mount Juliet, TN',
      'Murfreesboro, TN',
      'Belle Meade, TN',
    ],
  }
}

export function platformLocalBusiness(): SchemaEntity {
  return {
    '@type': 'LocalBusiness',
    '@id': LOCAL_BUSINESS_ID,
    name: COMPANY.name,
    image: `${SITE_URL}/og.jpg`,
    telephone: COMPANY.phone,
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Nashville',
      addressRegion: 'TN',
      addressCountry: 'US',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '1386',
    },
  }
}

export function webSiteSchema(): SchemaEntity {
  return {
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: SITE_URL,
    name: COMPANY.name,
    publisher: organizationRef(),
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_URL}/contractors?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  }
}

export type Crumb = { label: string; to?: string }

export function breadcrumbList(crumbs: Crumb[]): SchemaEntity {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      ...crumbs.map((c, i) => ({
        '@type': 'ListItem',
        position: i + 2,
        name: c.label,
        ...(c.to ? { item: siteUrl(c.to) } : {}),
      })),
    ],
  }
}

export function faqPageSchema(faqs: typeof FAQS): SchemaEntity {
  return {
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.a,
      },
    })),
  }
}

const NASHVILLE_AREA_SERVED = [
  { '@type': 'City', name: 'Nashville', address: { '@type': 'PostalAddress', addressRegion: 'TN' } },
  { '@type': 'AdministrativeArea', name: 'Davidson County, TN' },
  { '@type': 'AdministrativeArea', name: 'Williamson County, TN' },
  { '@type': 'AdministrativeArea', name: 'Sumner County, TN' },
  { '@type': 'AdministrativeArea', name: 'Rutherford County, TN' },
]

export function serviceSchema({
  slug,
  name,
  description,
  priceLow,
  priceHigh,
  unitCode = 'FOT',
  audience,
}: {
  slug: string
  name: string
  description: string
  priceLow?: number
  priceHigh?: number
  unitCode?: 'FOT' | 'HUR' | 'PCE'
  audience?: 'BusinessAudience' | 'PeopleAudience'
}): SchemaEntity {
  const service: SchemaEntity = {
    '@type': 'Service',
    '@id': `${SITE_URL}${slug}#service`,
    serviceType: name,
    name,
    description,
    provider: organizationRef(),
    areaServed: NASHVILLE_AREA_SERVED,
  }
  if (priceLow != null && priceHigh != null) {
    service.offers = {
      '@type': 'Offer',
      priceCurrency: 'USD',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        priceCurrency: 'USD',
        minPrice: priceLow,
        maxPrice: priceHigh,
        unitCode,
        referenceQuantity: {
          '@type': 'QuantitativeValue',
          value: 1,
          unitCode,
        },
      },
    }
  }
  if (audience) {
    service.audience = { '@type': audience }
  }
  return service
}

export function articleSchema({
  slug,
  title,
  description,
  category,
  image,
  publishedAt,
}: {
  slug: string
  title: string
  description: string
  category: string
  image: string
  publishedAt: string
}): SchemaEntity {
  return {
    '@type': 'Article',
    '@id': `${SITE_URL}${slug}#article`,
    headline: title,
    description,
    image,
    datePublished: publishedAt,
    dateModified: publishedAt,
    author: organizationRef(),
    publisher: organizationRef(),
    keywords: category,
    inLanguage: 'en-US',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': siteUrl(slug),
    },
  }
}

export function placeSchema(n: {
  slug: string
  name: string
  zip: string
  popularStyle: string
  avgCost: string
}): SchemaEntity {
  return {
    '@type': 'Place',
    '@id': `${SITE_URL}/neighborhoods/${n.slug}#place`,
    name: `${n.name}, Nashville, TN`,
    containedInPlace: {
      '@type': 'City',
      name: 'Nashville',
      address: { '@type': 'PostalAddress', addressRegion: 'TN' },
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: n.name,
      postalCode: n.zip,
      addressRegion: 'TN',
      addressCountry: 'US',
    },
    additionalProperty: [
      { '@type': 'PropertyValue', name: 'Popular fence style', value: n.popularStyle },
      { '@type': 'PropertyValue', name: 'Average project cost', value: n.avgCost },
    ],
  }
}

type ListItem = { name: string; url: string }

export function itemListSchema(items: ListItem[], listName: string): SchemaEntity {
  return {
    '@type': 'ItemList',
    name: listName,
    numberOfItems: items.length,
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      url: siteUrl(item.url),
    })),
  }
}

export function collectionPageSchema({
  slug,
  title,
  description,
}: {
  slug: string
  title: string
  description: string
}): SchemaEntity {
  return {
    '@type': 'CollectionPage',
    '@id': `${SITE_URL}${slug}#collection`,
    url: siteUrl(slug),
    name: title,
    description,
    isPartOf: { '@id': WEBSITE_ID },
    publisher: organizationRef(),
  }
}

export function webPageSchema({
  slug,
  title,
  description,
  potentialAction,
}: {
  slug: string
  title: string
  description: string
  potentialAction?: SchemaEntity
}): SchemaEntity {
  const wp: SchemaEntity = {
    '@type': 'WebPage',
    '@id': `${SITE_URL}${slug}#webpage`,
    url: siteUrl(slug),
    name: title,
    description,
    isPartOf: { '@id': WEBSITE_ID },
    publisher: organizationRef(),
  }
  if (potentialAction) wp.potentialAction = potentialAction
  return wp
}

export function requestQuoteAction(): SchemaEntity {
  return {
    '@type': 'CommunicateAction',
    name: 'Request a free fence installation quote',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${SITE_URL}/get-quotes`,
      actionPlatform: [
        'http://schema.org/DesktopWebPlatform',
        'http://schema.org/MobileWebPlatform',
      ],
    },
  }
}

export function registerListingAction(): SchemaEntity {
  return {
    '@type': 'RegisterAction',
    name: 'Submit a free fence business listing',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${SITE_URL}/submit-listing`,
      actionPlatform: [
        'http://schema.org/DesktopWebPlatform',
        'http://schema.org/MobileWebPlatform',
      ],
    },
  }
}

export function contractorLocalBusiness(c: Contractor): SchemaEntity {
  const id = `${SITE_URL}/contractors/${c.slug}#localbusiness`

  // Minimal shell for placeholder (non-google-maps) entries.
  // Intentionally no aggregateRating, reviewCount, or priceRange so
  // fabricated ratings don't get indexed as rich-result data.
  if (c.source !== 'google-maps') {
    return {
      '@type': 'LocalBusiness',
      '@id': id,
      name: c.name,
      url: siteUrl(`/contractors/${c.slug}`),
      serviceType: categoryLabel(c.category),
      areaServed: c.areas.map((a) => ({ '@type': 'City', name: a })),
    }
  }

  // Full schema for verified Google-Maps-sourced listings.
  const lb: SchemaEntity = {
    '@type': ['LocalBusiness', 'HomeAndConstructionBusiness'],
    '@id': id,
    name: c.name,
    url: siteUrl(`/contractors/${c.slug}`),
    description: c.description,
    serviceType: categoryLabel(c.category),
    address: {
      '@type': 'PostalAddress',
      streetAddress: c.address,
      addressRegion: 'TN',
      addressCountry: 'US',
    },
    areaServed: c.areas.map((a) => ({ '@type': 'City', name: a })),
  }

  if (c.phone) lb.telephone = c.phone

  const sameAs: string[] = []
  if (c.googleMapsUrl) sameAs.push(c.googleMapsUrl)
  if (c.website) sameAs.push(c.website)
  if (sameAs.length > 0) lb.sameAs = sameAs

  if (c.coordinates) {
    lb.geo = {
      '@type': 'GeoCoordinates',
      latitude: c.coordinates[0],
      longitude: c.coordinates[1],
    }
  }

  return lb
}
