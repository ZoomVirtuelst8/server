const { DataTypes, UUIDV4 } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Bonga",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      userName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      fecha: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      dolares: {
        type: DataTypes.DOUBLE,
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
