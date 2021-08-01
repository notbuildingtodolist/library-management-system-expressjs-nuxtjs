const { DataTypes } = require("sequelize");
const { constants: { DatabaseTables }, sequelize } = require("../config");

const User = sequelize.define(DatabaseTables.User, {
  id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
  first_name: { type: DataTypes.STRING, allowNull: false },
  last_name: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false },
  password: { type: DataTypes.STRING, allowNull: false },
  is_verified: { type: DataTypes.BOOLEAN, allowNull: true, defaultValue: false },
  is_banned: { type: DataTypes.BOOLEAN, allowNull: true, defaultValue: false },
  date_of_birth: { type: DataTypes.DATE, allowNull: true },
  createdAt: { type: DataTypes.DATE, allowNull: true },
  updatedAt: { type: DataTypes.DATE, allowNull: true },
  deletedAt: { type: DataTypes.DATE, allowNull: true },
});

module.exports = User;
