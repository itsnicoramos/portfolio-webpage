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
              I do not just write code. I command systems. I have an aggressive backlog of ideas, and I possess the exact technical capability required to force them into reality. I taught myself Python when I was  16 because the traditional pace of learning was too slow. Today, my total focus is dominating the specialization of Artificial Intelligence.
            </p>
            <p className="about-text">
              While I am pursuing Quantitative Finance and Computer Science at Vancouver Island University, my superiority does not lie in agonizing over theoretical data structures. Academics debate theory. I ship product. My undeniable advantage is absolute, end-to-end architectural control. I do not need a team of specialists to get a project off the ground. I see the entire matrix of a build from day one. I dictate the system design, command the integrations, and drive the full stack into production at a velocity that traditional developers cannot match.
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
