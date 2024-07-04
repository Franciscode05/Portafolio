
let btnMenu = document.querySelector(".btn-menu");
let navHeader = document.querySelector(".hb")

console.log(navHeader)

btnMenu.addEventListener("click", function(){
    navHeader.classList.toggle("active");
    btnMenu.classList.toggle("bi-x")
})
