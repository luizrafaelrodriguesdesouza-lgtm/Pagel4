import { ArrowRight, Play, Bot, Workflow, CheckCircle2, ShieldCheck, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import logoUrl from '@/assets/editedimage1780319473364-fd281.png'
import pharmacyImg from '@/assets/generatedimage1781836123150-85c91.png'

const HERO_CONTENT = {
  badge: 'Automação Especializada com IA & WhatsApp',
  title: 'Automatize o WhatsApp da sua farmácia e venda mais.',
  subtitle:
    'Atendimento rápido 24/7, triagem de pedidos, gestão de entregas em tempo real e a segurança da API Oficial da Meta.',
  primaryCta: 'Solicitar Orçamento Gratuito',
  secondaryCta: 'Ver Demonstração',
}

interface HeroSectionProps {
  onOpenAudit?: () => void
}

export function HeroSection({ onOpenAudit }: HeroSectionProps = {}) {
  const scrollToDemo = () => {
    const section = document.getElementById('gestao-entregas')
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const handlePrimaryCta = () => {
    if (onOpenAudit) {
      onOpenAudit()
    } else {
      window.open(
        'https://n8n-n8n.sd3ni9.easypanel.host/form/93cbdace-782c-4b58-8d35-6e77ebc589fa',
        '_blank',
      )
    }
  }

  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center pt-12 pb-16 overflow-hidden bg-white text-slate-900">
      {/* Background with dot pattern */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] bg-[size:24px_24px] opacity-60" />

      {/* Subtle Background Branding (Watermark) */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none bg-no-repeat bg-center"
        style={{
          backgroundImage: `url(${logoUrl})`,
          backgroundSize: 'max(400px, 40vw)',
        }}
      />

      {/* Soft gradient to ensure text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-white/80 pointer-events-none z-0" />

      <div className="container relative z-10 px-4 mx-auto my-auto">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-7 text-left space-y-6 max-w-2xl pt-2 lg:pt-0">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs font-semibold">
              <Zap className="w-3.5 h-3.5 text-emerald-600" />
              <span>{HERO_CONTENT.badge}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
              {HERO_CONTENT.title}
            </h1>

            <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-normal">
              {HERO_CONTENT.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-3.5 items-stretch sm:items-center pt-2">
              <Button
                size="lg"
                className="h-14 px-8 text-base md:text-lg w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-600/25 transition-all hover:scale-[1.02] active:scale-[0.98] font-bold rounded-2xl"
                onClick={handlePrimaryCta}
              >
                {HERO_CONTENT.primaryCta}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={scrollToDemo}
                className="h-14 px-7 text-base md:text-lg w-full sm:w-auto border-slate-300 text-slate-800 hover:text-emerald-800 hover:bg-emerald-50/70 hover:border-emerald-500 transition-all hover:scale-[1.02] active:scale-[0.98] bg-white shadow-xs font-semibold rounded-2xl"
              >
                <Play className="mr-2 h-4 w-4 fill-emerald-600 text-emerald-600" />
                {HERO_CONTENT.secondaryCta}
              </Button>
            </div>

            {/* Micro badges below CTA */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-slate-500 pt-2">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Respostas em até 30s
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" /> API Oficial da Meta
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Gestão de Entregas
              </span>
            </div>
          </div>

          {/* Right Column: Visual Composition with Supporting Real-world Mockup */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            {/* Soft backdrop glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-200/60 to-blue-200/40 rounded-3xl transform rotate-2 scale-105 opacity-60 blur-xl pointer-events-none" />

            <div className="relative space-y-4">
              {/* Main Photo: Atendimento Humanizado de Farmácia */}
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-white p-2 group">
                <div className="relative aspect-[16/10] overflow-hidden rounded-xl">
                  <img
                    src={pharmacyImg}
                    alt="Atendimento de Automação na Farmácia"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent flex items-end p-4">
                    <div className="text-white">
                      <p className="text-xs font-bold uppercase tracking-wider text-emerald-300">
                        Operação Real em Loja
                      </p>
                      <p className="text-sm font-semibold text-slate-100">
                        Atendimento presencial focado e WhatsApp rodando no piloto automático.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Supporting Secondary Card: Live Chat + Dispatch Interface Preview */}
              <div className="grid grid-cols-2 gap-3">
                {/* Visual card 1: WhatsApp Chat Snapshot */}
                <div className="bg-white/95 backdrop-blur-sm border border-slate-200/90 rounded-2xl p-3.5 shadow-md space-y-2 hover:border-emerald-300 transition-colors">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold text-slate-800 flex items-center gap-1.5">
                      <Bot className="w-3.5 h-3.5 text-emerald-600" /> Triagem IA
                    </span>
                    <span className="text-[10px] bg-emerald-50 text-emerald-700 px-1.5 py-0.5 rounded font-semibold">
                      Online
                    </span>
                  </div>
                  <div className="bg-slate-50 rounded-xl p-2.5 text-[11px] text-slate-700 leading-snug border border-slate-100">
                    <p className="font-semibold text-emerald-900 mb-0.5">💬 Cliente:</p>
                    <p className="text-slate-600 truncate">
                      "Tem dipirona 1g e entrega no centro?"
                    </p>
                    <p className="font-semibold text-emerald-900 mt-1 mb-0.5">
                      ⚡ Resposta em 20s:
                    </p>
                    <p className="text-slate-600 truncate">"Temos sim! Motoboy sai em 15min."</p>
                  </div>
                </div>

                {/* Visual card 2: Real-time Dispatch Preview */}
                <div className="bg-white/95 backdrop-blur-sm border border-slate-200/90 rounded-2xl p-3.5 shadow-md space-y-2 hover:border-emerald-300 transition-colors">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold text-slate-800 flex items-center gap-1.5">
                      <Workflow className="w-3.5 h-3.5 text-blue-600" /> Despacho
                    </span>
                    <span className="text-[10px] bg-blue-50 text-blue-700 px-1.5 py-0.5 rounded font-semibold">
                      Kanban
                    </span>
                  </div>
                  <div className="bg-slate-900 text-white rounded-xl p-2.5 text-[11px] space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] text-slate-300">Pedido #482</span>
                      <span className="text-[10px] font-bold text-emerald-400">R$ 54,90</span>
                    </div>
                    <p className="text-emerald-300 text-[10px] font-medium flex items-center gap-1">
                      🛵 Em rota de entrega
                    </p>
                    <p className="text-[10px] text-slate-400 truncate">
                      Notificação enviada no Whats
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
