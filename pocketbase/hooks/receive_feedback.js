routerAdd('POST', '/backend/v1/deliveries/feedback', (e) => {
  const body = e.requestInfo().body || {}

  const deliveryId = body.delivery_id
  const rating = body.rating
  const comment = body.comment || ''

  if (!deliveryId) return e.badRequestError('delivery_id is required')

  const ratingNum = Number(rating)
  if (!Number.isInteger(ratingNum) || ratingNum < 1 || ratingNum > 5) {
    return e.badRequestError('rating must be an integer between 1 and 5')
  }

  let deliveryRecord
  try {
    deliveryRecord = $app.findRecordById('deliveries', deliveryId)
  } catch (_) {
    return e.notFoundError('delivery not found')
  }

  try {
    const col = $app.findCollectionByNameOrId('feedback')
    const record = new Record(col)
    record.set('delivery', deliveryRecord.id)
    record.set('rating', ratingNum)
    record.set('comment', comment)
    $app.save(record)

    return e.json(200, { success: true, id: record.id })
  } catch (err) {
    return e.json(500, { error: 'failed to create feedback' })
  }
})
