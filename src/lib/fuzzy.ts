// Small subsequence matcher for the command palette. No dependencies, so the
// unit tests can run it directly under Node's type stripping.

export type Searchable = { label: string; keywords?: readonly string[] }

/**
 * Scores how well `query` matches `text`. Returns -1 when the characters of
 * the query do not all appear in order. Higher is better: contiguous runs,
 * word starts and an early first match all add points.
 */
export function fuzzyScore(query: string, text: string): number {
  const q = query.trim().toLowerCase()
  const t = text.toLowerCase()
  if (q.length === 0) return 0

  const direct = t.indexOf(q)
  if (direct !== -1) {
    const atWordStart = direct === 0 || /[\s\-_/·.]/.test(t.charAt(direct - 1))
    return 1000 - direct + (atWordStart ? 200 : 0)
  }

  let score = 0
  let ti = 0
  let run = 0
  let first = -1
  for (const ch of q) {
    if (ch === ' ') continue
    const found = t.indexOf(ch, ti)
    if (found === -1) return -1
    if (first === -1) first = found
    run = found === ti ? run + 1 : 0
    const wordStart = found === 0 || /[\s\-_/·.]/.test(t.charAt(found - 1))
    score += 10 + run * 5 + (wordStart ? 15 : 0)
    ti = found + 1
  }
  return score - first
}

/** Best score across an item's label and keywords. */
export function scoreItem(query: string, item: Searchable): number {
  let best = fuzzyScore(query, item.label)
  for (const k of item.keywords ?? []) {
    const s = fuzzyScore(query, k)
    // Keyword hits rank slightly below label hits of the same quality.
    if (s >= 0 && s - 1 > best) best = s - 1
  }
  return best
}

/** Filters and sorts items for `query`, keeping the original order on ties. */
export function rankItems<T extends Searchable>(query: string, items: readonly T[]): T[] {
  if (query.trim() === '') return [...items]
  return items
    .map((item, index) => ({ item, index, score: scoreItem(query, item) }))
    .filter((r) => r.score >= 0)
    .sort((a, b) => b.score - a.score || a.index - b.index)
    .map((r) => r.item)
}
