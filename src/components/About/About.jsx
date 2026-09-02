import { motion } from 'framer-motion'
import BlurImage from '../ui/BlurImage'
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
        <motion.div
          className="about-content"
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          <div className="about-photo">
            <BlurImage src="/img/profileNico.jpeg" alt="Nico Ramos" />
          </div>
          <div className="about-copy">
            <p className="about-text">
              I do not just write code. I command systems. I have an aggressive backlog of ideas, and I possess the exact technical capability required to force them into reality. I taught myself Python when I was  16 because the traditional pace of learning was too slow.
            </p>
            <p className="about-text">
              I do not waste my time working for big tech companies. I build my own. My execution is ruthless and precise: architect the entire ecosystem, ship it before anyone else even understands the market, and scale it until it is undeniable.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
