const { DataTypes, UUIDV4 } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "UserName",
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
    },
    {
      paranoid: true,
      timestamps: true,
    }
  );
};
