const { DataTypes, UUIDV4 } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Porcentaje",
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
      inicial: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      final: {
      type: DataTypes.FLOAT,
      allowNull: false,
      },
      meta: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
    },
    {
      paranoid: true,
      timestamps: true,
    }
  );
};
