import assert from 'node:assert/strict'
import { describe, it } from 'node:test'
import { about } from '../../src/content/about.ts'
import { archive } from '../../src/content/archive.ts'
import { commands } from '../../src/content/commands.ts'
import { photos } from '../../src/content/photos.ts'
import * as projects from '../../src/content/projects.ts'
import { email, nav, primaryContacts, socialContacts } from '../../src/content/site.ts'

// Contacts must match the GitHub profile README exactly. If the README
// changes, update both this list and src/content/site.ts on purpose.
const PROFILE_README_CONTACTS = [
  'mailto:itsnicoramos@gmail.com',
  'https://github.com/itsnicoramos',
  'https://www.linkedin.com/in/nico-ramos28',
  'https://www.instagram.com/itsnicoramos__/',
  'https://www.tiktok.com/@itsnicoramos_',
  'https://www.tiktok.com/@sirnico__',
  'https://www.threads.com/@itsnicoramos__',
]

const SECTION_IDS = ['home', ...nav.map((n) => n.id)]

function allStrings(value: unknown): string[] {
  if (typeof value === 'string') return [value]
  if (Array.isArray(value)) return value.flatMap(allStrings)
  if (value && typeof value === 'object') return Object.values(value).flatMap(allStrings)
  return []
}

describe('contacts', () => {
  it('match the profile README and nothing else', () => {
    const hrefs = [...primaryContacts, ...socialContacts].map((c) => c.href)
    assert.deepEqual([...hrefs].sort(), [...PROFILE_README_CONTACTS].sort())
  })

  it('use the profile README email', () => {
    assert.equal(email, 'itsnicoramos@gmail.com')
  })

  it('features email, GitHub and LinkedIn as primary', () => {
    assert.deepEqual(
      primaryContacts.map((c) => c.id),
      ['email', 'github', 'linkedin'],
    )
  })
})

describe('navigation and commands', () => {
  it('follows the content hierarchy', () => {
    assert.deepEqual(
      nav.map((n) => n.id),
      ['ml', 'ai-systems', 'hardware', 'engineering', 'photography', 'about', 'archive', 'contact'],
    )
  })

  it('has unique command ids that point at real sections or https/mailto links', () => {
    const ids = commands.map((c) => c.id)
    assert.equal(new Set(ids).size, ids.length)
    for (const c of commands) {
      if (c.action.type === 'section') assert.ok(SECTION_IDS.includes(c.action.id), c.id)
      if (c.action.type === 'link') assert.match(c.action.href, /^(https:\/\/|mailto:)/, c.id)
    }
  })
})

describe('content', () => {
  const everything = [projects, archive, about, nav, primaryContacts, socialContacts, commands]
  const strings = allStrings(everything)

  it('links only over https (or mailto)', () => {
    const urls = strings.filter((s) => /^[a-z]+:\/\//i.test(s) || s.startsWith('mailto:'))
    assert.ok(urls.length > 10)
    for (const u of urls) assert.match(u, /^(https:\/\/|mailto:)/, u)
  })

  it('contains no em dashes (house style)', () => {
    for (const s of strings) assert.ok(!s.includes('—'), `em dash in: ${s}`)
  })

  it('keeps CSCI 161 and 162 unlinked', () => {
    for (const id of ['csci-161', 'csci-162']) {
      const entry = archive.find((a) => a.id === id)
      assert.ok(entry)
      assert.equal(entry.href, undefined)
    }
  })

  it('lists the archive newest first', () => {
    const years = archive.map((a) => Number(a.period.match(/\d{4}/)?.[0]))
    years.forEach((y, i) => {
      if (i > 0) assert.ok(y <= (years[i - 1] ?? Infinity), archive[i]?.id)
    })
    assert.equal(archive[0]?.id, 'course-claude-code')
  })

  it('links the Claude Code course to Anthropic Academy', () => {
    assert.equal(archive.find((a) => a.id === 'course-claude-code')?.href, 'https://anthropic.skilljar.com')
  })

  it('states the confirmed program and no minor', () => {
    const text = about.paragraphs.join(' ')
    assert.match(text, /Computer Engineering transfer student from Vancouver Island University/)
    assert.doesNotMatch(text, /minor/i)
    assert.match(about.humor.equation, /BrBa/)
  })

  it('labels the empty ArduinoUNO repo honestly', () => {
    assert.equal(projects.arduinoUno.status.tone, 'empty')
  })

  it('gives every photo real dimensions and alt text', () => {
    for (const p of photos) {
      assert.ok(p.width > 0 && p.height > 0, p.src)
      assert.ok(p.alt.trim().length > 10, p.src)
    }
  })
})
