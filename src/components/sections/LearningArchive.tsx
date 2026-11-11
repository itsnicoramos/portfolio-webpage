import { archive } from '@/content/archive'
import { ExternalLink, Section, SectionHeader, TagList } from '../ui'

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

      <ol className="mt-16 border-t border-line-light lg:mt-20">
        {archive.map((entry) => (
          <li key={entry.id} className="reveal border-b border-line-light">
            <article
              aria-labelledby={`${entry.id}-title`}
              className="grid gap-4 py-8 sm:py-10 lg:grid-cols-[12rem_1fr_auto] lg:gap-10"
            >
              <div className="text-[0.875rem] text-slate">
                <p className="font-medium text-ink">{entry.period}</p>
                <p className="mt-0.5">{entry.context}</p>
              </div>
              <div className="max-w-2xl">
                <h3 id={`${entry.id}-title`} className="text-xl font-semibold tracking-tight sm:text-2xl">
                  {entry.title}
                </h3>
                <p className="mt-2 text-[1.0625rem] leading-relaxed text-slate">{entry.body}</p>
                <div className="mt-4">
                  <TagList items={entry.tags} tone="light" label={`${entry.title} topics`} />
                </div>
              </div>
              <div className="lg:pt-1">
                {entry.href ? (
                  <ExternalLink
                    href={entry.href}
                    className="inline-flex min-h-11 items-center gap-1 text-[0.9375rem] font-medium text-cobalt underline-offset-4 hover:underline"
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
    </Section>
  )
}
