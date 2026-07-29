document.getElementById("bus-bio").innerHTML = "A simple website for students to track live loacation of college bus and pay fees";
document.getElementById("ecom-bio").innerHTML = "Modern responsive e-commerce landing page built using only HTML and CSS. This featured tile spans two columns and two rows while using Flexbox for image and content alignment.";


const collection = document.getElementsByClassName("bus-tag");
collection[0].innerHTML = "ReactJS"
collection[1].innerHTML = "Tailwind CSS"

const items = document.getElementsByTagName("span");
console.log(items[2].innerHTML);

document.querySelector("p").style.textDecoration = "underline";

const nodeList = document.querySelectorAll("h2");
for ( let i=0; i < nodeList.length; i++) {
    nodeList[i].style.textDecoration = "underline";
}

// Traversal

const currentNode = document.querySelector(".portfolio-grid");

console.log("Parent Element: ", currentNode.parentElement);
console.log("First child: ", currentNode.firstElementChild);
console.log("Last Child Element: ", currentNode.lastElementChild);
console.log("Next sibling element: ", currentNode.nextElementSibling);

// Create Card
const cardContainer = document.getElementById("cardContainer");
let cardIdCounter = 1;

function addCard(title, body, imageUrl) {
    const card = document.createElement("div");
    card.className = "card";
    card.id = `card-${cardIdCounter++}`;

    const heading = document.createElement("h3");
    heading.textContent = title;

    const text = document.createElement("p");
    text.textContent = body;

    card.appendChild(heading);
    card.appendChild(text);

    if(imageUrl){
        const img = document.createElement("img");
        img.src = imageUrl;
        img.alt = title;
        img.width = 200;
        card.appendChild(img);
    }

    cardContainer.appendChild(card);
    return card.id;
}

function removeCard(id) {
    const card = document.getElementById(id);
    if (card) {
        card.remove();
    }
}

function clearAllCards() {
    while (cardContainer.firstChild) {
        cardContainer.removeChild(cardContainer.firstChild);
    }
}

const id1 = addCard(
    "Hello",
    "This card was added.",
    "https://picsum.photos/500/400?10"
);

setTimeout(() => {
    removeCard("card-1");
}, 5000);

// clearAllCards();