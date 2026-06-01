import { useScrollAnimation } from '@/hooks/use-scroll-animation'

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
        <div className="flex flex-wrap justify-center gap-6 md:gap-12 lg:gap-14 items-center">
          <div className="flex items-center gap-3 grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100 group">
            <div className="bg-primary/20 p-2 rounded-lg flex items-center justify-center">
              <img
                src="https://img.usecurling.com/i?q=conversation&shape=lineal-color&color=green"
                alt="BotConversa Logo"
                loading="lazy"
                className="w-8 h-8 object-contain"
              />
            </div>
            <span className="text-xl md:text-2xl font-bold tracking-tight text-foreground">
              BotConversa
            </span>
          </div>
          <div className="flex items-center gap-3 grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100 group">
            <div className="bg-blue-500/20 p-2 rounded-lg flex items-center justify-center">
              <img
                src="https://img.usecurling.com/i?q=crm&shape=lineal-color&color=blue"
                alt="Kommo Logo"
                loading="lazy"
                className="w-8 h-8 object-contain"
              />
            </div>
            <span className="text-xl md:text-2xl font-bold tracking-tight text-foreground">
              Kommo
            </span>
          </div>
          <div className="flex items-center gap-3 grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100 group">
            <div className="bg-orange-500/20 p-2 rounded-lg flex items-center justify-center">
              <img
                src="https://img.usecurling.com/i?q=workflow&shape=lineal-color&color=orange"
                alt="n8n Logo"
                loading="lazy"
                className="w-8 h-8 object-contain"
              />
            </div>
            <span className="text-xl md:text-2xl font-bold tracking-tight text-foreground">
              n8n
            </span>
          </div>
          <div className="flex items-center gap-3 grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100 group">
            <div className="bg-rose-500/20 p-2 rounded-lg flex items-center justify-center">
              <img
                src="https://img.usecurling.com/i?q=chat&shape=lineal-color&color=rose"
                alt="Nicochat Logo"
                loading="lazy"
                className="w-8 h-8 object-contain"
              />
            </div>
            <span className="text-xl md:text-2xl font-bold tracking-tight text-foreground">
              Nicochat
            </span>
          </div>
          <div className="flex items-center gap-3 grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100 group">
            <div className="bg-violet-500/20 p-2 rounded-lg flex items-center justify-center">
              <img
                src="https://img.usecurling.com/i?q=robot&shape=lineal-color&color=violet"
                alt="L4chat Logo"
                loading="lazy"
                className="w-8 h-8 object-contain"
              />
            </div>
            <span className="text-xl md:text-2xl font-bold tracking-tight text-foreground">
              L4chat
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
