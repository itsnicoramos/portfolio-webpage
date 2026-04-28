import { useEffect } from 'react'

export default function useInteractive() {
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const isTouch = window.matchMedia('(hover: none)').matches
    if (reduced || isTouch) return

    const glow = document.querySelector('.cursor-glow')
    const progress = document.querySelector('.scroll-progress')

    let mouseX = 0, mouseY = 0
    let glowX = 0, glowY = 0
    let scrollY = window.scrollY
    let raf = 0

    const onMouseMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    const onScroll = () => {
      scrollY = window.scrollY
      if (progress) {
        const max = document.documentElement.scrollHeight - window.innerHeight
        const pct = max > 0 ? (scrollY / max) * 100 : 0
        progress.style.width = pct + '%'
      }
    }

    const tick = () => {
      glowX += (mouseX - glowX) * 0.15
      glowY += (mouseY - glowY) * 0.15
      if (glow) glow.style.transform = `translate3d(${glowX}px, ${glowY}px, 0) translate(-50%, -50%)`

      const hero = document.querySelector('.hero-content')
      if (hero) hero.style.transform = `translateY(${scrollY * 0.15}px)`

      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)

    // Project card tilt + cursor-position spotlight
    const cards = document.querySelectorAll('.project-card')
    const cardHandlers = []
    cards.forEach((card) => {
      const onMove = (e) => {
        const r = card.getBoundingClientRect()
        const x = (e.clientX - r.left) / r.width
        const y = (e.clientY - r.top) / r.height
        const rx = (0.5 - y) * 4
        const ry = (x - 0.5) * 4
        card.style.setProperty('--mx', `${x * 100}%`)
        card.style.setProperty('--my', `${y * 100}%`)
        card.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-2px)`
      }
      const onLeave = () => {
        card.style.transform = ''
      }
      card.addEventListener('mousemove', onMove)
      card.addEventListener('mouseleave', onLeave)
      cardHandlers.push([card, onMove, onLeave])
    })

    // Magnetic buttons
    const btns = document.querySelectorAll('.btn')
    const btnHandlers = []
    btns.forEach((btn) => {
      const onMove = (e) => {
        const r = btn.getBoundingClientRect()
        const x = e.clientX - (r.left + r.width / 2)
        const y = e.clientY - (r.top + r.height / 2)
        btn.style.transform = `translate(${x * 0.18}px, ${y * 0.18}px)`
      }
      const onLeave = () => { btn.style.transform = '' }
      btn.addEventListener('mousemove', onMove)
      btn.addEventListener('mouseleave', onLeave)
      btnHandlers.push([btn, onMove, onLeave])
    })

    window.addEventListener('mousemove', onMouseMove, { passive: true })
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('scroll', onScroll)
      cardHandlers.forEach(([el, m, l]) => {
        el.removeEventListener('mousemove', m)
        el.removeEventListener('mouseleave', l)
      })
      btnHandlers.forEach(([el, m, l]) => {
        el.removeEventListener('mousemove', m)
        el.removeEventListener('mouseleave', l)
      })
    }
  }, [])
}
