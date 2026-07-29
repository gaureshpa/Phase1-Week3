function createCounter() {
    let count = 0;

    return {
        increment() {
            count++;
        },

        decrement() {
            count--;
        },

        getCount() {
            return count;
        },

        reset() {
            count = 0;
        }
    };
}

const counter = createCounter();

counter.increment();
counter.increment();
console.log(counter.getCount()); // 2

counter.decrement();
console.log(counter.getCount()); // 1

counter.reset();
console.log(counter.getCount()); // 0

console.log(counter.count); // undefined 


// memoize(fn) using a Map as cache

function memoize(fn) {
    const cache = new Map();

    return function (...args) {
        const key = JSON.stringify(args);

        if (cache.has(key)) {
            console.log("From cache");
            return cache.get(key);
        }

        const result = fn(...args);
        cache.set(key, result);
        return result;
    };
}

// Slow Fibonacci
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

const memoFib = memoize(fibonacci);

console.time("First call");
console.log(memoFib(40));
console.timeEnd("First call");

console.time("Second call");
console.log(memoFib(40));
console.timeEnd("Second call");


// once(fn)

function once(fn) {
    let called = false;
    let result;

    return function (...args) {
        if (!called) {
            called = true;
            result = fn(...args);
        }
        return result;
    };
}

const initialize = once(function () {
    console.log("Initializing.....");
    return "Success";
})

console.log(initialize());
console.log(initialize());
console.log(initialize());


// Create Rate limiter

function createRateLimiter(fn, maxCalls, windowMs) {
    let timestamps = [];

    return function (...args) {
        const now = Date.now();

        timestamps = timestamps.filter(
            time => now -time <windowMs
        );

        if (timestamps.length >= maxCalls) {
            throw new Error("Rate limit exceeded");
        }

        timestamps.push(now);

        return fn(...args);
    }
}

const greet = createRateLimiter( name => console.log(`Hello ${name}`), 3, 500 );

greet("Anjal");
greet("Darwin");
greet("Christy");

greet("Yazin");