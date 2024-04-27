// Sección: Importación de módulos y configuraciones iniciales
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const router = require("./routes");
const errorHandler = require("./utils/errorHandler");
require("dotenv").config();

const app = express();

app.use(express.json());
// Middleware para establecer encabezados de seguridad con Helmet
app.use(
  helmet({
    crossOriginResourcePolicy: false,
  })
);
// Middleware para habilitar el intercambio de recursos entre orígenes (CORS)
app.use(cors());

// Montaje del enrutador principal en la ruta /api/v1
app.use("/api/v1", router);
// Ruta de inicio
app.get("/", (req, res) => {
  return res.send("Welcome to express!");
});

// Sección: Middleware de manejo de errores

app.use(errorHandler);

module.exports = app;
