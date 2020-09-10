$(".map__dealer-pin").click(function() {
	$(this).parent().find(".map__dealer-pin").removeClass("active")
	// $(this).toggleClass("active")

if (!$(this).hasClass('active')) {
    $(this).addClass('active')
} else {
    $(this).removeClass('active');
}



});