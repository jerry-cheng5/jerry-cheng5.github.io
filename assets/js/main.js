// Scrolling Navbar
var navbar = document.getElementById("navbar");

window.onscroll = function() {scrollFunction()};
function scrollFunction(){
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200){
        navbar.style.padding = "15px 72px";
    }
    else{
        navbar.style.padding = "25px 72px";
    }
}

//Read more / To top button
var topBtn = document.getElementById("topBtn");

window.onscroll = function() {scrollFunction()};
function scrollFunction(){
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200){
        topBtn.classList.add("down");
        topBtn.parentElement.href = "#home";
    }
    else{
        topBtn.classList.remove("down");
        topBtn.parentElement.href = "#about";
    }
}
