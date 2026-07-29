// Employee object

const employees = [
    {name: "Adithya", dept: "Design", salary: "40000", yearsExp: 2},
    {name: "Liam", dept: "Engineering", salary: "80000", yearsExp: 8},
    {name: "Noel", dept: "Engineering", salary: "72000", yearsExp: 2},
    {name: "Brandon", dept: "Engineering", salary: "45000", yearsExp: 1},
    {name: "Kyle", dept: "Design", salary: "67000", yearsExp: 2},
]

const result = employees
    .filter(emp => emp.dept === "Engineering" && emp.salary > 70000)
    .map(({name, salary}) => ({name, salary}))
    .sort((a, b) => b.salary - a.salary);
    
console.log(result)

// config object

const config = {
    name: "Harry",
    marks: {
        science: 60,
        maths: 80
    }
};

const {
    name,
    marks: {science, maths}
} = config;

console.log(name);
console.log(maths);
console.log(science);

// Merge Object

const person = {
    first_name: "Zayn",
    last_name: "Malik"
};

const details = {
    age: 31,
    place: "UK"

};

const user = {
    ...person,
    ...details
};

console.log(user);


// Deep clone

function deepClone(obj) {
    let copy = {};

    for (let key in obj) {
        copy[key] = obj[key];
    }
    return copy;
}

const pet = {
    name: "Chikoo",
    age: 4
};

const newPet = deepClone(pet);
newPet.name = "Mikoo";

console.log(pet);
console.log(newPet);