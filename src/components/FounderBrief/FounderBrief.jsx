import { motion } from 'framer-motion'
import './FounderBrief.css'

// To post a new founder brief, add an object to this array with a new `date`
// (ISO YYYY-MM-DD) and `body` (one string per paragraph). Order in the array
// doesn't matter — entries are sorted by date so the newest always lands on top.
const BRIEFS = [
  {
    title: 'The high velocity Execution Archetype',
    date: '2026-05-19',
    body: [
      'I build high velocity software at the intersection of AI, cybersecurity, and maybe developing my own social platform that other platforms do not have yet. At 28 y/o, my primary interest is a specialization in artificial intelligence (AI), a trajectory I have been on since I taught myself Python when I was 16 y/o. My focus is entirely on technical execution and relentless iteration to find market fit. Currently studying Quantitative Finance and Computer Science at Vancouver Island University, I divide my time between deep academic theory and shipping production ready code.',
    ],
  },
  {
    title: 'The 4.0 Trap: Arbitraging My GPA for Shipping Velocity',
    subtitle: 'Academic perfection is an employee metric',
    date: '2026-05-22',
    body: [
      "When I see someone optimizing for a 4.0 GPA, all I see is someone signaling to the market that they are exceptional at executing someone else’s roadmap. They are training to be a highly compliant asset for someone like me. This is the first post on my site, so I am setting the baseline right now: I view optimizing for the Dean's List as a massive misallocation of my bandwidth. I refuse to pour hundreds of hours into a legacy syllabus just to flex a vanity metric that zero users, investors, or technical co-founders actually care about.",
      "For me, taking a C isn't a failure of intelligence; it is a calculated resource allocation. As a founder, my most constrained asset is time. The delta between a 75% and a 95% in a theoretical prerequisite costs dozens of hours. I see that as an arbitrage opportunity. I refuse to pay that tax. I take those hours and route them directly into my CLI.",
    ],
    bullets: [
      "Proof of Capacity > Proof of Compliance: Look at my transcript. I took a C in Calculus I. Then, I turned around and dropped an A- in Calculus II — universally recognized as the hardest weed-out class in the sequence. I don't lack the compute to get an A; I just refuse to allocate it unless the underlying mechanics actually matter to what I'm building. Calc II math scales to the LLMs I work with. Calc I syllabus quizzes do not. That A- proves I can dominate complex mechanics when the ROI is there. Grinding for baseline A's is just wasted bandwidth to me.",
      "The Market Has No Syllabus: Academia rewards me for staying inside the sandbox. I know startups reward me for breaking it. Prototyping my AI product demands product-first logic, rapid iteration, and ruthless execution. A classroom cannot test for my agency.",
      "Asymmetric Leverage: While the rest of my cohort is memorizing syntax for a final exam, I am living inside Claude Code. I am wiring up custom agent skills, testing local-first architectures, and pushing the boundaries of what AI can execute in my real-world codebase. I don't memorize code; I direct it. I am building infrastructure while they are building study guides.",
    ],
    outro: [
      'The valedictorian of my class is going to graduate with a framed piece of paper, a flawless transcript, and a resume begging for permission to build. I am graduating with a portfolio of shipped software, a network of builders, and an intuition for the tools that will render their future job obsolete.',
      'My degree is just a hedge. My shipped product is the thesis.',
    ],
  },
]

const gridVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const entryVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
}

function formatDate(iso) {
  return new Date(`${iso}T00:00:00`).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}

export default function FounderBrief() {
  const briefs = [...BRIEFS].sort((a, b) => b.date.localeCompare(a.date))

  return (
    <section id="founder-brief" className="founder-section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          Founder Briefs
        </motion.h2>
        <motion.div
          className="founder-list"
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {briefs.map((brief) => (
            <motion.article
              key={`${brief.date}-${brief.title}`}
              className="founder-entry"
              variants={entryVariants}
            >
              <p className="founder-updated">
                <span className="founder-updated-date">{formatDate(brief.date)}</span>
              </p>
              <h3 className="founder-entry-title">{brief.title}</h3>
              {brief.subtitle && <p className="founder-subtitle">{brief.subtitle}</p>}
              <div className="founder-body">
                {brief.body.map((paragraph, i) => (
                  <p key={i} className="founder-text">{paragraph}</p>
                ))}
                {brief.bullets && brief.bullets.length > 0 && (
                  <ul className="founder-bullets">
                    {brief.bullets.map((bullet, i) => (
                      <li key={i}>{bullet}</li>
                    ))}
                  </ul>
                )}
                {brief.outro && brief.outro.map((paragraph, i) => (
                  <p key={`outro-${i}`} className="founder-text">{paragraph}</p>
                ))}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
