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
              <div className="founder-body">
                {brief.body.map((paragraph, i) => (
                  <p key={i} className="founder-text">{paragraph}</p>
                ))}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
