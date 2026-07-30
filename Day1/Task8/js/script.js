const hamburger = document.querySelector(".hamburger-btn");
const drawer = document.querySelector(".sidebar");
const overlay = document.querySelector(".overlay");

const focusable = () =>
    drawer.querySelectorAll(
        'a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
    );

function openDrawer() {

    drawer.classList.add("open");
    overlay.classList.add("open");

    hamburger.setAttribute("aria-expanded", "true");

    document.body.style.overflow = "hidden";

    const items = focusable();

    if (items.length) {
        items[0].focus();
    }
}

function closeDrawer() {

    drawer.classList.remove("open");
    overlay.classList.remove("open");

    hamburger.setAttribute("aria-expanded", "false");

    document.body.style.overflow = "";

    hamburger.focus();
}

hamburger.addEventListener("click", () => {

    if (drawer.classList.contains("open")) {
        closeDrawer();
    } else {
        openDrawer();
    }

});

overlay.addEventListener("click", closeDrawer);

document.addEventListener("keydown", (e) => {

    if (e.key === "Escape") {
        closeDrawer();
    }

});

document.addEventListener("keydown", (e) => {

    if (!drawer.classList.contains("open")) return;

    if (e.key !== "Tab") return;

    const items = focusable();

    if (items.length === 0) return;

    const first = items[0];
    const last = items[items.length - 1];

    if (e.shiftKey) {

        if (document.activeElement === first) {

            e.preventDefault();
            last.focus();

        }

    } else {

        if (document.activeElement === last) {

            e.preventDefault();
            first.focus();

        }

    }

});