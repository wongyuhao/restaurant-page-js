import myName from './myName';
import {loadPage} from './initialPage'
import {loadMenuPage} from './menuPage'
import {loadAboutPage} from './aboutPage'

const content = document.querySelector("#content");

loadPage(content);


const display = document.querySelector("#display");

const menu = document.querySelector("#menu");
const about = document.querySelector("#about");

loadMenuPage(display);


menu.addEventListener("click",()=>{

    display.innerHTML=''
    loadMenuPage(display);
  
  
})

about.addEventListener("click",()=>{

  display.innerHTML=''
  loadAboutPage(display);
})




