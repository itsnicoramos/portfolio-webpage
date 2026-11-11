import { hardwareBringup, prooflabHarness } from '@/content/projects'
import { ArrowLink, Section, SectionHeader, StatusPill, TagList } from '../ui'

const claimStates = [
  { name: 'verified-host', means: 'a test the agent ran', dot: 'bg-mint' },
  { name: 'verified-bench', means: 'something you observed', dot: 'bg-sky' },
  { name: 'unverified', means: 'everything else, never hidden', dot: 'bg-amber' },
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

      <div className="mt-16 grid gap-6 lg:mt-20 lg:grid-cols-2">
        <article
          aria-labelledby="harness-title"
          className="reveal flex flex-col rounded-[1.75rem] bg-graphite p-7 ring-1 ring-white/10 sm:p-10"
        >
          <p className="text-sm font-semibold text-gradient-prooflab">ProofLab</p>
          <h3 id="harness-title" className="display-md mt-2">
            A tutor that cannot grade itself.
          </h3>
          <p className="mt-4 text-[1.0625rem] leading-relaxed text-mist">{prooflabHarness.summary}</p>
          <ul className="mt-8 space-y-4 text-[1rem] leading-relaxed">
            {prooflabHarness.points.map((p) => (
              <li key={p} className="flex gap-3">
                <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-sky" aria-hidden="true" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
          <div className="mt-auto space-y-6 pt-10">
            <TagList items={prooflabHarness.stack} label="ProofLab tutor harness stack" />
            <ArrowLink href={`${prooflabHarness.repo}#guardrails-and-evals`} external>
              Read the guardrails
              <span className="sr-only">: ProofLab tutor</span>
            </ArrowLink>
          </div>
        </article>

        <article
          aria-labelledby="bringup-title"
          className="reveal flex flex-col rounded-[1.75rem] bg-graphite p-7 ring-1 ring-white/10 sm:p-10"
        >
          <p className="text-sm font-semibold text-amber">hardware-bringup</p>
          <h3 id="bringup-title" className="display-md mt-2">
            An agent that admits what it has not seen.
          </h3>
          <p className="mt-4 text-[1.0625rem] leading-relaxed text-mist">{hardwareBringup.tagline}</p>

          <ul className="mt-8 space-y-3" aria-label="The three claim states">
            {claimStates.map((s) => (
              <li key={s.name} className="flex flex-wrap items-center gap-x-4 gap-y-1 rounded-2xl bg-white/[0.04] px-4 py-3.5 ring-1 ring-white/10">
                <span className={`size-2.5 shrink-0 rounded-full ${s.dot}`} aria-hidden="true" />
                <code className="font-mono text-[0.9375rem] text-snow">{s.name}</code>
                <span className="w-full pl-6.5 text-[0.875rem] text-mist sm:ml-auto sm:w-auto sm:pl-0 sm:text-right">{s.means}</span>
              </li>
            ))}
          </ul>

          <ul className="mt-8 space-y-4 text-[1rem] leading-relaxed">
            {hardwareBringup.points.slice(1).map((p) => (
              <li key={p.title} className="flex gap-3">
                <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-amber" aria-hidden="true" />
                <span>
                  <strong className="font-semibold">{p.title}.</strong> <span className="text-mist">{p.body}</span>
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-auto space-y-6 pt-10">
            <StatusPill status={hardwareBringup.status} />
            <TagList items={hardwareBringup.stack} label="hardware-bringup stack" />
            <p className="text-[0.875rem] text-mist">
              Lives in the Spec-to-ship repository. License: {hardwareBringup.license}.
            </p>
            <ArrowLink href={hardwareBringup.repo} external>
              View on GitHub
              <span className="sr-only">: hardware-bringup</span>
            </ArrowLink>
          </div>
        </article>
      </div>
    </Section>
  )
}
