import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import { ShieldCheck, Server, Ban, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function ApiOficialSection() {
  const { ref, isVisible } = useScrollAnimation()

  const features = [
    {
      icon: ShieldCheck,
      title: 'Segurança Total',
      description:
        'Proteja os dados dos seus clientes com criptografia de ponta a ponta e conformidade com as diretrizes do WhatsApp.',
    },
    {
      icon: Server,
      title: 'Estabilidade Máxima',
      description:
        'Sem quedas, sem desconexões de QR Code. Sua operação roda de forma fluida em servidores robustos.',
    },
    {
      icon: Ban,
      title: 'Fim dos Bloqueios',
      description:
        'Opere dentro das regras. Com a API Oficial, o risco de ter seu número banido por spam cai drasticamente.',
    },
  ]

  return (
    <section
      id="api-oficial"
      className="py-24 bg-zinc-950 border-t border-border/20 relative overflow-hidden"
    >
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-[100px] -translate-y-1/2 -z-10" />

      <div
        ref={ref}
        className={`container px-4 mx-auto transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 text-sm font-medium rounded-full bg-emerald-500/10 text-emerald-400 mb-6 border border-emerald-500/20">
              <ShieldCheck className="w-4 h-4" />
              WhatsApp Business API
            </div>

            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6">
              Escalabilidade com a <span className="text-emerald-400">API Oficial</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-10">
              Chega de improvisos. Profissionalize seu atendimento com a infraestrutura oficial da
              Meta, garantindo segurança e escalabilidade para sua máquina de vendas.
            </p>

            <div className="space-y-6 mb-10">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-lg bg-emerald-500/10 flex-shrink-0 flex items-center justify-center text-emerald-400 border border-emerald-500/20">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button
              size="lg"
              className="h-14 px-8 text-lg w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white shadow-[0_0_20px_rgba(5,150,105,0.3)] hover:shadow-[0_0_30px_rgba(5,150,105,0.5)] transition-all"
              onClick={() =>
                window.open(
                  'https://wa.me/5521967578095?text=Ol%C3%A1,%20preciso%20de%20API%20oficial',
                  '_blank',
                )
              }
            >
              Quero saber mais sobre a API Oficial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          <div className="relative rounded-2xl overflow-hidden border border-border/50 glow-hover aspect-square max-w-md mx-auto w-full group">
            <img
              src="https://img.usecurling.com/p/600/600?q=robot%20server&color=green&dpr=2"
              alt="Servidor e Robô da API Oficial"
              className="w-full h-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}
