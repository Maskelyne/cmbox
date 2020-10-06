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

  $("#user_company").keyup(function () {
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

  $("#user_comments").keyup(function () {
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
'use strict';

(function () {

  var mainSlider = document.querySelector('.intro__box-swiper-container');

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
'use strict';

(function () {

  var bg = document.querySelector("#bg");

  if (bg) {

    var refreshDuration = 10000;
    var refreshTimeout;
    var numPointsX;
    var numPointsY;
    var unitWidth;
    var unitHeight;
    var points;

    function onLoad() {
      var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svg.setAttribute('width', window.innerWidth);
      svg.setAttribute('height', 3300);
      document.querySelector('#bg').appendChild(svg);

      var unitSize = (window.innerWidth + 3300) / 40;
      numPointsX = Math.ceil(window.innerWidth / unitSize) + 1;
      numPointsY = Math.ceil(3300 / unitSize) + 1;
      unitWidth = Math.ceil(window.innerWidth / (numPointsX - 1));
      unitHeight = Math.ceil(3300 / (numPointsY - 1));
      points = [];

      for (var y = 0; y < numPointsY; y++) {
        for (var x = 0; x < numPointsX; x++) {
          points.push({x: unitWidth * x, y: unitHeight * y, originX: unitWidth * x, originY: unitHeight * y});
        }
      }

      randomize();

      for (var i = 0; i < points.length; i++) {
        if (points[i].originX != unitWidth * (numPointsX - 1) && points[i].originY != unitHeight * (numPointsY - 1)) {
          var topLeftX = points[i].x;
          var topLeftY = points[i].y;
          var topRightX = points[i + 1].x;
          var topRightY = points[i + 1].y;
          var bottomLeftX = points[i + numPointsX].x;
          var bottomLeftY = points[i + numPointsX].y;
          var bottomRightX = points[i + numPointsX + 1].x;
          var bottomRightY = points[i + numPointsX + 1].y;

          var rando = Math.floor(Math.random() * 2);

          for (var n = 0; n < 2; n++) {
            var polygon = document.createElementNS(svg.namespaceURI, 'polygon');

            if (rando == 0) {
              if (n == 0) {
                polygon.point1 = i;
                polygon.point2 = i + numPointsX;
                polygon.point3 = i + numPointsX + 1;
                polygon.setAttribute('points', topLeftX + ',' + topLeftY + ' ' + bottomLeftX + ',' + bottomLeftY + ' ' + bottomRightX + ',' + bottomRightY);
              } else if (n == 1) {
                polygon.point1 = i;
                polygon.point2 = i + 1;
                polygon.point3 = i + numPointsX + 1;
                polygon.setAttribute('points', topLeftX + ',' + topLeftY + ' ' + topRightX + ',' + topRightY + ' ' + bottomRightX + ',' + bottomRightY);
              }
            } else if (rando == 1) {
              if (n == 0) {
                polygon.point1 = i;
                polygon.point2 = i + numPointsX;
                polygon.point3 = i + 1;
                polygon.setAttribute('points', topLeftX + ',' + topLeftY + ' ' + bottomLeftX + ',' + bottomLeftY + ' ' + topRightX + ',' + topRightY);
              } else if (n == 1) {
                polygon.point1 = i + numPointsX;
                polygon.point2 = i + 1;
                polygon.point3 = i + numPointsX + 1;
                polygon.setAttribute('points', bottomLeftX + ',' + bottomLeftY + ' ' + topRightX + ',' + topRightY + ' ' + bottomRightX + ',' + bottomRightY);
              }
            }
            var h = 207;
            var s = 45;
            var l = 80 + (Math.random() * 12);
            polygon.setAttribute('fill', 'hsl(' + h + ', ' + s + '%, ' + l + '%)');
            var animate = document.createElementNS('http://www.w3.org/2000/svg', 'animate');
            animate.setAttribute('fill', 'freeze');
            animate.setAttribute('attributeName', 'points');
            animate.setAttribute('dur', refreshDuration + 'ms');
            animate.setAttribute('calcMode', 'linear');
            polygon.appendChild(animate);
            svg.appendChild(polygon);
          }
        }
      }

      refresh();

    }

    function randomize() {
      for (var i = 0; i < points.length; i++) {
        if (points[i].originX != 0 && points[i].originX != unitWidth * (numPointsX - 1)) {
          points[i].x = points[i].originX + Math.random() * unitWidth - unitWidth / 2;
        }
        if (points[i].originY != 0 && points[i].originY != unitHeight * (numPointsY - 1)) {
          points[i].y = points[i].originY + Math.random() * unitHeight - unitHeight / 2;
        }
      }
    }

    function refresh() {
      randomize();
      for (var i = 0; i < document.querySelector('#bg svg').childNodes.length; i++) {
        var polygon = document.querySelector('#bg svg').childNodes[i];
        var animate = polygon.childNodes[0];
        if (animate.getAttribute('to')) {
          animate.setAttribute('from', animate.getAttribute('to'));
        }
        animate.setAttribute('to', points[polygon.point1].x + ',' + points[polygon.point1].y + ' ' + points[polygon.point2].x + ',' + points[polygon.point2].y + ' ' + points[polygon.point3].x + ',' + points[polygon.point3].y);
        animate.beginElement();
      }
      refreshTimeout = setTimeout(function () {
        refresh();
      }, refreshDuration);
    }

    function onResize() {
      document.querySelector('#bg svg').remove();
      clearTimeout(refreshTimeout);
      onLoad();
    }

    window.onload = onLoad;
    window.onresize = onResize;
  }

})();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qXHJcblxyXG4gICog0L/QvtC00LrQu9GO0YfQtdC90LjQtSBqcy3QvNC+0LTRg9C70LXQuVxyXG4gICogLy89IG1vZHVsZXMvZmlsZS5qc1xyXG5cclxuKi9cclxuXHJcbid1c2Ugc3RyaWN0JztcclxuKGZ1bmN0aW9uICgpIHtcclxuICB2YXIgbWVudUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWhlYWRlcl9fYnRuJyk7XHJcbiAgdmFyIHdyYXBNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluLWhlYWRlcl9fd3JhcC1tZW51XCIpO1xyXG4gIHZhciBzdGFnZU1lbnVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1oZWFkZXJfX2xpbmstc3RhZ2UnKTtcclxuICB2YXIgc3RhZ2VNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4taGVhZGVyX19zdGFnZS1uYXYnKTtcclxuICB2YXIgc2VydmljZXNNZW51QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4taGVhZGVyX19saW5rLXNlcnZpY2VzJyk7XHJcbiAgdmFyIHNlcnZpY2VzTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWhlYWRlcl9fc2VydmljZXMtbmF2Jyk7XHJcblxyXG4gIGlmIChtZW51QnRuKSB7XHJcblxyXG4gICAgbWVudUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldnQpIHtcclxuICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICBpZiAobWVudUJ0bi5jbGFzc0xpc3QuY29udGFpbnMoJ21haW4taGVhZGVyX19idG4tLWNsb3NlZCcpKSB7XHJcbiAgICAgICAgbWVudUJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdtYWluLWhlYWRlcl9fYnRuLS1jbG9zZWQnKTtcclxuICAgICAgICBtZW51QnRuLmNsYXNzTGlzdC5hZGQoJ21haW4taGVhZGVyX19idG4tLW9wZW5lZCcpO1xyXG4gICAgICAgIHdyYXBNZW51LmNsYXNzTGlzdC5hZGQoJ21haW4taGVhZGVyX193cmFwLW1lbnUtLWFjdGl2ZScpO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBtZW51QnRuLmNsYXNzTGlzdC5hZGQoJ21haW4taGVhZGVyX19idG4tLWNsb3NlZCcpO1xyXG4gICAgICAgIG1lbnVCdG4uY2xhc3NMaXN0LnJlbW92ZSgnbWFpbi1oZWFkZXJfX2J0bi0tb3BlbmVkJyk7XHJcbiAgICAgICAgd3JhcE1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnbWFpbi1oZWFkZXJfX3dyYXAtbWVudS0tYWN0aXZlJyk7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICcnO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBzdGFnZU1lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZ0KSB7XHJcbiAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgaWYgKHN0YWdlTWVudS5jbGFzc0xpc3QuY29udGFpbnMoJ21haW4taGVhZGVyX19zdGFnZS1uYXYtLWNsb3NlZCcpKSB7XHJcbiAgICAgICAgc3RhZ2VNZW51LmNsYXNzTGlzdC5yZW1vdmUoJ21haW4taGVhZGVyX19zdGFnZS1uYXYtLWNsb3NlZCcpO1xyXG4gICAgICAgIHN0YWdlTWVudS5jbGFzc0xpc3QuYWRkKCdtYWluLWhlYWRlcl9fc3RhZ2UtbmF2LS1vcGVuZWQnKTtcclxuICAgICAgICBzdGFnZU1lbnVCdG4uY2xhc3NMaXN0LnJlbW92ZSgnbWFpbi1oZWFkZXJfX2xpbmstc3RhZ2UtLWNsb3NlZCcpO1xyXG4gICAgICAgIHN0YWdlTWVudUJ0bi5jbGFzc0xpc3QuYWRkKCdtYWluLWhlYWRlcl9fbGluay1zdGFnZS0tb3BlbmVkJyk7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHN0YWdlTWVudS5jbGFzc0xpc3QuYWRkKCdtYWluLWhlYWRlcl9fc3RhZ2UtbmF2LS1jbG9zZWQnKTtcclxuICAgICAgICBzdGFnZU1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnbWFpbi1oZWFkZXJfX3N0YWdlLW5hdi0tb3BlbmVkJyk7XHJcbiAgICAgICAgc3RhZ2VNZW51QnRuLmNsYXNzTGlzdC5hZGQoJ21haW4taGVhZGVyX19saW5rLXN0YWdlLS1jbG9zZWQnKTtcclxuICAgICAgICBzdGFnZU1lbnVCdG4uY2xhc3NMaXN0LnJlbW92ZSgnbWFpbi1oZWFkZXJfX2xpbmstc3RhZ2UtLW9wZW5lZCcpO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnJztcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgc2VydmljZXNNZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2dCkge1xyXG4gICAgICBldnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgIGlmIChzZXJ2aWNlc01lbnUuY2xhc3NMaXN0LmNvbnRhaW5zKCdtYWluLWhlYWRlcl9fc2VydmljZXMtbmF2LS1jbG9zZWQnKSkge1xyXG4gICAgICAgIHNlcnZpY2VzTWVudS5jbGFzc0xpc3QucmVtb3ZlKCdtYWluLWhlYWRlcl9fc2VydmljZXMtbmF2LS1jbG9zZWQnKTtcclxuICAgICAgICBzZXJ2aWNlc01lbnUuY2xhc3NMaXN0LmFkZCgnbWFpbi1oZWFkZXJfX3NlcnZpY2VzLW5hdi0tb3BlbmVkJyk7XHJcbiAgICAgICAgc2VydmljZXNNZW51QnRuLmNsYXNzTGlzdC5yZW1vdmUoJ21haW4taGVhZGVyX19saW5rLXNlcnZpY2VzLS1jbG9zZWQnKTtcclxuICAgICAgICBzZXJ2aWNlc01lbnVCdG4uY2xhc3NMaXN0LmFkZCgnbWFpbi1oZWFkZXJfX2xpbmstc2VydmljZXMtLW9wZW5lZCcpO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzZXJ2aWNlc01lbnUuY2xhc3NMaXN0LmFkZCgnbWFpbi1oZWFkZXJfX3NlcnZpY2VzLW5hdi0tY2xvc2VkJyk7XHJcbiAgICAgICAgc2VydmljZXNNZW51LmNsYXNzTGlzdC5yZW1vdmUoJ21haW4taGVhZGVyX19zZXJ2aWNlcy1uYXYtLW9wZW5lZCcpO1xyXG4gICAgICAgIHNlcnZpY2VzTWVudUJ0bi5jbGFzc0xpc3QuYWRkKCdtYWluLWhlYWRlcl9fbGluay1zZXJ2aWNlcy0tY2xvc2VkJyk7XHJcbiAgICAgICAgc2VydmljZXNNZW51QnRuLmNsYXNzTGlzdC5yZW1vdmUoJ21haW4taGVhZGVyX19saW5rLXNlcnZpY2VzLS1vcGVuZWQnKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJyc7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbn0pKCk7XHJcbid1c2Ugc3RyaWN0JztcclxuXHJcbihmdW5jdGlvbiAoKSB7XHJcblxyXG4gIGxldCBjbGllbnRzU2xpZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsaWVudHNfX3N3aXBlci1jb250YWluZXInKTtcclxuICBsZXQgc2VydmljZXNTbGlkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VydmljZXNfX3N3aXBlci1jb250YWluZXInKTtcclxuXHJcbiAgbGV0IGNsaWVudHNTbGlkZXJEZXNrID0gZnVuY3Rpb24gKGVsKSB7XHJcbiAgICByZXR1cm4gbmV3IFN3aXBlcihlbCwge1xyXG4gICAgICBsb29wOiB0cnVlLFxyXG4gICAgICBzcGVlZDogMTAwMCxcclxuICAgICAgYXV0b3BsYXk6IHtcclxuICAgICAgICBkZWxheTogMjUwMCxcclxuICAgICAgfSxcclxuICAgICAgbmF2aWdhdGlvbjoge1xyXG4gICAgICAgIG5leHRFbDogJy5zd2lwZXItYnV0dG9uLW5leHQnLFxyXG4gICAgICAgIHByZXZFbDogJy5zd2lwZXItYnV0dG9uLXByZXYnLFxyXG4gICAgICB9LFxyXG4gICAgICBicmVha3BvaW50czoge1xyXG4gICAgICAgIDMyMDoge1xyXG4gICAgICAgICAgc2xpZGVzUGVyVmlldzogMSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIDc2ODoge1xyXG4gICAgICAgICAgc2xpZGVzUGVyVmlldzogMixcclxuICAgICAgICB9LFxyXG4gICAgICAgIDk1MDoge1xyXG4gICAgICAgICAgc2xpZGVzUGVyVmlldzogMyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIDEyMDA6IHtcclxuICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDQsXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBpZiAoY2xpZW50c1NsaWRlcikge1xyXG4gICAgY2xpZW50c1NsaWRlckRlc2soY2xpZW50c1NsaWRlcik7XHJcbiAgfVxyXG5cclxuICBsZXQgc2VydmljZXNTbGlkZXJEZXNrID0gZnVuY3Rpb24gKGVsKSB7XHJcbiAgICByZXR1cm4gbmV3IFN3aXBlcihlbCwge1xyXG4gICAgICBzcGVlZDogMTAwMCxcclxuICAgICAgbmF2aWdhdGlvbjoge1xyXG4gICAgICAgIG5leHRFbDogJy5zd2lwZXItYnV0dG9uLW5leHQnLFxyXG4gICAgICAgIHByZXZFbDogJy5zd2lwZXItYnV0dG9uLXByZXYnLFxyXG4gICAgICB9LFxyXG4gICAgICBicmVha3BvaW50czoge1xyXG4gICAgICAgIDMyMDoge1xyXG4gICAgICAgICAgc2xpZGVzUGVyVmlldzogMSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIDc2ODoge1xyXG4gICAgICAgICAgc2xpZGVzUGVyVmlldzogMixcclxuICAgICAgICB9LFxyXG4gICAgICAgIDEwMjQ6IHtcclxuICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDMsXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBpZiAoc2VydmljZXNTbGlkZXIpIHtcclxuICAgIHNlcnZpY2VzU2xpZGVyRGVzayhzZXJ2aWNlc1NsaWRlcik7XHJcbiAgfVxyXG5cclxufSkoKTtcclxuJ3VzZSBzdHJpY3QnO1xyXG5cclxuJChmdW5jdGlvbiAoKSB7XHJcblxyXG4gIGpRdWVyeShmdW5jdGlvbiAoJCkge1xyXG4gICAgJChcIiN1c2VyX3Bob25lXCIpLm1hc2soXCIrMzc1ICg5OSkgOTk5LTk5LTk5XCIpO1xyXG4gIH0pO1xyXG5cclxuICAkKFwiI3VzZXJfbmFtZVwiKS5rZXl1cChmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAoJCh0aGlzKS52YWwoKSkge1xyXG4gICAgICAkKHRoaXMpLmFkZENsYXNzKFwibm90LWVtcHR5XCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcyhcIm5vdC1lbXB0eVwiKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgJChcIiN1c2VyX2NvbXBhbnlcIikua2V5dXAoZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKCQodGhpcykudmFsKCkpIHtcclxuICAgICAgJCh0aGlzKS5hZGRDbGFzcyhcIm5vdC1lbXB0eVwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoXCJub3QtZW1wdHlcIik7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gICQoXCIjdXNlcl9waG9uZVwiKS5rZXl1cChmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAoJCh0aGlzKS52YWwoKSkge1xyXG4gICAgICAkKHRoaXMpLmFkZENsYXNzKFwibm90LWVtcHR5XCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcyhcIm5vdC1lbXB0eVwiKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgJChcIiN1c2VyX2VtYWlsXCIpLmtleXVwKGZ1bmN0aW9uICgpIHtcclxuICAgIGlmICgkKHRoaXMpLnZhbCgpKSB7XHJcbiAgICAgICQodGhpcykuYWRkQ2xhc3MoXCJub3QtZW1wdHlcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKFwibm90LWVtcHR5XCIpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICAkKFwiI3VzZXJfY29tbWVudFwiKS5rZXl1cChmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAoJCh0aGlzKS52YWwoKSkge1xyXG4gICAgICAkKHRoaXMpLmFkZENsYXNzKCdub3QtZW1wdHknKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ25vdC1lbXB0eScpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICAkKFwiI3VzZXJfY29tbWVudHNcIikua2V5dXAoZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKCQodGhpcykudmFsKCkpIHtcclxuICAgICAgJCh0aGlzKS5hZGRDbGFzcygnbm90LWVtcHR5Jyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdub3QtZW1wdHknKTtcclxuICAgIH1cclxuICB9KTtcclxufSk7XHJcbid1c2Ugc3RyaWN0JztcclxuXHJcbihmdW5jdGlvbiAoKSB7XHJcblxyXG4gIHZhciBjYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucG9ydGZvbGlvX19ib3gtY2FyZFwiKTtcclxuXHJcbiAgZnVuY3Rpb24gcm90YXRlIChldnQpIHtcclxuICAgIHZhciBjYXJkSXRlbSA9IHRoaXMucXVlcnlTZWxlY3RvcignLnBvcnRmb2xpb19fY2FyZC1wZXJzcGVjdGl2ZScpO1xyXG4gICAgdmFyIGhhbGZIZWlnaHQgPSBjYXJkSXRlbS5vZmZzZXRIZWlnaHQgLyAyO1xyXG4gICAgdmFyIGhhbGZXaWR0aCA9IGNhcmRJdGVtLm9mZnNldFdpZHRoIC8gMjtcclxuXHJcbiAgICAgIGNhcmRJdGVtLnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGVYKCcgKyAtKGV2dC5vZmZzZXRZIC0gaGFsZkhlaWdodCkgLyA3ICsgJ2RlZyknICtcclxuICAgICAgICAncm90YXRlWSgnICsgKGV2dC5vZmZzZXRYIC0gaGFsZldpZHRoKSAvIDcgKyAnZGVnJztcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHJvdGF0ZU5vbmUgKCkge1xyXG4gICAgdmFyIGNhcmRJdGVtID0gdGhpcy5xdWVyeVNlbGVjdG9yKCcucG9ydGZvbGlvX19jYXJkLXBlcnNwZWN0aXZlJyk7XHJcblxyXG4gICAgY2FyZEl0ZW0uc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZVgoMGRlZyknICsgJ3JvdGF0ZVkoMGRlZyknO1xyXG4gIH1cclxuXHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBjYXJkcy5sZW5ndGg7IGkrKykge1xyXG4gICAgdmFyIGNhcmQgPSBjYXJkc1tpXTtcclxuICAgIGNhcmQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgcm90YXRlKTtcclxuICAgIGNhcmQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCByb3RhdGVOb25lKTtcclxuICB9XHJcblxyXG59KSgpO1xyXG4ndXNlIHN0cmljdCc7XHJcblxyXG4oZnVuY3Rpb24gKCkge1xyXG5cclxuICBsZXQgYXJ0aWNsZUNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXJ0aWNsZV9fYm94LWFydGljbGUnKTtcclxuXHJcbiAgaWYgKGFydGljbGVDb250ZW50KSB7XHJcblxyXG4gICAgY29uc3QgREVTS1RPUF9XSURUSCA9IDEwMjM7XHJcbiAgICBsZXQgYXJ0aWNsZUNhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXJ0aWNsZV9fYm94LWFydGljbGVzJyk7XHJcblxyXG4gICAgbGV0IHNldEhlaWdodCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgbGV0IGlzRGVza3RvcCA9IHdpbmRvdy5pbm5lcldpZHRoID4gREVTS1RPUF9XSURUSDtcclxuXHJcbiAgICAgICAgaWYgKGlzRGVza3RvcCkge1xyXG4gICAgICAgICAgbGV0IGNvbnRlbnRIZWlnaHQgPSBhcnRpY2xlQ29udGVudC5vZmZzZXRIZWlnaHQ7XHJcbiAgICAgICAgICBhcnRpY2xlQ2FyZC5zdHlsZS5oZWlnaHQgPSBjb250ZW50SGVpZ2h0ICsgJ3B4JztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgYXJ0aWNsZUNhcmQuc3R5bGUuaGVpZ2h0ID0gJyc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc2V0SGVpZ2h0KCk7XHJcblxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHNldEhlaWdodCk7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgc2V0SGVpZ2h0KTtcclxuICB9XHJcblxyXG4gIGxldCBzZXJ2aWNlc0JveFdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VydmljZXMnKTtcclxuXHJcbiAgaWYgKHNlcnZpY2VzQm94V3JhcHBlcikge1xyXG5cclxuICAgIGNvbnN0IFRBQkxFVF9XSURUSCA9IDc2NztcclxuICAgIGxldCBzZXJ2aWNlc0JveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZXJ2aWNlc19fbmF2LWJveCcpO1xyXG5cclxuICAgIGxldCBzZXRIZWlnaHQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGxldCBpc1RhYmxldCA9IHdpbmRvdy5pbm5lcldpZHRoID4gVEFCTEVUX1dJRFRIO1xyXG5cclxuICAgICAgICBpZiAoaXNUYWJsZXQpIHtcclxuICAgICAgICAgIGxldCBjb250ZW50SGVpZ2h0ID0gc2VydmljZXNCb3hXcmFwcGVyLm9mZnNldEhlaWdodDtcclxuICAgICAgICAgIHNlcnZpY2VzQm94LnN0eWxlLmhlaWdodCA9IGNvbnRlbnRIZWlnaHQgKyAncHgnO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBzZXJ2aWNlc0JveC5zdHlsZS5oZWlnaHQgPSAnJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzZXRIZWlnaHQoKTtcclxuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgc2V0SGVpZ2h0KTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBzZXRIZWlnaHQpO1xyXG4gIH1cclxuXHJcbiAgbGV0IHN0YWdlV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGFnZXMnKTtcclxuXHJcbiAgaWYgKHN0YWdlV3JhcHBlcikge1xyXG5cclxuICAgIGNvbnN0IFRBQkxFVF9XSURUSCA9IDc2NztcclxuICAgIGxldCBzdGFnZUJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGFnZV9fbmF2LWJveCcpO1xyXG5cclxuICAgIGxldCBzZXRIZWlnaHQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGxldCBpc1RhYmxldCA9IHdpbmRvdy5pbm5lcldpZHRoID4gVEFCTEVUX1dJRFRIO1xyXG5cclxuICAgICAgICBpZiAoaXNUYWJsZXQpIHtcclxuICAgICAgICAgIGxldCBjb250ZW50SGVpZ2h0ID0gc3RhZ2VXcmFwcGVyLm9mZnNldEhlaWdodDtcclxuICAgICAgICAgIHN0YWdlQm94LnN0eWxlLmhlaWdodCA9IGNvbnRlbnRIZWlnaHQgKyAncHgnO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBzdGFnZUJveC5zdHlsZS5oZWlnaHQgPSAnJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzZXRIZWlnaHQoKTtcclxuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgc2V0SGVpZ2h0KTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBzZXRIZWlnaHQpO1xyXG4gIH1cclxuXHJcbn0pKCk7XHJcbid1c2Ugc3RyaWN0JztcclxuXHJcbihmdW5jdGlvbiAoKSB7XHJcblxyXG4gIHZhciBtYWluU2xpZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmludHJvX19ib3gtc3dpcGVyLWNvbnRhaW5lcicpO1xyXG5cclxuICB2YXIgY3JlYXRlU2xpZGVyID0gZnVuY3Rpb24gKGVsKSB7XHJcbiAgICByZXR1cm4gbmV3IFN3aXBlcihlbCwge1xyXG4gICAgICBkaXJlY3Rpb246ICd2ZXJ0aWNhbCcsXHJcbiAgICAgIHNsaWRlc1BlclZpZXc6IDEsXHJcbiAgICAgIHNwYWNlQmV0d2VlbjogMzAsXHJcbiAgICAgIGxvb3A6IHRydWUsXHJcbiAgICAgIHNwZWVkOiAxMjAwLFxyXG4gICAgICAvLyBhdXRvcGxheToge1xyXG4gICAgICAvLyAgIGRlbGF5OiA2MDAwLFxyXG4gICAgICAvLyB9LFxyXG4gICAgICBtb3VzZXdoZWVsOiB0cnVlLFxyXG4gICAgICBwYWdpbmF0aW9uOiB7XHJcbiAgICAgICAgZWw6ICcuc3dpcGVyLXBhZ2luYXRpb24nLFxyXG4gICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGlmIChtYWluU2xpZGVyKSB7XHJcbiAgICBjcmVhdGVTbGlkZXIobWFpblNsaWRlcik7XHJcbiAgfVxyXG5cclxufSkoKTtcclxuJ3VzZSBzdHJpY3QnO1xyXG5cclxuKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgdmFyIGJnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNiZ1wiKTtcclxuXHJcbiAgaWYgKGJnKSB7XHJcblxyXG4gICAgdmFyIHJlZnJlc2hEdXJhdGlvbiA9IDEwMDAwO1xyXG4gICAgdmFyIHJlZnJlc2hUaW1lb3V0O1xyXG4gICAgdmFyIG51bVBvaW50c1g7XHJcbiAgICB2YXIgbnVtUG9pbnRzWTtcclxuICAgIHZhciB1bml0V2lkdGg7XHJcbiAgICB2YXIgdW5pdEhlaWdodDtcclxuICAgIHZhciBwb2ludHM7XHJcblxyXG4gICAgZnVuY3Rpb24gb25Mb2FkKCkge1xyXG4gICAgICB2YXIgc3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdzdmcnKTtcclxuICAgICAgc3ZnLnNldEF0dHJpYnV0ZSgnd2lkdGgnLCB3aW5kb3cuaW5uZXJXaWR0aCk7XHJcbiAgICAgIHN2Zy5zZXRBdHRyaWJ1dGUoJ2hlaWdodCcsIDMzMDApO1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYmcnKS5hcHBlbmRDaGlsZChzdmcpO1xyXG5cclxuICAgICAgdmFyIHVuaXRTaXplID0gKHdpbmRvdy5pbm5lcldpZHRoICsgMzMwMCkgLyA0MDtcclxuICAgICAgbnVtUG9pbnRzWCA9IE1hdGguY2VpbCh3aW5kb3cuaW5uZXJXaWR0aCAvIHVuaXRTaXplKSArIDE7XHJcbiAgICAgIG51bVBvaW50c1kgPSBNYXRoLmNlaWwoMzMwMCAvIHVuaXRTaXplKSArIDE7XHJcbiAgICAgIHVuaXRXaWR0aCA9IE1hdGguY2VpbCh3aW5kb3cuaW5uZXJXaWR0aCAvIChudW1Qb2ludHNYIC0gMSkpO1xyXG4gICAgICB1bml0SGVpZ2h0ID0gTWF0aC5jZWlsKDMzMDAgLyAobnVtUG9pbnRzWSAtIDEpKTtcclxuICAgICAgcG9pbnRzID0gW107XHJcblxyXG4gICAgICBmb3IgKHZhciB5ID0gMDsgeSA8IG51bVBvaW50c1k7IHkrKykge1xyXG4gICAgICAgIGZvciAodmFyIHggPSAwOyB4IDwgbnVtUG9pbnRzWDsgeCsrKSB7XHJcbiAgICAgICAgICBwb2ludHMucHVzaCh7eDogdW5pdFdpZHRoICogeCwgeTogdW5pdEhlaWdodCAqIHksIG9yaWdpblg6IHVuaXRXaWR0aCAqIHgsIG9yaWdpblk6IHVuaXRIZWlnaHQgKiB5fSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICByYW5kb21pemUoKTtcclxuXHJcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcG9pbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKHBvaW50c1tpXS5vcmlnaW5YICE9IHVuaXRXaWR0aCAqIChudW1Qb2ludHNYIC0gMSkgJiYgcG9pbnRzW2ldLm9yaWdpblkgIT0gdW5pdEhlaWdodCAqIChudW1Qb2ludHNZIC0gMSkpIHtcclxuICAgICAgICAgIHZhciB0b3BMZWZ0WCA9IHBvaW50c1tpXS54O1xyXG4gICAgICAgICAgdmFyIHRvcExlZnRZID0gcG9pbnRzW2ldLnk7XHJcbiAgICAgICAgICB2YXIgdG9wUmlnaHRYID0gcG9pbnRzW2kgKyAxXS54O1xyXG4gICAgICAgICAgdmFyIHRvcFJpZ2h0WSA9IHBvaW50c1tpICsgMV0ueTtcclxuICAgICAgICAgIHZhciBib3R0b21MZWZ0WCA9IHBvaW50c1tpICsgbnVtUG9pbnRzWF0ueDtcclxuICAgICAgICAgIHZhciBib3R0b21MZWZ0WSA9IHBvaW50c1tpICsgbnVtUG9pbnRzWF0ueTtcclxuICAgICAgICAgIHZhciBib3R0b21SaWdodFggPSBwb2ludHNbaSArIG51bVBvaW50c1ggKyAxXS54O1xyXG4gICAgICAgICAgdmFyIGJvdHRvbVJpZ2h0WSA9IHBvaW50c1tpICsgbnVtUG9pbnRzWCArIDFdLnk7XHJcblxyXG4gICAgICAgICAgdmFyIHJhbmRvID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMik7XHJcblxyXG4gICAgICAgICAgZm9yICh2YXIgbiA9IDA7IG4gPCAyOyBuKyspIHtcclxuICAgICAgICAgICAgdmFyIHBvbHlnb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoc3ZnLm5hbWVzcGFjZVVSSSwgJ3BvbHlnb24nKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChyYW5kbyA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgaWYgKG4gPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgcG9seWdvbi5wb2ludDEgPSBpO1xyXG4gICAgICAgICAgICAgICAgcG9seWdvbi5wb2ludDIgPSBpICsgbnVtUG9pbnRzWDtcclxuICAgICAgICAgICAgICAgIHBvbHlnb24ucG9pbnQzID0gaSArIG51bVBvaW50c1ggKyAxO1xyXG4gICAgICAgICAgICAgICAgcG9seWdvbi5zZXRBdHRyaWJ1dGUoJ3BvaW50cycsIHRvcExlZnRYICsgJywnICsgdG9wTGVmdFkgKyAnICcgKyBib3R0b21MZWZ0WCArICcsJyArIGJvdHRvbUxlZnRZICsgJyAnICsgYm90dG9tUmlnaHRYICsgJywnICsgYm90dG9tUmlnaHRZKTtcclxuICAgICAgICAgICAgICB9IGVsc2UgaWYgKG4gPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgcG9seWdvbi5wb2ludDEgPSBpO1xyXG4gICAgICAgICAgICAgICAgcG9seWdvbi5wb2ludDIgPSBpICsgMTtcclxuICAgICAgICAgICAgICAgIHBvbHlnb24ucG9pbnQzID0gaSArIG51bVBvaW50c1ggKyAxO1xyXG4gICAgICAgICAgICAgICAgcG9seWdvbi5zZXRBdHRyaWJ1dGUoJ3BvaW50cycsIHRvcExlZnRYICsgJywnICsgdG9wTGVmdFkgKyAnICcgKyB0b3BSaWdodFggKyAnLCcgKyB0b3BSaWdodFkgKyAnICcgKyBib3R0b21SaWdodFggKyAnLCcgKyBib3R0b21SaWdodFkpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIGlmIChyYW5kbyA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgaWYgKG4gPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgcG9seWdvbi5wb2ludDEgPSBpO1xyXG4gICAgICAgICAgICAgICAgcG9seWdvbi5wb2ludDIgPSBpICsgbnVtUG9pbnRzWDtcclxuICAgICAgICAgICAgICAgIHBvbHlnb24ucG9pbnQzID0gaSArIDE7XHJcbiAgICAgICAgICAgICAgICBwb2x5Z29uLnNldEF0dHJpYnV0ZSgncG9pbnRzJywgdG9wTGVmdFggKyAnLCcgKyB0b3BMZWZ0WSArICcgJyArIGJvdHRvbUxlZnRYICsgJywnICsgYm90dG9tTGVmdFkgKyAnICcgKyB0b3BSaWdodFggKyAnLCcgKyB0b3BSaWdodFkpO1xyXG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAobiA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICBwb2x5Z29uLnBvaW50MSA9IGkgKyBudW1Qb2ludHNYO1xyXG4gICAgICAgICAgICAgICAgcG9seWdvbi5wb2ludDIgPSBpICsgMTtcclxuICAgICAgICAgICAgICAgIHBvbHlnb24ucG9pbnQzID0gaSArIG51bVBvaW50c1ggKyAxO1xyXG4gICAgICAgICAgICAgICAgcG9seWdvbi5zZXRBdHRyaWJ1dGUoJ3BvaW50cycsIGJvdHRvbUxlZnRYICsgJywnICsgYm90dG9tTGVmdFkgKyAnICcgKyB0b3BSaWdodFggKyAnLCcgKyB0b3BSaWdodFkgKyAnICcgKyBib3R0b21SaWdodFggKyAnLCcgKyBib3R0b21SaWdodFkpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgaCA9IDIwNztcclxuICAgICAgICAgICAgdmFyIHMgPSA0NTtcclxuICAgICAgICAgICAgdmFyIGwgPSA4MCArIChNYXRoLnJhbmRvbSgpICogMTIpO1xyXG4gICAgICAgICAgICBwb2x5Z29uLnNldEF0dHJpYnV0ZSgnZmlsbCcsICdoc2woJyArIGggKyAnLCAnICsgcyArICclLCAnICsgbCArICclKScpO1xyXG4gICAgICAgICAgICB2YXIgYW5pbWF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAnYW5pbWF0ZScpO1xyXG4gICAgICAgICAgICBhbmltYXRlLnNldEF0dHJpYnV0ZSgnZmlsbCcsICdmcmVlemUnKTtcclxuICAgICAgICAgICAgYW5pbWF0ZS5zZXRBdHRyaWJ1dGUoJ2F0dHJpYnV0ZU5hbWUnLCAncG9pbnRzJyk7XHJcbiAgICAgICAgICAgIGFuaW1hdGUuc2V0QXR0cmlidXRlKCdkdXInLCByZWZyZXNoRHVyYXRpb24gKyAnbXMnKTtcclxuICAgICAgICAgICAgYW5pbWF0ZS5zZXRBdHRyaWJ1dGUoJ2NhbGNNb2RlJywgJ2xpbmVhcicpO1xyXG4gICAgICAgICAgICBwb2x5Z29uLmFwcGVuZENoaWxkKGFuaW1hdGUpO1xyXG4gICAgICAgICAgICBzdmcuYXBwZW5kQ2hpbGQocG9seWdvbik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICByZWZyZXNoKCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJhbmRvbWl6ZSgpIHtcclxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwb2ludHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAocG9pbnRzW2ldLm9yaWdpblggIT0gMCAmJiBwb2ludHNbaV0ub3JpZ2luWCAhPSB1bml0V2lkdGggKiAobnVtUG9pbnRzWCAtIDEpKSB7XHJcbiAgICAgICAgICBwb2ludHNbaV0ueCA9IHBvaW50c1tpXS5vcmlnaW5YICsgTWF0aC5yYW5kb20oKSAqIHVuaXRXaWR0aCAtIHVuaXRXaWR0aCAvIDI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChwb2ludHNbaV0ub3JpZ2luWSAhPSAwICYmIHBvaW50c1tpXS5vcmlnaW5ZICE9IHVuaXRIZWlnaHQgKiAobnVtUG9pbnRzWSAtIDEpKSB7XHJcbiAgICAgICAgICBwb2ludHNbaV0ueSA9IHBvaW50c1tpXS5vcmlnaW5ZICsgTWF0aC5yYW5kb20oKSAqIHVuaXRIZWlnaHQgLSB1bml0SGVpZ2h0IC8gMjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByZWZyZXNoKCkge1xyXG4gICAgICByYW5kb21pemUoKTtcclxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYmcgc3ZnJykuY2hpbGROb2Rlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHZhciBwb2x5Z29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2JnIHN2ZycpLmNoaWxkTm9kZXNbaV07XHJcbiAgICAgICAgdmFyIGFuaW1hdGUgPSBwb2x5Z29uLmNoaWxkTm9kZXNbMF07XHJcbiAgICAgICAgaWYgKGFuaW1hdGUuZ2V0QXR0cmlidXRlKCd0bycpKSB7XHJcbiAgICAgICAgICBhbmltYXRlLnNldEF0dHJpYnV0ZSgnZnJvbScsIGFuaW1hdGUuZ2V0QXR0cmlidXRlKCd0bycpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYW5pbWF0ZS5zZXRBdHRyaWJ1dGUoJ3RvJywgcG9pbnRzW3BvbHlnb24ucG9pbnQxXS54ICsgJywnICsgcG9pbnRzW3BvbHlnb24ucG9pbnQxXS55ICsgJyAnICsgcG9pbnRzW3BvbHlnb24ucG9pbnQyXS54ICsgJywnICsgcG9pbnRzW3BvbHlnb24ucG9pbnQyXS55ICsgJyAnICsgcG9pbnRzW3BvbHlnb24ucG9pbnQzXS54ICsgJywnICsgcG9pbnRzW3BvbHlnb24ucG9pbnQzXS55KTtcclxuICAgICAgICBhbmltYXRlLmJlZ2luRWxlbWVudCgpO1xyXG4gICAgICB9XHJcbiAgICAgIHJlZnJlc2hUaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmVmcmVzaCgpO1xyXG4gICAgICB9LCByZWZyZXNoRHVyYXRpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG9uUmVzaXplKCkge1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYmcgc3ZnJykucmVtb3ZlKCk7XHJcbiAgICAgIGNsZWFyVGltZW91dChyZWZyZXNoVGltZW91dCk7XHJcbiAgICAgIG9uTG9hZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHdpbmRvdy5vbmxvYWQgPSBvbkxvYWQ7XHJcbiAgICB3aW5kb3cub25yZXNpemUgPSBvblJlc2l6ZTtcclxuICB9XHJcblxyXG59KSgpOyJdLCJmaWxlIjoibWFpbi5qcyJ9
