// mobile menu toogle 

const hamburger = document.querySelector('.fa-bars');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', ()=>{
navLinks.classList.toggle('show');
});

const date = new Date();
let year = date.getFullYear();

const updateYear = document.querySelector('.year');
updateYear.innerHTML= year;





// edit by ankush raj
//  (function ($) {
//       "use strict";
  
//       $(".clients-carousel").owlCarousel({
//         autoplay: true,
//         dots: true,
//         loop: true,
//         responsive: { 0: { items: 2 }, 768: { items: 4 }, 900: { items: 6 } },
//       });
  
//       $(".testimonials-carousel").owlCarousel({
//         autoplay: true,
//         dots: true,
//         loop: true,
//         responsive: {
//           0: { items: 1 },
//           576: { items: 2 },
//           768: { items: 3 },
//           992: { items: 4 },
//         },
//       });
//     })(jQuery);
  

  