import {
    zombieOne, zombieTwo, zombieBoss,
    zombieAlpha, hpZombieOne, hpZombieTwo,
    hpZombieBoss, hpZombieAlpha
} from "../js/domEl.js"
import {
    enemyOne, enemyTwo,
    enemyBoss, enemyAlpha
} from "../js/enemy.js"


console.log(hpZombieOne)
zombieOne.addEventListener("click", () => {
    enemyOne.damageOnEnemy()
    hpZombieOne.style.width = enemyOne.hp + "%"
    hpZombieOne.textContent = enemyOne.hp + "%"
})
zombieTwo.addEventListener("click", () => {
    enemyTwo.damageOnEnemy()
    hpZombieTwo.style.width = enemyTwo.hp + "%"
    hpZombieTwo.textContent = enemyTwo.hp + "%"
})
zombieBoss.addEventListener("click", () => {
    enemyBoss.damageOnEnemy()
    hpZombieBoss.style.width = enemyBoss.hp + "%"
    hpZombieBoss.textContent = enemyBoss.hp + "%"
})
zombieAlpha.addEventListener("click", () => {
    enemyAlpha.damageOnEnemy()
    hpZombieAlpha.style.width = enemyAlpha.hp + "%"
    hpZombieAlpha.textContent = enemyAlpha.hp + "%"
})