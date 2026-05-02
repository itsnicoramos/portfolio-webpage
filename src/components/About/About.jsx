import { motion } from 'framer-motion'
import './About.css'

const titleVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <motion.h2
          className="section-title"
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          About Me
        </motion.h2>
        <motion.p
          className="about-text"
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          I'm a Computer Science student at Vancouver Island University focused on building products people actually use. I work across the full stack with React, Next.js, Firebase, and AI APIs like Claude and GPT. I founded Looply, an AI-powered web app for content strategy and MVP scoping, and I'm always exploring new ways to ship faster and learn deeper.
        </motion.p>
        <motion.p
          className="about-text"
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          As an Italian passport holder studying in North America, I see mobility as access to new markets, cultures, and ideas. I care about user experience, trust, and building systems where small design decisions compound over time.
        </motion.p>
      </div>
    </section>
  )
}
