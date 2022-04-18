"use strict";
let greet;
// greet = "HEllo"
greet = () => {
    console.log("Hello again!");
};
const add = (a, b, c = 10) => {
    console.log(a + b);
    console.log(c);
};
add(3, 77, 22);
const minus = (a, b) => {
    return a + b;
};
let result = minus(10, 7);
// result = "string" // error, because result type is number
