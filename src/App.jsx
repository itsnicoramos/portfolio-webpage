import './App.css'
import useTheme from './hooks/useTheme'
import useScrollFade from './hooks/useScrollFade'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import Blog from './components/Blog/Blog'
import Travel from './components/Travel/Travel'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

export default function App() {
  const { theme, toggle } = useTheme()
  useScrollFade()

  return (
    <>
      <Navbar theme={theme} toggle={toggle} />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Blog />
        <Travel />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
