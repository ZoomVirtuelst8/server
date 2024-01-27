const { DataTypes, UUIDV4 } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Compras",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      cantidad: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
      precioCompra: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
      precioVentaDiferido: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
      precioVenta: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
    },
    {
      paranoid: true,
      timestamps: true,
    }
  );
};
