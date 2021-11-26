// ==============================
// === js file for index.hmtl ===
// ==============================

// alerts user of call
let callBtn = function () {
    alert("Ring Ring Ring Ring");
}

// changes color of nav when scrolling past intro
let nav = document.querySelector("nav");
let section = document.getElementById("logo");

let sectionOptions = {
    rootMargin: "-250px"
};

let sectionObserver = new IntersectionObserver
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

// mobile nav bar
let mobileNavLink = document.querySelector(".mobile-nav-links-container");
let mobileNavBtn = document.querySelector(".mobile-nav-btn-container");
let menuClick = function () {
    if (mobileNavLink.style.display === "grid") {
        mobileNavLink.style.display = "none";
        mobileNavBtn.style.display = "none";
    } else {
        mobileNavLink.style.display = "grid";
        mobileNavBtn.style.display = "grid";
    }
}
// clicking outside makes mobile nav disappear
let hideMenu = function() {
    mobileNavLink.style.display = "none";
    mobileNavBtn.style.display = "none";
}

// clears email input
let clearEmail = function () {
    document.getElementById("why-input").value = "";
}

// alerts user they joined email list
let joinBtn = function () {
    alert("Successfully joined email list!");
}
