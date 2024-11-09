//spread operator

/*const publicEmpoyee = {
    name: "sumanth",
    id: 562,
};*/
/*let emp1 = publicEmpoyee;
console.log(publicEmpoyee);
publicEmpoyee.id = 50;
console.log(publicEmpoyee.id);
emp1.id = 100;
console.log(emp1);
console.log(publicEmpoyee);*/

/*let emp1 = { ...publicEmpoyee };
emp1.id = 500;
console.log(emp1);
console.log(publicEmpoyee);*/


/*const player1 = ["sumanth", "athul"];
const player2 = ["manish", "anish"];

//const player = player1.concat(player2);
let player = [...player1, player2, "lotte"];//we can push the element also using spread
console.log(player);*/


//***********Rest******************
//-------destructuring----------

/*let player = ["sumanth", "athul", "manish", "anish"];
let [first, second, third, fourth] = player;
console.log(second);

let employee = {
    id: 564,
    name: "athul",
    age: 56,
};
//let { id, name, age } = employee;

//***********Rest**********
let { id, ...rest } = employee;
console.log(id);
console.log(rest);*/



//************Arrow************

//let add=()=>{};
/*let add = (a, b) => a + b;
console.log(add(10, 20));*/











