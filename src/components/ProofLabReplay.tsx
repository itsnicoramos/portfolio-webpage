'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'
import { prooflabCheckSample as sample } from '@/content/projects'
import { Card } from './ui'

// Replays one real /check response so the step-by-step idea is felt, not just
// read. The server renders the finished state, so the full content is in the
// HTML and visible without JavaScript. On the client it rewinds and plays once
// when scrolled into view. The motion is plain CSS transitions (.replay-step
// in globals.css), so this costs a few hundred bytes instead of an animation
// library. Anyone who prefers reduced motion just sees the finished state.

const FINAL = 4
const timeline = [500, 1300, 2300, 3100] // ms at which phases 1..4 begin

function Step({ show, children }: { show: boolean; children: ReactNode }) {
  return (
    <div className="replay-step" data-show={show} aria-hidden={!show}>
      {children}
    </div>
  )
}

export function ProofLabReplay() {
  const ref = useRef<HTMLElement>(null)
  const [phase, setPhase] = useState(FINAL)
  const [armed, setArmed] = useState(false)
  const [inView, setInView] = useState(false)
  const [run, setRun] = useState(0)

  // Once hydrated, rewind to the start unless the visitor prefers reduced motion.
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setPhase(0)
    setArmed(true)
  }, [])

  // Start the first time any part of the card is meaningfully on screen.
  useEffect(() => {
    const el = ref.current
    if (!armed || !el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [armed])

  useEffect(() => {
    if (!armed || !inView) return
    const timers = timeline.map((t, i) => window.setTimeout(() => setPhase(i + 1), t))
    return () => timers.forEach(window.clearTimeout)
  }, [armed, inView, run])

  // Between rewinding and the final phase, the replay is running.
  const playing = armed && inView && phase < FINAL

  const replay = () => {
    // aria-disabled, not disabled: disabling the focused button would drop
    // keyboard focus to the page body.
    if (playing) return
    setPhase(0)
    setRun((r) => r + 1)
  }

  const checking = phase === 1

  return (
    <Card as="figure" ref={ref} pad="none" elevation="glow" className="on-dark overflow-hidden text-fg">
      <div className="flex items-center justify-between gap-4 border-b border-line px-5 py-3.5 sm:px-6">
        <p className="shrink-0 whitespace-nowrap font-mono text-meta text-fg-muted">
          <span className="text-accent">POST</span> /check
        </p>
        <p className="min-w-0 truncate font-mono text-xs text-fg-muted">{sample.problemId}</p>
      </div>

      <div className="space-y-5 p-5 sm:p-7">
        <div>
          <p className="font-mono text-meta text-fg-muted">Problem</p>
          <p className="subtitle mt-1 font-semibold">{sample.prompt}</p>
        </div>

        <Card surface="tile" pad="xs">
          <div className="flex items-center justify-between gap-3">
            <p className="font-mono text-meta text-fg-muted">Step 1</p>
            <div className="relative h-6 min-w-24 text-right font-mono text-meta">
              <span className="replay-fade absolute inset-0 text-fg-muted" data-show={checking} aria-hidden={!checking}>
                Checking…
              </span>
              <span className="replay-fade absolute inset-0 text-danger" data-show={phase >= 2} aria-hidden={phase < 2}>
                ✕ {sample.stepStatus}
              </span>
            </div>
          </div>
          <p className="mt-2 font-mono text-2xl">{sample.submitted}</p>
          <Step show={phase >= 2}>
            <p className="mt-3 text-ui text-danger-soft">{sample.stepMessage}</p>
          </Step>
        </Card>

        <Step show={phase >= 3}>
          <p className="text-ui text-fg">
            <span className="mr-2 rounded-tile bg-danger-wash px-1.5 py-0.5 font-mono text-xs text-danger-soft">incorrect</span>
            {sample.answerMessage}
          </p>
        </Step>

        <Step show={phase >= 4}>
          <ul className="space-y-2.5" aria-label="Hints">
            {sample.hints.map((h) => (
              <Card as="li" surface="tile" pad="xs" key={h.code}>
                <p className="font-mono text-xs tracking-wide text-fg-muted">{h.code}</p>
                <p className="mt-1 text-ui text-fg">{h.message}</p>
              </Card>
            ))}
          </ul>
        </Step>
      </div>

      <figcaption className="flex flex-wrap items-center justify-between gap-3 border-t border-line px-5 py-3.5 text-meta text-fg-muted sm:px-6">
        <span>A real response from the ProofLab README. Hints are written rules, not generated text.</span>
        {armed ? (
          <button
            type="button"
            onClick={replay}
            aria-disabled={playing}
            className="min-h-11 rounded-full px-3 font-mono font-medium text-accent hover:bg-accent-wash active:bg-accent-wash-strong aria-disabled:cursor-default aria-disabled:text-fg-muted aria-disabled:hover:bg-transparent"
          >
            <span aria-live="polite">{playing ? 'Playing…' : 'Replay'}</span>
          </button>
        ) : null}
      </figcaption>
    </Card>
  )
}
