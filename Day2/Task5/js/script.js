const searchInput = document.getElementById("search-input");
const clearBtn = document.getElementById("clear-btn");
const serviceCards = document.querySelectorAll(".service-card");
const noResults = document.getElementById("no-results");

let debounceTimer;

serviceCards.forEach(card => {
    card.dataset.original =card.innerHTML;
});

searchInput.addEventListener("keyup", () => {
    clearTimeout(debounceTimer);

    debounceTimer = setTimeout( () => {
        filterServices(searchInput.value.trim().toLowerCase());
    }, 300);
});

clearBtn.addEventListener("click", () => {
    searchInput.value = "";
    filterServices("");
    searchInput.focus();
});

function filterServices(searchTerm) {
    let matches = 0;
    clearBtn.style.display = searchTerm ? "block": "none";
    serviceCards.forEach(card => {
        card.innerHTML = card.dataset.original;
        const text = card.textContent.toLowerCase();

        if(text.includes(searchTerm)) {
            card.style.display ="block";
            matches++;

            if (searchTerm !== ""){
                highlight(card, searchTerm);
            }
        }

        else {
            card.style.display = "none";
        }
    });

    noResults.style.display = matches === 0 ? "block" : "none";
}

function highlight(card, searchTerm) {
    const regex = new RegExp(searchTerm, "gi");

    card.innerHTML = card.innerHTML.replace(regex, function(match) {
        return `<span class="highlight">${match}</span>`;
    });
}
