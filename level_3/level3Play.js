"use strict"

const mainMenu = document.getElementById('main_menu_id')
const again_Id = document.getElementById('again_Id')

//Сделать чтбы при клике на mainMenu Возвращался в главное меню
mainMenu.addEventListener('click',() =>{

})

// Чтобы при клике возращался снова на этот Уровень
again_Id.addEventListener('click',() =>{
    window.location.href = "level3.html"
})





