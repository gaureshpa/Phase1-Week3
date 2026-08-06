// Task 7 (50 min) - Drag-and-Drop Kanban Board
// 386. Three-column Kanban (To Do, In Progress, Done) using HTML5 Drag and Drop API
// 387. dragstart: store card id in dataTransfer. dragover: preventDefault. dragenter: show drop target.
// drop: move card.
// 388. Add/delete cards via per-column form. Persist state to localStorage.
// 389. Keyboard: Space to pick up, arrow keys to move between columns, Space to drop

const STORAGE_KEY = "kanban-board";

let board = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {
    todo: [],
    progress: [],
    done: []
};

let keyboardPicked = null;

function saveBoard() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(board));
}

function createCard(task, column) {
    const card = document.createElement("div");
    card.className = "card";
    card.draggable = true;
    card.tabIndex=0;
    card.dataset.id = task.id;
    card.dataset.column = column;

    const span = document.createElement("span");
    span.textContent = task.text;

    const del = document.createElement("button");
    del.textContent = "X";
    del.className = "delete";

    del.onclick=()=>{
        board[column] = board[column].filter(c=>c.id!==task.id);
        saveBoard();
        render();
    };

    card.append(span, del);

    card.addEventListener("dragstart", e=>{
        e.dataTransfer.setData("text/plain", task.id);
    });

    card.addEventListener("keydown", e => {
        const cols = ["todo", "progress", "done"];

        if(e.code === "Space") {
            e.preventDefault();

            if(!keyboardPicked){
                keyboardPicked=task.id;
                card.classList.add("picked");
            } else {

                keyboardPicked = null;
                render();
            }
        }

        if(!keyboardPicked || keyboardPicked !== task.id) return;
        let current = cols.indexOf(card.dataset.column);

        if(e.key === "ArrowRight" && current < cols.length - 1) {
            e.preventDefault();
            moveCard(task.id, cols[current + 1]);
        }

        if(e.key === "ArrowLeft" && current > 0) {
            e.preventDefault();
            moveCard(task.id, cols[current - 1]);
        }
    });

    return card;
}

function moveCard(id, newColumn) {
    let found = null;
    for(let col in board) {
        const index = board[col].findIndex(c=>c.id===id);

        if(index > -1) {
            found = board[col].splice(index, 1)[0];
            break;
        }
    }

    if(found) {
        board[newColumn].push(found);
    }

    saveBoard();
    render();
}

function render() {
    document.querySelectorAll(".cards").forEach(c=>c.innerHTML="");

    for(let col in board) {
        const container = document.getElementById(col);

        board[col].forEach(task => {
            container.appendChild(createCard(task, col));
        });
    }
}

document.querySelectorAll(".cards").forEach(container => {
    container.addEventListener("dragover", e=> {
        e.preventDefault();
    });

    container.addEventListener("dragenter", () => {
        container.classList.add("active");
    });

    container.addEventListener("dragleave", ()=> {
        container.classList.remove("active");
    });

    container.addEventListener("drop", e=> {
        e.preventDefault();
        container.classList.remove("active");
        const id = e.dataTransfer.getData("text/plain");
        moveCard(id, container.id);
    });
});

document.querySelectorAll(".column").forEach(column => {
    const form = column.querySelector("form");
    const input = form.querySelector("input");
    const id = column.dataset.column;

    form.addEventListener("submit", e=> {
        e.preventDefault();
        const text = input.value.trim();
        if(!text) return;

        board[id].push({
            id: Date.now().toString() + Math.random(), text
        });
        input.value = "";

        saveBoard();
        render();
    });
});

render();

