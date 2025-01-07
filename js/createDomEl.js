import {body} from "./domEl.js"
import { getRandomDelay } from "./funkRandom.js";
export const buff = document.createElement("img")

 export function createEl() {
    buff.src = "./img/heal.gif";
    buff.classList.add("health-possion")
    buff.style.top = getRandomDelay(100,600) + "px"
    buff.style.left = getRandomDelay(300,1200) + "px"
    body.append(buff)
}
