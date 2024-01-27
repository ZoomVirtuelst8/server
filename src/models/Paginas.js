const { DataTypes, UUIDV4 } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Paginas",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      nombrePagina: {
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
