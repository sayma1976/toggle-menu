
let homeBtn = document.querySelector(".home")
let roodBtn = document.querySelector(".rood");
let blauwBtn = document.querySelector(".blauw");
let geelBtn = document.querySelector(".geel");
let groenBtn = document.querySelector(".groen");
let paarsBtn = document.querySelector(".paars");
let mijnList = document.querySelector("ul")

let toggleNavStatus = false
let toggleNav = function () {
    let getAside = document.querySelector(".list");
    let getAsideUl = document.querySelector(".list ul");
    let getAsideLinks = document.querySelectorAll(".list a");
    if (toggleNavStatus === false) {
        let arrayLength = getAsideLinks.length;
        for (var i = 0; i < arrayLength; i++) {
            getAsideLinks[i].style.visibility = "visible"
        }
        toggleNavStatus = true
    }
    else {
        let arrayLength = getAsideLinks.length;
        for (var i = 0; i < arrayLength; i++) {
            getAsideLinks[i].style.visibility = "hidden";
        }
        toggleNavStatus = false


    }
}
mijnList.addEventListener("click", toggleNav);
homeBtn.addEventListener("click", witAchtergrond);
function witAchtergrond() { document.body.style.backgroundColor = "white" };
roodBtn.addEventListener("click", rodeAchtergrond);
function rodeAchtergrond() {
    document.body.style.backgroundColor = "red";
}
blauwBtn.addEventListener("click", blauwAchtergrond);
function blauwAchtergrond() { document.body.style.backgroundColor = "blue" };
geelBtn.addEventListener("click", geelAchtergrond);
function geelAchtergrond() { document.body.style.backgroundColor = "yellow" };
groenBtn.addEventListener("click", groenAchtergrond);
function groenAchtergrond() { document.body.style.backgroundColor = "green" };
paarsBtn.addEventListener("click", paarsAchtergrond);
function paarsAchtergrond() { document.body.style.backgroundColor = "pink" };
