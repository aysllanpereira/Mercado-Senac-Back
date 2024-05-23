const { json } = require('sequelize');
const Produto = require('../models/modeloProduto');

const criarProduto = async (req, res) => {
  try {
    
    req.body.forEach( async prod => {
      const novoProduto = await Produto.create(prod);
      // console.log(novoProduto)
    });

    res.status(201).json({res: "ok"});
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const obterProduto = async (req, res) => {
  try {
    const idProduto = req.body.idProduto;
    const nome = req.query.nome;
    
    if (idProduto) {
      const produto = await Produto.findByPk(idProduto);
      res.json(produto);
    } else if(nome) {
      const produto = await Produto.findOne({ where: { nome: nome}});
      res.json(produto)
    } else {
      const produtos = await Produto.findAll();
      res.json(produtos);
    }
    
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const apagarProduto = async (req, res) => {
  try {
    const { idProduto } = req.body;
    
    if(!idProduto) throw new Error ("Id do produto é obrigatório");
    
    const produto = await Produto.findByPk(idProduto);

    if(!produto) throw new Error ("Produto não encontrado");

    produto.destroy({
      where: {
        id: idProduto,
      },
    });

    res.status(201).json(produto);
  } catch (error) {
    res.status(400).json({error: error.message})
  }
  
}

const editarProdutos = async (req, res) => {
  try {
    const { id, nome, preco, foto } = req.body;

    if(!id && !nome && !preco && !foto) throw new Error ("id, nome. preco são obrigatórios");

    const produto = await Produto.findByPk(id);

    if(!produto) throw new Error ("Produto não encontrado");
    
    await produto.update ({
      nome: nome || produto.nome,
      preco: preco || produto.preco,
      foto: foto || produto.foto
    })
    console.log("foto = ", produto.foto)
    
    res.status(201).json(produto);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { criarProduto, obterProduto, apagarProduto, editarProdutos }