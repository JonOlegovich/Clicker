import { hpMainHero, hpMainHeroNum, death } from "./domEl.js"
import { clearHp } from "./settingsHero.js"
import { heroOb } from "./obServerHero.js"
class MainHero {
    constructor(hp) {
        this.hp = hp
    }
    damage() {

        this.hp -= 20
        heroOb.broadcast("damage")
        if (this.hp <= 0) {
            heroOb.broadcast("death")
            this.hp = 0
        }

    }
}
export const killer = new MainHero(100)

