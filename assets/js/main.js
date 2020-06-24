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

//Timeline height
experience.style.height = "200vh";
timeline.style.height = experience.style.height;

//Experiences
/* var jsonData;
const experiences = document.querySelector("#experiences > .container");
fetch("assets/js/variables.json")
    .then(function(resp){
        return resp.json();
    })
    .then(function(data){
        jsonData = data;
        for(i in jsonData.experiences){
            if (jsonData.experiences[i].education == true){
                //Making the courses popout
                var popout = document.createElement("div");
                popout.classList.add("popout");
                popout.id = jsonData.experiences[i].id + "-popout";
                
                var header = document.createElement("div");
                header.classList.add("courses-header", "row");

                if (jsonData.experiences[i].summer != null){
                    var leftBtn = document.createElement("div");
                    leftBtn.classList.add("courses-left", "d-inline", "col-2");
                    var chevronLeft = document.createElement("i");
                    chevronLeft.classList.add("fas", "fa-chevron-left");
                    leftBtn.appendChild(chevronLeft);
                    var title = document.createElement("h1");
                    title.classList.add("courses-title", "d-inline", "col");
                    title.innerHTML = "Courses";
                    var rightBtn = document.createElement("div");
                    rightBtn.classList.add("courses-right", "d-inline", "col-2");
                    var chevronRight = document.createElement("i");
                    chevronRight.classList.add("fas", "fa-chevron-right");
                    rightBtn.appendChild(chevronRight);
                    header.appendChild(leftBtn);
                    header.appendChild(title);
                    header.appendChild(rightBtn);
                }
                else{
                    var title = document.createElement("h1");
                    title.classList.add("courses-title", "d-inline", "col");
                    title.innerHTML = "Courses";
                    header.appendChild(title);
                }

                var courses = document.createElement("div");
                courses.classList.add("courses");
                var average = document.createElement("p");
                average.classList.add("average");
                average.innerHTML = jsonData.experiences[i].average;
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

                var query = ".education > div > #" + jsonData.experiences[i].id;
                var secondQuery = jsonData.experiences[i].id + "-popout";
                const coursesBtn = document.querySelector(query);
                coursesBtn.onclick = function(){
                    document.getElementById(secondQuery).classList.toggle("active");
                    if (document.getElementById(secondQuery).classList.contains("active")){
                        coursesBtn.innerHTML = "Hide Courses";
                    }
                    else{
                        coursesBtn.innerHTML = "Show Courses";
                    }   
                };
                
            }
            else{

            }
        }
    }); */


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


for(i in jsonData.experiences){
    if (jsonData.experiences[i].education == true){
        //Making the courses popout
        var popout = document.createElement("div");
        popout.classList.add("popout");
        popout.id = jsonData.experiences[i].id + "-popout";
        
        var header = document.createElement("div");
        header.classList.add("courses-header", "row");

        if (jsonData.experiences[i].summer != null){
            var leftBtn = document.createElement("div");
            leftBtn.classList.add("courses-left", "d-inline", "col-2");
            var chevronLeft = document.createElement("i");
            chevronLeft.classList.add("fas", "fa-chevron-left");
            leftBtn.appendChild(chevronLeft);
            var title = document.createElement("h1");
            title.classList.add("courses-title", "d-inline", "col");
            title.innerHTML = "Courses";
            var rightBtn = document.createElement("div");
            rightBtn.classList.add("courses-right", "d-inline", "col-2");
            var chevronRight = document.createElement("i");
            chevronRight.classList.add("fas", "fa-chevron-right");
            rightBtn.appendChild(chevronRight);
            header.appendChild(leftBtn);
            header.appendChild(title);
            header.appendChild(rightBtn);
        }
        else{
            var title = document.createElement("h1");
            title.classList.add("courses-title", "d-inline", "col");
            title.innerHTML = "Courses";
            header.appendChild(title);
        }

        var courses = document.createElement("div");
        courses.classList.add("courses");
        var average = document.createElement("p");
        average.classList.add("average");
        average.innerHTML = jsonData.experiences[i].average;
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

        var query = ".education > div > #" + jsonData.experiences[i].id;
        var secondQuery = jsonData.experiences[i].id + "-popout";
        const coursesBtn = document.querySelector(query);
        coursesBtn.onclick = function(){
            document.getElementById(secondQuery).classList.toggle("active");
            if (document.getElementById(secondQuery).classList.contains("active")){
                coursesBtn.innerHTML = "Hide Courses";
            }
            else{
                coursesBtn.innerHTML = "Show Courses";
            }   
        };
        
    }
    else{

    }
}