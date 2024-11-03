const {Schema, model} = require("mongoose");

const productSchema = new Schema({
	name: { type: String, required: true },
	price: { type: Number, required: true },
	categoryId: {
		type: Schema.Types.ObjectId,
		ref: "Category",
		required: true,
	},
});

module.exports = model("Product", productSchema);
