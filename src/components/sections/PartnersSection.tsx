import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import { Handshake } from 'lucide-react'

export function PartnersSection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className="py-12 border-y border-border/20 bg-zinc-950/50">
      <div
        ref={ref}
        className={`container px-4 mx-auto text-center transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        <p className="text-sm font-medium text-muted-foreground mb-8 uppercase tracking-wider">
          Parceiros Oficiais
        </p>
        <div className="flex flex-wrap justify-center gap-10 md:gap-20 items-center">
          <div className="flex items-center gap-3 grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100">
            <div className="bg-primary/20 p-2 rounded-lg">
              <Handshake className="w-8 h-8 text-primary" />
            </div>
            <span className="text-2xl font-bold tracking-tight text-foreground">BotConversa</span>
          </div>
          <div className="flex items-center gap-3 grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100">
            <div className="bg-blue-500/20 p-2 rounded-lg">
              <Handshake className="w-8 h-8 text-blue-500" />
            </div>
            <span className="text-2xl font-bold tracking-tight text-foreground">Kommo</span>
          </div>
        </div>
      </div>
    </section>
  )
}
