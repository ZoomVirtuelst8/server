const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      admin: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      correo: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      apellido: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      cedula: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      fechaDeNacimiento: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      telefono: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      whatsapp: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      direccion: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      nacionalidad: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      paranoid: true,
      timestamps: true,
    }
  );
};
