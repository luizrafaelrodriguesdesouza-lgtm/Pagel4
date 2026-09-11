migrate(
  (app) => {
    const deliveriesId = app.findCollectionByNameOrId('deliveries').id

    const collection = new Collection({
      name: 'feedback',
      type: 'base',
      listRule: '',
      viewRule: '',
      createRule: '',
      updateRule: null,
      deleteRule: null,
      fields: [
        {
          name: 'delivery',
          type: 'relation',
          required: true,
          collectionId: deliveriesId,
          cascadeDelete: true,
          maxSelect: 1,
        },
        { name: 'rating', type: 'number', required: true, min: 1, max: 5, onlyInt: true },
        { name: 'comment', type: 'text', required: false },
        { name: 'created', type: 'autodate', onCreate: true, onUpdate: false },
        { name: 'updated', type: 'autodate', onCreate: true, onUpdate: true },
      ],
      indexes: ['CREATE INDEX idx_feedback_delivery ON feedback (delivery)'],
    })
    app.save(collection)
  },
  (app) => {
    const collection = app.findCollectionByNameOrId('feedback')
    app.delete(collection)
  },
)
