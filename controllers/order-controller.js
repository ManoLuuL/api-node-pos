const Order = require("../models/order-model");

exports.getUserOrders = async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.user._id })
      .populate("products.productId", "name price")
      .exec();
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: "Erro ao buscar pedidos", error: err.message });
  }
};

exports.createOrder = async (req, res) => {
  try {
    const { products } = req.body;
    const order = new Order({ products, userId: req.user._id });
    await order.save();
    res.status(201).json(order);
  } catch (err) {
    res.status(400).json({ message: "Erro ao criar pedido", error: err.message });
  }
};