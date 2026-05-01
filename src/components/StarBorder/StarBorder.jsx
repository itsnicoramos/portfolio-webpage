import './StarBorder.css'

export default function StarBorder({
  as: Tag = 'a',
  color = '#e8573b',
  speed = '6s',
  className = '',
  children,
  ...props
}) {
  return (
    <Tag className={`star-border ${className}`} {...props}>
      <span
        className="star-border-gradient"
        style={{
          background: `conic-gradient(from 0deg, transparent 0 340deg, ${color} 360deg)`,
          animationDuration: speed,
        }}
      />
      <span className="star-border-inner">{children}</span>
    </Tag>
  )
}
