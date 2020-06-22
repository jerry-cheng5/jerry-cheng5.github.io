//Nav bar and Corner arrow button
var navbar = document.getElementById("navbar");
var navLinks = document.querySelector(".nav-links > ul");
var topBtn = document.getElementById("topBtn");

window.onscroll = function() {scrollFunction()};
function scrollFunction(){
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200){
        navbar.style.padding = "10px 72px";
        navLinks.style.fontSize = "16px";
        topBtn.classList.add("down");
        topBtn.parentElement.href = "#home";
    }
    else{
        navbar.style.padding = "25px 72px";
        navLinks.style.fontSize = "18px";
        topBtn.classList.remove("down");
        topBtn.parentElement.href = "#about";
    }
}
