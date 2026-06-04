import { useEffect } from 'react'
import HeroSection from '../components/home/HeroSection'
import TrustBar from '../components/home/TrustBar'
import WhyFenceSection from '../components/home/WhyFenceSection'
import FenceTypesSection from '../components/home/FenceTypesSection'
import CostGuideSection from '../components/home/CostGuideSection'
import PermitsSection from '../components/home/PermitsSection'
import NeighborhoodsSection from '../components/home/NeighborhoodsSection'
import ContractorDirectory from '../components/home/ContractorDirectory'
import GallerySection from '../components/home/GallerySection'
import FAQSection from '../components/home/FAQSection'
import ResourceCenter from '../components/home/ResourceCenter'
import LeadGenSection from '../components/home/LeadGenSection'
import { COMPANY } from '../data/siteData'

export default function Home() {
  useEffect(() => {
    const data = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Organization',
          '@id': 'https://nashvillefencepros.com/#org',
          name: COMPANY.name,
          url: 'https://nashvillefencepros.com',
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
          ],
        },
        {
          '@type': 'LocalBusiness',
          '@id': 'https://nashvillefencepros.com/#localbusiness',
          name: COMPANY.name,
          image: 'https://nashvillefencepros.com/og.jpg',
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
        },
      ],
    }
    const tag = document.createElement('script')
    tag.type = 'application/ld+json'
    tag.text = JSON.stringify(data)
    document.head.appendChild(tag)
    return () => {
      document.head.removeChild(tag)
    }
  }, [])

  return (
    <>
      <HeroSection />
      <TrustBar />
      <WhyFenceSection />
      <FenceTypesSection />
      <CostGuideSection />
      <PermitsSection />
      <NeighborhoodsSection />
      <ContractorDirectory />
      <GallerySection />
      <FAQSection />
      <ResourceCenter />
      <LeadGenSection />
    </>
  )
}
