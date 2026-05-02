import './Skeleton.css'

export default function Skeleton({ variant = 'text', className = '', width, height }) {
  const style = {}
  if (width) style.width = width
  if (height) style.height = height

  return (
    <div
      className={`skeleton skeleton--${variant} ${className}`}
      style={style}
      aria-hidden="true"
    />
  )
}
