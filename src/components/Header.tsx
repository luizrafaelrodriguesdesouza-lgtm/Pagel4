import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Truck, Menu, X, ArrowRight, Zap, Settings } from 'lucide-react'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  const isDeliveriesPage = location.pathname === '/entregas'

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/80 text-slate-900 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-emerald-600 to-emerald-500 flex items-center justify-center text-white shadow-md shadow-emerald-600/20 group-hover:scale-105 transition-transform">
            <Zap className="w-5 h-5 fill-current" />
          </div>
          <div>
            <span className="font-extrabold text-lg tracking-tight text-slate-900">
              RL4 Automação
            </span>
            <span className="text-[10px] block text-emerald-600 font-semibold -mt-1 tracking-wider uppercase">
              IA & Logística
            </span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
          <a href="#problema" className="hover:text-emerald-600 transition-colors">
            Dores
          </a>
          <a href="#solucao" className="hover:text-emerald-600 transition-colors">
            Solução
          </a>
          <a href="#beneficios" className="hover:text-emerald-600 transition-colors">
            Benefícios
          </a>
          <a
            href="#gestao-entregas"
            className="hover:text-emerald-600 transition-colors flex items-center gap-1.5 text-emerald-700 font-semibold"
          >
            <Truck className="w-4 h-4 text-emerald-600" /> Gestão de Entregas
          </a>
          <a href="#faq" className="hover:text-emerald-600 transition-colors">
            FAQ
          </a>
          <Link
            to="/config"
            className="hover:text-emerald-600 transition-colors flex items-center gap-1.5 text-slate-500"
          >
            <Settings className="w-4 h-4" /> Config
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          {!isDeliveriesPage && (
            <Link to="/entregas">
              <Button
                size="sm"
                variant="outline"
                className="border-emerald-600/30 text-emerald-700 hover:bg-emerald-50 hover:text-emerald-800 font-semibold gap-2 text-xs rounded-xl"
              >
                <Truck className="w-3.5 h-3.5 text-emerald-600" />
                Painel Kanban
              </Button>
            </Link>
          )}

          <a href="#formulario">
            <Button
              size="sm"
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold gap-1.5 text-xs rounded-xl shadow-md shadow-emerald-600/20"
            >
              Orçamento Grátis
              <ArrowRight className="w-3.5 h-3.5" />
            </Button>
          </a>
        </div>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-slate-600 hover:text-slate-900"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 py-4 space-y-3">
          <a
            href="#gestao-entregas"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2 text-emerald-700 font-semibold py-2"
          >
            <Truck className="w-4 h-4 text-emerald-600" /> Gestão de Entregas e Motoboys
          </a>
          <Link
            to="/entregas"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-between text-slate-700 py-2 border-t border-slate-100"
          >
            <span>Ver Dashboard Kanban</span>
            <ArrowRight className="w-4 h-4 text-emerald-600" />
          </Link>
          <Link
            to="/config"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2 text-slate-600 py-2 border-t border-slate-100"
          >
            <Settings className="w-4 h-4 text-slate-500" /> Configurações
          </Link>
          <a href="#formulario" onClick={() => setMobileMenuOpen(false)} className="block pt-2">
            <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold">
              Solicitar Orçamento
            </Button>
          </a>
        </div>
      )}
    </header>
  )
}
