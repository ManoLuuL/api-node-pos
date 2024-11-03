const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth");
const categoryController = require("../controllers/category-controller");

/**
 * @swagger
 * /category:
 *   post:
 *     summary: Cria uma nova categoria
 *     tags: [Categorias]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *     responses:
 *       201:
 *         description: Categoria criada com sucesso
 *       400:
 *         description: Erro ao criar categoria
 */
router.post("/category", auth, categoryController.createCategory);

module.exports = router;
