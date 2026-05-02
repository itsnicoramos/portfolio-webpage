import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
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

  const links = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#certifications', label: 'Certifications' },
    { href: '#travel', label: 'Travel' },
    { href: '#contact', label: 'Connect' },
  ]

  return (
    <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <a href="#home" className="nav-logo">Nico</a>

      <ul className={`nav-menu${menuOpen ? ' nav-menu--open' : ''}`}>
        {links.map((link) => (
          <li key={link.href}>
            <motion.a
              href={link.href}
              onClick={closeMenu}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.1 }}
            >
              {link.label}
            </motion.a>
          </li>
        ))}
      </ul>

      <motion.button
        className="menu-toggle"
        onClick={() => setMenuOpen(o => !o)}
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
        whileTap={{ scale: 0.9 }}
        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      >
        <i className={menuOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
      </motion.button>
    </nav>
  )
}
