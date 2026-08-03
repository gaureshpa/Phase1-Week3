const todoList = document.getElementById("todoList");
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("add-btn");

todoList.addEventListener("click", (e) =>{
    const checkbox = e.target.closest("input[type='checkbox']");

    if(checkbox) {
        checkbox.nextElementSibling.classList.toggle("completed");
            return;
    }

    const deleteBtn = e.target.closest(".delete");

    if(deleteBtn) {
        deleteBtn.closest("li").remove();
        return;
    }

    const text = e.target.closest("span");
    
    if(text) {
        text.contentEditable = true;
        text.focus();
    }
});

// Dynamic addition

addBtn.addEventListener("click", () => {
    if(taskInput.value.trim() === "") return;

    const li = document.createElement("li");

    li.innerHTML = `
        <input type="checkbox">
        <span>${taskInput.value}</span>
        <button class="delete">Delete</button>
    `;

    todoList.appendChild(li);
    taskInput.value = "";
});

document.getElementById("listenerCount").textCount = "1";