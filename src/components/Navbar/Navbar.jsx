import { useState, useEffect } from 'react'
import './Navbar.css'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <a href="#home" className="nav-logo">Nico</a>

      <ul className={`nav-menu${menuOpen ? ' nav-menu--open' : ''}`}>
        <li><a href="#home" onClick={closeMenu}>Home</a></li>
        <li><a href="#about" onClick={closeMenu}>About</a></li>
        <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
        <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
        <li><a href="#certifications" onClick={closeMenu}>Certifications</a></li>
        <li><a href="#travel" onClick={closeMenu}>Travel</a></li>
        <li><a href="#contact" onClick={closeMenu}>Connect</a></li>
      </ul>

      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(o => !o)}
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
      >
        <i className={menuOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
      </button>
    </nav>
  )
}
