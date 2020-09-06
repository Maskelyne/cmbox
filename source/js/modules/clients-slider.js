'use strict';

(function () {

  let clientsSlider = document.querySelector('.clients__swiper-container');

  let createSliderDesk = function (el) {
    return new Swiper(el, {
      loop: true,
      speed: 1000,
      autoplay: {
        delay: 2500,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        950: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 4,
        }
      }
    });
  };

  if (clientsSlider) {
    createSliderDesk(clientsSlider);
  }

})();
