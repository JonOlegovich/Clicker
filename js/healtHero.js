import { createEl, buff } from "./createDomEl.js";
import { killer } from "./hero.js";
import { hpMainHero, hpMainHeroNum, stamin } from "./domEl.js";

let count = 0
let countSt = 0;
let staminProgress = 0
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
        },{once:true});
    }
}

const idStramin = setInterval(() => {
    countSt += 1
    staminProgress += 25
    stamin.style.width = staminProgress + "%"
    if(countSt === 4){
        countSt = 0 
        staminProgress = 0
        if (count === 5) {
            clearInterval(idStramin)
        }
    }

},1000)
const idHealth = setInterval(() => {
    healHero()
    if (count === 5) {
        clearInterval(idHealth)
    }
}, 4000)



