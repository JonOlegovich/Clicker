import { zombieOne, zombieTwo, zombieBoss, zombieAlpha } from "../js/domEl.js"
import { enemyOb } from "./ObserverEnemy.js"
class EnemyPers {
    constructor(hp, name, enemy) {
        this.hp = hp
        this.name = name
        this.enemy = enemy
        this.nextEnemy = this.nextEnemy
    }
    damageOnEnemy(damage) {
        this.hp -= damage
        enemyOb.broadcast(this.name)
        if (this.hp <= 0 ) {
            this.hp = 0
            this.enemy.remove()
            if (this.nextEnemy) {
                this.nextEnemy.style.display = "block";
            }
        }
    }

}
export const enemyOne = new EnemyPers(100, "zombieOne", zombieOne)
export const enemyTwo = new EnemyPers(100, "zombieTwo", zombieTwo)
export const enemyBoss = new EnemyPers(100, "zombieBoss", zombieBoss)
export const enemyAlpha = new EnemyPers(100, "zombieAlpha", zombieAlpha)
enemyOne.nextEnemy = zombieTwo;
enemyTwo.nextEnemy = zombieBoss;
enemyBoss.nextEnemy = zombieAlpha
enemyAlpha.nextEnemy = null