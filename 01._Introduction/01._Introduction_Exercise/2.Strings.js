// --------------------------------------
// Exercise 3 - Add numbers from string to float

const numberOne = "1.10";
const numberTwo = "2.30";

// add those two numbers and show the result
// you cannot touch line 1 neither line 2

const sum = parseFloat(numberOne) + parseFloat(numberTwo);

console.log(sum);

// --------------------------------------


// --------------------------------------
// Exercise 4 - Add the numbers and the total with 2 decimals

const anotherNumberOne = "1.10";
const anotherNumberTwo = "2.30";

const anotherTotalNumber = (parseFloat(anotherNumberOne) + parseFloat(anotherNumberTwo)).toFixed(2);

console.log(anotherTotalNumber);


// --------------------------------------
// Exercise 5 - Decimals and average

const one = 10;
const two = 45;
const three = 98;


// Show in the console the avg. with 5 decimals

const average = (parseFloat(one) + parseFloat(two) + parseFloat(three)) / 3;
const averageWithDecimals = average.toFixed(5);

console.log(averageWithDecimals);




// --------------------------------------
// Exercise 6 - Get the character by index

const letters = "abc";
// Get me the character "c"

// square bracket notation
// const characterC = letters[2];
// const characterC = letters.charAt(2);
// const characterC = letters.substring(2, 3);
// const characterC = letters.slice(2, 3)

console.log(characterC);

// --------------------------------------
// Exercise 7 - Replace

const fact = "You are learning javascript!";

// capitalize the J in Javascript

const newFact = fact.replace("j", "J");

console.log(newFact);

// --------------------------------------


