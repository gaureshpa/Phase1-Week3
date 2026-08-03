class ValidationError extends Error {
    constructor(message, field) {
        super(message);
        this.name = "ValidationError";
        this.statusCode = 400;
        this.field = field;
    }
}

function parseUserInput(input) {
    if (typeof(input) !== "string"){
        throw new TypeError("input must be string");
    }

    if (input.length <  3) {
        throw new RangeError("Input must be more than 3 characters");
    }

    if (!input.includes("@")){
        throw new ValidationError("Email must contain @", "email");
    }

    return input;
}

try {
    parseUserInput("kl@hm.com");
}
catch (error) {
    if(error instanceof TypeError) {
        console.log("Type Error: ", error.message);
    }

    else if (error instanceof RangeError) {
        console.log("Range Error: ", error.message);
    }

    else if (error instanceof ValidationError) {
        console.log("Status Code: ", error.statusCode);
        console.log("Validation Error: ", error.message);
        console.log("Field: ", error.field);
    }
    else {
        console.log(error);
    }
}

const overlay = document.getElementById("error-overlay");

function showError(message) {
    overlay.textContent = message;
    overlay.style.display = "block";
}

window.onerror = function (message) {
    showError(message);
};

window.addEventListener("unhandledrejection", function (event) {
    showError(event.reason);
});

setTimeout( () => {
    console.log (aa);
}, 1000)

// Promise.reject(new Error("Promise failed"));


