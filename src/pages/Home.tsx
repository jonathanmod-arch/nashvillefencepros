import HeroSection from '../components/home/HeroSection'
import TrustBar from '../components/home/TrustBar'
import WhyFenceSection from '../components/home/WhyFenceSection'
import FenceTypesSection from '../components/home/FenceTypesSection'
import CostGuideSection from '../components/home/CostGuideSection'
import PermitsSection from '../components/home/PermitsSection'
import NeighborhoodsSection from '../components/home/NeighborhoodsSection'
import ContractorDirectory from '../components/home/ContractorDirectory'
import FAQSection from '../components/home/FAQSection'
import ResourceCenter from '../components/home/ResourceCenter'
import LeadGenSection from '../components/home/LeadGenSection'
import { FAQS } from '../data/siteData'
import { CONTRACTORS } from '../data/contractors'
import { useDocumentMeta } from '../hooks/useDocumentMeta'
import { useStructuredData } from '../hooks/useStructuredData'
import {
  organization,
  platformLocalBusiness,
  webSiteSchema,
  faqPageSchema,
  itemListSchema,
} from '../lib/schema'

export default function Home() {
  useDocumentMeta({
    title: 'Nashville Fence Installation | Pros, Costs & Repair | Nashville Fence Pros',
    description:
      'Compare vetted Nashville fence installers, get free fence installation quotes, calculate fence installation cost in Nashville TN, and find privacy, chain link, vinyl, aluminum, and pet fence pros.',
    canonical: '/',
  })

  useStructuredData([
    organization(),
    platformLocalBusiness(),
    webSiteSchema(),
    faqPageSchema(FAQS),
    itemListSchema(
      CONTRACTORS.filter((c) => c.featured).map((c) => ({
        name: c.name,
        url: `/contractors/${c.slug}`,
      })),
      'Featured Nashville Fence Installers',
    ),
  ])

  return (
    <>
      <HeroSection />
      <TrustBar />
      <WhyFenceSection />
      <FenceTypesSection />
      <CostGuideSection />
      <PermitsSection />
      <NeighborhoodsSection />
      <ContractorDirectory preview />
      <FAQSection />
      <ResourceCenter />
      <LeadGenSection />
    </>
  )
}
