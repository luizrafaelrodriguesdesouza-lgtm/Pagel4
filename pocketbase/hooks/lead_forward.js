onRecordAfterCreateSuccess((e) => {
  const name = e.record.getString('name')
  const email = e.record.getString('email')
  const phone = e.record.getString('phone')
  const company = e.record.getString('company')
  const message = e.record.getString('message')

  // n8n webhook or fallback URL
  const webhookUrl =
    'https://n8n-n8n.sd3ni9.easypanel.host/form/93cbdace-782c-4b58-8d35-6e77ebc589fa'

  try {
    const payload = {
      lead_id: e.record.id,
      name: name,
      email: email,
      phone: phone,
      company: company,
      message: message,
      created: e.record.getString('created'),
      source: 'landing_page_rl4',
      origin: 'auditoria_gratuita',
    }

    const res = $http.send({
      url: webhookUrl,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      timeout: 15,
    })

    if (res.statusCode >= 400) {
      $app.logger().warn('lead n8n forward returned status ' + res.statusCode)
    } else {
      $app.logger().info('lead successfully forwarded to n8n')
    }
  } catch (err) {
    $app.logger().warn('lead n8n forward failed (non-blocking): ' + String(err))
  }

  return e.next()
}, 'leads')
