import { motion } from 'framer-motion'
import './BentoGrid.css'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export default function BentoGrid({ cards }) {
  const spanClasses = [
    'bento-card bento-card--wide',
    'bento-card',
    'bento-card',
    'bento-card bento-card--wide',
  ]

  return (
    <motion.div
      className="bento-grid"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
    >
      {cards.map((card, i) => (
        <motion.div
          key={card.title}
          className={spanClasses[i] || 'bento-card'}
          variants={cardVariants}
        >
          <h3>{card.icon} {card.title}</h3>
          <p>{card.text}</p>
        </motion.div>
      ))}
    </motion.div>
  )
}
