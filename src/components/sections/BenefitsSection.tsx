import { useEffect, useState } from 'react'
import { Clock, Bot, ShieldCheck, Activity, AlertCircle } from 'lucide-react'
import { Skeleton } from '@/components/ui/skeleton'
import { Button } from '@/components/ui/button'
import { useIntersectionObserver } from '@/hooks/use-intersection-observer'
import { cn } from '@/lib/utils'

type Benefit = {
  id: string
  title: string
  description: string
  icon: React.ElementType
}

const BENEFITS: Benefit[] = [
  {
    id: '1',
    title: 'Atendimento Instantâneo',
    description: 'Respostas imediatas no WhatsApp e Instagram 24/7',
    icon: Clock,
  },
  {
    id: '2',
    title: 'Qualificação Automática',
    description: 'Agentes de IA conversam, entendem necessidade e classificam leads',
    icon: Bot,
  },
  {
    id: '3',
    title: 'Segurança Total',
    description: 'Proteja dados dos clientes com criptografia de ponta a ponta',
    icon: ShieldCheck,
  },
  {
    id: '4',
    title: 'Estabilidade Máxima',
    description: 'Sem quedas, sem desconexões. Operação fluida em servidores robustos',
    icon: Activity,
  },
]

export function BenefitsSection() {
  const { ref, isIntersecting } = useIntersectionObserver()
  const [status, setStatus] = useState<'loading' | 'success' | 'error' | 'empty'>('loading')

  const loadData = () => {
    setStatus('loading')
    setTimeout(() => {
      setStatus('success')
    }, 1000)
  }

  useEffect(() => {
    if (isIntersecting && status === 'loading') {
      loadData()
    }
  }, [isIntersecting, status])

  return (
    <section ref={ref} className="py-24 bg-white w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={cn('text-center mb-16', isIntersecting && 'animate-fade-in-up')}>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Vantagens Competitivas
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Benefícios exclusivos projetados para escalar suas vendas e elevar a maturidade
            operacional do seu negócio.
          </p>
        </div>

        {isIntersecting && (
          <div className="animate-fade-in-up">
            {status === 'loading' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="p-8 rounded-2xl border border-slate-100 shadow-sm">
                    <Skeleton className="w-12 h-12 rounded-xl mb-6" />
                    <Skeleton className="h-6 w-3/4 mb-3" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-5/6 mt-2" />
                  </div>
                ))}
              </div>
            )}

            {status === 'error' && (
              <div className="flex flex-col items-center justify-center p-12 text-center bg-slate-50 rounded-2xl border border-slate-100">
                <AlertCircle className="w-12 h-12 text-destructive mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-slate-900">
                  Falha ao carregar dados
                </h3>
                <p className="text-slate-600 mb-6 max-w-md">
                  Ocorreu um erro inesperado. Por favor, tente novamente.
                </p>
                <Button onClick={loadData} variant="outline">
                  Tentar novamente
                </Button>
              </div>
            )}

            {status === 'empty' && (
              <div className="text-center p-12 bg-slate-50 rounded-2xl border border-slate-100">
                <p className="text-slate-600">Nenhum benefício encontrado no momento.</p>
              </div>
            )}

            {status === 'success' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                {BENEFITS.map((benefit) => (
                  <div
                    key={benefit.id}
                    className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 hover:bg-slate-50/80 transition-all duration-300 border border-slate-100 flex flex-col items-start"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6 transition-colors group-hover:bg-primary/20">
                      <benefit.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
