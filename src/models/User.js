const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "User",
    {
      id: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
      },
      admin: {
        type: DataTypes.BOOLEAN,
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
      password: {
      type: DataTypes.STRING,
      allowNull: false,
      },
      session: {
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
