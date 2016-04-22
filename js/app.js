$(document).foundation();
$(window).on("load", function() {

  function gateSlide() {
    $('#gate').slideUp(400);
  }
  setTimeout(gateSlide, 3000);

  //title text shadow
  function shadow() {
    $('#hero h1').addClass('shadow');
  }
  setTimeout(shadow, 3900);

  //start arrow bounce after delay
  function bounceStart() {
    $('.scroll-arrow i').addClass('bounce');
  }
  setTimeout(bounceStart, 9000);

  //smooth scroll
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });

  //bio section, on hover, image swap for color
  $('#bio .row > .one').hover(function() {
    $('img.bw', this).hide();
    $('img.color', this).show();
  }, function() {
    $('img.color', this).hide();
    $('img.bw', this).show();
  });

  $('#bio .row > .one').click(function(event) {
    $(this).toggleClass('active');
  });

});
