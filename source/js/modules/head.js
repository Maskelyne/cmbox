'use strict';

(function () {
  var swiperSelector = document.querySelector('.project__swiper');
  if (swiperSelector) {
    var casesInfoSwiper;

    var initSwiper = function () {
      if (document.body.clientWidth <= 767 && document.body.clientWidth > 480) {
        casesInfoSwiper = undefined;
        if (casesInfoSwiper !== undefined) {
          casesInfoSwiper.destroy();
        }
        return casesInfoSwiper;
      } else if (document.body.clientWidth <= 480) {
        if (casesInfoSwiper !== undefined) {
          casesInfoSwiper.destroy();
        }
        casesInfoSwiper = undefined;
        casesInfoSwiper = new Swiper('.project__swiper', {
          slidesPerView: 1,
          // slidesPerColumn: 1,
          // slidesPerColumnFill: 'row',
          spaceBetween: 10,

          pagination: {
            el: '.project__swiper-pagination',
            type: 'fraction',
          },
          navigation: {
            nextEl: '.project__arrow--next',
            prevEl: '.project__arrow--prev',
          },
        });
        return casesInfoSwiper;
      } else {
        if (casesInfoSwiper !== undefined) {
          casesInfoSwiper.destroy();
        }
        casesInfoSwiper = undefined;
        return casesInfoSwiper;
      }
    };

    initSwiper();

    $(window).on('resize', function () {
      setTimeout(initSwiper, 500);
    });
  }
})();
