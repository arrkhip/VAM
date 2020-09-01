$('.js-header__switch').click(function() {
	$('.header__switch').toggleClass('header__switch--open');
	$('.header__mob-menu').toggleClass('header__mob-menu--open');
	$('body').toggleClass('scroll-hidden');
});


//header fixed
$(window).scroll(function(){
	if ($(window).scrollTop() >= 200) {
		$('.header').addClass('header--fixed');
	}
	else {
		$('.header').removeClass('header--fixed');
	}
});


//mobile click on the nav menu link
$('.header__nav-link').click(function() {
	$('.header__switch').removeClass('header__switch--open');
	$('.header__inner').removeClass('header__inner--open');
	$('body').removeClass('scroll-hidden');
});