const progressBar = document.getElementById("progress-bar");
const backToTop = document.getElementById("back-to-top");

function updateProgress() {
    const scrollTop = window.scrollY;

    const height = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrollTop /height) * 100;
    progressBar.style.width = progress + "%";
}

window.addEventListener("scroll", ()=> {
    requestAnimationFrame(updateProgress);
    if(window.scrollY > 300) {
        backToTop.style.display = "block";
    }
    else {
        backToTop.style.display = "none";
    }
});

backToTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});