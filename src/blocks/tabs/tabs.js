// tabs
$('.js-tabs__item').click(function() {
	$(this).addClass('active').siblings().removeClass('active')
	.closest('.js-tabs').find('.js-tabs__content').removeClass('active').eq($(this).index()).addClass('active');
});