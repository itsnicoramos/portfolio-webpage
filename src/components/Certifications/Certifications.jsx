import './Certifications.css'

const CERTIFICATIONS = [
  {
    title: 'Master Claude Code, Plugins and Skills to Build AI Applications, Automate Business with Cowork, Deploy Autonomous Agents',
    issuer: 'Anthropic',
    date: '2026',
    desc: 'Hands-on training in Claude Code: building plugins and skills for AI applications, automating business workflows with Cowork, and deploying autonomous agents.',
    skills: [
      'Claude Code',
      'Plugins & Skills',
      'Cowork',
      'Autonomous Agents',
      'AI Applications',
    ],
  },
]

export default function Certifications() {
  return (
    <section id="certifications" className="certifications-section">
      <div className="container">
        <h2 className="section-title scroll-fade">Certifications</h2>
        <p className="section-subtitle scroll-fade">
          Credentials and continued learning.
        </p>
        <div className="cert-grid">
          {CERTIFICATIONS.map((c) => (
            <div key={c.title} className="cert-card scroll-fade">
              <span className="cert-badge">CERTIFICATION</span>
              <h3>{c.title}</h3>
              <div className="cert-meta">
                <span className="cert-issuer">{c.issuer}</span>
                <span className="cert-date">{c.date}</span>
              </div>
              <p className="cert-desc">{c.desc}</p>
              <div className="tech-tags">
                {c.skills.map((s) => (
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
