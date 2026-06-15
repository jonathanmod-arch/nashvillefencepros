import { useParams, Navigate } from 'react-router-dom'
import PageHero from '../components/shared/PageHero'
import SponsorStrip from '../components/shared/SponsorStrip'
import ContractorDirectory from '../components/home/ContractorDirectory'
import LeadGenSection from '../components/home/LeadGenSection'
import {
  CONTRACTORS,
  COMPANY_TYPE_SLUGS,
  categoryForCompanySlug,
  categoryLabel,
} from '../data/contractors'
import { useDocumentMeta } from '../hooks/useDocumentMeta'
import { useStructuredData } from '../hooks/useStructuredData'
import {
  organization,
  breadcrumbList,
  collectionPageSchema,
  itemListSchema,
} from '../lib/schema'
import { CITY } from '../config/city'

// Category landing page mounted at /companies/<slug>/. Resolves the URL
// slug to a SERVICE_CATEGORIES id via COMPANY_TYPE_SLUGS, pre-filters the
// ContractorDirectory by that category, and emits category-specific
// title + description + CollectionPage JSON-LD. Unknown slugs redirect
// to the unfiltered /contractors directory.
export default function CompaniesCategory() {
  const { category: slug } = useParams<{ category: string }>()
  const categoryId = slug ? categoryForCompanySlug(slug) : undefined

  if (!categoryId) {
    return <Navigate to="/contractors" replace />
  }

  const label = categoryLabel(categoryId)
  const filtered = CONTRACTORS.filter((c) => c.category === categoryId)
  const title = `${label} in ${CITY.name} ${CITY.stateAbbr}`
  const description = `Vetted ${label.toLowerCase()} serving ${CITY.name} and the surrounding ${CITY.primaryCounty} and ${CITY.secondaryCounty} County area. Compare licensed local pros, filter by service area and project type.`

  useDocumentMeta({
    title,
    description,
    canonical: `/companies/${slug}`,
  })

  useStructuredData([
    organization(),
    breadcrumbList([
      { label: 'Find a Pro', to: '/contractors' },
      { label },
    ]),
    collectionPageSchema({
      slug: `/companies/${slug}`,
      title,
      description,
    }),
    itemListSchema(
      filtered.map((c) => ({ name: c.name, url: `/contractors/${c.slug}` })),
      `${label} in ${CITY.name}`,
    ),
  ])

  return (
    <>
      <PageHero
        eyebrow={CITY.name}
        title={title}
        description={description}
        crumbs={[
          { label: 'Find a Pro', to: '/contractors' },
          { label },
        ]}
      />
      <SponsorStrip />
      <ContractorDirectory initialCategory={categoryId} />
      <LeadGenSection />
    </>
  )
}

// Static slug list re-exported so the sitemap generator can iterate over
// every /companies/<slug>/ URL without duplicating the source list.
export const COMPANIES_CATEGORY_SLUGS = COMPANY_TYPE_SLUGS.map((t) => t.slug)
