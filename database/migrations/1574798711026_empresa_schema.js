'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EmpresaSchema extends Schema {
  up () {
    this.create('empresas', (table) => {
      table.increments()
      table
        .integer("user_id")
        .unsigned()
        .references("id")
        .inTable("users")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
        table.string('nome_fantasia', 254)
        table.string('razao_social', 254)
        table.string('cnpj', 20)
        table.string('contato')
        table.string('telefone', 20)
        table.string('email_contato', 254)
        table.text('bio')
        table.string('avatar', 500)
      table.timestamps()
    })
  }

  down () {
    this.drop('empresas')
  }
}

module.exports = EmpresaSchema
