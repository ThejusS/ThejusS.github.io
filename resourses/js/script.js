$(document).ready(function(){
    
  //  $('h1').click(function(){
  //      $(this).css('background-color','#ff0000');
  //  })

  // $('.hamburger').click(function(){
  //      $(this).css('background-color','#ff0000');
  //  })
   
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  const links = document.querySelectorAll('nav-links li');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle("open");
    // links.forEach(link =>{
    //   link.classList.toggle("fade");
    // });
    // links.classList.toggle("fade");
  });

  // window.addEventListener("scroll", function(){
  //   var nav = document.querySelector("nav");
  //   nav.classList.toggle("sticky", window.scrollY);
  // })
    
  
});

