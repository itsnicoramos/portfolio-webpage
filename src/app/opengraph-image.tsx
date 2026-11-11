import { ImageResponse } from 'next/og'
import { site } from '@/content/site'

export const alt = 'Nico Ramos. Curiosity, engineered.'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

// Rendered once at build time into a static PNG.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '0 96px',
          background:
            'radial-gradient(60% 70% at 78% 30%, rgba(41,151,255,0.35), transparent 70%), radial-gradient(50% 60% at 20% 80%, rgba(94,92,230,0.3), transparent 70%), #000',
          color: '#f5f5f7',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ fontSize: 32, color: '#a1a1a6', fontWeight: 600 }}>{`${site.name} · Computer Engineering`}</div>
        <div style={{ fontSize: 120, fontWeight: 700, letterSpacing: '-0.04em', lineHeight: 1, marginTop: 24 }}>
          Curiosity, engineered.
        </div>
        <div style={{ fontSize: 30, color: '#a1a1a6', marginTop: 40 }}>ProofLab · hardware-bringup · CyberBank · itsnico.dev</div>
      </div>
    ),
    size,
  )
}
