import { About } from '@/components/sections/About'
import { AISystems } from '@/components/sections/AISystems'
import { Contact } from '@/components/sections/Contact'
import { Engineering } from '@/components/sections/Engineering'
import { HardwareLab } from '@/components/sections/HardwareLab'
import { Hero } from '@/components/sections/Hero'
import { ML } from '@/components/sections/ML'
import { LearningArchive } from '@/components/sections/LearningArchive'
import { Photography } from '@/components/sections/Photography'

// Order is the content hierarchy: change it here and in content/site.ts `nav`.
export default function HomePage() {
  return (
    <>
      <Hero />
      <ML />
      <AISystems />
      <HardwareLab />
      <Engineering />
      <Photography />
      <About />
      <LearningArchive />
      <Contact />
    </>
  )
}
