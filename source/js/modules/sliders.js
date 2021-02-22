'use strict';

(function () {

  var mainSliderIntro = document.querySelector('.intro__box-swiper-container');
  var servicesSlider = document.querySelector('.services__swiper-container');
  var feedbackSlider = document.querySelector('.feedback-slider__swiper-container');

  var servicesSliderDesk = function (el) {
    return new Swiper(el, {
      loop: true,
      speed: 1000,
      spaceBetween: 30,
      autoplay: {
        delay: 2500,
      },
      navigation: {
        nextEl: '.services__swiper-button-next',
        prevEl: '.services__swiper-button-prev',
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

  var mainSlider = function (el) {
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

  if (mainSliderIntro) {
    mainSlider(mainSliderIntro);
  }

  var createSlider = function (el) {
    return new Swiper(el, {
      loop: true,
      speed: 1000,
      spaceBetween: 30,
      autoplay: {
        delay: 2500,
      },
      navigation: {
        nextEl: '.feedback-slider__swiper-button-next',
        prevEl: '.feedback-slider__swiper-button-prev',
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

  if (feedbackSlider) {
    createSlider(feedbackSlider);
  }

})();
