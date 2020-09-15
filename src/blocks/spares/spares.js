var swiper = new Swiper('.spares__slider', {
	slidesPerView: 4,
	slidesPerColumn: 2,
	spaceBetween: 18,
	navigation: {
		nextEl: '.spares__slider-arrow-next',
		prevEl: '.spares__slider-arrow-prev',
	},
	breakpoints: {
		1200: {
			slidesPerView: 3,
			spaceBetween: 10,
		},
		992: {
			slidesPerView: 4,
		},
		768: {
			slidesPerView: 3,
		},
		560: {
			slidesPerView: 2,
		},
	}
});

