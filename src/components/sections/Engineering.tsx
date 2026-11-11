import { cyberbank } from '@/content/projects'
import { ArrowLink, Section, SectionHeader, StatusPill, TagList } from '../ui'

export function Engineering() {
  return (
    <Section id="engineering" theme="dark">
      <SectionHeader
        id="engineering"
        eyebrow="Engineering & CS"
        title="Fundamentals, built by hand."
        lead="No framework doing the hard part. Hashing, storage and a full ledger written from the standard library up."
      />

      <article
        aria-labelledby="cyberbank-title"
        className="reveal relative mt-16 overflow-hidden rounded-[2rem] bg-graphite p-7 ring-1 ring-white/10 sm:p-12 lg:mt-20"
      >
        <div
          className="pointer-events-none absolute -right-32 -top-32 size-96 rounded-full bg-[radial-gradient(circle,rgb(48_209_88/0.18),transparent_65%)]"
          aria-hidden="true"
        />
        <div className="relative grid gap-12 lg:grid-cols-[1fr_1.35fr] lg:gap-16">
          <div className="flex flex-col">
            <p className="text-sm font-semibold text-mint">Featured</p>
            <h3 id="cyberbank-title" className="display-lg mt-2">
              {cyberbank.name}
            </h3>
            <p className="mt-3 text-xl font-medium tracking-tight text-snow">{cyberbank.tagline}</p>
            <p className="mt-4 text-[1.0625rem] leading-relaxed text-mist">{cyberbank.summary}</p>
            <div className="mt-auto space-y-6 pt-10">
              <StatusPill status={cyberbank.status} />
              <TagList items={cyberbank.stack} label="CyberBank stack" />
              <p className="text-[0.875rem] text-mist">License: {cyberbank.license}.</p>
              <ArrowLink href={cyberbank.repo} external>
                View on GitHub
                <span className="sr-only">: CyberBank</span>
              </ArrowLink>
            </div>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2">
            {cyberbank.points.map((p) => (
              <li key={p.title} className="rounded-2xl bg-white/[0.04] p-6 ring-1 ring-white/10">
                <h4 className="text-lg font-semibold tracking-tight">{p.title}</h4>
                <p className="mt-2 text-[0.9375rem] leading-relaxed text-mist">{p.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </article>
    </Section>
  )
}
