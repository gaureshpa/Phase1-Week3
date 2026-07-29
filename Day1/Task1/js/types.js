// Prediction: object
console.log(typeof(null));

// Prediction: object
console.log(typeof([]));

// Prediction: object
console.log(typeof({}));

// Prediction: int
// Actual output: Number
// JavaScript uses Number instead of int because the language does not have a distinct integer type
console.log(typeof(NaN));

// Prediction: function
console.log(typeof(function(){}));

// Prediction: boolean
console.log(typeof(0 == false));

// Prediction: boolean
console.log(typeof('' == false));

// Prediction: boolean
console.log(typeof(null == undefined));

// Prediction: boolean
console.log(typeof(null === undefined));

// Prediction: boolean
console.log(typeof(NaN === NaN));

// Prediction: string
console.log(typeof(1 + '2'));

// Prediction: string
// Actual output: number
// The minus operator only does math, so it forces the string to become a number.
console.log(typeof('3' - 1));

// Prediction: number
console.log(typeof(true + true));

// Prediction: object
// Actual output: string
// [] + [] evaluates to an empty string
console.log(typeof([] + []));

// Prediction: string
console.log(typeof([] + {}));