"use strict"

function hpEnemy (){

   const decrease = document.getElementById('decrease')
   let width = 300;
   decrease.addEventListener('click',() =>{
    const currentWidth = parseInt(getComputedStyle(decrease).width)

    if(width > 20){
        width -=10
        decrease.style.width = width + 'px'
    }
   })
    
    
}

hpEnemy()