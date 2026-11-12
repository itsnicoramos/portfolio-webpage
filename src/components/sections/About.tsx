import Image from 'next/image'
import { about } from '@/content/about'
import portrait from '@/assets/nico-ramos.jpeg'
import { Card, Section } from '../ui'

export function About() {
  const { humor } = about
  return (
    <Section id="about" theme="white">
      <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div className="reveal lg:self-start lg:[@media(min-height:820px)]:sticky lg:[@media(min-height:820px)]:top-24">
          <p className="eyebrow mb-5 text-ink-muted">About me</p>
          <h2 id="about-title" className="display-lg">
            {about.title}
          </h2>
          <Card surface="paper" pad="none" className="mt-10 overflow-hidden">
            <Image
              src={portrait}
              alt="Nico Ramos outdoors on a sunny day, wearing tinted glasses, a pink linen shirt and a backpack."
              sizes="(min-width: 1024px) 40vw, 100vw"
              placeholder="blur"
              className="h-auto w-full"
            />
          </Card>
        </div>

        <div>
          <div className="space-y-6 text-lg leading-relaxed text-ink">
            {about.paragraphs.map((p, i) => (
              <p key={i} className="reveal text-pretty">
                {p}
              </p>
            ))}
          </div>

          <div className="reveal mt-16">
            <h3 className="display-md">{about.beyond.title}</h3>
            <div className="mt-6 space-y-6 text-lg leading-relaxed text-ink">
              {about.beyond.paragraphs.map((p, i) => (
                <p key={i} className="text-pretty">
                  {p}
                </p>
              ))}
            </div>
          </div>

          <Card as="aside" surface="paper" aria-labelledby="humor-title" className="reveal mt-16">
            <h3 id="humor-title" className="title-md">
              {humor.title}
            </h3>
            <p className="mt-3 text-body text-ink-muted">{humor.lead}</p>

            <div className="mt-8 flex items-center gap-3" role="img" aria-label="Bromine, element 35, next to Barium, element 56, spelling BrBa.">
              {humor.elements.map((el) => (
                <div
                  key={el.symbol}
                  className="flex aspect-square w-28 flex-col justify-between rounded-tile bg-ink p-3 text-fg shadow-elevated sm:w-32"
                >
                  <span className="font-mono text-meta font-semibold tabular-nums">{el.number}</span>
                  <span className="text-center font-display text-4xl sm:text-5xl">{el.symbol}</span>
                  <span className="flex justify-between font-mono text-2xs text-fg-muted">
                    <span>{el.name}</span>
                    <span className="tabular-nums">{el.mass}</span>
                  </span>
                </div>
              ))}
            </div>

            <p className="mt-8 text-body font-medium">{humor.equation}</p>
            <p className="mt-2 text-body text-ink-muted">{humor.closing}</p>
          </Card>
        </div>
      </div>
    </Section>
  )
}
