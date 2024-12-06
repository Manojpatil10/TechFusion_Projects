var validate=()=>{
  event.preventDefault();

  var firstNameData = document.myform.firstName.value;
  var lastNameData = document.myform.lastName.value;
  var emailData = document.myform.email.value;
  var subjectData = document.myform.subject.value;
  var textareaData = document.myform.textarea.value;
  
  if((firstNameData.length!=0 && lastNameData.length!=0) && (subjectData!=0 && textareaData!=0)){
    document.myform.submit();
  }
  else{
    alert("Enter the required details");
  }
  
  let indexOfOccurance = emailData.indexOf("@gmail.com");
  // let indexOfOccurance = myFormData.email.search("@gmail.com");
  // console.log(indexOfOccurance);
  if(indexOfOccurance>=0){
    document.myform.submit();
  }
  else{
    alert("please enter the valid email");
  }

} 

$(document).ready(function(){
  AOS.init();

  $(".customer-slider").owlCarousel({
    items:1,
    loop:true,
    autoplay:true
  });
  $(".content").owlCarousel({
    items:1,
    loop:true,
    nav:true,
    autoplay:true,
    responsive:{
      0:{
        dots:true,
        nav:false
      },
      768:{
        dots:false,
        nav:true
      }
    }
  });
  $(".figure-slider").owlCarousel({
    items:1,
    loop:true,
    dots:false,
    // autoplay:true,
    nav:true,
    navText: ["<i class='bi bi-arrow-left'></i>","<i class='bi bi-arrow-right'></i>"]
  });
});
