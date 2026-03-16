import { ArrowRight, Bot, Workflow } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-20 pointer-events-none">
        <div className="w-[800px] h-[800px] bg-primary/30 rounded-full blur-[120px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute top-1/4 left-1/4 border border-primary/50 p-4 rounded-xl rotate-12 animate-float">
          <Workflow className="w-12 h-12 text-primary" />
        </div>
        <div
          className="absolute bottom-1/4 right-1/4 border border-primary/50 p-4 rounded-xl -rotate-12 animate-float"
          style={{ animationDelay: '1s' }}
        >
          <Bot className="w-12 h-12 text-primary" />
        </div>
      </div>

      <div className="container relative z-10 px-4 mx-auto text-center animate-fade-in-up">
        <div className="inline-flex items-center gap-2 px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary mb-8 border border-primary/20">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          Operação Inteligente & Automatizada
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground max-w-4xl mx-auto mb-6 leading-tight">
          Sua Empresa Transformada em uma{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-300">
            Máquina de Vendas 24/7
          </span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          Pare de perder leads e dinheiro com processos manuais. Eleve sua maturidade operacional
          com automações inteligentes e IA que trabalham enquanto você escala seu lucro.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="h-14 px-8 text-lg glow-hover w-full sm:w-auto"
            onClick={() => window.open('https://wa.me/1234567890', '_blank')}
          >
            Quero Minha Máquina de Vendas
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
