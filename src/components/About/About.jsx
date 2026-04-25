import './About.css'

const CARDS = [
  {
    icon: '🎓',
    title: 'Education',
    text: 'Computer Science student at Vancouver Island University. I care most about user experience, trust, and long-term retention. I enjoy building systems where small design decisions compound over time, especially in social and AI-driven products.',
    delay: '',
  },
  {
    icon: '💻',
    title: 'Expertise',
    text: 'Full-stack web development with React, Next.js, and Firebase, with a focus on integrating AI models like OpenAI GPT and Claude into real products. Comfortable working across the entire stack, from designing responsive frontends to building serverless backends, managing databases, and deploying to production.',
    delay: 'scroll-fade-delay-1',
  },
  {
    icon: '🚀',
    title: 'Entrepreneurship',
    text: 'Founder of Looply, an AI-powered web app that helps creators and builders plan content strategies and scope MVP applications. Instead of generic chatbots, Looply uses structured workflows to guide users step by step, remembering their goals, niche, and progress across sessions.',
    delay: 'scroll-fade-delay-2',
  },
  {
    icon: '🌍',
    title: 'Global Access',
    text: "I'm building a life around tech, travel, and international opportunity. As an Italian passport holder still studying in North America, I have access to 192 destinations without a prior visa, and I see mobility as more than movement. It's access to new markets, cultures, and ideas.",
    delay: 'scroll-fade-delay-3',
  },
]

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title scroll-fade">About Me</h2>
        <p className="section-subtitle scroll-fade">
          CS student, builder, and aspiring founder focused on creating products people actually use.
        </p>
        <div className="about-grid">
          {CARDS.map((card) => (
            <div key={card.title} className={`about-card scroll-fade ${card.delay}`}>
              <h3>{card.icon} {card.title}</h3>
              <p>{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
