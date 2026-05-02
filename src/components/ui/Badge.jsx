const variantStyles = {
  startup: 'bg-[rgba(232,87,59,0.15)] text-[#e8573b] border-[rgba(232,87,59,0.3)]',
  featured: 'bg-[rgba(59,130,246,0.15)] text-[#3b82f6] border-[rgba(59,130,246,0.3)]',
  course: 'bg-[rgba(148,163,184,0.15)] text-[#94a3b8] border-[rgba(148,163,184,0.3)]',
  default: 'bg-[var(--bg-alt)] text-[var(--text-muted)] border-[var(--border)]',
}

export default function Badge({ variant = 'default', children, className = '' }) {
  const classes = `inline-block text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-md border ${variantStyles[variant] || variantStyles.default} ${className}`

  return <span className={classes}>{children}</span>
}
