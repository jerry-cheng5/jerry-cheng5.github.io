//Variables
const navbar = document.getElementById("navbar");
const navLinks = document.querySelector(".nav-links > ul");
const topBtn = document.getElementById("topBtn");
const experience = document.getElementById("experiences");
const timeline = document.querySelector("#experiences > .vertical-line")

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

//Experience Cards
let jsonData;
$.ajax({
    url: "assets/js/variables.json",
    dataType: "json",
    cache: false,
    success: function (data) {
        jsonData = data;
    }.bind(this),
        error: function (xhr, status, err) {
        console.log(err);
        alert(err);
    },
    async: false,
});

//Education and Experience cards
const experiences = document.querySelector("#experiences > .container");
for(i in jsonData.experiences){
    if (jsonData.experiences[i].education == true){
        //Making the courses popout
        var popout = document.createElement("div");
        popout.classList.add("popout");
        popout.id = jsonData.experiences[i].id + "-popout";
        
        var header = document.createElement("div");
        header.classList.add("courses-header", "row");

        var title = document.createElement("h1");
        title.classList.add("courses-title", "d-inline", "col");
        title.innerHTML = "Courses";
        header.appendChild(title);

        var courses = document.createElement("div");
        courses.classList.add("courses");
        var average = document.createElement("p");
        average.classList.add("average");
        average.innerHTML = "Average: " + jsonData.experiences[i].average;
        var list = document.createElement("ul");
        for (j in jsonData.experiences[i].courses){
            var listItem = document.createElement("li");
            var course = document.createElement("p");
            course.innerHTML = jsonData.experiences[i].courses[j];
            listItem.appendChild(course);
            list.appendChild(listItem);
        }
        courses.appendChild(average);
        courses.appendChild(list);

        popout.appendChild(header);
        popout.appendChild(courses);
        experiences.appendChild(popout);

        //Making the Education card
        var node = document.createElement("div");
        node.classList.add("education", "row");

        var description = document.createElement("div");
        description.classList.add("d-inline", "col", "description");

        var organization = document.createElement("h1");
        organization.classList.add("d-block");
        organization.innerHTML = jsonData.experiences[i].organization;
        var exp_location = document.createElement("h4");
        exp_location.classList.add("d-block");
        exp_location.innerHTML = jsonData.experiences[i].location;
        var exp_name = document.createElement("h5");
        exp_name.classList.add("d-block");
        exp_name.innerHTML = jsonData.experiences[i].name;
        var button = document.createElement("button");
        button.type = "button";
        button.innerHTML = "Show Courses";
        button.id = jsonData.experiences[i].id;
        description.appendChild(organization);
        description.appendChild(exp_location);
        description.appendChild(exp_name);
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
        
    }
    else{
        //Making the Experience card
        var node = document.createElement("div");
        node.classList.add("education", "experience", "row");

        var description = document.createElement("div");
        description.classList.add("d-inline", "col", "description");

        var organization = document.createElement("h1");
        organization.classList.add("d-block");
        organization.innerHTML = jsonData.experiences[i].organization;
        var exp_location = document.createElement("h4");
        exp_location.classList.add("d-block");
        exp_location.innerHTML = jsonData.experiences[i].location;
        var exp_name = document.createElement("h5");
        exp_name.classList.add("d-block");
        exp_name.innerHTML = jsonData.experiences[i].name;
        var button = document.createElement("button");
        button.type = "button";
        button.innerHTML = "More info";
        button.id = jsonData.experiences[i].id;
        description.appendChild(organization);
        description.appendChild(exp_location);
        description.appendChild(exp_name);
        description.appendChild(button);

        var emblem = document.createElement("div");
        emblem.classList.add("d-inline", "col-1", "ed-emblem");
        var icon = document.createElement("i");
        icon.classList.add("fas", "fa-graduation-cap");
        emblem.appendChild(icon);

        var timeWrapper = document.createElement("div");
        timeWrapper.classList.add("d-inline", "col", "time");
        var time = document.createElement("h5");
        time.style.textAlign = "right";
        time.innerHTML = jsonData.experiences[i].time;
        timeWrapper.appendChild(time);
        
        node.appendChild(timeWrapper);
        node.appendChild(emblem);
        node.appendChild(description);
        experiences.appendChild(node);
    }
}

//Popout
for (let i = 0; i < jsonData.experiences.length; i++) {
    if (jsonData.experiences[i].education == true){
        const coursesBtn = document.getElementById(jsonData.experiences[i].id);
        const query = jsonData.experiences[i].id + "-popout";
        const popout = document.getElementById(query);
        coursesBtn.addEventListener("click", function() {
            popout.classList.toggle("pop-active");
            if (popout.classList.contains("pop-active")){
                coursesBtn.innerHTML = "Hide Courses";
            }
            else{
                coursesBtn.innerHTML = "Show Courses";
            }   
        })
    }
}

//Skills
const skills = document.querySelector(".skills-wrapper");
var accordion = document.createElement("div");
accordion.id = "accordion";

for(i in jsonData.allSkills){
    var node = document.createElement("div");
    node.classList.add("skill-cat");

    var header = document.createElement("div");
    header.classList.add("skill-header");
    header.id = jsonData.allSkills[i].id;

    var btn = document.createElement("button");
    btn.classList.add("btn", "btn-link", "collapsed");
    btn.setAttribute("data-toggle", "collapse");
    btn.setAttribute("data-target", "#collapse" + jsonData.allSkills[i].id);
    btn.setAttribute("aria-expanded", "true");
    btn.setAttribute("aria-controls", "collapse" + jsonData.allSkills[i].id);
    btn.id = jsonData.allSkills[i].id + "btn";

    var catName = document.createElement("h5");
    catName.classList.add("d-inline");
    var headNumber = document.createElement("span");
    headNumber.innerHTML = "01. ";
    catName.appendChild(headNumber);
    catName.innerHTML = "<span>0" + (parseInt(i, 10)+1) + ". </span>" + jsonData.allSkills[i].catagory;
    var downArrow = document.createElement("i");
    downArrow.classList.add("fas", "fa-chevron-down", "d-inline");

    btn.appendChild(catName);
    btn.appendChild(downArrow);
    header.appendChild(btn);
    node.appendChild(header);

    var collapseBox = document.createElement("div");
    collapseBox.id = "collapse" + jsonData.allSkills[i].id;
    collapseBox.classList.add("collapse");
    collapseBox.setAttribute("aria-labelledby", jsonData.allSkills[i].id);
    collapseBox.setAttribute("data-parent", "#accordion");
    var skillBody = document.createElement("div");
    skillBody.classList.add("skill-body");

    for (j in jsonData.allSkills[i].skills){
        var skill = document.createElement("div");
        skill.classList.add("skill", "d-block");
        var skillName = document.createElement("p");
        skillName.innerHTML = jsonData.allSkills[i].skills[j] + ":";

        var progress = document.createElement("div");
        progress.classList.add("progress");
        var progressBar = document.createElement("div");
        progressBar.classList.add("progress-bar");
        progressBar.setAttribute("role", "progressbar");
        progressBar.style = "width: " + jsonData.allSkills[i].progress[j] + "%";
        progressBar.setAttribute("aria-valuenow", jsonData.allSkills[i].progress[j]);
        progressBar.setAttribute("aria-valuemin", "0");
        progressBar.setAttribute("aria-valuemax", "100");
        progressBar.setAttribute("data-toggle", "tooltip");
        progressBar.setAttribute("data-placement", "top");
        progressBar.setAttribute("title", jsonData.allSkills[i].progress[j] + "%");

        skill.appendChild(skillName);
        progress.appendChild(progressBar);
        skill.appendChild(progress);
        skillBody.appendChild(skill);
    }

    collapseBox.appendChild(skillBody);
    node.appendChild(collapseBox);
    accordion.appendChild(node);
}
skills.appendChild(accordion);

//Initialize tooltips
$('[data-toggle="tooltip"]').tooltip(); 

//Projects
const projectsWrapper = document.querySelector(".carousel-inner");

for(i in jsonData.projects){
    var carItem = document.createElement("div");
    carItem.classList.add("carousel-item");
    if (i == 0){
        carItem.classList.add("active");
    }

    var project = document.createElement("div");
    project.classList.add("project");
    projName = document.createElement("h5");
    projName.innerHTML = jsonData.projects[i].name;
    var links = document.createElement("span");
    
    if (jsonData.projects[i].github != ""){
        var github = document.createElement("a");
        github.href = jsonData.projects[i].github;
        var icon = document.createElement("i");
        icon.classList.add("fab", "fa-github");
        github.appendChild(icon);
        links.appendChild(github);
    }
    if(jsonData.projects[i].externalLink != ""){
        var link = document.createElement("a");
        link.href = jsonData.projects[i].externalLink;
        var icon = document.createElement("i");
        icon.classList.add("fas", "fa-external-link-alt");
        link.appendChild(icon);
        links.appendChild(link);
    }
    projName.append(links);
    var type = document.createElement("h4");
    type.innerHTML = jsonData.projects[i].type;
    var description = document.createElement("p");
    description.innerHTML = jsonData.projects[i].description;
    var line = document.createElement("hr");
    var subtitle = document.createElement("h4");
    subtitle.innerHTML = "LANGUAGES, LIBRARIES, AND TOOLS USED";
    var tools = document.createElement("ul");

    for (j in jsonData.projects[i].used){
        var tool = document.createElement("li");
        tool.innerHTML = jsonData.projects[i].used[j];
        tools.appendChild(tool);
    }

    project.appendChild(projName);
    project.appendChild(type);
    project.appendChild(description);
    project.appendChild(line);
    project.appendChild(subtitle);
    project.appendChild(tools);
    carItem.appendChild(project);
    projectsWrapper.appendChild(carItem);
}

//Project Images
const picturesWrapper = document.querySelector(".projects-wrapper");

for(i in jsonData.projects){
    var node = document.createElement("img");
    if (jsonData.projects[i].webpage == true){
        node.classList.add("webpage-image");
    }
    else{
        node.classList.add("phone-image");
    }
    node.id = jsonData.projects[i].id;
    node.src = jsonData.projects[i].projectImage;
    node.setAttribute("data-target", "#projects-carousel");
    node.setAttribute("data-slide-to", i.toString());
    picturesWrapper.appendChild(node);
}

//Image Hovers
for (let i = 0; i < jsonData.projects.length; i++) {
    const currentNode = document.getElementById(jsonData.projects[i].id);

    currentNode.addEventListener("mouseover", function() {
        currentNode.classList.add("selected");
        for (let j = i; j < jsonData.projects.length; j++){
            if (jsonData.projects[j].id != jsonData.projects[i].id){
                const otherNode = document.getElementById(jsonData.projects[j].id);
                console.log(otherNode);
                otherNode.classList.add("blurred");
            }
        }
    })
    currentNode.addEventListener("mouseout", function() {
        currentNode.classList.remove("selected");
        for (let j = i; j < jsonData.projects.length; j++){
            if (jsonData.projects[j].id != jsonData.projects[i].id){
                const otherNode = document.getElementById(jsonData.projects[j].id);
                otherNode.classList.remove("blurred");
            }
        }
    })
}

//Form
const messageBox = document.querySelector("form > div > label > textarea");
messageBox.addEventListener("focus", function() {
    if (this.innerHTML == "Your Message"){
        this.innerHTML = "";
    }
})
messageBox.addEventListener("blur", function() {
    if (this.innerHTML == ""){
        this.innerHTML = "Your Message";
    }
})