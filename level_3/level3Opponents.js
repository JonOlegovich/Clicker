"use strict"

function hpEnemy (){

    const decrease = document.getElementById('decrease')
    let width = 300 ;
    const minSize = 0;
     decrease.style.width = `${width}px`;

    decrease.addEventListener("click" , () =>{
        
        width *= 0.9 ;

        console.log("red")
        
        if (width >= minSize) {
            decrease.style.width = `${width}px`
        }else{
            alert(',kkdd')
        }
        
    })
    
}

hpEnemy()