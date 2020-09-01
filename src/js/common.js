$(document).ready(function() {

  //= ../blocks/header/header.js
  //= ../blocks/upload-file/upload-file.js
  //= ../blocks/btn-up/btn-up.js
  //= ../blocks/instagram/instagram.js
  //= ../blocks/contacts/contacts.js
  //= ../blocks/info/info.js
  //= ../blocks/tabs/tabs.js
	

	// scroll to block
  if($(window).width() < 767) {
    $('a[href^="#"]').click(function(){
      var target = $(this).attr('href');
      $('html, body').animate({scrollTop: $(target).offset().top -50}, 500);
      return false;
    });
  } else {
   $('a[href^="#"]').click(function(){
    var target = $(this).attr('href');
    $('html, body').animate({scrollTop: $(target).offset().top -78}, 500);
    return false;
  });
 }


  //input mask
  $('input[type=tel]').inputmask({
    "mask": "+7 (999) 999-99-99"
  });

  $('input[name="email"]').inputmask({
    mask: "*{1,20}[.*{1,20}][.*{1,20}][.*{1,20}]@*{1,20}[.*{2,6}][.*{1,2}]",
    greedy: false,
    onBeforePaste: function (pastedValue, opts) {
      pastedValue = pastedValue.toLowerCase();
      return pastedValue.replace("mailto:", "");
    },
    definitions: {
      '*': {
        validator: "[0-9A-Za-z!#$%&'*+/=?^_`{|}~\-]",
        casing: "lower"
      }
    }
  });


});