var menu = document.querySelector(".nav__menu");
var btn = document.querySelector(".nav__toggle");

btn.addEventListener('click',function(){
    menu.classList.toggle("show")
})