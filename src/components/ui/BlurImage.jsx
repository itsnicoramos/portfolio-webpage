import { useState } from 'react'
import './BlurImage.css'

export default function BlurImage({ src, alt, className = '', width, height }) {
  const [loaded, setLoaded] = useState(false)

  return (
    <div className={`blur-image-wrapper ${className}`} style={{ width, height }}>
      <div className={`blur-image-placeholder ${loaded ? 'blur-image-placeholder--hidden' : ''}`} />
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`blur-image ${loaded ? 'blur-image--loaded' : ''}`}
        onLoad={() => setLoaded(true)}
      />
    </div>
  )
}
