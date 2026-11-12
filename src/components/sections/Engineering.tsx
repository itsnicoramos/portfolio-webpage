import { aiEngineering, cyberbank, portfolio } from '@/content/projects'
import { ProofLabCard } from './ProofLab'
import { ArrowLink, Card, CardEyebrow, Section, SectionHeader, StatusPill, TagList } from '../ui'

export function Engineering() {
  return (
    <Section id="engineering" theme="dark">
      <SectionHeader
        id="engineering"
        eyebrow="Engineering & CS"
        title="Fundamentals, built by hand."
        lead="ProofLab, the math learning tool I build, the open-source course I am learning AI engineering from, a banking engine written from the standard library up, and the site you are reading."
      />

      <ProofLabCard />

      <Card as="article" pad="lg" aria-labelledby="ai-engineering-title" className="reveal relative mt-6 overflow-hidden">
        <div className="glow-corner pointer-events-none absolute -right-32 -top-32 size-96 rounded-full" aria-hidden="true" />
        <div className="relative grid gap-12 lg:grid-cols-[1fr_1.35fr] lg:gap-16">
          <div className="flex flex-col">
            <CardEyebrow>Open source · by Rohit Ghumare</CardEyebrow>
            <h3 id="ai-engineering-title" className="display-md mt-3">
              {aiEngineering.name}
            </h3>
            <p className="subtitle mt-3 text-fg">{aiEngineering.tagline}</p>
            <p className="mt-4 text-body text-fg-muted">{aiEngineering.summary}</p>
            <div className="mt-auto space-y-6 pt-10">
              <StatusPill status={aiEngineering.status} />
              <TagList items={aiEngineering.stack} label="AI Engineering from Scratch topics" />
              <p className="font-mono text-meta text-fg-muted">License: {aiEngineering.license}.</p>
              <div className="flex flex-wrap gap-x-6">
                {aiEngineering.links.map((link) => (
                  <ArrowLink key={link.href} href={link.href} external>
                    {link.label}
                    <span className="sr-only">: AI Engineering from Scratch</span>
                  </ArrowLink>
                ))}
              </div>
            </div>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2">
            {aiEngineering.points.map((p) => (
              <Card as="li" surface="tile" pad="sm" key={p.title}>
                <h4 className="title-sm">{p.title}</h4>
                <p className="mt-2 text-ui text-fg-muted">{p.body}</p>
              </Card>
            ))}
          </ul>
        </div>
      </Card>

      <Card as="article" pad="lg" aria-labelledby="cyberbank-title" className="reveal relative mt-6 overflow-hidden">
        <div className="glow-corner pointer-events-none absolute -right-32 -top-32 size-96 rounded-full" aria-hidden="true" />
        <div className="relative grid gap-12 lg:grid-cols-[1fr_1.35fr] lg:gap-16">
          <div className="flex flex-col">
            <CardEyebrow>Featured</CardEyebrow>
            <h3 id="cyberbank-title" className="display-md mt-3">
              {cyberbank.name}
            </h3>
            <p className="subtitle mt-3 text-fg">{cyberbank.tagline}</p>
            <p className="mt-4 text-body text-fg-muted">{cyberbank.summary}</p>
            <div className="mt-auto space-y-6 pt-10">
              <StatusPill status={cyberbank.status} />
              <TagList items={cyberbank.stack} label="CyberBank stack" />
              <p className="font-mono text-meta text-fg-muted">License: {cyberbank.license}.</p>
              <ArrowLink href={cyberbank.repo} external>
                View on GitHub
                <span className="sr-only">: CyberBank</span>
              </ArrowLink>
            </div>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2">
            {cyberbank.points.map((p) => (
              <Card as="li" surface="tile" pad="sm" key={p.title}>
                <h4 className="title-sm">{p.title}</h4>
                <p className="mt-2 text-ui text-fg-muted">{p.body}</p>
              </Card>
            ))}
          </ul>
        </div>
      </Card>

      <Card
        as="article"
        pad="lg"
        aria-labelledby="portfolio-title"
        className="reveal mt-6 grid gap-10 lg:grid-cols-[1fr_1.35fr] lg:gap-16"
      >
        <div className="flex flex-col">
          <CardEyebrow>This website</CardEyebrow>
          <h3 id="portfolio-title" className="display-md mt-3">
            {portfolio.name}
          </h3>
          <p className="subtitle mt-3 text-fg">{portfolio.tagline}</p>
          <p className="mt-4 text-body text-fg-muted">{portfolio.summary}</p>
          <div className="mt-auto space-y-6 pt-10">
            <StatusPill status={portfolio.status} />
            <TagList items={portfolio.stack} label="itsnico.dev stack" />
            <p className="font-mono text-meta text-fg-muted">License: {portfolio.license}.</p>
            <ArrowLink href={portfolio.repo} external>
              View on GitHub
              <span className="sr-only">: itsnico.dev</span>
            </ArrowLink>
          </div>
        </div>
        <ul className="grid gap-4 sm:grid-cols-2">
          {portfolio.points.map((p) => (
            <Card as="li" surface="tile" pad="sm" key={p.title}>
              <h4 className="title-sm">{p.title}</h4>
              <p className="mt-2 text-ui text-fg-muted">{p.body}</p>
            </Card>
          ))}
        </ul>
      </Card>
    </Section>
  )
}
