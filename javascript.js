console.log("hi sumanth");


// Array************

/*let myArray = ["sumanth", "star"];
console.log(myArray[0], myArray[1]);

let value = ["a", "b", "c", "d"];
value[0] = "A";
console.log(value);
value[1] = "B";
value[2] = "C";
value[3] = "D";
value.push("E");
console.log(value);
value.pop();
console.log(value);
value.unshift("sumanth");
console.log(value);
value.shift();
console.log(value);
value.splice(4, 0, 'e');
console.log(value);
value.splice(5, 0, 'sumanth', 'acharya');
value.reverse(); //for reversing
value.sort();// asending order
console.log(value);*/


// *********** object ************
/*let user = {
    firstName: "sumanth",
    lastName: "acharya",
    age: 24
};
console.log(user.firstName);
console.log(user.lastName);
console.log(user);
user.lastName = "pojjary";
delete user.firstName;
console.log(user);
let sumanth = {
    sirName: "mohankumar",
    age: 50,
    lastName: "acharya"
};
console.log(sumanth);
delete user.lastName;
console.log(user);
delete sumanth.sirName;
console.log(sumanth);
sumanth.mothername = "bhagi";
console.log(sumanth);
sumanth.lastName = "viswakarma";
delete sumanth.mothername;
console.log(sumanth);*/



// *****function*********************


/*function myFunc() {
    let a = 20;
    let b = 30;
    let c = a + b;
    console.log(c);
}
myFunc();
// **********Arrow line fuction******
myFunction = (s, g) => {
    a = g;
    b = s;
    c = a - b;
    alert("succesfull");
    return c;
}
// myFunc();
console.log(myFunction(70, 80));*/

// String method*************

/*let value = "sumanth acharya";
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
console.log(typeof b.toString());// converting numbers to string*/



//******************If statement************************
let age = 50;
if (age === 30) {
    console.log("middleAge");
}
else if (age >= 30 && age <= 40) {
    console.log("age perfect");
}
else {
    console.log("too old");
}
//************Switch statment, for loop and while loop*****************************
let fruit = "banana";
switch (fruit) {
    case "apple":
        console.log("i bought apple");
    case "banana":
        console.log("i bought banana");
    default:
        ("no match found ");
}
console.log("**********************");

//------------For loop------------
let count = 10;
for (i = 0; i <= 10; i++) {
    console.log(i);
}
//------------while loop----------
let cout = 0;
while (cout <= 10) {
    console.log(cout);
    cout++;

}
// -----------do while-----------  
let cont = 0;
do {
    console.log(cont);
    cont++;
} while (cont <= 10);
//-----------------Array looping----------
let myArray = ["sumanth", "anish", "athul", "manish"];
for (let i = 0; i < myArray.length; i++) {
    document.write(myArray[i] + "<br>");
}

let yourArray = ["you", "and", "me"];
for (let x of yourArray) {
    document.write(x + "<br>");
}

//-----------object looping---------------
let myobj = {
    firstName: "sumanth",
    lastName: "achar"
};
for (let x in myobj) {
    document.write(myobj[x] + "<br>");
}



















