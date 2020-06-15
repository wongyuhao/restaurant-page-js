const loadMenuPage= (container)=>{
  const menuDiv = document.createElement("div")
  menuDiv.setAttribute("id","menuDiv");

 const boot = createMenuItem('boot');
 const bell = createMenuItem('bell');
 const bone = createMenuItem('bone');
 const ball = createMenuItem('ball')

 menuDiv.appendChild(boot);
 menuDiv.appendChild(bell);
 menuDiv.appendChild(bone);
 menuDiv.appendChild(ball);


 container.appendChild(menuDiv);


}

const createMenuItem = (id)=>{
  const item = document.createElement("div");
  item.setAttribute("id",id);
  item.setAttribute('class','menuItem')
  const image = document.createElement("img");
  image.setAttribute("class","menuImg")
  image.src=`../assets/${id}.png`;
  
  const text = document.createElement("p");
  text.setAttribute("class","menuText")
  text.textContent=`Le ${id}`;
  

  item.appendChild(text);
  item.appendChild(image);

  image.addEventListener("click",function(){
    window.open('https://www.google.com/search?q=mcdonalds+near+me',"_blank");
  })

  return item;

}



export {loadMenuPage}