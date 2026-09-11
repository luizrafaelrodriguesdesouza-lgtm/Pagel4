onRecordAfterUpdateSuccess((e) => {
  const oldStatus = e.record.original().getString('status')
  const newStatus = e.record.getString('status')

  if (oldStatus === newStatus) return e.next()

  let webhookUrl = ''
  let preDeliveryEnabled = true
  let postDeliveryEnabled = true

  try {
    const settingsRecord = $app.findFirstRecordByData('settings', 'key', 'notifications')
    if (settingsRecord) {
      const val = JSON.parse(settingsRecord.getString('value') || '{}')
      webhookUrl = val.webhook_url || ''
      if (val.pre_delivery === false) preDeliveryEnabled = false
      if (val.post_delivery === false) postDeliveryEnabled = false
    }
  } catch (_) {}

  if (!webhookUrl) {
    webhookUrl = $secrets.get('whatsapp_notification_webhook_url') || ''
  }

  if (!webhookUrl) return e.next()

  const customerName = e.record.getString('customer_name')
  const phone = e.record.getString('phone')

  let message = ''
  if (newStatus === 'andamento' && preDeliveryEnabled) {
    message = 'A sua entrega é a próxima a ser realizada! Prepare-se.'
  } else if (newStatus === 'concluida' && postDeliveryEnabled) {
    message = 'Sua entrega foi concluída! Como foi a experiência? Responda com uma nota de 1 a 5.'
  }

  if (!message) return e.next()

  try {
    const res = $http.send({
      url: webhookUrl,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        customer_name: customerName,
        phone: phone,
        delivery_status: newStatus,
        message: message,
      }),
      timeout: 15,
    })

    if (res.statusCode >= 400) {
      $app.logger().error('delivery notification webhook returned error', 'status', res.statusCode)
    }
  } catch (err) {
    $app.logger().error('delivery notification failed', 'error', String(err))
  }

  return e.next()
}, 'deliveries')
