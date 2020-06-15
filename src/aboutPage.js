const loadAboutPage = (container) =>{
  const aboutDiv = document.createElement("div");
  aboutDiv.setAttribute("id","aboutDiv");
  
  aboutDiv.innerHTML+=`<p>By reservations only.<p>`
  
  const mapDiv = document.createElement("div");
  mapDiv.setAttribute("id","map")

  mapDiv.innerHTML=`<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.802074943397!2d101.70869441403669!3d3.146867297708637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc362bddc85e4d%3A0xce9397f80d5533f5!2sMcDonald&#39;s%20Bukit%20Bintang!5e0!3m2!1sen!2smy!4v1592235091934!5m2!1sen!2smy"  allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>`

  aboutDiv.appendChild(mapDiv);
  container.appendChild(aboutDiv);
}

export {loadAboutPage};
    
    

