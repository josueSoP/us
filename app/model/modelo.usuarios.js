const {DataTypes, Model} = require('sequelize')
const sequelize = require('../../db/db')

//Definir mi Modelo con que voy a trabajar
const Usuarios = sequelize.define('usuarios', {

},{
  timestamps: true
})