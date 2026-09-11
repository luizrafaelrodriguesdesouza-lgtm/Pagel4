routerAdd(
  'GET',
  '/backend/v1/settings/notifications',
  (e) => {
    try {
      const settingsRecord = $app.findFirstRecordByData('settings', 'key', 'notifications')
      const val = JSON.parse(settingsRecord.getString('value') || '{}')
      return e.json(200, {
        webhook_url: val.webhook_url || '',
        pre_delivery: val.pre_delivery !== false,
        post_delivery: val.post_delivery !== false,
      })
    } catch (_) {
      return e.json(200, {
        webhook_url: '',
        pre_delivery: true,
        post_delivery: true,
      })
    }
  },
  $apis.requireAuth(),
)
