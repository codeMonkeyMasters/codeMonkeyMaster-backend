'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('completedExercises', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "users",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      exerciseId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      references: {
        model: "exercises",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
      },
      timeTaken: {
        type: Sequelize.TIME,
        allowNull: false,
      },
      exp: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('completedExercises');
  }
};