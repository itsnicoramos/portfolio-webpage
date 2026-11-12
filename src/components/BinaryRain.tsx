'use client'

import { useEffect, useRef } from 'react'

// A field of 0s and 1s drifting behind the whole page: alternate columns fall
// and rise, each a short trail that fades from a brighter head. It is pure
// decoration (aria-hidden, no pointer events) drawn on one fixed canvas.
//
// Legibility: the brightest glyph is the accent at HEAD_ALPHA. Measured from
// rendered pixels, muted text stays at 4.8:1 or better even where a digit
// lands right behind it on top of the hero glow (the worst spot on the page).
// Raise HEAD_ALPHA only after re-measuring. Motion: ~24 fps, paused while the tab is hidden, and a single
// still frame for anyone who prefers reduced motion.

const CELL = 18 // px between columns and between glyphs in a trail
const HEAD_ALPHA = 0.095
const FPS = 24

type Column = { x: number; y: number; speed: number; dir: 1 | -1; length: number; glyphs: string[] }

const bit = () => (Math.random() < 0.5 ? '0' : '1')

function makeColumn(x: number, height: number, index: number): Column {
  const length = 6 + Math.floor(Math.random() * 14)
  return {
    x,
    y: Math.random() * height,
    speed: 0.35 + Math.random() * 1.1, // px per frame at 24 fps
    dir: index % 2 === 0 ? 1 : -1,
    length,
    glyphs: Array.from({ length }, bit),
  }
}

export function BinaryRain() {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current
    const ctx = canvas?.getContext('2d')
    if (!canvas || !ctx) return

    const styles = getComputedStyle(document.documentElement)
    const accent = styles.getPropertyValue('--color-accent').trim() || '#5cff8a'
    const mono = styles.getPropertyValue('--font-code').trim() || 'ui-monospace, monospace'
    const still = window.matchMedia('(prefers-reduced-motion: reduce)')

    let columns: Column[] = []
    let width = 0
    let height = 0

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = window.innerWidth
      height = window.innerHeight
      canvas!.width = Math.round(width * dpr)
      canvas!.height = Math.round(height * dpr)
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0)
      ctx!.font = `500 13px ${mono}`
      ctx!.textAlign = 'center'
      ctx!.textBaseline = 'middle'
      ctx!.fillStyle = accent
      const count = Math.ceil(width / CELL)
      columns = Array.from({ length: count }, (_, i) => makeColumn(i * CELL + CELL / 2, height, i))
    }

    function draw() {
      ctx!.clearRect(0, 0, width, height)
      for (const col of columns) {
        for (let k = 0; k < col.length; k++) {
          // The head leads in the direction of travel; the tail fades behind it.
          const y = col.y - col.dir * k * CELL
          if (y < -CELL || y > height + CELL) continue
          ctx!.globalAlpha = HEAD_ALPHA * (1 - k / col.length) ** 1.6
          ctx!.fillText(col.glyphs[k]!, col.x, y)
        }
      }
      ctx!.globalAlpha = 1
    }

    function step() {
      const span = height + CELL * 24
      for (const col of columns) {
        col.y += col.speed * col.dir
        if (col.dir === 1 && col.y - col.length * CELL > height) col.y = -CELL * (1 + Math.random() * 20)
        if (col.dir === -1 && col.y + col.length * CELL < 0) col.y = height + CELL * (1 + Math.random() * 20)
        // Bits flicker now and then, like a live readout.
        if (Math.random() < 0.08) col.glyphs[Math.floor(Math.random() * col.length)] = bit()
        if (col.y > span || col.y < -span) col.y = Math.random() * height
      }
    }

    let raf = 0
    let last = 0
    function loop(t: number) {
      raf = requestAnimationFrame(loop)
      if (t - last < 1000 / FPS) return
      last = t
      step()
      draw()
    }

    function start() {
      cancelAnimationFrame(raf)
      draw()
      if (!still.matches && !document.hidden) raf = requestAnimationFrame(loop)
    }

    const onResize = () => {
      resize()
      start()
    }

    resize()
    start()
    window.addEventListener('resize', onResize)
    document.addEventListener('visibilitychange', start)
    still.addEventListener('change', start)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', onResize)
      document.removeEventListener('visibilitychange', start)
      still.removeEventListener('change', start)
    }
  }, [])

  return <canvas ref={ref} aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 size-full" />
}
