"use strict";
const bcrypt = require("bcrypt");
const { SALT_ROUNDS } = require("../config/constants");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          fullName: "testuser",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS107CDBZ5T8vEcN6nhUbhOp2xngySEndTw_g&usqp=CAU",
          email: "test@test.com",
          password: bcrypt.hashSync("test1234", SALT_ROUNDS),
          ranking: "Coder",
          totalExp: 60,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullName: "dummy",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS107CDBZ5T8vEcN6nhUbhOp2xngySEndTw_g&usqp=CAU",
          email: "a@a.com",
          password: bcrypt.hashSync("a", SALT_ROUNDS),
          ranking: "Code Monkey",
          totalExp: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
