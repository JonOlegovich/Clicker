import { createEl, buff } from "./createDomEl.js";
import { killer } from "./hero.js";
import { hpMainHero, hpMainHeroNum, stamin , body} from "./domEl.js";
const drink = document.querySelector(".drinkPotion")
const maxHP = 100
const maxDelayStamina = 5
const staminaLine = 4

let count = 0
let countSt = 0;
let staminProgress = 0
function healHero(event) {
    createEl();
    if (buff) {
       body.addEventListener("keydown", (event) => {
            if (event.code === "KeyH") {
                killer.hp += 30;
                count += 1
                drink.currentTime = 0.5
                drink.play()

                if (killer.hp >= maxHP) {
                    killer.hp = maxHP
                }
                hpMainHero.style.width = `${killer.hp}%`
                hpMainHeroNum.textContent = `${killer.hp}%`
                buff.remove();
            }
        }, { once: true });
    }
}

const idStramin = setInterval(() => {
    countSt += 1
    staminProgress += 25
    stamin.style.width = staminProgress + "%"
    if (countSt === staminaLine) {
        countSt = 0
        staminProgress = 0
        if (count === 5) {
            clearInterval(idStramin)
        }
    }

}, 1000)
const idHealth = setInterval(() => {
    healHero()
    if (count === maxDelayStamina) {
        clearInterval(idHealth)
    }
}, 4000)



