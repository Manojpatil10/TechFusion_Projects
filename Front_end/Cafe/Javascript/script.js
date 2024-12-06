$(document).ready(function(){

  $(".customer-slider").owlCarousel({
    // items:1,
    loop:true,
    autoplay:true,
    margin:30,
    responsive:{
      0:{
        items:1
      },
      800:{
        items:2
      },
      1200:{
        items:3
      }
    }
  })
});

const cursor = document.querySelector(".cursor");
document.addEventListener('mousemove', e => {
  cursor.setAttribute("style", "top: "+ (e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px")
})