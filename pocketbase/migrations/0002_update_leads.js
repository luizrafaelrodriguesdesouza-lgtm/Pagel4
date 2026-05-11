migrate(
  (app) => {
    const col = app.findCollectionByNameOrId('leads')

    if (!col.fields.getByName('phone')) {
      col.fields.add(new TextField({ name: 'phone', required: true }))
    }

    const msgField = col.fields.getByName('message')
    if (msgField) {
      msgField.required = false
    }

    const companyField = col.fields.getByName('company')
    if (companyField) {
      companyField.required = true
    }

    app.save(col)
  },
  (app) => {
    const col = app.findCollectionByNameOrId('leads')

    col.fields.removeByName('phone')

    const msgField = col.fields.getByName('message')
    if (msgField) {
      msgField.required = true
    }

    const companyField = col.fields.getByName('company')
    if (companyField) {
      companyField.required = false
    }

    app.save(col)
  },
)
