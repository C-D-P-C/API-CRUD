// Sección: Importación de módulos y configuraciones iniciales
const express = require("express");

// Sección: Importación de controladores de usuario
const {
  getAll,
  create,
  getOne,
  remove,
  update,
} = require("../controllers/user.controllers");

// Sección: Configuración de las rutas del usuario
const userRouter = express.Router();

// Sección: Definición de las rutas
userRouter
  .route("/") // Ruta raíz para manejar operaciones relacionadas con todos los usuarios
  .get(getAll) // Obtener todos los usuarios
  .post(create); // Crear un nuevo usuario

userRouter
  .route("/:id") // Ruta para manejar operaciones relacionadas con un usuario específico
  .get(getOne) // Obtener un usuario por su ID
  .delete(remove) // Eliminar un usuario por su ID
  .put(update); // Actualizar un usuario por su ID

// Sección: Exportar el enrutador del usuario para su uso en otras partes del programa
module.exports = userRouter;
