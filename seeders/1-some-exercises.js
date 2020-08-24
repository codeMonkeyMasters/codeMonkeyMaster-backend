'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'exercises', [
        {
          name: "Map method",
          content: `The map() method creates a new array with the results of calling a function for every array element. 
                    The map() method calls the provided function once for each element in an array, in order. 
                    Note: map() does not execute the function for array elements without values.`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Filter method",
          content: `The filter() method creates an array filled with all array elements that pass a test (provided as a function). 
                    Note: filter() does not execute the function for array elements without values. Note: filter() does not change the original array.`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Find method",
          content: `If it finds an array element where the function returns a true value, find() returns the value of that array element (and does not check the remaining values).
                    Otherwise it returns undefined.`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Pop method",
          content: `The pop method removes the last element from an array and returns that value to the caller. 
                    Pop is intentionally generic; this method can be called or applied to objects resembling arrays.`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Push method",
          content: `The push() method adds new items to the end of an array, and returns the new length. 
                    Note: The new item(s) will be added at the end of the array. Note: This method changes the length of the array.`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Shift method",
          content: `The shift method removes the element at the zeroeth index and shifts the values at consecutive indexes down, 
                    then returns the removed value. 
                    If the length property is 0, undefined is returned. shift is intentionally generic; this method can be called or applied to objects resembling arrays.`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "unShift method",
          content: `The unshift() method adds new items to the beginning of an array, and returns the new length. 
                    Note: This method changes the length of an array.`,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Sort Method",
          content: `The sort() method sorts the items of an array. 
                    The sort order can be either alphabetic or numeric, and either ascending (up) or descending (down). 
                    By default, the sort() method sorts the values as strings in alphabetical and ascending order.`,
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      ]
    )},

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('exercises', null, {});
  }
};
