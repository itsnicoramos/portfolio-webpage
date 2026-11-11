import { mlFirstProject } from '@/content/projects'
import { Section, SectionHeader, StatusPill } from '../ui'

export function ML() {
  return (
    <Section id="ml" theme="white">
      <SectionHeader id="ml" tone="light" eyebrow="ML" title={mlFirstProject.title} lead={mlFirstProject.summary} />
      <div className="reveal mt-12 lg:mt-16">
        <StatusPill status={mlFirstProject.status} tone="light" />
      </div>
    </Section>
  )
}
