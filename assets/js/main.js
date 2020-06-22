//Variables
const navbar = document.getElementById("navbar");
const navLinks = document.querySelector(".nav-links > ul");
const topBtn = document.getElementById("topBtn");
const experience = document.getElementById("experiences");
const timeline = document.querySelector("#experiences > .vertical-line")

//Scroll functions
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
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
        topBtn.style.animation = "0";
    }
    else{
        topBtn.style.animation = "bounce 2s infinite";
    }
}

//Timeline height
experience.style.height = "200vh";
timeline.style.height = experience.style.height;

//Experiences
var exps;
fetch("assets/js/variables.json")
    .then(function(resp){
        return resp.json();
    })
    .then(function(data){
        exps = data;
        console.log(exps);
    });

for(exp in exps){
    if (exp.education == true){

    }
    else{

    }
}
