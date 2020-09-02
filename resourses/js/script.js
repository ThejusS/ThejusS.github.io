$(document).ready(function(){

  // Disable right click
  // document.onmousedown=disableclick;
  // status="Sorry dear... Right click is disabled";
  // function disableclick(event){
  //   if(event.button ==2){
  //     alert(status);
  //     return false;
  //   }
  // }

  // Disable f12 and all other keys to inspect the source code
  document.onkeydown =function(e){
    if(event.keyCode == 123){
      return false;
    }
    if(e.ctrlKey && e.shiftKey && (e.keyCode == 'I'.charCodeAt(0) || e.keyCode == 'i'.charCodeAt(0))){
      return false;
    }
    if (e.ctrlKey && e.shiftKey && (e.keyCode == 'C'.charCodeAt(0) || e.keyCode == 'c'.charCodeAt(0))) {
      return false;
    }
    if (e.ctrlKey && e.shiftKey && (e.keyCode == 'J'.charCodeAt(0) || e.keyCode == 'j'.charCodeAt(0))) {
      return false;
    } 
    if (e.ctrlKey && (e.keyCode == 'U'.charCodeAt(0) || e.keyCode == 'u'.charCodeAt(0))) {
      codeMsg = "Are you trying to read my code ?!"
      alert(codeMsg);
      return false;
    }
    if (e.ctrlKey && (e.keyCode == 'S'.charCodeAt(0) || e.keyCode == 's'.charCodeAt(0))) {
      saveMsg = "No no no... You can't save this website"
      alert(saveMsg)
      return false;
    }
  }
    
  //  $('h1').click(function(){
  //      $(this).css('background-color','#ff0000');
  //  })

  // $('.hamburger').click(function(){
  //      $(this).css('background-color','#ff0000');
  //  })
   
  // Mobile Navigation
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  const links = document.querySelectorAll('nav-links li');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle("open");
  });

  
  // Loading screen animation
  setTimeout(function(){
    $('.loader_bg').fadeToggle();
  },1500);

  // Element filter in projects page
  const buttons = document.querySelector(".project-links").children;
  const items = document.querySelector(".scrollContent").children;
  
  for (let i=0; i<buttons.length; i++){
    buttons[i].addEventListener("click",function(){
      for(let j=0; j<buttons.length; j++){
        buttons[j].classList.remove("active");
      }
      this.classList.add("active");
      const target = this.getAttribute("data-target");

      for(let k=0; k<items.length; k++){
        items[k].style.display="none";

        if(items[k].getAttribute("data-id") == target){
          items[k].style.display = "block";
        }
        if (target == "all") {
          items[k].style.display = "block";
        }
      }
    })
  }

  // Element filter in projects page Mobile view
  const buttonsMobile = document.querySelector(".project-linksM").children;
  const itemsMobile = document.querySelector(".scrollContentM").children;

  for (let i = 0; i < buttonsMobile.length; i++) {
    buttonsMobile[i].addEventListener("click", function () {
      for (let j = 0; j < buttonsMobile.length; j++) {
        buttonsMobile[j].classList.remove("active");
      }
      this.classList.add("active");
      const target = this.getAttribute("data-target");

      for (let k = 0; k < itemsMobile.length; k++) {
        itemsMobile[k].style.display = "none";

        if (items[k].getAttribute("data-id") == target) {
          itemsMobile[k].style.display = "block";
        }
        if (target == "all") {
          itemsMobile[k].style.display = "block";
        }
      }
    })
  }

  // Specific project display
  const cards = document.querySelector(".scrollContent").children;
  const displayItems = document.querySelector(".mainDisplay").children;
  

  for(let x=0; x<cards.length; x++){
    cards[x].addEventListener("click", function(){

      const cardValue = this.getAttribute("data-card");

      for(let y=0; y,displayItems.length; y++){
        displayItems[y].style.display="none";

        if(displayItems[y].getAttribute("data-show") == cardValue){
          displayItems[y].style.display = "block";
        }
      }
    })
  }



});

