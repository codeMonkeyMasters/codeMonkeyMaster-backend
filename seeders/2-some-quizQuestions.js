'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'quizQuestions', [
      {
        question: "What does the Map() accomplish?",
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
        question: `What is the outcome of the following code? 
                    const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
                    const result = words.filter(word => word.length > 6);`,
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
        answer: "returns the first element in the array that fits the condition",
        incorrect1: "returns all the elements in the array that fit the condition",
        incorrect2: "finds the correct spot in the array so you can add an element in there.",
        incorrect3: "returns the last element in the array that fits the condition",
        exerciseId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: `What is the outcome of the following code?
                    const numberOfMonkeys = [ 3, 12, 8, 35, 15 ]
                    const result = numberOfMonkeys.find(monkeys => monkeys > 10)`,
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
        answer: "Removes the last item from an array and returns it. ",
        incorrect1: "removes all of the items in the array",
        incorrect2: "adds an item to the end of an array and returns the array.",
        incorrect3: "removes the first item from an array and returns it.",
        exerciseId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: `What is the expected output of the following code?
                    const kings = [“King Arthur”, “Queen Elizabeth”, "King Willem Alexander”, “The Monkey King”]
                      console.log(kings.pop())`,
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
        question: `What is the outcome of the following code?
                    let sports = ['soccer', 'baseball']; 
                    let total = sports.push('football', 'swimming');
                    console.log(sports`,
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
        question: `What is the outcome of the following code?
                    let animals = ["Macaque", "Baboon", "Gorilla", "Orangutan"];
                    animals.shift();`,
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
        question: `What is the outcome of the following code?
                    let jungle = ['Monkey', 'Tiger', 'Bird'];
                    jungle.unshift('Snake', ‘Elephant’, ‘Hippo’)`,
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
        question: `What is the outcome of the following code?
                    let numberOfBananas = [40, 100, 1, 5, 25, 10];
                    numberOfBananas.sort(function(a, b){return a - b});`,
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
        question: `Open Question? 
                    Sort the age of the monkeys from oldest to youngest.
                    const ageMonkeys = [50, 3, 23, 12, 1];
                    answer = [50,3,23,12,1]`,
        level: "level 2",
        answer: "ageMonkeys.sort(function(a, b){return b - a})",
        exerciseId: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: `Open Question? 
                    Fill in the console.logs so the expected output is correct.
                    const numbers = [1, 2, 3]
                    console.log(YOU"RE ANSWER)
                    answer = 5
                    console.log(YOU"RE ANSWER)
                    answer = [4,5,1,2,3]`,
        level: "level 2",
        answer: "[numbers.unshift(4, 5), numbers)]",
        exerciseId: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: `Open Question? 
                    Use the .shift() method to get “Banana” out of the console.log
                    let fruits = ["Banana", "Orange", "Apple", "Mango"];
                    answer = "Banana"`,
        level: "level 2",
        answer: "fruits.shift()",
        exerciseId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: `Open Question? 
        There are 2 monkeys in the jungle; Rafiki and King Louie. 
        Abu, who is 15 years old, wants to join. change the following code so Abu will be added to the list of monkeys in the jungle.
        let monkeys = [
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
        level: "level 2",
        answer: "fruits.shift()",
        exerciseId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: `Open Question? 
                    Use the map function to double all of the numbers in the array.
                    const array = [1,2,3,4]`,
        level: "level 2",
        answer: "const answer = array.map(item => item * 2)",
        exerciseId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: `Open Question? 
                    Monkeys love bananas! And hate broccoli! Please use filter to get only the bananas out of the array.
                    const food = [“banana", “broccoli”, “banana”, “broccoli”, “banana”, “broccoli”]`,
        level: "level 2",
        answer: `const answer = food.filter(item => item === “banana”`,
        exerciseId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: `Open Question? 
                    How many monkeys do we need to unscrew a light bulb? - more than 5 apparently- Please get us more than 5 monkeys out of the array.
                    const numberOfMonkeys= [3, 5, 7, 2, 9]`,
        level: "level 2",
        answer: `const answer = numberOfMonkeys.find(item => item > 5)`,
        exerciseId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: `Open Question? 
                    Monkey Popo has levelled up his skills and now finally has become a Code Master! Please remove his name from the list of code monkeys!
                    const listOfMonkeys = [“Rafiki”, “Bubbles”, “Curious George”, “Popo"]`,
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
