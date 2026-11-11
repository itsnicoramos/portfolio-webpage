// Checks every external link the site renders. Run with `npm run check:links`.
//
// Reads URLs straight from the content modules, so a link added anywhere in
// src/content is covered automatically. Exits non-zero on any broken link.
// LinkedIn answers automated requests with HTTP 999; that is reported as
// "blocked (expected)" rather than a failure, so check that one by hand.

import { archive } from '../src/content/archive.ts'
import { commands } from '../src/content/commands.ts'
import * as projects from '../src/content/projects.ts'
import { primaryContacts, socialContacts } from '../src/content/site.ts'

const BOT_BLOCKED = new Set(['www.linkedin.com'])
const TIMEOUT_MS = 15_000

function collect(value: unknown, out: Set<string>) {
  if (typeof value === 'string') {
    if (/^https:\/\//.test(value)) out.add(value.split('#')[0] ?? value)
  } else if (Array.isArray(value)) {
    for (const v of value) collect(v, out)
  } else if (value && typeof value === 'object') {
    for (const v of Object.values(value)) collect(v, out)
  }
}

const urls = new Set<string>()
collect([projects, archive, commands, primaryContacts, socialContacts], urls)
// Links that are built in components rather than stored in content.
urls.add('https://github.com/itsnicoramos/portfolio-webpage')

async function check(url: string): Promise<{ url: string; ok: boolean; note: string }> {
  const host = new URL(url).host
  try {
    const res = await fetch(url, {
      method: 'GET',
      redirect: 'follow',
      signal: AbortSignal.timeout(TIMEOUT_MS),
      headers: { 'user-agent': 'Mozilla/5.0 (compatible; itsnico-link-check/1.0)' },
    })
    if (res.ok) return { url, ok: true, note: `${res.status}${res.redirected ? ` -> ${res.url}` : ''}` }
    if (BOT_BLOCKED.has(host)) return { url, ok: true, note: `${res.status} blocked (expected, verify by hand)` }
    return { url, ok: false, note: String(res.status) }
  } catch (err) {
    return { url, ok: false, note: err instanceof Error ? err.message : String(err) }
  }
}

const results = await Promise.all([...urls].sort().map(check))
for (const r of results) console.log(`${r.ok ? 'ok  ' : 'FAIL'}  ${r.url}  ${r.note}`)
const failed = results.filter((r) => !r.ok)
console.log(`\n${results.length - failed.length}/${results.length} links ok`)
if (failed.length > 0) process.exit(1)
