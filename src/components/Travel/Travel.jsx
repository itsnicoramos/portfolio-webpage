import './Travel.css'

const TRAVEL_CARDS = [
  {
    icon: '🌏',
    title: 'Explorer',
    text: "When I'm not coding, I'm exploring new cultures, cuisines, and perspectives. Travel fuels my creativity and broadens how I approach problem-solving in tech.",
    delay: '',
  },
  {
    icon: '📸',
    title: 'Visual Storyteller',
    text: 'Capturing moments and sharing travel experiences through short-form video. Every trip becomes content that connects and inspires others.',
    delay: 'scroll-fade-delay-1',
  },
  {
    icon: '🎯',
    title: 'Dream Destinations',
    text: 'Japan for tech culture, Switzerland for nature, Silicon Valley to connect with the startup ecosystem, and Dubai for real estate and a tax-free environment. Building a global perspective one trip at a time.',
    delay: 'scroll-fade-delay-2',
  },
]

export default function Travel() {
  return (
    <section id="travel" className="travel-section">
      <div className="container">
        <h2 className="section-title scroll-fade">Travel</h2>
        <p className="travel-eyebrow scroll-fade">Moments from the road</p>
        <p className="section-subtitle scroll-fade">
          Short-form clips and moments from around the world.
        </p>

        <div className="shorts-row scroll-fade">
          <div className="short-card">
            <div className="short-placeholder">
              <i className="fab fa-instagram"></i>
              <span>Travel Reel</span>
              <p>Coming Soon</p>
            </div>
          </div>
          <div className="short-card">
            <div className="short-placeholder">
              <i className="fab fa-instagram"></i>
              <span>Travel Reel</span>
              <p>Coming Soon</p>
            </div>
          </div>
        </div>

        <div className="travel-instagram-link scroll-fade">
          <a
            href="https://www.instagram.com/itsnicoramos__"
            target="_blank"
            rel="noreferrer"
            className="travel-ig-link"
          >
            <i className="fab fa-instagram"></i> See more on Instagram
          </a>
        </div>

        <div className="travel-grid">
          {TRAVEL_CARDS.map((card) => (
            <div key={card.title} className={`travel-card scroll-fade ${card.delay}`}>
              <div className="travel-icon">{card.icon}</div>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
