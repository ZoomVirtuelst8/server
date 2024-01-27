const { DataTypes, UUIDV4 } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Comentario",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      comment: {
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
