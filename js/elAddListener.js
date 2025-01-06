import { clearHp } from "./settingsHero.js"
import {
    zombieOne, zombieTwo, zombieBoss,
    zombieAlpha, hpZombieOne, hpZombieTwo,
    hpZombieBoss, hpZombieAlpha, blur,
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
            setTimeout(()=>
            {
                location.href = "./lvl_two.html"
            },2000)

        }

    }

})
zombieOne.addEventListener("click", () => {
    enemyOne.damageOnEnemy(20)
})
zombieTwo.addEventListener("click", () => {
    enemyTwo.damageOnEnemy(15)

})
zombieBoss.addEventListener("click", () => {
    enemyBoss.damageOnEnemy(8)

})
zombieAlpha.addEventListener("click", () => {
    enemyAlpha.damageOnEnemy(3.5)

})
function zombieElLister(enemy, el) {
    el.style.width = enemy.hp + "%"
    el.textContent = enemy.hp + "%"
}