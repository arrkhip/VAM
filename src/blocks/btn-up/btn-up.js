
$('.btn-up').click(function(){
  $('html, body').animate({scrollTop: 0}, 500);
  return false;
});

$(window).scroll(function(){
    if ($(window).scrollTop() >= 300) {
        $('.btn-up').show();
    }
    else {
        $('.btn-up').hide();
    }
});