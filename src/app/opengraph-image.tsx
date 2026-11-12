import { ImageResponse } from 'next/og'
import { site } from '@/content/site'
import { palette } from '@/lib/palette'

// Satori cannot read CSS variables, so colours come from the palette mirror.
function rgba(hex: string, alpha: number) {
  const n = Number.parseInt(hex.slice(1), 16)
  return `rgba(${(n >> 16) & 255},${(n >> 8) & 255},${n & 255},${alpha})`
}

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
          background: `radial-gradient(60% 70% at 78% 30%, ${rgba(palette.accent, 0.18)}, transparent 70%), ${palette.bg}`,
          color: palette.fg,
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ fontSize: 32, color: palette.fgMuted, fontWeight: 600 }}>{`${site.name} · Computer Engineering`}</div>
        <div style={{ display: 'flex', fontSize: 120, fontWeight: 700, letterSpacing: '-0.04em', lineHeight: 1, marginTop: 24 }}>
          <span>Curiosity,&nbsp;</span>
          <span style={{ color: palette.accent }}>engineered.</span>
        </div>
        <div style={{ fontSize: 30, color: palette.fgMuted, marginTop: 40 }}>ProofLab · hardware-bringup · CyberBank · itsnico.dev</div>
      </div>
    ),
    size,
  )
}
