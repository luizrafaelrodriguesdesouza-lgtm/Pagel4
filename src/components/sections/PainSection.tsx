import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Clock,
  UserX,
  PackageX,
  ShieldCheck,
  CheckCircle2,
  XCircle,
  ArrowRight,
} from 'lucide-react'

interface PainSectionProps {
  onOpenAudit?: () => void
}

export function PainSection({ onOpenAudit }: PainSectionProps) {
  const { ref, isVisible } = useScrollAnimation()

  const pains = [
    {
      icon: Clock,
      title: 'Tempo de espera custa vendas',
      description:
        'Quem responde primeiro, fecha. Enquanto seu cliente aguarda uma resposta manual no WhatsApp, ele busca a farmácia ao lado.',
      highlight: 'A cada minuto sem resposta, 40% das conversões esfriam.',
    },
    {
      icon: UserX,
      title: 'Balconista dividido e sobrecarregado',
      description:
        'Sua equipe precisa atender quem está no balcão físico e responder mensagens ao mesmo tempo, gerando estresse e atendimento truncado.',
      highlight: 'A IA assume o filtro inicial e entrega o lead pronto para fechar.',
    },
    {
      icon: PackageX,
      title: 'Pedidos esquecidos na troca de turno',
      description:
        'Sem processo unificado, mensagens ficam lidas sem resposta, motoboys saem sem rota clara e o cliente fica sem previsão da entrega.',
      highlight: 'Organização visual do balcão até a entrega final.',
    },
  ]

  const comparisons = [
    {
      label: 'Tempo para primeira resposta',
      manual: '10 a 25 minutos em horário de pico',
      rl4: 'Até 30 segundos, 24 horas por dia',
    },
    {
      label: 'Qualificação do pedido e receita',
      manual: 'Balconista digita dados um a um',
      rl4: 'IA coleta endereço, itens e forma de pagamento',
    },
    {
      label: 'Segurança contra banimento de WhatsApp',
      manual: 'Risco alto com robôs piratas ou QR code',
      rl4: '100% blindado com API Oficial da Meta',
    },
    {
      label: 'Rastreio para o cliente no sofá',
      manual: 'Cliente pergunta "cadê meu remédio?" sem resposta',
      rl4: 'Notificação automática quando o motoboy sai',
    },
  ]

  return (
    <section
      id="problema"
      className="py-20 md:py-28 bg-slate-50/70 border-t border-slate-200/80 text-slate-900 relative overflow-hidden"
    >
      {/* Background soft glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div
        ref={ref}
        className={`container px-4 mx-auto max-w-6xl transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <Badge className="bg-emerald-100 text-emerald-800 border-emerald-200 px-3.5 py-1 text-xs font-semibold rounded-full uppercase tracking-wider">
            Diagnóstico de Eficiência
          </Badge>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
            O custo invisível da sua demora
          </h2>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
            Seu cliente compra onde for atendido com rapidez e clareza. Não é sobre mandar mais
            mensagens — é sobre responder na hora certa, com precisão e segurança.
          </p>
        </div>

        {/* 3 Main Pain Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {pains.map((pain, index) => {
            const Icon = pain.icon
            return (
              <Card
                key={index}
                className="bg-white border-slate-200/80 shadow-xs hover:shadow-md hover:border-emerald-300 transition-all duration-300 rounded-2xl flex flex-col justify-between"
              >
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold border border-emerald-100">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{pain.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{pain.description}</p>
                  </div>
                  <div className="pt-3 border-t border-slate-100 text-xs font-semibold text-emerald-800 bg-emerald-50/60 p-2.5 rounded-lg">
                    💡 {pain.highlight}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Consolidated Comparison & Meta Official API Guarantee */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm space-y-8">
          <div className="max-w-2xl">
            <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
              Comparativo direto
            </span>
            <h3 className="text-2xl font-bold text-slate-900 mt-1">
              Operação manual vs. Operação com a RL4
            </h3>
            <p className="text-slate-600 text-sm mt-1">
              Transforme a ansiedade do atendimento em previsibilidade e vendas sem sobrecarregar
              sua equipe.
            </p>
          </div>

          <div className="divide-y divide-slate-100">
            {comparisons.map((c, i) => (
              <div
                key={i}
                className="py-4 grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4 items-center"
              >
                <div className="md:col-span-4 font-semibold text-slate-900 text-sm">{c.label}</div>
                <div className="md:col-span-4 text-xs md:text-sm text-slate-500 flex items-center gap-2 bg-slate-50 md:bg-transparent p-2.5 md:p-0 rounded-lg">
                  <XCircle className="w-4 h-4 text-slate-400 shrink-0" />
                  <span>{c.manual}</span>
                </div>
                <div className="md:col-span-4 text-xs md:text-sm font-medium text-emerald-900 flex items-center gap-2 bg-emerald-50/80 p-2.5 rounded-lg border border-emerald-100">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{c.rl4}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Meta Official API Callout Banner */}
          <div className="p-4 md:p-5 rounded-xl bg-gradient-to-r from-emerald-50 via-slate-50 to-emerald-50/50 border border-emerald-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">
                  100% API Oficial da Meta — Garantia contra banimento
                </h4>
                <p className="text-xs text-slate-600">
                  Sem conexões por QR Code pirata e sem risco de perder o número histórico da sua
                  farmácia.
                </p>
              </div>
            </div>

            {onOpenAudit && (
              <Button
                onClick={onOpenAudit}
                variant="outline"
                size="sm"
                className="border-emerald-600/30 text-emerald-800 hover:bg-emerald-100 font-semibold text-xs whitespace-nowrap shrink-0"
              >
                Auditar meu canal agora <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
