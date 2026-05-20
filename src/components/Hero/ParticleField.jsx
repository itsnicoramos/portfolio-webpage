import { useEffect, useRef } from 'react'
import * as THREE from 'three'

function readThemeColor() {
  const styles = getComputedStyle(document.documentElement)
  const text = styles.getPropertyValue('--text').trim() || '#f0f0f0'
  const accent = styles.getPropertyValue('--accent').trim() || '#e8573b'
  return { text: new THREE.Color(text), accent: new THREE.Color(accent) }
}

export default function ParticleField() {
  const mountRef = useRef(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const mount = mountRef.current
    if (!mount) return

    const width = mount.clientWidth
    const height = mount.clientHeight

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000)
    camera.position.z = 60

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(width, height)
    renderer.setClearColor(0x000000, 0)
    mount.appendChild(renderer.domElement)

    const count = window.innerWidth < 768 ? 220 : 480
    const positions = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      positions[i * 3]     = (Math.random() - 0.5) * 140
      positions[i * 3 + 1] = (Math.random() - 0.5) * 90
      positions[i * 3 + 2] = (Math.random() - 0.5) * 60
    }
    const geometry = new THREE.BufferGeometry()
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))

    const { text, accent } = readThemeColor()
    const material = new THREE.PointsMaterial({
      color: text,
      size: 0.35,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.55,
      depthWrite: false,
    })
    const accentMaterial = new THREE.PointsMaterial({
      color: accent,
      size: 0.55,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.85,
      depthWrite: false,
    })

    const points = new THREE.Points(geometry, material)
    scene.add(points)

    const accentCount = 24
    const accentPositions = new Float32Array(accentCount * 3)
    for (let i = 0; i < accentCount; i++) {
      accentPositions[i * 3]     = (Math.random() - 0.5) * 140
      accentPositions[i * 3 + 1] = (Math.random() - 0.5) * 90
      accentPositions[i * 3 + 2] = (Math.random() - 0.5) * 60
    }
    const accentGeometry = new THREE.BufferGeometry()
    accentGeometry.setAttribute('position', new THREE.BufferAttribute(accentPositions, 3))
    const accentPoints = new THREE.Points(accentGeometry, accentMaterial)
    scene.add(accentPoints)

    const applyTheme = () => {
      const next = readThemeColor()
      material.color.copy(next.text)
      accentMaterial.color.copy(next.accent)
      const isLight = document.documentElement.getAttribute('data-theme') === 'light'
      material.opacity = isLight ? 0.35 : 0.55
      accentMaterial.opacity = isLight ? 0.7 : 0.85
    }
    applyTheme()

    const themeObserver = new MutationObserver(applyTheme)
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    })

    let pointerX = 0
    let pointerY = 0
    const onPointer = (e) => {
      pointerX = (e.clientX / window.innerWidth - 0.5) * 2
      pointerY = (e.clientY / window.innerHeight - 0.5) * 2
    }
    window.addEventListener('pointermove', onPointer)

    let frameId
    const clock = new THREE.Clock()
    const animate = () => {
      const t = clock.getElapsedTime()
      points.rotation.y = t * 0.04
      points.rotation.x = t * 0.02
      accentPoints.rotation.y = -t * 0.06
      accentPoints.rotation.x = t * 0.025

      camera.position.x += (pointerX * 4 - camera.position.x) * 0.03
      camera.position.y += (-pointerY * 3 - camera.position.y) * 0.03
      camera.lookAt(scene.position)

      renderer.render(scene, camera)
      frameId = requestAnimationFrame(animate)
    }
    animate()

    const onResize = () => {
      const w = mount.clientWidth
      const h = mount.clientHeight
      renderer.setSize(w, h)
      camera.aspect = w / h
      camera.updateProjectionMatrix()
    }
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(frameId)
      window.removeEventListener('resize', onResize)
      window.removeEventListener('pointermove', onPointer)
      themeObserver.disconnect()
      geometry.dispose()
      accentGeometry.dispose()
      material.dispose()
      accentMaterial.dispose()
      renderer.dispose()
      if (renderer.domElement.parentNode === mount) {
        mount.removeChild(renderer.domElement)
      }
    }
  }, [])

  return <div ref={mountRef} className="hero-particles" aria-hidden="true" />
}
