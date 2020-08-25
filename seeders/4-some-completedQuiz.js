'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'completedQuizzes', [
        {
          userId: 1,
          quizQuestionId: 1,
          exp: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      ]
    )},

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('completedQuizzes', null, {});
  }
};
