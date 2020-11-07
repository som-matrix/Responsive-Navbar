'use:strict';

const navSlide  = () =>{

     const burgerMenu = document.querySelector('.burger');
     const navlinks = document.querySelector('.nav-links');
     const navItems = document.querySelectorAll('.nav-links li');

     //EventListeners
     burgerMenu.addEventListener('click' ,() =>{
           navlinks.classList.toggle('nav-active');
           navItems.forEach((link,index) =>{
              if(link.style.animation){
                  link.style.animation ='';
              } else{
                  link.style.animation = `navFade 0.4s ease forwards ${index / (7+0.4)}s`;
              }
           });
           burgerMenu.classList.toggle('toggle');
          
     });
};
navSlide();