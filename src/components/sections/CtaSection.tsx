import { useState } from 'react'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import { Button } from '@/components/ui/button'
import { ArrowRight, Loader2 } from 'lucide-react'

import { ShieldCheck, CheckCircle2 } from 'lucide-react'

interface CtaSectionProps {
  onOpenAudit?: () => void
}

export function CtaSection({ onOpenAudit }: CtaSectionProps = {}) {
  const { ref, isVisible } = useScrollAnimation()

  const handleCtaClick = () => {
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
    <section className="py-20 md:py-28 relative overflow-hidden bg-white border-t border-slate-200">
      <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:20px_20px] opacity-30 pointer-events-none" />

      <div
        ref={ref}
        className={`container relative z-10 px-4 mx-auto max-w-4xl text-center transition-all duration-1000 ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}
      >
        <div className="p-8 md:p-14 rounded-3xl border border-emerald-200 bg-gradient-to-br from-white via-slate-50 to-emerald-50/50 shadow-xl relative overflow-hidden">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-6">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            Auditoria 100% Gratuita & Personalizada
          </div>

          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-5 leading-tight">
            Pronto para profissionalizar seu lucro?
          </h2>

          <p className="text-base md:text-xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Receba um diagnóstico completo do canal de WhatsApp da sua farmácia: descubra onde você
            está perdendo vendas por demora e como blindar sua operação com a API Oficial da Meta.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <Button
              size="lg"
              className="h-14 px-8 text-base md:text-lg w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white font-bold shadow-lg shadow-emerald-600/25 transition-all hover:scale-105 active:scale-95 rounded-2xl group"
              onClick={handleCtaClick}
            >
              Quero minha Auditoria de Maturidade Operacional
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-slate-500">
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Sem compromisso comercial
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Diagnóstico feito por
              especialistas
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Resposta em até 24h úteis
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
