const Product = require("../models/Product");

exports.getAllProducts = async (req, res) => {
	try {
		const products = await Product.find().populate("categoryId", "name");
		res.json(products);
	} catch (err) {
		res
			.status(500)
			.json({ message: "Erro ao buscar produtos", error: err.message });
	}
};

exports.updateProduct = async (req, res) => {
	try {
		const { id } = req.params;
		const product = await Product.findByIdAndUpdate(id, req.body, {
			new: true,
		});
		if (!product)
			return res.status(404).json({ message: "Produto não encontrado" });
		res.json(product);
	} catch (err) {
		res
			.status(500)
			.json({ message: "Erro ao atualizar produto", error: err.message });
	}
};
