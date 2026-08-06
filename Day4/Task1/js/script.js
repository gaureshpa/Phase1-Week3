// Prediction: A D C B

console.log("A");
setTimeout(() => console.log("B"), 0);
Promise.resolve().then(() => console.log("C"));
console.log("D")

// Prediction: A D C B

console.log("A");
setTimeout(() => console.log("B"), 0);
queueMicrotask(() => console.log("C"));
console.log("D")

// B A

setTimeout(() => console.log("A"), 0);
console.log("B");


// B A

queueMicrotask(() => console.log("A"));
console.log("B");

// A B

console.log("A");
queueMicrotask(() => console.log("B"));

// C B A

setTimeout(() => console.log("A"), 1000);
setTimeout(() => console.log("B"), 100);
setTimeout(() => console.log("C"), 0);

// B A
setTimeout(() => console.log("A"), 500);
queueMicrotask(() => console.log("B"));

// A B

Promise.resolve().then(() => console.log("A"));
setTimeout(() => console.log("B"), 0);

// B A

setTimeout(() => console.log("A"), 500);
Promise.resolve().then(() => console.log("B"));
