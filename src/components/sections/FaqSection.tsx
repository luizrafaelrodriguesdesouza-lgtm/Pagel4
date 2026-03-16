import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export function FaqSection() {
  const { ref, isVisible } = useScrollAnimation()

  const faqs = [
    {
      question: 'Os meus dados estão seguros?',
      answer:
        'Sim! Utilizamos o n8n e as melhores práticas de segurança do mercado. Todos os fluxos operam com criptografia de ponta a ponta e seguimos rígidos protocolos de confidencialidade para garantir que os dados da sua empresa e dos seus clientes permaneçam totalmente protegidos.',
    },
    {
      question: 'Quanto tempo leva a implementação?',
      answer:
        'Nosso processo utiliza metodologia ágil. O tempo de implementação varia conforme a complexidade do fluxo, mas uma automação padrão de atendimento e qualificação costuma estar rodando em produção em poucos dias, garantindo um ROI rápido para sua operação.',
    },
    {
      question: 'Quais ferramentas vocês utilizam?',
      answer:
        'Somos especialistas na orquestração de sistemas. Nossas principais stacks incluem n8n, Make, OpenAI, Anthropic (Claude), além da integração nativa com o seu CRM (HubSpot, Pipedrive, Kommo) e plataformas de comunicação (WhatsApp, Instagram, Telegram).',
    },
  ]

  return (
    <section id="faq" className="py-24 bg-zinc-950 border-t border-border/20">
      <div
        ref={ref}
        className={`container px-4 mx-auto max-w-3xl transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
            Dúvidas <span className="text-primary">Frequentes</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Tudo o que você precisa saber sobre como escalamos sua operação.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-border/50 rounded-lg px-6 bg-zinc-900/50 data-[state=open]:bg-zinc-900 data-[state=open]:border-primary/50 transition-colors"
            >
              <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
