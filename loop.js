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
