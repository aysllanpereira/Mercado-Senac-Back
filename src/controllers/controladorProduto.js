const Produto = require('../models/modeloProduto');
const criarProduto = async (req, res) => {
  try {
    
    const { nome, preco, foto } = req.body;

    const novoProduto = await Produto.create({ nome, preco, foto });

    res.status(201).json(novoProduto);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const obterProduto = async (req, res) => {
  try {
    const idProduto = req.params.produtoId;

    if (!idProduto) throw new Error('ID do produto é obrigatório');

    const produto = await Produto.findByPk(idProduto);
    res.json(produto);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


const obterProdutos = async (req, res) => {
  try {
    const produtos = await Produto.findAll();
    res.json(produtos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { criarProduto , obterProdutos, obterProduto}