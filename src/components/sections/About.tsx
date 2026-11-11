import Image from 'next/image'
import { about } from '@/content/about'
import portrait from '@/assets/nico-ramos.jpeg'
import { Section } from '../ui'

export function About() {
  const { humor } = about
  return (
    <Section id="about" theme="white">
      <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div className="reveal lg:self-start lg:[@media(min-height:820px)]:sticky lg:[@media(min-height:820px)]:top-24">
          <p className="mb-4 text-sm font-semibold tracking-wide text-slate sm:text-base">About me</p>
          <h2 id="about-title" className="display-lg text-balance">
            {about.title}
          </h2>
          <div className="mt-10 overflow-hidden rounded-[1.75rem] bg-paper">
            <Image
              src={portrait}
              alt="Nico Ramos outdoors on a sunny day, wearing tinted glasses, a pink linen shirt and a backpack."
              sizes="(min-width: 1024px) 40vw, 100vw"
              placeholder="blur"
              className="h-auto w-full"
            />
          </div>
        </div>

        <div>
          <div className="space-y-6 text-[1.125rem] leading-[1.7] text-ink/85 sm:text-[1.1875rem]">
            {about.paragraphs.map((p, i) => (
              <p key={i} className="reveal text-pretty">
                {p}
              </p>
            ))}
          </div>

          <div className="reveal mt-16">
            <h3 className="display-md">{about.beyond.title}</h3>
            <div className="mt-6 space-y-6 text-[1.125rem] leading-[1.7] text-ink/85 sm:text-[1.1875rem]">
              {about.beyond.paragraphs.map((p, i) => (
                <p key={i} className="text-pretty">
                  {p}
                </p>
              ))}
            </div>
          </div>

          <aside aria-labelledby="humor-title" className="reveal mt-16 rounded-[1.75rem] bg-paper p-7 sm:p-10">
            <h3 id="humor-title" className="text-xl font-semibold tracking-tight">
              {humor.title}
            </h3>
            <p className="mt-3 text-[1.0625rem] leading-relaxed text-slate">{humor.lead}</p>

            <div className="mt-8 flex items-center gap-3" role="img" aria-label="Bromine, element 35, next to Barium, element 56, spelling BrBa.">
              {humor.elements.map((el) => (
                <div
                  key={el.symbol}
                  className="flex aspect-square w-28 flex-col justify-between rounded-2xl bg-ink p-3 text-snow shadow-lg sm:w-32"
                >
                  <span className="text-[0.8125rem] font-semibold tabular-nums">{el.number}</span>
                  <span className="text-center text-4xl font-semibold tracking-tight sm:text-5xl">{el.symbol}</span>
                  <span className="flex justify-between text-[0.6875rem] text-mist">
                    <span>{el.name}</span>
                    <span className="tabular-nums">{el.mass}</span>
                  </span>
                </div>
              ))}
            </div>

            <p className="mt-8 text-[1.0625rem] font-medium">{humor.equation}</p>
            <p className="mt-2 text-[1.0625rem] leading-relaxed text-slate">{humor.closing}</p>
          </aside>
        </div>
      </div>
    </Section>
  )
}
