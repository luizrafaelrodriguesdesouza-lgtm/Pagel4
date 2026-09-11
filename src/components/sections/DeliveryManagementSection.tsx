import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import {
  Truck,
  CheckCircle2,
  Clock,
  MapPin,
  Phone,
  Banknote,
  CreditCard,
  QrCode,
  ArrowRight,
  ShieldCheck,
  Zap,
  UserCheck,
} from 'lucide-react'

export function DeliveryManagementSection() {
  const [activeDriver, setActiveDriver] = useState('Motoboy01')
  const [activeRole, setActiveRole] = useState<'gestor' | 'entregador'>('entregador')

  return (
    <section
      id="gestao-entregas"
      className="py-20 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 text-white relative overflow-hidden"
    >
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/15 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-600/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <Badge className="bg-blue-500/10 text-blue-400 border-blue-500/20 px-4 py-1.5 text-sm rounded-full font-medium inline-flex items-center gap-2">
            <Truck className="w-4 h-4 text-blue-400" /> Novidade L4 Automação
          </Badge>

          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-blue-200">
            Gestão de Entregas e Rastreamento
          </h2>

          <p className="text-slate-300 text-lg md:text-xl leading-relaxed">
            Acompanhe entregas em tempo real. Distribua pedidos para motoboys e mantenha o cliente
            informado do início ao fim.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/60 p-6 rounded-2xl hover:border-blue-500/40 transition-all duration-300">
            <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-400 mb-4 border border-blue-500/20">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-white">Entregas Ultra-rápidas</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Distribuição automática para o motoboy mais próximo assim que a receita ou medicamento
              sai da triagem.
            </p>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/60 p-6 rounded-2xl hover:border-purple-500/40 transition-all duration-300">
            <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center text-purple-400 mb-4 border border-purple-500/20">
              <UserCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-white">Visão Dupla: Gestor e Motoboy</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              O gestor acompanha todo o fluxo do balcão à porta do cliente, e o entregador acessa
              uma tela focada e limpa.
            </p>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/60 p-6 rounded-2xl hover:border-emerald-500/40 transition-all duration-300">
            <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center text-emerald-400 mb-4 border border-emerald-500/20">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-white">Comunicação e Pagamento Seguro</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Detalhamento de pagamento (Pix, Cartão, Dinheiro) e contato via WhatsApp para
              confirmação do cliente instantânea.
            </p>
          </div>
        </div>

        <div className="relative rounded-3xl border border-slate-700/80 bg-slate-900/90 shadow-2xl p-4 md:p-8 overflow-hidden backdrop-blur-xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 mb-6 border-b border-slate-800 gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
                <Truck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white">
                  Quadro de Entregas (Demonstração Interativa)
                </h4>
                <p className="text-xs text-slate-400">
                  Sistema operacional em tempo real para drogarias e farmácias de manipulação
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 flex-wrap">
              <div className="bg-slate-800 p-1 rounded-xl border border-slate-700 flex items-center text-xs font-semibold">
                <button
                  onClick={() => setActiveRole('gestor')}
                  className={`px-3 py-1.5 rounded-lg transition-all ${
                    activeRole === 'gestor'
                      ? 'bg-blue-600 text-white shadow'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Gestor
                </button>
                <button
                  onClick={() => setActiveRole('entregador')}
                  className={`px-3 py-1.5 rounded-lg transition-all ${
                    activeRole === 'entregador'
                      ? 'bg-blue-600 text-white shadow'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Entregador
                </button>
              </div>

              <select
                value={activeDriver}
                onChange={(e) => setActiveDriver(e.target.value)}
                className="bg-slate-800 text-slate-200 text-xs rounded-xl border border-slate-700 px-3 py-2 outline-none focus:border-blue-500"
              >
                <option value="Motoboy01">Motoboy01</option>
                <option value="Motoboy02">Motoboy02</option>
              </select>

              <Link to="/entregas">
                <Button
                  size="sm"
                  className="bg-blue-600 hover:bg-blue-500 text-white gap-2 text-xs rounded-xl"
                >
                  Abrir Dashboard Completo <ArrowRight className="w-3.5 h-3.5" />
                </Button>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-slate-950/60 rounded-2xl p-4 border border-blue-500/20">
              <div className="flex items-center justify-between mb-3">
                <span className="font-bold text-blue-400 text-sm flex items-center gap-2">
                  <Clock className="w-4 h-4" /> Entrega Pronta
                </span>
                <Badge className="bg-blue-500/20 text-blue-300 border-none font-bold text-xs">
                  2
                </Badge>
              </div>

              <div className="space-y-3">
                <Card className="bg-slate-800/90 border-slate-700 text-white shadow-md">
                  <CardContent className="p-3.5 space-y-2">
                    <div className="font-bold text-sm text-slate-100">Carol</div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-extrabold text-blue-400">R$ 43,34</span>
                      <span className="inline-flex items-center gap-1 text-[11px] bg-slate-700/80 px-2 py-0.5 rounded text-slate-300">
                        <Banknote className="w-3 h-3 text-emerald-400" /> Dinheiro
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-400 flex items-center gap-1 truncate">
                      <MapPin className="w-3 h-3 text-slate-500 shrink-0" /> Rua Valdir de Oliveira
                      nº 26...
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-slate-800/90 border-slate-700 text-white shadow-md">
                  <CardContent className="p-3.5 space-y-2">
                    <div className="font-bold text-sm text-slate-100">Francisco</div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-extrabold text-blue-400">R$ 34,54</span>
                      <span className="inline-flex items-center gap-1 text-[11px] bg-slate-700/80 px-2 py-0.5 rounded text-slate-300">
                        <CreditCard className="w-3 h-3 text-sky-400" /> Cartão de Crédito
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-400 flex items-center gap-1 truncate">
                      <MapPin className="w-3 h-3 text-slate-500 shrink-0" /> rua jose eleoterio nº
                      34...
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="bg-slate-950/60 rounded-2xl p-4 border border-purple-500/20">
              <div className="flex items-center justify-between mb-3">
                <span className="font-bold text-purple-400 text-sm flex items-center gap-2">
                  <UserCheck className="w-4 h-4" /> {activeDriver}
                </span>
                <Badge className="bg-purple-500/20 text-purple-300 border-none font-bold text-xs">
                  1
                </Badge>
              </div>

              <div className="space-y-3">
                <Card className="bg-slate-800/90 border-purple-500/30 text-white shadow-md ring-1 ring-purple-500/20">
                  <CardContent className="p-3.5 space-y-2">
                    <div className="font-bold text-sm text-slate-100">Camila Rocha</div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-extrabold text-purple-300">R$ 72,50</span>
                      <span className="inline-flex items-center gap-1 text-[11px] bg-purple-950/60 text-purple-300 px-2 py-0.5 rounded border border-purple-800/50">
                        <QrCode className="w-3 h-3 text-purple-400" /> Pix
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-400 flex items-center gap-1 truncate">
                      <MapPin className="w-3 h-3 text-slate-500 shrink-0" /> Rua Estados Unidos,
                      1500...
                    </p>
                    <div className="pt-1 flex items-center gap-1.5 text-[10px] text-purple-300 bg-purple-500/10 px-2 py-1 rounded-md">
                      <span>👤 Atribuído a {activeDriver}</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="bg-slate-950/60 rounded-2xl p-4 border border-amber-500/20">
              <div className="flex items-center justify-between mb-3">
                <span className="font-bold text-amber-400 text-sm flex items-center gap-2">
                  <Truck className="w-4 h-4" /> Em Andamento
                </span>
                <Badge className="bg-amber-500/20 text-amber-300 border-none font-bold text-xs">
                  0
                </Badge>
              </div>

              <div className="border border-dashed border-slate-800 rounded-xl p-8 text-center text-xs text-slate-500">
                Nenhuma entrega em percurso
              </div>
            </div>

            <div className="bg-slate-950/60 rounded-2xl p-4 border border-emerald-500/20">
              <div className="flex items-center justify-between mb-3">
                <span className="font-bold text-emerald-400 text-sm flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" /> Concluída
                </span>
                <Badge className="bg-emerald-500/20 text-emerald-300 border-none font-bold text-xs">
                  1
                </Badge>
              </div>

              <div className="space-y-3">
                <Card className="bg-slate-800/90 border-slate-700 text-white shadow-md opacity-90">
                  <CardContent className="p-3.5 space-y-2">
                    <div className="font-bold text-sm text-slate-100">Luiz Rafael</div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-extrabold text-emerald-400">R$ 98,95</span>
                      <span className="inline-flex items-center gap-1 text-[11px] bg-slate-700/80 px-2 py-0.5 rounded text-slate-300">
                        <CreditCard className="w-3 h-3 text-sky-400" /> Cartão 2x
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-400 flex items-center gap-1 truncate">
                      <Phone className="w-3 h-3 text-emerald-400 shrink-0" /> +5521996613737
                    </p>
                    <p className="text-[11px] text-slate-400 flex items-center gap-1 truncate">
                      <MapPin className="w-3 h-3 text-slate-500 shrink-0" /> Rua Teresinha
                      evangelista...
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link to="/entregas">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-6 rounded-2xl shadow-xl shadow-blue-600/30 text-base gap-3"
              >
                Acessar o Painel de Gestão de Entregas em Tempo Real
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
