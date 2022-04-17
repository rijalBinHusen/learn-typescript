// arrays
let names = ["Rijal", "Muhammad", "Abdulloh", "Umar", "Ali", "Usman"]

//names = "" // error cant replace array with string

names.push("Hamzah")
// names.push(3) //error, you cant push number to array of string
// names[0] = 3 //error, you cant push number to array of string

let numbers = [1,2,3,4,5,6]
// numbers.push("Str")  //error, you cant push Strring to array of number
// numbers[0] = "Str" //error, you cant push string to array of number

// Mix array number and string
let mixed = [1,2,3, "Rijal", "Str", "4", "sdk"]

mixed.push("Husen")
mixed.push(10)
mixed[0] = "String"

// Objects
let group = {
  name: "rijal",
  age: 27,
  isGood: true,
}

group.age = 3
group.name = "Husen"
// group.age = "123" //error, cant replace number with string
// group.skill = ["Javascript", "HTML", "CSS"]// error, because skill doesnt exist

// group = {
//   name: "rijal",
//   age: 27,
//   isGood: true,
//   skills: ["JS"] // error because skills doesnt exist on the original object
// }