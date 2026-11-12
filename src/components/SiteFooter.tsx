import Link from 'next/link'
import { site } from '@/content/site'

export function SiteFooter() {
  const year = new Date().getFullYear()
  return (
    <footer className="theme-dark border-t border-line">
      <div className="container-page flex flex-col gap-4 py-10 font-mono text-meta text-fg-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {year} {site.name}. All rights reserved.
        </p>
        <Link href="/#home" className="inline-flex min-h-11 items-center hover:text-fg">
          Back to top
        </Link>
      </div>
    </footer>
  )
}
