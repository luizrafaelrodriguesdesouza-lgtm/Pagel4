import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  HeartPulse,
  CalendarCheck2,
  Scale,
  UtensilsCrossed,
  LineChart,
  KanbanSquare,
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from 'lucide-react'

interface PortfolioSectionProps {
  onOpenAudit?: () => void
}

export function PortfolioSection({ onOpenAudit }: PortfolioSectionProps = {}) {
  const { ref, isVisible } = useScrollAnimation()

  const projects = [
    {
      id: 'crm-saude',
      icon: HeartPulse,
      badge: 'Multi-tenant',
      title: 'CRMSAÚDE — CRM para Planos de Saúde',
      summary:
        'Plataforma completa para corretoras de planos de saúde gerenciarem múltiplos corretores, leads e comissões.',
      benefit: 'Organização de funil com distribuição automática e zero perda de cotações.',
      tags: ['Multi-tenant', 'Gestão de Corretores', 'WhatsApp Integrado'],
      accentColor: 'text-rose-600 bg-rose-50 border-rose-100',
    },
    {
      id: 'agenda-plus',
      icon: CalendarCheck2,
      badge: 'PWA SaaS',
      title: 'Agenda+ / Salão PWA SaaS',
      summary:
        'Aplicativo progressivo (PWA) de agendamento online com confirmação e lembretes automáticos no WhatsApp.',
      benefit: 'Queda de 75% no não comparecimento com lembretes inteligentes 24h e 2h antes.',
      tags: ['Agendamento Online', 'Lembretes WhatsApp', 'Self-service'],
      accentColor: 'text-violet-600 bg-violet-50 border-violet-100',
    },
    {
      id: 'advocacia',
      icon: Scale,
      badge: 'Jurídico & Financeiro',
      title: 'Gestão para Escritório de Advocacia',
      summary:
        'Controle integrado de processos, calendário de audiências, prazos fatais e faturamento de honorários.',
      benefit: 'Alertas de prazos e visão financeira clara de entradas, êxitos e contratos.',
      tags: ['Prazos & Audiências', 'Honorários', 'Gestão de Clientes'],
      accentColor: 'text-amber-600 bg-amber-50 border-amber-100',
    },
    {
      id: 'cardapio-digital',
      icon: UtensilsCrossed,
      badge: 'Delivery Direto',
      title: 'Cardápio Digital para Pedidos Online',
      summary:
        'Menu interativo e veloz para restaurantes, hamburguerias e delivery receberem pedidos sem taxa de marketplace.',
      benefit: 'Pedidos caem formatados direto no WhatsApp e na impressora da cozinha.',
      tags: ['Sem taxas abusivas', 'Checkout rápido', 'Integração WhatsApp'],
      accentColor: 'text-orange-600 bg-orange-50 border-orange-100',
    },
    {
      id: 'controle-vendas',
      icon: LineChart,
      badge: 'Comercial & BI',
      title: 'Controle de Vendas & Comissões',
      summary:
        'Painel dinâmico com métricas diárias, ticket médio, metas por vendedor e cálculo automático de comissionamento.',
      benefit: 'Previsibilidade de faturamento e fim das planilhas manuais desencontradas.',
      tags: ['Metas em tempo real', 'Ticket médio', 'Cálculo de comissão'],
      accentColor: 'text-blue-600 bg-blue-50 border-blue-100',
    },
    {
      id: 'gestao-entregas-kanban',
      icon: KanbanSquare,
      badge: 'Logística Local',
      title: 'Painel de Gestão de Entregas em Kanban',
      summary:
        'Fluxo visual para despachar pedidos do balcão até a porta do cliente, com avisos em tempo real ao consumidor.',
      benefit: 'Redução drástica de chamados cobrando a entrega e maior rota por motoboy.',
      tags: ['Tempo real', 'Visão do motoboy', 'Avisos no WhatsApp'],
      accentColor: 'text-emerald-600 bg-emerald-50 border-emerald-100',
    },
  ]

  return (
    <section
      id="portfolio"
      className="py-20 md:py-28 bg-slate-50/70 text-slate-900 border-t border-slate-200/80 relative overflow-hidden"
    >
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div
        ref={ref}
        className={`container px-4 mx-auto max-w-7xl transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <Badge className="bg-emerald-100 text-emerald-800 border-emerald-200 px-3.5 py-1 text-xs font-semibold rounded-full uppercase tracking-wider inline-flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            Amplitude & Experiência Comprovada
          </Badge>

          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Soluções que já entregamos
          </h2>

          <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
            A automação de WhatsApp para farmácias é nossa especialidade de ponta, mas nossa
            engenharia já resolveu desafios operacionais em múltiplos segmentos.
          </p>
        </div>

        {/* Grid de Projetos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {projects.map((project) => {
            const Icon = project.icon
            return (
              <Card
                key={project.id}
                className="bg-white border-slate-200/80 hover:border-emerald-300 shadow-xs hover:shadow-lg transition-all duration-300 rounded-2xl flex flex-col justify-between group"
              >
                <CardContent className="p-6 md:p-7 space-y-5 flex-1 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold border transition-transform group-hover:scale-105 ${project.accentColor}`}
                      >
                        <Icon className="w-6 h-6" />
                      </div>
                      <Badge
                        variant="secondary"
                        className="bg-slate-100 text-slate-700 font-semibold text-xs border border-slate-200/80"
                      >
                        {project.badge}
                      </Badge>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-slate-600 text-sm mt-2 leading-relaxed">
                        {project.summary}
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 space-y-3">
                    <div className="bg-emerald-50/70 border border-emerald-100/80 rounded-xl p-3 text-xs text-emerald-900 font-medium flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{project.benefit}</span>
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[11px] bg-slate-100 text-slate-600 px-2.5 py-1 rounded-md font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Banner de Consulta para Novos Projetos */}
        <div className="bg-white border border-slate-200/90 rounded-3xl p-6 md:p-8 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg md:text-xl font-bold text-slate-900">
              Precisa de um sistema sob medida para seu modelo de negócio?
            </h4>
            <p className="text-slate-600 text-sm">
              Desenvolvemos painéis, fluxos de IA e integrações com foco em economia de tempo e
              aumento real de receita.
            </p>
          </div>

          {onOpenAudit && (
            <Button
              onClick={onOpenAudit}
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-5 rounded-xl shadow-md text-sm gap-2 shrink-0 w-full sm:w-auto"
            >
              Falar sobre meu projeto
              <ArrowRight className="w-4 h-4" />
            </Button>
          )}
        </div>
      </div>
    </section>
  )
}
