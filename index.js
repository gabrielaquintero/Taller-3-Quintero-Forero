import "./seccion1/seccion1.js";
import "./src/comp-accesories/index.js"
import "./src/comp-opinions/index.js"
import "./src/comp-gallery/index.js"

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    effect: "fade",
    autoplay:{
        delay: 4000,
        disableOnInteraction:false,
    }
   
  });
  $('.owl-carousel').owlCarousel({
    autoplay: true,
    center: true,
    loop: true,
    nav: true,
  });


