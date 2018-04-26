$(document).ready(function() {
  //this will be excuted when the page is ready
  $('#slides').superslides({
    animation: 'fade',
    play: 5000,
    pagination: false
  });

  var typed = new Typed(".typed", {
    strings: ["Logically minded", "Passionate", "Creative at heart", "Inspired by greatness"],
    typeSpeed: 70,
    loop: true,
    startDelay: 1000,
    showCursor: false
  });

});