const { DataTypes, UUIDV4 } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Moneda",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      descripcion: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      dolar: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      euro: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
      libra: {
        type: DataTypes.DOUBLE,
        allowNull: true,
      },
    },
    {
      paranoid: true,
      timestamps: true,
    }
  );
};
