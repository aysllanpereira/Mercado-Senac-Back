const { Sequelize } = require('sequelize');
const environments = require('./environments');

const env = process.env.NODE_ENV || 'development';
const configEnv = environments[env];

const connectionString = configEnv.DB_HOST
const sequelize = new Sequelize(connectionString, {
  dialect: configEnv.DB_DIALECT,

}
);

sequelize.sync()
  .then(() => {
    console.log('Banco de dados sincronizado com sucesso');
  })
  .catch(err => {
    console.error('Erro ao sincronizar o banco de dados:', err);
  });

module.exports = sequelize;
