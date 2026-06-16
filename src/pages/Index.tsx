import { lazy, Suspense } from 'react'
import { Skeleton } from '@/components/ui/skeleton'

const HeroSection = lazy(() =>
  import('@/components/sections/HeroSection').then((m) => ({ default: m.HeroSection })),
)
const BenefitsSection = lazy(() =>
  import('@/components/sections/BenefitsSection').then((m) => ({ default: m.BenefitsSection })),
)
const PartnersSection = lazy(() =>
  import('@/components/sections/PartnersSection').then((m) => ({ default: m.PartnersSection })),
)
const ProblemSection = lazy(() =>
  import('@/components/sections/ProblemSection').then((m) => ({ default: m.ProblemSection })),
)
const SolutionSection = lazy(() =>
  import('@/components/sections/SolutionSection').then((m) => ({ default: m.SolutionSection })),
)
const ComparisonSection = lazy(() =>
  import('@/components/sections/ComparisonSection').then((m) => ({ default: m.ComparisonSection })),
)
const ApiOficialSection = lazy(() =>
  import('@/components/sections/ApiOficialSection').then((m) => ({ default: m.ApiOficialSection })),
)
const AuthoritySection = lazy(() =>
  import('@/components/sections/AuthoritySection').then((m) => ({ default: m.AuthoritySection })),
)
const FaqSection = lazy(() =>
  import('@/components/sections/FaqSection').then((m) => ({ default: m.FaqSection })),
)
const CtaSection = lazy(() =>
  import('@/components/sections/CtaSection').then((m) => ({ default: m.CtaSection })),
)
const FormularioLead = lazy(() =>
  import('@/components/sections/FormularioLead').then((m) => ({ default: m.FormularioLead })),
)
const TestimonialSection = lazy(() =>
  import('@/components/sections/TestimonialSection').then((m) => ({
    default: m.TestimonialSection,
  })),
)
const MetricsSection = lazy(() =>
  import('@/components/sections/MetricsSection').then((m) => ({ default: m.MetricsSection })),
)

const SectionLoader = () => (
  <div className="w-full py-16 flex justify-center">
    <Skeleton className="w-full max-w-5xl h-64 rounded-2xl bg-slate-100" />
  </div>
)

const Index = () => {
  return (
    <div className="flex flex-col w-full">
      <Suspense fallback={<SectionLoader />}>
        <HeroSection />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <ProblemSection />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <BenefitsSection />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <FormularioLead />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <TestimonialSection />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <MetricsSection />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <PartnersSection />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <SolutionSection />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <ComparisonSection />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <ApiOficialSection />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <AuthoritySection />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <FaqSection />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <CtaSection />
      </Suspense>
    </div>
  )
}

export default Index
