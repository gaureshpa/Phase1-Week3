// Task 6 (50 min) - Shopping Cart - Immutable + Observer
// 382. Build Cart with addItem, removeItem, updateQuantity, applyCoupon, getTotal - every method
// returns a NEW Cart, never mutates current one
// 383. Implement observer: addObserver(fn) registers a listener, notifyObservers() calls all after each
// change
// 384. Render cart to the DOM. Subscribe a render function - it re-renders on every sta

let cart = new Cart();
const cartItems = document.getElementById("cartItems");
const total = document.getElementById("cartTotal");

const nameInput = document.getElementById("itemName");
const priceInput = document.getElementById("itemPrice");
const quantityInput = document.getElementById("itemQuantity");
const couponInput = document.getElementById("coupon");

function render() {
    cartItems.innerHTML = "";

    cart.items.forEach(function (item, index) {
        const div = document.createElement("div");

        div.className = "cart-name";
        div.innerHTML = `
        <div class="item-info">
            <h3>${item.name}</h3>
            <p> Rs.${item.price} </p>
            <p>Qty: ${item.quantity} </p>
        </div>

        <div class ="item-actions">
            <button onClick="increase(${index})">+</button>
            <button onClick="decrease(${index})">-</button>
            <button onClick="removeItem(${index})">Delete</button>
        </div>
        `;

        cartItems.appendChild(div);
    });

    total.textContent = cart.getTotal();

    localStorage.setItem("cart", JSON.stringify(cart.items));
    localStorage.setItem("coupon", cart.coupon);
}

cart.addObserver(render);

document.getElementById("addItem").addEventListener("click", function() {
    const item = {
        name: nameInput.value,
        price: Number(priceInput.value),
        quantity: Number(quantityInput.value)
    };
    console.log(cart);
    cart = cart.addItem(item);
    cart.notifyObservers();
});

function removeItem(index) {
    cart = cart.removeItem(index);
    cart.notifyObservers();
}

function increase(index) {
    const qty = cart.items[index].quantity + 1;
    cart = cart.updateQuantity(index, qty);
    cart.notifyObservers();
}

function decrease(index) {
    const qty = cart.items[index].quantity - 1;
    if (qty> 0) {
        cart = cart.updateQuantity(index, qty);
        cart.notifyObservers();
    }
}

document.getElementById("applyCoupon").addEventListener("click", function () {
    cart = cart.applyCoupon(couponInput.value);
    cart.notifyObservers();
});

document.getElementById("undo").addEventListener("click", function() {
    cart = cart.undo();
    render();
})

window.addEventListener("load", function () {
    const items = JSON.parse(localStorage.getItem("cart")) || [];
    const coupon = Number(localStorage.getItem("coupon")) || 0;
    
    cart = new Cart(items, coupon);
    cart.addObserver(render);
    render();
});