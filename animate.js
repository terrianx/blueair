const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar-menu');
const navLogo = document.querySelector('#navbar-logo');

// show mobile menu
const displayMobile = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
};

// close mobile menu
const hideMobile = () => {
    const menuBars = document.querySelector('.is-active');
    if (window.innerWidth <= 800 && menuBars) {
        menu.classList.toggle('is-active');
        menuLinks.classList.remove('active');
    }
}

menu.addEventListener('click', displayMobile);

menuLinks.addEventListener('click', hideMobile);
navLogo.addEventListener('click', hideMobile);