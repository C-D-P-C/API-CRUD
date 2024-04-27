// Sección: Importación de módulos y configuraciones iniciales
const { DataTypes } = require("sequelize");
const sequelize = require("../utils/connection");

// Sección: Definición del modelo de usuario
const User = sequelize.define("user", {
  // Definición de los campos del modelo de usuario
  first_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  birthday: {
    type: DataTypes.STRING,
  },
});

// Sección: Exportar el modelo de usuario para su uso en otras partes del programa
module.exports = User;
