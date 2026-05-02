import { motion } from 'framer-motion'

const variants = {
  primary: 'bg-[#e8573b] text-white border-transparent hover:bg-[#d14a30]',
  outline: 'bg-transparent text-[var(--text)] border-[var(--border)] hover:border-[#e8573b] hover:text-[#e8573b]',
  ghost: 'bg-transparent text-[var(--text)] border-transparent hover:bg-[var(--bg-alt)]',
}

const sizes = {
  sm: 'px-3 py-1.5 text-sm rounded-lg',
  md: 'px-5 py-2.5 text-base rounded-xl',
  lg: 'px-7 py-3.5 text-lg rounded-xl',
}

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  href,
  onClick,
  ...rest
}) {
  const classes = `inline-flex items-center justify-center font-medium border transition-colors duration-150 ${variants[variant]} ${sizes[size]} ${className}`

  const motionProps = {
    whileTap: { scale: 0.97 },
    whileHover: { scale: 1.02 },
    transition: { type: 'spring', stiffness: 400, damping: 17 },
  }

  if (href) {
    return (
      <motion.a href={href} className={classes} {...motionProps} {...rest}>
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button onClick={onClick} className={classes} {...motionProps} {...rest}>
      {children}
    </motion.button>
  )
}
