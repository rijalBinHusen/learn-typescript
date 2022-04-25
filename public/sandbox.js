"use strict";
// #1 example function signature
let greet;
// the function must be matched with signature, can be return void or null
greet = (name, greeting) => {
    console.log(`${name} says ${greeting}`);
};
// #2 example function signature
let calc;
// the function must be matched with signature, the function should return a number
calc = (numOne, numTwo, action) => {
    if (action === "add") {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
// #3 Example function signature
let logDetails;
// the function must be matched with signature, can be return void or null
logDetails = (ninja) => {
    console.log(`${ninja.name} is ${ninja.age} years old`);
};
