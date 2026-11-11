import { ArrowLink, PillLink } from '../ui'

export function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="home-title"
      tabIndex={-1}
      className="theme-dark relative isolate flex min-h-[100svh] items-center overflow-hidden pb-20 pt-28 outline-none"
    >
      <div className="hero-glow pointer-events-none absolute -inset-[10%] -z-10" aria-hidden="true" />

      <div className="container-page">
        <p className="rise-in mb-6 text-base font-semibold text-mist sm:text-lg">Nico Ramos · Computer Engineering</p>
        <h1 id="home-title" className="display-xl max-w-5xl text-balance">
          Curiosity, <span className="text-gradient-hero">engineered.</span>
        </h1>
        <p className="rise-in lead mt-8 max-w-2xl text-pretty text-mist [animation-delay:120ms]">
          I build AI learning tools, agent skills and hardware experiments, and I test what I claim before I say it works.
        </p>
        <div className="rise-in mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 [animation-delay:220ms]">
          <PillLink href="#prooflab">Explore projects</PillLink>
          <ArrowLink href="#contact">Get in touch</ArrowLink>
        </div>
      </div>
    </section>
  )
}
