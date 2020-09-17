/*

  * подключение js-модулей
  * //= modules/file.js

*/

'use strict';
(function () {
  var menuBtn = document.querySelector('.main-header__btn');
  var wrapMenu = document.querySelector(".main-header__wrap-menu");
  var stageMenuBtn = document.querySelector('.main-header__link-stage');
  var stageMenu = document.querySelector('.main-header__stage-nav');
  var servicesMenuBtn = document.querySelector('.main-header__link-services');
  var servicesMenu = document.querySelector('.main-header__services-nav');

  if (menuBtn) {

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
        stageMenuBtn.classList.remove('main-header__link-stage--closed');
        stageMenuBtn.classList.add('main-header__link-stage--opened');
        document.body.style.overflow = 'hidden';
      } else {
        stageMenu.classList.add('main-header__stage-nav--closed');
        stageMenu.classList.remove('main-header__stage-nav--opened');
        stageMenuBtn.classList.add('main-header__link-stage--closed');
        stageMenuBtn.classList.remove('main-header__link-stage--opened');
        document.body.style.overflow = '';
      }
    });

    servicesMenuBtn.addEventListener('click', function (evt) {
      evt.preventDefault();

      if (servicesMenu.classList.contains('main-header__services-nav--closed')) {
        servicesMenu.classList.remove('main-header__services-nav--closed');
        servicesMenu.classList.add('main-header__services-nav--opened');
        servicesMenuBtn.classList.remove('main-header__link-services--closed');
        servicesMenuBtn.classList.add('main-header__link-services--opened');
        document.body.style.overflow = 'hidden';
      } else {
        servicesMenu.classList.add('main-header__services-nav--closed');
        servicesMenu.classList.remove('main-header__services-nav--opened');
        servicesMenuBtn.classList.add('main-header__link-services--closed');
        servicesMenuBtn.classList.remove('main-header__link-services--opened');
        document.body.style.overflow = '';
      }
    });
  }

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

  let servicesBoxWrapper = document.querySelector('.services');

  if (servicesBoxWrapper) {

    const TABLET_WIDTH = 767;
    let servicesBox = document.querySelector('.services__nav-box');

    let setHeight = function () {
      let isTablet = window.innerWidth > TABLET_WIDTH;

        if (isTablet) {
          let contentHeight = servicesBoxWrapper.offsetHeight;
          servicesBox.style.height = contentHeight + 'px';
        } else {
          servicesBox.style.height = '';
        }
    }
    setHeight();

    window.addEventListener('scroll', setHeight);
    window.addEventListener('resize', setHeight);
  }

  let stageWrapper = document.querySelector('.stages');

  if (stageWrapper) {

    const TABLET_WIDTH = 767;
    let stageBox = document.querySelector('.stage__nav-box');

    let setHeight = function () {
      let isTablet = window.innerWidth > TABLET_WIDTH;

        if (isTablet) {
          let contentHeight = stageWrapper.offsetHeight;
          stageBox.style.height = contentHeight + 'px';
        } else {
          stageBox.style.height = '';
        }
    }
    setHeight();

    window.addEventListener('scroll', setHeight);
    window.addEventListener('resize', setHeight);
  }

})();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJkZWZhdWx0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qXHJcblxyXG4gICog0L/QvtC00LrQu9GO0YfQtdC90LjQtSBqcy3QvNC+0LTRg9C70LXQuVxyXG4gICogLy89IG1vZHVsZXMvZmlsZS5qc1xyXG5cclxuKi9cclxuXHJcbid1c2Ugc3RyaWN0JztcclxuKGZ1bmN0aW9uICgpIHtcclxuICB2YXIgbWVudUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWhlYWRlcl9fYnRuJyk7XHJcbiAgdmFyIHdyYXBNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluLWhlYWRlcl9fd3JhcC1tZW51XCIpO1xyXG4gIHZhciBzdGFnZU1lbnVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1oZWFkZXJfX2xpbmstc3RhZ2UnKTtcclxuICB2YXIgc3RhZ2VNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4taGVhZGVyX19zdGFnZS1uYXYnKTtcclxuICB2YXIgc2VydmljZXNNZW51QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4taGVhZGVyX19saW5rLXNlcnZpY2VzJyk7XHJcbiAgdmFyIHNlcnZpY2VzTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWhlYWRlcl9fc2VydmljZXMtbmF2Jyk7XHJcblxyXG4gIGlmIChtZW51QnRuKSB7XHJcblxyXG4gICAgbWVudUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldnQpIHtcclxuICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICBpZiAobWVudUJ0bi5jbGFzc0xpc3QuY29udGFpbnMoJ21haW4taGVhZGVyX19idG4tLWNsb3NlZCcpKSB7XHJcbiAgICAgICAgbWVudUJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdtYWluLWhlYWRlcl9fYnRuLS1jbG9zZWQnKTtcclxuICAgICAgICBtZW51QnRuLmNsYXNzTGlzdC5hZGQoJ21haW4taGVhZGVyX19idG4tLW9wZW5lZCcpO1xyXG4gICAgICAgIHdyYXBNZW51LmNsYXNzTGlzdC5hZGQoJ21haW4taGVhZGVyX193cmFwLW1lbnUtLWFjdGl2ZScpO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBtZW51QnRuLmNsYXNzTGlzdC5hZGQoJ21haW4taGVhZGVyX19idG4tLWNsb3NlZCcpO1xyXG4gICAgICAgIG1lbnVCdG4uY2xhc3NMaXN0LnJlbW92ZSgnbWFpbi1oZWFkZXJfX2J0bi0tb3BlbmVkJyk7XHJcbiAgICAgICAgd3JhcE1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnbWFpbi1oZWFkZXJfX3dyYXAtbWVudS0tYWN0aXZlJyk7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICcnO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBzdGFnZU1lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZ0KSB7XHJcbiAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgaWYgKHN0YWdlTWVudS5jbGFzc0xpc3QuY29udGFpbnMoJ21haW4taGVhZGVyX19zdGFnZS1uYXYtLWNsb3NlZCcpKSB7XHJcbiAgICAgICAgc3RhZ2VNZW51LmNsYXNzTGlzdC5yZW1vdmUoJ21haW4taGVhZGVyX19zdGFnZS1uYXYtLWNsb3NlZCcpO1xyXG4gICAgICAgIHN0YWdlTWVudS5jbGFzc0xpc3QuYWRkKCdtYWluLWhlYWRlcl9fc3RhZ2UtbmF2LS1vcGVuZWQnKTtcclxuICAgICAgICBzdGFnZU1lbnVCdG4uY2xhc3NMaXN0LnJlbW92ZSgnbWFpbi1oZWFkZXJfX2xpbmstc3RhZ2UtLWNsb3NlZCcpO1xyXG4gICAgICAgIHN0YWdlTWVudUJ0bi5jbGFzc0xpc3QuYWRkKCdtYWluLWhlYWRlcl9fbGluay1zdGFnZS0tb3BlbmVkJyk7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHN0YWdlTWVudS5jbGFzc0xpc3QuYWRkKCdtYWluLWhlYWRlcl9fc3RhZ2UtbmF2LS1jbG9zZWQnKTtcclxuICAgICAgICBzdGFnZU1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnbWFpbi1oZWFkZXJfX3N0YWdlLW5hdi0tb3BlbmVkJyk7XHJcbiAgICAgICAgc3RhZ2VNZW51QnRuLmNsYXNzTGlzdC5hZGQoJ21haW4taGVhZGVyX19saW5rLXN0YWdlLS1jbG9zZWQnKTtcclxuICAgICAgICBzdGFnZU1lbnVCdG4uY2xhc3NMaXN0LnJlbW92ZSgnbWFpbi1oZWFkZXJfX2xpbmstc3RhZ2UtLW9wZW5lZCcpO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnJztcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgc2VydmljZXNNZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2dCkge1xyXG4gICAgICBldnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgIGlmIChzZXJ2aWNlc01lbnUuY2xhc3NMaXN0LmNvbnRhaW5zKCdtYWluLWhlYWRlcl9fc2VydmljZXMtbmF2LS1jbG9zZWQnKSkge1xyXG4gICAgICAgIHNlcnZpY2VzTWVudS5jbGFzc0xpc3QucmVtb3ZlKCdtYWluLWhlYWRlcl9fc2VydmljZXMtbmF2LS1jbG9zZWQnKTtcclxuICAgICAgICBzZXJ2aWNlc01lbnUuY2xhc3NMaXN0LmFkZCgnbWFpbi1oZWFkZXJfX3NlcnZpY2VzLW5hdi0tb3BlbmVkJyk7XHJcbiAgICAgICAgc2VydmljZXNNZW51QnRuLmNsYXNzTGlzdC5yZW1vdmUoJ21haW4taGVhZGVyX19saW5rLXNlcnZpY2VzLS1jbG9zZWQnKTtcclxuICAgICAgICBzZXJ2aWNlc01lbnVCdG4uY2xhc3NMaXN0LmFkZCgnbWFpbi1oZWFkZXJfX2xpbmstc2VydmljZXMtLW9wZW5lZCcpO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzZXJ2aWNlc01lbnUuY2xhc3NMaXN0LmFkZCgnbWFpbi1oZWFkZXJfX3NlcnZpY2VzLW5hdi0tY2xvc2VkJyk7XHJcbiAgICAgICAgc2VydmljZXNNZW51LmNsYXNzTGlzdC5yZW1vdmUoJ21haW4taGVhZGVyX19zZXJ2aWNlcy1uYXYtLW9wZW5lZCcpO1xyXG4gICAgICAgIHNlcnZpY2VzTWVudUJ0bi5jbGFzc0xpc3QuYWRkKCdtYWluLWhlYWRlcl9fbGluay1zZXJ2aWNlcy0tY2xvc2VkJyk7XHJcbiAgICAgICAgc2VydmljZXNNZW51QnRuLmNsYXNzTGlzdC5yZW1vdmUoJ21haW4taGVhZGVyX19saW5rLXNlcnZpY2VzLS1vcGVuZWQnKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJyc7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbn0pKCk7XHJcbid1c2Ugc3RyaWN0JztcclxuXHJcbihmdW5jdGlvbiAoKSB7XHJcblxyXG4gIGxldCBjbGllbnRzU2xpZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsaWVudHNfX3N3aXBlci1jb250YWluZXInKTtcclxuICBsZXQgc2VydmljZXNTbGlkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VydmljZXNfX3N3aXBlci1jb250YWluZXInKTtcclxuXHJcbiAgbGV0IGNsaWVudHNTbGlkZXJEZXNrID0gZnVuY3Rpb24gKGVsKSB7XHJcbiAgICByZXR1cm4gbmV3IFN3aXBlcihlbCwge1xyXG4gICAgICBsb29wOiB0cnVlLFxyXG4gICAgICBzcGVlZDogMTAwMCxcclxuICAgICAgYXV0b3BsYXk6IHtcclxuICAgICAgICBkZWxheTogMjUwMCxcclxuICAgICAgfSxcclxuICAgICAgbmF2aWdhdGlvbjoge1xyXG4gICAgICAgIG5leHRFbDogJy5zd2lwZXItYnV0dG9uLW5leHQnLFxyXG4gICAgICAgIHByZXZFbDogJy5zd2lwZXItYnV0dG9uLXByZXYnLFxyXG4gICAgICB9LFxyXG4gICAgICBicmVha3BvaW50czoge1xyXG4gICAgICAgIDMyMDoge1xyXG4gICAgICAgICAgc2xpZGVzUGVyVmlldzogMSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIDc2ODoge1xyXG4gICAgICAgICAgc2xpZGVzUGVyVmlldzogMixcclxuICAgICAgICB9LFxyXG4gICAgICAgIDk1MDoge1xyXG4gICAgICAgICAgc2xpZGVzUGVyVmlldzogMyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIDEyMDA6IHtcclxuICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDQsXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBpZiAoY2xpZW50c1NsaWRlcikge1xyXG4gICAgY2xpZW50c1NsaWRlckRlc2soY2xpZW50c1NsaWRlcik7XHJcbiAgfVxyXG5cclxuICBsZXQgc2VydmljZXNTbGlkZXJEZXNrID0gZnVuY3Rpb24gKGVsKSB7XHJcbiAgICByZXR1cm4gbmV3IFN3aXBlcihlbCwge1xyXG4gICAgICBzcGVlZDogMTAwMCxcclxuICAgICAgbmF2aWdhdGlvbjoge1xyXG4gICAgICAgIG5leHRFbDogJy5zd2lwZXItYnV0dG9uLW5leHQnLFxyXG4gICAgICAgIHByZXZFbDogJy5zd2lwZXItYnV0dG9uLXByZXYnLFxyXG4gICAgICB9LFxyXG4gICAgICBicmVha3BvaW50czoge1xyXG4gICAgICAgIDMyMDoge1xyXG4gICAgICAgICAgc2xpZGVzUGVyVmlldzogMSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIDc2ODoge1xyXG4gICAgICAgICAgc2xpZGVzUGVyVmlldzogMixcclxuICAgICAgICB9LFxyXG4gICAgICAgIDEwMjQ6IHtcclxuICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDMsXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBpZiAoc2VydmljZXNTbGlkZXIpIHtcclxuICAgIHNlcnZpY2VzU2xpZGVyRGVzayhzZXJ2aWNlc1NsaWRlcik7XHJcbiAgfVxyXG5cclxufSkoKTtcclxuJ3VzZSBzdHJpY3QnO1xyXG5cclxuJChmdW5jdGlvbiAoKSB7XHJcblxyXG4gIGpRdWVyeShmdW5jdGlvbiAoJCkge1xyXG4gICAgJChcIiN1c2VyX3Bob25lXCIpLm1hc2soXCIrMzc1ICg5OSkgOTk5LTk5LTk5XCIpO1xyXG4gIH0pO1xyXG5cclxuICAkKFwiI3VzZXJfbmFtZVwiKS5rZXl1cChmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAoJCh0aGlzKS52YWwoKSkge1xyXG4gICAgICAkKHRoaXMpLmFkZENsYXNzKFwibm90LWVtcHR5XCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcyhcIm5vdC1lbXB0eVwiKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgJChcIiN1c2VyX3Bob25lXCIpLmtleXVwKGZ1bmN0aW9uICgpIHtcclxuICAgIGlmICgkKHRoaXMpLnZhbCgpKSB7XHJcbiAgICAgICQodGhpcykuYWRkQ2xhc3MoXCJub3QtZW1wdHlcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKFwibm90LWVtcHR5XCIpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICAkKFwiI3VzZXJfZW1haWxcIikua2V5dXAoZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKCQodGhpcykudmFsKCkpIHtcclxuICAgICAgJCh0aGlzKS5hZGRDbGFzcyhcIm5vdC1lbXB0eVwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoXCJub3QtZW1wdHlcIik7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gICQoXCIjdXNlcl9jb21tZW50XCIpLmtleXVwKGZ1bmN0aW9uICgpIHtcclxuICAgIGlmICgkKHRoaXMpLnZhbCgpKSB7XHJcbiAgICAgICQodGhpcykuYWRkQ2xhc3MoJ25vdC1lbXB0eScpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnbm90LWVtcHR5Jyk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn0pO1xyXG4ndXNlIHN0cmljdCc7XHJcblxyXG4oZnVuY3Rpb24gKCkge1xyXG5cclxuICB2YXIgY2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnBvcnRmb2xpb19fYm94LWNhcmRcIik7XHJcblxyXG4gIGZ1bmN0aW9uIHJvdGF0ZSAoZXZ0KSB7XHJcbiAgICB2YXIgY2FyZEl0ZW0gPSB0aGlzLnF1ZXJ5U2VsZWN0b3IoJy5wb3J0Zm9saW9fX2NhcmQtcGVyc3BlY3RpdmUnKTtcclxuICAgIHZhciBoYWxmSGVpZ2h0ID0gY2FyZEl0ZW0ub2Zmc2V0SGVpZ2h0IC8gMjtcclxuICAgIHZhciBoYWxmV2lkdGggPSBjYXJkSXRlbS5vZmZzZXRXaWR0aCAvIDI7XHJcblxyXG4gICAgICBjYXJkSXRlbS5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlWCgnICsgLShldnQub2Zmc2V0WSAtIGhhbGZIZWlnaHQpIC8gNyArICdkZWcpJyArXHJcbiAgICAgICAgJ3JvdGF0ZVkoJyArIChldnQub2Zmc2V0WCAtIGhhbGZXaWR0aCkgLyA3ICsgJ2RlZyc7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiByb3RhdGVOb25lICgpIHtcclxuICAgIHZhciBjYXJkSXRlbSA9IHRoaXMucXVlcnlTZWxlY3RvcignLnBvcnRmb2xpb19fY2FyZC1wZXJzcGVjdGl2ZScpO1xyXG5cclxuICAgIGNhcmRJdGVtLnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGVYKDBkZWcpJyArICdyb3RhdGVZKDBkZWcpJztcclxuICB9XHJcblxyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgY2FyZHMubGVuZ3RoOyBpKyspIHtcclxuICAgIHZhciBjYXJkID0gY2FyZHNbaV07XHJcbiAgICBjYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHJvdGF0ZSk7XHJcbiAgICBjYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0Jywgcm90YXRlTm9uZSk7XHJcbiAgfVxyXG5cclxufSkoKTtcclxuJ3VzZSBzdHJpY3QnO1xyXG5cclxuKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgbGV0IGFydGljbGVDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFydGljbGVfX2JveC1hcnRpY2xlJyk7XHJcblxyXG4gIGlmIChhcnRpY2xlQ29udGVudCkge1xyXG5cclxuICAgIGNvbnN0IERFU0tUT1BfV0lEVEggPSAxMDIzO1xyXG4gICAgbGV0IGFydGljbGVDYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFydGljbGVfX2JveC1hcnRpY2xlcycpO1xyXG5cclxuICAgIGxldCBzZXRIZWlnaHQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGxldCBpc0Rlc2t0b3AgPSB3aW5kb3cuaW5uZXJXaWR0aCA+IERFU0tUT1BfV0lEVEg7XHJcblxyXG4gICAgICAgIGlmIChpc0Rlc2t0b3ApIHtcclxuICAgICAgICAgIGxldCBjb250ZW50SGVpZ2h0ID0gYXJ0aWNsZUNvbnRlbnQub2Zmc2V0SGVpZ2h0O1xyXG4gICAgICAgICAgYXJ0aWNsZUNhcmQuc3R5bGUuaGVpZ2h0ID0gY29udGVudEhlaWdodCArICdweCc7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGFydGljbGVDYXJkLnN0eWxlLmhlaWdodCA9ICcnO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHNldEhlaWdodCgpO1xyXG5cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBzZXRIZWlnaHQpO1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHNldEhlaWdodCk7XHJcbiAgfVxyXG5cclxuICBsZXQgc2VydmljZXNCb3hXcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlcnZpY2VzJyk7XHJcblxyXG4gIGlmIChzZXJ2aWNlc0JveFdyYXBwZXIpIHtcclxuXHJcbiAgICBjb25zdCBUQUJMRVRfV0lEVEggPSA3Njc7XHJcbiAgICBsZXQgc2VydmljZXNCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VydmljZXNfX25hdi1ib3gnKTtcclxuXHJcbiAgICBsZXQgc2V0SGVpZ2h0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICBsZXQgaXNUYWJsZXQgPSB3aW5kb3cuaW5uZXJXaWR0aCA+IFRBQkxFVF9XSURUSDtcclxuXHJcbiAgICAgICAgaWYgKGlzVGFibGV0KSB7XHJcbiAgICAgICAgICBsZXQgY29udGVudEhlaWdodCA9IHNlcnZpY2VzQm94V3JhcHBlci5vZmZzZXRIZWlnaHQ7XHJcbiAgICAgICAgICBzZXJ2aWNlc0JveC5zdHlsZS5oZWlnaHQgPSBjb250ZW50SGVpZ2h0ICsgJ3B4JztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgc2VydmljZXNCb3guc3R5bGUuaGVpZ2h0ID0gJyc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc2V0SGVpZ2h0KCk7XHJcblxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHNldEhlaWdodCk7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgc2V0SGVpZ2h0KTtcclxuICB9XHJcblxyXG4gIGxldCBzdGFnZVdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhZ2VzJyk7XHJcblxyXG4gIGlmIChzdGFnZVdyYXBwZXIpIHtcclxuXHJcbiAgICBjb25zdCBUQUJMRVRfV0lEVEggPSA3Njc7XHJcbiAgICBsZXQgc3RhZ2VCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhZ2VfX25hdi1ib3gnKTtcclxuXHJcbiAgICBsZXQgc2V0SGVpZ2h0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICBsZXQgaXNUYWJsZXQgPSB3aW5kb3cuaW5uZXJXaWR0aCA+IFRBQkxFVF9XSURUSDtcclxuXHJcbiAgICAgICAgaWYgKGlzVGFibGV0KSB7XHJcbiAgICAgICAgICBsZXQgY29udGVudEhlaWdodCA9IHN0YWdlV3JhcHBlci5vZmZzZXRIZWlnaHQ7XHJcbiAgICAgICAgICBzdGFnZUJveC5zdHlsZS5oZWlnaHQgPSBjb250ZW50SGVpZ2h0ICsgJ3B4JztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgc3RhZ2VCb3guc3R5bGUuaGVpZ2h0ID0gJyc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc2V0SGVpZ2h0KCk7XHJcblxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHNldEhlaWdodCk7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgc2V0SGVpZ2h0KTtcclxuICB9XHJcblxyXG59KSgpOyJdLCJmaWxlIjoiZGVmYXVsdC5qcyJ9
