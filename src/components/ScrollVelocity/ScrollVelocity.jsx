import { useRef } from 'react'
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from 'framer-motion'
import './ScrollVelocity.css'

function wrap(min, max, v) {
  const range = max - min
  return ((((v - min) % range) + range) % range) + min
}

function VelocityRow({ children, baseVelocity = 100 }) {
  const baseX = useMotionValue(0)
  const { scrollY } = useScroll()
  const scrollVelocity = useVelocity(scrollY)
  const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 })
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], { clamp: false })
  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`)
  const directionFactor = useRef(1)

  useAnimationFrame((_t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000)
    if (velocityFactor.get() < 0) directionFactor.current = -1
    else if (velocityFactor.get() > 0) directionFactor.current = 1
    moveBy += directionFactor.current * moveBy * velocityFactor.get()
    baseX.set(baseX.get() + moveBy)
  })

  return (
    <div className="sv-row">
      <motion.div className="sv-track" style={{ x }}>
        {[...Array(6)].map((_, i) => (
          <span key={i} className="sv-item" aria-hidden={i > 0 ? 'true' : undefined}>
            {children}
          </span>
        ))}
      </motion.div>
    </div>
  )
}

export default function ScrollVelocity({ rows }) {
  return (
    <div className="sv-wrapper">
      {rows.map(({ text, velocity }, i) => (
        <VelocityRow key={i} baseVelocity={velocity ?? 100}>
          {text}
        </VelocityRow>
      ))}
    </div>
  )
}
