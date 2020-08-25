/*

  * подключение js-модулей
  * //= modules/file.js

*/



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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJkZWZhdWx0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qXHJcblxyXG4gICog0L/QvtC00LrQu9GO0YfQtdC90LjQtSBqcy3QvNC+0LTRg9C70LXQuVxyXG4gICogLy89IG1vZHVsZXMvZmlsZS5qc1xyXG5cclxuKi9cclxuXHJcblxyXG5cclxuJ3VzZSBzdHJpY3QnO1xyXG5cclxuKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgdmFyIG91cldvcmtTbGlkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3VyLXdvcmstc2xpZGVyX19zd2lwZXItY29udGFpbmVyJyk7XHJcblxyXG4gIHZhciBjcmVhdGVTbGlkZXJEZXNrID0gZnVuY3Rpb24gKGVsKSB7XHJcbiAgICByZXR1cm4gbmV3IFN3aXBlcihlbCwge1xyXG4gICAgICBzcGFjZUJldHdlZW46IDIwLFxyXG4gICAgICBsb29wOiB0cnVlLFxyXG4gICAgICBzcGVlZDogMTAwMCxcclxuICAgICAgYXV0b3BsYXk6IHtcclxuICAgICAgICBkZWxheTogMjUwMCxcclxuICAgICAgfSxcclxuICAgICAgbmF2aWdhdGlvbjoge1xyXG4gICAgICAgIG5leHRFbDogJy5vdXItd29yay1zbGlkZXJfX3N3aXBlci1idXR0b24tcHJldicsXHJcbiAgICAgICAgcHJldkVsOiAnLm91ci13b3JrLXNsaWRlcl9fc3dpcGVyLWJ1dHRvbi1uZXh0JyxcclxuICAgICAgfSxcclxuICAgICAgYnJlYWtwb2ludHM6IHtcclxuICAgICAgICAzMjA6IHtcclxuICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDEsXHJcbiAgICAgICAgfSxcclxuICAgICAgICA0ODA6IHtcclxuICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICA3Njg6IHtcclxuICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDMsXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBpZiAob3VyV29ya1NsaWRlcikge1xyXG4gICAgY3JlYXRlU2xpZGVyRGVzayhvdXJXb3JrU2xpZGVyKTtcclxuICB9XHJcblxyXG59KSgpOyJdLCJmaWxlIjoiZGVmYXVsdC5qcyJ9
