routerAdd(
  'PATCH',
  '/backend/v1/settings/notifications',
  (e) => {
    const body = e.requestInfo().body || {}

    const webhookUrl = body.webhook_url || ''
    const preDelivery = body.pre_delivery !== false
    const postDelivery = body.post_delivery !== false

    const value = JSON.stringify({
      webhook_url: webhookUrl,
      pre_delivery: preDelivery,
      post_delivery: postDelivery,
    })

    try {
      let record
      try {
        record = $app.findFirstRecordByData('settings', 'key', 'notifications')
        record.set('value', value)
      } catch (_) {
        const col = $app.findCollectionByNameOrId('settings')
        record = new Record(col)
        record.set('key', 'notifications')
        record.set('value', value)
      }
      $app.save(record)

      return e.json(200, {
        webhook_url: webhookUrl,
        pre_delivery: preDelivery,
        post_delivery: postDelivery,
      })
    } catch (err) {
      return e.json(500, { error: 'failed to save settings' })
    }
  },
  $apis.requireAuth(),
)
