import assert from 'node:assert/strict'
import { describe, it } from 'node:test'
import { fuzzyScore, rankItems } from '../../src/lib/fuzzy.ts'

describe('fuzzyScore', () => {
  it('returns -1 when the query is not a subsequence', () => {
    assert.equal(fuzzyScore('xyz', 'ProofLab'), -1)
  })

  it('ranks a direct substring above a scattered match', () => {
    assert.ok(fuzzyScore('lab', 'ProofLab') > fuzzyScore('plb', 'ProofLab'))
  })

  it('prefers matches at the start of a word', () => {
    assert.ok(fuzzyScore('arc', 'Learning archive') > fuzzyScore('arn', 'Learning archive'))
  })

  it('is case-insensitive and ignores surrounding space', () => {
    assert.equal(fuzzyScore('  CYBER ', 'CyberBank on GitHub'), fuzzyScore('cyber', 'cyberbank on github'))
  })
})

describe('rankItems', () => {
  const items = [
    { label: 'Home' },
    { label: 'Hardware lab', keywords: ['arduino'] },
    { label: 'CyberBank on GitHub', keywords: ['c++'] },
  ]

  it('returns everything, in order, for an empty query', () => {
    assert.deepEqual(rankItems('', items), items)
  })

  it('filters out non-matches', () => {
    assert.deepEqual(
      rankItems('cyber', items).map((i) => i.label),
      ['CyberBank on GitHub'],
    )
  })

  it('matches keywords as well as labels', () => {
    assert.deepEqual(
      rankItems('arduino', items).map((i) => i.label),
      ['Hardware lab'],
    )
  })
})
