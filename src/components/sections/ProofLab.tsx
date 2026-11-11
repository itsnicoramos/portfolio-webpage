import { prooflab } from '@/content/projects'
import { ProofLabReplay } from '../ProofLabReplay'
import { ArrowLink, PillLink, Section, SectionHeader, StatusPill, TagList } from '../ui'

const stats = [
  { value: '14', label: 'Book of Proof chapters taught' },
  { value: '10', label: 'chapters graded by the checker' },
  { value: '9', label: 'scripted learners that test the tutor' },
  { value: '0', label: 'verdicts written by AI' },
]

export function ProofLab() {
  const [site, repo, api] = prooflab.links
  return (
    <Section id="prooflab" theme="white">
      <SectionHeader
        id="prooflab"
        tone="light"
        eyebrow="ProofLab · AI-assisted mathematics learning"
        eyebrowClassName="text-gradient-prooflab-ink"
        title={prooflab.tagline}
        lead={prooflab.summary}
      />

      <div className="mt-16 grid items-start gap-12 lg:mt-20 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
        <div className="reveal">
          <ProofLabReplay />
        </div>

        <ul className="grid gap-10 sm:grid-cols-2 lg:grid-cols-1 lg:gap-9">
          {prooflab.points.map((p) => (
            <li key={p.title} className="reveal">
              <h3 className="text-xl font-semibold tracking-tight">{p.title}</h3>
              <p className="mt-2 text-[1.0625rem] leading-relaxed text-slate">{p.body}</p>
            </li>
          ))}
        </ul>
      </div>

      <dl className="reveal mt-20 grid grid-cols-2 gap-x-6 gap-y-10 border-t border-line-light pt-12 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label}>
            <dt className="sr-only">{s.label}</dt>
            <dd>
              <span className="block text-5xl font-semibold tracking-tight sm:text-6xl">{s.value}</span>
              <span className="mt-2 block text-[0.9375rem] text-slate" aria-hidden="true">
                {s.label}
              </span>
            </dd>
          </div>
        ))}
      </dl>

      <div className="reveal mt-16 flex flex-col gap-8 rounded-[1.75rem] bg-paper p-6 sm:p-10 lg:flex-row lg:items-end lg:justify-between">
        <div className="space-y-5">
          <StatusPill status={prooflab.status} tone="light" />
          <TagList items={prooflab.stack} tone="light" label="ProofLab tech stack" />
          <p className="text-[0.875rem] text-slate">
            License: {prooflab.license}. The earlier practice website was retired on 8 November 2026; the tutor and API carry on.
          </p>
        </div>
        <div className="flex shrink-0 flex-wrap items-center gap-x-6 gap-y-3">
          {site ? (
            <PillLink href={site.href} tone="light" external>
              {site.label}
              <span className="sr-only">: ProofLab</span>
            </PillLink>
          ) : null}
          {repo ? (
            <ArrowLink href={repo.href} tone="light" external>
              {repo.label}
              <span className="sr-only">: ProofLab</span>
            </ArrowLink>
          ) : null}
          {api ? (
            <ArrowLink href={api.href} tone="light" external>
              {api.label}
              <span className="sr-only">: ProofLab</span>
            </ArrowLink>
          ) : null}
        </div>
      </div>
    </Section>
  )
}
