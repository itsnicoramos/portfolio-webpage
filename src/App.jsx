import './App.css'
import useTheme from './hooks/useTheme'
import useScrollFade from './hooks/useScrollFade'
import useInteractive from './hooks/useInteractive'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import Certifications from './components/Certifications/Certifications'
import Travel from './components/Travel/Travel'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

export default function App() {
  const { theme, toggle } = useTheme()
  useScrollFade()
  useInteractive()

  return (
    <>
      <div className="cursor-glow" aria-hidden="true" />
      <div className="scroll-progress" aria-hidden="true" />
      <Navbar theme={theme} toggle={toggle} />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Certifications />
        <Travel />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
