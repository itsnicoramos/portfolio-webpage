import { email, primaryContacts, socialContacts, type ContactLink } from '@/content/site'
import { CopyEmailButton } from '../CopyEmailButton'
import { Icon } from '../Icon'
import { Section, SectionHeader } from '../ui'

function PrimaryCard({ contact }: { contact: ContactLink }) {
  const external = contact.external ? { target: '_blank', rel: 'noopener noreferrer' } : {}
  return (
    <li className="relative flex flex-col rounded-[1.75rem] bg-graphite p-7 ring-1 ring-white/10 transition-[background-color,box-shadow] duration-300 focus-within:ring-2 focus-within:ring-sky hover:bg-graphite-2 hover:ring-white/20">
      <span className="flex size-12 items-center justify-center rounded-2xl bg-white/[0.08]">
        <Icon name={contact.icon} className="size-6" />
      </span>
      <h3 className="mt-8 text-[0.9375rem] font-medium text-mist">{contact.label}</h3>
      <a
        href={contact.href}
        {...external}
        className="mt-1 text-xl font-semibold tracking-tight text-snow [overflow-wrap:anywhere] after:absolute after:inset-0 after:rounded-[1.75rem] focus-visible:outline-none"
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
            <Icon name="external" className="ml-1 inline size-5 align-[-2px] text-mist" />
            <span className="sr-only"> (opens in a new tab)</span>
          </>
        ) : null}
      </a>
      {contact.id === 'email' ? (
        <div className="mt-6">
          <CopyEmailButton email={email} />
        </div>
      ) : null}
    </li>
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

      <ul className="reveal mx-auto mt-16 grid max-w-5xl gap-4 md:grid-cols-3 lg:mt-20">
        {primaryContacts.map((c) => (
          <PrimaryCard key={c.id} contact={c} />
        ))}
      </ul>

      <div className="reveal mx-auto mt-14 max-w-5xl">
        <h3 className="text-center text-[0.9375rem] font-medium text-mist">Elsewhere</h3>
        <ul className="mt-5 flex flex-wrap justify-center gap-3">
          {socialContacts.map((c) => (
            <li key={c.id}>
              <a
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-11 items-center gap-2.5 rounded-full bg-white/[0.06] px-4 py-2 text-[0.9375rem] text-snow ring-1 ring-white/10 transition-[background-color,transform] duration-200 hover:-translate-y-0.5 hover:bg-white/[0.12]"
              >
                <Icon name={c.icon} className="size-[1.125rem]" />
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
