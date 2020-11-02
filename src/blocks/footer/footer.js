// form-request form
$(function() {
  document.getElementById('footer-form').addEventListener('submit', function(evt){
    var http = new XMLHttpRequest(), f = this;
    var th = $(this);
    evt.preventDefault();
    http.open('POST', './send.php', true);
    http.onreadystatechange = function() {
      if (http.readyState == 4 && http.status == 200) {
        th.find('input').val('');
        th.trigger("reset");
        $('.upload-file__message').removeClass('active');
        $.fancybox.close();
        $.fancybox.open({
          src  : '#modal-thanks',
          type : 'inline'
        });
        if (http.responseText.indexOf(f.name.value) == 0) { // очистить поля формы, если в ответе первым словом будет имя отправителя (nameFF)
          th.trigger('reset');
        }
      }
    }
    http.onerror = function() {
      alert('Ошибка, попробуйте еще раз');
    }
    http.send(new FormData(f));
  }, false);
 
});


$('.footer__form-btn').on('click', function() {
  var flag = $('.checkbox__input').prop('checked');
  // var flag = $(this).closest('.modal__controls').find('.checkbox__input').prop('checked');
  if (!flag) {
    $('.checkbox__label').addClass('pulse');
    setTimeout(function() {
      $('.checkbox__label').removeClass('pulse');
    }, 1000);
  }
});