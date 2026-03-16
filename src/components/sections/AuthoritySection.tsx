import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import { Instagram, PlayCircle } from 'lucide-react'

export function AuthoritySection() {
  const { ref, isVisible } = useScrollAnimation()

  const videos = [
    {
      title: 'Fluxo de Qualificação',
      image: 'https://img.usecurling.com/p/400/600?q=smartphone&color=green&dpr=2',
    },
    {
      title: 'Integração n8n + CRM',
      image: 'https://img.usecurling.com/p/400/600?q=dashboard&color=blue&dpr=2',
    },
    {
      title: 'Agente IA no WhatsApp',
      image: 'https://img.usecurling.com/p/400/600?q=chat&color=purple&dpr=2',
    },
  ]

  return (
    <section className="py-24 bg-background border-t border-border/20">
      <div
        ref={ref}
        className={`container px-4 mx-auto transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
              Fluxos Reais em <span className="text-primary">Ação</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Acompanhe nosso Instagram e veja os bastidores das integrações que estão escalando
              negócios por todo o Brasil.
            </p>
          </div>
          <a
            href="https://instagram.com/l34f4rintegracoes"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold transition-colors bg-primary/10 px-4 py-2 rounded-lg"
          >
            <Instagram className="w-5 h-5" />
            @l34f4rintegracoes
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden border border-border/50 aspect-[9/16] bg-zinc-900 cursor-pointer glow-hover block"
              onClick={() => window.open('https://instagram.com/l34f4rintegracoes', '_blank')}
            >
              <img
                src={video.image}
                alt={video.title}
                className="w-full h-full object-cover opacity-60 group-hover:scale-105 group-hover:opacity-80 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                  <PlayCircle className="w-8 h-8 ml-1" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-white font-semibold text-lg">{video.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
