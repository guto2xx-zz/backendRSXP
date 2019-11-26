'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class InscricaoSchema extends Schema {
  up () {
    this.create('inscricaos', (table) => {
      table.increments()
      table
        .integer("evento_id")
        .unsigned()
        .references("id")
        .inTable("eventos")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table
        .integer("aluno_id")
        .unsigned()
        .references("id")
        .inTable("alunos")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table.timestamps()
    })
  }

  down () {
    this.drop('inscricaos')
  }
}

module.exports = InscricaoSchema
