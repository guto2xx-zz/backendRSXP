'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Empresa extends Model {
    user() {
        return this.belongsTo("App/Models/User");
    }

    eventos () {
        return this.hasMany('App/Models/Evento')
    }
}

module.exports = Empresa
