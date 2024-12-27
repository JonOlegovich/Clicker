import { zombieOne, zombieTwo, zombieBoss, zombieAlpha } from "../js/domEl.js"
class EnemyPers {
    constructor(hp, name) {
        this.hp = hp
        this.name = name
        this.nextEnemy = this.nextEnemy
    }
    damageOnEnemy() {
        if (this.name === zombieOne) {
            this.hp -= 15
        }
        else if (this.name === zombieTwo) {
            this.hp -= 12
        }
        else if (this.name === zombieBoss) {
            this.hp -= 8
        }
        else if (this.name === zombieAlpha) {
            this.hp -= 3, 5
        }
        if (this.hp <= 0) {
            this.name.remove()
            if (this.nextEnemy) {
                this.nextEnemy.style.display = "block";
            }
        }
    }

}
export const enemyOne = new EnemyPers(100, zombieOne)
export const enemyTwo = new EnemyPers(100, zombieTwo)
export const enemyBoss = new EnemyPers(100, zombieBoss)
export const enemyAlpha = new EnemyPers(100, zombieAlpha)
enemyOne.nextEnemy = zombieTwo;
enemyTwo.nextEnemy = zombieBoss;
enemyBoss.nextEnemy = zombieAlpha
enemyAlpha.nextEnemy = null