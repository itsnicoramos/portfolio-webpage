import type { Metadata } from 'next'
import { PillLink } from '@/components/ui'

export const metadata: Metadata = {
  title: 'Page not found',
  alternates: { canonical: null },
}

export default function NotFound() {
  return (
    <section
      aria-labelledby="not-found-title"
      className="theme-dark flex min-h-[80svh] items-center pt-14"
    >
      <div className="container-page">
        <p className="text-base font-semibold text-mist">404</p>
        <h1 id="not-found-title" className="display-lg mt-3">
          Nothing at this address.
        </h1>
        <p className="lead mt-6 max-w-xl text-mist">The page you were looking for does not exist, or it moved when the site was rebuilt.</p>
        <div className="mt-10">
          <PillLink href="/">Back to the home page</PillLink>
        </div>
      </div>
    </section>
  )
}
