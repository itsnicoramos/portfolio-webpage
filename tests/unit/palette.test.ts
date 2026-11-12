import assert from 'node:assert/strict'
import { readdirSync, readFileSync } from 'node:fs'
import { describe, it } from 'node:test'
import { palette } from '../../src/lib/palette.ts'

// palette.ts mirrors the @theme colours for code that cannot read CSS
// variables (the Open Graph image). This keeps the two from drifting.
const css = readFileSync(new URL('../../src/app/globals.css', import.meta.url), 'utf8')

const kebab = (key: string) => key.replace(/([A-Z]|\d+)/g, '-$1').toLowerCase()

describe('palette mirror', () => {
  for (const [key, hex] of Object.entries(palette)) {
    it(`--color-${kebab(key)} matches palette.${key}`, () => {
      const match = css.match(new RegExp(`--color-${kebab(key)}:\\s*(#[0-9a-fA-F]{6});`))
      assert.ok(match, `--color-${kebab(key)} is missing from globals.css`)
      assert.equal(match[1]?.toLowerCase(), hex)
    })
  }
})

// Every translucent fill is a named token in @theme (fill, wash, glass...).
// Ad hoc alpha (`bg-fg/8`, `from-accent/20`, `bg-fg/[0.08]`) and arbitrary
// colour values (`bg-[#fff]`, `text-[rgb(...)]`, `bg-[color-mix(...)]`) fail.
// Font-size/line-height shorthands like `text-sm/6` are allowed.
const COLOR_PREFIX = '(?:bg|text|ring|ring-offset|border(?:-[trblxy])?|divide|outline|fill|stroke|from|via|to|shadow|inset-shadow|drop-shadow|decoration|caret|accent|placeholder)'
const SIZE = '(?:2xs|xs|sm|base|lg|[2-9]?xl|meta|ui|body)'
const alpha = new RegExp(`(?<![\\w-])${COLOR_PREFIX}-(?!${SIZE}/)[a-z0-9-]+/(?:\\d+|\\[[^\\]]+\\])`, 'g')
const arbitraryColor = new RegExp(`(?<![\\w-])${COLOR_PREFIX}-\\[(?:#|rgb|hsl|oklch|oklab|color-mix|lab|lch)`, 'g')

describe('no ad hoc colours in components', () => {
  const root = new URL('../../src/', import.meta.url)
  const files = (readdirSync(root, { recursive: true }) as string[]).filter(
    (f) => /\.(tsx|ts)$/.test(f) && !f.endsWith('opengraph-image.tsx') && !f.endsWith('palette.ts'),
  )

  for (const file of files) {
    it(file, () => {
      const src = readFileSync(new URL(file, root), 'utf8')
      const hits = [...(src.match(alpha) ?? []), ...(src.match(arbitraryColor) ?? [])]
      assert.deepEqual(hits, [], `use a colour token from globals.css instead of ${hits.join(', ')}`)
    })
  }

  it('the patterns catch what they should, and allow size/line-height', () => {
    for (const bad of ['bg-fg/8', 'from-accent/20', 'bg-fg/[0.08]', 'text-paper/70', 'border-t-ink/40', 'bg-[#ffffff]', 'text-[rgb(0,0,0)]']) {
      assert.ok(bad.match(alpha) || bad.match(arbitraryColor), bad)
    }
    for (const ok of ['text-sm/6', 'text-meta/5', 'bg-fill', 'grid-cols-[5.5rem_1fr]', 'text-ui']) {
      assert.ok(!ok.match(alpha) && !ok.match(arbitraryColor), ok)
    }
  })
})

it('globals.css keeps every color-mix, rgb() and hex inside @theme', () => {
  const outside = css.replace(/@theme\s*\{[\s\S]*?\n\}/, '')
  assert.deepEqual(outside.match(/color-mix\(|rgba?\(|#[0-9a-fA-F]{3,8}\b/g) ?? [], [])
})
