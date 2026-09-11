import { ArrowRight, Play, Bot, Workflow } from 'lucide-react'
import { Button } from '@/components/ui/button'
import logoUrl from '@/assets/editedimage1780319473364-fd281.png'
import pharmacyImg from '@/assets/generatedimage1781836123150-85c91.png'

const HERO_CONTENT = {
  title: 'Automatize o WhatsApp da sua farmácia e venda mais.',
  subtitle:
    'Atendimento instantâneo 24/7, gestão de entregas em tempo real e a segurança da API oficial da Meta.',
  primaryCta: 'Solicitar Orçamento',
  secondaryCta: 'Ver Demonstração',
}

export function HeroSection() {
  const scrollToDemo = () => {
    const section = document.getElementById('gestao-entregas')
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center pt-16 pb-16 overflow-hidden bg-white text-slate-900">
      {/* Background with dot pattern */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] bg-[size:24px_24px] opacity-60" />

      {/* Subtle Background Branding (Watermark) */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none bg-no-repeat bg-center"
        style={{
          backgroundImage: `url(${logoUrl})`,
          backgroundSize: 'max(400px, 40vw)',
        }}
      />

      {/* Soft gradient to ensure text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-white/80 pointer-events-none z-0" />

      <div className="container relative z-10 px-4 mx-auto my-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="text-left space-y-8 max-w-2xl pt-4 lg:pt-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
              {HERO_CONTENT.title}
            </h1>

            <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
              {HERO_CONTENT.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center pt-2">
              <Button
                size="lg"
                className="h-14 px-8 text-lg w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-600/25 transition-all hover:scale-105 active:scale-95 font-semibold"
                onClick={() => {
                  window.open(
                    'https://n8n-n8n.sd3ni9.easypanel.host/form/93cbdace-782c-4b58-8d35-6e77ebc589fa',
                    '_blank',
                  )
                }}
              >
                {HERO_CONTENT.primaryCta}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={scrollToDemo}
                className="h-14 px-8 text-lg w-full sm:w-auto border-emerald-600/30 text-emerald-800 hover:text-emerald-900 hover:bg-emerald-50/70 hover:border-emerald-500 transition-all hover:scale-105 active:scale-95 bg-white shadow-sm font-semibold"
              >
                <Play className="mr-2 h-5 w-5 fill-emerald-600 text-emerald-600" />
                {HERO_CONTENT.secondaryCta}
              </Button>
            </div>
          </div>

          <div
            className="relative w-full aspect-square md:aspect-[4/3] animate-fade-in-up mt-8 lg:mt-0"
            style={{ animationFillMode: 'both', animationDelay: '0.7s' }}
          >
            {/* Decorative background blur behind image */}
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-200 to-blue-100 rounded-[2rem] transform rotate-3 scale-105 opacity-50 blur-2xl" />

            <div className="relative h-full w-full rounded-2xl overflow-hidden border border-slate-200 shadow-2xl bg-white flex items-center justify-center p-2 group">
              <img
                src={pharmacyImg}
                alt="Atendimento de Automação na Farmácia"
                className="w-full h-full object-cover rounded-xl transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Floating UI elements for a modern feel */}
            <div className="absolute -left-6 top-1/4 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-lg border border-slate-100 animate-float hidden md:flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                <Workflow className="text-emerald-600 w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900">Fluxos Ativos</p>
                <p className="text-xs text-slate-500">Operando 24/7</p>
              </div>
            </div>

            <div
              className="absolute -right-6 bottom-1/4 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-lg border border-slate-100 animate-float hidden md:flex items-center gap-3"
              style={{ animationDelay: '2s' }}
            >
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                <Bot className="text-blue-600 w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900">IA Integrada</p>
                <p className="text-xs text-slate-500">Respostas automáticas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
