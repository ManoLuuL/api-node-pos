const Order = require("../models/order-model");

exports.getUserOrders = async (req, res) => {
	try {
		const orders = await Order.find({ userId: req.user._id }).populate(
			"productId",
			"name price",
		);
		res.json(orders);
	} catch (err) {
		res
			.status(500)
			.json({ message: "Erro ao buscar pedidos", error: err.message });
	}
};

exports.createOrder = async (req, res) => {
	try {
		const { productId, quantity } = req.body;
		const order = new Order({ productId, quantity, userId: req.user._id });
		await order.save();
		res.status(201).json(order);
	} catch (err) {
		res
			.status(400)
			.json({ message: "Erro ao criar pedido", error: err.message });
	}
};
