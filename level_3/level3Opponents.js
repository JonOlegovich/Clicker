"use strict"


// Уменьшения блока жизни врага до 0
const boss = document.getElementById('boss')
   let width = 300;
   const decrease = document.getElementById('decrease')
   boss.addEventListener('click',() =>{
    const currentWidth = parseInt(window.getComputedStyle(decrease).width)
    console.log("click")
    if(width >= 0){
        width -=30
        decrease.style.width = width + 'px'
    }else if(width=== 0){
        console.log('game over')
    }
   })
//Уменьшения текста жизни у врага от 100  до 0


//Достть картинку босса

   const bossProsent = document.getElementById('bossProsent')

   

   boss.addEventListener('click',() =>{
    let correntProsent = parseInt(bossProsent.textContent);

    correntProsent -= 10;
    bossProsent.textContent = correntProsent;
    if(correntProsent <= 0){
        bossProsent.textContent = 0

    }
   })
