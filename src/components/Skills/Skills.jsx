import { motion } from 'framer-motion'
import './Skills.css'

const SKILL_CATEGORIES = [
  {
    icon: 'fas fa-palette',
    title: 'Frontend',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Next.js', 'TypeScript'],
  },
  {
    icon: 'fas fa-server',
    title: 'Backend',
    skills: ['C / C++', 'Python', 'SQL (SQLite)', 'Firebase', 'Node.js'],
  },
  {
    icon: 'fas fa-wrench',
    title: 'Tools',
    skills: ['Git & GitHub', 'Linux', 'NPM', 'VS Code', 'Vite', 'Vercel'],
  },
  {
    icon: 'fas fa-book-open',
    title: 'Currently Learning',
    skills: ['MongoDB', 'Prisma', 'Redux Toolkit', 'LLM Integration', 'Prompt Engineering'],
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
}

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          Technical Skills
        </motion.h2>
        <motion.div
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {SKILL_CATEGORIES.map((cat) => (
            <motion.div key={cat.title} className="skill-card" variants={cardVariants}>
              <i className={cat.icon} style={{ fontSize: '1.5rem', color: 'var(--accent)', marginBottom: '12px', display: 'block' }}></i>
              <strong>{cat.title}</strong>
              <div className="tech-tags" style={{ marginTop: '12px' }}>
                {cat.skills.map((s) => (
                  <span key={s} className="tech-tag">{s}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
