// #1 example function signature
let greet: (a: string, b: string) => void;
// the function must be matched with signature, can be return void or null
greet = (name: string, greeting: string) => {
    console.log(`${name} says ${greeting}`)
}

// #2 example function signature
let calc: (a: number, b: number, c: string) => number;
// the function must be matched with signature, the function should return a number
calc = (numOne: number, numTwo, action: string) => {
    if(action === "add") {
        return numOne + numTwo
    } else {
        return numOne - numTwo
    }
}

// #3 Example function signature
let logDetails: (obj: {name: string, age: number}) => void;
// the function must be matched with signature, can be return void or null
logDetails = (ninja: { name: string, age: number }) => {
    console.log(`${ninja.name} is ${ninja.age} years old`)
}