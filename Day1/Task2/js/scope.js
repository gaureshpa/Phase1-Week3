// Hoisting

console.log(a); // undefined
var a = 10; 

// console.log(b); // ReferenceError
// let b = 20;

// Block Scope

if (true) {
    var x = "This is a var";
}
console.log (x); // "This is a var"

if (true) {
    let y = "This is a let";
}
// console.log(y); // ReferenceError

// Redeclaration

var num = 1;
var num = 2;
console.log(num); // 2

let digit = 1;
// let digit = 2; // SyntaxError

// Golbal Object

var globalVar = "var variable";
let globalLet = "let variable";

console.log(globalThis.globalVar); // var variable
console.log(globalThis.globalLet); // undefined


// Loop Scope

for (var i = 0; i < 3; i++) {}
console.log(i);

for (let j = 0; j < 3; j++){}
// console.log(j); // ReferenceError j is not declared


// Temporal Dead Zone

try {
    console.log(deadVar); // ReferenceError
    let deadVar = 100; 
} catch (errors) {
    console.log(errors);
}

console.log(oldVar); //undefined
var oldVar = 100;
console.log(oldVar); //100


// Nested Functions

const globalMessage = "Global Message";

function outer() {
    const outerMessage = "Outer Message";

    function middle() {
        const middleMessage = "Middle Message";

        function inner() {
            console.log(globalMessage);
            console.log(outerMessage);
            console.log(middleMessage);
        }

        inner();
    }

    middle();
}

outer();


// var in loop 

for (var k = 1; k <= 3; k++) {
    setTimeout(()=> {
        console.log("var: ", k);    // 4,4,4
    }, 100);
} 

for (let m = 1; m <= 3; m++) {
    setTimeout(()=> {
        console.log("let: ", m);    // 1,2,3
    }, 100);
} 