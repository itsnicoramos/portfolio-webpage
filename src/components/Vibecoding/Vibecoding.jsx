import { motion } from 'framer-motion'
import './Vibecoding.css'

export default function Vibecoding() {
  return (
    <section id="vibecoding" className="vibecoding-section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          Vibecoding
        </motion.h2>
      </div>
    </section>
  )
}
