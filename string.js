// String method*************

let value = "sumanth acharya";
console.log(value.length); //to find the legnth varible string
console.log(value.indexOf("a"));//it will sjow the psition of array if the given value not in array then it diplay -1,and if we give the word it will display 0
console.log(value.lastIndexOf("a"));//it will display last position
console.log(value.includes("sumanth"));//true and false
console.log(value.search("acharya"));//same as indexOf
let a = "sumanth acharya";
let b = a.slice(0, 6);
console.log(b);

// Number conversion*******
let a = "10";
let b = 10;
console.log(typeof parseInt(a));// converting string to integer
console.log(typeof b.toString());// converting numbers to string


