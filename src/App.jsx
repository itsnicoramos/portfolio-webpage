import { useEffect } from 'react'
import Lenis from 'lenis'
import './App.css'
import useScrollFade from './hooks/useScrollFade'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import FounderBrief from './components/FounderBrief/FounderBrief'
import Skills from './components/Skills/Skills'
import Certifications from './components/Certifications/Certifications'
import Travel from './components/Travel/Travel'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import CommandPalette from './components/CommandPalette/CommandPalette'

export default function App() {
  useScrollFade()

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) return

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      wheelMultiplier: 0.9,
      touchMultiplier: 1.2,
      syncTouch: false,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    return () => lenis.destroy()
  }, [])

  return (
    <>
      <CommandPalette />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <FounderBrief />
        <Skills />
        <Certifications />
        <Travel />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
