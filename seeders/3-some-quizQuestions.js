'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'quizQuestions', [
      {
        question: "What does the Map() accomplish?",
        answer: "Creates a new array populated with the results of calling a provided function on every element in the calling array.",
        incorrect1: "Calls a provided callback function once for each element in the array, that transforms the old array.",
        incorrect2: "It calls for all elements of the array including the missing elements and creates a new array with the results.",
        incorrect3: "Populates the original array with the results of calling a provided function on every element in the calling array.",
        exerciseId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: "Which of these answers uses the correct syntax for the Map()",
        answer: "array.map( x => x * a)",
        incorrect1: "array.map(x * a)",
        incorrect2: "array.map(() = x => x * a)",
        incorrect3: "array.map(x = x * a)",
        exerciseId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]
    )},

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('quizQuestions', null, {});
  }
};
