var swiper = new Swiper('.slider-base__slider', {
  spaceBetween: 25,
  loop: true,
  slidesPerView: 5,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
  breakpoints: {
    560: {
      slidesPerView: 3,
    },
    400: {
      slidesPerView: 2,
    }
  },
  navigation: {
    nextEl: '.slider-base__arrow-next',
    prevEl: '.slider-base__arrow-prev',
  },
});