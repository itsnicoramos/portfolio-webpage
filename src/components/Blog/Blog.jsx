import './Blog.css'

export default function Blog() {
  return (
    <section id="blog" className="blog-section">
      <div className="container">
        <h2 className="section-title scroll-fade">Blog</h2>
        <p className="blog-updated scroll-fade">Last updated Feb 19, 2026</p>
        <p className="section-subtitle scroll-fade">
          Short posts on what I'm learning, building, and figuring out.
        </p>

        <div className="blog-featured scroll-fade">
          <a
            href="/blog/post.html?slug=claude-opus-46-frontend"
            className="blog-card"
          >
            <div className="blog-card-meta">
              <span className="blog-date">Feb 19, 2026</span>
              <span className="blog-dot-sep">&middot;</span>
              <span className="blog-tag">Building in Public</span>
            </div>
            <h3 className="blog-card-title">Using Claude Opus 4.6 as a Pair Builder</h3>
            <p className="blog-card-excerpt">
              I used my reading break to experiment with Claude Opus 4.6 as a pair builder for UI work. Here's what surprised me, and what it can't replace.
            </p>
            <span className="blog-read-more">Read post &rarr;</span>
          </a>

          <div className="blog-cta">
            <a href="/blog/" className="btn btn-primary">Visit Blog</a>
          </div>
        </div>
      </div>
    </section>
  )
}
