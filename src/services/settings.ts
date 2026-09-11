import pb from '@/lib/pocketbase/client'

export interface NotificationSettings {
  webhook_url: string
  pre_delivery: boolean
  post_delivery: boolean
}

export const getNotificationSettings = (): Promise<NotificationSettings> =>
  pb.send('/backend/v1/settings/notifications', { method: 'GET' })

export const updateNotificationSettings = (
  data: NotificationSettings,
): Promise<NotificationSettings> =>
  pb.send('/backend/v1/settings/notifications', {
    method: 'PATCH',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' },
  })
