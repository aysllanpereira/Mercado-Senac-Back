const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbConfig');

const Produto = sequelize.define('Produto', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  preco: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  foto:{
    type: DataTypes.STRING,
    allowNull: false,

  }, 
  codigo_de_barras: {
    type: DataTypes.NUMBER,
    allowNull: false,
    unique: true,
  }
});

module.exports = Produto;
