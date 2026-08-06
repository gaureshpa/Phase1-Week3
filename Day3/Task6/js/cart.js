class Cart {
    constructor(items = [], coupon = 0, observers = [], history = []) {
        this.items = items;
        this.coupon = coupon;
        this.observers = observers;
        this.history = history;
    }

    addObserver(fn) {
        if(!this.observers.includes(fn)) {
            this.observers.push(fn);
        }
    }

    notifyObservers() {
        this.observers.forEach(function(observer) {
            observer();
        }); 
    }

    addItem(item) {
        const newItems = [...this.items, item];

        const newCart = new Cart(
            newItems, this.coupon, this.observers, [...this.history, this]
        );

        return newCart;

    }

    removeItem(index) {
        const newItems = this.items.filter(function(item, i) {
            return i !== index;
        });

        const newCart = new Cart (
            newItems, this.coupon, this.observers, [...this.history, this]
        );

        return newCart;

    }

    updateQuantity(index, quantity) {
        const newItems = this.items.map(function(item, i){
            if (i === index) {
                return {...item, quantity: quantity};
            }
            return item;
        })

        const newCart = new Cart (
            newItems, this.coupon, this.observers, [...this.history, this]
        );

        return newCart;

    }

    applyCoupon(code) {
        let discount = 0;
        if(code === "MESSI") {
            discount = 10;
        } 

        const newCart = new Cart(
            this.items,
            discount,
            this.observers,
            [...this.history, this]
        );

        return newCart;
        
    }

    getTotal() {
        let total = 0;
        this.items.forEach(function(item) {
            total += item.price * item.quantity;
        });

        total = total - (total * (this.coupon/100))

        return total;
    }

    undo() {
        if(this.history.length === 0) {
            return this;
        }

        return this.history[this.history.length - 1];
    }
}