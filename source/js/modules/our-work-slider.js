'use strict';

(function () {

  var ourWorkSlider = document.querySelector('.our-work-slider__swiper-container');

  var createSliderDesk = function (el) {
    return new Swiper(el, {
      spaceBetween: 20,
      loop: true,
      speed: 1000,
      autoplay: {
        delay: 2500,
      },
      navigation: {
        nextEl: '.our-work-slider__swiper-button-prev',
        prevEl: '.our-work-slider__swiper-button-next',
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
        },
        480: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        }
      }
    });
  };

  if (ourWorkSlider) {
    createSliderDesk(ourWorkSlider);
  }

})();
