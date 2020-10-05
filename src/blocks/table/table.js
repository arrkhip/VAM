$(".table__header").click(function() {
	 // $(".map__dealer-item").not(this).parent().find(".map__dealer-item").removeClass("active")         
	// $(".map__dealer-item").parent().find(".map__dealer-item").removeClass("active")
	// $(this).toggleClass("active")

	if (!$(this).closest(".table__row").hasClass('active')) {
		$(".table__row").parent().find(".table__row").removeClass("active");
		$(this).closest(".table__row").addClass('active');
	} else {
		$(this).closest(".table__row").removeClass('active');
	}

});