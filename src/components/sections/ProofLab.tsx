import { prooflab } from '@/content/projects'
import { ProofLabReplay } from '../ProofLabReplay'
import { ArrowLink, Card, CardEyebrow, PillLink, StatusPill, TagList } from '../ui'

const stats = [
  { value: '14', label: 'Book of Proof chapters taught' },
  { value: '10', label: 'chapters graded by the checker' },
  { value: '9', label: 'scripted learners that test the tutor' },
  { value: '0', label: 'verdicts written by AI' },
]

export function ProofLabCard() {
  const [site, repo] = prooflab.links
  return (
    // A light card inside the dark Engineering & CS section. `theme-white`
    // keeps light-section focus rings and text colours inside it.
    <Card
      as="article"
      surface="sheet"
      pad="lg"
      id="prooflab"
      aria-labelledby="prooflab-title"
      tabIndex={-1}
      className="theme-white reveal mt-16 scroll-mt-24 outline-none lg:mt-20"
    >
      <header className="max-w-3xl">
        <CardEyebrow tone="light">ProofLab · AI-assisted mathematics learning</CardEyebrow>
        <h3 id="prooflab-title" className="display-md mt-3">
          {prooflab.tagline}
        </h3>
        <p className="mt-4 text-body text-ink-muted">{prooflab.summary}</p>
      </header>

      <div className="mt-16 grid items-start gap-12 lg:mt-20 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
        <ProofLabReplay />

        <ul className="grid gap-10 sm:grid-cols-2 lg:grid-cols-1 lg:gap-9">
          {prooflab.points.map((p) => (
            <li key={p.title}>
              <h4 className="title-sm">{p.title}</h4>
              <p className="mt-2 text-body text-ink-muted">{p.body}</p>
            </li>
          ))}
        </ul>
      </div>

      <dl className="mt-20 grid grid-cols-2 gap-x-6 gap-y-10 border-t border-line-light pt-12 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label}>
            <dt className="sr-only">{s.label}</dt>
            <dd>
              <span className="block font-mono text-5xl font-semibold tabular-nums sm:text-6xl">{s.value}</span>
              <span className="mt-2 block text-ui text-ink-muted" aria-hidden="true">
                {s.label}
              </span>
            </dd>
          </div>
        ))}
      </dl>

      <Card surface="paper" className="mt-16 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <div className="space-y-5">
          <StatusPill status={prooflab.status} tone="light" />
          <TagList items={prooflab.stack} tone="light" label="ProofLab tech stack" />
          <p className="font-mono text-meta text-ink-muted">
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
        </div>
      </Card>
    </Card>
  )
}
