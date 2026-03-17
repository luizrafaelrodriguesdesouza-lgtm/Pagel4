import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import { MessageSquare, BrainCircuit, Blocks } from 'lucide-react'

export function SolutionSection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="solucao" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -left-40 bottom-0 w-96 h-96 bg-[url('https://img.usecurling.com/p/400/400?q=robot%20arm&color=green')] opacity-10 bg-contain bg-no-repeat mix-blend-screen pointer-events-none" />

      <div
        ref={ref}
        className={`container px-4 mx-auto transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6">
              A Orquestração <span className="text-primary">Perfeita</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-10">
              Unimos o poder de automação do n8n com a inteligência artificial para criar fluxos que
              atendem, qualificam e gerenciam seus clientes em tempo real.
            </p>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex-shrink-0 flex items-center justify-center text-primary border border-primary/20">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Atendimento Instantâneo</h3>
                  <p className="text-muted-foreground">
                    Respostas imediatas no WhatsApp e Instagram 24 horas por dia, 7 dias por semana.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex-shrink-0 flex items-center justify-center text-primary border border-primary/20">
                  <BrainCircuit className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Qualificação Automática</h3>
                  <p className="text-muted-foreground">
                    Agentes de IA conversam, entendem a necessidade e classificam a temperatura do
                    lead de forma padronizada.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex-shrink-0 flex items-center justify-center text-primary border border-primary/20">
                  <Blocks className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">CRM Atualizado</h3>
                  <p className="text-muted-foreground">
                    Dados sincronizados automaticamente com seu CRM, planilhas e sistemas internos
                    sem intervenção humana.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent blur-3xl -z-10 rounded-full" />
            <div className="relative border border-border/50 rounded-2xl bg-zinc-900/80 backdrop-blur-sm shadow-2xl overflow-hidden glow-hover">
              <div className="absolute right-0 bottom-0 w-64 h-64 bg-[url('https://img.usecurling.com/p/300/300?q=cyborg%20eye&color=green')] opacity-5 bg-contain bg-no-repeat bg-right-bottom mix-blend-screen pointer-events-none z-0" />

              <div className="bg-zinc-800/80 px-4 py-3 border-b border-border/50 flex items-center gap-3 relative z-10">
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-500">
                  <BrainCircuit className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold text-sm">IA de Vendas</p>
                  <p className="text-xs text-emerald-400">Online</p>
                </div>
              </div>

              <div className="p-4 space-y-4 h-[400px] overflow-y-auto bg-[url('https://img.usecurling.com/p/800/600?q=pattern&color=black&dpr=1')] bg-cover bg-center bg-blend-overlay bg-black/60 relative z-10">
                <div className="bg-zinc-800 rounded-lg rounded-tl-none p-3 max-w-[80%] border border-border/30">
                  <p className="text-sm">
                    Olá! Vi que você tem interesse em automatizar seus processos. Como posso te
                    ajudar hoje?
                  </p>
                  <span className="text-[10px] text-muted-foreground block mt-1 text-right">
                    09:41
                  </span>
                </div>

                <div className="bg-primary/20 text-primary-foreground rounded-lg rounded-tr-none p-3 max-w-[80%] ml-auto border border-primary/30">
                  <p className="text-sm text-foreground">
                    Minha equipe de vendas demora muito para responder no WhatsApp. Perdemos vendas.
                  </p>
                  <span className="text-[10px] text-primary/70 block mt-1 text-right">09:42</span>
                </div>

                <div className="bg-zinc-800 rounded-lg rounded-tl-none p-3 max-w-[80%] border border-border/30 animate-fade-in-up">
                  <p className="text-sm">
                    Entendo perfeitamente. Com nossas soluções, o tempo de resposta cai para zero e
                    a IA qualifica o lead antes de passar para um humano. Qual o seu volume atual de
                    atendimentos por dia?
                  </p>
                  <span className="text-[10px] text-muted-foreground block mt-1 text-right">
                    09:42
                  </span>
                </div>

                <div className="flex items-center justify-center my-4">
                  <span className="text-[10px] bg-zinc-950/80 px-2 py-1 rounded-full text-muted-foreground border border-border/50">
                    Lead Qualificado - CRM Atualizado
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
