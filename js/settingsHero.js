import { damage, } from "./domEl.js";
import { killer } from "./hero.js";
import { hpMainHero, hpMainHeroNum ,death,blur} from "./domEl.js"
import { heroOb } from "./obServerHero.js";
export let clearHp = setInterval(() => {
    killer.damage()
}, 2500)

heroOb.subscribe((event) => {            
    if (event === "damage") {
        damage.play()
        localStorage.setItem("hp",killer.hp)
        hpMainHero.style.width = `${killer.hp}%`
        hpMainHeroNum.textContent = `${killer.hp}%`
        console.log(`Текущий HP: ${killer.hp}`)
    }
    else if (event === "death") {
        clearInterval(clearHp)
        localStorage.setItem("hp",killer.hp)
        hpMainHero.style.width = `${killer.hp}%`
        hpMainHeroNum.textContent = `${killer.hp}%`
        death.play()
        blur.classList.add("bodu-blur-on")        
    }
})
