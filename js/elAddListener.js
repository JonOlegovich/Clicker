
import {
    zombieOne, zombieTwo, zombieBoss,
    zombieAlpha, hpZombieOne, hpZombieTwo,
    hpZombieBoss, hpZombieAlpha
} from "../js/domEl.js"
import {
    enemyOne, enemyTwo,
    enemyBoss, enemyAlpha
} from "../js/enemy.js"
import { deagleSong } from "../js/master.js"
import { enemyOb } from "./ObserverEnemy.js"
enemyOb.subscribe((event) => {
    deagleSong()
    if(event === "zombieOne"){
        zombieElLister(enemyOne,hpZombieOne)
    }
    else if (event === "zombieTwo"){
        zombieElLister(enemyTwo,hpZombieTwo)
    }
    else if (event === "zombieBoss"){
        zombieElLister(enemyBoss,hpZombieBoss)
    }
    else if (event === "zombieAlpha"){
        zombieElLister(enemyAlpha,hpZombieAlpha)
    }

})
zombieOne.addEventListener("click", () => {
    enemyOne.damageOnEnemy(15)
})
zombieTwo.addEventListener("click", () => {
    enemyTwo.damageOnEnemy(10)
 
})
zombieBoss.addEventListener("click", () => {
    enemyBoss.damageOnEnemy(7)
  
})
zombieAlpha.addEventListener("click", () => {
    enemyAlpha.damageOnEnemy(3)
 
})
function zombieElLister(enemy, el) {
    el.style.width = enemy.hp + "%"
    el.textContent = enemy.hp + "%"
}