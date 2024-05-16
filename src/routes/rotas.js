const express = require('express');
const router = express.Router();
const controladorProduto = require('../controllers/controladorProduto');

router.post('/produtos', controladorProduto.criarProduto);
router.get('/produtos', controladorProduto.obterProdutos);
router.get('/produtos/:produtoId', controladorProduto.obterProduto);

module.exports = router;
