import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Truck, Menu, X, ArrowRight, Zap, Settings } from 'lucide-react'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  const isDeliveriesPage = location.pathname === '/entregas'

  return (
    <header className="sticky top-0 z-40 w-full bg-slate-900/90 backdrop-blur-md border-b border-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-blue-400 flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
            <Zap className="w-5 h-5 fill-current" />
          </div>
          <div>
            <span className="font-extrabold text-lg tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-blue-200">
              RL4 Automação
            </span>
            <span className="text-[10px] block text-blue-400 font-semibold -mt-1 tracking-wider uppercase">
              IA & Logística
            </span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
          <a href="#problema" className="hover:text-white transition-colors">
            Dores
          </a>
          <a href="#solucao" className="hover:text-white transition-colors">
            Solução
          </a>
          <a href="#beneficios" className="hover:text-white transition-colors">
            Benefícios
          </a>
          <a
            href="#gestao-entregas"
            className="hover:text-white transition-colors flex items-center gap-1.5 text-blue-400 font-semibold"
          >
            <Truck className="w-4 h-4" /> Gestão de Entregas
          </a>
          <a href="#faq" className="hover:text-white transition-colors">
            FAQ
          </a>
          <Link
            to="/config"
            className="hover:text-white transition-colors flex items-center gap-1.5 text-slate-400"
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
                className="border-blue-500/40 text-blue-300 hover:bg-blue-500/10 font-semibold gap-2 text-xs rounded-xl"
              >
                <Truck className="w-3.5 h-3.5 text-blue-400" />
                Painel Kanban
              </Button>
            </Link>
          )}

          <a href="#formulario">
            <Button
              size="sm"
              className="bg-blue-600 hover:bg-blue-500 text-white font-bold gap-1.5 text-xs rounded-xl shadow-lg shadow-blue-600/20"
            >
              Orçamento Grátis
              <ArrowRight className="w-3.5 h-3.5" />
            </Button>
          </a>
        </div>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-slate-400 hover:text-white"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800 px-4 py-4 space-y-3">
          <a
            href="#gestao-entregas"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2 text-blue-400 font-semibold py-2"
          >
            <Truck className="w-4 h-4" /> Gestão de Entregas e Motoboys
          </a>
          <Link
            to="/entregas"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-between text-slate-200 py-2 border-t border-slate-800"
          >
            <span>Ver Dashboard Kanban</span>
            <ArrowRight className="w-4 h-4 text-blue-400" />
          </Link>
          <Link
            to="/config"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2 text-slate-300 py-2 border-t border-slate-800"
          >
            <Settings className="w-4 h-4 text-slate-400" /> Configurações
          </Link>
          <a href="#formulario" onClick={() => setMobileMenuOpen(false)} className="block pt-2">
            <Button className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold">
              Solicitar Orçamento
            </Button>
          </a>
        </div>
      )}
    </header>
  )
}
