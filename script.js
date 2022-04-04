let humbergerBtn = document.querySelector(".fa-bars");
let timesBtn = document.querySelector(".fa-times");
let menuBar = document.querySelector(".menu-bar");


humbergerBtn.addEventListener("click", function(){
    menuBar.style.display = "block";

})
timesBtn.addEventListener("click", function(){
    menuBar.style.display = "none";
})