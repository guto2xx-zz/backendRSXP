'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EventoSchema extends Schema {
  up () {
    this.create('eventos', (table) => {
      table.increments()
      table
        .integer("empresa_id")
        .unsigned()
        .references("id")
        .inTable("empresas")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
        table.string('location', 80)
        table.string('nome', 254)
        table.text('bio')
        table.string('endereço', 254)
        table.date("inicio")
        table.date("fim")
        table.integer("limite_alunos")
      table.timestamps()
    })
  }

  down () {
    this.drop('eventos')
  }
}

module.exports = EventoSchema
