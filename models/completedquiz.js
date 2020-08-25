'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class completedQuiz extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  completedQuiz.init({
    userId: DataTypes.INTEGER,
    quizQuestionId: DataTypes.INTEGER,
    exp: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'completedQuiz',
  });
  return completedQuiz;
};