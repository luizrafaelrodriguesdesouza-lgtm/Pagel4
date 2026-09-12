import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Clock,
  ShieldCheck,
  CheckCircle2,
  TrendingDown,
  Quote,
  ArrowRight,
  Headphones,
} from 'lucide-react'
import { OptimizedImage } from '@/components/ui/optimized-image'

interface SocialProofSectionProps {
  onOpenAudit?: () => void
}

export function SocialProofSection({ onOpenAudit }: SocialProofSectionProps) {
  const { ref, isVisible } = useScrollAnimation()

  const realisticMetrics = [
    {
      value: '30s',
      label: 'Tempo médio de resposta',
      subtext: 'Antes: 15 a 20 min no pico',
      icon: Clock,
    },
    {
      value: '24/7',
      label: 'Atendimento sem pausas',
      subtext: 'Plantão noturno e feriados',
      icon: Headphones,
    },
    {
      value: '100%',
      label: 'API Oficial Meta',
      subtext: 'Zero banimentos ou quedas',
      icon: ShieldCheck,
    },
  ]

  const partners = [
    {
      name: 'Kommo',
      logo: 'https://img.usecurling.com/i?q=crm&shape=lineal-color&color=blue',
      role: 'CRM de Vendas Oficial',
    },
    {
      name: 'n8n',
      logo: 'https://img.usecurling.com/i?q=workflow&shape=lineal-color&color=orange',
      role: 'Orquestração & Automação',
    },
    {
      name: 'BotConversa',
      logo: 'https://img.usecurling.com/i?q=conversation&shape=lineal-color&color=green',
      role: 'Fluxos de Conversação',
    },
    {
      name: 'Nicochat',
      logo: 'https://img.usecurling.com/i?q=chat&shape=lineal-color&color=rose',
      role: 'Plataforma Omnichannel',
    },
    {
      name: 'L4-chat',
      logo: 'https://img.usecurling.com/i?q=robot&shape=lineal-color&color=violet',
      role: 'IA Conversacional',
    },
  ]

  const testimonials = [
    {
      name: 'Dr. Roberto Mendes',
      role: 'Farmacêutico e Proprietário • Sorocaba/SP',
      quote:
        'O maior ganho foi a tranquilidade. Antes os balconistas ficavam loucos entre atender o balcão e responder o WhatsApp. Agora o cliente recebe o retorno em menos de 1 minuto e a venda já chega qualificada para separação.',
      avatar: 'https://img.usecurling.com/ppl/thumbnail?gender=male&seed=12',
    },
    {
      name: 'Camila Fernandes',
      role: 'Gerente Operacional • Farmácia Popular',
      quote:
        'A notificação para o cliente avisando que o motoboy saiu diminuiu em 90% as ligações de cobrança. O cliente elogia o profissionalismo e volta a comprar toda semana.',
      avatar: 'https://img.usecurling.com/ppl/thumbnail?gender=female&seed=15',
    },
  ]

  return (
    <section
      id="prova-social"
      className="py-20 md:py-28 bg-white text-slate-900 border-t border-slate-100 relative overflow-hidden"
    >
      <div
        ref={ref}
        className={`container px-4 mx-auto max-w-7xl transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <Badge className="bg-emerald-50 text-emerald-800 border-emerald-200 px-3.5 py-1 text-xs font-semibold rounded-full uppercase tracking-wider">
            Resultados Reais & Concretos
          </Badge>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Menos promessas mirabolantes, mais operação que funciona
          </h2>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
            Métricas honestas de farmácias e comércios locais que trocaram a sobrecarga manual por
            processos claros.
          </p>
        </div>

        {/* Highlighted Real Case Study */}
        <div className="mb-16 bg-gradient-to-br from-emerald-50/70 via-white to-slate-50 border border-emerald-200/80 rounded-3xl p-6 md:p-10 shadow-sm">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-bold uppercase tracking-wider bg-emerald-600 text-white rounded-full">
                <span>Caso Concreto em Destaque</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                Farmácia em Sorocaba reduziu o tempo de resposta de 15 minutos para 30 segundos
              </h3>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                Com duas unidades físicas e forte demanda de tele-entrega, a farmácia perdia pedidos
                em horários de pico porque os atendentes do balcão não davam conta de conferir
                mensagens a tempo. Com o fluxo RL4 integrado à API Oficial da Meta, a triagem passou
                a ser instantânea.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-xs">
                  <div className="flex items-center gap-1.5 text-emerald-700 text-xs font-semibold">
                    <TrendingDown className="w-3.5 h-3.5" />
                    Tempo Resposta
                  </div>
                  <p className="text-xl font-extrabold text-slate-900 mt-1">15m → 30s</p>
                  <p className="text-[11px] text-slate-500">Agilidade no primeiro contato</p>
                </div>

                <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-xs">
                  <div className="flex items-center gap-1.5 text-emerald-700 text-xs font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Retenção de Venda
                  </div>
                  <p className="text-xl font-extrabold text-slate-900 mt-1">+38%</p>
                  <p className="text-[11px] text-slate-500">Pedidos concluídos no WhatsApp</p>
                </div>

                <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-xs col-span-2 sm:col-span-1">
                  <div className="flex items-center gap-1.5 text-emerald-700 text-xs font-semibold">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Segurança
                  </div>
                  <p className="text-xl font-extrabold text-slate-900 mt-1">0 bloqueios</p>
                  <p className="text-[11px] text-slate-500">Linha estável e homologada</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <Quote className="w-8 h-8 text-emerald-500/40" />
              <p className="text-sm md:text-base text-slate-700 italic leading-relaxed">
                "Não é mágica nem promessa de ficar milionário: é organização básica de atendimento
                que qualquer farmácia séria precisa ter para não perder dinheiro no dia a dia."
              </p>
              <div className="flex items-center gap-3 pt-2 border-t border-slate-100">
                <OptimizedImage
                  src="https://img.usecurling.com/ppl/thumbnail?gender=male&seed=33"
                  alt="Gestor Responsável"
                  className="w-11 h-11 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Dr. Marcos Vinicius</h4>
                  <p className="text-xs text-slate-500">Farmácia DrogaMais • Sorocaba/SP</p>
                </div>
              </div>

              {onOpenAudit && (
                <Button
                  onClick={onOpenAudit}
                  size="sm"
                  className="w-full mt-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs py-5 rounded-xl gap-2 shadow-xs"
                >
                  Quero resultados semelhantes na minha região
                  <ArrowRight className="w-3.5 h-3.5" />
                </Button>
              )}
            </div>
          </div>
        </div>

        {/* Modest & Realistic Metrics Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {realisticMetrics.map((metric, i) => {
            const Icon = metric.icon
            return (
              <div
                key={i}
                className="bg-slate-50/70 border border-slate-200/90 rounded-2xl p-6 text-center hover:bg-white hover:shadow-sm hover:border-emerald-300 transition-all flex flex-col items-center justify-center space-y-2"
              >
                <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mb-1">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
                  {metric.value}
                </span>
                <span className="text-sm font-bold text-slate-800">{metric.label}</span>
                <span className="text-xs text-slate-500">{metric.subtext}</span>
              </div>
            )
          })}
        </div>

        {/* Real Testimonial Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {testimonials.map((t, idx) => (
            <Card
              key={idx}
              className="bg-white border-slate-200 shadow-xs hover:shadow-md transition-shadow rounded-2xl"
            >
              <CardContent className="p-6 md:p-8 flex flex-col justify-between h-full space-y-6">
                <Quote className="w-8 h-8 text-emerald-500/30" />
                <p className="text-slate-700 text-sm md:text-base leading-relaxed italic">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                  <OptimizedImage
                    src={t.avatar}
                    alt={t.name}
                    className="w-11 h-11 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-sm text-slate-900">{t.name}</h4>
                    <p className="text-xs text-slate-500">{t.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Partners and Stack Section (Clean light style) */}
        <div className="bg-slate-50 rounded-2xl border border-slate-200/80 p-8 text-center space-y-6">
          <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">
            Tecnologias e Ecossistema Integrado Oficial
          </p>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
            {partners.map((partner, pIdx) => (
              <div
                key={pIdx}
                className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white border border-slate-200/70 shadow-2xs hover:border-emerald-300 transition-colors"
              >
                <img
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  className="w-6 h-6 object-contain"
                  loading="lazy"
                />
                <div className="text-left">
                  <span className="text-sm font-bold text-slate-900 block">{partner.name}</span>
                  <span className="text-[10px] text-slate-500 block -mt-0.5">{partner.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
