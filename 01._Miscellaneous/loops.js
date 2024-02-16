// loop method
// forEach, map, filter, sort, find, reduce

const dogs = [
    { name: "Lassie", famelevel: 13 },
    { name: "Beethoven", famelevel: 8 },
    { name: "Hackiko", famelevel: 18 },
    { name: "Balto", famelevel: 5 },
];

// add a famelevel of + 3 for all dogs
const increasedPublicityDogs = dogs.map((dog) => {
    dog.famelevel += 3;
    return dog;
});

// task add the key male and value true except for Lassie (male: false)
const genderedDogs = increasedPublicityDogs.map((dog) => ({
    isMale: dog.name === "Lassie" ? false : true,
    name: dog.name,
    famelevel: dog.famelevel
}));

console.log(genderedDogs);

const numbers = [1, 2, 3, 4, 5];

const doubledNumbers =  numbers.map((number) => number * 2);

console.log(numbers);           // 1 2 3 4 5
console.log(doubledNumbers);    // 2 4 6 8 10

const numberObjects = [
    { number: 1},
    { number: 2},
    { number: 3},
    { number: 4},
    { number: 5},
];
const doubledNumberObjects = numberObjects.map((number) => {
    number.number *= 2;
    return number;
});

// console.log(numberObjects);
// console.log(doubledNumberObjects);

numbers.map((number, index, originalArray) => console.log(number, index, originalArray));