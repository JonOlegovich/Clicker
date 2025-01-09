import { hpMainHero, hpMainHeroNum } from "./domEl.js";
import { killer } from "./hero.js";
if (localStorage.getItem("hp") !== null) {
    killer.hp = Number(localStorage.getItem("hp"));
    hpMainHero.style.width = Number(localStorage.getItem("hp")) + "%";
    hpMainHeroNum.textContent = Number(localStorage.getItem("hp")) + "%";
}
else{
    killer.hp = 100
}
