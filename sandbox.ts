let character: string;
let age: number;
let isLoggedIn: Boolean;

// age = "Rijal" //error
age = 30

// isLoggedIn = 25
isLoggedIn = false

//arrays
let ninjas: string[];
let ninjas2: string[] = []
// ninjas =  ["Rijal", "Bin", "Husen"]
// ninjas.push("Rijal") //error

ninjas2.push("Rijal") //no error

// union types
let mixed: (string|number|boolean)[] = []

mixed.push("Hello")
mixed.push(20)
mixed.push(false)
// console.log(mixed)

let uid: string|number;
uid = "123"
uid = 123

//objects
let ninjas3: object;
ninjas3 = { name: "Rijal", age: 27}
ninjas3 = []

let ninjas4: {
  name: string,
  age: number,
  beltColor: string,
};

// ninjas4 = {} //error
ninjas4 = {name: "Rijal", age: 30, beltColor: "black"}