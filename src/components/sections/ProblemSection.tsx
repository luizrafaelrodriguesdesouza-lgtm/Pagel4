import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import { Droplets, Clock, Unlink } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function ProblemSection() {
  const { ref, isVisible } = useScrollAnimation()

  const problems = [
    {
      icon: Droplets,
      title: 'Leads Perdidos',
      description:
        'Respostas demoradas esfriam o cliente. Cada minuto de atraso no atendimento é dinheiro que escorre pelo ralo.',
    },
    {
      icon: Clock,
      title: 'Atendimento Lento',
      description:
        'Gargalos no WhatsApp geram frustração. Sua equipe perde tempo com tarefas repetitivas em vez de fechar vendas.',
    },
    {
      icon: Unlink,
      title: 'Erro Humano',
      description:
        'Atualizações manuais no CRM falham frequentemente, causando perda de histórico e oportunidades esquecidas.',
    },
  ]

  return (
    <section id="problemas" className="py-24 bg-zinc-950 border-t border-border/20">
      <div
        ref={ref}
        className={`container px-4 mx-auto transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
            O Custo do <span className="text-destructive">Caos Manual</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Processos não otimizados não apenas frustram sua equipe, mas corroem ativamente sua
            margem de lucro todos os dias.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <Card
              key={index}
              className="bg-zinc-900/50 border-border/50 glow-hover-danger overflow-hidden relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-destructive/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center mb-4 text-destructive">
                  <problem.icon className="w-6 h-6" />
                </div>
                <CardTitle className="text-xl">{problem.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{problem.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
