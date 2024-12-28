import { hpMainHero } from "../js/domEl.js"
class MainHero {
    constructor(hp) {
        this.hp = hp
    }
    damage() {
        this.hp -= Math.floor(Math.random() * 100)
        if(this.hp <= 0) this.hp = 0
    }
}
export const killer = new MainHero(100)

const clearHp = setInterval(() => {
    killer.damage()
    if (killer.hp <= 0) {
        clearInterval(clearHp)
        console.log("you lose")
    }
    hpMainHero.style.width = `${killer.hp}%`
    hpMainHero.textContent = `${killer.hp}%`
    console.log(`Текущий HP: ${killer.hp}`
)}, 2500)