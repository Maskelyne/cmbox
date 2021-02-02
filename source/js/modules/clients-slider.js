'use strict';

(function () {

  var mainSlider = document.querySelector('.intro__box-swiper-container');
  var servicesSlider = document.querySelector('.services__swiper-container');

  var servicesSliderDesk = function (el) {
    return new Swiper(el, {
      loop: true,
      speed: 1000,
      spaceBetween: 30,
      autoplay: {
        delay: 2500,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        768: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        1024: {
          slidesPerView: 2,
        }
      }
    });
  };

  if (servicesSlider) {
    servicesSliderDesk(servicesSlider);
  }

  var createSlider = function (el) {
    return new Swiper(el, {
      direction: 'vertical',
      slidesPerView: 1,
      loop: true,
      speed: 1000,
      autoplay: {
        delay: 7000,
      },
      mousewheel: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  };

  if (mainSlider) {
    createSlider(mainSlider);
  }

})();
