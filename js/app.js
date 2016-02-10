$(document).foundation();
$(document).ready(function() {

  function shadow(){
    $('#hero h1').addClass('shadow');
  }
  setTimeout(shadow, 900);


  //bio section, on hover, image swap for color
  $('#bio .row > .column').hover(function() {
    $('img.bw', this).hide();
    $('img.color', this).show();
  }, function() {
    $('img.color', this).hide();
    $('img.bw', this).show();
  });

  //bio seciton, on click, fly away not-clicked items, display hidden content
  $('#bio .row > .column').click(function() {
    //select copy of selected column
    $(this).next('.column').fadeIn('400');
  });

});
