'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'quizQuestions', [
      {
        question: "What does the Map() accomplish?",
        hint: "With the Map() method you create a new array, that is populated with the same amount of elements, but they have transformed, from a certain conditiion.",
        level: "level 1",
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
        hint: "In the Map(), in the () you declare your parameter and then initate your condition.",
        level: "level 1",
        answer: "array.map( x => x * a)",
        incorrect1: "array.map(x * a)",
        incorrect2: "array.map(() = x => x * a)",
        incorrect3: "array.map(x = x * a)",
        exerciseId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: "What does the Filter() accomplish?",
        hint: "Creates a new array, that is populated with only the certain elements meeting the condititon.",
        level: "level 1",
        answer: "filters the data in the array according to a condition",
        incorrect1: "filters the data in the array and always returns one",
        incorrect2: "filters the data in the array and returns the index of all",
        incorrect3: "filters the data and removes elements of the array according to a condition.",
        exerciseId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: `What is the outcome of the following code?`,
        example: `const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
                  const result = words.filter(word => word.length > 6);`,
        hint: "In this case word is each element from words passed as the parameter",
        level: "level 1",
        answer: "Array ['exuberant', 'destruction', 'present’]",
        incorrect1: 'Array ["present"]',
        incorrect2: "Array  [spray, limit, elite, exuberant, destruction, present]",
        incorrect3: "Array [exuberant, destruction, present]",
        exerciseId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: "What does the Find() accomplish?",
        level: "level 1",
        hint: "Finds the element that meets the condition first and returns it.",
        answer: "returns the first element in the array that fits the condition",
        incorrect1: "returns all the elements in the array that fit the condition",
        incorrect2: "finds the correct spot in the array so you can add an element in there.",
        incorrect3: "returns the last element in the array that fits the condition",
        exerciseId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: `What is the outcome of the following code?`,
        example: `const numberOfMonkeys = [ 3, 12, 8, 35, 15 ]
                  const result = numberOfMonkeys.find(monkeys => monkeys > 10)`,
        hint: "As soon as you find one that meets the condition, take it and run.",
        level: "level 1",
        answer: "12",
        incorrect1: "12, 35, 15",
        incorrect2: "12, 8, 35, 15",
        incorrect3: "none of the above ",
        exerciseId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: "What does the Pop() accomplish?",
        level: "level 1",
        hint: "If added to an array it will remove the element at the last index, it can still be retrieved(not gone for ever).",
        answer: "Removes the last item from an array and returns it. ",
        incorrect1: "removes all of the items in the array",
        incorrect2: "adds an item to the end of an array and returns the array.",
        incorrect3: "removes the first item from an array and returns it.",
        exerciseId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: `What is the expected output of the following code?`,
        example: `const kings = [“King Arthur”, “Queen Elizabeth”, "King Willem Alexander”, “The Monkey King”]
                  console.log(kings.pop())`,
        hint: "Find the last index and remove it",
        level: "level 1",
        answer: "The Monkey King",
        incorrect1: "King Arthur",
        incorrect2: '[“King Arthur”, “Queen Elizabeth”, "King Willem Alexander”]',
        incorrect3: '[“Queen Elizabeth”, "King Willem Alexander”, “The Monkey King”]',
        exerciseId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: "What does the Push() accomplish?",
        hint: "With the push() method you add new items to the end of an array. It also returns the new length.",
        level: "level 1",
        answer: "The push() method adds new items to the end of an array",
        incorrect1: "The push() method replaces items at the end of an array",
        incorrect2: "The push() method removes the first items of the array",
        incorrect3: "The push() method removes items at the end of an array.",
        exerciseId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: `What is the outcome of the following code?`,
        example: `let sports = ['soccer', 'baseball']; 
                  let total = sports.push('football', 'swimming');
                  console.log(sports`,
        hint: "With the push method you can add one or more items to the end of an existing array.",
        level: "level 1",
        answer: " ['soccer', 'baseball', 'football', 'swimming']",
        incorrect1: " ['soccer', 'baseball']",
        incorrect2: "['football', 'swimming']",
        incorrect3: "['football', 'swimming', 'soccer', 'baseball']",
        exerciseId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: "What does the Shift() accomplish?",
        hint: "With the shift() method you remove the first item of an array.",
        level: "level 1",
        answer: "The shift() method removes the first item of an array",
        incorrect1: "The shift() method adds an item to the beginning of an array",
        incorrect2: "The shift() method removes the last item of an array",
        incorrect3: "The shift() method replaces the last item of an array",
        exerciseId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: `What is the outcome of the following code?`,
        example: `let animals = ["Macaque", "Baboon", "Gorilla", "Orangutan"];
                  animals.shift();`,
        hint: "The shift() method removes the first item of an array. The rest of the array stays the same.",
        level: "level 1",
        answer: '["Baboon", "Gorilla", "Orangutan"]',
        incorrect1: '["Macaque", "Baboon", "Gorilla"]',
        incorrect2: '["Orangutan", "Baboon", "Gorilla", "Macaque"]',
        incorrect3: '["Gorilla", "Orangutan"]',
        exerciseId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: "What does the unShift() accomplish?",
        hint: "With the unshift() method you add new items to the beginning of an array. It also returns the new length.",
        level: "level 1",
        answer: "The unshift() method adds new items to the beginning of an array",
        incorrect1: "The unshift() method removes the first items of an array",
        incorrect2: "The unshift() method adds new items to the end of an array",
        incorrect3: "The unshift() method removes the last items of an array",
        exerciseId: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: `What is the outcome of the following code?`,
        example: `let jungle = ['Monkey', 'Tiger', 'Bird'];
                  jungle.unshift('Snake', ‘Elephant’, ‘Hippo’)`,
        hint: "The unshift() method adds new items to the beginning of an existing array.",
        level: "level 1",
        answer: "[‘Snake’, ‘Elephant’, ‘Hippo’, ‘Monkey’, ‘Tiger’, ‘Bird’]",
        incorrect1: "['Monkey', 'Tiger', 'Bird']",
        incorrect2: "[‘Snake’, ‘Elephant’, ‘Hippo’]",
        incorrect3: "['Monkey', 'Tiger', 'Bird', ‘Snake’, ‘Elephant’, ‘Hippo’]",
        exerciseId: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: "What does the Sort() accomplish?",
        hint: "By default, the sort() method sorts the values as strings in alphabetical and ascending order. This works well for strings ('Apple' comes before 'Banana'). However, if numbers are sorted as strings, '25' is bigger than '100', because '2' is bigger than '1'. You can fix this by providing a 'compare function'",
        level: "level 1",
        answer: "all of the above",
        incorrect1: "By default, the sort() function sorts values as strings",
        incorrect2: "To sort() numbers you need to add a compare function",
        incorrect3: "By default, the sort() function sorts values as strings",
        exerciseId: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: `What is the outcome of the following code?`,
        example: `let numberOfBananas = [40, 100, 1, 5, 25, 10];
                  numberOfBananas.sort(function(a, b){return a - b});`,
        hint: "n this code we use a compare function with the sort() method. So the numbers will be sorted from the smallest number to the highest.",
        level: "level 1",
        answer: "1, 5, 10, 25, 40, 100",
        incorrect1: "100, 40, 25, 10, 5, 1",
        incorrect2: "1, 10, 100, 25, 40, 5",
        incorrect3: "5, 40, 25, 100, 10, 1",
        exerciseId: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: `Sort the age of the monkeys from oldest to youngest.`,
        example: `const ageMonkeys = [50, 3, 23, 12, 1];
                  answer = [50,3,23,12,1]`,
        hint: "Make sure you write your code like this: array.sort(function(a, b){return YOUR LOGIC})",
        level: "level 2",
        answer: "ageMonkeys.sort(function(a, b){return b - a})",
        exerciseId: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: `Fill in the console.logs so the expected output is correct.`,
        example: `const numbers = [1, 2, 3]
                  console.log(YOU"RE ANSWER)
                  answer = 5
                  console.log(YOU"RE ANSWER)
                  answer = [4,5,1,2,3]`,
        hint: "Make sure you write your code like this: numbers.unshift(4, 5) and numbers",
        level: "level 2",
        answer: "[numbers.unshift(4, 5), numbers)]",
        exerciseId: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: `Use the .shift() method to get “Banana” out of the console.log`,
        example: `let fruits = ["Banana", "Orange", "Apple", "Mango"];
                  answer = "Banana"`,
        hint: "Make sure you write your code like this: array.shift()",
        level: "level 2",
        answer: "fruits.shift()",
        exerciseId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: `There are 2 monkeys in the jungle; Rafiki and King Louie. 
                  Abu, who is 15 years old, wants to join. change the following code so Abu will be added to the list of monkeys in the jungle.`,
        example: `let monkeys = [
          {
            name: 'Rafiki',
            age: 96
          },
          {
            name: 'King Louie',
            age: 50
          }
        ];
        
        // your code here
        
        console.log(monkeys)`,
        hint: `Make sure you write your code like this: 
        array.push({
        YOUR
        LOGIC
        })
        `,
        level: "level 2",
        answer: `monkeys.push({
          name: 'Abu',
          age: 15
        `,
        exerciseId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: `Use the map function to double all of the numbers in the array.`,
        example: `const array = [1,2,3,4]`,
        hint: "Make sure you write your code like this: array.map(item => item YOUR LOGIC)",
        level: "level 2",
        answer: "const answer = array.map(item => item * 2)",
        exerciseId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: `Monkeys love bananas! And hate broccoli! Please use filter to get only the bananas out of the array.`,
        example: `const food = [“banana", “broccoli”, “banana”, “broccoli”, “banana”, “broccoli”]`,
        hint: `Hint: Make sure you write your code like this: const answer = food.filter(item => item YOUR LOGIC)`,
        level: "level 2",
        answer: `const answer = food.filter(item => item === “banana”)`,
        exerciseId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: `How many monkeys do we need to unscrew a light bulb? - more than 5 apparently- Please get us more than 5 monkeys out of the array.`,
        example: `const numberOfMonkeys= [3, 5, 7, 2, 9]`,
        hint: `you have to write your code like this: const answer = array.find(item => item YOUR LOGIC)`,
        level: "level 2",
        answer: `const answer = numberOfMonkeys.find(item => item > 5)`,
        exerciseId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: `Monkey Popo has levelled up his skills and now finally has become a Code Master! Please remove his name from the list of code monkeys!`,
        example: `const listOfMonkeys = [“Rafiki”, “Bubbles”, “Curious George”, “Popo"]`,
        hint : "You have to write your code like this: console.log(array.pop())",
        level: "level 2",
        answer: `console.log(listOfMonkeys.pop())`,
        exerciseId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]
    )},

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('quizQuestions', null, {});
  }
};
