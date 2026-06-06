import PageHero from '../components/shared/PageHero'
import { COMPANY } from '../data/siteData'
import { useDocumentMeta } from '../hooks/useDocumentMeta'
import { useStructuredData } from '../hooks/useStructuredData'
import { organization, breadcrumbList, webPageSchema } from '../lib/schema'

const EFFECTIVE_DATE = 'June 5, 2026'

export default function Privacy() {
  useDocumentMeta({
    title: 'Privacy Policy | Nashville Fence Guide',
    description:
      'How Nashville Fence Guide collects, uses, and shares information from quote requests, listing submissions, and site analytics.',
    canonical: '/privacy',
  })

  useStructuredData([
    organization(),
    breadcrumbList([{ label: 'Privacy Policy' }]),
    webPageSchema({
      slug: '/privacy',
      title: 'Privacy Policy',
      description:
        'Privacy practices for Nashville Fence Guide: what we collect, how we use it, and who we share it with.',
    }),
  ])

  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description={`How we handle the information you share with Nashville Fence Guide. Effective ${EFFECTIVE_DATE}.`}
        crumbs={[{ label: 'Privacy Policy' }]}
      />

      <section className="bg-white section-padding">
        <div className="container-wide max-w-3xl prose-legal">
          <p className="text-onyx-700/80 leading-relaxed">
            Nashville Fence Guide ("we," "us") respects the privacy of every visitor and
            form submitter. This page explains what we collect, how we use it, and the
            choices you have.
          </p>

          <H2>Information we collect</H2>
          <ul>
            <li>
              <strong>Quote requests:</strong> name, email, phone, ZIP code, fence type,
              estimated linear footage, timeline, budget, and the filenames of any photos
              you attach.
            </li>
            <li>
              <strong>Listing submissions:</strong> business name, contact details,
              service area, license info, photos, and the owner's name and email.
            </li>
            <li>
              <strong>Advertising inquiries:</strong> name, company, email, phone, package
              interest, and message.
            </li>
            <li>
              <strong>Analytics:</strong> pages visited, referrer, device type, and
              country via Google Analytics (gtag.js property G-9YZEPGM4X7).
            </li>
            <li>
              <strong>Server logs:</strong> IP address, user-agent, and request timestamp
              for security and abuse prevention.
            </li>
          </ul>

          <H2>How we use it</H2>
          <ul>
            <li>To match Nashville homeowners with up to three vetted local fence contractors.</li>
            <li>To respond to listing and advertising inquiries.</li>
            <li>To detect spam and abuse, a hidden honeypot field on every form plus serverless rate checks.</li>
            <li>To improve the site through aggregated analytics. We do not sell traffic data.</li>
          </ul>

          <H2>Who we share it with</H2>
          <ul>
            <li>
              <strong>Quote-request data</strong> is shared with the matched Nashville
              contractors whose specialties and service area fit your project. We do not
              share your details with anyone else.
            </li>
            <li>
              <strong>Listing and advertising submissions</strong> are not shared with
              outside parties, they go directly to our editorial inbox.
            </li>
            <li>
              <strong>Service providers</strong> who process data on our behalf: Resend
              (transactional email), Vercel (hosting), Google Analytics (aggregate
              traffic). They do not use the data for their own advertising.
            </li>
          </ul>

          <H2>Cookies and tracking</H2>
          <p>
            We use a single first-party cookie set by Google Analytics for session
            attribution. There are no advertising cookies, no remarketing pixels, and no
            cross-site tracking.
          </p>

          <H2>Your choices</H2>
          <ul>
            <li>
              Email or call us to request a copy of any data we hold about you, to correct
              it, or to ask us to delete it.
            </li>
            <li>
              Use your browser's do-not-track setting or an ad blocker if you don't want
              analytics, gtag.js will not load.
            </li>
          </ul>

          <H2>Contact</H2>
          <p>
            Privacy questions:{' '}
            <a className="text-forest-500 underline underline-offset-4" href={`mailto:${COMPANY.email}`}>
              {COMPANY.email}
            </a>{' '}
            or{' '}
            <a className="text-forest-500 underline underline-offset-4" href={`tel:${COMPANY.phoneRaw}`}>
              {COMPANY.phone}
            </a>
            .
          </p>

          <H2>Changes</H2>
          <p>
            We may update this policy. The effective date above tells you when it was last
            revised.
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
