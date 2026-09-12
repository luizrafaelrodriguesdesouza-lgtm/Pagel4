import { useState } from 'react'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { createLead } from '@/services/leads'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import {
  ShieldCheck,
  Loader2,
  CheckCircle2,
  Sparkles,
  ExternalLink,
  MessageSquare,
} from 'lucide-react'

export const N8N_AUDIT_FORM_URL =
  'https://n8n-n8n.sd3ni9.easypanel.host/form/93cbdace-782c-4b58-8d35-6e77ebc589fa'

export const phoneMask = (value: string) => {
  if (!value) return ''
  const v = value.replace(/\D/g, '')
  if (v.length <= 10) {
    return v
      .replace(/(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{4})(\d)/, '$1-$2')
      .slice(0, 14)
  }
  return v
    .replace(/(\d{2})(\d)/, '($1) $2')
    .replace(/(\d{5})(\d)/, '$1-$2')
    .slice(0, 15)
}

const auditFormSchema = z.object({
  name: z.string().min(2, 'Informe seu nome completo'),
  email: z.string().email('Email inválido').min(5, 'Informe um email válido'),
  phone: z.string().min(14, 'Telefone com DDD inválido').max(15, 'Telefone inválido'),
  company: z.string().min(2, 'Informe o nome da empresa ou farmácia'),
  daily_clients: z.string().optional(),
  agents_count: z.string().optional(),
  goal: z.string().optional(),
  message: z.string().optional(),
})

type AuditFormData = z.infer<typeof auditFormSchema>

interface AuditModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function AuditModal({ open, onOpenChange }: AuditModalProps) {
  const [isSuccess, setIsSuccess] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [useIframeFallback, setUseIframeFallback] = useState(false)

  const form = useForm<AuditFormData>({
    resolver: zodResolver(auditFormSchema),
    mode: 'onTouched',
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      company: '',
      daily_clients: 'de 31 a 60 clientes',
      agents_count: 'Até 4 atendentes',
      goal: 'Usar API Oficial Meta + Assistente de IA',
      message: '',
    },
  })

  // Reset when dialog re-opens
  const handleOpenChange = (nextOpen: boolean) => {
    if (!nextOpen) {
      setTimeout(() => {
        setIsSuccess(false)
        setErrorMessage(null)
        setUseIframeFallback(false)
        form.reset()
      }, 300)
    }
    onOpenChange(nextOpen)
  }

  async function onSubmit(values: AuditFormData) {
    setErrorMessage(null)
    try {
      await createLead({
        name: values.name,
        email: values.email,
        phone: values.phone,
        company: values.company,
        message: values.message,
        daily_clients: values.daily_clients,
        agents_count: values.agents_count,
        goal: values.goal,
      })
      setIsSuccess(true)
    } catch (err: any) {
      console.error('AuditModal lead submit error:', err)
      const msg =
        err?.data?.message ||
        err?.message ||
        'Não foi possível enviar agora. Você pode abrir o formulário direto no n8n.'
      setErrorMessage(msg)
    }
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="max-w-2xl w-[95vw] md:w-full p-0 gap-0 overflow-hidden bg-white border border-slate-200 rounded-3xl shadow-2xl max-h-[92vh] flex flex-col">
        <DialogHeader className="p-5 md:p-6 pb-4 border-b border-slate-100 bg-gradient-to-r from-emerald-50/70 via-slate-50 to-white text-left">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-700 mb-1">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Auditoria Gratuita & Confidencial • RL4</span>
          </div>
          <DialogTitle className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
            Solicitar Diagnóstico Operacional
          </DialogTitle>
          <DialogDescription className="text-sm text-slate-600 mt-1 leading-relaxed">
            Descubra em detalhes o custo invisível da demora no seu WhatsApp e o plano exato para
            blindar seu atendimento com IA e API Oficial.
          </DialogDescription>
        </DialogHeader>

        <div className="overflow-y-auto flex-1 p-5 md:p-6 bg-white">
          {useIframeFallback ? (
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs text-slate-500 pb-2 border-b">
                <span>Modo de contingência n8n</span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setUseIframeFallback(false)}
                  className="text-xs text-emerald-700 h-7"
                >
                  Voltar ao formulário rápido
                </Button>
              </div>
              <iframe
                src={N8N_AUDIT_FORM_URL}
                title="Formulário n8n"
                className="w-full h-[520px] border-0 rounded-xl"
                allow="camera; microphone; autoplay; encrypted-media"
              />
            </div>
          ) : isSuccess ? (
            <div className="py-10 px-4 text-center flex flex-col items-center justify-center space-y-4 animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <div className="space-y-2 max-w-md">
                <h3 className="text-2xl font-bold text-slate-900">
                  Solicitação recebida com sucesso!
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Obrigado! Nossos especialistas já estão analisando os dados da sua empresa e
                  entrarão em contato pelo WhatsApp informado em até 24h úteis com seu diagnóstico.
                </p>
              </div>
              <div className="pt-4 flex flex-col sm:flex-row gap-2 w-full max-w-sm">
                <Button
                  onClick={() => handleOpenChange(false)}
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl"
                >
                  Concluir
                </Button>
              </div>
            </div>
          ) : (
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                {errorMessage && (
                  <div className="p-3.5 bg-rose-50 border border-rose-200 rounded-xl text-xs text-rose-800 space-y-2">
                    <p className="font-semibold">{errorMessage}</p>
                    <div className="flex items-center gap-2">
                      <Button
                        type="button"
                        size="sm"
                        variant="outline"
                        onClick={() => setUseIframeFallback(true)}
                        className="text-xs h-7 border-rose-300 text-rose-900 hover:bg-rose-100"
                      >
                        Carregar formulário alternativo n8n
                      </Button>
                      <a
                        href={N8N_AUDIT_FORM_URL}
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs text-rose-900 underline inline-flex items-center gap-1"
                      >
                        Abrir em nova aba <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs font-semibold text-slate-700">
                          Seu Nome Completo *
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Ex: Carlos Eduardo"
                            className="h-11 rounded-xl text-sm"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-xs" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs font-semibold text-slate-700">
                          Nome da Empresa / Farmácia *
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Ex: Drogaria São Lucas"
                            className="h-11 rounded-xl text-sm"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-xs" />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs font-semibold text-slate-700">
                          E-mail corporativo *
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="contato@suafarmacia.com.br"
                            className="h-11 rounded-xl text-sm"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-xs" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs font-semibold text-slate-700">
                          WhatsApp com DDD *
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="(00) 00000-0000"
                            className="h-11 rounded-xl text-sm"
                            {...field}
                            onChange={(e) => field.onChange(phoneMask(e.target.value))}
                          />
                        </FormControl>
                        <FormMessage className="text-xs" />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                  <FormField
                    control={form.control}
                    name="daily_clients"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs font-semibold text-slate-700">
                          Quantos clientes atende por dia?
                        </FormLabel>
                        <FormControl>
                          <select
                            {...field}
                            className="w-full h-11 px-3 text-sm rounded-xl border border-slate-200 bg-white text-slate-800 outline-none focus:border-emerald-500"
                          >
                            <option value="de 15 a 30 clientes">de 15 a 30 clientes</option>
                            <option value="de 31 a 60 clientes">de 31 a 60 clientes</option>
                            <option value="de 60 a 100 clientes">de 60 a 100 clientes</option>
                            <option value="Acima de 100 clientes">Acima de 100 clientes</option>
                          </select>
                        </FormControl>
                        <FormMessage className="text-xs" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="agents_count"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs font-semibold text-slate-700">
                          Atendentes na equipe
                        </FormLabel>
                        <FormControl>
                          <select
                            {...field}
                            className="w-full h-11 px-3 text-sm rounded-xl border border-slate-200 bg-white text-slate-800 outline-none focus:border-emerald-500"
                          >
                            <option value="Até 4 atendentes">Até 4 atendentes</option>
                            <option value="de 5 a 8 atendentes">de 5 a 8 atendentes</option>
                            <option value="de 9 a 12 atendentes">de 9 a 12 atendentes</option>
                            <option value="Mais de 12 atendentes">Mais de 12 atendentes</option>
                          </select>
                        </FormControl>
                        <FormMessage className="text-xs" />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs font-semibold text-slate-700">
                        Observações ou principal dor hoje (opcional)
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Ex: Demora nas respostas de balcão e perda de pedidos na troca de turno..."
                          className="min-h-[70px] rounded-xl text-sm"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  disabled={form.formState.isSubmitting}
                  className="w-full h-12 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm rounded-xl shadow-md transition-all hover:scale-[1.01] active:scale-[0.99] gap-2 mt-2"
                >
                  {form.formState.isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Enviando com segurança...
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4" />
                      Receber Diagnóstico Gratuito
                    </>
                  )}
                </Button>
              </form>
            </Form>
          )}
        </div>

        <div className="p-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 px-5">
          <span className="inline-flex items-center gap-1.5">
            <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
            Atendimento 100% humano no fechamento.
          </span>
          <a
            href={N8N_AUDIT_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-700 hover:text-emerald-800 font-medium inline-flex items-center gap-1"
          >
            Formulário n8n direto
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </DialogContent>
    </Dialog>
  )
}
