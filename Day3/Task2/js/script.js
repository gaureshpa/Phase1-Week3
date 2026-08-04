// default binding

function defaultBinding() {
    console.log("Default: ", this);
}
defaultBinding();

// implicit binding
const person = {
    name: "Zayn",
    greet() {
        console.log("Implicit: ", this.name);
    }
};

person.greet();

// Explicit binding
function showCity(city) {
    console.log(`${this.name} lives in ${city}`)
}

const user = { name: "Yohan"};
showCity.call(user, "Mattancherry");
showCity.apply(user, ["Kochi"]);

const bound = showCity.bind(user);
bound("Ernakulam");

// New binding

function Student(name) {
    this.name = name;
}

const s1 = new Student("Nakul");
console.log("New: ", s1.name);


// this-loss

class Counter {
    constructor() {
        this.count = 0;

        // arrow in constructor

        this.arrowMethod = () => {
            console.log("Arrow ", this.count);
        };
    }

    show () {
        console.log("Show: ", this.count);
    }

    // classField
    classField = () => {
        console.log("Class field: ", this.count);
    };
}

const counter = new Counter();

// bind() 
const boundMethod = counter.show.bind(counter);
boundMethod();


// bindAll(obj)

function bindAll(obj) {
    for (const key in obj) {
        if (typeof obj[key] === "function") {
            obj[key] = obj[key].bind(obj);
        }
    }
}

const employee = {
    name: "Abhishek",
    greet () {
        console.log(this.name);
    }
};

bindAll(employee);
const greet = employee.greet;
greet();

// setTimeout callbacks with arrows

class Timer {
    constructor() {
        this.seconds = 10;        
    }

    tick = () => {
        console.log(this.seconds);
    };
}

const timer = new Timer();
setTimeout(timer.tick, 1000);
