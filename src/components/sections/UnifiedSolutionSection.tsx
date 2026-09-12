import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  MessageSquare,
  Bot,
  ShieldCheck,
  Truck,
  CheckCircle2,
  ArrowRight,
  Layers,
  Sparkles,
} from 'lucide-react'

interface UnifiedSolutionSectionProps {
  onOpenAudit?: () => void
}

export function UnifiedSolutionSection({ onOpenAudit }: UnifiedSolutionSectionProps) {
  const { ref, isVisible } = useScrollAnimation()

  const pillars = [
    {
      icon: MessageSquare,
      title: 'Atendimento Natural',
      badge: 'Acolhimento',
      description:
        'A IA faz a primeira triagem com tom empático brasileiro e transfere para o balconista quando chega a hora de conferir a receita ou fechar o pedido.',
      items: [
        'Conversa fluida, sem respostas engessadas',
        'Transição limpa para atendente humano',
        'Histórico do cliente sempre preservado',
      ],
    },
    {
      icon: Bot,
      title: 'Velocidade 24/7',
      badge: 'Em até 30s',
      description:
        'Atendimento sem filas a qualquer hora. Nenhum cliente espera minutos para saber se a loja tem um produto, taxa de entrega ou forma de pagamento.',
      items: [
        'Triagem rápida de receitas e orçamentos',
        'Confirmação de bairros atendidos e taxas',
        'Vendas captadas mesmo com a loja fechada',
      ],
    },
    {
      icon: ShieldCheck,
      title: 'API Oficial da Meta',
      badge: 'Blindagem Total',
      description:
        'Conexão direta pela Meta WhatsApp Cloud API. Sem depender de celular ligado na tomada e com zero risco de bloqueio do seu número de telefone.',
      items: [
        'Infraestrutura oficial e homologada',
        'Estabilidade sem quedas diárias de conexão',
        'Proteção jurídica e de dados da empresa',
      ],
    },
  ]

  return (
    <section
      id="solucao"
      className="py-20 md:py-28 bg-white text-slate-900 relative overflow-hidden border-t border-slate-100"
    >
      {/* Background decorations */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div
        ref={ref}
        className={`container px-4 mx-auto max-w-7xl transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <Badge className="bg-emerald-50 text-emerald-800 border-emerald-200 px-3.5 py-1 text-xs font-semibold rounded-full uppercase tracking-wider inline-flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            Método RL4 Automação
          </Badge>

          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Atendimento Humano, Velocidade de IA, Segurança de API
          </h2>

          <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
            Uma operação fluida onde a inteligência artificial cuida da velocidade e da triagem,
            enquanto sua equipe ganha tempo para fechar vendas com o carinho que seus clientes
            merecem.
          </p>
        </div>

        {/* 3 Pillars */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon
            return (
              <Card
                key={idx}
                className="bg-white border-slate-200 shadow-sm hover:shadow-md hover:border-emerald-300 transition-all duration-300 rounded-2xl flex flex-col justify-between"
              >
                <CardContent className="p-7 space-y-6 flex-1 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold border border-emerald-100">
                        <Icon className="w-6 h-6" />
                      </div>
                      <Badge
                        variant="secondary"
                        className="bg-slate-100 text-slate-700 font-semibold text-xs border border-slate-200/80"
                      >
                        {pillar.badge}
                      </Badge>
                    </div>

                    <h3 className="text-2xl font-bold text-slate-900">{pillar.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{pillar.description}</p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 space-y-2.5">
                    {pillar.items.map((item, itemIdx) => (
                      <div
                        key={itemIdx}
                        className="flex items-center gap-2.5 text-xs text-slate-700 font-medium"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Interactive flow preview highlight */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white rounded-3xl p-6 md:p-10 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-xl space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-400">
              <Layers className="w-4 h-4" />
              Sua esteira completa de ponta a ponta
            </div>
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white">
              Do "Olá" no WhatsApp até a entrega na porta de casa
            </h3>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed">
              Integração nativa com Kommo CRM, n8n, BotConversa e o painel operacional de entregas.
              Menos retrabalho manual, zero perdas no caminho.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto shrink-0">
            {onOpenAudit && (
              <Button
                size="lg"
                onClick={onOpenAudit}
                className="bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold px-6 py-5 rounded-xl shadow-md text-sm gap-2"
              >
                Solicitar Auditoria Gratuita
                <ArrowRight className="w-4 h-4" />
              </Button>
            )}
            <a href="#gestao-entregas">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-slate-600 text-white hover:bg-slate-800 hover:text-white px-6 py-5 rounded-xl text-sm gap-2 font-medium"
              >
                <Truck className="w-4 h-4 text-emerald-400" />
                Ver Gestão de Entregas
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
