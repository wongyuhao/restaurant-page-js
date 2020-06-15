const loadPage = (container) =>{
  createHeader(container);
  createNav(container);
  const display = document.createElement("div");
  display.setAttribute("id", "display");
  container.appendChild(display);
}

const createHeader=(container)=>{
  const header = document.createElement("header")
  const name = document.createElement("h1");
  name.setAttribute("id","name")
  const subtext = document.createElement("h2");
  subtext.setAttribute("id","subtext")

  name.innerHTML="Le McNuggets"
  subtext.innerHTML= "The Exclusive Deconstructed Chicken Dining Experience"

  header.appendChild(name);
  header.appendChild(subtext);
  container.appendChild(header)
  console.log("page loaded")
} 

const createNav=(container)=>{

    const nav = document.createElement("nav");
    const tabs = document.createElement("ul");

    const menu = document.createElement("li")
    const about = document.createElement("li")
    
    menu.setAttribute("id","menu");
    menu.setAttribute("class","tab");
    about.setAttribute("id",'about');
    about.setAttribute("class",'tab');
    
    menu.innerHTML="menu"
    about.innerHTML = "about"

    tabs.appendChild(menu);

    tabs.appendChild(about);

    nav.appendChild(tabs);
    
    container.appendChild(nav);

}


export {loadPage}