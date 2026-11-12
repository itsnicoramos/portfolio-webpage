import { arduinoUno, benchCard, bringupPipeline, hardwareBringupProgress, toolchains } from '@/content/projects'
import { ArrowLink, Card, CardEyebrow, Section, SectionHeader, StatusPill, statusDot } from '../ui'

// The one full-bleed band on the page: the bench card and the progress log sit
// on a dark cutting-mat grid, edge to edge, between the paper sections.
export function HardwareLab() {
  return (
    <Section id="hardware" theme="light" contained={false}>
      <div className="container-page">
        <SectionHeader
          id="hardware"
          tone="light"
          eyebrow="Hardware lab"
          title="Firmware compiles long before it works."
          lead="The bench is where claims get checked. hardware-bringup is in use on a 4-DOF Arduino arm, brought up one measured step at a time."
        />
      </div>

      <div className="on-dark bench-grid mt-16 border-y border-line text-fg lg:mt-20">
        <div className="container-page grid items-start gap-12 py-14 sm:py-20 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
          <figure className="reveal font-mono">
            <p className="flex items-center justify-between gap-4 border-b border-line pb-3 text-meta text-fg-muted">
              <span>
                <span className="text-accent" aria-hidden="true">
                  ${' '}
                </span>
                bench card · {benchCard.id}
              </span>
              <span aria-hidden="true">hardware-bringup</span>
            </p>
            <p className="mt-6 text-ui font-semibold text-warn">
              {benchCard.id} <span className="text-fg">{benchCard.title}</span>
            </p>
            <dl className="mt-5 grid grid-cols-[5.5rem_1fr] gap-x-3 gap-y-3 text-sm leading-relaxed sm:text-ui">
              {benchCard.rows.map((r) => (
                <div key={r.k} className="contents">
                  <dt className="text-fg-muted">{r.k}</dt>
                  <dd className={r.k === 'Expect' ? 'text-accent' : r.k === 'If not' ? 'text-danger-soft' : 'text-fg'}>{r.v}</dd>
                </div>
              ))}
            </dl>
            <figcaption className="mt-6 border-t border-line pt-3 font-sans text-meta text-fg-muted">
              A real step from the hardware-bringup README. Every check says what success and failure look like.
            </figcaption>
          </figure>

          <div className="reveal">
            <h3 className="title-md">Where it stands</h3>
            <dl className="mt-5 divide-y divide-line border-y border-line font-mono">
              {hardwareBringupProgress.map((row) => (
                <div key={row.label} className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 py-3.5">
                  <dt className="font-sans text-ui">{row.label}</dt>
                  <dd className="inline-flex items-center gap-2 text-meta text-fg-muted">
                    <span className={`size-2 shrink-0 ${statusDot(row.tone)}`} aria-hidden="true" />
                    {row.state}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      <div className="container-page">
        <div className="reveal mt-16 lg:mt-20">
          <h3 className="title-md">The loop</h3>
          <ol className="mt-5 flex flex-wrap items-center gap-y-3 font-mono text-sm" aria-label="hardware-bringup loop, in order">
            {bringupPipeline.map((step, i) => {
              const hardStop = step === 'Preflight' || step === 'Operator gate'
              return (
                <li key={step} className="flex items-center">
                  <span
                    className={`rounded-tile px-2.5 py-1.5 ${hardStop ? 'bg-ink text-paper' : 'bg-sheet text-ink ring-1 ring-line-light'}`}
                  >
                    <span className="sr-only">Step {i + 1}: </span>
                    <span aria-hidden="true" className={hardStop ? 'text-line-light' : 'text-ink-muted'}>
                      {String(i + 1).padStart(2, '0')}{' '}
                    </span>
                    {step}
                  </span>
                  {i < bringupPipeline.length - 1 ? (
                    <span className="px-2 text-ink-muted" aria-hidden="true">
                      →
                    </span>
                  ) : null}
                </li>
              )
            })}
          </ol>
          <p className="mt-4 text-ui text-ink-muted">
            Preflight and the operator gate are hard stops. Nothing powers up until a person confirms it.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-[1fr_1.2fr]">
          <Card as="article" surface="sheet" aria-labelledby="arduino-title" className="reveal">
            <CardEyebrow tone="light">{arduinoUno.board}</CardEyebrow>
            <h3 id="arduino-title" className="display-md mt-3">
              {arduinoUno.name}
            </h3>
            <p className="mt-4 text-body text-ink-muted">{arduinoUno.summary}</p>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
              <StatusPill status={arduinoUno.status} tone="light" />
              <ArrowLink href={arduinoUno.repo} tone="light" external>
                Watch the repo
                <span className="sr-only">: ArduinoUNO</span>
              </ArrowLink>
            </div>
          </Card>

          <Card as="article" surface="sheet" aria-labelledby="toolchains-title" className="reveal">
            <CardEyebrow tone="light">hardware-bringup</CardEyebrow>
            <h3 id="toolchains-title" className="display-md mt-3">
              Detected, not configured.
            </h3>
            <p className="mt-4 text-body text-ink-muted">
              The skill reads the repo to pick a toolchain. The rules stay the same on every one of them.
            </p>
            <table className="mt-6 w-full text-left text-ui">
              <caption className="sr-only">Toolchains hardware-bringup detects, and the file that signals each</caption>
              <thead>
                <tr className="font-mono text-meta text-ink-muted">
                  <th scope="col" className="pb-2 font-medium">
                    Toolchain
                  </th>
                  <th scope="col" className="pb-2 font-medium">
                    Signal
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line-light">
                {toolchains.map((t) => (
                  <tr key={t.name}>
                    <th scope="row" className="py-2.5 pr-4 font-medium">
                      {t.name}
                    </th>
                    <td className="py-2.5 font-mono text-meta text-ink-muted">{t.signal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Card>
        </div>
      </div>
    </Section>
  )
}
