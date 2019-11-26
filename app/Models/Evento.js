'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Evento extends Model {
    empresa() {
        return this.belongsTo("App/Models/Empresa");
    }

    // inscricao () {
    //     return this.hasMany('App/Models/Inscricao')
    // }
}

module.exports = Evento
