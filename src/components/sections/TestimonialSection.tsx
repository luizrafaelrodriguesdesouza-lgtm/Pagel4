import { useEffect, useState } from 'react'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import { Card, CardContent } from '@/components/ui/card'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import { Skeleton } from '@/components/ui/skeleton'
import { Quote, AlertCircle } from 'lucide-react'

const mockTestimonials = [
  {
    id: 1,
    name: 'Ana Silva',
    role: 'Gerente de Vendas, Clínica Estética Bella',
    quote:
      'A automação do Raphael L4 reduziu nosso tempo de resposta em 80%. Agora fechamos mais vendas com menos esforço.',
    avatar: 'https://img.usecurling.com/ppl/thumbnail?gender=female&seed=1',
  },
  {
    id: 2,
    name: 'Carlos Oliveira',
    role: 'Diretor Comercial, Salão de Beleza Premium',
    quote:
      'Implementamos em 2 semanas e já vimos ROI. Recomendo para qualquer negócio que quer escalar.',
    avatar: 'https://img.usecurling.com/ppl/thumbnail?gender=male&seed=2',
  },
  {
    id: 3,
    name: 'Mariana Santos',
    role: 'CEO, Consultoria Empresarial',
    quote:
      'Profissional, eficiente e com suporte excelente. Melhor investimento que fizemos em automação.',
    avatar: 'https://img.usecurling.com/ppl/thumbnail?gender=female&seed=3',
  },
]

export function TestimonialSection() {
  const { ref, isVisible } = useScrollAnimation()
  const [status, setStatus] = useState<'loading' | 'success' | 'error' | 'empty'>('loading')
  const [data, setData] = useState<typeof mockTestimonials>([])

  useEffect(() => {
    const timer = setTimeout(() => {
      setData(mockTestimonials)
      setStatus('success')
    }, 1500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="py-24 bg-white text-zinc-950 overflow-hidden">
      <div
        ref={ref}
        className={`container px-4 mx-auto transition-all duration-1000 delay-100 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-zinc-900">
            Empresas que Confiam na Raphael L4
          </h2>
          <p className="text-lg text-zinc-600">
            Transformando operações de negócios em todo o Brasil
          </p>
        </div>

        {status === 'loading' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="h-[280px] bg-white border-zinc-200">
                <CardContent className="p-6 flex flex-col h-full gap-4">
                  <Skeleton className="w-8 h-8 rounded-full bg-zinc-100" />
                  <div className="space-y-2 flex-1 mt-4">
                    <Skeleton className="h-4 w-full bg-zinc-100" />
                    <Skeleton className="h-4 w-5/6 bg-zinc-100" />
                    <Skeleton className="h-4 w-4/6 bg-zinc-100" />
                  </div>
                  <div className="flex items-center gap-4 mt-auto">
                    <Skeleton className="w-12 h-12 rounded-full bg-zinc-100" />
                    <div className="space-y-2">
                      <Skeleton className="h-4 w-24 bg-zinc-100" />
                      <Skeleton className="h-3 w-32 bg-zinc-100" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {status === 'error' && (
          <div className="flex flex-col items-center justify-center py-12 text-zinc-500">
            <AlertCircle className="w-12 h-12 text-red-500 mb-4" />
            <p>Ocorreu um erro ao carregar os depoimentos.</p>
          </div>
        )}

        {status === 'empty' && (
          <div className="flex flex-col items-center justify-center py-12 text-zinc-500">
            <p>Ainda não há depoimentos disponíveis.</p>
          </div>
        )}

        {status === 'success' && data.length > 0 && (
          <>
            <div className="md:hidden w-full">
              <Carousel className="w-full" opts={{ loop: true }}>
                <CarouselContent>
                  {data.map((item) => (
                    <CarouselItem key={item.id} className="basis-full">
                      <Card className="h-full bg-white shadow-sm border-zinc-200 mx-1">
                        <CardContent className="p-6 flex flex-col h-full justify-between gap-6">
                          <Quote className="w-8 h-8 text-primary/30" />
                          <p className="text-zinc-600 text-lg leading-relaxed flex-1">
                            "{item.quote}"
                          </p>
                          <div className="flex items-center gap-4 mt-auto">
                            <img
                              src={item.avatar}
                              alt={item.name}
                              className="w-12 h-12 rounded-full object-cover"
                            />
                            <div>
                              <h4 className="font-semibold text-zinc-900">{item.name}</h4>
                              <p className="text-sm text-zinc-500">{item.role}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>

            <div className="hidden md:grid md:grid-cols-3 gap-8">
              {data.map((item) => (
                <Card
                  key={item.id}
                  className="h-full bg-white shadow-sm hover:shadow-md transition-all duration-300 border-zinc-200 hover:-translate-y-1"
                >
                  <CardContent className="p-6 flex flex-col h-full justify-between gap-6">
                    <Quote className="w-8 h-8 text-primary/30" />
                    <p className="text-zinc-600 text-lg leading-relaxed flex-1">"{item.quote}"</p>
                    <div className="flex items-center gap-4 mt-auto">
                      <img
                        src={item.avatar}
                        alt={item.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <h4 className="font-semibold text-zinc-900">{item.name}</h4>
                        <p className="text-sm text-zinc-500 line-clamp-1" title={item.role}>
                          {item.role}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  )
}
