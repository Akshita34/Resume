var navMenuAnchorTags = document.querySelectorAll(".nav-menu a");
console.log(navMenuAnchorTags);

for(var i=0; i<navMenuAnchorTags.length; i++){
    navMenuAnchorTags[i].addEventListener("click", function(event){
        event.preventDefault();

        var targetSectionID = this.textContent.trim().toLowerCase();
        var targetSection = document.getElementById(targetSectionID);
        // console.log(targetSection);
        var interval = setInterval(function(){
            var targetSectionCoordinates = targetSection.getBoundingClientRect();
            if(targetSectionCoordinates.top <=20 ){  //Ideally yaha par 20 ki jagah 0 hona tha but kyunki mereko udhar section heading nhi dikh raha tha toh maine dt. thoda inc kar diya ha.
                clearInterval(interval);
            }
            window.scrollBy(0,50);
        },20)
    })
}



var progressBars = document.querySelectorAll(".skills-progress > div");
console.log(progressBars);
var skillContainer = document.getElementById("skills-container");
window.addEventListener("scroll", checkScroll);
var animation = false;

function initializeBars(){
    for(let bar of progressBars){
        bar.style.width = 0 + "%";
    }
}

initializeBars();

function fillBars(){
    for(let bar of progressBars){
        let targetWidth = bar.getAttribute("data-bar-width");
        let currentWidth = 0;
        let intervall = setInterval(function(){
            if(currentWidth > targetWidth){
                clearInterval(intervall);
                return;
            }
            currentWidth++;
            bar.style.width = currentWidth + "%";
        },15)
    }
}

function checkScroll(){
    var coordinates = skillContainer.getBoundingClientRect();
    if(!animation && coordinates.top<window.innerHeight){
        animation = true;
        console.log("hii");
        fillBars();
    } else if(coordinates.top>window.innerHeight){
        animation = false;
        initializeBars();
        // fillBars();
    }
}