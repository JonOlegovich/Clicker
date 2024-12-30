import { clearHp } from "./settingsHero.js"
import {
    zombieOne, zombieTwo, zombieBoss,
    zombieAlpha, hpZombieOne, hpZombieTwo,
    hpZombieBoss, hpZombieAlpha
} from "../js/domEl.js"
import { killer } from "./hero.js"
import {
    enemyOne, enemyTwo,
    enemyBoss, enemyAlpha
} from "../js/enemy.js"
import { deagleSong, animation } from "../js/master.js"
import { enemyOb } from "./ObserverEnemy.js"
enemyOb.subscribe((event) => {
    animation()
    deagleSong()
    if (event === "zombieOne") {
        zombieElLister(enemyOne, hpZombieOne)
    }
    else if (event === "zombieTwo") {
        zombieElLister(enemyTwo, hpZombieTwo)
    }
    else if (event === "zombieBoss") {
        zombieElLister(enemyBoss, hpZombieBoss)
    }
    else if (event === "zombieAlpha") {
        zombieElLister(enemyAlpha, hpZombieAlpha)
        if(enemyAlpha.hp <= 0){
            console.log("enemy killed")
            clearInterval(clearHp)
        }

    }

})
zombieOne.addEventListener("click", () => {
    enemyOne.damageOnEnemy(100)
})
zombieTwo.addEventListener("click", () => {
    enemyTwo.damageOnEnemy(100)

})
zombieBoss.addEventListener("click", () => {
    enemyBoss.damageOnEnemy(100)

})
zombieAlpha.addEventListener("click", () => {
    enemyAlpha.damageOnEnemy(100)

})
function zombieElLister(enemy, el) {
    el.style.width = enemy.hp + "%"
    el.textContent = enemy.hp + "%"
}