import PageHero from '../components/shared/PageHero'
import SponsorStrip from '../components/shared/SponsorStrip'
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
import { CITY } from '../config/city'

export default function Contractors() {
  useDocumentMeta({
    title: `${CITY.name} Fence Installers & Companies | Vetted Directory`,
    description: `Vetted directory of ${CITY.name} fence installers and companies. Compare licensed fence contractors in ${CITY.name} ${CITY.stateAbbr} for installation and repair, filter by service area, fence type, and project type.`,
    canonical: '/contractors',
  })

  useStructuredData([
    organization(),
    breadcrumbList([{ label: 'Find a Pro' }]),
    collectionPageSchema({
      slug: '/contractors',
      title: `${CITY.name} Fence Installers & Companies`,
      description: `Vetted directory of ${CITY.name} fence installers and companies for installation and repair across ${CITY.primaryCounty} and ${CITY.secondaryCounty} Counties.`,
    }),
    itemListSchema(
      CONTRACTORS.map((c) => ({ name: c.name, url: `/contractors/${c.slug}` })),
      `${CITY.name} Fence Contractor Directory`,
    ),
  ])
  return (
    <>
      <PageHero
        eyebrow="Vetted Local Pros"
        title={`${CITY.name} Fence Installers & Companies`}
        description={`Compare licensed ${CITY.name} fence installers and companies for residential and commercial fence installation. Hand-picked, insured, and rated by real ${CITY.name} homeowners, filter by area, fence type, and project type.`}
        crumbs={[{ label: 'Find a Pro' }]}
      />
      <SponsorStrip />
      <ContractorDirectory />
      <LeadGenSection />
    </>
  )
}
