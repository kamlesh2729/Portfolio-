let MenuOpen = document.querySelector('[data-menuopen]');
let MenuClose = document.querySelector('[data-menuclose]');
let MobNav = document.querySelector('[data-mobnav]');


MenuOpen.addEventListener('click', () => {
    MobNav.style.left = '0';
})

MenuClose.addEventListener('click', () => {
    MobNav.style.left = '-100%';
    
})

function menuClose() {
    MobNav.style.left = '-100%';
    window.t
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
    if (entry.isIntersecting) {
        entry.target.classList.add('show');
    } else {
        entry.target.classList.remove('show');
    }
})
})

const hiddentPbox = document.querySelectorAll('[data-pbox]');
hiddentPbox.forEach((el) => { observer.observe(el) });

const hiddentBoxp = document.querySelectorAll('[data-boxp]');
hiddentBoxp.forEach((el) => { observer.observe(el) });