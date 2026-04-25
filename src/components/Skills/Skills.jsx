import './Skills.css'

const SKILL_CATEGORIES = [
  {
    icon: 'fas fa-palette',
    title: 'Frontend',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Next.js', 'TypeScript'],
    delay: '',
  },
  {
    icon: 'fas fa-server',
    title: 'Backend',
    skills: ['C / C++', 'Python', 'SQL (SQLite)', 'Firebase', 'Node.js'],
    delay: 'scroll-fade-delay-1',
  },
  {
    icon: 'fas fa-wrench',
    title: 'Tools',
    skills: ['Git & GitHub', 'Linux', 'NPM', 'VS Code', 'Vite', 'Vercel'],
    delay: 'scroll-fade-delay-2',
  },
  {
    icon: 'fas fa-book-open',
    title: 'Currently Learning',
    skills: ['MongoDB', 'Prisma', 'Redux Toolkit', 'LLM Integration', 'Prompt Engineering'],
    delay: 'scroll-fade-delay-3',
  },
]

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title scroll-fade">Technical Skills</h2>
        <div className="skills-grid">
          {SKILL_CATEGORIES.map((cat) => (
            <div key={cat.title} className={`skill-card scroll-fade ${cat.delay}`}>
              <i className={cat.icon} style={{ fontSize: '1.5rem', color: 'var(--accent)', marginBottom: '12px', display: 'block' }}></i>
              <strong>{cat.title}</strong>
              <div className="tech-tags" style={{ marginTop: '12px' }}>
                {cat.skills.map((s) => (
                  <span key={s} className="tech-tag">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
