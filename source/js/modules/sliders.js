'use strict';

(function () {

  var mainSlider = document.querySelector('.page-main__box-swiper-container');

  var createSlider = function (el) {
    return new Swiper(el, {
      direction: 'vertical',
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      speed: 1200,
      // autoplay: {
      //   delay: 6000,
      // },
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
