import AxeBuilder from '@axe-core/playwright'
import { expect, test } from '@playwright/test'

const SECTIONS = ['home', 'prooflab', 'ai-systems', 'hardware', 'engineering', 'photography', 'about', 'archive', 'contact']

test.describe('page structure and SEO', () => {
  test('renders sections in the content hierarchy order', async ({ page }) => {
    await page.goto('/')
    const ids = await page.locator('main > section[id]').evaluateAll((els) => els.map((e) => e.id))
    expect(ids).toEqual(SECTIONS)
    await expect(page.locator('h1')).toHaveCount(1)
    await expect(page.locator('h1')).toHaveText('Curiosity, engineered.')
  })

  test('every section is labelled by a visible h2 (or the h1)', async ({ page }) => {
    await page.goto('/')
    for (const id of SECTIONS) {
      const labelId = await page.locator(`#${id}`).getAttribute('aria-labelledby')
      expect(labelId, id).toBe(`${id}-title`)
      await expect(page.locator(`#${labelId}`)).toHaveCount(1)
    }
  })

  test('ships title, description, canonical, Open Graph and JSON-LD', async ({ page, request }) => {
    await page.goto('/')
    await expect(page).toHaveTitle('Nico Ramos · Curiosity, engineered.')
    await expect(page.locator('meta[name="description"]')).toHaveAttribute('content', /Computer Engineering/)
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', 'https://itsnico.dev')
    const ogImage = await page.locator('meta[property="og:image"]').getAttribute('content')
    expect(ogImage).toContain('/opengraph-image')
    const jsonLd = JSON.parse((await page.locator('script[type="application/ld+json"]').textContent()) ?? '{}')
    expect(jsonLd['@type']).toBe('Person')

    const og = await request.get(new URL(ogImage ?? '', 'http://localhost').pathname)
    expect(og.status()).toBe(200)
    expect(og.headers()['content-type']).toContain('image/png')
    expect((await request.get('/robots.txt')).status()).toBe(200)
    expect((await request.get('/sitemap.xml')).status()).toBe(200)
  })

  test('unknown paths return a 404 page that is not indexed', async ({ request, page }) => {
    const res = await request.get('/definitely-not-here')
    expect(res.status()).toBe(404)
    await page.goto('/definitely-not-here')
    await expect(page.locator('h1')).toHaveText('Nothing at this address.')
    await expect(page.locator('meta[name="robots"]')).toHaveCount(1)
    await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content', /noindex/)
    await expect(page.locator('link[rel="canonical"]')).toHaveCount(0)
  })
})

test.describe('security', () => {
  test('sends strict security headers', async ({ request }) => {
    const res = await request.get('/')
    const h = res.headers()
    expect(h['content-security-policy']).toContain("default-src 'self'")
    expect(h['content-security-policy']).toContain("frame-ancestors 'none'")
    expect(h['content-security-policy']).toContain("object-src 'none'")
    // Only Netlify's analytics collector may be contacted besides this origin.
    expect(h['content-security-policy']).toContain("connect-src 'self' https://ingesteer.services-prod.nsvcs.net;")
    expect(h['x-frame-options']).toBe('DENY')
    expect(h['x-content-type-options']).toBe('nosniff')
    expect(h['strict-transport-security']).toContain('max-age=31536000')
    expect(h['x-powered-by']).toBeUndefined()
  })

  test('external links open safely in a new tab and say so', async ({ page }) => {
    await page.goto('/')
    const links = page.locator('a[href^="http"]')
    const count = await links.count()
    expect(count).toBeGreaterThan(10)
    for (let i = 0; i < count; i++) {
      const link = links.nth(i)
      await expect(link).toHaveAttribute('target', '_blank')
      await expect(link).toHaveAttribute('rel', /noopener/)
      await expect(link).toHaveAttribute('rel', /noreferrer/)
      expect(await link.textContent()).toContain('opens in a new tab')
    }
  })

  test('loads nothing from third-party origins', async ({ page }) => {
    const foreign: string[] = []
    page.on('request', (req) => {
      const url = new URL(req.url())
      if (!['localhost', '127.0.0.1'].includes(url.hostname) && url.protocol !== 'data:') foreign.push(req.url())
    })
    await page.goto('/', { waitUntil: 'networkidle' })
    expect(foreign).toEqual([])
  })
})

test.describe('links', () => {
  test('every in-page anchor points at an element that exists', async ({ page }) => {
    await page.goto('/')
    const hrefs = await page
      .locator('a[href^="#"], a[href^="/#"]')
      .evaluateAll((els) => els.map((e) => (e.getAttribute('href') ?? '').replace(/^\//, '')))
    expect(hrefs.length).toBeGreaterThan(5)
    for (const href of new Set(hrefs)) {
      await expect(page.locator(href), href).toHaveCount(1)
    }
  })

  test('header links on the 404 page lead back to home sections', async ({ page }) => {
    await page.goto('/definitely-not-here')
    const hrefs = await page.locator('header a').evaluateAll((els) => els.map((e) => e.getAttribute('href') ?? ''))
    expect(hrefs.length).toBeGreaterThan(0)
    for (const href of hrefs) expect(href).toMatch(/^\/#/)
  })

  test('contact section lists the verified contacts', async ({ page }) => {
    await page.goto('/')
    const contact = page.locator('#contact')
    await expect(contact.locator('a[href="mailto:itsnicoramos@gmail.com"]')).toHaveCount(1)
    for (const href of [
      'https://github.com/itsnicoramos',
      'https://www.linkedin.com/in/nico-ramos28',
      'https://www.instagram.com/itsnicoramos__/',
      'https://www.tiktok.com/@itsnicoramos_',
      'https://www.tiktok.com/@sirnico__',
      'https://www.threads.com/@itsnicoramos__',
    ]) {
      await expect(contact.locator(`a[href="${href}"]`), href).toHaveCount(1)
    }
  })
})

test.describe('accessibility', () => {
  test.use({ contextOptions: { reducedMotion: 'reduce' } })

  test('has no axe violations (WCAG 2.2 A/AA)', async ({ page }) => {
    await page.goto('/')
    const results = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa']).analyze()
    const summary = results.violations.map((v) => `${v.id}: ${v.nodes.map((n) => n.target.join(' ')).join(', ')}`)
    expect(summary).toEqual([])
  })

  test('first Tab reaches the skip link, which moves focus to main', async ({ page, browserName }) => {
    test.skip(browserName !== 'chromium')
    await page.goto('/')
    await page.keyboard.press('Tab')
    const skip = page.getByRole('link', { name: 'Skip to content' })
    await expect(skip).toBeFocused()
    await page.keyboard.press('Enter')
    await expect(page.locator('main#content')).toBeFocused()
  })

  test('focus rings use cobalt on light sections and sky on dark ones', async ({ page }) => {
    await page.goto('/')
    const outline = (sel: string) =>
      page.locator(sel).first().evaluate((el) => {
        ;(el as HTMLElement).focus()
        return getComputedStyle(el).outlineColor
      })
    expect(await outline('#prooflab a[href^="https://github.com"]')).toBe('rgb(0, 102, 204)')
    expect(await outline('#ai-systems a[href^="https://github.com"]')).toBe('rgb(41, 151, 255)')
  })

  test('reduced motion shows the ProofLab replay in its final state', async ({ page }) => {
    await page.goto('/#prooflab')
    await expect(page.getByText('Check the product rule')).toBeVisible()
    await expect(page.getByRole('button', { name: 'Replay' })).toHaveCount(0)
  })
})

test.describe('ProofLab replay', () => {
  test('rewinds after hydration, then plays to the final verdict in view', async ({ page }) => {
    await page.goto('/', { waitUntil: 'networkidle' })
    const hints = page.locator('#prooflab .replay-step').last()
    await expect(hints).toHaveAttribute('data-show', 'false')
    await page.locator('#prooflab figure').scrollIntoViewIfNeeded()
    await expect(hints).toHaveAttribute('data-show', 'true', { timeout: 6000 })
    await page.getByRole('button', { name: 'Replay' }).click()
    await expect(hints).toHaveAttribute('data-show', 'false')
    await expect(hints).toHaveAttribute('data-show', 'true', { timeout: 6000 })
  })
})

test.describe('command palette', () => {
  test('opens with the keyboard, filters, and jumps to a section', async ({ page, isMobile }) => {
    test.skip(isMobile, 'keyboard shortcut is a desktop affordance; the button is tested below')
    await page.goto('/', { waitUntil: 'networkidle' })
    const dialog = page.getByRole('dialog', { name: 'Search and jump' })
    await page.keyboard.press('ControlOrMeta+k')
    await expect(dialog).toBeVisible()
    const input = page.getByRole('combobox')
    await expect(input).toBeFocused()

    await input.fill('archive')
    await expect(page.getByRole('option').first()).toHaveText(/Learning archive/)
    await page.keyboard.press('Enter')
    await expect(dialog).toBeHidden()
    await expect(page.locator('#archive')).toBeFocused()
    await expect(page).toHaveURL(/#archive$/)
  })

  test('arrow keys move the active option and Escape closes', async ({ page, isMobile }) => {
    test.skip(isMobile)
    await page.goto('/', { waitUntil: 'networkidle' })
    await page.keyboard.press('ControlOrMeta+k')
    const input = page.getByRole('combobox')
    const first = await input.getAttribute('aria-activedescendant')
    await page.keyboard.press('ArrowDown')
    const second = await input.getAttribute('aria-activedescendant')
    expect(second).not.toBe(first)
    await expect(page.locator(`[id="${second}"]`)).toHaveAttribute('aria-selected', 'true')
    await page.keyboard.press('Escape')
    await expect(page.getByRole('dialog')).toBeHidden()
  })

  test('opens from the header button and shows a no-match state', async ({ page }) => {
    await page.goto('/', { waitUntil: 'networkidle' })
    await page.getByRole('button', { name: 'Search and jump' }).click()
    const input = page.getByRole('combobox')
    await expect(input).toBeFocused()
    await input.fill('zzzzqq')
    await expect(page.getByText('No matches for “zzzzqq”.')).toBeVisible()
  })
})

test.describe('responsive', () => {
  for (const width of [320, 375, 768, 1024, 1440]) {
    test(`no horizontal scroll at ${width}px`, async ({ page }) => {
      await page.setViewportSize({ width, height: 900 })
      await page.goto('/')
      const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth)
      expect(overflow).toBeLessThanOrEqual(0)
    })
  }

  test('mobile menu opens, focuses the first link, and closes on Escape', async ({ page, isMobile }) => {
    test.skip(!isMobile)
    await page.goto('/')
    const toggle = page.getByRole('button', { name: 'Open menu' })
    await toggle.click()
    await expect(page.locator('#mobile-menu')).toBeVisible()
    await expect(page.locator('#mobile-menu a').first()).toBeFocused()
    await page.keyboard.press('Escape')
    await expect(page.locator('#mobile-menu')).toBeHidden()
    await expect(page.getByRole('button', { name: 'Open menu' })).toBeFocused()
  })
})

test('no console errors on load', async ({ page }) => {
  const errors: string[] = []
  page.on('console', (msg) => {
    if (msg.type() === 'error') errors.push(msg.text())
  })
  page.on('pageerror', (err) => errors.push(err.message))
  await page.goto('/', { waitUntil: 'networkidle' })
  await page.mouse.wheel(0, 20000)
  await page.waitForTimeout(500)
  expect(errors).toEqual([])
})
