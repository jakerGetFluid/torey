$(document).foundation();
$(document).ready(function() {

  //title text shadow
  function shadow() {
    $('#hero h1').addClass('shadow');
  }
  setTimeout(shadow, 900);

  //start arrow bounce after delay
  function bounceStart() {
    $('.scroll-arrow i').addClass('bounce');
  }
  setTimeout(bounceStart, 6000);

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

  //bio seciton, on click, fly away not-clicked items, display hidden content
  // $('#bio .row > .one').click(function() {
  //   $(this).next('.two').toggleClass('fade-in');
  // });

});
