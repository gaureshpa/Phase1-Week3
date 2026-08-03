function gradeToLetterIf(score) {
    if (score >= 90) {
        return "S";
    }
    else if (score >= 80) {
        return "A";
    }
    else if (score >= 70) {
        return "B";
    }
    else if (score >= 60) {
        return "C";
    }
    else if (score >= 50) {
        return "D";
    }
    else { 
        return "F";
    }
}

function gradeToLetterSwitch (score) {
    switch (true) {
        case score >= 90: return "S";
        case score >= 80: return "A";
        case score >= 70: return "B";
        case score >= 60: return "C";
        case score >= 50: return "D";
        default: return "F";
    }
}

function gradeToLetterTernary(score) {
    return score >= 90 ? "S"
        : score >=80 ? "A"
        : score >=70 ? "B"
        : score >=60 ? "C"
        : score >=50 ? "D"
        : "F";
}

function gradeLookup (score) {
    const grades = {
        9: "S", 8: "A", 7: "B", 6: "C", 5: "D", 4: "F" 
    };

    return grades[Math.floor(score / 10)] || "F"; 
}

console.time("if");
for (let i = 0; i < 1000000; i++) {
    gradeToLetterIf(85);
}
console.timeEnd("if");

console.time("switch");
for (let i = 0; i < 1000000; i++) {
    gradeToLetterSwitch(85);
}
console.timeEnd("switch");

console.time("ternary");
for (let i = 0; i < 1000000; i++) {
    gradeToLetterTernary(85);
}
console.timeEnd("ternary");

console.time("lookup");
for (let i = 0; i < 1000000; i++) {
    gradeToLetterTernary(85);
}
console.timeEnd("lookup");

// while
function processQueueWhile(items) {
    while (items.length > 0) {
        console.log(items.shift());
    }
}

//do while
function processQueueDoWhile(items) {
    do {
        if (items.length === 0)
            break;
        console.log(items.shift());
    }
    while (items.length > 0)
}

// for with map

function processQueueMap() {
    const map = new Map([
        [1, "Luis"],
        [2, "Paul"],
        [3, "John"]
    ]);

    for (const [key, value] of map) {
        console.log(key, value);
    }
}

processQueueWhile(["A", "B", "C"]);
processQueueDoWhile(["X", "Y", "Z"]);
processQueueMap();

// Validate a user

function validateUser(user) {
    return user && user.email && user.email.includes("@") && user.role == "admin";
}

testUser = {email:"gauresh.pa@vonnue.com", role:"admin"};
console.log(validateUser(testUser));

// deep nesting

function loginDeepNest(user) {
    if (user) {
        if (user.active) {
            if (user.role === "admin") {
                return "Welcome Admin!";
            }
            else {
                return "Not allowed";
            }
        }
        else {
            return "Inactive user";
        }
    }
    else {
        return "Not a user";
    }
}

// early return

function loginEarluReturn(user) {
    if(!user) return "No User";
    if(!user.active) return "inactive user";
    if(!user.role !== "admin") return "Access denied";

    return "Welcome admin";
}