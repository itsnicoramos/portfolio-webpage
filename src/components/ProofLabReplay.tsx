'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'
import { prooflabCheckSample as sample } from '@/content/projects'

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
    <div className="replay-step" data-show={show}>
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

  const replay = () => {
    setPhase(0)
    setRun((r) => r + 1)
  }

  const checking = phase === 1

  return (
    <figure
      ref={ref}
      className="on-dark overflow-hidden rounded-[1.75rem] bg-graphite text-snow shadow-[0_40px_120px_-40px_rgb(41_151_255/0.45)] ring-1 ring-white/10"
    >
      <div className="flex items-center justify-between gap-4 border-b border-white/10 px-5 py-3.5 sm:px-6">
        <p className="shrink-0 whitespace-nowrap font-mono text-[0.8125rem] text-mist">
          <span className="text-mint">POST</span> /check
        </p>
        <p className="min-w-0 truncate font-mono text-[0.75rem] text-mist">{sample.problemId}</p>
      </div>

      <div className="space-y-5 p-5 sm:p-7">
        <div>
          <p className="text-[0.8125rem] font-medium text-mist">Problem</p>
          <p className="mt-1 text-xl font-semibold tracking-tight">{sample.prompt}</p>
        </div>

        <div className="rounded-2xl bg-white/[0.04] p-4 ring-1 ring-white/10">
          <div className="flex items-center justify-between gap-3">
            <p className="text-[0.8125rem] font-medium text-mist">Step 1</p>
            <div className="relative h-6 min-w-24 text-right text-[0.8125rem] font-medium">
              <span className="replay-fade absolute inset-0 text-mist" data-show={checking} aria-hidden={!checking}>
                Checking…
              </span>
              <span className="replay-fade absolute inset-0 text-[#ff6961]" data-show={phase >= 2}>
                ✕ {sample.stepStatus}
              </span>
            </div>
          </div>
          <p className="mt-2 font-mono text-2xl">{sample.submitted}</p>
          <Step show={phase >= 2}>
            <p className="mt-3 text-[0.9375rem] text-[#ffb4ae]">{sample.stepMessage}</p>
          </Step>
        </div>

        <Step show={phase >= 3}>
          <p className="text-[0.9375rem] text-snow">
            <span className="mr-2 rounded-md bg-[#ff6961]/15 px-1.5 py-0.5 font-mono text-[0.75rem] text-[#ffb4ae]">incorrect</span>
            {sample.answerMessage}
          </p>
        </Step>

        <Step show={phase >= 4}>
          <ul className="space-y-2.5" aria-label="Hints">
            {sample.hints.map((h) => (
              <li key={h.code} className="rounded-2xl bg-sky/[0.08] p-4 ring-1 ring-sky/25">
                <p className="font-mono text-[0.75rem] tracking-wide text-sky">{h.code}</p>
                <p className="mt-1 text-[0.9375rem] text-snow">{h.message}</p>
              </li>
            ))}
          </ul>
        </Step>
      </div>

      <figcaption className="flex flex-wrap items-center justify-between gap-3 border-t border-white/10 px-5 py-3.5 text-[0.8125rem] text-mist sm:px-6">
        <span>A real response from the ProofLab README. Hints are written rules, not generated text.</span>
        {armed ? (
          <button type="button" onClick={replay} className="min-h-11 rounded-full px-3 font-medium text-sky hover:bg-sky/10">
            Replay
          </button>
        ) : null}
      </figcaption>
    </figure>
  )
}
