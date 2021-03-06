"use strict";

const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      user.belongsToMany(models.exercise, {
        through: "completedExercises",
        key: "userId",
      })
      user.belongsToMany(models.quizQuestion, {
        through: "completedExercises",
        key: "quizQuestionId",
      })
    }
  }
  user.init(
    {
      fullName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      ranking: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      totalExp: {
        type: DataTypes.INTEGER,
        allowNull: false,
      }
    },
    {
      sequelize,
      modelName: "user",
    }
  );
  return user;
};
