const toogle = document.querySelector(".toggle")
const nav = document.querySelector(".navigation")

toogle.addEventListener("click", () => {
    toogle.classList.toggle("active")
    nav.classList.toggle("active")
})