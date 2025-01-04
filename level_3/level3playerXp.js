"use strict"


// const player = {
//    hp: 100,
//    hpObserver:new Observer (),
//    upDateHp(value){
//     this.hp = value;
//     hpObserver.broadCast();
//    }


// }
function playerXp(){
const bock = document.getElementById('xpPlay')
let currentWidth = 300;
 
const interval = setInterval(() => {
    currentWidth *= 0.7;
    
    if (currentWidth <= 0){
        clearInterval(interval);
        bock.style.display ='none'
    }
    bock.style.width = `${currentWidth}px`;
},4000);
}
playerXp()

//Уменьшение жизни Игрока
function playerXpMin () {
    const b = document.getElementById('counter')
   //let currentWidth = 100

   const interval = setInterval(() =>{
    let currentValue = parseInt(b.textContent);
    currentValue -= 20
    b.textContent = currentValue;
   },4000)
}
playerXpMin()
 
