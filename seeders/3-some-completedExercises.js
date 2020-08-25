'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'completedExercises', [
      {
        userId: 1,
        exerciseId: 3,
        quizQuestionId: 23,
        timeTaken: "00:05:00",
        exp: 40,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 1,
        exerciseId: 2,
        quizQuestionId: 22,
        timeTaken: "00:15:00",
        exp: 20,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 2,
        exerciseId: 1,
        quizQuestionId: 21,
        timeTaken: "00:02:35",
        exp: 50,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]
     
    )},

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('completedExercises', null, {});
  }
};
