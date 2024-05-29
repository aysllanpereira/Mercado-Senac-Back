const Pedido = require("../models/modeloPedido");

exports.criarPedido = async (req, res) => {
    try {
      
      const { nome, telefone, carrinho } = req.body;
      let valor_total = carrinho.reduce((acc, item) => acc + item.precoUnitario, 0)
      
      const novoPedido = await Pedido.create({ nome, telefone, valor_total, endereco, itens: JSON.stringify(carrinho) });

      res.status(201).json( novoPedido );
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

  exports.obterPedido = async (req, res) => {
    try {
      const idPedido = req.body.idPedido;
  
      if (idPedido) {
        const pedido = await Pedido.findByPk(idPedido)
        res.json(pedido);
      }else{
        const pedidos = await Pedido.findAll();
        res.json(pedidos);
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
