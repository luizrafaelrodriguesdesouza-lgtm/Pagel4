migrate(
  (app) => {
    const col = app.findCollectionByNameOrId('deliveries')

    const initialDeliveries = [
      {
        customer_name: 'Carol',
        value: 43.34,
        payment_method: 'dinheiro',
        address: 'Rua Valdir de Oliveira numero 26 jardins...',
        phone: '+5511987654321',
        status: 'pronta',
        driver_name: '',
      },
      {
        customer_name: 'Francisco',
        value: 34.54,
        payment_method: 'cartao',
        address: 'rua jose eleoterio numero 34 campo lin...',
        phone: '+5511976543210',
        status: 'pronta',
        driver_name: '',
      },
      {
        customer_name: 'Camila Rocha',
        value: 72.5,
        payment_method: 'pix',
        address: 'Rua Estados Unidos, 1500, Jardim Amér...',
        phone: '+5511965432109',
        status: 'atribuida',
        driver_name: 'Motoboy01',
      },
      {
        customer_name: 'Luiz Rafael',
        value: 98.95,
        payment_method: 'cartao',
        address: 'Rua Teresinha evangelista numero 66 ja...',
        phone: '+5521996613737',
        status: 'concluida',
        driver_name: 'Motoboy01',
      },
    ]

    for (const item of initialDeliveries) {
      try {
        app.findFirstRecordByData('deliveries', 'customer_name', item.customer_name)
      } catch (_) {
        const record = new Record(col)
        record.set('customer_name', item.customer_name)
        record.set('value', item.value)
        record.set('payment_method', item.payment_method)
        record.set('address', item.address)
        record.set('phone', item.phone)
        record.set('status', item.status)
        record.set('driver_name', item.driver_name)
        app.save(record)
      }
    }
  },
  (app) => {
    // down migration
  },
)
