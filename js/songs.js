"use strict";
//// controls songs
const menuSwitch = document.querySelector(".mouseclick")
const menuSongEl = document.querySelector(".main-navbar")
const mouseOverEl = document.querySelectorAll(".navbar-menu")
const mouseOver = document.querySelector(".mousemove")
menuSongEl.addEventListener("click", () => {
    mouseOver.volume = 0.6
    menuSwitch.play()
    console.log("click")
})

mouseOverEl[0].addEventListener("mouseover", () => {
    mouseOver.play()
    mouseOver.volume = 0.4
})
mouseOverEl[1].addEventListener("mouseover", () => {
    mouseOver.play()
    mouseOver.volume = 0.4
})
mouseOverEl[2].addEventListener("mouseover", () => {
    mouseOver.play()
    mouseOver.volume = 0.4
})

//// controls songs
// bg-music
document.querySelector(".bg-music").volume = 0.2
