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
    { href: '#home', label: 'Home', icon: 'fa-house' },
    { href: '#about', label: 'About', icon: 'fa-user' },
    { href: '#projects', label: 'Projects', icon: 'fa-folder-open' },
    { href: '#founder-brief', label: 'Founder Brief', icon: 'fa-rocket' },
    { href: '#skills', label: 'Skills', icon: 'fa-code' },
    { href: '#certifications', label: 'Certifications', icon: 'fa-certificate' },
    { href: '#photography', label: 'Photography', icon: 'fa-camera' },
    { href: '#travel', label: 'Travel', icon: 'fa-plane' },
    { href: '#contact', label: 'Connect', icon: 'fa-envelope' },
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
              <i className={`fas ${link.icon} nav-icon`} aria-hidden="true"></i>
              <span>{link.label}</span>
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
