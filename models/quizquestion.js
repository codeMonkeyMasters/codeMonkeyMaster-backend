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
        through: "completedQuizzes",
        key: "quizQuestionId",
      })
    }
  };
  quizQuestion.init({
    question: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    answer: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    incorrect1: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    incorrect2: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    incorrect3: {
      type: DataTypes.TEXT,
      allowNull: false,
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