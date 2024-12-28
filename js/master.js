import "../js/elAddListener.js"
export const deagleEl = document.querySelector(".deagleSong")
export function deagleSong () {
    deagleEl.currentTime = 0.01
    deagleEl.play()
  
}