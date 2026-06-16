import pb from '@/lib/pocketbase/client'

export const createLead = (data: {
  name: string
  email: string
  phone: string
  company: string
  message?: string
}) => {
  return pb.collection('leads').create(data)
}
