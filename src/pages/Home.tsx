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
import LazyMount from '../components/shared/LazyMount'
import { FAQS, COMPANY } from '../data/siteData'
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
import { CITY } from '../config/city'

export default function Home() {
  useDocumentMeta({
    title: `${CITY.primaryKeyword} | Pros, Costs & Repair | Call ${COMPANY.phone}`,
    description: `Fence installation ${CITY.name}, compare vetted ${CITY.name} fence contractors, get free fence installation quotes, calculate fence installation cost in ${CITY.name} ${CITY.stateAbbr}, and find privacy, chain link, vinyl, aluminum, and pet fence pros.`,
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
      `Featured ${CITY.name} Fence Installers`,
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
      <LazyMount>
        <ContractorDirectory preview />
      </LazyMount>
      <LazyMount>
        <FAQSection />
      </LazyMount>
      <LazyMount>
        <ResourceCenter />
      </LazyMount>
      <LazyMount>
        <LeadGenSection />
      </LazyMount>
    </>
  )
}
