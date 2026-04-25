import { useRef, useEffect } from 'react'
import * as THREE from 'three'
import './Hero.css'

const TICKER_ITEMS = [
  'HTML5', 'CSS3', 'JavaScript', 'React', 'Node.js',
  'TypeScript', 'Python', 'C/C++', 'Git', 'Firebase', 'Linux', 'Vite'
]

export default function Hero() {
  const canvasRef = useRef(null)
  const sectionRef = useRef(null)
  const animRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const section = sectionRef.current
    if (!canvas || !section) return

    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent) || window.innerWidth < 768
    const isLowEnd = navigator.hardwareConcurrency ? navigator.hardwareConcurrency <= 4 : isMobile

    const config = {
      particleCount: isLowEnd ? 250 : 800,
      showLines: !isMobile,
      maxLineDistance: 120,
      maxLines: 150,
      pixelRatio: isMobile ? 1 : Math.min(window.devicePixelRatio, 2),
      mouseParallax: !isMobile,
      rotationSpeed: 0.0003,
      particleSize: isMobile ? 2.5 : 2,
      spreadX: 800,
      spreadY: 500,
      spreadZ: 400,
      targetFPS: isMobile ? 30 : 60,
    }

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: !isMobile,
      powerPreference: 'high-performance',
    })
    renderer.setPixelRatio(config.pixelRatio)
    renderer.setSize(section.offsetWidth, section.offsetHeight)
    renderer.setClearColor(0x000000, 0)

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(60, section.offsetWidth / section.offsetHeight, 1, 2000)
    camera.position.z = 600

    function getThemeColor() {
      const style = getComputedStyle(document.documentElement)
      const color = style.getPropertyValue('--text-muted').trim()
      return new THREE.Color(color || '#94a3b8')
    }

    const positions = new Float32Array(config.particleCount * 3)
    const velocities = new Float32Array(config.particleCount * 3)

    for (let i = 0; i < config.particleCount; i++) {
      positions[i * 3]     = (Math.random() - 0.5) * config.spreadX
      positions[i * 3 + 1] = (Math.random() - 0.5) * config.spreadY
      positions[i * 3 + 2] = (Math.random() - 0.5) * config.spreadZ
      velocities[i * 3]     = (Math.random() - 0.5) * 0.3
      velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.3
      velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.1
    }

    const particleGeometry = new THREE.BufferGeometry()
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))

    let themeColor = getThemeColor()

    const particleMaterial = new THREE.PointsMaterial({
      color: themeColor,
      size: config.particleSize,
      transparent: true,
      opacity: 0,
      sizeAttenuation: true,
    })

    const particles = new THREE.Points(particleGeometry, particleMaterial)
    scene.add(particles)

    let linesMesh = null
    let lineGeometry = null

    if (config.showLines) {
      lineGeometry = new THREE.BufferGeometry()
      const lineMaterial = new THREE.LineBasicMaterial({
        color: themeColor,
        transparent: true,
        opacity: 0,
      })
      const linePositions = new Float32Array(config.maxLines * 6)
      lineGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3))
      lineGeometry.setDrawRange(0, 0)
      linesMesh = new THREE.LineSegments(lineGeometry, lineMaterial)
      scene.add(linesMesh)
    }

    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 }

    const onMouseMove = (e) => {
      const rect = section.getBoundingClientRect()
      mouse.targetX = ((e.clientX - rect.left) / rect.width - 0.5) * 50
      mouse.targetY = ((e.clientY - rect.top) / rect.height - 0.5) * 50
    }

    if (config.mouseParallax) {
      section.addEventListener('mousemove', onMouseMove)
    }

    let isAnimating = true
    let fadeProgress = 0
    let lastFrameTime = 0
    const frameInterval = 1000 / config.targetFPS

    const heroObserver = new IntersectionObserver(
      (entries) => { isAnimating = entries[0].isIntersecting },
      { threshold: 0 }
    )
    heroObserver.observe(section)

    const onVisibilityChange = () => {
      if (document.hidden) {
        isAnimating = false
      } else {
        const rect = section.getBoundingClientRect()
        isAnimating = rect.bottom > 0 && rect.top < window.innerHeight
      }
    }
    document.addEventListener('visibilitychange', onVisibilityChange)

    // Theme observer: watch data-theme attribute changes
    const themeObserver = new MutationObserver(() => {
      themeColor = getThemeColor()
      particleMaterial.color.copy(themeColor)
      if (linesMesh) linesMesh.material.color.copy(themeColor)
    })
    themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] })

    let resizeTimeout
    const onResize = () => {
      clearTimeout(resizeTimeout)
      resizeTimeout = setTimeout(() => {
        const w = section.offsetWidth
        const h = section.offsetHeight
        camera.aspect = w / h
        camera.updateProjectionMatrix()
        renderer.setSize(w, h)
      }, 150)
    }
    window.addEventListener('resize', onResize)

    function animate(currentTime) {
      animRef.current = requestAnimationFrame(animate)
      if (!isAnimating) return
      if (currentTime - lastFrameTime < frameInterval) return
      lastFrameTime = currentTime

      if (fadeProgress < 1) {
        fadeProgress += 0.012
        if (fadeProgress > 1) fadeProgress = 1
        particleMaterial.opacity = fadeProgress * 0.6
        if (linesMesh) linesMesh.material.opacity = fadeProgress * 0.15
      }

      mouse.x += (mouse.targetX - mouse.x) * 0.05
      mouse.y += (mouse.targetY - mouse.y) * 0.05

      particles.rotation.x += config.rotationSpeed
      particles.rotation.y += config.rotationSpeed * 0.7

      if (config.mouseParallax) {
        particles.position.x = mouse.x
        particles.position.y = -mouse.y
      }

      const posArray = particleGeometry.attributes.position.array
      for (let i = 0; i < config.particleCount; i++) {
        posArray[i * 3]     += velocities[i * 3]
        posArray[i * 3 + 1] += velocities[i * 3 + 1]
        posArray[i * 3 + 2] += velocities[i * 3 + 2]
        if (Math.abs(posArray[i * 3])     > config.spreadX / 2) velocities[i * 3]     *= -1
        if (Math.abs(posArray[i * 3 + 1]) > config.spreadY / 2) velocities[i * 3 + 1] *= -1
        if (Math.abs(posArray[i * 3 + 2]) > config.spreadZ / 2) velocities[i * 3 + 2] *= -1
      }
      particleGeometry.attributes.position.needsUpdate = true

      if (linesMesh && lineGeometry) {
        const lp = lineGeometry.attributes.position.array
        let lineIndex = 0
        let lineCount = 0
        const maxDistSq = config.maxLineDistance * config.maxLineDistance
        const checkCount = Math.min(config.particleCount, 200)

        for (let a = 0; a < checkCount && lineCount < config.maxLines; a++) {
          for (let b = a + 1; b < checkCount && lineCount < config.maxLines; b++) {
            const dx = posArray[a * 3]     - posArray[b * 3]
            const dy = posArray[a * 3 + 1] - posArray[b * 3 + 1]
            const dz = posArray[a * 3 + 2] - posArray[b * 3 + 2]
            const distSq = dx * dx + dy * dy + dz * dz
            if (distSq < maxDistSq) {
              lp[lineIndex++] = posArray[a * 3]
              lp[lineIndex++] = posArray[a * 3 + 1]
              lp[lineIndex++] = posArray[a * 3 + 2]
              lp[lineIndex++] = posArray[b * 3]
              lp[lineIndex++] = posArray[b * 3 + 1]
              lp[lineIndex++] = posArray[b * 3 + 2]
              lineCount++
            }
          }
        }
        lineGeometry.attributes.position.needsUpdate = true
        lineGeometry.setDrawRange(0, lineCount * 2)
      }

      renderer.render(scene, camera)
    }

    animRef.current = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animRef.current)
      heroObserver.disconnect()
      themeObserver.disconnect()
      document.removeEventListener('visibilitychange', onVisibilityChange)
      window.removeEventListener('resize', onResize)
      if (config.mouseParallax) section.removeEventListener('mousemove', onMouseMove)
      renderer.dispose()
      particleGeometry.dispose()
      particleMaterial.dispose()
      if (lineGeometry) lineGeometry.dispose()
      scene.clear()
    }
  }, [])

  return (
    <>
      <section id="home" className="hero" ref={sectionRef}>
        <canvas ref={canvasRef} className="hero-canvas" />
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-hello">Hello<span className="hero-dot">.</span></h1>
            <p className="hero-iam">I'm Nico</p>
            <h2 className="hero-role">Student founder &amp; Entrepreneur</h2>
            <div className="cta-buttons">
              <a href="#contact" className="btn btn-orange">Got a project?</a>
              <a href="https://www.linkedin.com/in/nico-ramos28" target="_blank" rel="noreferrer" className="btn btn-outline">My resume</a>
            </div>
          </div>
          <div className="hero-visual">
            <span className="hero-bracket">&lt;</span>
            <div className="hero-img-wrap">
              <div className="hero-image">
                <img src="/img/profileNico.jpeg" alt="Nico Ramos" />
              </div>
            </div>
            <span className="hero-bracket">&gt;</span>
          </div>
        </div>
      </section>

      <div className="hero-skills-ticker">
        <div className="hero-skills-track">
          {TICKER_ITEMS.map((item) => (
            <span key={item}>{item}</span>
          ))}
          {TICKER_ITEMS.map((item) => (
            <span key={`${item}-dup`} aria-hidden="true">{item}</span>
          ))}
        </div>
      </div>
    </>
  )
}
