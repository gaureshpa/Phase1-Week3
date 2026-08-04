// Impure version

function updateUser(users, id, changes) {
    const user = users.find(user => user.id === id);
    if(user) {
        Object.assign(user, changes);
    }
    return users;
}

function updateUserPure(users, id, changes) {
    return users.map(user => user.id === id ? {...user, ...changes} : user );
}

const users = [
    {id: 1, name: "Alan"},
    {id: 2, name: "Aadith"}
];

const updated = updateUserPure(users, 1, {name: "Joseph Alan"});

console.log(users);
console.log(updated);

// Pure pipeline

function parseCSV(csv) {
    return csv.trim()
    .split("\n")
    .map(row => row.split(","));
}

function validateRows(rows) {
    return rows.map(row => ({
        data: row,
        valid: row.length === 2
    }));
}

function transformRows(rows) {
    return rows.map(row => ({
        ...row,
        data: row.data.map(item => item.trim())
    }));
}

function filterInvalid(rows) {
    return rows.filter(
        row => row.valid
    );
}

function formatOutput(rows) {
    return rows.map(
        row => row.data.join(" - ")
    );
}

const csv = `
Gail, 20 
Neville, 25 
Harry
`;

const result = formatOutput(
    filterInvalid(
        transformRows(
            validateRows(
                parseCSV(csv)
            )
        )
    )
);

console.log(result);

// Deepfreeze

function deepFreeze(obj) {
    Object.keys(obj).forEach(key => {
        if(typeof obj[key] === "object" && obj[key] !== null) {
            deepFreeze(obj[key]);
        }
    });

    return Object.freeze(obj);
}

const manager = {
    name: "Luis",
    address: {
        city: "Panjim",
        pin: 403001
    }
};

deepFreeze(manager);
manager.address.city = "Margao";
console.log(manager);