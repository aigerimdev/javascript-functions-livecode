// const doubleTheNums = function(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     arr[i] *= 2;
//   }
//   return arr;
// };

// convert above function to an arrow function
const doubleTheNums = arr => { // single argument function don't need parentheses around
  for (let i = 0; i < arr.length; i++) {
    arr[i] *= 2;
  }};
let list1 = [1, 2, 3, 4];
console.log(doubleTheNums(list1));

// Write a function that prints out "Good morning, class!"
const classGreeting = () => 'Good morning, class!';
classGreeting();


// Write a function that prints a random number (integer) between 1 and 100.
let randomNum = () => {
  const myNum = Math.floor(Math.random() * 100) + 1;
  return myNum;
};
console.log(randomNum());
// use one of the functions above as the action parameter when you invoke the callback function below
const doMultipleTimes = (action, numTimes) => {
  for (let i = 0; i < numTimes; i++) {
    console.log(action());
  }
};
doMultipleTimes(randomNum, 10);
doMultipleTimes(classGreeting, 10);
