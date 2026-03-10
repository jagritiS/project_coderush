// on toggle click show navbar links
document.getElementById("toggle").onclick=()=>{
    document.getElementById("menu").classList.toggle("show");
};
// nav links
const navLinks = document.querySelectorAll('.navbar .menu a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        const nav = document.querySelector('.navbar');
        nav.classList.remove('show');
    })});