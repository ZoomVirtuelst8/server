const { DataTypes, UUIDV4 } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Ventas",
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
      userId: {
      type: DataTypes.STRING,
      allowNull: false,
      },
      cuotas: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      },
      valor: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      },
      nombre: {
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
