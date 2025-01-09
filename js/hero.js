import { hpMainHero, hpMainHeroNum, death } from "./domEl.js"
import { clearHp } from "./settingsHero.js"
import { heroOb } from "./obServerHero.js"
import { createEl } from "./createDomEl.js"
class MainHero {
    constructor(hp) {
        this.hp = hp
    }
    damage() {

        this.hp -= 20
        if (this.hp <= 0) {
            this.hp = 0
            heroOb.broadcast("death")
            return

        }
        heroOb.broadcast("damage")
    }
}
export const killer = new MainHero(100)


