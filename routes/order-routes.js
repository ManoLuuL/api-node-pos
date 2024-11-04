const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth");
const orderController = require("../controllers/order-controller");

/**
 * @swagger
 * /orders:
 *   get:
 *     summary: Obtém pedidos do usuário autenticado
 *     tags: [Pedidos]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de pedidos
 *       500:
 *         description: Erro ao buscar pedidos
 */
router.get("/orders", auth, orderController.getUserOrders);

/**
 * @swagger
 * /orders:
 *   post:
 *     summary: Cria um novo pedido com vários produtos
 *     tags: [Pedidos]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               products:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     productId:
 *                       type: string
 *                       description: ID do produto
 *                     quantity:
 *                       type: number
 *                       description: Quantidade do produto
 *     responses:
 *       201:
 *         description: Pedido criado com sucesso
 *       400:
 *         description: Erro ao criar pedido
 */
router.post("/orders", auth, orderController.createOrder);

module.exports = router;
