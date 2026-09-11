import pb from '@/lib/pocketbase/client'

export interface Feedback {
  id: string
  delivery: string
  rating: number
  comment: string
  created: string
  updated: string
}

export const submitFeedback = (data: {
  delivery_id: string
  rating: number
  comment?: string
}): Promise<{ success: boolean; id: string }> =>
  pb.send('/backend/v1/deliveries/feedback', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' },
  })

export const getFeedbackByDelivery = async (deliveryId: string): Promise<Feedback[]> => {
  return pb.collection('feedback').getFullList<Feedback>({
    filter: `delivery = "${deliveryId}"`,
    sort: '-created',
  })
}
