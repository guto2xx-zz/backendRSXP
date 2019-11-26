'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AlunoSchema extends Schema {
  up () {
    this.create('alunos', (table) => {
      table.increments()
      table
        .integer("user_id")
        .unsigned()
        .references("id")
        .inTable("users")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table.string('nome', 254)
      table.integer('idade')
      table.string('cpf', 11)
      table.text('bio')
      table.string('avatar', 500)
      table.timestamps()
    })
  }

  down () {
    this.drop('alunos')
  }
}

module.exports = AlunoSchema
