import { archive } from '@/content/archive'
import { ExternalLink, Section, SectionHeader, TagList } from '../ui'

// A dense mono ledger: the record, not the highlight reel.
const columns = 'lg:grid-cols-[3rem_11rem_1fr_7rem] lg:gap-8'

export function LearningArchive() {
  return (
    <Section id="archive" theme="light">
      <SectionHeader
        id="archive"
        tone="light"
        eyebrow="Learning archive"
        title="Everything I learned on the way."
        lead="Coursework, practice projects and the courses I am working through. Unpolished on purpose: this is the record, not the highlight reel."
      />

      <div className="reveal mt-16 lg:mt-20">
        <p className="flex items-baseline justify-between border-b-2 border-ink pb-2 font-mono text-meta text-ink-muted">
          <span>learning.log</span>
          <span>
            {archive.length} entries
          </span>
        </p>
        <div className={`hidden py-2 font-mono text-xs uppercase tracking-wider text-ink-muted lg:grid ${columns}`} aria-hidden="true">
          <span>#</span>
          <span>Period</span>
          <span>Entry</span>
          <span className="text-right">Link</span>
        </div>

        <ol className="border-t border-line-light">
          {archive.map((entry, i) => (
            <li key={entry.id} className="border-b border-line-light">
              <article aria-labelledby={`${entry.id}-title`} className={`grid gap-3 py-6 ${columns}`}>
                <span className="hidden font-mono text-meta text-ink-muted lg:block" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="font-mono text-meta text-ink-muted">
                  <p className="font-semibold text-ink">{entry.period}</p>
                  <p className="mt-0.5">{entry.context}</p>
                </div>
                <div className="max-w-2xl">
                  <h3 id={`${entry.id}-title`} className="title-sm">
                    {entry.title}
                  </h3>
                  <p className="mt-2 text-ui text-ink-muted">{entry.body}</p>
                  <div className="mt-3">
                    <TagList items={entry.tags} tone="light" variant="inline" label={`${entry.title} topics`} />
                  </div>
                </div>
                <div className="lg:text-right">
                  {entry.href ? (
                    <ExternalLink
                      href={entry.href}
                      className="inline-flex min-h-11 items-center gap-1 font-mono text-meta font-medium text-link-light underline-offset-4 hover:underline"
                    >
                      {entry.href.includes('github.com/itsnicoramos') ? 'Repository' : 'Course'}
                      <span className="sr-only">: {entry.title}</span>
                    </ExternalLink>
                  ) : null}
                </div>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  )
}
