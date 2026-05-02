import './Hero.css'
import BlurImage from '../ui/BlurImage'

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-hello">Hello<span className="hero-dot">.</span></h1>
          <p className="hero-iam">I'm Nico</p>
          <h2 className="hero-role">Student founder &amp; Entrepreneur</h2>
          <div className="cta-buttons">
            <a href="#contact" className="btn btn-primary">Got a project?</a>
            <a href="https://www.linkedin.com/in/nico-ramos28" target="_blank" rel="noreferrer" className="btn btn-outline">My resume</a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-img-wrap">
            <div className="hero-image">
              <BlurImage src="/img/profileNico.jpeg" alt="Nico Ramos" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
