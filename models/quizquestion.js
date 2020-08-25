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
      // define association here
    }
  };
  quizQuestion.init({
    question: DataTypes.TEXT,
    answer: DataTypes.TEXT,
    incorrect1: DataTypes.TEXT,
    incorrect2: DataTypes.TEXT,
    incorrect3: DataTypes.TEXT,
    exerciseId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'quizQuestion',
  });
  return quizQuestion;
};