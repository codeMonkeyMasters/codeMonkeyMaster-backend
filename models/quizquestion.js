'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class quizQuestion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      quizQuestion.belongsToMany(models.user, {
        through: "completedExercises",
        key: "quizQuestionId",
      })
      quizQuestion.hasOne(models.exercise)
    }
  };
  quizQuestion.init({
    question: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    level: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    answer: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    incorrect1: {
      type: DataTypes.TEXT,
    },
    incorrect2: {
      type: DataTypes.TEXT,
    },
    incorrect3: {
      type: DataTypes.TEXT,
    },
    exerciseId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "exercises",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    }
  }, {
    sequelize,
    modelName: 'quizQuestion',
  });
  return quizQuestion;
};