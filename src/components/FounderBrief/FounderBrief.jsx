import { motion } from 'framer-motion'
import './FounderBrief.css'

const LAST_UPDATED = '26/05/19'

export default function FounderBrief() {
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
          The high velocity "The Zuckerberg" Archetype
        </motion.h2>
        <motion.p
          className="founder-updated"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          <span className="founder-updated-label">Last updated</span>
          <span className="founder-updated-date">{LAST_UPDATED}</span>
        </motion.p>
        <motion.div
          className="founder-body"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="founder-text">
            I build high velocity software at the intersection of AI, cybersecurity, and maybe developing my own social platform that other platforms do not have yet. At 28 y/o, my primary interest is a specialization in artificial intelligence (AI), a trajectory I have been on since I taught myself Python when I was 16 y/o. My focus is entirely on technical execution and relentless iteration to find market fit. Currently studying Quantitative Finance and Computer Science at Vancouver Island University, I divide my time between deep academic theory and shipping production ready code.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
