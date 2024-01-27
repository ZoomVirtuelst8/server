const { DataTypes, UUIDV4 } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Producto",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      descripcion: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      imagen: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      paranoid: true,
      timestamps: true,
    }
  );
};
