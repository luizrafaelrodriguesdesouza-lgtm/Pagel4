import { useState, useEffect, useMemo } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useRealtime } from '@/hooks/use-realtime'
import {
  getDeliveries,
  createDelivery,
  updateDelivery,
  deleteDelivery,
  type Delivery,
} from '@/services/deliveries'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from '@/components/ui/dialog'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useToast } from '@/hooks/use-toast'
import {
  Box,
  LogOut,
  Plus,
  Phone,
  Banknote,
  CreditCard,
  QrCode,
  ArrowRight,
  Trash2,
  Edit2,
  User,
  CheckCircle,
  Truck,
  Home,
} from 'lucide-react'

export default function DeliveriesPage() {
  const navigate = useNavigate()
  const { toast } = useToast()

  const [deliveries, setDeliveries] = useState<Delivery[]>([])

  // Controls
  const [role, setRole] = useState<'gestor' | 'entregador'>('entregador')
  const [selectedDriver, setSelectedDriver] = useState<string>('Motoboy01')

  // Dialog state
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const [formData, setFormData] = useState({
    customer_name: '',
    value: '',
    payment_method: 'dinheiro' as 'dinheiro' | 'pix' | 'cartao',
    address: '',
    phone: '',
    driver_name: 'Motoboy01',
    status: 'pronta' as 'pronta' | 'atribuida' | 'andamento' | 'concluida',
  })

  const [editingDelivery, setEditingDelivery] = useState<Delivery | null>(null)

  const fetchDeliveriesData = async () => {
    try {
      const data = await getDeliveries()
      setDeliveries(data)
    } catch (err) {
      console.error('Erro ao carregar entregas:', err)
    }
  }

  useEffect(() => {
    fetchDeliveriesData()
  }, [])

  useRealtime('deliveries', () => {
    fetchDeliveriesData()
  })

  const pendingCount = useMemo(() => {
    return deliveries.filter((d) => d.status === 'pronta' || d.status === 'atribuida').length
  }, [deliveries])

  const handleCreateOrUpdate = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.customer_name || !formData.value) {
      toast({
        title: 'Campos obrigatórios',
        description: 'Por favor preencha nome do cliente e valor.',
        variant: 'destructive',
      })
      return
    }

    setIsSubmitting(true)
    try {
      const numValue = parseFloat(formData.value.replace(',', '.')) || 0

      if (editingDelivery) {
        await updateDelivery(editingDelivery.id, {
          customer_name: formData.customer_name,
          value: numValue,
          payment_method: formData.payment_method,
          address: formData.address,
          phone: formData.phone,
          driver_name: formData.driver_name,
          status: formData.status,
        })
        toast({ title: 'Entrega atualizada com sucesso!' })
      } else {
        await createDelivery({
          customer_name: formData.customer_name,
          value: numValue,
          payment_method: formData.payment_method,
          address: formData.address,
          phone: formData.phone,
          driver_name: formData.status === 'atribuida' ? formData.driver_name : '',
          status: formData.status,
        })
        toast({ title: 'Nova entrega criada!' })
      }

      setIsDialogOpen(false)
      setEditingDelivery(null)
      resetForm()
      fetchDeliveriesData()
    } catch (err) {
      toast({
        title: 'Erro ao salvar',
        description: 'Não foi possível salvar os dados da entrega.',
        variant: 'destructive',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const resetForm = () => {
    setFormData({
      customer_name: '',
      value: '',
      payment_method: 'dinheiro',
      address: '',
      phone: '',
      driver_name: selectedDriver !== 'todos' ? selectedDriver : 'Motoboy01',
      status: 'pronta',
    })
  }

  const handleOpenEdit = (delivery: Delivery) => {
    setEditingDelivery(delivery)
    setFormData({
      customer_name: delivery.customer_name,
      value: delivery.value.toString(),
      payment_method: delivery.payment_method,
      address: delivery.address || '',
      phone: delivery.phone || '',
      driver_name: delivery.driver_name || 'Motoboy01',
      status: delivery.status || 'pronta',
    })
    setIsDialogOpen(true)
  }

  const handleMoveStatus = async (
    delivery: Delivery,
    newStatus: Delivery['status'],
    newDriver?: string,
  ) => {
    try {
      const updateData: Partial<Delivery> = { status: newStatus }
      if (newDriver !== undefined) {
        updateData.driver_name = newDriver
      } else if (newStatus === 'atribuida' && !delivery.driver_name) {
        updateData.driver_name = selectedDriver !== 'todos' ? selectedDriver : 'Motoboy01'
      }

      await updateDelivery(delivery.id, updateData)
      toast({
        title: 'Status atualizado',
        description: `Entrega de ${delivery.customer_name} movida.`,
      })
      fetchDeliveriesData()
    } catch (err) {
      toast({
        title: 'Erro',
        description: 'Falha ao atualizar status da entrega.',
        variant: 'destructive',
      })
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Deseja realmente remover esta entrega?')) return
    try {
      await deleteDelivery(id)
      toast({ title: 'Entrega removida' })
      fetchDeliveriesData()
    } catch (err) {
      toast({ title: 'Erro ao remover', variant: 'destructive' })
    }
  }

  const readyDeliveries = useMemo(() => {
    return deliveries.filter((d) => d.status === 'pronta')
  }, [deliveries])

  const driverAssignedDeliveries = useMemo(() => {
    return deliveries.filter((d) => {
      if (d.status !== 'atribuida') return false
      if (selectedDriver === 'todos') return true
      return d.driver_name === selectedDriver
    })
  }, [deliveries, selectedDriver])

  const inProgressDeliveries = useMemo(() => {
    return deliveries.filter((d) => {
      if (d.status !== 'andamento') return false
      if (selectedDriver === 'todos') return true
      return d.driver_name === selectedDriver
    })
  }, [deliveries, selectedDriver])

  const completedDeliveries = useMemo(() => {
    return deliveries.filter((d) => {
      if (d.status !== 'concluida') return false
      if (selectedDriver === 'todos') return true
      return d.driver_name === selectedDriver
    })
  }, [deliveries, selectedDriver])

  const formatPrice = (val: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(val)
  }

  const renderPaymentIcon = (method: string) => {
    switch (method) {
      case 'dinheiro':
        return (
          <span className="inline-flex items-center gap-1">
            <Banknote className="w-3.5 h-3.5 text-emerald-600" /> Dinheiro
          </span>
        )
      case 'pix':
        return (
          <span className="inline-flex items-center gap-1">
            <QrCode className="w-3.5 h-3.5 text-purple-600" /> Pix
          </span>
        )
      case 'cartao':
      default:
        return (
          <span className="inline-flex items-center gap-1">
            <CreditCard className="w-3.5 h-3.5 text-blue-600" /> Cartão de Crédito
          </span>
        )
    }
  }

  return (
    <div className="min-h-screen bg-[#f7f9fc] text-slate-800 flex flex-col font-sans">
      <header className="bg-white border-b border-slate-200 shadow-sm sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20">
              <Box className="w-5 h-5" />
            </div>
            <h1 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
              Gestão de Entregas
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <div className="bg-blue-50 text-blue-700 px-3.5 py-1.5 rounded-full border border-blue-200/60 font-medium text-xs sm:text-sm flex items-center gap-1.5 shadow-sm">
              <Box className="w-4 h-4 text-blue-600" />
              <span className="font-bold">{pendingCount}</span> Pendentes
            </div>

            <Link to="/">
              <Button
                variant="ghost"
                size="sm"
                className="hidden sm:inline-flex text-slate-600 hover:text-slate-900 text-xs"
              >
                <Home className="w-4 h-4 mr-1.5" /> Site
              </Button>
            </Link>

            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate('/')}
              className="text-slate-600 hover:text-slate-900 text-xs sm:text-sm flex items-center gap-1.5 px-3"
            >
              <LogOut className="w-4 h-4" /> Sair
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Quadro de Entregas</h2>

            <div className="flex items-center gap-3 flex-wrap">
              <div className="bg-slate-200/80 p-1 rounded-lg flex items-center text-xs font-medium">
                <button
                  type="button"
                  onClick={() => setRole('gestor')}
                  className={`px-4 py-1.5 rounded-md transition-all font-semibold ${
                    role === 'gestor'
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Gestor
                </button>
                <button
                  type="button"
                  onClick={() => setRole('entregador')}
                  className={`px-4 py-1.5 rounded-md transition-all font-semibold ${
                    role === 'entregador'
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Entregador
                </button>
              </div>

              <Select value={selectedDriver} onValueChange={setSelectedDriver}>
                <SelectTrigger className="w-[160px] bg-white border-slate-300 text-xs rounded-lg font-medium">
                  <SelectValue placeholder="Selecione o Motoboy" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Motoboy01">Motoboy01</SelectItem>
                  <SelectItem value="Motoboy02">Motoboy02</SelectItem>
                  <SelectItem value="Motoboy03">Motoboy03</SelectItem>
                  <SelectItem value="todos">Todos os Motoboys</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <Dialog
            open={isDialogOpen}
            onOpenChange={(open) => {
              setIsDialogOpen(open)
              if (!open) {
                setEditingDelivery(null)
                resetForm()
              }
            }}
          >
            <DialogTrigger asChild>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white shadow-md font-semibold text-xs sm:text-sm rounded-xl gap-2">
                <Plus className="w-4 h-4" /> Nova Entrega
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md bg-white">
              <DialogHeader>
                <DialogTitle>
                  {editingDelivery ? 'Editar Entrega' : 'Cadastrar Nova Entrega'}
                </DialogTitle>
              </DialogHeader>
              <form onSubmit={handleCreateOrUpdate} className="space-y-4 pt-2">
                <div className="space-y-1.5">
                  <Label htmlFor="customer_name" className="text-xs font-semibold">
                    Nome do Cliente *
                  </Label>
                  <Input
                    id="customer_name"
                    placeholder="Ex: Carol, Luiz Rafael..."
                    value={formData.customer_name}
                    onChange={(e) => setFormData({ ...formData, customer_name: e.target.value })}
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1.5">
                    <Label htmlFor="value" className="text-xs font-semibold">
                      Valor (R$) *
                    </Label>
                    <Input
                      id="value"
                      placeholder="43.34"
                      value={formData.value}
                      onChange={(e) => setFormData({ ...formData, value: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-1.5">
                    <Label className="text-xs font-semibold">Pagamento</Label>
                    <Select
                      value={formData.payment_method}
                      onValueChange={(val: any) =>
                        setFormData({ ...formData, payment_method: val })
                      }
                    >
                      <SelectTrigger className="w-full text-xs">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="dinheiro">Dinheiro</SelectItem>
                        <SelectItem value="pix">Pix</SelectItem>
                        <SelectItem value="cartao">Cartão de Crédito</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="address" className="text-xs font-semibold">
                    Endereço de Entrega
                  </Label>
                  <Input
                    id="address"
                    placeholder="Rua, Número, Bairro..."
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  />
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="phone" className="text-xs font-semibold">
                    Telefone / WhatsApp
                  </Label>
                  <Input
                    id="phone"
                    placeholder="+5521996613737"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1.5">
                    <Label className="text-xs font-semibold">Status Inicial</Label>
                    <Select
                      value={formData.status}
                      onValueChange={(val: any) => setFormData({ ...formData, status: val })}
                    >
                      <SelectTrigger className="w-full text-xs">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pronta">Entrega Pronta</SelectItem>
                        <SelectItem value="atribuida">Atribuída</SelectItem>
                        <SelectItem value="andamento">Em Andamento</SelectItem>
                        <SelectItem value="concluida">Concluída</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-1.5">
                    <Label className="text-xs font-semibold">Motoboy</Label>
                    <Select
                      value={formData.driver_name}
                      onValueChange={(val) => setFormData({ ...formData, driver_name: val })}
                    >
                      <SelectTrigger className="w-full text-xs">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Motoboy01">Motoboy01</SelectItem>
                        <SelectItem value="Motoboy02">Motoboy02</SelectItem>
                        <SelectItem value="Motoboy03">Motoboy03</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <DialogFooter className="pt-2">
                  <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>
                    Cancelar
                  </Button>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    {isSubmitting ? 'Salvando...' : 'Salvar Entrega'}
                  </Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-start">
          <div className="bg-[#eff6ff]/70 border border-blue-200/80 rounded-2xl p-4 min-h-[520px] flex flex-col space-y-3">
            <div className="flex items-center justify-between px-1 mb-1">
              <h3 className="font-bold text-blue-600 text-sm sm:text-base tracking-tight">
                Entrega Pronta
              </h3>
              <span className="w-6 h-6 rounded-full bg-white text-blue-600 font-bold text-xs flex items-center justify-center border border-blue-200 shadow-sm">
                {readyDeliveries.length}
              </span>
            </div>

            <div className="space-y-3 flex-1">
              {readyDeliveries.length === 0 ? (
                <div className="h-32 flex items-center justify-center text-xs text-slate-400 font-medium">
                  Nenhuma entrega pronta
                </div>
              ) : (
                readyDeliveries.map((item) => (
                  <Card
                    key={item.id}
                    className="bg-white border-l-4 border-l-blue-500 border-slate-200 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <CardContent className="p-4 space-y-2">
                      <div className="flex items-start justify-between">
                        <span className="font-bold text-slate-900 text-base">
                          {item.customer_name}
                        </span>
                        {role === 'gestor' && (
                          <div className="flex items-center gap-1">
                            <button
                              onClick={() => handleOpenEdit(item)}
                              className="p-1 text-slate-400 hover:text-blue-600 transition-colors"
                            >
                              <Edit2 className="w-3.5 h-3.5" />
                            </button>
                            <button
                              onClick={() => handleDelete(item.id)}
                              className="p-1 text-slate-400 hover:text-red-600 transition-colors"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        )}
                      </div>

                      <div className="flex items-center justify-between text-xs pt-0.5">
                        <span className="font-extrabold text-slate-900 text-sm">
                          {formatPrice(item.value)}
                        </span>
                        <div className="bg-slate-100 text-slate-700 px-2 py-0.5 rounded text-[11px] font-medium">
                          {renderPaymentIcon(item.payment_method)}
                        </div>
                      </div>

                      {item.phone && (
                        <a
                          href={`tel:${item.phone}`}
                          className="text-slate-600 hover:text-blue-600 text-xs flex items-center gap-1 pt-1 truncate transition-colors"
                        >
                          <Phone className="w-3 h-3 text-slate-400" />
                          <span>{item.phone}</span>
                        </a>
                      )}

                      {item.address && (
                        <p className="text-xs text-slate-500 truncate pt-0.5" title={item.address}>
                          {item.address}
                        </p>
                      )}

                      <div className="pt-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() =>
                            handleMoveStatus(
                              item,
                              'atribuida',
                              selectedDriver !== 'todos' ? selectedDriver : 'Motoboy01',
                            )
                          }
                          className="w-full text-xs font-semibold text-blue-600 border-blue-200 hover:bg-blue-50 h-8"
                        >
                          Atribuir a {selectedDriver !== 'todos' ? selectedDriver : 'Motoboy01'}{' '}
                          <ArrowRight className="w-3 h-3 ml-1" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))
              )}
            </div>
          </div>

          <div className="bg-[#f5f3ff]/80 border border-purple-200/80 rounded-2xl p-4 min-h-[520px] flex flex-col space-y-3">
            <div className="flex items-center justify-between px-1 mb-1">
              <h3 className="font-bold text-purple-600 text-sm sm:text-base tracking-tight">
                {selectedDriver === 'todos' ? 'Atribuídas' : selectedDriver}
              </h3>
              <span className="w-6 h-6 rounded-full bg-white text-purple-600 font-bold text-xs flex items-center justify-center border border-purple-200 shadow-sm">
                {driverAssignedDeliveries.length}
              </span>
            </div>

            <div className="space-y-3 flex-1">
              {driverAssignedDeliveries.length === 0 ? (
                <div className="h-32 flex items-center justify-center text-xs text-slate-400 font-medium">
                  Nenhuma entrega
                </div>
              ) : (
                driverAssignedDeliveries.map((item) => (
                  <Card
                    key={item.id}
                    className="bg-white border-l-4 border-l-purple-500 border-purple-200/60 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <CardContent className="p-4 space-y-2">
                      <div className="flex items-start justify-between">
                        <span className="font-bold text-slate-900 text-base">
                          {item.customer_name}
                        </span>
                        {role === 'gestor' && (
                          <div className="flex items-center gap-1">
                            <button
                              onClick={() => handleOpenEdit(item)}
                              className="p-1 text-slate-400 hover:text-purple-600 transition-colors"
                            >
                              <Edit2 className="w-3.5 h-3.5" />
                            </button>
                            <button
                              onClick={() => handleDelete(item.id)}
                              className="p-1 text-slate-400 hover:text-red-600 transition-colors"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        )}
                      </div>

                      <div className="flex items-center justify-between text-xs pt-0.5">
                        <span className="font-extrabold text-slate-900 text-sm">
                          {formatPrice(item.value)}
                        </span>
                        <div className="bg-purple-50 text-purple-700 px-2 py-0.5 rounded text-[11px] font-medium border border-purple-100">
                          {renderPaymentIcon(item.payment_method)}
                        </div>
                      </div>

                      {item.driver_name && (
                        <div className="bg-purple-50/80 px-2 py-1 rounded text-[11px] text-purple-700 font-medium flex items-center gap-1">
                          <User className="w-3 h-3 text-purple-500" /> {item.driver_name}
                        </div>
                      )}

                      {item.phone && (
                        <a
                          href={`tel:${item.phone}`}
                          className="text-slate-600 hover:text-purple-600 text-xs flex items-center gap-1 pt-1 truncate transition-colors"
                        >
                          <Phone className="w-3 h-3 text-slate-400" />
                          <span>{item.phone}</span>
                        </a>
                      )}

                      {item.address && (
                        <p className="text-xs text-slate-500 truncate pt-0.5" title={item.address}>
                          {item.address}
                        </p>
                      )}

                      <div className="pt-2 flex items-center gap-2">
                        <Button
                          size="sm"
                          onClick={() => handleMoveStatus(item, 'andamento')}
                          className="w-full text-xs font-semibold bg-purple-600 hover:bg-purple-700 text-white h-8"
                        >
                          Iniciar Entrega <Truck className="w-3 h-3 ml-1" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))
              )}
            </div>
          </div>

          <div className="bg-[#fffbeb]/80 border border-amber-200/80 rounded-2xl p-4 min-h-[520px] flex flex-col space-y-3">
            <div className="flex items-center justify-between px-1 mb-1">
              <h3 className="font-bold text-amber-600 text-sm sm:text-base tracking-tight">
                Em Andamento
              </h3>
              <span className="w-6 h-6 rounded-full bg-white text-amber-600 font-bold text-xs flex items-center justify-center border border-amber-200 shadow-sm">
                {inProgressDeliveries.length}
              </span>
            </div>

            <div className="space-y-3 flex-1">
              {inProgressDeliveries.length === 0 ? (
                <div className="h-32 flex items-center justify-center text-xs text-slate-400 font-medium">
                  Nenhuma entrega
                </div>
              ) : (
                inProgressDeliveries.map((item) => (
                  <Card
                    key={item.id}
                    className="bg-white border-l-4 border-l-amber-500 border-amber-200/60 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <CardContent className="p-4 space-y-2">
                      <div className="flex items-start justify-between">
                        <span className="font-bold text-slate-900 text-base">
                          {item.customer_name}
                        </span>
                        {role === 'gestor' && (
                          <div className="flex items-center gap-1">
                            <button
                              onClick={() => handleOpenEdit(item)}
                              className="p-1 text-slate-400 hover:text-amber-600 transition-colors"
                            >
                              <Edit2 className="w-3.5 h-3.5" />
                            </button>
                            <button
                              onClick={() => handleDelete(item.id)}
                              className="p-1 text-slate-400 hover:text-red-600 transition-colors"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        )}
                      </div>

                      <div className="flex items-center justify-between text-xs pt-0.5">
                        <span className="font-extrabold text-slate-900 text-sm">
                          {formatPrice(item.value)}
                        </span>
                        <div className="bg-amber-50 text-amber-700 px-2 py-0.5 rounded text-[11px] font-medium border border-amber-100">
                          {renderPaymentIcon(item.payment_method)}
                        </div>
                      </div>

                      {item.driver_name && (
                        <div className="bg-amber-50 px-2 py-1 rounded text-[11px] text-amber-700 font-medium flex items-center gap-1">
                          <User className="w-3 h-3 text-amber-500" /> {item.driver_name}
                        </div>
                      )}

                      {item.phone && (
                        <a
                          href={`tel:${item.phone}`}
                          className="text-slate-600 hover:text-amber-600 text-xs flex items-center gap-1 pt-1 truncate transition-colors"
                        >
                          <Phone className="w-3 h-3 text-slate-400" />
                          <span>{item.phone}</span>
                        </a>
                      )}

                      {item.address && (
                        <p className="text-xs text-slate-500 truncate pt-0.5" title={item.address}>
                          {item.address}
                        </p>
                      )}

                      <div className="pt-2">
                        <Button
                          size="sm"
                          onClick={() => handleMoveStatus(item, 'concluida')}
                          className="w-full text-xs font-semibold bg-emerald-600 hover:bg-emerald-700 text-white h-8"
                        >
                          Concluir Entrega <CheckCircle className="w-3 h-3 ml-1" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))
              )}
            </div>
          </div>

          <div className="bg-[#f0fdf4]/80 border border-emerald-200/80 rounded-2xl p-4 min-h-[520px] flex flex-col space-y-3">
            <div className="flex items-center justify-between px-1 mb-1">
              <h3 className="font-bold text-emerald-600 text-sm sm:text-base tracking-tight">
                Concluída
              </h3>
              <span className="w-6 h-6 rounded-full bg-white text-emerald-600 font-bold text-xs flex items-center justify-center border border-emerald-200 shadow-sm">
                {completedDeliveries.length}
              </span>
            </div>

            <div className="space-y-3 flex-1">
              {completedDeliveries.length === 0 ? (
                <div className="h-32 flex items-center justify-center text-xs text-slate-400 font-medium">
                  Nenhuma entrega concluída
                </div>
              ) : (
                completedDeliveries.map((item) => (
                  <Card
                    key={item.id}
                    className="bg-white border-l-4 border-l-emerald-500 border-emerald-200/60 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <CardContent className="p-4 space-y-2">
                      <div className="flex items-start justify-between">
                        <span className="font-bold text-slate-900 text-base">
                          {item.customer_name}
                        </span>
                        {role === 'gestor' && (
                          <div className="flex items-center gap-1">
                            <button
                              onClick={() => handleOpenEdit(item)}
                              className="p-1 text-slate-400 hover:text-emerald-600 transition-colors"
                            >
                              <Edit2 className="w-3.5 h-3.5" />
                            </button>
                            <button
                              onClick={() => handleDelete(item.id)}
                              className="p-1 text-slate-400 hover:text-red-600 transition-colors"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        )}
                      </div>

                      <div className="flex items-center justify-between text-xs pt-0.5">
                        <span className="font-extrabold text-slate-900 text-sm">
                          {formatPrice(item.value)}
                        </span>
                        <div className="bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded text-[11px] font-medium border border-emerald-100">
                          {renderPaymentIcon(item.payment_method)}
                        </div>
                      </div>

                      {item.phone && (
                        <a
                          href={`tel:${item.phone}`}
                          className="text-slate-600 hover:text-emerald-600 text-xs flex items-center gap-1 pt-1 truncate transition-colors"
                        >
                          <Phone className="w-3 h-3 text-slate-400" />
                          <span>{item.phone}</span>
                        </a>
                      )}

                      {item.address && (
                        <p className="text-xs text-slate-500 truncate pt-0.5" title={item.address}>
                          {item.address}
                        </p>
                      )}

                      <div className="pt-1 flex items-center justify-between text-[11px] text-emerald-600 font-semibold bg-emerald-50 px-2.5 py-1 rounded-md">
                        <span className="flex items-center gap-1">
                          <CheckCircle className="w-3 h-3" /> Finalizada
                        </span>
                        {item.driver_name && <span>{item.driver_name}</span>}
                      </div>
                    </CardContent>
                  </Card>
                ))
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
