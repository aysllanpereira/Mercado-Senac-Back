const express = require('express');
const router = express.Router();
const controladorProduto = require('../controllers/controladorProduto');

router.post('/produtos', controladorProduto.criarProduto);
router.get('/produtos', controladorProduto.obterProduto);
router.delete('/produtos', controladorProduto.apagarProduto);
router.put('/produtos', controladorProduto.editarProdutos);

module.exports = router;
