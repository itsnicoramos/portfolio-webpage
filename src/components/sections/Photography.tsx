import Image from 'next/image'
import { photos } from '@/content/photos'
import { socialContacts } from '@/content/site'
import { ArrowLink, Card, Section, SectionHeader } from '../ui'

const instagram = socialContacts.find((c) => c.id === 'instagram')

export function Photography() {
  return (
    <Section id="photography" theme="graphite">
      <SectionHeader
        id="photography"
        eyebrow="Photography"
        title="Away from the keyboard."
        lead="Photography is how I practice noticing things. The gallery is being curated."
      />

      {photos.length > 0 ? (
        <ul className="mt-16 columns-1 gap-4 sm:columns-2 lg:mt-20 lg:columns-3 [&>li]:mb-4">
          {photos.map((photo, i) => (
            <li key={photo.src} className="reveal break-inside-avoid">
              <figure className="overflow-hidden rounded-tile bg-surface-2">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={photo.width}
                  height={photo.height}
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  loading={i < 3 ? 'eager' : 'lazy'}
                  className="h-auto w-full"
                />
                {photo.caption ? <figcaption className="px-4 py-3 text-sm text-fg-muted">{photo.caption}</figcaption> : null}
              </figure>
            </li>
          ))}
        </ul>
      ) : (
        <div className="reveal mt-16 lg:mt-20">
          <Card
            surface="inset"
            className="relative grid min-h-[16rem] place-items-center overflow-hidden text-center sm:min-h-[20rem]"
          >
            <div className="glow-floor-warn pointer-events-none absolute inset-0" aria-hidden="true" />
            <svg
              viewBox="0 0 120 120"
              className="pointer-events-none absolute inset-0 m-auto size-[min(60vw,18rem)] text-fill"
              fill="none"
              stroke="currentColor"
              strokeWidth={0.6}
              aria-hidden="true"
            >
              {Array.from({ length: 6 }, (_, i) => {
                const a = (i * Math.PI) / 3
                const x = 60 + 44 * Math.cos(a)
                const y = 60 + 44 * Math.sin(a)
                return <path key={i} d={`M60 60 L${x.toFixed(2)} ${y.toFixed(2)}`} />
              })}
              <circle cx="60" cy="60" r="44" />
              <circle cx="60" cy="60" r="16" />
            </svg>
            <div className="relative max-w-md">
              <p className="eyebrow text-warn">In progress</p>
              <p className="title-md mt-4">The first photos are on their way.</p>
              <p className="mt-3 text-base leading-relaxed text-fg-muted">Nothing here yet, and no stock images standing in.</p>
              {instagram ? (
                <div className="mt-6">
                  <ArrowLink href={instagram.href} external>
                    Follow along on Instagram
                  </ArrowLink>
                </div>
              ) : null}
            </div>
          </Card>
        </div>
      )}
    </Section>
  )
}
