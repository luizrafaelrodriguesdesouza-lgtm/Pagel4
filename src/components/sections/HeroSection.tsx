import { ArrowRight, Bot, Workflow } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-background">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('https://img.usecurling.com/p/1920/1080?q=robot%20artificial%20intelligence&color=green')] bg-cover bg-center opacity-10 mix-blend-luminosity" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
        <div className="w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

        <div className="absolute top-1/4 left-[10%] border border-primary/50 p-4 rounded-xl rotate-12 animate-float bg-background/50 backdrop-blur-sm hidden lg:block">
          <Workflow className="w-12 h-12 text-primary" />
        </div>
        <div
          className="absolute bottom-1/4 right-[10%] border border-primary/50 p-4 rounded-xl -rotate-12 animate-float bg-background/50 backdrop-blur-sm hidden lg:block"
          style={{ animationDelay: '1s' }}
        >
          <Bot className="w-12 h-12 text-primary" />
        </div>
      </div>

      <div className="container relative z-10 px-4 mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-left animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary mb-8 border border-primary/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Operação Inteligente & Automatizada
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground mb-6 leading-tight">
              Sua Empresa Transformada em uma{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-300">
                Máquina de Vendas 24/7
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed max-w-xl">
              Pare de perder leads e dinheiro com processos manuais. Eleve sua maturidade
              operacional com automações inteligentes e IA que trabalham enquanto você escala seu
              lucro.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <Button
                size="lg"
                className="h-14 px-8 text-lg glow-hover w-full sm:w-auto"
                onClick={() =>
                  window.open(
                    'https://wa.me/5521967578095?text=Ol%C3%A1,%20preciso%20saber%20mais%20sobre%20automa%C3%A7%C3%A3o',
                    '_blank',
                  )
                }
              >
                Diagnóstico Gratuito de Automação
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>

          <div
            className="relative hidden lg:block animate-fade-in-up"
            style={{ animationDelay: '0.2s' }}
          >
            <div className="relative rounded-2xl overflow-hidden border border-border/50 glow-hover group">
              <img
                src="https://img.usecurling.com/p/800/800?q=cyborg%20ai&color=green&dpr=2"
                alt="Inteligência Artificial Raphael L4"
                className="w-full h-auto object-cover opacity-90 mix-blend-lighten transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-background via-background/20 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
