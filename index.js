// Q1)Rewrite the following function as an arrow function:
/******************************
	function greet(name) {
	  return `Hello, ${name}!`;
	}
********************************/
const greet = (name) => `Hello, ${name}`;
// Q2) Write a simple arrow function that takes two parameters and returns their sum.
const sumAny = (x, y) => x + y;
// Q3) Write a simple arrow function that squares a number.
const sqr = (n) => n * n;
// Q4) [🌶️🌶️] Create an arrow function that takes an array of numbers and returns a new array with each number squared.
const sqrArr = (x) => {
  let arr = [];
  for (let i = 0; i < x.length; i++) {
    arr[i] = x[i] ** 2;
  }
  return arr;
};
console.log([2, 3, 4, 5]);
console.log(sqrArr([2, 3, 4, 5]));
