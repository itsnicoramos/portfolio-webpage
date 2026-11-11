'use client'

import { useEffect, useState } from 'react'
import { Icon } from './Icon'

export function CopyEmailButton({ email }: { email: string }) {
  const [state, setState] = useState<'idle' | 'copied' | 'failed'>('idle')

  useEffect(() => {
    if (state === 'idle') return
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
        className="relative z-10 inline-flex min-h-11 items-center gap-2 rounded-full bg-white/10 px-4 text-[0.875rem] font-medium text-snow transition-colors duration-200 hover:bg-white/20"
      >
        <Icon name={state === 'copied' ? 'check' : 'copy'} className="size-4" />
        {state === 'copied' ? 'Copied' : 'Copy address'}
      </button>
      <span className="sr-only" role="status" aria-live="polite">
        {state === 'copied' ? 'Email address copied to the clipboard.' : state === 'failed' ? `Copy failed. The address is ${email}.` : ''}
      </span>
    </>
  )
}
