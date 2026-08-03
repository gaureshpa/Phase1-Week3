const elements = document.querySelectorAll(
    "h2, .club-card, .testimonial-card"
);

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.2
});

elements.forEach(element => observer.observe(element));