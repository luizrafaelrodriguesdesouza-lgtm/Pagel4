import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import { AlertTriangle, ShieldCheck, Lock, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function SecurityAntiBanSection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section
      id="seguranca"
      className="py-24 bg-zinc-950 border-t border-border/20 relative overflow-hidden"
    >
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-[100px] -translate-y-1/2 -z-10" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />

      <div
        ref={ref}
        className={`container px-4 mx-auto transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative rounded-3xl overflow-hidden border border-emerald-500/20 glow-hover aspect-[4/5] max-w-md mx-auto w-full group shadow-[0_0_40px_rgba(16,185,129,0.1)]">
            <img
              src="https://img.usecurling.com/p/800/1000?q=hacked%20smartphone%20cyber%20security&color=green&dpr=2"
              alt="Security Warning Smartphone"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 bg-zinc-900/80 border border-red-500/30 backdrop-blur-md p-4 rounded-xl flex items-start gap-3 shadow-lg">
              <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" />
              <p className="text-sm font-medium text-slate-200">
                <span className="text-red-400 font-bold block mb-1">ALERTA DE RISCO:</span>
                Ferramentas não oficiais e automações "cinzas" levam ao bloqueio permanente pela
                META.
              </p>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 text-sm font-medium rounded-full bg-red-500/10 text-red-400 mb-6 border border-red-500/20">
              <ShieldCheck className="w-4 h-4" />
              Segurança e Anti-Ban
            </div>

            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 text-white">
              Proteja seu maior ativo: <br className="hidden md:block" />O fim do medo de{' '}
              <span className="text-red-400">banimentos no WhatsApp.</span>
            </h2>

            <p className="text-muted-foreground text-lg mb-8 font-medium">
              Não corra o risco de perder seu número. Ferramentas não oficiais e automações 'cinzas'
              levam ao bloqueio permanente pela META. Conecte-se com a segurança da API Oficial.
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-lg bg-zinc-900 flex-shrink-0 flex items-center justify-center text-red-400 border border-red-500/20">
                  <AlertTriangle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white">O Custo do Bloqueio</h3>
                  <p className="text-muted-foreground">
                    Perder seu número significa perder todo o histórico, lista de contatos e
                    confiança dos clientes. Um prejuízo incalculável para o seu negócio.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-lg bg-emerald-500/10 flex-shrink-0 flex items-center justify-center text-emerald-400 border border-emerald-500/20">
                  <Lock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    Blindagem com a API Oficial
                  </h3>
                  <p className="text-muted-foreground">
                    Operamos 100% dentro das regras da Meta. Sua operação ganha estabilidade, sem
                    quedas e sem riscos de punições ou desconexões por QR Code.
                  </p>
                </div>
              </div>
            </div>

            <Button
              size="lg"
              className="h-14 px-8 text-lg w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white shadow-[0_0_20px_rgba(5,150,105,0.3)] hover:shadow-[0_0_30px_rgba(5,150,105,0.5)] transition-all group"
              onClick={() =>
                window.open(
                  'https://n8n-n8n.sd3ni9.easypanel.host/form/93cbdace-782c-4b58-8d35-6e77ebc589fa',
                  '_blank',
                )
              }
            >
              Garantir Segurança e Solicitar Orçamento
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
