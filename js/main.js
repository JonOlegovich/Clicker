"use strict"
const listDevs = document.querySelector(".devs-menu")
console.log(listDevs)

const devMenu = document.querySelectorAll(".navbar-menu")
console.log(devMenu)
devMenu[1].addEventListener("click", () => {
    listDevs.classList.add("devs-menu_on")
    console.log("click")
})

document.body.addEventListener("keydown", (event) => {
    if (event.key === `Escape`) {
        listDevs.classList.remove("devs-menu_on")
    }
    console.log("body")
})
// clickP
const clickMenu = document.querySelector(".click")
const clickMusic = document.querySelector(".bg-music")
document.body.addEventListener("click", () => {
   clickMenu.classList.add("clickHov")
   clickMusic.play()
   clickMusic.volume = 0.2
})