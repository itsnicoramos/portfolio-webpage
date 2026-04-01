"use strict";
const NAMESPACE = 'itsnico-dev';
// ─── Post manifest ────────────────────────────────────────────────────────────
// To add a new post:
// ─────────────────────────────────────────────────────────────────────────────
const POSTS = [
    {
        slug: 'claude-opus-46-frontend',
        title: 'Using Claude Opus 4.6 as a Pair Builder',
        date: '2026-02-19',
        dateLabel: 'Feb 19, 2026',
        tag: 'Building in Public',
        excerpt: "I used my reading break to experiment with Claude Opus 4.6 as a pair builder for UI work. Here's what surprised me, and what it can't replace.",
        readTime: '3 min read',
        counterKey: 'blog-claude-opus-46',
    },
];
// ─── Blog index: render post cards ───────────────────────────────────────────
function renderPostList(containerId) {
    const container = document.getElementById(containerId);
    if (!container)
        return;
    container.innerHTML = POSTS.map((post) => `
    <a href="post.html?slug=${post.slug}" class="blog-card">
      <div class="blog-card-meta">
        <time datetime="${post.date}">${post.dateLabel}</time>
        <span class="blog-card-tag">${post.tag}</span>
        <span class="blog-views" id="card-views-${post.slug}" style="display:none;margin-left:auto;">
          <i class="fas fa-eye"></i> <span>0</span>
        </span>
      </div>
      <h2>${post.title}</h2>
      <p>${post.excerpt}</p>
      <span class="blog-card-read">Read post <i class="fas fa-arrow-right"></i></span>
    </a>
  `).join('');
    // Fetch view counts (read-only)
    POSTS.forEach((post) => {
        fetch(`https://api.counterapi.dev/v1/${NAMESPACE}/${post.counterKey}`)
            .then((r) => r.json())
            .then((data) => {
            const count = data === null || data === void 0 ? void 0 : data.count;
            if (count == null)
                return;
            const el = document.getElementById(`card-views-${post.slug}`);
            if (!el)
                return;
            const span = el.querySelector('span');
            if (span)
                span.textContent = count.toLocaleString();
            el.style.display = 'inline-flex';
        })
            .catch(() => { });
    });
}
// ─── Post page: fetch + render markdown ──────────────────────────────────────
function renderPost() {
    const params = new URLSearchParams(window.location.search);
    const slug = params.get('slug');
    if (!slug) {
        window.location.href = './';
        return;
    }
    const post = POSTS.find((p) => p.slug === slug);
    if (!post) {
        window.location.href = './';
        return;
    }
    // Update <title> and meta description
    document.title = `${post.title} | Nico Ramos`;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc)
        metaDesc.content = post.excerpt;
    // Populate header placeholders
    const titleEl = document.getElementById('post-title');
    if (titleEl)
        titleEl.textContent = post.title;
    const dateEl = document.getElementById('post-date');
    if (dateEl) {
        dateEl.setAttribute('datetime', post.date);
        dateEl.textContent = post.dateLabel;
    }
    const readTimeEl = document.getElementById('post-read-time');
    if (readTimeEl)
        readTimeEl.textContent = post.readTime;
    // Fetch markdown and render via marked
    fetch(`posts/${slug}.md`)
        .then((r) => {
        if (!r.ok)
            throw new Error('Post not found');
        return r.text();
    })
        .then((md) => {
        const contentEl = document.getElementById('post-content');
        if (contentEl)
            contentEl.innerHTML = marked.parse(md);
    })
        .catch(() => { window.location.href = './'; });
    // Increment and show view count
    fetch(`https://api.counterapi.dev/v1/${NAMESPACE}/${post.counterKey}/up`)
        .then((r) => r.json())
        .then((data) => {
        const count = data === null || data === void 0 ? void 0 : data.count;
        if (count == null)
            return;
        const el = document.getElementById('post-views');
        const countEl = document.getElementById('post-views-count');
        if (el && countEl) {
            countEl.textContent = count.toLocaleString();
            el.style.display = 'inline-flex';
        }
    })
        .catch(() => { });
}
