
const toggleBtn = document.querySelector(".sideBar-toggle") ;
const closeBtn = document.querySelector(".closeButton");
const sideBar = document.querySelector(".sideBar");

toggleBtn.addEventListener("click", function(){
        sideBar.classList.add("show-sidebar");
        console.log("hello")
})

closeBtn.addEventListener("click", function(){
        sideBar.classList.remove("show-sidebar");
})