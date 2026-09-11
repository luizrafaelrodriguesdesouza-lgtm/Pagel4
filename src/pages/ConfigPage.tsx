import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '@/hooks/use-auth'
import {
  getNotificationSettings,
  updateNotificationSettings,
  type NotificationSettings,
} from '@/services/settings'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useToast } from '@/hooks/use-toast'
import { ArrowLeft, Save, Settings as SettingsIcon, Loader2 } from 'lucide-react'

export default function ConfigPage() {
  const { isAuthenticated, signIn, loading: authLoading } = useAuth()
  const { toast } = useToast()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loginError, setLoginError] = useState('')
  const [isLoggingIn, setIsLoggingIn] = useState(false)

  const [settings, setSettings] = useState<NotificationSettings>({
    webhook_url: '',
    pre_delivery: true,
    post_delivery: true,
  })
  const [isLoading, setIsLoading] = useState(false)
  const [isSaving, setIsSaving] = useState(false)

  useEffect(() => {
    if (!isAuthenticated) return
    const load = async () => {
      setIsLoading(true)
      try {
        const data = await getNotificationSettings()
        setSettings(data)
      } catch {
        /* use defaults */
      } finally {
        setIsLoading(false)
      }
    }
    load()
  }, [isAuthenticated])

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoggingIn(true)
    setLoginError('')
    const { error } = await signIn(email, password)
    if (error) setLoginError('Credenciais inválidas. Verifique seu email e senha.')
    setIsLoggingIn(false)
  }

  const handleSave = async () => {
    setIsSaving(true)
    try {
      await updateNotificationSettings(settings)
      toast({ title: 'Configurações salvas com sucesso!' })
    } catch {
      toast({ title: 'Erro ao salvar', variant: 'destructive' })
    } finally {
      setIsSaving(false)
    }
  }

  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-900">
        <Loader2 className="w-8 h-8 animate-spin text-blue-400" />
      </div>
    )
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-900 text-white p-4">
        <Card className="w-full max-w-md bg-slate-800 border-slate-700">
          <CardHeader>
            <CardTitle className="text-center">Login Administrativo</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-slate-900 border-slate-600"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Senha</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="bg-slate-900 border-slate-600"
                />
              </div>
              {loginError && <p className="text-sm text-red-400">{loginError}</p>}
              <Button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-500"
                disabled={isLoggingIn}
              >
                {isLoggingIn ? 'Entrando...' : 'Entrar'}
              </Button>
              <Link to="/" className="block text-center text-sm text-slate-400 hover:text-white">
                ← Voltar para o site
              </Link>
            </form>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white p-4 sm:p-8">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <Link to="/">
            <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white">
              <ArrowLeft className="w-4 h-4 mr-1" /> Voltar
            </Button>
          </Link>
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <SettingsIcon className="w-6 h-6 text-blue-400" /> Configurações
          </h1>
        </div>

        <Card className="bg-slate-800 border-slate-700">
          <CardHeader>
            <CardTitle>Notificações WhatsApp</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {isLoading ? (
              <div className="flex justify-center py-8">
                <Loader2 className="w-6 h-6 animate-spin text-blue-400" />
              </div>
            ) : (
              <>
                <div className="space-y-2">
                  <Label htmlFor="webhook">Webhook URL para notificações WhatsApp</Label>
                  <Input
                    id="webhook"
                    placeholder="https://seu-n8n.com/webhook/..."
                    value={settings.webhook_url}
                    onChange={(e) => setSettings({ ...settings, webhook_url: e.target.value })}
                    className="bg-slate-900 border-slate-600"
                  />
                  <p className="text-xs text-slate-400">
                    URL do webhook no seu n8n que enviará as mensagens via WhatsApp.
                  </p>
                </div>

                <div className="flex items-center justify-between py-3 border-t border-slate-700">
                  <div>
                    <Label className="font-semibold">Notificação pré-entrega</Label>
                    <p className="text-xs text-slate-400 mt-1">
                      Avisa o cliente quando a entrega saiu para entrega.
                    </p>
                  </div>
                  <Switch
                    checked={settings.pre_delivery}
                    onCheckedChange={(checked) =>
                      setSettings({ ...settings, pre_delivery: checked })
                    }
                  />
                </div>

                <div className="flex items-center justify-between py-3 border-t border-slate-700">
                  <div>
                    <Label className="font-semibold">Notificação pós-entrega</Label>
                    <p className="text-xs text-slate-400 mt-1">
                      Solicita avaliação do cliente após a conclusão.
                    </p>
                  </div>
                  <Switch
                    checked={settings.post_delivery}
                    onCheckedChange={(checked) =>
                      setSettings({ ...settings, post_delivery: checked })
                    }
                  />
                </div>

                <Button
                  onClick={handleSave}
                  className="w-full bg-blue-600 hover:bg-blue-500"
                  disabled={isSaving}
                >
                  {isSaving ? (
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  ) : (
                    <Save className="w-4 h-4 mr-2" />
                  )}
                  Salvar Configurações
                </Button>
              </>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
