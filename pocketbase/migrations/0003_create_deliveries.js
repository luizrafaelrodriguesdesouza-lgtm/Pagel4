migrate(
  (app) => {
    const collection = new Collection({
      name: 'deliveries',
      type: 'base',
      listRule: '',
      viewRule: '',
      createRule: '',
      updateRule: '',
      deleteRule: '',
      fields: [
        { name: 'customer_name', type: 'text', required: true },
        { name: 'value', type: 'number', required: true },
        {
          name: 'payment_method',
          type: 'select',
          required: true,
          values: ['dinheiro', 'pix', 'cartao'],
          maxSelect: 1,
        },
        { name: 'address', type: 'text', required: false },
        { name: 'phone', type: 'text', required: false },
        {
          name: 'status',
          type: 'select',
          required: false,
          values: ['pronta', 'atribuida', 'andamento', 'concluida'],
          maxSelect: 1,
        },
        { name: 'driver_name', type: 'text', required: false },
        { name: 'created', type: 'autodate', onCreate: true, onUpdate: false },
        { name: 'updated', type: 'autodate', onCreate: true, onUpdate: true },
      ],
    })
    app.save(collection)
  },
  (app) => {
    const collection = app.findCollectionByNameOrId('deliveries')
    app.delete(collection)
  },
)
