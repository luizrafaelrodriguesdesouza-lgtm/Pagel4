import { useState, useEffect } from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { ExternalLink, Loader2, RefreshCw, ShieldCheck } from 'lucide-react'

export const N8N_AUDIT_FORM_URL =
  'https://n8n-n8n.sd3ni9.easypanel.host/form/93cbdace-782c-4b58-8d35-6e77ebc589fa'

interface AuditModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function AuditModal({ open, onOpenChange }: AuditModalProps) {
  const [iframeLoading, setIframeLoading] = useState(true)
  const [iframeTimedOut, setIframeTimedOut] = useState(false)
  const [key, setKey] = useState(0)

  // Reset state when opening
  useEffect(() => {
    if (open) {
      setIframeLoading(true)
      setIframeTimedOut(false)

      const timer = setTimeout(() => {
        // If still loading after 8s, offer fallback
        setIframeTimedOut(true)
      }, 8000)

      return () => clearTimeout(timer)
    }
  }, [open, key])

  const handleReload = () => {
    setKey((prev) => prev + 1)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl w-[95vw] md:w-full p-0 gap-0 overflow-hidden bg-white border border-slate-200 rounded-2xl shadow-2xl max-h-[92vh] flex flex-col">
        <DialogHeader className="p-5 md:p-6 pb-4 border-b border-slate-100 bg-slate-50/70 text-left">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-700 mb-1">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Auditoria Gratuita & Confidencial</span>
          </div>
          <DialogTitle className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
            Solicitar Auditoria de Maturidade Gratuita
          </DialogTitle>
          <DialogDescription className="text-sm text-slate-600 mt-1 leading-relaxed">
            Preencha os dados abaixo para nossa equipe avaliar o fluxo do seu WhatsApp, tempos de
            resposta e oportunidades de ganho imediato.
          </DialogDescription>
        </DialogHeader>

        <div className="relative flex-1 min-h-[480px] md:min-h-[560px] bg-white flex flex-col">
          {iframeLoading && (
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-white/90 backdrop-blur-xs p-6 text-center space-y-3">
              <Loader2 className="w-8 h-8 text-emerald-600 animate-spin" />
              <p className="text-sm font-medium text-slate-700">Carregando formulário seguro...</p>
              {iframeTimedOut && (
                <div className="pt-2 flex flex-col items-center gap-2">
                  <p className="text-xs text-slate-500">
                    O formulário está demorando mais do que o esperado?
                  </p>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={handleReload}
                      className="text-xs gap-1.5 border-slate-200"
                    >
                      <RefreshCw className="w-3.5 h-3.5" /> Recarregar
                    </Button>
                    <a
                      href={N8N_AUDIT_FORM_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center"
                    >
                      <Button
                        size="sm"
                        className="text-xs gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white"
                      >
                        <ExternalLink className="w-3.5 h-3.5" /> Abrir formulário em nova aba
                      </Button>
                    </a>
                  </div>
                </div>
              )}
            </div>
          )}

          <iframe
            key={key}
            src={N8N_AUDIT_FORM_URL}
            title="Formulário de Auditoria de Maturidade Operacional - RL4"
            className="w-full flex-1 border-0 h-full min-h-[480px] md:min-h-[560px]"
            onLoad={() => setIframeLoading(false)}
            allow="camera; microphone; autoplay; encrypted-media"
          />

          <div className="p-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 px-4">
            <span className="hidden sm:inline">🔒 Seus dados estão seguros e protegidos.</span>
            <a
              href={N8N_AUDIT_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-700 hover:text-emerald-800 font-medium inline-flex items-center gap-1 ml-auto"
            >
              Prefere abrir em tela cheia?
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
