import { HeroSection } from '@/components/sections/HeroSection'
import { PartnersSection } from '@/components/sections/PartnersSection'
import { ProblemSection } from '@/components/sections/ProblemSection'
import { SolutionSection } from '@/components/sections/SolutionSection'
import { ComparisonSection } from '@/components/sections/ComparisonSection'
import { ApiOficialSection } from '@/components/sections/ApiOficialSection'
import { AuthoritySection } from '@/components/sections/AuthoritySection'
import { FaqSection } from '@/components/sections/FaqSection'
import { CtaSection } from '@/components/sections/CtaSection'

const Index = () => {
  return (
    <div className="flex flex-col w-full">
      <HeroSection />
      <PartnersSection />
      <ProblemSection />
      <SolutionSection />
      <ComparisonSection />
      <ApiOficialSection />
      <AuthoritySection />
      <FaqSection />
      <CtaSection />
    </div>
  )
}

export default Index
