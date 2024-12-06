document.onreadystatechange = function () {
  if (document.readyState !== "complete") {
      document.querySelector(".wrapper").style.display = "none";
      document.querySelector(".loader").style.display = "block";
  } else {
      document.querySelector(".loader").style.display = "none";
      document.querySelector(".wrapper").style.display = "block";
  }
};

$(document).ready(function(){
  // AOS.init();
  $(".counter").counterUp({
    time:3000
  });

  $(".review-slider").owlCarousel({
    items:3,
    loop:true,
    autoplay:true,
    dots:false,
    margin:20,
    responsive:{
      0:{
        items:1
      },
      768:{
        items:2
      },
      1200:{
        items:3
      }
    }
  });
});