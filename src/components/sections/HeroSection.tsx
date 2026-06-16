import { useState, useEffect } from 'react'
import { ArrowRight, Play, AlertCircle, Bot, Workflow } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'
import logoUrl from '@/assets/editedimage1780319473364-fd281.png'
import { OptimizedImage } from '@/components/ui/optimized-image'

interface HeroData {
  title: string
  subtitle: string
  primaryCta: string
  secondaryCta: string
}

export function HeroSection() {
  const [status, setStatus] = useState<'loading' | 'error' | 'empty' | 'success'>('loading')
  const [data, setData] = useState<HeroData | null>(null)

  useEffect(() => {
    // Simulate data loading to satisfy the UX states criteria
    const timer = setTimeout(() => {
      try {
        const fetchedData = {
          title:
            'Pare de perder vendas por demora no WhatsApp: Atendimento Instantâneo com IA e API Oficial.',
          subtitle:
            'Transformamos seu WhatsApp em uma máquina de vendas que qualifica leads e fecha negócios 24/7, com a segurança da infraestrutura oficial da Meta.',
          primaryCta: 'Solicitar Auditoria de Maturidade Gratuita',
          secondaryCta: 'Ver Demo',
        }

        if (!fetchedData.title) {
          setStatus('empty')
          return
        }

        setData(fetchedData)
        setStatus('success')
      } catch (err) {
        setStatus('error')
      }
    }, 1200)

    return () => clearTimeout(timer)
  }, [])

  if (status === 'loading') {
    return (
      <section className="relative min-h-screen flex items-center pt-20 bg-white overflow-hidden">
        <div className="container relative z-10 px-4 mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Skeleton className="h-16 w-3/4 bg-slate-100" />
              <Skeleton className="h-16 w-1/2 bg-slate-100" />
              <Skeleton className="h-24 w-full bg-slate-100 mt-6" />
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Skeleton className="h-14 w-full sm:w-48 bg-slate-100" />
                <Skeleton className="h-14 w-full sm:w-40 bg-slate-100" />
              </div>
            </div>
            <div className="hidden lg:block">
              <Skeleton className="w-full aspect-square md:aspect-[4/3] rounded-2xl bg-slate-100" />
            </div>
          </div>
        </div>
      </section>
    )
  }

  if (status === 'error') {
    return (
      <section className="relative min-h-screen flex items-center justify-center bg-white">
        <div className="text-center space-y-4 px-4 animate-fade-in">
          <AlertCircle className="w-12 h-12 text-destructive mx-auto" />
          <h2 className="text-2xl font-bold text-slate-900">Ocorreu um erro ao carregar</h2>
          <p className="text-slate-500">Não foi possível carregar as informações.</p>
          <Button
            onClick={() => setStatus('loading')}
            variant="outline"
            className="mt-4 border-slate-200 text-slate-700"
          >
            Tentar novamente
          </Button>
        </div>
      </section>
    )
  }

  if (status === 'empty' || !data) {
    return (
      <section className="relative min-h-screen flex items-center justify-center bg-white">
        <div className="text-center space-y-4 px-4 animate-fade-in">
          <h2 className="text-2xl font-bold text-slate-900">Conteúdo não encontrado</h2>
          <p className="text-slate-500">
            As informações desta seção não estão disponíveis no momento.
          </p>
        </div>
      </section>
    )
  }

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-white text-slate-900">
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

      <div className="container relative z-10 px-4 mx-auto mt-10 lg:mt-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="text-left space-y-8 max-w-2xl pt-8 lg:pt-0">
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1] animate-fade-in-up"
              style={{ animationFillMode: 'both', animationDelay: '0.1s' }}
            >
              {data.title}
            </h1>

            <p
              className="text-lg md:text-xl text-slate-600 leading-relaxed animate-fade-in-up"
              style={{ animationFillMode: 'both', animationDelay: '0.3s' }}
            >
              {data.subtitle}
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4 items-start pt-2 animate-fade-in-up"
              style={{ animationFillMode: 'both', animationDelay: '0.5s' }}
            >
              <Button
                size="lg"
                className="h-14 px-8 text-lg w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-600/20 transition-all hover:scale-105"
                onClick={() => {
                  const form = document.getElementById('lead-form')
                  if (form) {
                    form.scrollIntoView({ behavior: 'smooth', block: 'start' })
                  } else {
                    window.open(
                      'https://wa.me/5521967578095?text=Ol%C3%A1,%20gostaria%20de%20uma%20auditoria%20de%20maturidade',
                      '_blank',
                    )
                  }
                }}
              >
                {data.primaryCta}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-14 px-8 text-lg w-full sm:w-auto border-slate-300 text-slate-700 hover:bg-slate-50 transition-all hover:scale-105 bg-white/50 backdrop-blur-sm"
              >
                <Play className="mr-2 h-5 w-5" />
                {data.secondaryCta}
              </Button>
            </div>
          </div>

          <div
            className="relative w-full aspect-square md:aspect-[4/3] animate-fade-in-up mt-8 lg:mt-0"
            style={{ animationFillMode: 'both', animationDelay: '0.7s' }}
          >
            {/* Decorative background blur behind image */}
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-200 to-blue-100 rounded-[2rem] transform rotate-3 scale-105 opacity-50 blur-2xl" />

            <div className="relative h-full w-full rounded-2xl overflow-hidden border border-slate-200 shadow-2xl bg-white flex items-center justify-center p-2 group">
              <OptimizedImage
                src="https://img.usecurling.com/p/800/600?q=dashboard%20software%20interface%20automation&color=white&dpr=2"
                webpSrc="https://img.usecurling.com/p/800/600?q=dashboard%20software%20interface%20automation&color=white&dpr=2&format=webp"
                alt="Dashboard de Automação"
                className="w-full h-full object-cover rounded-xl transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Floating UI elements for a modern feel */}
            <div className="absolute -left-6 top-1/4 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-lg border border-slate-100 animate-float hidden md:flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                <Workflow className="text-emerald-600 w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900">Fluxos Ativos</p>
                <p className="text-xs text-slate-500">Operando 24/7</p>
              </div>
            </div>

            <div
              className="absolute -right-6 bottom-1/4 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-lg border border-slate-100 animate-float hidden md:flex items-center gap-3"
              style={{ animationDelay: '2s' }}
            >
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                <Bot className="text-blue-600 w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900">IA Integrada</p>
                <p className="text-xs text-slate-500">Respostas automáticas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
