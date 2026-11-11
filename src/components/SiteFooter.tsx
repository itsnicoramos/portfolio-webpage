import Link from 'next/link'
import { site } from '@/content/site'
import { ExternalLink } from './ui'

export function SiteFooter() {
  const year = new Date().getFullYear()
  return (
    <footer className="theme-dark border-t border-white/10">
      <div className="container-page flex flex-col gap-4 py-10 text-[0.8125rem] text-mist sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {year} {site.name}. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          <ExternalLink
            href="https://github.com/itsnicoramos/portfolio-webpage"
            className="inline-flex min-h-11 items-center hover:text-snow"
          >
            Source
          </ExternalLink>
          <Link href="/#home" className="inline-flex min-h-11 items-center hover:text-snow">
            Back to top
          </Link>
        </div>
      </div>
    </footer>
  )
}
