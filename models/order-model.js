const {Schema, model} = require("mongoose");

const orderSchema = new Schema({
	productId: {
		type: Schema.Types.ObjectId,
		ref: "Product",
		required: true,
	},
	userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
	quantity: { type: Number, required: true },
	date: { type: Date, default: Date.now },
});

module.exports = model("Order", orderSchema);
