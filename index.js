const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const userRoutes = require("./routes/user-routes");
const productRoutes = require("./routes/product-routes");
const categoryRoutes = require("./routes/category-routes");
const orderRoutes = require("./routes/order-routes");

dotenv.config();
const app = express();

app.use(express.json());


const swaggerOptions = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "API Documentação",
            version: "1.0.2",
            description: "Documentação da API PosGraduacao"
        },
        servers: [
            {
                url: "http://localhost:3100/api"
            }
        ],
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: "http",
                    scheme: "bearer",
                    bearerFormat: "JWT"
                }
            }
        },
        security: [{ bearerAuth: [] }]
    },
    apis: ["./routes/*.js"],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));


app.use("/api", userRoutes);
app.use("/api", productRoutes);
app.use("/api", categoryRoutes);
app.use("/api", orderRoutes);


mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("Conectado ao MongoDB"))
    .catch((err) => console.error("Erro ao conectar ao MongoDB:", err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
