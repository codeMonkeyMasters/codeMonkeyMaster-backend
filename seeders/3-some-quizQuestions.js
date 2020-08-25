'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'quizQuestions', [
      {
        question: "What is my name?",
        answer: "darian",
        incorrect1: "Susuan",
        incorrect2: "Brad",
        incorrect3: "Brent",
        exerciseId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]
    )},

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('quizQuestions', null, {});
  }
};
