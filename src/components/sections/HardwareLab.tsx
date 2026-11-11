import { arduinoUno, benchCard, bringupPipeline, hardwareBringupProgress, toolchains } from '@/content/projects'
import { ArrowLink, Section, SectionHeader, StatusPill } from '../ui'

export function HardwareLab() {
  return (
    <Section id="hardware" theme="light">
      <SectionHeader
        id="hardware"
        tone="light"
        eyebrow="Hardware lab"
        eyebrowClassName="text-rust"
        title="Firmware compiles long before it works."
        lead="The bench is where claims get checked. hardware-bringup is in use on a 4-DOF Arduino arm, brought up one measured step at a time."
      />

      <div className="mt-16 grid items-start gap-10 lg:mt-20 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
        <figure className="reveal overflow-hidden rounded-[1.75rem] bg-[#0b0b0c] text-snow shadow-[0_40px_100px_-50px_rgb(0_0_0/0.6)]">
          <div className="flex items-center gap-2 border-b border-white/10 px-5 py-3.5" aria-hidden="true">
            <span className="size-3 rounded-full bg-[#ff5f57]" />
            <span className="size-3 rounded-full bg-[#febc2e]" />
            <span className="size-3 rounded-full bg-[#28c840]" />
            <span className="ml-3 font-mono text-[0.75rem] text-mist">bench card</span>
          </div>
          <div className="p-5 font-mono text-[0.875rem] leading-relaxed sm:p-7 sm:text-[0.9375rem]">
            <p className="font-semibold text-amber">
              {benchCard.id} <span className="text-snow">{benchCard.title}</span>
            </p>
            <dl className="mt-4 grid grid-cols-[5.5rem_1fr] gap-x-3 gap-y-2.5">
              {benchCard.rows.map((r) => (
                <div key={r.k} className="contents">
                  <dt className="text-mist">{r.k}</dt>
                  <dd className={r.k === 'Expect' ? 'text-mint' : r.k === 'If not' ? 'text-[#ffb4ae]' : 'text-snow'}>
                    {r.v}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <figcaption className="border-t border-white/10 px-5 py-3.5 text-[0.8125rem] text-mist sm:px-7">
            A real step from the hardware-bringup README. Every check says what success and failure look like.
          </figcaption>
        </figure>

        <div className="space-y-12">
          <div className="reveal">
            <h3 className="text-xl font-semibold tracking-tight">The loop</h3>
            <ol className="mt-5 flex flex-wrap gap-2" aria-label="hardware-bringup loop, in order">
              {bringupPipeline.map((step, i) => (
                <li
                  key={step}
                  className={`rounded-full px-3.5 py-1.5 text-[0.875rem] font-medium ${
                    step === 'Preflight' || step === 'Operator gate' ? 'bg-rust text-white' : 'bg-white text-ink ring-1 ring-line-light'
                  }`}
                >
                  <span className="sr-only">Step {i + 1}: </span>
                  {step}
                </li>
              ))}
            </ol>
            <p className="mt-4 text-[0.9375rem] text-slate">
              Preflight and the operator gate are hard stops. Nothing powers up until a person confirms it.
            </p>
          </div>

          <div className="reveal">
            <h3 className="text-xl font-semibold tracking-tight">Where it stands</h3>
            <dl className="mt-5 divide-y divide-line-light border-y border-line-light">
              {hardwareBringupProgress.map((row) => (
                <div key={row.label} className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 py-3.5">
                  <dt className="text-[0.9375rem]">{row.label}</dt>
                  <dd className="text-[0.875rem] font-medium text-slate">{row.state}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      <div className="mt-20 grid gap-6 lg:grid-cols-[1fr_1.2fr]">
        <article aria-labelledby="arduino-title" className="reveal rounded-[1.75rem] bg-white p-7 ring-1 ring-line-light sm:p-10">
          <p className="text-sm font-semibold text-slate">{arduinoUno.board}</p>
          <h3 id="arduino-title" className="display-md mt-2">
            {arduinoUno.name}
          </h3>
          <p className="mt-4 text-[1.0625rem] leading-relaxed text-slate">{arduinoUno.summary}</p>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
            <StatusPill status={arduinoUno.status} tone="light" />
            <ArrowLink href={arduinoUno.repo} tone="light" external>
              Watch the repo
              <span className="sr-only">: ArduinoUNO</span>
            </ArrowLink>
          </div>
        </article>

        <article aria-labelledby="toolchains-title" className="reveal rounded-[1.75rem] bg-white p-7 ring-1 ring-line-light sm:p-10">
          <p className="text-sm font-semibold text-slate">hardware-bringup</p>
          <h3 id="toolchains-title" className="display-md mt-2">
            Detected, not configured.
          </h3>
          <p className="mt-4 text-[1.0625rem] leading-relaxed text-slate">
            The skill reads the repo to pick a toolchain. The rules stay the same on every one of them.
          </p>
          <table className="mt-6 w-full text-left text-[0.9375rem]">
            <caption className="sr-only">Toolchains hardware-bringup detects, and the file that signals each</caption>
            <thead>
              <tr className="text-[0.8125rem] text-slate">
                <th scope="col" className="pb-2 font-medium">Toolchain</th>
                <th scope="col" className="pb-2 font-medium">Signal</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line-light">
              {toolchains.map((t) => (
                <tr key={t.name}>
                  <th scope="row" className="py-2.5 pr-4 font-medium">
                    {t.name}
                  </th>
                  <td className="py-2.5 font-mono text-[0.8125rem] text-slate">{t.signal}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </article>
      </div>
    </Section>
  )
}
