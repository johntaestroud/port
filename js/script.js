$(document).ready(function() {
  //this will be excuted when the page is ready
  $('#slides').superslides({
    animation: 'fade',
    play: 5000,
    pagination: false
  });

  var typed = new Typed(".typed", {
    strings: ["Logically-minded", "Passionate", "Creative at heart", "Inspired by greatness"],
    typeSpeed: 70,
    loop: true,
    startDelay: 1000,
    showCursor: false
  });

  var statsTopOffset = $(".statsSection").offset().top;//getting the top position

  var countUpFinished = false;

  $(window).scroll(function() {//when scrolling, execute this code below:
    //if we di
     if(!countUpFinished && window.pageYOffset > statsTopOffset - $(window).height() + 200) {
       $(".counter").each(function() {
        var element = $(this);
        var endVal = parseInt(element.text());

        element.countup(endVal);

        })

       countUpFinished = true;

      }
  });

  $("[data-fancybox]").fancybox();

  $(".items").isotope({
    filter: '*',
    animationOptions: {
      duration: 1500,
      easing: 'linear',
      queue: false
    }
  })

 

 

});
















