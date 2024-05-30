const Pedido = require("../models/modeloPedido");

exports.criarPedido = async (req, res) => {

    try {
      const { name, addres, payment } = req.body;
      const carrinho = req.body.carrinho;
      console.log("aqui = ", req.body)
      let valor = carrinho.reduce((acc, item) => acc + item.preco, 0)
      
      const novoPedido = await Pedido.create({ nome: name, endereco: addres, forma_pagamento: payment, valor_total: valor, itens: JSON.stringify(carrinho) });

      res.status(201).json( novoPedido );
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

  exports.obterPedido = async (req, res) => {
    try {
      const idPedido = req.body.idPedido;
      console.log("pedido = ", req.body)
      if (idPedido) {
        const pedido = await Pedido.findByPk(idPedido)
        res.json(pedido);
        // console.log("aqui ", pedido)
      }else{
        const pedidos = await Pedido.findAll();
        res.json(pedidos);
      }
      res.status(201).json(idPedido);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };