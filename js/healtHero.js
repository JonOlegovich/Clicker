import { createEl, buff } from "./createDomEl.js";
import { killer } from "./hero.js";
import { hpMainHero, hpMainHeroNum } from "./domEl.js";
let count = 0
function healHero(event) {
    createEl();
    if (buff) {
        buff.addEventListener("click", (event) => {
            killer.hp += 30;
            count += 1
            if (killer.hp >= 100) {
                killer.hp = 100
            }
            hpMainHero.style.width = `${killer.hp}%`
            hpMainHeroNum.textContent = `${killer.hp}%`
            buff.remove();
        });
    }
}

const idHealth = setInterval(() => {
    healHero()
    if (count === 5) {
        clearInterval(idHealth)
    }
}, 4000)



