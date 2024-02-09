// we will always default to become
const myName = "Anders";


const me = {
};
me.name = myName;

// const is constant NOT in the value but in the assignment
// meaning that it cannot be reassigned and thus also HAS to be assigned

const hobbies = ["coding", "eating"];

hobbies.push("sleeping");

me.hobbies = hobbies;

// hobbies = [];
// hobbies = "";

me.hobbies = hobbies;

// console.log(me);


// Types in JS: number, string, boolean, object, null, undefined, symbol, bigint

// Object: object, arrays, date

// type coercion

// we ALWAYS use strict equality checks:
// === and !==

// Strings:

const stringOne = "This is one ''''''' '''way of defining strings";
const stringTwo = 'This is one """" way """ of defining strings';
const stringThree = `This """" '''' is one way of defining strings
multi line string
and here`;

const kea = {
    address: "Guldbergsgade",
    studentsInBuilding: 204
};
