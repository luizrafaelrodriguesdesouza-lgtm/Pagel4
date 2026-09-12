import { useState, lazy, Suspense } from 'react'
import { Skeleton } from '@/components/ui/skeleton'
import { HeroSection } from '@/components/sections/HeroSection'
import { AuditModal } from '@/components/AuditModal'

// Estrutura consolidada em 8 seções bem espaçadas e limpas (sem repetição):
// 1. Hero Instantânea com imagem de apoio e CTAs diretos
// 2. Dores da Operação & Comparativo direto (sem rodeios)
// 3. Solução Unificada: Atendimento Humano + IA + API Oficial Meta
// 4. Gestão de Entregas & Rastreamento em tempo real (#gestao-entregas)
// 5. Resultados Concretos & Prova Social (Caso Sorocaba + Métricas sóbrias)
// 6. Portfólio "Soluções que já entregamos" (CRM saúde, Agenda+, Advocacia, Cardápio, Vendas, Kanban)
// 7. FAQ com respostas diretas e desmistificação
// 8. CTA Final focado na Auditoria Gratuita de Maturidade Operacional

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
const PortfolioSection = lazy(() =>
  import('@/components/sections/PortfolioSection').then((m) => ({
    default: m.PortfolioSection,
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

      {/* 6. Portfólio: Soluções que já entregamos (Amplitude de atuação) */}
      <Suspense fallback={<SectionLoader />}>
        <PortfolioSection onOpenAudit={handleOpenAudit} />
      </Suspense>

      {/* 7. FAQ Curto: Segurança, anti-ban, equipe e prazos */}
      <Suspense fallback={<SectionLoader />}>
        <FaqSection onOpenAudit={handleOpenAudit} />
      </Suspense>

      {/* 8. CTA Final: "Pronto para profissionalizar seu lucro?" */}
      <Suspense fallback={<SectionLoader />}>
        <CtaSection onOpenAudit={handleOpenAudit} />
      </Suspense>

      {/* Modal Centralizado de Auditoria de Maturidade Gratuita */}
      <AuditModal open={auditModalOpen} onOpenChange={setAuditModalOpen} />
    </div>
  )
}

export default Index
