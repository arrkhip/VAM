// $(".map__dealer-item").click(function() {
$(".map__dealer-header").click(function() {
	 // $(".map__dealer-item").not(this).parent().find(".map__dealer-item").removeClass("active")         
	// $(".map__dealer-item").parent().find(".map__dealer-item").removeClass("active")
	// $(this).toggleClass("active")

	if (!$(this).closest(".map__dealer-item").hasClass('active')) {
		$(".map__dealer-item").parent().find(".map__dealer-item").removeClass("active")
		$(this).closest(".map__dealer-item").addClass('active')
	} else {
		$(this).closest(".map__dealer-item").removeClass('active');
	}

});


$(".js-map-close").click(function() {
	$(this).closest(".map__dealer-item").removeClass("active")
});