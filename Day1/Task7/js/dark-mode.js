document.addEventListener("DOMContentLoaded", () => {
    const html = document.documentElement;
    const toggleButton = document.querySelector(".toggle-button");

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        html.setAttribute("data-theme", "dark");
    }

    const updateButton = () => {
        const isDark = html.getAttribute("data-theme") === "dark";
        toggleButton.setAttribute("aria-pressed", isDark);
    };

    updateButton();

    toggleButton.addEventListener("click", () => {
        const isDark = html.getAttribute("data-theme") === "dark";

        if (isDark) {
            html.removeAttribute("data-theme");
            localStorage.setItem("theme", "light");
        } else {
            html.setAttribute("data-theme", "dark");
            localStorage.setItem("theme", "dark");
        }

        updateButton();
    });
});

