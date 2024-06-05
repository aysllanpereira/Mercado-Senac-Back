const express = require('express');
const router = express.Router();
const controladorProduto = require('../controllers/controladorProduto');
const controladorPedido = require('../controllers/controladorPedido');

router.post('/produtos', controladorProduto.criarProduto);
router.get('/produto', controladorProduto.obterProduto);
router.delete('/produtos', controladorProduto.apagarProduto);
router.put('/produtos', controladorProduto.editarProdutos);

router.post('/pedido', controladorPedido.criarPedido);
router.get('/pedido', controladorPedido.obterPedido);

// router.get('/produto', )

module.exports = router;
