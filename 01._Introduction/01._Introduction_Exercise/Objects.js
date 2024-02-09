// --------------------------------------
// Objects
// --------------------------------------
// Exercise 1 - Retrieve value from object by key

const myObject = { message: "Hello, earthling! I bring peace." };

// Log the message

console.log(myObject.message);

// --------------------------------------
// Exercise 2 - Defining an object. 

const anotherObject = { name: "Wei", age: 21};

// Create an object that has your name and age. 

console.log(anotherObject);

// --------------------------------------
// Exercise 3 - Add a key-value pair 

const stackOverflow = {};

stackOverflow.isAllowed = true;

// make a rule called isAllowed and let the value be true

console.log(stackOverflow);

// --------------------------------------
// Exercise 4 - Remove a property 

const thisSong = { description: "The best song in the world." };

// remove the property "description" and add a property called "about" that should say "Just a tribute." 

delete thisSong.description;

thisSong.about = "Just a tribute";

console.log(thisSong);

// --------------------------------------

