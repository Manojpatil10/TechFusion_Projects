$(document).ready(function(){

  AOS.init();

  $(".stories-slider").owlCarousel({
    loop:true,
    // autoplay:true,
    margin:50,
    // dots:false,
    // nav:true,
    responsive:{
      0:{
        items:1
      },
      768:{
        items:2
      }
    }
  });
  
});