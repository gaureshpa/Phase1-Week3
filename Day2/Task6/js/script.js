const buttons = document.querySelectorAll(".accordion-btn");

buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
        const expanded = button.getAttribute("aria-expanded") === "true";

        if (expanded) {
            closeAll();
            sessionStorage.removeItem("openAccordion");
        }
        else {
            openPanel(index);
        }
    });

    button.addEventListener("keydown", (event) => {
        switch(event.key) {

            case "ArrowDown":
                event.preventDefault();
                buttons[(index+1) % buttons.length].focus();
                break;

            case "ArrowUp":
                event.preventDefault();
                buttons[(index - 1 + buttons.length) % buttons.length].focus();
                break;

            case "Home":
                event.preventDefault();
                buttons[0].focus();
                break;

            case "End":
                event.preventDefault();
                buttons[buttons.length - 1].focus();
                break;

            case "Enter":
            case " ":
                event.preventDefault();
                button.click();
                break;
        }
    });
});

function closeAll() {
    buttons.forEach(button => {
        button.setAttribute("aria-expanded", "false");
        button.nextElementSibling.style.display = "none";
    });
}

function openPanel (index) {
    closeAll();

    buttons[index].setAttribute("aria-expanded", "true");
    buttons[index].nextElementSibling.style.display = "block";

    sessionStorage.setItem("openAccordion", index);
}

const saved = sessionStorage.getItem("openAccordion");
if(saved != null) {
    openPanel(Number(saved));
}

