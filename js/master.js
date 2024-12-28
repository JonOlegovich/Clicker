import "../js/elAddListener.js"
import {killer} from ".././js/hero.js"
const animShot = document.querySelector(".block_gun")
export const deagleEl = document.querySelector(".deagleSong")
export function deagleSong () {
    deagleEl.currentTime = 0.01
    deagleEl.volume = 0.3
    deagleEl.play()
  
}
 export function animation (event){
    animShot.classList.add("anim")
    setTimeout(()=>{animShot.classList.remove("anim")},300)
}
