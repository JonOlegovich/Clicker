import { damage, } from "./domEl.js";
import { killer } from "./hero.js";
import { hpMainHero, hpMainHeroNum ,death} from "./domEl.js"
import { heroOb } from "./obServerHero.js";
export let clearHp = setInterval(() => {
    killer.damage()
}, 2500)

heroOb.subscribe((event) => {
    if (event === "damage") {
        damage.play()
        hpMainHero.style.width = `${killer.hp}%`
        hpMainHeroNum.textContent = `${killer.hp}%`
        console.log(`Текущий HP: ${killer.hp}`)
    }
    else if (event === "death") {
        death.play()
        clearInterval(clearHp)
    }
})
