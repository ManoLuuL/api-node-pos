const Product = require("../models/product-model");

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
        if (!req.user.isAdmin) {
            return res.status(403).json({ message: "Acesso negado: usuário não é administrador" });
        }
        const { id } = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body, { new: true });
        if (!product) return res.status(404).json({ message: "Produto não encontrado" });
        res.json(product);
    } catch (err) {
        res.status(500).json({ message: "Erro ao atualizar produto", error: err.message });
    }
};

exports.createProduct = async (req, res) => {
    try {
        const product = new Product(req.body);
        await product.save();
        res.status(201).json(product);
    } catch (err) {
        res.status(400).json({ message: "Erro ao criar produto", error: err.message });
    }
};

exports.deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndDelete(id);
        if (!product) return res.status(404).json({ message: "Produto não encontrado" });
        res.json({ message: "Produto deletado com sucesso" });
    } catch (err) {
        res.status(500).json({ message: "Erro ao deletar produto", error: err.message });
    }
};