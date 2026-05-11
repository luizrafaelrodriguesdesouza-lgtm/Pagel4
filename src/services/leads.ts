import pb from '@/lib/pocketbase/client'

export const createLead = (data: {
  name: string
  email: string
  company: string
  phone: string
  message?: string
}) => pb.collection('leads').create(data)
