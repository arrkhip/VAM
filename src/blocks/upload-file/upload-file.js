// button
// $('.questions__form-btn').on('click', function() {
//     var flag = $('.questions__form-checkbox').prop('checked');
//         if (!flag) {
//             $('.checkbox__label').addClass('pulse');
//             setTimeout(function() {
//                 $('.checkbox__label').removeClass('pulse');
//             }, 1000);
//         }
//     });


//uploading file name
$(".upload-file__input").change(function(){
    var filename = $(this).val().replace(/.*\\/, "");
    $(".upload-file__message-text").html(filename);
    $(".upload-file__message").addClass("active");
});
