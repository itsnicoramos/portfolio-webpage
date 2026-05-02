export default function Card({ children, className = '', hover = false, glass = false }) {
  const base = 'bg-[var(--bg-card)] border border-[var(--border)] rounded-xl p-6 transition-all duration-200'
  const hoverClass = hover ? 'hover:-translate-y-[2px] hover:shadow-lg hover:shadow-black/20' : ''
  const glassClass = glass ? 'backdrop-blur-md !bg-[rgba(15,15,15,0.6)]' : ''

  return (
    <div className={`${base} ${hoverClass} ${glassClass} ${className}`}>
      {children}
    </div>
  )
}
