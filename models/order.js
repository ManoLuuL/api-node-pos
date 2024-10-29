const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
	productId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Product",
		required: true,
	},
	userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
	quantity: { type: Number, required: true },
	date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Order", orderSchema);
