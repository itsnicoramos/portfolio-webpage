import { motion } from 'framer-motion'
import './FounderBrief.css'

const BRIEF_ITEMS = [
  {
    icon: 'fas fa-bullseye',
    label: 'Operating thesis',
    body: '',
  },
  {
    icon: 'fas fa-compass',
    label: 'How I build',
    body: '',
  },
  {
    icon: 'fas fa-bolt',
    label: 'Where I focus',
    body: '',
  },
  {
    icon: 'fas fa-handshake',
    label: 'What I want',
    body: '',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
}

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
          Founder Brief
        </motion.h2>
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          A short read on how I think, what I'm building, and who I want to meet.
        </motion.p>
        <motion.div
          className="founder-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {BRIEF_ITEMS.map((item) => (
            <motion.div key={item.label} className="founder-card" variants={itemVariants}>
              <div className="founder-card-head">
                <i className={`${item.icon} founder-card-icon`}></i>
                <span className="founder-card-label">{item.label}</span>
              </div>
              <p className="founder-card-body">{item.body}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
