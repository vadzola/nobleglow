const main = () => {
  return (
    <div>main</div>
  )
}
export default main

var menu = document.querySelector('#menu-btn');
var navbar = document.querySelector('.header .navbar');

menu.onclick = function () {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};

window.onscroll = function () {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
};

// var slides = document.querySelectorAll('.home .slide');
// var index = 0;

// function next() {
//     slides[index].classList.remove('active');
//     index = (index + 1) % slides.length;
//     slides[index].classList.add('active');
// }

// function prev() {
//     slides[index].classList.remove('active');
//     index = (index - 1 + slides.length) % slides.length;
//     slides[index].classList.add('active');
// }