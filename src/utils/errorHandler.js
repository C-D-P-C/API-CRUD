// Sección: Definición del manejador de errores
const errorHandler = (error, _req, res, _next) => {
  // Manejo de errores de validación de Sequelize
  if (error.name === "SequelizeValidationError") {
    const errObj = {};
    error.errors.map((er) => {
      errObj[er.path] = er.message;
    });
    return res.status(400).json(errObj);
  }
  // Manejo de errores de restricción de clave externa de Sequelize
  if (error.name === "SequelizeForeignKeyConstraintError") {
    return res.status(400).json({
      message: error.message,
      error: error.parent.detail,
    });
  }
  // Manejo de otros errores de base de datos de Sequelize
  if (error.name === "SequelizeDatabaseError") {
    return res.status(400).json({
      message: error.message,
    });
  }
  // Manejo de otros errores
  return res.status(500).json({
    message: error.message,
    error: error,
  });
};

// Sección: Exportar el manejador de errores para su uso en otras partes del programa
module.exports = errorHandler;
