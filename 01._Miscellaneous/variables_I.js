// we will always default to become
const myName = "Anders";


const me = {
};
me.name = myName;
console.log(me);

// const is constant NOT in the value but in the assignment
// meaning that it cannot be reassigned and thus also HAS to be assigned

const hobbies = ["coding", "eating"];

hobbies.push("sleeping");

me.hobbies = hobbies;

// hobbies = [];
// hobbies = "";

me.hobbies = hobbies;

console.log(me);
