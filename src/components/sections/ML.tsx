import { mlFirstProject } from '@/content/projects'
import { ArrowLink, Section, SectionHeader, StatusPill } from '../ui'

// A compact "now building" log instead of a showcase card. Like the bench card
// and the learning ledger, it is an unframed, rule-divided mono block: the
// project is a work in progress, so it gets a log entry, built from real fields.
export function ML() {
  const { paper } = mlFirstProject
  const rows = [
    { k: 'authors', v: paper.authors },
    { k: 'venue', v: paper.venue },
  ]
  return (
    <Section id="ml" theme="white" density="compact">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-end lg:gap-16">
        <SectionHeader id="ml" tone="light" eyebrow="ML · now building" title={mlFirstProject.title} lead={mlFirstProject.summary} />

        <article aria-labelledby="ml-paper-title" className="reveal border-b border-t-2 border-b-line-light border-t-ink font-mono">
          <p className="truncate border-b border-line-light py-2 text-meta text-ink-muted">
            <span className="text-link-light" aria-hidden="true">
              ${' '}
            </span>
            tail ml/first-build.log
          </p>

          <div className="py-6">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
              <StatusPill status={mlFirstProject.status} tone="light" />
              <span className="text-meta text-ink-muted">The paper I am building first</span>
            </div>
            <h3 id="ml-paper-title" className="title-md mt-4">
              {paper.title}
            </h3>
            <dl className="mt-5 grid grid-cols-[5.5rem_1fr] gap-x-3 gap-y-2 text-meta">
              {rows.map((r) => (
                <div key={r.k} className="contents">
                  <dt className="text-ink-muted">{r.k}</dt>
                  <dd className="text-ink">{r.v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 border-t border-line-light font-sans">
            {paper.links.map((link) => (
              <ArrowLink key={link.href} href={link.href} tone="light" external>
                {link.label}
                <span className="sr-only">: {paper.title}</span>
              </ArrowLink>
            ))}
            <span className="ml-auto font-mono text-meta text-ink-muted" aria-hidden="true">
              <span className="text-link-light">$</span> _
            </span>
          </div>
        </article>
      </div>
    </Section>
  )
}
