import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { CheckCircle2, XCircle } from 'lucide-react'

export function ComparisonSection() {
  const { ref, isVisible } = useScrollAnimation()

  const comparisonData = [
    { feature: 'Atendimento', manual: 'Apenas horário comercial', automated: 'Instantâneo 24/7' },
    { feature: 'Qualificação', manual: 'Subjetiva e lenta', automated: 'Padronizada por IA' },
    { feature: 'Gestão de Dados', manual: 'Planilhas soltas', automated: 'CRM sempre atualizado' },
    { feature: 'Custo de Escala', manual: 'Alto (contratações)', automated: 'Baixo e previsível' },
    {
      feature: 'Risco de Erro',
      manual: 'Alto risco humano',
      automated: 'Processos à prova de falhas',
    },
  ]

  return (
    <section id="comparativo" className="py-24 bg-zinc-950 border-t border-border/20">
      <div
        ref={ref}
        className={`container px-4 mx-auto max-w-4xl transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
            Operação Manual vs. <span className="text-primary">L34f4r</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Veja como a automação transforma cada aspecto do seu processo comercial.
          </p>
        </div>

        <div className="border border-border/50 rounded-xl overflow-hidden bg-zinc-900/30 glow-hover">
          <Table>
            <TableHeader className="bg-zinc-900">
              <TableRow className="border-border/50 hover:bg-transparent">
                <TableHead className="w-[30%] text-foreground font-semibold py-4">
                  Característica
                </TableHead>
                <TableHead className="w-[35%] text-muted-foreground font-semibold py-4 border-l border-border/50">
                  Operação Manual
                </TableHead>
                <TableHead className="w-[35%] text-primary font-bold py-4 border-l border-border/50 bg-primary/5">
                  Operação com L34f4r
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {comparisonData.map((row, index) => (
                <TableRow
                  key={index}
                  className="border-border/20 hover:bg-zinc-800/50 transition-colors"
                >
                  <TableCell className="font-medium py-4">{row.feature}</TableCell>
                  <TableCell className="text-muted-foreground border-l border-border/20 py-4">
                    <div className="flex items-center gap-2">
                      <XCircle className="w-4 h-4 text-destructive/70 flex-shrink-0" />
                      {row.manual}
                    </div>
                  </TableCell>
                  <TableCell className="text-foreground font-medium border-l border-border/20 py-4 bg-primary/5">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                      {row.automated}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  )
}
