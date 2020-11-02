// Send forms 
// Modal-Call
$(function() {
  document.getElementById('modal-call').addEventListener('submit', function(evt){
    var http = new XMLHttpRequest(), f = this;
    var th = $(this);
    evt.preventDefault();
    http.open('POST', './send-call.php', true);
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

// Modal-Selection
$(function() {
  document.getElementById('modal-selection').addEventListener('submit', function(evt){
    var http = new XMLHttpRequest(), f = this;
    var th = $(this);
    evt.preventDefault();
    http.open('POST', './send-selection.php', true);
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

// Modal-Consultation
$(function() {
  document.getElementById('modal-consultation').addEventListener('submit', function(evt){
    var http = new XMLHttpRequest(), f = this;
    var th = $(this);
    evt.preventDefault();
    http.open('POST', './send-consultation.php', true);
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

// Modal-Spares
$(function() {
  document.getElementById('modal-spares').addEventListener('submit', function(evt){
    var http = new XMLHttpRequest(), f = this;
    var th = $(this);
    evt.preventDefault();
    http.open('POST', './send-spares.php', true);
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

// Modal-Quiz
$(function() {
  document.getElementById('modal-quiz').addEventListener('submit', function(evt){
    var http = new XMLHttpRequest(), f = this;
    var th = $(this);
    evt.preventDefault();
    http.open('POST', './send-quiz.php', true);
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


$('.modal__controls-btn').on('click', function() {
  // var flag = $('.checkbox__input').prop('checked');
  var flag = $(this).closest('.modal__controls').find('.checkbox__input').prop('checked');
  if (!flag) {
    $('.checkbox__label').addClass('pulse');
    setTimeout(function() {
      $('.checkbox__label').removeClass('pulse');
    }, 1000);
  }
});
