import PageHero from '../components/shared/PageHero'
import ContractorDirectory from '../components/home/ContractorDirectory'
import LeadGenSection from '../components/home/LeadGenSection'

export default function Contractors() {
  return (
    <>
      <PageHero
        eyebrow="Vetted Local Pros"
        title="Best Fence Companies in Nashville"
        description="Hand-picked, licensed, insured, and rated by real Nashville homeowners. Filter by area, service category, or project type."
        crumbs={[{ label: 'Find a Pro' }]}
      />
      <ContractorDirectory />
      <LeadGenSection />
    </>
  )
}
