/*

  * подключение js-модулей
  * //= modules/file.js

*/

'use strict';
(function () {
  var menuBtn = document.querySelector('.main-header__btn');
  var wrapMenu = document.querySelector(".main-header__wrap-menu");
  var stageMenuBtn = document.querySelector('.main-header__todo-menu');
  var stageMenu = document.querySelector('.main-header__stage-nav');

  menuBtn.addEventListener('click', function (evt) {
    evt.preventDefault();

    if (menuBtn.classList.contains('main-header__btn--closed')) {
      menuBtn.classList.remove('main-header__btn--closed');
      menuBtn.classList.add('main-header__btn--opened');
      wrapMenu.classList.add('main-header__wrap-menu--active');
      document.body.style.overflow = 'hidden';
    } else {
      menuBtn.classList.add('main-header__btn--closed');
      menuBtn.classList.remove('main-header__btn--opened');
      wrapMenu.classList.remove('main-header__wrap-menu--active');
      document.body.style.overflow = '';
    }
  });

  stageMenuBtn.addEventListener('click', function (evt) {
    evt.preventDefault();

    if (stageMenu.classList.contains('main-header__stage-nav--closed')) {
      stageMenu.classList.remove('main-header__stage-nav--closed');
      stageMenu.classList.add('main-header__stage-nav--opened');
      document.body.style.overflow = 'hidden';
    } else {
      stageMenu.classList.add('main-header__stage-nav--closed');
      stageMenu.classList.remove('main-header__stage-nav--opened');
      document.body.style.overflow = '';
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

  var cards = document.querySelectorAll(".portfolio__box-card");

  function rotate (evt) {
    var cardItem = this.querySelector('.portfolio__card-perspective');
    var halfHeight = cardItem.offsetHeight / 2;
    var halfWidth = cardItem.offsetWidth / 2;

      cardItem.style.transform = 'rotateX(' + -(evt.offsetY - halfHeight) / 7 + 'deg)' +
        'rotateY(' + (evt.offsetX - halfWidth) / 7 + 'deg';
  }

  function rotateNone () {
    var cardItem = this.querySelector('.portfolio__card-perspective');

    cardItem.style.transform = 'rotateX(0deg)' + 'rotateY(0deg)';
  }

  for (var i = 0; i < cards.length; i++) {
    var card = cards[i];
    card.addEventListener('mousemove', rotate);
    card.addEventListener('mouseout', rotateNone);
  }

})();
'use strict';

(function () {

  let articleContent = document.querySelector('.article__box-article');

  if (articleContent) {

    const DESKTOP_WIDTH = 1023;
    let articleCard = document.querySelector('.article__box-articles');

    let setHeight = function () {
      let isDesktop = window.innerWidth > DESKTOP_WIDTH;

        if (isDesktop) {
          let contentHeight = articleContent.offsetHeight;
          articleCard.style.height = contentHeight + 'px';
        } else {
          articleCard.style.height = '';
        }
    }
    setHeight();

    window.addEventListener('scroll', setHeight);
    window.addEventListener('resize', setHeight);
  }

})();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJkZWZhdWx0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qXHJcblxyXG4gICog0L/QvtC00LrQu9GO0YfQtdC90LjQtSBqcy3QvNC+0LTRg9C70LXQuVxyXG4gICogLy89IG1vZHVsZXMvZmlsZS5qc1xyXG5cclxuKi9cclxuXHJcbid1c2Ugc3RyaWN0JztcclxuKGZ1bmN0aW9uICgpIHtcclxuICB2YXIgbWVudUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWhlYWRlcl9fYnRuJyk7XHJcbiAgdmFyIHdyYXBNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluLWhlYWRlcl9fd3JhcC1tZW51XCIpO1xyXG4gIHZhciBzdGFnZU1lbnVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1oZWFkZXJfX3RvZG8tbWVudScpO1xyXG4gIHZhciBzdGFnZU1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1oZWFkZXJfX3N0YWdlLW5hdicpO1xyXG5cclxuICBtZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2dCkge1xyXG4gICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgaWYgKG1lbnVCdG4uY2xhc3NMaXN0LmNvbnRhaW5zKCdtYWluLWhlYWRlcl9fYnRuLS1jbG9zZWQnKSkge1xyXG4gICAgICBtZW51QnRuLmNsYXNzTGlzdC5yZW1vdmUoJ21haW4taGVhZGVyX19idG4tLWNsb3NlZCcpO1xyXG4gICAgICBtZW51QnRuLmNsYXNzTGlzdC5hZGQoJ21haW4taGVhZGVyX19idG4tLW9wZW5lZCcpO1xyXG4gICAgICB3cmFwTWVudS5jbGFzc0xpc3QuYWRkKCdtYWluLWhlYWRlcl9fd3JhcC1tZW51LS1hY3RpdmUnKTtcclxuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbWVudUJ0bi5jbGFzc0xpc3QuYWRkKCdtYWluLWhlYWRlcl9fYnRuLS1jbG9zZWQnKTtcclxuICAgICAgbWVudUJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdtYWluLWhlYWRlcl9fYnRuLS1vcGVuZWQnKTtcclxuICAgICAgd3JhcE1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnbWFpbi1oZWFkZXJfX3dyYXAtbWVudS0tYWN0aXZlJyk7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnJztcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgc3RhZ2VNZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2dCkge1xyXG4gICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgaWYgKHN0YWdlTWVudS5jbGFzc0xpc3QuY29udGFpbnMoJ21haW4taGVhZGVyX19zdGFnZS1uYXYtLWNsb3NlZCcpKSB7XHJcbiAgICAgIHN0YWdlTWVudS5jbGFzc0xpc3QucmVtb3ZlKCdtYWluLWhlYWRlcl9fc3RhZ2UtbmF2LS1jbG9zZWQnKTtcclxuICAgICAgc3RhZ2VNZW51LmNsYXNzTGlzdC5hZGQoJ21haW4taGVhZGVyX19zdGFnZS1uYXYtLW9wZW5lZCcpO1xyXG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzdGFnZU1lbnUuY2xhc3NMaXN0LmFkZCgnbWFpbi1oZWFkZXJfX3N0YWdlLW5hdi0tY2xvc2VkJyk7XHJcbiAgICAgIHN0YWdlTWVudS5jbGFzc0xpc3QucmVtb3ZlKCdtYWluLWhlYWRlcl9fc3RhZ2UtbmF2LS1vcGVuZWQnKTtcclxuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICcnO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxufSkoKTtcclxuJ3VzZSBzdHJpY3QnO1xyXG5cclxuKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgbGV0IGNsaWVudHNTbGlkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xpZW50c19fc3dpcGVyLWNvbnRhaW5lcicpO1xyXG4gIGxldCBzZXJ2aWNlc1NsaWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZXJ2aWNlc19fc3dpcGVyLWNvbnRhaW5lcicpO1xyXG5cclxuICBsZXQgY2xpZW50c1NsaWRlckRlc2sgPSBmdW5jdGlvbiAoZWwpIHtcclxuICAgIHJldHVybiBuZXcgU3dpcGVyKGVsLCB7XHJcbiAgICAgIGxvb3A6IHRydWUsXHJcbiAgICAgIHNwZWVkOiAxMDAwLFxyXG4gICAgICBhdXRvcGxheToge1xyXG4gICAgICAgIGRlbGF5OiAyNTAwLFxyXG4gICAgICB9LFxyXG4gICAgICBuYXZpZ2F0aW9uOiB7XHJcbiAgICAgICAgbmV4dEVsOiAnLnN3aXBlci1idXR0b24tbmV4dCcsXHJcbiAgICAgICAgcHJldkVsOiAnLnN3aXBlci1idXR0b24tcHJldicsXHJcbiAgICAgIH0sXHJcbiAgICAgIGJyZWFrcG9pbnRzOiB7XHJcbiAgICAgICAgMzIwOiB7XHJcbiAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAxLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgNzY4OiB7XHJcbiAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAyLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgOTUwOiB7XHJcbiAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAzLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgMTIwMDoge1xyXG4gICAgICAgICAgc2xpZGVzUGVyVmlldzogNCxcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGlmIChjbGllbnRzU2xpZGVyKSB7XHJcbiAgICBjbGllbnRzU2xpZGVyRGVzayhjbGllbnRzU2xpZGVyKTtcclxuICB9XHJcblxyXG4gIGxldCBzZXJ2aWNlc1NsaWRlckRlc2sgPSBmdW5jdGlvbiAoZWwpIHtcclxuICAgIHJldHVybiBuZXcgU3dpcGVyKGVsLCB7XHJcbiAgICAgIHNwZWVkOiAxMDAwLFxyXG4gICAgICBuYXZpZ2F0aW9uOiB7XHJcbiAgICAgICAgbmV4dEVsOiAnLnN3aXBlci1idXR0b24tbmV4dCcsXHJcbiAgICAgICAgcHJldkVsOiAnLnN3aXBlci1idXR0b24tcHJldicsXHJcbiAgICAgIH0sXHJcbiAgICAgIGJyZWFrcG9pbnRzOiB7XHJcbiAgICAgICAgMzIwOiB7XHJcbiAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAxLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgNzY4OiB7XHJcbiAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAyLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgMTAyNDoge1xyXG4gICAgICAgICAgc2xpZGVzUGVyVmlldzogMyxcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGlmIChzZXJ2aWNlc1NsaWRlcikge1xyXG4gICAgc2VydmljZXNTbGlkZXJEZXNrKHNlcnZpY2VzU2xpZGVyKTtcclxuICB9XHJcblxyXG59KSgpO1xyXG4ndXNlIHN0cmljdCc7XHJcblxyXG4kKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgalF1ZXJ5KGZ1bmN0aW9uICgkKSB7XHJcbiAgICAkKFwiI3VzZXJfcGhvbmVcIikubWFzayhcIiszNzUgKDk5KSA5OTktOTktOTlcIik7XHJcbiAgfSk7XHJcblxyXG4gICQoXCIjdXNlcl9uYW1lXCIpLmtleXVwKGZ1bmN0aW9uICgpIHtcclxuICAgIGlmICgkKHRoaXMpLnZhbCgpKSB7XHJcbiAgICAgICQodGhpcykuYWRkQ2xhc3MoXCJub3QtZW1wdHlcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKFwibm90LWVtcHR5XCIpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICAkKFwiI3VzZXJfcGhvbmVcIikua2V5dXAoZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKCQodGhpcykudmFsKCkpIHtcclxuICAgICAgJCh0aGlzKS5hZGRDbGFzcyhcIm5vdC1lbXB0eVwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoXCJub3QtZW1wdHlcIik7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gICQoXCIjdXNlcl9lbWFpbFwiKS5rZXl1cChmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAoJCh0aGlzKS52YWwoKSkge1xyXG4gICAgICAkKHRoaXMpLmFkZENsYXNzKFwibm90LWVtcHR5XCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcyhcIm5vdC1lbXB0eVwiKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgJChcIiN1c2VyX2NvbW1lbnRcIikua2V5dXAoZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKCQodGhpcykudmFsKCkpIHtcclxuICAgICAgJCh0aGlzKS5hZGRDbGFzcygnbm90LWVtcHR5Jyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdub3QtZW1wdHknKTtcclxuICAgIH1cclxuICB9KTtcclxufSk7XHJcbid1c2Ugc3RyaWN0JztcclxuXHJcbihmdW5jdGlvbiAoKSB7XHJcblxyXG4gIHZhciBjYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucG9ydGZvbGlvX19ib3gtY2FyZFwiKTtcclxuXHJcbiAgZnVuY3Rpb24gcm90YXRlIChldnQpIHtcclxuICAgIHZhciBjYXJkSXRlbSA9IHRoaXMucXVlcnlTZWxlY3RvcignLnBvcnRmb2xpb19fY2FyZC1wZXJzcGVjdGl2ZScpO1xyXG4gICAgdmFyIGhhbGZIZWlnaHQgPSBjYXJkSXRlbS5vZmZzZXRIZWlnaHQgLyAyO1xyXG4gICAgdmFyIGhhbGZXaWR0aCA9IGNhcmRJdGVtLm9mZnNldFdpZHRoIC8gMjtcclxuXHJcbiAgICAgIGNhcmRJdGVtLnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGVYKCcgKyAtKGV2dC5vZmZzZXRZIC0gaGFsZkhlaWdodCkgLyA3ICsgJ2RlZyknICtcclxuICAgICAgICAncm90YXRlWSgnICsgKGV2dC5vZmZzZXRYIC0gaGFsZldpZHRoKSAvIDcgKyAnZGVnJztcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHJvdGF0ZU5vbmUgKCkge1xyXG4gICAgdmFyIGNhcmRJdGVtID0gdGhpcy5xdWVyeVNlbGVjdG9yKCcucG9ydGZvbGlvX19jYXJkLXBlcnNwZWN0aXZlJyk7XHJcblxyXG4gICAgY2FyZEl0ZW0uc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZVgoMGRlZyknICsgJ3JvdGF0ZVkoMGRlZyknO1xyXG4gIH1cclxuXHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBjYXJkcy5sZW5ndGg7IGkrKykge1xyXG4gICAgdmFyIGNhcmQgPSBjYXJkc1tpXTtcclxuICAgIGNhcmQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgcm90YXRlKTtcclxuICAgIGNhcmQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCByb3RhdGVOb25lKTtcclxuICB9XHJcblxyXG59KSgpO1xyXG4ndXNlIHN0cmljdCc7XHJcblxyXG4oZnVuY3Rpb24gKCkge1xyXG5cclxuICBsZXQgYXJ0aWNsZUNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXJ0aWNsZV9fYm94LWFydGljbGUnKTtcclxuXHJcbiAgaWYgKGFydGljbGVDb250ZW50KSB7XHJcblxyXG4gICAgY29uc3QgREVTS1RPUF9XSURUSCA9IDEwMjM7XHJcbiAgICBsZXQgYXJ0aWNsZUNhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXJ0aWNsZV9fYm94LWFydGljbGVzJyk7XHJcblxyXG4gICAgbGV0IHNldEhlaWdodCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgbGV0IGlzRGVza3RvcCA9IHdpbmRvdy5pbm5lcldpZHRoID4gREVTS1RPUF9XSURUSDtcclxuXHJcbiAgICAgICAgaWYgKGlzRGVza3RvcCkge1xyXG4gICAgICAgICAgbGV0IGNvbnRlbnRIZWlnaHQgPSBhcnRpY2xlQ29udGVudC5vZmZzZXRIZWlnaHQ7XHJcbiAgICAgICAgICBhcnRpY2xlQ2FyZC5zdHlsZS5oZWlnaHQgPSBjb250ZW50SGVpZ2h0ICsgJ3B4JztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgYXJ0aWNsZUNhcmQuc3R5bGUuaGVpZ2h0ID0gJyc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc2V0SGVpZ2h0KCk7XHJcblxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHNldEhlaWdodCk7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgc2V0SGVpZ2h0KTtcclxuICB9XHJcblxyXG59KSgpOyJdLCJmaWxlIjoiZGVmYXVsdC5qcyJ9
