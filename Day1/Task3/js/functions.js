// Function Declaration
function greet(name, greeting = "Hello") {
    return `${greeting}, ${name}!`;
}

console.log(greet("Adithya"));
console.log(greet("Adithya", "Good morning"));


// Function Expression
const greetExpression = function(name, greeting = "Hello") {
    return `${greeting}, ${name}`;
}

console.log(greetExpression("Joel"));
console.log(greetExpression("Joel", "Good morning"));


// Arrow Expression

const greetArrow = (name, greeting = "Hello") =>  `${greeting}, ${name}!`;

console.log(greetArrow("Noel"));
console.log(greetArrow("Noel", "Good Evening"));

// Object Method

const person = {
    greet(name, greeting = "Hello") {
        return `${greeting}, ${name}!`;
    }
};

console.log(person.greet("Liam"));
console.log(person.greet("Liam", "Welcome"));


// Calculator 

const calculator = {
    add (x, y) {
        return x + y;
    },

    sub (x, y) {
        return x - y;
    },

    multiply (x, y) {
        return x * y;
    },

    div (x, y) {
        if (y === 0) {
            return "Error: Division by zero not allowed";
        }
        return x / y;
    }
};

console.log(calculator.add(10, 5));        // 15
console.log(calculator.sub(10, 5));   // 5
console.log(calculator.multiply(10, 5));   // 50
console.log(calculator.div(10, 5));     // 2
console.log(calculator.div(10, 0));     // Error: Division by zero is not allowed.


// Factory function

function createMultiplier(factor) {
    return function(number) {
        return number * factor;
    };
}

const multiplyBy3 = createMultiplier(3);
console.log(createMultiplier(3)(7) === 21); // True


// Argument Objects

function showArguments() {
    console.log(arguments);
    console.log("1st arguement: ", arguments[0]);
    console.log("2nd arguement: ", arguments[1]);
    console.log("Number of arguement: ", arguments.length);
}

showArguments("Ford", "Fiat", "Toyota");


// rest parameters 

function showRestParameters(...args) {
    console.log(args);
    console.log("First argument: ", args[0]);
    console.log("Second argument: ", args[1]);
    console.log("Number of arguments: ", args.length);
}

showRestParameters("Bruno Mars", "Prince", "Michael Jackson");


// arguments vs rest

function compare(a, b, ...rest) {
    console.log("a:", a);
    console.log("b:", b);
    console.log("rest:", rest);
}

compare(10, 20, 30, 40, 50); // a:10 b:20 rest:[30,40,50]


// Arrows and arguments
const arrowFunction = () => console.log(arguments);
// arrowFunction(1, 2, 3); // ReferenceError: arguments is not defined at arrowFunction

const arrowWithRest = (...args) => console.log(args);
arrowWithRest(1,2,3)