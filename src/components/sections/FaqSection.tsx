import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

interface FaqSectionProps {
  onOpenAudit?: () => void
}

export function FaqSection({ onOpenAudit }: FaqSectionProps = {}) {
  const { ref, isVisible } = useScrollAnimation()

  const faqs = [
    {
      question: 'Existe risco do meu número de WhatsApp ser banido?',
      answer:
        'Não! Diferente de disparadores em massa e extensões piratas que dependem de leitura de QR Code em celulares, operamos exclusivamente com a API Oficial da Meta (WhatsApp Business Cloud API). Sua farmácia fica 100% regularizada e imune a bloqueios.',
    },
    {
      question: 'A IA substitui meus balconistas ou trabalha com eles?',
      answer:
        'Ela trabalha em conjunto. A IA assume a triagem inicial (saudação imediata, endereço, itens e receita) e organiza os dados. Quando o cliente está pronto ou pede atendimento humano, o chamado cai diretamente na tela do seu balconista com todo o contexto pronto.',
    },
    {
      question: 'Como funciona a gestão de entregas e motoboys?',
      answer:
        'Você conta com um painel Kanban em tempo real para despachar pedidos. O motoboy visualiza a rota e dados do cliente, enquanto o cliente recebe no WhatsApp alertas automáticos ("sua entrega é a próxima") e pesquisa de satisfação pós-entrega.',
    },
    {
      question: 'Quanto tempo leva para colocar a operação no ar?',
      answer:
        'Por utilizarmos fluxos já homologados para farmácias e drogarias, a ativação e configuração da API Oficial costumam levar poucos dias úteis, sem interromper o atendimento atual da sua loja.',
    },
  ]

  return (
    <section
      id="faq"
      className="py-20 md:py-28 bg-slate-50/70 border-t border-slate-200/80 text-slate-900"
    >
      <div
        ref={ref}
        className={`container px-4 mx-auto max-w-3xl transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="text-center mb-14 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full">
            Tire Suas Dúvidas
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
            Perguntas Frequentes
          </h2>
          <p className="text-slate-600 text-base md:text-lg">
            Respostas diretas sobre segurança, implementação e rotina da sua equipe.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-3">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-slate-200 rounded-xl px-5 bg-white data-[state=open]:border-emerald-300 shadow-2xs transition-colors"
            >
              <AccordionTrigger className="text-left font-semibold text-slate-900 text-base md:text-lg hover:no-underline py-5 hover:text-emerald-700">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 text-sm md:text-base leading-relaxed pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
