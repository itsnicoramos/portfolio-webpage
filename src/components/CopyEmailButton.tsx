'use client'

import { useEffect, useState } from 'react'
import { Icon } from './Icon'

export function CopyEmailButton({ email }: { email: string }) {
  const [state, setState] = useState<'idle' | 'copied' | 'failed'>('idle')

  // "Copied" reverts on its own; a failure stays until the next click, so the
  // address remains on screen long enough to copy by hand.
  useEffect(() => {
    if (state !== 'copied') return
    const t = window.setTimeout(() => setState('idle'), 2500)
    return () => window.clearTimeout(t)
  }, [state])

  async function copy() {
    try {
      await navigator.clipboard.writeText(email)
      setState('copied')
    } catch {
      setState('failed')
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={copy}
        className="relative z-10 inline-flex min-h-11 items-center gap-2 rounded-full bg-fill-strong px-4 text-ui font-medium text-fg transition-colors duration-200 hover:bg-fill-hover active:bg-fill-hover"
      >
        <Icon name={state === 'copied' ? 'check' : 'copy'} className="size-4" />
        {state === 'copied' ? 'Copied' : state === 'failed' ? 'Copy failed, try again' : 'Copy address'}
      </button>
      {state === 'failed' ? (
        <p className="relative z-10 mt-3 text-sm text-danger-soft">
          Copy it by hand: <span className="select-all font-mono text-fg">{email}</span>
        </p>
      ) : null}
      <span className="sr-only" role="status" aria-live="polite">
        {state === 'copied' ? 'Email address copied to the clipboard.' : state === 'failed' ? `Copy failed. The address is ${email}.` : ''}
      </span>
    </>
  )
}
