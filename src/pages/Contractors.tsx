import PageHero from '../components/shared/PageHero'
import ContractorDirectory from '../components/home/ContractorDirectory'
import LeadGenSection from '../components/home/LeadGenSection'
import { CONTRACTORS } from '../data/contractors'
import { useDocumentMeta } from '../hooks/useDocumentMeta'
import { useStructuredData } from '../hooks/useStructuredData'
import {
  organization,
  breadcrumbList,
  collectionPageSchema,
  itemListSchema,
} from '../lib/schema'

export default function Contractors() {
  useDocumentMeta({
    title: 'Nashville Fence Installers & Companies | Vetted Directory',
    description:
      'Vetted directory of Nashville fence installers and companies. Compare licensed fence contractors in Nashville TN for installation and repair — filter by service area, fence type, and project type.',
    canonical: '/contractors',
  })

  useStructuredData([
    organization(),
    breadcrumbList([{ label: 'Find a Pro' }]),
    collectionPageSchema({
      slug: '/contractors',
      title: 'Nashville Fence Installers & Companies',
      description:
        'Vetted directory of Nashville fence installers and companies for installation and repair across Davidson and Williamson Counties.',
    }),
    itemListSchema(
      CONTRACTORS.map((c) => ({ name: c.name, url: `/contractors/${c.slug}` })),
      'Nashville Fence Contractor Directory',
    ),
  ])
  return (
    <>
      <PageHero
        eyebrow="Vetted Local Pros"
        title="Nashville Fence Installers & Companies"
        description="Compare licensed Nashville fence installers and companies for residential and commercial fence installation. Hand-picked, insured, and rated by real Nashville homeowners — filter by area, fence type, and project type."
        crumbs={[{ label: 'Find a Pro' }]}
      />
      <ContractorDirectory />
      <LeadGenSection />
    </>
  )
}
