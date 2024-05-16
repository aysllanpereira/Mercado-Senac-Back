const express = require('express');
const app = express();
const rotas = require('./src/routes/rotas');
const environments = require('./src/config/environments');

app.use(express.json());

// Rotas da API
app.use('/api', rotas);

const PORTA = environments.PORTA;


(async () => {
  try {

    app.listen(PORTA, () => {
      console.log(`Servidor rodando em http://localhost:${PORTA}`);
    });
  } catch (error) {
    console.error('Erro ao sincronizar o banco de dados:', error);
  }
})();
