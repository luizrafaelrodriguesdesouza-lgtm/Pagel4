import { useState } from 'react'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import { Button } from '@/components/ui/button'
import { ArrowRight, Loader2 } from 'lucide-react'

export function CtaSection() {
  const { ref, isVisible } = useScrollAnimation()
  const [isLoading, setIsLoading] = useState(false)

  const handleCtaClick = () => {
    setIsLoading(true)
    setTimeout(() => {
      window.open('https://wa.me/1234567890', '_blank')
      setIsLoading(false)
    }, 800)
  }

  return (
    <section className="py-24 relative overflow-hidden border-t border-border/20">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-background z-0" />

      <div
        ref={ref}
        className={`container relative z-10 px-4 mx-auto max-w-4xl text-center transition-all duration-1000 ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}
      >
        <div className="p-10 md:p-16 rounded-3xl border border-primary/20 bg-zinc-900/60 backdrop-blur-xl shadow-2xl relative overflow-hidden glow-hover">
          <div className="absolute inset-0 bg-[url('https://img.usecurling.com/p/800/400?q=noise&color=black')] opacity-20 mix-blend-overlay pointer-events-none" />

          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
            Pronto para <span className="text-primary">automatizar seu lucro?</span>
          </h2>

          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Dê o primeiro passo para elevar a maturidade operacional da sua empresa. Faça um
            diagnóstico sem compromisso com nossos especialistas.
          </p>

          <Button
            size="lg"
            className="h-14 px-8 text-lg w-full sm:w-auto glow-hover group"
            onClick={handleCtaClick}
            disabled={isLoading}
          >
            {isLoading ? <Loader2 className="mr-2 h-5 w-5 animate-spin" /> : null}
            Solicitar Diagnóstico Gratuito agora
            {!isLoading && (
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            )}
          </Button>
        </div>
      </div>
    </section>
  )
}
