const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth");

const userController = require("../controllers/user-controller");
const productController = require("../controllers/product-controller");
const categoryController = require("../controllers/category-controller");
const orderController = require("../controllers/order-controller");

router.post("/register", userController.register);
router.post("/login", userController.login);
router.get("/products", productController.getAllProducts);
router.put("/products/:id", productController.updateProduct);
router.post("/category", auth, categoryController.createCategory);
router.get("/orders", auth, orderController.getUserOrders);
router.post("/orders", auth, orderController.createOrder);

module.exports = router;
