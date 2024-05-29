const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbConfig');

const Pedido = sequelize.define('Pedido', {

  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  telefone:{
    type: DataTypes.STRING,
    allowNull: false,
  },

  valor_total: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },

  endereco: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  itens:{
    type:DataTypes.TEXT,
    allowNull: true
  },
});

module.exports = Pedido;