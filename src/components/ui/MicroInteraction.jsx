import { motion } from 'framer-motion'

export function Pressable({ children, className = '', ...props }) {
  return (
    <motion.div
      className={className}
      whileTap={{ scale: 0.97 }}
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export function FadeIn({ children, className = '', ...props }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.15 }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export function SlideIn({ children, className = '', ...props }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x: -12 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.18 }}
      {...props}
    >
      {children}
    </motion.div>
  )
}
