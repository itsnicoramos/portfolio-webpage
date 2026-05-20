import './Contact.css'
import { Pressable } from '../ui/MicroInteraction'

export default function Contact() {
  const handleEmail = (e) => {
    e.preventDefault()
    window.location.href = 'mailto:' + atob('bmljY285N3JAZ21haWwuY29t')
  }

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title scroll-fade">Open to Connect</h2>
        <p className="section-subtitle scroll-fade">
          I'm always open to founders, operators, and builders who want to share ideas, explore collabs, or just talk shop.
        </p>

        <div className="contact-groups scroll-fade">
          <div className="contact-group">
            <p className="contact-group-label">Work &amp; Build</p>
            <div className="social-grid">
              <Pressable>
                <a
                  href="https://www.linkedin.com/in/nico-ramos28"
                  target="_blank"
                  rel="noreferrer"
                  className="social-link"
                  title="LinkedIn"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
              </Pressable>
              <Pressable>
                <a
                  href="https://github.com/itsnicoramos"
                  target="_blank"
                  rel="noreferrer"
                  className="social-link"
                  title="GitHub"
                >
                  <i className="fab fa-github"></i>
                </a>
              </Pressable>
              <Pressable>
                <a
                  href="#"
                  className="social-link"
                  title="Email"
                  onClick={handleEmail}
                  aria-label="Send email"
                >
                  <i className="fas fa-envelope"></i>
                </a>
              </Pressable>
            </div>
          </div>

          <div className="contact-group">
            <p className="contact-group-label">Follow the Journey</p>
            <div className="social-grid">
              <Pressable>
                <a
                  href="https://x.com/Nico971858665"
                  target="_blank"
                  rel="noreferrer"
                  className="social-link"
                  title="X (Twitter)"
                >
                  <i className="fab fa-x-twitter"></i>
                </a>
              </Pressable>
              <Pressable>
                <a
                  href="https://www.tiktok.com/@itsnicoramos_"
                  target="_blank"
                  rel="noreferrer"
                  className="social-link"
                  title="TikTok"
                >
                  <i className="fab fa-tiktok"></i>
                </a>
              </Pressable>
              <Pressable>
                <a
                  href="https://www.instagram.com/itsnicoramos__"
                  target="_blank"
                  rel="noreferrer"
                  className="social-link"
                  title="Instagram"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </Pressable>
              <Pressable>
                <a
                  href="https://threads.net/itsnicoramos__"
                  target="_blank"
                  rel="noreferrer"
                  className="social-link"
                  title="Threads"
                >
                  <i className="fab fa-threads"></i>
                </a>
              </Pressable>
            </div>
          </div>
        </div>

        <div className="contact-form-cta scroll-fade">
          <p className="contact-form-label">Prefer a quick intro?</p>
          <Pressable>
            <a
              href="https://forms.gle/yuKdUE5XMxgZ2nG98"
              target="_blank"
              rel="noreferrer"
              className="contact-form-link"
            >
              <i className="fas fa-pen-to-square"></i>
              <span>Fill out my contact form</span>
              <i className="fas fa-arrow-right"></i>
            </a>
          </Pressable>
        </div>
      </div>
    </section>
  )
}
