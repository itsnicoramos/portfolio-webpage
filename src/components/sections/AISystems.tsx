import { hardwareBringup, prooflabHarness } from '@/content/projects'
import { ArrowLink, Card, CardEyebrow, Section, SectionHeader, StatusPill, TagList } from '../ui'

// Shape tells the two verified states apart; the label is always there too.
const claimStates = [
  { name: 'verified-host', means: 'a test the agent ran', dot: 'bg-accent' },
  { name: 'verified-bench', means: 'something you observed', dot: 'bg-transparent ring-2 ring-accent' },
  { name: 'unverified', means: 'everything else, never hidden', dot: 'bg-warn' },
]

export function AISystems() {
  return (
    <Section id="ai-systems" theme="dark">
      <SectionHeader
        id="ai-systems"
        eyebrow="AI systems"
        title="AI that shows its work."
        lead="Two systems built on one rule: a claim from an agent is only as good as the evidence behind it."
      />

      <div className="mt-16 grid gap-6 lg:mt-20 lg:grid-cols-2 lg:items-start">
        <Card as="article" aria-labelledby="harness-title" className="reveal flex flex-col">
          <CardEyebrow>ProofLab</CardEyebrow>
          <h3 id="harness-title" className="display-md mt-3">
            A tutor that cannot grade itself.
          </h3>
          <p className="mt-4 text-body text-fg-muted">{prooflabHarness.summary}</p>
          <ul className="mt-8 space-y-4 text-base leading-relaxed">
            {prooflabHarness.points.map((p) => (
              <li key={p} className="flex gap-3">
                <span className="mt-2.5 size-1.5 shrink-0 bg-fg-muted" aria-hidden="true" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
          <div className="space-y-6 pt-10">
            <TagList items={prooflabHarness.stack} label="ProofLab tutor harness stack" />
            <ArrowLink href={`${prooflabHarness.repo}#guardrails-and-evals`} external>
              Read the guardrails
              <span className="sr-only">: ProofLab tutor</span>
            </ArrowLink>
          </div>
        </Card>

        <Card as="article" aria-labelledby="bringup-title" className="reveal flex flex-col">
          <CardEyebrow>hardware-bringup</CardEyebrow>
          <h3 id="bringup-title" className="display-md mt-3">
            An agent that admits what it has not seen.
          </h3>
          <p className="mt-4 text-body text-fg-muted">{hardwareBringup.tagline}</p>

          <ul className="mt-8 space-y-3" aria-label="The three claim states">
            {claimStates.map((s) => (
              <Card
                as="li"
                surface="tile"
                pad="row"
                key={s.name}
                className="flex flex-wrap items-center gap-x-4 gap-y-1"
              >
                <span className={`size-2.5 shrink-0 ${s.dot}`} aria-hidden="true" />
                <code className="font-mono text-ui text-fg">{s.name}</code>
                <span className="w-full pl-6.5 text-sm text-fg-muted sm:ml-auto sm:w-auto sm:pl-0 sm:text-right">{s.means}</span>
              </Card>
            ))}
          </ul>

          <ul className="mt-8 space-y-4 text-base leading-relaxed">
            {hardwareBringup.points.slice(1).map((p) => (
              <li key={p.title} className="flex gap-3">
                <span className="mt-2.5 size-1.5 shrink-0 bg-fg-muted" aria-hidden="true" />
                <span>
                  <strong className="font-semibold">{p.title}.</strong> <span className="text-fg-muted">{p.body}</span>
                </span>
              </li>
            ))}
          </ul>

          <div className="space-y-6 pt-10">
            <StatusPill status={hardwareBringup.status} />
            <TagList items={hardwareBringup.stack} label="hardware-bringup stack" />
            <p className="font-mono text-meta text-fg-muted">
              Lives in the Spec-to-ship repository. License: {hardwareBringup.license}.
            </p>
            <ArrowLink href={hardwareBringup.repo} external>
              View on GitHub
              <span className="sr-only">: hardware-bringup</span>
            </ArrowLink>
          </div>
        </Card>
      </div>
    </Section>
  )
}
