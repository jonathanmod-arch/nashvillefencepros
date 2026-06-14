import { COMPANY, FAQS } from '../data/siteData'
import { categoryLabel, type Contractor } from '../data/contractors'

export type SchemaEntity = Record<string, unknown> & {
  '@type': string | string[]
}

import { CITY } from '../config/city'

const SITE_URL = CITY.siteUrl
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
      addressLocality: CITY.name,
      addressRegion: CITY.stateAbbr,
      addressCountry: 'US',
    },
    areaServed: CITY.topServiceAreaCities.map((c) => `${c}, ${CITY.stateAbbr}`),
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
      addressLocality: CITY.name,
      addressRegion: CITY.stateAbbr,
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
    // alternateName feeds Google's site-name selection in SERPs alongside
    // `name`. The no-space form mirrors the domain branding and is one of
    // the candidates Google picks between for the indexed display name.
    // Derived from COMPANY.name so the Charlotte deploy (Charlotte Fence
    // Guide → CharlotteFenceGuide) gets the right value automatically.
    alternateName: COMPANY.name.replace(/\s+/g, ''),
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

const AREA_SERVED = [
  {
    '@type': 'City',
    name: CITY.name,
    address: { '@type': 'PostalAddress', addressRegion: CITY.stateAbbr },
  },
  ...CITY.counties
    .slice(0, 4)
    .map((c) => ({ '@type': 'AdministrativeArea', name: `${c} County, ${CITY.stateAbbr}` })),
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
    areaServed: AREA_SERVED,
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
    '@id': `${SITE_URL}/service-areas/${n.slug}#place`,
    name: `${n.name}, ${CITY.name}, ${CITY.stateAbbr}`,
    containedInPlace: {
      '@type': 'City',
      name: CITY.name,
      address: { '@type': 'PostalAddress', addressRegion: CITY.stateAbbr },
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: n.name,
      postalCode: n.zip,
      addressRegion: CITY.stateAbbr,
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
    const placeholder: SchemaEntity = {
      '@type': 'LocalBusiness',
      '@id': id,
      name: c.name,
      url: siteUrl(`/contractors/${c.slug}`),
      serviceType: categoryLabel(c.category),
      areaServed: c.areas.map((a) => ({ '@type': 'City', name: a })),
    }
    const managerPerson = managerToPerson(c)
    if (managerPerson) placeholder.employee = [managerPerson]
    return placeholder
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
      addressRegion: CITY.stateAbbr,
      addressCountry: 'US',
    },
    areaServed: c.areas.map((a) => ({ '@type': 'City', name: a })),
  }

  if (c.phone) lb.telephone = c.phone

  // Last Updated trust signal — see docs/CONTRACTOR-PROFILE-PLAN.md
  if (c.lastUpdated) lb.dateModified = c.lastUpdated
  if (c.founded) lb.foundingDate = String(c.founded)
  if (c.employees) lb.numberOfEmployees = c.employees

  if (c.servicesOffered && c.servicesOffered.length) {
    lb.knowsAbout = c.servicesOffered
  }

  if (c.rating > 0 && c.reviews > 0) {
    lb.aggregateRating = {
      '@type': 'AggregateRating',
      ratingValue: c.rating,
      reviewCount: c.reviews,
    }
  }

  const sameAs: string[] = []
  if (c.googleMapsUrl) sameAs.push(c.googleMapsUrl)
  if (c.website) sameAs.push(c.website)
  if (c.onlinePresence) {
    for (const url of Object.values(c.onlinePresence)) {
      if (typeof url === 'string' && url && !sameAs.includes(url)) sameAs.push(url)
    }
  }
  if (sameAs.length > 0) lb.sameAs = sameAs

  if (c.credentials?.awards && c.credentials.awards.length) {
    lb.award = c.credentials.awards
  }
  if (c.credentials?.memberships && c.credentials.memberships.length) {
    lb.memberOf = c.credentials.memberships.map((name) => ({
      '@type': 'Organization',
      name,
    }))
  }

  if (c.coordinates) {
    lb.geo = {
      '@type': 'GeoCoordinates',
      latitude: c.coordinates[0],
      longitude: c.coordinates[1],
    }
  }

  const managerPerson = managerToPerson(c)
  if (managerPerson) lb.employee = [managerPerson]

  return lb
}

// Translate the listing's `manager` (one primary point of contact) into a
// schema.org Person. Returns undefined when no manager is set so callers can
// skip emitting an empty employee array.
function managerToPerson(c: Contractor): SchemaEntity | undefined {
  if (!c.manager) return undefined
  const person: SchemaEntity = {
    '@type': 'Person',
    name: c.manager.name,
    jobTitle: c.manager.role,
  }
  if (c.manager.headshot) person.image = c.manager.headshot
  if (c.manager.linkedinUrl) person.sameAs = [c.manager.linkedinUrl]
  return person
}
