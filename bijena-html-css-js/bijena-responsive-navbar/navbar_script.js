// on toggle click show navbar links
const toggle = document.getElementById('toggle');
toggle.addEventListener('click', () => {
    const nav = document.querySelector('.navbar');
    nav.classList.toggle('active');
});

// nav links
const navLinks = document.querySelectorAll('.navbar .menu a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        const nav = document.querySelector('.navbar');
        nav.classList.remove('active');
    })});