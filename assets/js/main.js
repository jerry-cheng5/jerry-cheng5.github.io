//Variables
const navbar = document.getElementById("navbar");
const navLinks = document.querySelector(".nav-links > ul");
const topBtn = document.getElementById("topBtn");
const experience = document.getElementById("experiences");
const timeline = document.querySelector("#experiences > .vertical-line")
const coursesBtn = document.querySelector(".education > div > button");

//Scroll functions
window.onscroll = function() {
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
};

//Timeline height
experience.style.height = "200vh";
timeline.style.height = experience.style.height;

//Experiences
var jsonData;
const experiences = document.querySelector("#experiences > .container");
fetch("assets/js/variables.json")
    .then(function(resp){
        return resp.json();
    })
    .then(function(data){
        jsonData = data;
        for(i in jsonData.experiences){
            if (jsonData.experiences[i].education == true){
                //Making the Education card
                var node = document.createElement("div");
                node.classList.add("education", "row");

                var description = document.createElement("div");
                description.classList.add("d-inline", "col", "description");

                var organization = document.createElement("h1");
                organization.classList.add("d-block");
                organization.innerHTML = jsonData.experiences[i].organization;
                var location = document.createElement("h4");
                location.classList.add("d-block");
                location.innerHTML = jsonData.experiences[i].location;
                var name = document.createElement("h5");
                name.classList.add("d-block");
                name.innerHTML = jsonData.experiences[i].name;
                var button = document.createElement("button");
                button.type = "button";
                button.innerHTML = "Show Courses";
                button.id = jsonData.experiences[i].id;
                description.appendChild(organization);
                description.appendChild(location);
                description.appendChild(name);
                description.appendChild(button);

                var emblem = document.createElement("div");
                emblem.classList.add("d-inline", "col-1", "ed-emblem");
                var icon = document.createElement("i");
                icon.classList.add("fas", "fa-graduation-cap");
                emblem.appendChild(icon);

                var timeWrapper = document.createElement("div");
                timeWrapper.classList.add("d-inline", "col");
                var time = document.createElement("h5");
                time.style.textAlign = "left";
                time.innerHTML = jsonData.experiences[i].time;
                timeWrapper.appendChild(time);
                
                node.appendChild(description);
                node.appendChild(emblem);
                node.appendChild(timeWrapper);
                experiences.appendChild(node);

                //Making the courses popout

            }
        }
    });

/* 

<div id="popout">
    <div class="courses-header row">
        <div class="courses-left d-inline col-2"><i class="fas fa-chevron-left"></i></div>
        <h1 class="courses-title d-inline col">Courses</h1>
        <div class="courses-right d-inline col-2"><i class="fas fa-chevron-right"></i></div>
    </div>
    <div class="courses">
        <p class="average">Average: 91%<p>
        <ul>
            <li><p>English</p></li>
            <li><p>Math</p></li>
            <li><p>Science</p></li>
            <li><p>French</p></li>
            <li><p>Geography</p></li>
            <li><p>Health & PE</p></li>
            <li><p>Music</p></li>
            <li><p>Information Technology in a Global Society (IB1)</p></li>
            <li><p>Introduction to Computer Science</p></li>
        </ul>
    </div>
</div> 

*/



        /* var node = document.createElement("div");
        node.id = "popout";

        var header = document.createElement("div");
        header.classList.add("courses-header row");

        var leftBtn = document.createElement("div");
        leftBtn.classList.add("courses-left d-inline col-2");
        var chevronLeft = document.createElement("i");
        chevronLeft.classList.add("fas fa-chevron-left");
        leftBtn.appendChild(chevronLeft);

        var title = document.createElement("h1");
        title.classList.add("courses-title d-inline col");
        title.innerHTML = "Courses";

        var rightBtn = document.createElement("div");
        rightBtn.classList.add("courses-right d-inline col-2");
        var chevronRight = document.createElement("i");
        chevronRight.classList.add("fas fa-chevron-right");
        rightBtn.appendChild(chevronRight);

        header.appendChild(leftBtn);
        header.appendChild(title);
        header.appendChild(rightBtn); */



//Courses
coursesBtn.onclick = function(){
    document.getElementById("popout").classList.toggle("active");
    if (document.getElementById("popout").classList.contains("active")){
        coursesBtn.innerHTML = "Hide Courses";
    }
    else{
        coursesBtn.innerHTML = "Show Courses";
    }
        
};