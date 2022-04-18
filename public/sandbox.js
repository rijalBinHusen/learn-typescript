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
