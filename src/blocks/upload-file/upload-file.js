// button
$('.questions__form-btn').on('click', function() {
    var flag = $('.questions__form-checkbox').prop('checked');
        if (!flag) {
            $('.checkbox__label').addClass('pulse');
            setTimeout(function() {
                $('.checkbox__label').removeClass('pulse');
            }, 1000);
        }
    });


//uploading file name
$(".upload-file__input").change(function(){
    var filename = $(this).val().replace(/.*\\/, "");
    $(".upload-file__message-text").html(filename);
    $(".upload-file__message").addClass("active");
});


// Send form
// $(function() {
//   document.getElementById('sendform').addEventListener('submit', function(evt){
//     var http = new XMLHttpRequest(), f = this;
//     var th = $(this);
//     evt.preventDefault();
//     http.open('POST', '../tps/send.php', true);
//     http.onreadystatechange = function() {
//       if (http.readyState == 4 && http.status == 200) {
//         th.find('input').val('');
//         th.trigger("reset");
//         $('.upload-file__message').removeClass('active');
//         $('.modal-thank').addClass('open');
//         $('body').addClass('scroll-hidden');
//         if (http.responseText.indexOf(f.name.value) == 0) { // очистить поля формы, если в ответе первым словом будет имя отправителя (nameFF)
//           th.trigger('reset');
//         }
//       }
//     }
//     http.onerror = function() {
//       alert('Ошибка, попробуйте еще раз');
//     }
//     http.send(new FormData(f));
//   }, false);
 
// });


