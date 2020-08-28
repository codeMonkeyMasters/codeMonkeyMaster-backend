require("dotenv").config();

module.exports = {
  development: {
    url: process.env.DATABASE_URL_DEV,
    dialect: "postgres",
    operatorsAliases: "0",
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "postgres",
    operatorsAliases: "0",
  },
  production: {
    url: process.env.DATABASE_URL_DEV,
    dialect: "postgres",
    operatorsAliases: "0",
  },
};
