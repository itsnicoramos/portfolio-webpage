import { email, primaryContacts, socialContacts, type ContactLink } from '@/content/site'
import { CopyEmailButton } from '../CopyEmailButton'
import { Icon } from '../Icon'
import { Card, Section, SectionHeader } from '../ui'

function PrimaryCard({ contact }: { contact: ContactLink }) {
  const external = contact.external ? { target: '_blank', rel: 'noopener noreferrer' } : {}
  return (
    <Card
      as="li"
      pad="snug"
      className="relative flex flex-col transition-[background-color,box-shadow] duration-300 has-[a:focus-visible]:ring-2 has-[a:focus-visible]:ring-accent hover:bg-surface-2 hover:ring-line-strong"
    >
      <span className="flex size-12 items-center justify-center rounded-tile bg-fill-strong">
        <Icon name={contact.icon} className="size-6" />
      </span>
      <h3 className="eyebrow mt-8 text-fg-muted">{contact.label}</h3>
      <a
        href={contact.href}
        {...external}
        className="subtitle mt-1 font-semibold text-fg [overflow-wrap:anywhere] after:absolute after:inset-0 after:rounded-card focus-visible:outline-none"
      >
        {/* Let a long address wrap after the @ instead of mid-word. */}
        {contact.handle.includes('@') && !contact.handle.startsWith('@') ? (
          <>
            {contact.handle.split('@')[0]}@<wbr />
            {contact.handle.split('@')[1]}
          </>
        ) : (
          contact.handle
        )}
        {contact.external ? (
          <>
            <Icon name="external" className="ml-1 inline size-5 align-[-2px] text-fg-muted" />
            <span className="sr-only"> (opens in a new tab)</span>
          </>
        ) : null}
      </a>
      {contact.id === 'email' ? (
        <div className="mt-6">
          <CopyEmailButton email={email} />
        </div>
      ) : null}
    </Card>
  )
}

export function Contact() {
  return (
    <Section id="contact" theme="dark" className="relative overflow-hidden">
      <SectionHeader
        id="contact"
        eyebrow="Contact"
        align="center"
        title="Let’s Build Something Meaningful."
        lead={
          <>
            I’m always interested in connecting with people who share a curiosity for engineering, artificial intelligence, and
            emerging technologies.
            <span className="mt-4 block">
              Whether you’re interested in collaborating, discussing ideas, or exploring opportunities, feel free to reach out.
            </span>
          </>
        }
      />

      <ul className="reveal mt-16 grid gap-4 md:grid-cols-3 lg:mt-20">
        {primaryContacts.map((c) => (
          <PrimaryCard key={c.id} contact={c} />
        ))}
      </ul>

      <div className="reveal mt-14">
        <h3 className="eyebrow text-center text-fg-muted">Elsewhere</h3>
        <ul className="mt-5 flex flex-wrap justify-center gap-3">
          {socialContacts.map((c) => (
            <li key={c.id}>
              <a
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-11 items-center gap-2.5 rounded-full bg-fill px-4 py-2 text-ui text-fg ring-1 ring-line transition-[background-color,transform] duration-200 hover:-translate-y-0.5 hover:bg-fill-strong active:translate-y-0"
              >
                <Icon name={c.icon} className="size-4.5" />
                <span>
                  <span className="sr-only">{c.label} </span>
                  {c.handle}
                </span>
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
