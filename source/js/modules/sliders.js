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
      navigation: {
        nextEl: '.services__swiper-button-next',
        prevEl: '.services__swiper-button-prev',
      },
      breakpoints: {
        768: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 2,
        }
      }
    });
  };

  if (servicesSlider) {
    servicesSliderDesk(servicesSlider);

    jQuery(function($){
      $(document).mouseup(function (e){
        var div = $(".swiper-slide");
        if (!div.is(e.target)
          && div.has(e.target).length === 0) {
          jQuery("iframe").each(function () {
            jQuery(this)[0].contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*')
          });
        }
      });
    });

    $(document).on('click', '.services__swiper-button-prev', function() {
      jQuery("iframe").each(function () {
        jQuery(this)[0].contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*')
      });
    });

    $(document).on('click', '.services__swiper-button-next', function() {
      jQuery("iframe").each(function () {
        jQuery(this)[0].contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*')
      });
    });
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
      allowTouchMove: true,
      navigation: {
        nextEl: '.feedback-slider__swiper-button-next',
        prevEl: '.feedback-slider__swiper-button-prev',
      },
      breakpoints: {
        768: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 2,
        }
      }
    });
  };

  if (feedbackSlider) {
    createSlider(feedbackSlider);

    jQuery(function($){
      $(document).mouseup(function (e){
        var div = $(".swiper-slide");
        if (!div.is(e.target)
          && div.has(e.target).length === 0) {
          jQuery("iframe").each(function () {
            jQuery(this)[0].contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*')
          });
        }
      });
    });

    $(document).on('click', '.feedback-slider__swiper-button-prev', function() {
      jQuery("iframe").each(function () {
        jQuery(this)[0].contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*')
      });
    });

    $(document).on('click', '.feedback-slider__swiper-button-next', function() {
      jQuery("iframe").each(function () {
        jQuery(this)[0].contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*')
      });
    });
  }

})();
