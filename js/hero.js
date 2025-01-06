import { hpMainHero, hpMainHeroNum, death } from "./domEl.js"
import { clearHp } from "./settingsHero.js"
import { heroOb } from "./obServerHero.js"
import  { clearAddHp } from"./healtHero.js"
class MainHero {
    constructor(hp) {
        this.hp = hp
    }
    damage() {

        this.hp -= 20
        heroOb.broadcast("damage")
        if (this.hp <= 0) {
            clearInterval(clearAddHp)
            heroOb.broadcast("death")
            this.hp = 0
        }

    }
}
export const killer = new MainHero(100)

