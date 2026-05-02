import { motion } from 'framer-motion'
import './About.css'
import BentoGrid from '../BentoGrid/BentoGrid'

const CARDS = [
  {
    icon: '🎓',
    title: 'Education',
    text: 'Computer Science student at Vancouver Island University. I care most about user experience, trust, and long-term retention. I enjoy building systems where small design decisions compound over time, especially in social and AI-driven products.',
  },
  {
    icon: '💻',
    title: 'Expertise',
    text: 'Full-stack web development with React, Next.js, and Firebase, with a focus on integrating AI models like OpenAI GPT and Claude into real products. Comfortable working across the entire stack, from designing responsive frontends to building serverless backends, managing databases, and deploying to production.',
  },
  {
    icon: '🚀',
    title: 'Entrepreneurship',
    text: 'Founder of Looply, an AI-powered web app that helps creators and builders plan content strategies and scope MVP applications. Instead of generic chatbots, Looply uses structured workflows to guide users step by step, remembering their goals, niche, and progress across sessions.',
  },
  {
    icon: '🌍',
    title: 'Global Access',
    text: "I'm building a life around tech, travel, and international opportunity. As an Italian passport holder still studying in North America, I have access to 192 destinations without a prior visa, and I see mobility as more than movement. It's access to new markets, cultures, and ideas.",
  },
]

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
          viewport={{ once: true, margin: '-80px' }}
        >
          About Me
        </motion.h2>
        <motion.p
          className="section-subtitle"
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          CS student, builder, and aspiring founder focused on creating products people actually use.
        </motion.p>
        <BentoGrid cards={CARDS} />
      </div>
    </section>
  )
}
