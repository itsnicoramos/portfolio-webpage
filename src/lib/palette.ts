// The Phosphor terminal palette. src/app/globals.css (@theme) is the source of
// truth for the site; this mirror exists for places that cannot read CSS
// variables, such as the Open Graph image (Satori). tests/unit/palette.test.ts
// fails if the two drift apart. Keys map to `--color-<kebab-case-key>`.
export const palette = {
  bg: '#0c0f0b',
  bgDeep: '#070906',
  surface: '#151a14',
  surface2: '#1d241b',
  line: '#2a3327',
  fg: '#e8ead9',
  fgMuted: '#9aa38c',
  accent: '#5cff8a',
  accentHover: '#8affab',
  warn: '#ffb547',
  danger: '#ff6b5b',
  dangerSoft: '#ffb3a8',
  paper: '#f2efe4',
  sheet: '#fbfaf6',
  ink: '#1b1d17',
  inkMuted: '#545a4b',
  lineLight: '#d6d2c4',
  linkLight: '#1b6e36',
  linkLightHover: '#155c2d',
  warnInk: '#8a4b00',
} as const

export type PaletteKey = keyof typeof palette
