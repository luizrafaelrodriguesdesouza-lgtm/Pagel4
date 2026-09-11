migrate(
  (app) => {
    const collection = new Collection({
      name: 'settings',
      type: 'base',
      listRule: "@request.auth.id != ''",
      viewRule: "@request.auth.id != ''",
      createRule: "@request.auth.id != ''",
      updateRule: "@request.auth.id != ''",
      deleteRule: "@request.auth.id != ''",
      fields: [
        { name: 'key', type: 'text', required: true },
        { name: 'value', type: 'json' },
        { name: 'created', type: 'autodate', onCreate: true, onUpdate: false },
        { name: 'updated', type: 'autodate', onCreate: true, onUpdate: true },
      ],
      indexes: ['CREATE UNIQUE INDEX idx_settings_key ON settings (key)'],
    })
    app.save(collection)

    try {
      const record = new Record(collection)
      record.set('key', 'notifications')
      record.set(
        'value',
        JSON.stringify({ webhook_url: '', pre_delivery: true, post_delivery: true }),
      )
      app.save(record)
    } catch (_) {}
  },
  (app) => {
    const collection = app.findCollectionByNameOrId('settings')
    app.delete(collection)
  },
)
