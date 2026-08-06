// Task 2 (45 min) - Promises from Scratch
// 397. Create five Promises using new Promise((resolve, reject) => { setTimeout(...) }) - mix resolves
// and rejects
// 398. Chain three dependent Promises: getUser → getOrders(userId) → getOrderDetail(orderId).
// Reject getOrders if userId is undefined.
// 399. Demonstrate Promise.all (three parallel calls, time ≈ slowest), Promise.allSettled (one resolves,
// one rejects - both returned), Promise.race

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Promise 1 resolved"), 1000);
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => reject("Promise 2 rejected"), 1500);
});

const p3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Promise 3 resolved"), 2000);
});

const p4 = new Promise((resolve, reject) => {
    setTimeout(() => reject("Promise 4 rejected"), 2500);
});

const p5 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Promise 5 resolved"), 3000);
});

p1.then(console.log).catch(console.error);
p2.then(console.log).catch(console.error);
p3.then(console.log).catch(console.error);
p4.then(console.log).catch(console.error);
p5.then(console.log).catch(console.error);


// Dependent Pormises

function getUser() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({id: 1, name: "Neil"});
        }, 1000);
    });
}

function getOrders(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(userId === undefined) {
                reject ("User ID is undefined");
            } else {
                resolve([{orderId: 101}]);
            }
        }, 1000);
    });
}

function getOrderDetail(orderId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                orderId: orderId,
                product: "Lays"
            });
        }, 1000)
    });
}

getUser().then((user) => {
    console.log("User: ", user);
    return getOrders(user.id);
})
.then((orders) => {
    console.log("Orders: ", orders);
    return getOrderDetail(orders[0].orderId);
})
.then((details) => {
    console.log("Order details: ", details);
})
.catch((err) => {
    console.log("Errors: ", err);
});


getOrders(undefined).catch((err) => {
    console.log("Rejected ", err)
})