let character = "Rijal"
let age = 30;
let isBlackBelt = false;

// character = 20 //error, cant replace string with number
character = "Bin husen";

// age = "rijal" //error, cant replace number with string
age = 40;

// isBlackBelt = "yes" //error, cant replace boolean with string or number
isBlackBelt = true

// We just can replace the original variable with the same type

// define the type of parameter
const circ = (diameter: number) => {
  return diameter * Math.PI
}

console.log(circ(7))