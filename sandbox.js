var character = "Rijal";
var age = 30;
var isBlackBelt = false;
// character = 20 //error, cant replace string with number
character = "Bin husen";
// age = "rijal" //error, cant replace number with string
age = 40;
// isBlackBelt = "yes" //error, cant replace boolean with string or number
isBlackBelt = true;
// We just can replace the original variable with the same type
// define the type of parameter
var circ = function (diameter) {
    return diameter * Math.PI;
};
console.log(circ(7));
