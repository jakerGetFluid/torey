$(document).foundation();
$(document).ready(function() {

  function shadow(){
    $('#hero h1').addClass('shadow');
  }
  setTimeout(shadow, 900);

  $('#bio .row.pic').hover(function() {
    $('img.bw', this).hide();
    $('img.color', this).show();
  }, function() {
    $('img.color', this).hide();
    $('img.bw', this).show();
  });

});
