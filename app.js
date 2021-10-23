// ==============================
// === js file for index.hmtl ===
// ==============================

// changes color of nav when scrolling past intro
const nav = document.querySelector("nav");
const section = document.getElementById("logo");

const sectionOptions = {
    rootMargin: "-200px"
};

const sectionObserver = new IntersectionObserver
    (function(entries, sectionObserver) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                nav.classList.add("nav-scrolled");
            } else {
                nav.classList.remove("nav-scrolled");
            }
        });
    }, sectionOptions);

sectionObserver.observe(section);
