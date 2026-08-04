const outer = document.getElementById("outer");
const middle = document.getElementById("middle");
const inner = document.getElementById("inner");

// Bubble
outer.addEventListener("click", () => console.log("Outer"));
middle.addEventListener("click", () => console.log("Middle"));
inner.addEventListener("click", (e) => 
    {
        console.log("Inner");
        // Stop propagation line
        // e.stopPropagation(e);
    } );

// Capture
outer.addEventListener("click", () => console.log("outer"), true);
middle.addEventListener("click", () => console.log("middle"), true);
inner.addEventListener("click", () => console.log("inner"), true);

// Stop Immediate Propagation
const btn = document.getElementById("btn");

btn.addEventListener("click", (e) => {
    console.log("Listener no. 1");
    e.stopImmediatePropagation();
});

btn.addEventListener("click", (e) => {
    console.log("Listener No. 2");
});

// preventDefault()

document.getElementById("demoForm").addEventListener("click", (e) => {
    e.preventDefault();
    console.log("Not allowed!");
});

document.getElementById("mySite").addEventListener("click", (e) => {
    e.preventDefault();
    console.log("Not allowed!!!!!!");
});