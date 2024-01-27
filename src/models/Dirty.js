const { DataTypes, UUIDV4 } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Dirty",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      moneda: {
        type: DataTypes.ENUM("dolar", "euro"),
        allowNull: false,
      },
      plata: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
      userName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      mensual: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
    },
    {
      paranoid: true,
      timestamps: true,
    }
  );
};
