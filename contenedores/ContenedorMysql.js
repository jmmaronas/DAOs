class ContenedorMySQL {
  constructor (options, table) {
    this.knex = require('knex')(options)
    this.table = table
  }

  findAll() {
    return this.knex
      .from(this.table)
      .select('*')
      .then(items => {
        console.log(items)
        return items
      })
  }

  find(id) {
    return this.knex
      .from(this.table)
      .select({id:id})      
      .then(items => {
        console.log(items)
        return items
      })

  }

  create(data) {
    console.log({ data })
    return this.knex(this.table)
      .insert(data)
  }

  update(id, data) {
    return this.knex
      .from(this.table)
      .where({id:id})
      .update(data)
      .then(items => {
        console.log(items)
        return items
      })
  }

  delete(id) {
    return this.knex
      .from(this.table)
      .where({id:id})
      .delete()
      .then(items => {
        console.log(items)
        return items
      })
  }
}

module.exports = ContenedorMySQL