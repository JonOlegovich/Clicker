"use strict"

const playKick = document.getElementById("boss")

const mouse = document.getElementsByClassName("audi")
const audio = new Audio("level3audio/kick.mp3")

console.log(mouse)

playKick.addEventListener("click",()=>{
    
    audio.volume = 1;
    audio.play()
   

   
 console.log("click")
})

// let block = document.getElementsByClassName("xpEnemy")

// playKick.addEventListener("click",()=>{

//     document.querySelector('.decrease').style.width = "90%"
//     console.log ("red")
// })
