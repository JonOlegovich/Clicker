"use strict";
//// controls songs
const menuSwitch = document.querySelector(".mouseclick")
const menuSongEl = document.querySelector(".main-navbar")
const mouseOverEl = document.querySelectorAll(".navbar-menu")
const mouseOver = document.querySelector(".mousemove")
menuSongEl.addEventListener("click", () => {
    mouseOver.volume = 1
    menuSwitch.play()
    console.log("click")
})

mouseOverEl[0].addEventListener("mouseover", () => {
    mouseOver.play()
    mouseOver.volume = 0.5
})
mouseOverEl[1].addEventListener("mouseover", () => {
    mouseOver.play()
    mouseOver.volume = 0.5
})
mouseOverEl[2].addEventListener("mouseover", () => {
    mouseOver.play()
    mouseOver.volume = 0.5
})

//// controls songs
