// hoisting
// getRandomInt();

function getRandomInt(min, max) {
    Math.floor(Math.random() * (max + 1 - min) + min);
}

const getRandomIntAnonymousFunction = function (min, max) {
    return Math.floor(Math.random() * (max + 1 - min) + min);
};

const getRandomIntArrowFunction = (min, max) => {
    return Math.floor(Math.random() * (max + 1 - min) + min);
};

// task write the above arrow function as a one-liner
const getRandomIntArrowFunctionOneLiner = 
    (min, max) => Math.floor(Math.random() * (max + 1 - min) + min);

                            // string // callback function
function genericActionPerformer(name, genericAction) {
    return genericAction(name);
}

const running = (name) => `${name} is running`;

// assignment write code below so that you console log "Alex is running"
// const runningResult = genericActionPerformer("Alex", running);
const runningResult = genericActionPerformer(running, "Alex");

// console.log(runningResult);

// assignment create a single line below that print "Louis is eating"
console.log(genericActionPerformer("Louis", (name) => `${name} is eating`));