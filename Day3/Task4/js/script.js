// Task 4 (50 min) - Advanced Array Methods
// 373. Given orders (each with an items array), use flatMap to get all items with their parent order id
// 374. Use findLast and findLastIndex on a log array to find the most recent error entry
// 375. Build chunk(arr, size), zip(...arrays) that interleaves arrays, and groupBy(arr, keyFn) without
// Object.groupBy
// 376. Use Array.from({ length: 12 }, (_, i) => ...) to generate a monthly calendar array


//flatMap

const orders  = [
    {
        id: 1,
        items: ["Activa", "Ntorq"]
    },

    {
        id: 2,
        items: ["Swift", "Glanza"]
    }
];

const allItems = orders.flatMap( function(order){
    return order.items.map(function(item) {
        return {
            orderId: order.id,
            item: item
        }
    });
});

console.log(allItems);

// findLast and findLastIndex

const logs = ["Login", "Error", "Logout", "Error", "Exit"];
const lastError = logs.findLast(function (logs) {
    return logs === "Error";
});

const lastErrorIndex = logs.findLastIndex(function (logs) {
    return logs === "Error";
});

console.log(lastError);
console.log(lastErrorIndex);


// chunk()

function chunk(arr, size) {
    let result = [];
    for(let i=0; i<arr.length; i++) {
        result.push(arr.slice(i, i +size));
    }

    return result;
}

myList = [1,2,3,4,5,6,7,8];
console.log(chunk(myList, 3));

// zip()

function zip(arr1, arr2) {
    let result = [];
    let maxLength = Math.max(arr1.length, arr2.length);

    for(let i=0; i<maxLength; i++){
        if(arr1[i] !== undefined) {
            result.push(arr1[i]);
        }

        if(arr2[i] !== undefined) {
            result.push(arr2[i]);
        }
    }
    return result;
}

arr1 = ["Biryani", "Tapioca Chips", "Paneer Roast"];
arr2 = ["Mandhi", "Fish Fry", "Sambar"];
console.log(zip(arr1, arr2))


// groupBy()

function groupBy(arr, keyFunction) {
    let result = {};
    for (let item of arr) {
        let key = keyFunction(item);

        if(!result[key]) {
            result[key] = [];
        }
        result[key].push(item);
    }
    return result;
}

const students = [
    {name: "Martin", mark: 90},
    {name: "Subash", mark: 75},
    {name: "Gabrielle", mark: 89},
    {name: "Priya", mark: 97}
];

console.log(groupBy(students, function(student){
    return student.grade;
}));

// Array.from() to generate monthly calendar

const months = Array.from(
    {length: 12},
    function(value, index) {
        return {
            month: index + 1,
            events: []
        };
    }
);

console.log(months)