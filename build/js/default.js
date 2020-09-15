/*

  * подключение js-модулей
  * //= modules/file.js

*/

'use strict';
(function () {
  var menuBtn = document.querySelector('.main-header__btn');
  var wrapMenu = document.querySelector(".main-header__wrap-menu");

  menuBtn.addEventListener('click', function (evt) {
    evt.preventDefault();

    if (menuBtn.classList.contains('main-header__btn--closed')) {
      menuBtn.classList.remove('main-header__btn--closed');
      menuBtn.classList.add('main-header__btn--opened');
      wrapMenu.classList.add('main-header__wrap-menu--active');
    } else {
      menuBtn.classList.add('main-header__btn--closed');
      menuBtn.classList.remove('main-header__btn--opened');
      wrapMenu.classList.remove('main-header__wrap-menu--active');
    }
  });

})();
'use strict';

(function () {

  let clientsSlider = document.querySelector('.clients__swiper-container');
  let servicesSlider = document.querySelector('.services__swiper-container');

  let clientsSliderDesk = function (el) {
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
    clientsSliderDesk(clientsSlider);
  }

  let servicesSliderDesk = function (el) {
    return new Swiper(el, {
      speed: 1000,
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
        1024: {
          slidesPerView: 3,
        }
      }
    });
  };

  if (servicesSlider) {
    servicesSliderDesk(servicesSlider);
  }

})();
'use strict';

$(function () {

  jQuery(function ($) {
    $("#user_phone").mask("+375 (99) 999-99-99");
  });

  $("#user_name").keyup(function () {
    if ($(this).val()) {
      $(this).addClass("not-empty");
    } else {
      $(this).removeClass("not-empty");
    }
  });

  $("#user_phone").keyup(function () {
    if ($(this).val()) {
      $(this).addClass("not-empty");
    } else {
      $(this).removeClass("not-empty");
    }
  });

  $("#user_email").keyup(function () {
    if ($(this).val()) {
      $(this).addClass("not-empty");
    } else {
      $(this).removeClass("not-empty");
    }
  });

  $("#user_comment").keyup(function () {
    if ($(this).val()) {
      $(this).addClass('not-empty');
    } else {
      $(this).removeClass('not-empty');
    }
  });
});
'use strict';

(function () {

  var docStyle = document.documentElement.style;
  var aElem = document.querySelector(".btn");

  if (aElem) {

    var boundingClientRect = aElem.getBoundingClientRect();

    aElem.onmousemove = function (e) {

      var x = e.clientX - boundingClientRect.left;
      var y = e.clientY - boundingClientRect.top;

      var xc = boundingClientRect.width / 2;
      var yc = boundingClientRect.height / 2;

      var dx = x - xc;
      var dy = y - yc;

      docStyle.setProperty('--rx', `${dy / -1}deg`);
      docStyle.setProperty('--ry', `${dx / 10}deg`);

    }

    aElem.onmouseleave = function (e) {

      docStyle.setProperty('--ty', '0');
      docStyle.setProperty('--rx', '0');
      docStyle.setProperty('--ry', '0');

    }

    aElem.onmousedown = function (e) {

      docStyle.setProperty('--tz', '-25px');

    }

    document.body.onmouseup = function (e) {

      docStyle.setProperty('--tz', '-12px');

    }
  }

})();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJkZWZhdWx0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qXHJcblxyXG4gICog0L/QvtC00LrQu9GO0YfQtdC90LjQtSBqcy3QvNC+0LTRg9C70LXQuVxyXG4gICogLy89IG1vZHVsZXMvZmlsZS5qc1xyXG5cclxuKi9cclxuXHJcbid1c2Ugc3RyaWN0JztcclxuKGZ1bmN0aW9uICgpIHtcclxuICB2YXIgbWVudUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWhlYWRlcl9fYnRuJyk7XHJcbiAgdmFyIHdyYXBNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluLWhlYWRlcl9fd3JhcC1tZW51XCIpO1xyXG5cclxuICBtZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2dCkge1xyXG4gICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgaWYgKG1lbnVCdG4uY2xhc3NMaXN0LmNvbnRhaW5zKCdtYWluLWhlYWRlcl9fYnRuLS1jbG9zZWQnKSkge1xyXG4gICAgICBtZW51QnRuLmNsYXNzTGlzdC5yZW1vdmUoJ21haW4taGVhZGVyX19idG4tLWNsb3NlZCcpO1xyXG4gICAgICBtZW51QnRuLmNsYXNzTGlzdC5hZGQoJ21haW4taGVhZGVyX19idG4tLW9wZW5lZCcpO1xyXG4gICAgICB3cmFwTWVudS5jbGFzc0xpc3QuYWRkKCdtYWluLWhlYWRlcl9fd3JhcC1tZW51LS1hY3RpdmUnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG1lbnVCdG4uY2xhc3NMaXN0LmFkZCgnbWFpbi1oZWFkZXJfX2J0bi0tY2xvc2VkJyk7XHJcbiAgICAgIG1lbnVCdG4uY2xhc3NMaXN0LnJlbW92ZSgnbWFpbi1oZWFkZXJfX2J0bi0tb3BlbmVkJyk7XHJcbiAgICAgIHdyYXBNZW51LmNsYXNzTGlzdC5yZW1vdmUoJ21haW4taGVhZGVyX193cmFwLW1lbnUtLWFjdGl2ZScpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxufSkoKTtcclxuJ3VzZSBzdHJpY3QnO1xyXG5cclxuKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgbGV0IGNsaWVudHNTbGlkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xpZW50c19fc3dpcGVyLWNvbnRhaW5lcicpO1xyXG4gIGxldCBzZXJ2aWNlc1NsaWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZXJ2aWNlc19fc3dpcGVyLWNvbnRhaW5lcicpO1xyXG5cclxuICBsZXQgY2xpZW50c1NsaWRlckRlc2sgPSBmdW5jdGlvbiAoZWwpIHtcclxuICAgIHJldHVybiBuZXcgU3dpcGVyKGVsLCB7XHJcbiAgICAgIGxvb3A6IHRydWUsXHJcbiAgICAgIHNwZWVkOiAxMDAwLFxyXG4gICAgICBhdXRvcGxheToge1xyXG4gICAgICAgIGRlbGF5OiAyNTAwLFxyXG4gICAgICB9LFxyXG4gICAgICBuYXZpZ2F0aW9uOiB7XHJcbiAgICAgICAgbmV4dEVsOiAnLnN3aXBlci1idXR0b24tbmV4dCcsXHJcbiAgICAgICAgcHJldkVsOiAnLnN3aXBlci1idXR0b24tcHJldicsXHJcbiAgICAgIH0sXHJcbiAgICAgIGJyZWFrcG9pbnRzOiB7XHJcbiAgICAgICAgMzIwOiB7XHJcbiAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAxLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgNzY4OiB7XHJcbiAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAyLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgOTUwOiB7XHJcbiAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAzLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgMTIwMDoge1xyXG4gICAgICAgICAgc2xpZGVzUGVyVmlldzogNCxcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGlmIChjbGllbnRzU2xpZGVyKSB7XHJcbiAgICBjbGllbnRzU2xpZGVyRGVzayhjbGllbnRzU2xpZGVyKTtcclxuICB9XHJcblxyXG4gIGxldCBzZXJ2aWNlc1NsaWRlckRlc2sgPSBmdW5jdGlvbiAoZWwpIHtcclxuICAgIHJldHVybiBuZXcgU3dpcGVyKGVsLCB7XHJcbiAgICAgIHNwZWVkOiAxMDAwLFxyXG4gICAgICBuYXZpZ2F0aW9uOiB7XHJcbiAgICAgICAgbmV4dEVsOiAnLnN3aXBlci1idXR0b24tbmV4dCcsXHJcbiAgICAgICAgcHJldkVsOiAnLnN3aXBlci1idXR0b24tcHJldicsXHJcbiAgICAgIH0sXHJcbiAgICAgIGJyZWFrcG9pbnRzOiB7XHJcbiAgICAgICAgMzIwOiB7XHJcbiAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAxLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgNzY4OiB7XHJcbiAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAyLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgMTAyNDoge1xyXG4gICAgICAgICAgc2xpZGVzUGVyVmlldzogMyxcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGlmIChzZXJ2aWNlc1NsaWRlcikge1xyXG4gICAgc2VydmljZXNTbGlkZXJEZXNrKHNlcnZpY2VzU2xpZGVyKTtcclxuICB9XHJcblxyXG59KSgpO1xyXG4ndXNlIHN0cmljdCc7XHJcblxyXG4kKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgalF1ZXJ5KGZ1bmN0aW9uICgkKSB7XHJcbiAgICAkKFwiI3VzZXJfcGhvbmVcIikubWFzayhcIiszNzUgKDk5KSA5OTktOTktOTlcIik7XHJcbiAgfSk7XHJcblxyXG4gICQoXCIjdXNlcl9uYW1lXCIpLmtleXVwKGZ1bmN0aW9uICgpIHtcclxuICAgIGlmICgkKHRoaXMpLnZhbCgpKSB7XHJcbiAgICAgICQodGhpcykuYWRkQ2xhc3MoXCJub3QtZW1wdHlcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKFwibm90LWVtcHR5XCIpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICAkKFwiI3VzZXJfcGhvbmVcIikua2V5dXAoZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKCQodGhpcykudmFsKCkpIHtcclxuICAgICAgJCh0aGlzKS5hZGRDbGFzcyhcIm5vdC1lbXB0eVwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoXCJub3QtZW1wdHlcIik7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gICQoXCIjdXNlcl9lbWFpbFwiKS5rZXl1cChmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAoJCh0aGlzKS52YWwoKSkge1xyXG4gICAgICAkKHRoaXMpLmFkZENsYXNzKFwibm90LWVtcHR5XCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcyhcIm5vdC1lbXB0eVwiKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgJChcIiN1c2VyX2NvbW1lbnRcIikua2V5dXAoZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKCQodGhpcykudmFsKCkpIHtcclxuICAgICAgJCh0aGlzKS5hZGRDbGFzcygnbm90LWVtcHR5Jyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdub3QtZW1wdHknKTtcclxuICAgIH1cclxuICB9KTtcclxufSk7XHJcbid1c2Ugc3RyaWN0JztcclxuXHJcbihmdW5jdGlvbiAoKSB7XHJcblxyXG4gIHZhciBkb2NTdHlsZSA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZTtcclxuICB2YXIgYUVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ0blwiKTtcclxuXHJcbiAgaWYgKGFFbGVtKSB7XHJcblxyXG4gICAgdmFyIGJvdW5kaW5nQ2xpZW50UmVjdCA9IGFFbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cclxuICAgIGFFbGVtLm9ubW91c2Vtb3ZlID0gZnVuY3Rpb24gKGUpIHtcclxuXHJcbiAgICAgIHZhciB4ID0gZS5jbGllbnRYIC0gYm91bmRpbmdDbGllbnRSZWN0LmxlZnQ7XHJcbiAgICAgIHZhciB5ID0gZS5jbGllbnRZIC0gYm91bmRpbmdDbGllbnRSZWN0LnRvcDtcclxuXHJcbiAgICAgIHZhciB4YyA9IGJvdW5kaW5nQ2xpZW50UmVjdC53aWR0aCAvIDI7XHJcbiAgICAgIHZhciB5YyA9IGJvdW5kaW5nQ2xpZW50UmVjdC5oZWlnaHQgLyAyO1xyXG5cclxuICAgICAgdmFyIGR4ID0geCAtIHhjO1xyXG4gICAgICB2YXIgZHkgPSB5IC0geWM7XHJcblxyXG4gICAgICBkb2NTdHlsZS5zZXRQcm9wZXJ0eSgnLS1yeCcsIGAke2R5IC8gLTF9ZGVnYCk7XHJcbiAgICAgIGRvY1N0eWxlLnNldFByb3BlcnR5KCctLXJ5JywgYCR7ZHggLyAxMH1kZWdgKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgYUVsZW0ub25tb3VzZWxlYXZlID0gZnVuY3Rpb24gKGUpIHtcclxuXHJcbiAgICAgIGRvY1N0eWxlLnNldFByb3BlcnR5KCctLXR5JywgJzAnKTtcclxuICAgICAgZG9jU3R5bGUuc2V0UHJvcGVydHkoJy0tcngnLCAnMCcpO1xyXG4gICAgICBkb2NTdHlsZS5zZXRQcm9wZXJ0eSgnLS1yeScsICcwJyk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGFFbGVtLm9ubW91c2Vkb3duID0gZnVuY3Rpb24gKGUpIHtcclxuXHJcbiAgICAgIGRvY1N0eWxlLnNldFByb3BlcnR5KCctLXR6JywgJy0yNXB4Jyk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGRvY3VtZW50LmJvZHkub25tb3VzZXVwID0gZnVuY3Rpb24gKGUpIHtcclxuXHJcbiAgICAgIGRvY1N0eWxlLnNldFByb3BlcnR5KCctLXR6JywgJy0xMnB4Jyk7XHJcblxyXG4gICAgfVxyXG4gIH1cclxuXHJcbn0pKCk7Il0sImZpbGUiOiJkZWZhdWx0LmpzIn0=
