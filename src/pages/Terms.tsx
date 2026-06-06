import PageHero from '../components/shared/PageHero'
import { COMPANY } from '../data/siteData'
import { useDocumentMeta } from '../hooks/useDocumentMeta'
import { useStructuredData } from '../hooks/useStructuredData'
import { organization, breadcrumbList, webPageSchema } from '../lib/schema'
import { CITY } from '../config/city'

const EFFECTIVE_DATE = 'June 5, 2026'

export default function Terms() {
  useDocumentMeta({
    title: `Terms of Use | ${CITY.siteName}`,
    description: `Terms governing use of ${CITY.siteName}, the contractor directory, quote-matching service, and submitted listings.`,
    canonical: '/terms',
  })

  useStructuredData([
    organization(),
    breadcrumbList([{ label: 'Terms of Use' }]),
    webPageSchema({
      slug: '/terms',
      title: 'Terms of Use',
      description:
        'Terms of use for the Nashville Fence Guide directory and contractor referral platform.',
    }),
  ])

  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms of Use"
        description={`The rules of the road for using Nashville Fence Guide. Effective ${EFFECTIVE_DATE}.`}
        crumbs={[{ label: 'Terms of Use' }]}
      />

      <section className="bg-white section-padding">
        <div className="container-wide max-w-3xl prose-legal">
          <p className="text-onyx-700/80 leading-relaxed">
            By using NashvilleFenceGuide.com you agree to these terms.
          </p>

          <H2>What we are</H2>
          <p>
            Nashville Fence Guide is an independent directory and contractor referral
            platform for Nashville-area homeowners. We are not a licensed fence
            contractor and do not perform installation, repair, or inspection work
            ourselves.
          </p>

          <H2>Contractor listings</H2>
          <ul>
            <li>
              Listings marked "Listed on Google" are public business listings; ratings,
              reviews, and hours are maintained on the contractor's Google Maps profile.
            </li>
            <li>
              Other listings are submitted by business owners and reviewed editorially. We
              do our best to verify license and insurance status but cannot guarantee
              every detail.
            </li>
            <li>
              Inclusion in the directory is not an endorsement. Always verify license,
              insurance, and references directly with the contractor before hiring.
            </li>
          </ul>

          <H2>Quotes and referrals</H2>
          <p>
            When you submit a quote request, we share your project details with up to
            three matched contractors. The resulting estimates and any agreement are
            between you and those contractors, Nashville Fence Guide is not a party to
            any contract you sign.
          </p>

          <H2>User content</H2>
          <ul>
            <li>
              Photos and project descriptions you upload must be yours to share. By
              submitting them you grant us a non-exclusive license to display them on the
              site and in matched contractor emails.
            </li>
            <li>
              Don't submit content that is false, defamatory, infringing, or unlawful. We
              may remove anything that violates these terms.
            </li>
          </ul>

          <H2>Prohibited use</H2>
          <p>
            You may not scrape the directory, send spam through our forms, attempt to
            compromise the site's security, or impersonate another person or business.
          </p>

          <H2>Disclaimers</H2>
          <p>
            The site is provided "as is." Cost estimates, permit guidance, and code
            summaries are for general information only and may be out of date. Always
            confirm current rules with Metro Nashville Codes, the Tennessee State Board
            for Licensing Contractors, or your HOA before you build.
          </p>

          <H2>Limitation of liability</H2>
          <p>
            To the extent allowed by law, Nashville Fence Guide is not liable for any
            direct, indirect, or consequential damages arising from your use of the site,
            the contractors you connect with, or any work performed by them.
          </p>

          <H2>Intellectual property</H2>
          <p>
            Site copy, design, and code are © Nashville Fence Guide. Contractor names,
            logos, and business details remain the property of their respective owners.
          </p>

          <H2>Governing law</H2>
          <p>
            These terms are governed by the laws of the State of Tennessee. Disputes will
            be resolved in the state or federal courts located in Davidson County,
            Tennessee.
          </p>

          <H2>Changes</H2>
          <p>
            We may update these terms. Continued use of the site after a change indicates
            acceptance of the revised terms.
          </p>

          <H2>Contact</H2>
          <p>
            Questions:{' '}
            <a className="text-forest-500 underline underline-offset-4" href={`mailto:${COMPANY.email}`}>
              {COMPANY.email}
            </a>{' '}
            or{' '}
            <a className="text-forest-500 underline underline-offset-4" href={`tel:${COMPANY.phoneRaw}`}>
              {COMPANY.phone}
            </a>
            .
          </p>
        </div>
      </section>

      <style>{`
        .prose-legal h2 {
          font-family: 'Inter Tight', system-ui, sans-serif;
          font-weight: 700;
          font-size: 1.25rem;
          color: #1A1D1E;
          margin-top: 2.25rem;
          margin-bottom: 0.75rem;
          letter-spacing: -0.02em;
        }
        .prose-legal p, .prose-legal li {
          font-size: 0.95rem;
          color: rgba(26, 29, 30, 0.78);
          line-height: 1.7;
        }
        .prose-legal ul {
          list-style: disc;
          padding-left: 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .prose-legal strong { color: #1A1D1E; }
      `}</style>
    </>
  )
}

function H2({ children }: { children: React.ReactNode }) {
  return <h2>{children}</h2>
}
