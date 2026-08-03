const images = document.querySelectorAll(".team-card img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const closeBtn = document.getElementById("close-btn");

let currentIndex = 0;
const imageArray = [];

function openLightbox() {
    lightbox.classList.add("active");
    lightboxImg.src = imageArray[currentIndex];
    document.body.style.overflow = "hidden";
    closeBtn.focus();
}

function closeLightbox() {
    lightbox.classList.remove("active");
    document.body.style.overflow = "";
}

images.forEach((img, index)=> {
    imageArray.push(img.src);
    img.addEventListener("click", ()=>{
        currentIndex = index;
        openLightbox();
    });
});

function showNext() {  
    if(currentIndex < imageArray.length -1) {
        currentIndex ++;
        lightboxImg.src = imageArray[currentIndex];
    }
}

function showPrevious() {
    if(currentIndex > 0) {
        currentIndex--;
        lightboxImg.src = imageArray[currentIndex];
    }
}

nextBtn.addEventListener("click", showNext);
prevBtn.addEventListener("click", showPrevious);
closeBtn.addEventListener("click", closeLightbox);

document.addEventListener("keydown", (event)=> {
    if(!lightbox.classList.contains("active"))
        return;

    if(event.key === "ArrowRight") {
        showNext();
    }

    if(event.key === "ArrowLeft") {
        showPrevious()
    }

    if(event.key === "Escape") {
        closeLightbox();
    }
});

lightbox.addEventListener("keydown", (event) => {
    if(event.key !== "Tab")
        return;

    const focusable = [
        prevBtn, nextBtn, closeBtn
    ];

    let index = focusable.indexOf(document.activeElement);
    if(event.shiftKey) {
        index--;
        if(index < 0)
            index = focusable.length - 1;
    }

    else {
        index++;
        if(index >= focusable.length)
            index = 0;
    }

    event.preventDefault();
    focusable[index].focus();
})

// Mobile swipe

let touchStartX = 0;

lightbox.addEventListener("touchstart", (event) => {
    let touchEndX = event.changedTouches[0].screenX;
});

lightbox.addEventListener("touchend", (event)=> {
    let touchEndX = event.changedTouches[0].screenX;

    if(touchEndX < touchStartX - 50) {
        showNext();
    }

    if(touchEndX > touchStartX + 50) {
        showPrevious();
    }
})