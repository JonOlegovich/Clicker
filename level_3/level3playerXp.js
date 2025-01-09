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
        clearInterval(interval) ;
        return;
       // bock.style.display ='none'
    }
    bock.style.width = `${currentWidth}px`;
},3000);
}


playerXp()
//Музыка когда жизни у игрока закончились
const audioGameOver = new Audio("level3audio/skipekick.mp3")
//Уменьшение жизни Игрока
function playerXpMin () {
    const b = document.getElementById('counter')
   const gameOver = document.getElementById('game_OverId')

   const interval = setInterval(() =>{
    let currentValue = parseInt(b.textContent);
    currentValue -= 20
    b.textContent = currentValue;
    if(currentValue <= 0){
        clearInterval(interval)
        b.textContent = currentValue
        gameOver.style.display ='block'
        
        audioGameOver.volume = 1;
        audioGameOver.play()
    }
   },3000)
}
playerXpMin()


 
