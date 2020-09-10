$(".map__dealer-item").click(function() {
	$(this).parent().find(".map__dealer-item").removeClass("active")
	// $(this).toggleClass("active")

if (!$(this).hasClass('active')) {
    $(this).addClass('active')
} else {
    $(this).removeClass('active');
}



});