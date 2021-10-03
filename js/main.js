let toggleMenu = document.getElementById("toggle");
    projectBtn = document.getElementById("project"),
    closeBtn = document.getElementById("close"),
    overlay = document.querySelector(".overlay"),
    bookMark = document.querySelector(".bookmark");

//add active class to the bookmark
bookMark.onclick = function(){
  bookMark.classList.toggle("active")
}

//add active class to the toggle menu to open nav bar
toggleMenu.onclick = function (){
  toggleMenu.classList.toggle("active")
}
// open the pop up menu
projectBtn.onclick = function(){
  overlay.classList.add("active")
}
//close pop up menu
closeBtn.onclick = function(){
  overlay.classList.remove("active");
  clearClassActive();
}
//adjust overlay pop up to fill the window
overlay.style.height = $(window).height();

let radios = document.querySelectorAll(".radio");
let selects = document.querySelectorAll(".card-container .choose");
let pladge = document.querySelector(".pladge")

//loop on "choose elements" to add active class for it
selects.forEach((choose) => {
  // add click event to the target ele
  choose.addEventListener("click", () =>{
    //clear all active class
    if (choose.classList.contains("active")){
      return false;
    }
    clearClassActive()
    //check if the choose have no reward
    if (choose.classList.contains("no-reward")){
      choose.classList.add("active")
    }else {
      //check if the choose have disaple class
      if (choose.classList.contains("disaple")) {
        return false;
      }else {
        // add active class for it
        choose.classList.add("active")
        choose.append(pladge);
        pladge.style.display = "flex";
      }
    }
  })
});
// function to clear all "active" class each time it runs
function clearClassActive(){
  selects.forEach((ele) => {
    ele.classList.remove("active")
  });
}

//run thanks pop-up
const continueBtn = document.getElementById("continue");
const gotItBtn = document.querySelector(".got-it");
const thnxOverlay = document.querySelector(".thanks-overlay");

continueBtn.onclick = function(){
  thnxOverlay.classList.add("active")
}
//close thanks pop-up
gotItBtn.onclick = function(){
  thnxOverlay.classList.remove("active")
}

const bamboo = document.getElementById("bamboo-click");
const blackEdition = document.getElementById("black-click");

bamboo.onclick = function(){
  overlay.classList.add("active");
  selects[1].classList.add("active")
}
blackEdition.onclick = function(){
  overlay.classList.add("active");
  selects[2].classList.add("active")
}
