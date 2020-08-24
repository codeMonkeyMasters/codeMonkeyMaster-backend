'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class exercise extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      exercise.hasMany(models.completedExercise)
      exercise.belongsToMany(models.user, {
        through: "completedExercises",
        key: "exerciseId",
      })
    }
  };
  exercise.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    exp: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    completed: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'exercise',
  });
  return exercise;
};