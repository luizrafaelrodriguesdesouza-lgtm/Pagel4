import { useState, lazy, Suspense } from 'react'
import { Skeleton } from '@/components/ui/skeleton'
import { HeroSection } from '@/components/sections/HeroSection'
import { AuditModal } from '@/components/AuditModal'

// Consolidado em 6 seções essenciais na Home:
// 1. Hero (instantânea, preservada da etapa 1)
// 2. Dor: "O custo invisível da sua demora" (fundindo problema, comparação e API oficial Meta)
// 3. Solução / Benefícios: "Atendimento Humano, Velocidade de IA, Segurança de API"
// 4. Gestão de Entregas / App (#gestao-entregas) com jornada do cliente no sofá
// 5. Prova Social realista (caso Sorocaba 15m -> 30s, métricas sóbrias, depoimentos, logos de parceiros)
// 6. FAQ focado em dúvidas de segurança e implantação
// 7. CTA Final: "Pronto para profissionalizar seu lucro?" apontando para a auditoria de maturidade

const PainSection = lazy(() =>
  import('@/components/sections/PainSection').then((m) => ({ default: m.PainSection })),
)
const UnifiedSolutionSection = lazy(() =>
  import('@/components/sections/UnifiedSolutionSection').then((m) => ({
    default: m.UnifiedSolutionSection,
  })),
)
const DeliveryManagementSection = lazy(() =>
  import('@/components/sections/DeliveryManagementSection').then((m) => ({
    default: m.DeliveryManagementSection,
  })),
)
const SocialProofSection = lazy(() =>
  import('@/components/sections/SocialProofSection').then((m) => ({
    default: m.SocialProofSection,
  })),
)
const FaqSection = lazy(() =>
  import('@/components/sections/FaqSection').then((m) => ({ default: m.FaqSection })),
)
const CtaSection = lazy(() =>
  import('@/components/sections/CtaSection').then((m) => ({ default: m.CtaSection })),
)

const SectionLoader = () => (
  <div className="w-full py-16 flex justify-center">
    <Skeleton className="w-full max-w-5xl h-64 rounded-2xl bg-slate-100" />
  </div>
)

const Index = () => {
  const [auditModalOpen, setAuditModalOpen] = useState(false)

  const handleOpenAudit = () => {
    setAuditModalOpen(true)
  }

  return (
    <div className="flex flex-col w-full bg-white text-slate-900">
      {/* 1. Hero Instantânea */}
      <HeroSection onOpenAudit={handleOpenAudit} />

      {/* 2. Dor: O custo invisível da sua demora (fundido com Comparativo e API Oficial) */}
      <Suspense fallback={<SectionLoader />}>
        <PainSection onOpenAudit={handleOpenAudit} />
      </Suspense>

      {/* 3. Solução: Atendimento Humano, Velocidade de IA, Segurança de API */}
      <Suspense fallback={<SectionLoader />}>
        <UnifiedSolutionSection onOpenAudit={handleOpenAudit} />
      </Suspense>

      {/* 4. Gestão de Entregas & Rastreamento (#gestao-entregas) com jornada do sofá */}
      <Suspense fallback={<SectionLoader />}>
        <DeliveryManagementSection onOpenAudit={handleOpenAudit} />
      </Suspense>

      {/* 5. Prova Social Realista: Caso Sorocaba + Métricas sóbrias + Parceiros oficiais */}
      <Suspense fallback={<SectionLoader />}>
        <SocialProofSection onOpenAudit={handleOpenAudit} />
      </Suspense>

      {/* 6. FAQ Curto: Segurança, anti-ban, equipe e prazos */}
      <Suspense fallback={<SectionLoader />}>
        <FaqSection onOpenAudit={handleOpenAudit} />
      </Suspense>

      {/* 7. CTA Final: "Pronto para profissionalizar seu lucro?" */}
      <Suspense fallback={<SectionLoader />}>
        <CtaSection onOpenAudit={handleOpenAudit} />
      </Suspense>

      {/* Modal Centralizado de Auditoria de Maturidade Gratuita */}
      <AuditModal open={auditModalOpen} onOpenChange={setAuditModalOpen} />
    </div>
  )
}

export default Index
