import { useState } from 'react'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { useEffect } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { createLead } from '@/services/leads'
import { useDebounce } from '@/hooks/use-debounce'
import { useToast } from '@/hooks/use-toast'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Loader2, CheckCircle2 } from 'lucide-react'

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

const formSchema = z.object({
  name: z.string().min(1, 'Campo obrigatório'),
  email: z.string().email('Email inválido').min(1, 'Campo obrigatório'),
  phone: z.string().min(14, 'Telefone inválido').max(15, 'Telefone inválido'),
  company: z.string().min(1, 'Campo obrigatório'),
})

export function FormularioLead() {
  const [isSuccess, setIsSuccess] = useState(false)
  const { toast } = useToast()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      company: '',
    },
  })

  const watchedValues = form.watch()
  const debouncedValues = useDebounce(watchedValues, 300)

  useEffect(() => {
    if (form.formState.isDirty) {
      form.trigger()
    }
  }, [debouncedValues, form])

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      await createLead({
        name: values.name,
        email: values.email,
        phone: values.phone,
        company: values.company,
      })
      setIsSuccess(true)
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Falha no envio',
        description: 'Ocorreu um erro ao enviar sua solicitação. Por favor, tente novamente.',
      })
    }
  }

  return (
    <section className="py-24 bg-gray-50 flex justify-center items-center px-4">
      <Card className="w-full max-w-3xl bg-white shadow-xl animate-fade-in-up">
        <CardHeader className="text-center pt-8">
          <CardTitle className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
            Diagnóstico Gratuito de Automação
          </CardTitle>
          <CardDescription className="text-lg md:text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
            Descubra quanto tempo e dinheiro você pode economizar com automação inteligente.
          </CardDescription>
        </CardHeader>
        <CardContent className="p-8">
          {isSuccess ? (
            <div className="flex flex-col items-center justify-center py-16 text-center animate-fade-in">
              <CheckCircle2 className="w-20 h-20 text-green-500 mb-6" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                Recebemos sua solicitação!
              </h3>
              <p className="text-gray-600 text-lg">
                Obrigado! Vamos analisar sua empresa e enviar o diagnóstico em breve.
              </p>
            </div>
          ) : (
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700 font-medium">Nome</FormLabel>
                        <FormControl>
                          <Input className="h-12" placeholder="Seu nome completo" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700 font-medium">
                          Email corporativo
                        </FormLabel>
                        <FormControl>
                          <Input
                            className="h-12"
                            placeholder="seu@email.com"
                            type="email"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700 font-medium">Telefone</FormLabel>
                        <FormControl>
                          <Input
                            className="h-12"
                            placeholder="(00) 00000-0000"
                            {...field}
                            onChange={(e) => {
                              field.onChange(phoneMask(e.target.value))
                            }}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-700 font-medium">Empresa</FormLabel>
                        <FormControl>
                          <Input className="h-12" placeholder="Nome da sua empresa" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full h-14 bg-green-600 hover:bg-green-700 text-white font-semibold text-lg transition-all duration-300 shadow-md hover:shadow-lg mt-8"
                  disabled={form.formState.isSubmitting}
                >
                  {form.formState.isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-6 w-6 animate-spin" />
                      Enviando dados...
                    </>
                  ) : (
                    'Receber Diagnóstico'
                  )}
                </Button>
              </form>
            </Form>
          )}
        </CardContent>
      </Card>
    </section>
  )
}
