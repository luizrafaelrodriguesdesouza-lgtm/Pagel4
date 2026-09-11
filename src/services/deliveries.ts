import pb from '@/lib/pocketbase/client'

export interface Delivery {
  id: string
  customer_name: string
  value: number
  payment_method: 'dinheiro' | 'pix' | 'cartao'
  address: string
  phone: string
  status: 'pronta' | 'atribuida' | 'andamento' | 'concluida'
  driver_name: string
  created: string
  updated: string
}

export const getDeliveries = async (): Promise<Delivery[]> => {
  return pb.collection('deliveries').getFullList<Delivery>({
    sort: '-created',
  })
}

export const createDelivery = async (data: Partial<Delivery>): Promise<Delivery> => {
  return pb.collection('deliveries').create<Delivery>({
    status: 'pronta',
    driver_name: '',
    ...data,
  })
}

export const updateDelivery = async (id: string, data: Partial<Delivery>): Promise<Delivery> => {
  return pb.collection('deliveries').update<Delivery>(id, data)
}

export const deleteDelivery = async (id: string): Promise<boolean> => {
  return pb.collection('deliveries').delete(id)
}
