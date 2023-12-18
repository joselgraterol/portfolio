let burger = document.querySelector("#burger");
let equis = document.querySelector("#equis");
let menu = document.querySelector("#navigation");
let span = document.querySelector("#span");
let section = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header #navigation .menu-item a");
let newDiv = document.createElement("div");
let laSombra = document.querySelector("#la-sombra");

burger.addEventListener("click", function(){
    menu.classList.add("activar");
    // add div sombra
    addSombra();
})

// sombra function
function addSombra() {
    newDiv.classList.add("div-shadow");
    laSombra.appendChild(newDiv);
}


equis.addEventListener("click", function(){
    menu.classList.remove("activar");
    newDiv.classList.remove("div-shadow");
})

// click on document and hide menu

document.onclick = (e) => {
	if(e.target.id !== "navigation" && e.target.id !== "span" && e.target.id !== "burger"){
		menu.classList.remove("activar");
		newDiv.classList.remove("div-shadow");
	}
}




// spyscroll

window.onscroll = () => {
    section.forEach(sec =>{

        let top = window.scrollY;
        let height = sec.offsetHeight;
        let offset = sec.offsetTop - 150;
        let id = sec.getAttribute('id');
    
        if(top >= offset && top < offset + height){
          navLinks.forEach(links =>{
            links.classList.remove('menu-active');
            document.querySelector('header #navigation .menu-item a[href*='+id+']').classList.add('menu-active');
          });
        };
    
      });
}

//auto type
let typed = new Typed(".auto-input", {
    strings: ["unique", "attractive", "modern"],
	typeSpeed: 100,
	backSpeed: 100,
	loop: true
  });
  
AOS.init();



//automatic year
function modifyYear(){
     let yearContainer = document.querySelector("#year")
     const date = new Date();
     const currentYear = date.getFullYear()
     yearContainer.innerHTML = currentYear
} 

window.addEventListener("load", modifyYear)




