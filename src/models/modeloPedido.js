const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbConfig');

const Pedido = sequelize.define('Pedido', {

  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  valor_total: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },

  endereco: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  forma_pagamento: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  itens: {
    type:DataTypes.TEXT,
    allowNull: true
  },
});

module.exports = Pedido;