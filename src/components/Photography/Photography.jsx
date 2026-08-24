import { motion } from 'framer-motion'
import './Photography.css'

export default function Photography() {
  return (
    <section id="photography" className="photography-section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          Photography
        </motion.h2>
      </div>
    </section>
  )
}
