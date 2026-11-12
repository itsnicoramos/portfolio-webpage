import { mlFirstProject } from '@/content/projects'
import { ArrowLink, PillLink, Section, SectionHeader, StatusPill } from '../ui'

export function ML() {
  const { paper } = mlFirstProject
  const [pdf, abs] = paper.links
  return (
    <Section id="ml" theme="white">
      <SectionHeader id="ml" tone="light" eyebrow="ML" title={mlFirstProject.title} lead={mlFirstProject.summary} />

      <article
        aria-labelledby="ml-paper-title"
        className="reveal mt-12 flex flex-col gap-8 rounded-[1.75rem] bg-paper p-6 sm:p-10 lg:mt-16 lg:flex-row lg:items-end lg:justify-between"
      >
        <div className="space-y-4">
          <StatusPill status={mlFirstProject.status} tone="light" />
          <p className="text-sm font-semibold text-slate">The paper I am building first</p>
          <h3 id="ml-paper-title" className="display-md text-balance">
            {paper.title}
          </h3>
          <p className="max-w-2xl text-[1.0625rem] leading-relaxed text-slate">{paper.authors}</p>
          <p className="text-[0.875rem] text-slate">{paper.venue}</p>
        </div>
        <div className="flex shrink-0 flex-wrap items-center gap-x-6 gap-y-3">
          {pdf ? (
            <PillLink href={pdf.href} tone="light" external>
              {pdf.label}
              <span className="sr-only">: {paper.title}</span>
            </PillLink>
          ) : null}
          {abs ? (
            <ArrowLink href={abs.href} tone="light" external>
              {abs.label}
              <span className="sr-only">: {paper.title}</span>
            </ArrowLink>
          ) : null}
        </div>
      </article>
    </Section>
  )
}
