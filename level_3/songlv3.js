"use strict"

const playKick = document.getElementById("boss")

const mouse = document.getElementsByClassName("audi")
const audio = new Audio("level3audio/desert-eagle-cs.mp3")

console.log(mouse)

playKick.addEventListener("click",()=>{
    
    audio.volume = 1;
    audio.play()
   

})




