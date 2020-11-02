var galleryThumbs = new Swiper('.firm__slider-thumbs', {
      spaceBetween: 12,
      // loop: true,
      slidesPerView: 5,
      freeMode: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      breakpoints: {
       560: {
          slidesPerView: 3,
        },
      }
    });
    var galleryTop = new Swiper('.firm__slider-top', {
      spaceBetween: 10,
      loop: true,
      navigation: {
        nextEl: '.firm__slider-next',
        prevEl: '.firm__slider-prev',
      },
      thumbs: {
        swiper: galleryThumbs
      }
    });


var galleryThumbsNew = new Swiper('.firm__slider-thumbs-new', {
      spaceBetween: 12,
      // loop: true,
      slidesPerView: 5,
      freeMode: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      breakpoints: {
       560: {
          slidesPerView: 3,
        },
      }
    });
    var galleryTopNew = new Swiper('.firm__slider-top-new', {
      spaceBetween: 10,
      loop: true,
      navigation: {
        nextEl: '.firm__slider-next-new',
        prevEl: '.firm__slider-prev-new',
      },
      thumbs: {
        swiper: galleryThumbsNew
      }
    });
