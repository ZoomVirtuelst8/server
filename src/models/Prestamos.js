const { DataTypes, UUIDV4 } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Prestamos",
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
    },
    {
      paranoid: true,
      timestamps: true,
    }
  );
};
