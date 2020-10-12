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

  var container = document.querySelector('.portfolio');

  if (container) {

    var cards = document.querySelectorAll(".portfolio__box-card");
    var btnMore = document.querySelector('.btn-more');

    btnMore.addEventListener('click', function (evt) {
      evt.preventDefault();

      function rotate(evt) {
        var cardItem = this.querySelector('.portfolio__card-perspective');
        var halfHeight = cardItem.offsetHeight / 2;
        var halfWidth = cardItem.offsetWidth / 2;

        cardItem.style.transform = 'rotateX(' + -(evt.offsetY - halfHeight) / 7 + 'deg)' +
          'rotateY(' + (evt.offsetX - halfWidth) / 7 + 'deg';
      }

      function rotateNone() {
        var cardItem = this.querySelector('.portfolio__card-perspective');

        cardItem.style.transform = 'rotateX(0deg)' + 'rotateY(0deg)';
      }

      for (var i = 0; i < cards.length; i++) {
        var card = cards[i];
        card.addEventListener('mousemove', rotate);
        card.addEventListener('mouseout', rotateNone);
      }
    });
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

    const MOBILE_WIDTH = 767;

    if (window.innerWidth > MOBILE_WIDTH) {

      var refreshDuration = 10000;
      var refreshTimeout;
      var numPointsX;
      var numPointsY;
      var unitWidth;
      var unitHeight;
      var points;
      var main = document.querySelector('main');

      function onLoad() {

        var setHeight = main.offsetHeight;
        var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('width', window.innerWidth);
        svg.setAttribute('height', setHeight);
        document.querySelector('#bg').appendChild(svg);

        var unitSize = (window.innerWidth + setHeight) / 40;
        numPointsX = Math.ceil(window.innerWidth / unitSize) + 1;
        numPointsY = Math.ceil(setHeight / unitSize) + 1;
        unitWidth = Math.ceil(window.innerWidth / (numPointsX - 1));
        unitHeight = Math.ceil(setHeight / (numPointsY - 1));
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
  }

})();
'use strict';

(function () {

  var portfolioPage = document.querySelector('.portfolio-page__company');

  if (portfolioPage) {
    var portfolioBox = document.querySelector('.portfolio-page__box');
    var portfolioWrapper = document.querySelector('.portfolio-page__wrapper');

    if (window.innerWidth > 1023) {

      document.body.style.overflow = 'hidden';

      window.addEventListener('wheel', function () {

        if (window.innerWidth > 1200) {
          portfolioBox.style.transform = 'translate(-10%, 10%)';
        } else if (window.innerWidth > 1023) {
          portfolioBox.style.transform = 'translate(0%, 10%)';
        } else {
          portfolioBox.style.transform = '';
        }

        portfolioWrapper.classList.add('portfolio-page__wrapper--active');
        portfolioPage.classList.add('portfolio-page__company--active');

        function show() {
          portfolioBox.classList.add('portfolio-page__box--active');
        }

        setTimeout(show, 400);
      });

      portfolioPage.addEventListener('scroll', function () {
        if (portfolioPage.scrollTop === 0) {

          if (window.innerWidth > 1200) {
            portfolioBox.style.transform = 'translate(180%, -150%)';
          } else if (window.innerWidth > 1023) {
            portfolioBox.style.transform = 'translate(153%, -130%)';
          } else {
            portfolioBox.style.transform = '';
          }

          portfolioWrapper.classList.remove('portfolio-page__wrapper--active');
          portfolioPage.classList.remove('portfolio-page__company--active');

          function none() {
            portfolioBox.classList.remove('portfolio-page__box--active');
          }

          setTimeout(none, 500);
        }

      });
    }
  }

})();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qXHJcblxyXG4gICog0L/QvtC00LrQu9GO0YfQtdC90LjQtSBqcy3QvNC+0LTRg9C70LXQuVxyXG4gICogLy89IG1vZHVsZXMvZmlsZS5qc1xyXG5cclxuKi9cclxuXHJcbid1c2Ugc3RyaWN0JztcclxuXHJcbihmdW5jdGlvbiAoKSB7XHJcbiAgdmFyIG1lbnVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1oZWFkZXJfX2J0bicpO1xyXG4gIHZhciB3cmFwTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi1oZWFkZXJfX3dyYXAtbWVudVwiKTtcclxuICB2YXIgc3RhZ2VNZW51QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4taGVhZGVyX19saW5rLXN0YWdlJyk7XHJcbiAgdmFyIHN0YWdlTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWhlYWRlcl9fc3RhZ2UtbmF2Jyk7XHJcbiAgdmFyIHNlcnZpY2VzTWVudUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWhlYWRlcl9fbGluay1zZXJ2aWNlcycpO1xyXG4gIHZhciBzZXJ2aWNlc01lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1oZWFkZXJfX3NlcnZpY2VzLW5hdicpO1xyXG5cclxuICBpZiAobWVudUJ0bikge1xyXG5cclxuICAgIG1lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZ0KSB7XHJcbiAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgaWYgKG1lbnVCdG4uY2xhc3NMaXN0LmNvbnRhaW5zKCdtYWluLWhlYWRlcl9fYnRuLS1jbG9zZWQnKSkge1xyXG4gICAgICAgIG1lbnVCdG4uY2xhc3NMaXN0LnJlbW92ZSgnbWFpbi1oZWFkZXJfX2J0bi0tY2xvc2VkJyk7XHJcbiAgICAgICAgbWVudUJ0bi5jbGFzc0xpc3QuYWRkKCdtYWluLWhlYWRlcl9fYnRuLS1vcGVuZWQnKTtcclxuICAgICAgICB3cmFwTWVudS5jbGFzc0xpc3QuYWRkKCdtYWluLWhlYWRlcl9fd3JhcC1tZW51LS1hY3RpdmUnKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbWVudUJ0bi5jbGFzc0xpc3QuYWRkKCdtYWluLWhlYWRlcl9fYnRuLS1jbG9zZWQnKTtcclxuICAgICAgICBtZW51QnRuLmNsYXNzTGlzdC5yZW1vdmUoJ21haW4taGVhZGVyX19idG4tLW9wZW5lZCcpO1xyXG4gICAgICAgIHdyYXBNZW51LmNsYXNzTGlzdC5yZW1vdmUoJ21haW4taGVhZGVyX193cmFwLW1lbnUtLWFjdGl2ZScpO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnJztcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgc3RhZ2VNZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2dCkge1xyXG4gICAgICBldnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgIGlmIChzdGFnZU1lbnUuY2xhc3NMaXN0LmNvbnRhaW5zKCdtYWluLWhlYWRlcl9fc3RhZ2UtbmF2LS1jbG9zZWQnKSkge1xyXG4gICAgICAgIHN0YWdlTWVudS5jbGFzc0xpc3QucmVtb3ZlKCdtYWluLWhlYWRlcl9fc3RhZ2UtbmF2LS1jbG9zZWQnKTtcclxuICAgICAgICBzdGFnZU1lbnUuY2xhc3NMaXN0LmFkZCgnbWFpbi1oZWFkZXJfX3N0YWdlLW5hdi0tb3BlbmVkJyk7XHJcbiAgICAgICAgc3RhZ2VNZW51QnRuLmNsYXNzTGlzdC5yZW1vdmUoJ21haW4taGVhZGVyX19saW5rLXN0YWdlLS1jbG9zZWQnKTtcclxuICAgICAgICBzdGFnZU1lbnVCdG4uY2xhc3NMaXN0LmFkZCgnbWFpbi1oZWFkZXJfX2xpbmstc3RhZ2UtLW9wZW5lZCcpO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzdGFnZU1lbnUuY2xhc3NMaXN0LmFkZCgnbWFpbi1oZWFkZXJfX3N0YWdlLW5hdi0tY2xvc2VkJyk7XHJcbiAgICAgICAgc3RhZ2VNZW51LmNsYXNzTGlzdC5yZW1vdmUoJ21haW4taGVhZGVyX19zdGFnZS1uYXYtLW9wZW5lZCcpO1xyXG4gICAgICAgIHN0YWdlTWVudUJ0bi5jbGFzc0xpc3QuYWRkKCdtYWluLWhlYWRlcl9fbGluay1zdGFnZS0tY2xvc2VkJyk7XHJcbiAgICAgICAgc3RhZ2VNZW51QnRuLmNsYXNzTGlzdC5yZW1vdmUoJ21haW4taGVhZGVyX19saW5rLXN0YWdlLS1vcGVuZWQnKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJyc7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHNlcnZpY2VzTWVudUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldnQpIHtcclxuICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICBpZiAoc2VydmljZXNNZW51LmNsYXNzTGlzdC5jb250YWlucygnbWFpbi1oZWFkZXJfX3NlcnZpY2VzLW5hdi0tY2xvc2VkJykpIHtcclxuICAgICAgICBzZXJ2aWNlc01lbnUuY2xhc3NMaXN0LnJlbW92ZSgnbWFpbi1oZWFkZXJfX3NlcnZpY2VzLW5hdi0tY2xvc2VkJyk7XHJcbiAgICAgICAgc2VydmljZXNNZW51LmNsYXNzTGlzdC5hZGQoJ21haW4taGVhZGVyX19zZXJ2aWNlcy1uYXYtLW9wZW5lZCcpO1xyXG4gICAgICAgIHNlcnZpY2VzTWVudUJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdtYWluLWhlYWRlcl9fbGluay1zZXJ2aWNlcy0tY2xvc2VkJyk7XHJcbiAgICAgICAgc2VydmljZXNNZW51QnRuLmNsYXNzTGlzdC5hZGQoJ21haW4taGVhZGVyX19saW5rLXNlcnZpY2VzLS1vcGVuZWQnKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2VydmljZXNNZW51LmNsYXNzTGlzdC5hZGQoJ21haW4taGVhZGVyX19zZXJ2aWNlcy1uYXYtLWNsb3NlZCcpO1xyXG4gICAgICAgIHNlcnZpY2VzTWVudS5jbGFzc0xpc3QucmVtb3ZlKCdtYWluLWhlYWRlcl9fc2VydmljZXMtbmF2LS1vcGVuZWQnKTtcclxuICAgICAgICBzZXJ2aWNlc01lbnVCdG4uY2xhc3NMaXN0LmFkZCgnbWFpbi1oZWFkZXJfX2xpbmstc2VydmljZXMtLWNsb3NlZCcpO1xyXG4gICAgICAgIHNlcnZpY2VzTWVudUJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdtYWluLWhlYWRlcl9fbGluay1zZXJ2aWNlcy0tb3BlbmVkJyk7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICcnO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG59KSgpO1xyXG4ndXNlIHN0cmljdCc7XHJcblxyXG4oZnVuY3Rpb24gKCkge1xyXG5cclxuICBsZXQgY2xpZW50c1NsaWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbGllbnRzX19zd2lwZXItY29udGFpbmVyJyk7XHJcbiAgbGV0IHNlcnZpY2VzU2xpZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlcnZpY2VzX19zd2lwZXItY29udGFpbmVyJyk7XHJcblxyXG4gIGxldCBjbGllbnRzU2xpZGVyRGVzayA9IGZ1bmN0aW9uIChlbCkge1xyXG4gICAgcmV0dXJuIG5ldyBTd2lwZXIoZWwsIHtcclxuICAgICAgbG9vcDogdHJ1ZSxcclxuICAgICAgc3BlZWQ6IDEwMDAsXHJcbiAgICAgIGF1dG9wbGF5OiB7XHJcbiAgICAgICAgZGVsYXk6IDI1MDAsXHJcbiAgICAgIH0sXHJcbiAgICAgIG5hdmlnYXRpb246IHtcclxuICAgICAgICBuZXh0RWw6ICcuc3dpcGVyLWJ1dHRvbi1uZXh0JyxcclxuICAgICAgICBwcmV2RWw6ICcuc3dpcGVyLWJ1dHRvbi1wcmV2JyxcclxuICAgICAgfSxcclxuICAgICAgYnJlYWtwb2ludHM6IHtcclxuICAgICAgICAzMjA6IHtcclxuICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDEsXHJcbiAgICAgICAgfSxcclxuICAgICAgICA3Njg6IHtcclxuICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICA5NTA6IHtcclxuICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDMsXHJcbiAgICAgICAgfSxcclxuICAgICAgICAxMjAwOiB7XHJcbiAgICAgICAgICBzbGlkZXNQZXJWaWV3OiA0LFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgaWYgKGNsaWVudHNTbGlkZXIpIHtcclxuICAgIGNsaWVudHNTbGlkZXJEZXNrKGNsaWVudHNTbGlkZXIpO1xyXG4gIH1cclxuXHJcbiAgbGV0IHNlcnZpY2VzU2xpZGVyRGVzayA9IGZ1bmN0aW9uIChlbCkge1xyXG4gICAgcmV0dXJuIG5ldyBTd2lwZXIoZWwsIHtcclxuICAgICAgc3BlZWQ6IDEwMDAsXHJcbiAgICAgIG5hdmlnYXRpb246IHtcclxuICAgICAgICBuZXh0RWw6ICcuc3dpcGVyLWJ1dHRvbi1uZXh0JyxcclxuICAgICAgICBwcmV2RWw6ICcuc3dpcGVyLWJ1dHRvbi1wcmV2JyxcclxuICAgICAgfSxcclxuICAgICAgYnJlYWtwb2ludHM6IHtcclxuICAgICAgICAzMjA6IHtcclxuICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDEsXHJcbiAgICAgICAgfSxcclxuICAgICAgICA3Njg6IHtcclxuICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICAxMDI0OiB7XHJcbiAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAzLFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgaWYgKHNlcnZpY2VzU2xpZGVyKSB7XHJcbiAgICBzZXJ2aWNlc1NsaWRlckRlc2soc2VydmljZXNTbGlkZXIpO1xyXG4gIH1cclxuXHJcbn0pKCk7XHJcbid1c2Ugc3RyaWN0JztcclxuXHJcbiQoZnVuY3Rpb24gKCkge1xyXG5cclxuICBqUXVlcnkoZnVuY3Rpb24gKCQpIHtcclxuICAgICQoXCIjdXNlcl9waG9uZVwiKS5tYXNrKFwiKzM3NSAoOTkpIDk5OS05OS05OVwiKTtcclxuICB9KTtcclxuXHJcbiAgJChcIiN1c2VyX25hbWVcIikua2V5dXAoZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKCQodGhpcykudmFsKCkpIHtcclxuICAgICAgJCh0aGlzKS5hZGRDbGFzcyhcIm5vdC1lbXB0eVwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoXCJub3QtZW1wdHlcIik7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gICQoXCIjdXNlcl9jb21wYW55XCIpLmtleXVwKGZ1bmN0aW9uICgpIHtcclxuICAgIGlmICgkKHRoaXMpLnZhbCgpKSB7XHJcbiAgICAgICQodGhpcykuYWRkQ2xhc3MoXCJub3QtZW1wdHlcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKFwibm90LWVtcHR5XCIpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICAkKFwiI3VzZXJfcGhvbmVcIikua2V5dXAoZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKCQodGhpcykudmFsKCkpIHtcclxuICAgICAgJCh0aGlzKS5hZGRDbGFzcyhcIm5vdC1lbXB0eVwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoXCJub3QtZW1wdHlcIik7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gICQoXCIjdXNlcl9lbWFpbFwiKS5rZXl1cChmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAoJCh0aGlzKS52YWwoKSkge1xyXG4gICAgICAkKHRoaXMpLmFkZENsYXNzKFwibm90LWVtcHR5XCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcyhcIm5vdC1lbXB0eVwiKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgJChcIiN1c2VyX2NvbW1lbnRcIikua2V5dXAoZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKCQodGhpcykudmFsKCkpIHtcclxuICAgICAgJCh0aGlzKS5hZGRDbGFzcygnbm90LWVtcHR5Jyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdub3QtZW1wdHknKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgJChcIiN1c2VyX2NvbW1lbnRzXCIpLmtleXVwKGZ1bmN0aW9uICgpIHtcclxuICAgIGlmICgkKHRoaXMpLnZhbCgpKSB7XHJcbiAgICAgICQodGhpcykuYWRkQ2xhc3MoJ25vdC1lbXB0eScpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnbm90LWVtcHR5Jyk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn0pO1xyXG4ndXNlIHN0cmljdCc7XHJcblxyXG4oZnVuY3Rpb24gKCkge1xyXG5cclxuICB2YXIgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcnRmb2xpbycpO1xyXG5cclxuICBpZiAoY29udGFpbmVyKSB7XHJcblxyXG4gICAgdmFyIGNhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wb3J0Zm9saW9fX2JveC1jYXJkXCIpO1xyXG4gICAgdmFyIGJ0bk1vcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLW1vcmUnKTtcclxuXHJcbiAgICBidG5Nb3JlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2dCkge1xyXG4gICAgICBldnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgIGZ1bmN0aW9uIHJvdGF0ZShldnQpIHtcclxuICAgICAgICB2YXIgY2FyZEl0ZW0gPSB0aGlzLnF1ZXJ5U2VsZWN0b3IoJy5wb3J0Zm9saW9fX2NhcmQtcGVyc3BlY3RpdmUnKTtcclxuICAgICAgICB2YXIgaGFsZkhlaWdodCA9IGNhcmRJdGVtLm9mZnNldEhlaWdodCAvIDI7XHJcbiAgICAgICAgdmFyIGhhbGZXaWR0aCA9IGNhcmRJdGVtLm9mZnNldFdpZHRoIC8gMjtcclxuXHJcbiAgICAgICAgY2FyZEl0ZW0uc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZVgoJyArIC0oZXZ0Lm9mZnNldFkgLSBoYWxmSGVpZ2h0KSAvIDcgKyAnZGVnKScgK1xyXG4gICAgICAgICAgJ3JvdGF0ZVkoJyArIChldnQub2Zmc2V0WCAtIGhhbGZXaWR0aCkgLyA3ICsgJ2RlZyc7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGZ1bmN0aW9uIHJvdGF0ZU5vbmUoKSB7XHJcbiAgICAgICAgdmFyIGNhcmRJdGVtID0gdGhpcy5xdWVyeVNlbGVjdG9yKCcucG9ydGZvbGlvX19jYXJkLXBlcnNwZWN0aXZlJyk7XHJcblxyXG4gICAgICAgIGNhcmRJdGVtLnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGVYKDBkZWcpJyArICdyb3RhdGVZKDBkZWcpJztcclxuICAgICAgfVxyXG5cclxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjYXJkcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHZhciBjYXJkID0gY2FyZHNbaV07XHJcbiAgICAgICAgY2FyZC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCByb3RhdGUpO1xyXG4gICAgICAgIGNhcmQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCByb3RhdGVOb25lKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxufSkoKTtcclxuJ3VzZSBzdHJpY3QnO1xyXG5cclxuKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgbGV0IGFydGljbGVDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFydGljbGVfX2JveC1hcnRpY2xlJyk7XHJcblxyXG4gIGlmIChhcnRpY2xlQ29udGVudCkge1xyXG5cclxuICAgIGNvbnN0IERFU0tUT1BfV0lEVEggPSAxMDIzO1xyXG4gICAgbGV0IGFydGljbGVDYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFydGljbGVfX2JveC1hcnRpY2xlcycpO1xyXG5cclxuICAgIGxldCBzZXRIZWlnaHQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGxldCBpc0Rlc2t0b3AgPSB3aW5kb3cuaW5uZXJXaWR0aCA+IERFU0tUT1BfV0lEVEg7XHJcblxyXG4gICAgICAgIGlmIChpc0Rlc2t0b3ApIHtcclxuICAgICAgICAgIGxldCBjb250ZW50SGVpZ2h0ID0gYXJ0aWNsZUNvbnRlbnQub2Zmc2V0SGVpZ2h0O1xyXG4gICAgICAgICAgYXJ0aWNsZUNhcmQuc3R5bGUuaGVpZ2h0ID0gY29udGVudEhlaWdodCArICdweCc7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGFydGljbGVDYXJkLnN0eWxlLmhlaWdodCA9ICcnO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHNldEhlaWdodCgpO1xyXG5cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBzZXRIZWlnaHQpO1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHNldEhlaWdodCk7XHJcbiAgfVxyXG5cclxuICBsZXQgc2VydmljZXNCb3hXcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlcnZpY2VzJyk7XHJcblxyXG4gIGlmIChzZXJ2aWNlc0JveFdyYXBwZXIpIHtcclxuXHJcbiAgICBjb25zdCBUQUJMRVRfV0lEVEggPSA3Njc7XHJcbiAgICBsZXQgc2VydmljZXNCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VydmljZXNfX25hdi1ib3gnKTtcclxuXHJcbiAgICBsZXQgc2V0SGVpZ2h0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICBsZXQgaXNUYWJsZXQgPSB3aW5kb3cuaW5uZXJXaWR0aCA+IFRBQkxFVF9XSURUSDtcclxuXHJcbiAgICAgICAgaWYgKGlzVGFibGV0KSB7XHJcbiAgICAgICAgICBsZXQgY29udGVudEhlaWdodCA9IHNlcnZpY2VzQm94V3JhcHBlci5vZmZzZXRIZWlnaHQ7XHJcbiAgICAgICAgICBzZXJ2aWNlc0JveC5zdHlsZS5oZWlnaHQgPSBjb250ZW50SGVpZ2h0ICsgJ3B4JztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgc2VydmljZXNCb3guc3R5bGUuaGVpZ2h0ID0gJyc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc2V0SGVpZ2h0KCk7XHJcblxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHNldEhlaWdodCk7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgc2V0SGVpZ2h0KTtcclxuICB9XHJcblxyXG4gIGxldCBzdGFnZVdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhZ2VzJyk7XHJcblxyXG4gIGlmIChzdGFnZVdyYXBwZXIpIHtcclxuXHJcbiAgICBjb25zdCBUQUJMRVRfV0lEVEggPSA3Njc7XHJcbiAgICBsZXQgc3RhZ2VCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhZ2VfX25hdi1ib3gnKTtcclxuXHJcbiAgICBsZXQgc2V0SGVpZ2h0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICBsZXQgaXNUYWJsZXQgPSB3aW5kb3cuaW5uZXJXaWR0aCA+IFRBQkxFVF9XSURUSDtcclxuXHJcbiAgICAgICAgaWYgKGlzVGFibGV0KSB7XHJcbiAgICAgICAgICBsZXQgY29udGVudEhlaWdodCA9IHN0YWdlV3JhcHBlci5vZmZzZXRIZWlnaHQ7XHJcbiAgICAgICAgICBzdGFnZUJveC5zdHlsZS5oZWlnaHQgPSBjb250ZW50SGVpZ2h0ICsgJ3B4JztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgc3RhZ2VCb3guc3R5bGUuaGVpZ2h0ID0gJyc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc2V0SGVpZ2h0KCk7XHJcblxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHNldEhlaWdodCk7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgc2V0SGVpZ2h0KTtcclxuICB9XHJcblxyXG59KSgpO1xyXG4ndXNlIHN0cmljdCc7XHJcblxyXG4oZnVuY3Rpb24gKCkge1xyXG5cclxuICB2YXIgbWFpblNsaWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnRyb19fYm94LXN3aXBlci1jb250YWluZXInKTtcclxuXHJcbiAgdmFyIGNyZWF0ZVNsaWRlciA9IGZ1bmN0aW9uIChlbCkge1xyXG4gICAgcmV0dXJuIG5ldyBTd2lwZXIoZWwsIHtcclxuICAgICAgZGlyZWN0aW9uOiAndmVydGljYWwnLFxyXG4gICAgICBzbGlkZXNQZXJWaWV3OiAxLFxyXG4gICAgICBzcGFjZUJldHdlZW46IDMwLFxyXG4gICAgICBsb29wOiB0cnVlLFxyXG4gICAgICBzcGVlZDogMTIwMCxcclxuICAgICAgLy8gYXV0b3BsYXk6IHtcclxuICAgICAgLy8gICBkZWxheTogNjAwMCxcclxuICAgICAgLy8gfSxcclxuICAgICAgbW91c2V3aGVlbDogdHJ1ZSxcclxuICAgICAgcGFnaW5hdGlvbjoge1xyXG4gICAgICAgIGVsOiAnLnN3aXBlci1wYWdpbmF0aW9uJyxcclxuICAgICAgICBjbGlja2FibGU6IHRydWUsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBpZiAobWFpblNsaWRlcikge1xyXG4gICAgY3JlYXRlU2xpZGVyKG1haW5TbGlkZXIpO1xyXG4gIH1cclxuXHJcbn0pKCk7XHJcbid1c2Ugc3RyaWN0JztcclxuXHJcbihmdW5jdGlvbiAoKSB7XHJcblxyXG4gIHZhciBiZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYmdcIik7XHJcblxyXG4gIGlmIChiZykge1xyXG5cclxuICAgIGNvbnN0IE1PQklMRV9XSURUSCA9IDc2NztcclxuXHJcbiAgICBpZiAod2luZG93LmlubmVyV2lkdGggPiBNT0JJTEVfV0lEVEgpIHtcclxuXHJcbiAgICAgIHZhciByZWZyZXNoRHVyYXRpb24gPSAxMDAwMDtcclxuICAgICAgdmFyIHJlZnJlc2hUaW1lb3V0O1xyXG4gICAgICB2YXIgbnVtUG9pbnRzWDtcclxuICAgICAgdmFyIG51bVBvaW50c1k7XHJcbiAgICAgIHZhciB1bml0V2lkdGg7XHJcbiAgICAgIHZhciB1bml0SGVpZ2h0O1xyXG4gICAgICB2YXIgcG9pbnRzO1xyXG4gICAgICB2YXIgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcclxuXHJcbiAgICAgIGZ1bmN0aW9uIG9uTG9hZCgpIHtcclxuXHJcbiAgICAgICAgdmFyIHNldEhlaWdodCA9IG1haW4ub2Zmc2V0SGVpZ2h0O1xyXG4gICAgICAgIHZhciBzdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ3N2ZycpO1xyXG4gICAgICAgIHN2Zy5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgd2luZG93LmlubmVyV2lkdGgpO1xyXG4gICAgICAgIHN2Zy5zZXRBdHRyaWJ1dGUoJ2hlaWdodCcsIHNldEhlaWdodCk7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2JnJykuYXBwZW5kQ2hpbGQoc3ZnKTtcclxuXHJcbiAgICAgICAgdmFyIHVuaXRTaXplID0gKHdpbmRvdy5pbm5lcldpZHRoICsgc2V0SGVpZ2h0KSAvIDQwO1xyXG4gICAgICAgIG51bVBvaW50c1ggPSBNYXRoLmNlaWwod2luZG93LmlubmVyV2lkdGggLyB1bml0U2l6ZSkgKyAxO1xyXG4gICAgICAgIG51bVBvaW50c1kgPSBNYXRoLmNlaWwoc2V0SGVpZ2h0IC8gdW5pdFNpemUpICsgMTtcclxuICAgICAgICB1bml0V2lkdGggPSBNYXRoLmNlaWwod2luZG93LmlubmVyV2lkdGggLyAobnVtUG9pbnRzWCAtIDEpKTtcclxuICAgICAgICB1bml0SGVpZ2h0ID0gTWF0aC5jZWlsKHNldEhlaWdodCAvIChudW1Qb2ludHNZIC0gMSkpO1xyXG4gICAgICAgIHBvaW50cyA9IFtdO1xyXG5cclxuICAgICAgICBmb3IgKHZhciB5ID0gMDsgeSA8IG51bVBvaW50c1k7IHkrKykge1xyXG4gICAgICAgICAgZm9yICh2YXIgeCA9IDA7IHggPCBudW1Qb2ludHNYOyB4KyspIHtcclxuICAgICAgICAgICAgcG9pbnRzLnB1c2goe3g6IHVuaXRXaWR0aCAqIHgsIHk6IHVuaXRIZWlnaHQgKiB5LCBvcmlnaW5YOiB1bml0V2lkdGggKiB4LCBvcmlnaW5ZOiB1bml0SGVpZ2h0ICogeX0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmFuZG9taXplKCk7XHJcblxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcG9pbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICBpZiAocG9pbnRzW2ldLm9yaWdpblggIT0gdW5pdFdpZHRoICogKG51bVBvaW50c1ggLSAxKSAmJiBwb2ludHNbaV0ub3JpZ2luWSAhPSB1bml0SGVpZ2h0ICogKG51bVBvaW50c1kgLSAxKSkge1xyXG4gICAgICAgICAgICB2YXIgdG9wTGVmdFggPSBwb2ludHNbaV0ueDtcclxuICAgICAgICAgICAgdmFyIHRvcExlZnRZID0gcG9pbnRzW2ldLnk7XHJcbiAgICAgICAgICAgIHZhciB0b3BSaWdodFggPSBwb2ludHNbaSArIDFdLng7XHJcbiAgICAgICAgICAgIHZhciB0b3BSaWdodFkgPSBwb2ludHNbaSArIDFdLnk7XHJcbiAgICAgICAgICAgIHZhciBib3R0b21MZWZ0WCA9IHBvaW50c1tpICsgbnVtUG9pbnRzWF0ueDtcclxuICAgICAgICAgICAgdmFyIGJvdHRvbUxlZnRZID0gcG9pbnRzW2kgKyBudW1Qb2ludHNYXS55O1xyXG4gICAgICAgICAgICB2YXIgYm90dG9tUmlnaHRYID0gcG9pbnRzW2kgKyBudW1Qb2ludHNYICsgMV0ueDtcclxuICAgICAgICAgICAgdmFyIGJvdHRvbVJpZ2h0WSA9IHBvaW50c1tpICsgbnVtUG9pbnRzWCArIDFdLnk7XHJcblxyXG4gICAgICAgICAgICB2YXIgcmFuZG8gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKTtcclxuXHJcbiAgICAgICAgICAgIGZvciAodmFyIG4gPSAwOyBuIDwgMjsgbisrKSB7XHJcbiAgICAgICAgICAgICAgdmFyIHBvbHlnb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoc3ZnLm5hbWVzcGFjZVVSSSwgJ3BvbHlnb24nKTtcclxuXHJcbiAgICAgICAgICAgICAgaWYgKHJhbmRvID09IDApIHtcclxuICAgICAgICAgICAgICAgIGlmIChuID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgcG9seWdvbi5wb2ludDEgPSBpO1xyXG4gICAgICAgICAgICAgICAgICBwb2x5Z29uLnBvaW50MiA9IGkgKyBudW1Qb2ludHNYO1xyXG4gICAgICAgICAgICAgICAgICBwb2x5Z29uLnBvaW50MyA9IGkgKyBudW1Qb2ludHNYICsgMTtcclxuICAgICAgICAgICAgICAgICAgcG9seWdvbi5zZXRBdHRyaWJ1dGUoJ3BvaW50cycsIHRvcExlZnRYICsgJywnICsgdG9wTGVmdFkgKyAnICcgKyBib3R0b21MZWZ0WCArICcsJyArIGJvdHRvbUxlZnRZICsgJyAnICsgYm90dG9tUmlnaHRYICsgJywnICsgYm90dG9tUmlnaHRZKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobiA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgIHBvbHlnb24ucG9pbnQxID0gaTtcclxuICAgICAgICAgICAgICAgICAgcG9seWdvbi5wb2ludDIgPSBpICsgMTtcclxuICAgICAgICAgICAgICAgICAgcG9seWdvbi5wb2ludDMgPSBpICsgbnVtUG9pbnRzWCArIDE7XHJcbiAgICAgICAgICAgICAgICAgIHBvbHlnb24uc2V0QXR0cmlidXRlKCdwb2ludHMnLCB0b3BMZWZ0WCArICcsJyArIHRvcExlZnRZICsgJyAnICsgdG9wUmlnaHRYICsgJywnICsgdG9wUmlnaHRZICsgJyAnICsgYm90dG9tUmlnaHRYICsgJywnICsgYm90dG9tUmlnaHRZKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJhbmRvID09IDEpIHtcclxuICAgICAgICAgICAgICAgIGlmIChuID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgcG9seWdvbi5wb2ludDEgPSBpO1xyXG4gICAgICAgICAgICAgICAgICBwb2x5Z29uLnBvaW50MiA9IGkgKyBudW1Qb2ludHNYO1xyXG4gICAgICAgICAgICAgICAgICBwb2x5Z29uLnBvaW50MyA9IGkgKyAxO1xyXG4gICAgICAgICAgICAgICAgICBwb2x5Z29uLnNldEF0dHJpYnV0ZSgncG9pbnRzJywgdG9wTGVmdFggKyAnLCcgKyB0b3BMZWZ0WSArICcgJyArIGJvdHRvbUxlZnRYICsgJywnICsgYm90dG9tTGVmdFkgKyAnICcgKyB0b3BSaWdodFggKyAnLCcgKyB0b3BSaWdodFkpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChuID09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgcG9seWdvbi5wb2ludDEgPSBpICsgbnVtUG9pbnRzWDtcclxuICAgICAgICAgICAgICAgICAgcG9seWdvbi5wb2ludDIgPSBpICsgMTtcclxuICAgICAgICAgICAgICAgICAgcG9seWdvbi5wb2ludDMgPSBpICsgbnVtUG9pbnRzWCArIDE7XHJcbiAgICAgICAgICAgICAgICAgIHBvbHlnb24uc2V0QXR0cmlidXRlKCdwb2ludHMnLCBib3R0b21MZWZ0WCArICcsJyArIGJvdHRvbUxlZnRZICsgJyAnICsgdG9wUmlnaHRYICsgJywnICsgdG9wUmlnaHRZICsgJyAnICsgYm90dG9tUmlnaHRYICsgJywnICsgYm90dG9tUmlnaHRZKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgdmFyIGggPSAyMDc7XHJcbiAgICAgICAgICAgICAgdmFyIHMgPSA0NTtcclxuICAgICAgICAgICAgICB2YXIgbCA9IDgwICsgKE1hdGgucmFuZG9tKCkgKiAxMik7XHJcbiAgICAgICAgICAgICAgcG9seWdvbi5zZXRBdHRyaWJ1dGUoJ2ZpbGwnLCAnaHNsKCcgKyBoICsgJywgJyArIHMgKyAnJSwgJyArIGwgKyAnJSknKTtcclxuICAgICAgICAgICAgICB2YXIgYW5pbWF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAnYW5pbWF0ZScpO1xyXG4gICAgICAgICAgICAgIGFuaW1hdGUuc2V0QXR0cmlidXRlKCdmaWxsJywgJ2ZyZWV6ZScpO1xyXG4gICAgICAgICAgICAgIGFuaW1hdGUuc2V0QXR0cmlidXRlKCdhdHRyaWJ1dGVOYW1lJywgJ3BvaW50cycpO1xyXG4gICAgICAgICAgICAgIGFuaW1hdGUuc2V0QXR0cmlidXRlKCdkdXInLCByZWZyZXNoRHVyYXRpb24gKyAnbXMnKTtcclxuICAgICAgICAgICAgICBhbmltYXRlLnNldEF0dHJpYnV0ZSgnY2FsY01vZGUnLCAnbGluZWFyJyk7XHJcbiAgICAgICAgICAgICAgcG9seWdvbi5hcHBlbmRDaGlsZChhbmltYXRlKTtcclxuICAgICAgICAgICAgICBzdmcuYXBwZW5kQ2hpbGQocG9seWdvbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJlZnJlc2goKTtcclxuXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGZ1bmN0aW9uIHJhbmRvbWl6ZSgpIHtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBvaW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgaWYgKHBvaW50c1tpXS5vcmlnaW5YICE9IDAgJiYgcG9pbnRzW2ldLm9yaWdpblggIT0gdW5pdFdpZHRoICogKG51bVBvaW50c1ggLSAxKSkge1xyXG4gICAgICAgICAgICBwb2ludHNbaV0ueCA9IHBvaW50c1tpXS5vcmlnaW5YICsgTWF0aC5yYW5kb20oKSAqIHVuaXRXaWR0aCAtIHVuaXRXaWR0aCAvIDI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAocG9pbnRzW2ldLm9yaWdpblkgIT0gMCAmJiBwb2ludHNbaV0ub3JpZ2luWSAhPSB1bml0SGVpZ2h0ICogKG51bVBvaW50c1kgLSAxKSkge1xyXG4gICAgICAgICAgICBwb2ludHNbaV0ueSA9IHBvaW50c1tpXS5vcmlnaW5ZICsgTWF0aC5yYW5kb20oKSAqIHVuaXRIZWlnaHQgLSB1bml0SGVpZ2h0IC8gMjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGZ1bmN0aW9uIHJlZnJlc2goKSB7XHJcbiAgICAgICAgcmFuZG9taXplKCk7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYmcgc3ZnJykuY2hpbGROb2Rlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgdmFyIHBvbHlnb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYmcgc3ZnJykuY2hpbGROb2Rlc1tpXTtcclxuICAgICAgICAgIHZhciBhbmltYXRlID0gcG9seWdvbi5jaGlsZE5vZGVzWzBdO1xyXG4gICAgICAgICAgaWYgKGFuaW1hdGUuZ2V0QXR0cmlidXRlKCd0bycpKSB7XHJcbiAgICAgICAgICAgIGFuaW1hdGUuc2V0QXR0cmlidXRlKCdmcm9tJywgYW5pbWF0ZS5nZXRBdHRyaWJ1dGUoJ3RvJykpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYW5pbWF0ZS5zZXRBdHRyaWJ1dGUoJ3RvJywgcG9pbnRzW3BvbHlnb24ucG9pbnQxXS54ICsgJywnICsgcG9pbnRzW3BvbHlnb24ucG9pbnQxXS55ICsgJyAnICsgcG9pbnRzW3BvbHlnb24ucG9pbnQyXS54ICsgJywnICsgcG9pbnRzW3BvbHlnb24ucG9pbnQyXS55ICsgJyAnICsgcG9pbnRzW3BvbHlnb24ucG9pbnQzXS54ICsgJywnICsgcG9pbnRzW3BvbHlnb24ucG9pbnQzXS55KTtcclxuICAgICAgICAgIGFuaW1hdGUuYmVnaW5FbGVtZW50KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJlZnJlc2hUaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICByZWZyZXNoKCk7XHJcbiAgICAgICAgfSwgcmVmcmVzaER1cmF0aW9uKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgZnVuY3Rpb24gb25SZXNpemUoKSB7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2JnIHN2ZycpLnJlbW92ZSgpO1xyXG4gICAgICAgIGNsZWFyVGltZW91dChyZWZyZXNoVGltZW91dCk7XHJcbiAgICAgICAgb25Mb2FkKCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHdpbmRvdy5vbmxvYWQgPSBvbkxvYWQ7XHJcbiAgICAgIHdpbmRvdy5vbnJlc2l6ZSA9IG9uUmVzaXplO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn0pKCk7XHJcbid1c2Ugc3RyaWN0JztcclxuXHJcbihmdW5jdGlvbiAoKSB7XHJcblxyXG4gIHZhciBwb3J0Zm9saW9QYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcnRmb2xpby1wYWdlX19jb21wYW55Jyk7XHJcblxyXG4gIGlmIChwb3J0Zm9saW9QYWdlKSB7XHJcbiAgICB2YXIgcG9ydGZvbGlvQm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcnRmb2xpby1wYWdlX19ib3gnKTtcclxuICAgIHZhciBwb3J0Zm9saW9XcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcnRmb2xpby1wYWdlX193cmFwcGVyJyk7XHJcblxyXG4gICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID4gMTAyMykge1xyXG5cclxuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xyXG5cclxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3doZWVsJywgZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPiAxMjAwKSB7XHJcbiAgICAgICAgICBwb3J0Zm9saW9Cb3guc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZSgtMTAlLCAxMCUpJztcclxuICAgICAgICB9IGVsc2UgaWYgKHdpbmRvdy5pbm5lcldpZHRoID4gMTAyMykge1xyXG4gICAgICAgICAgcG9ydGZvbGlvQm94LnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGUoMCUsIDEwJSknO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBwb3J0Zm9saW9Cb3guc3R5bGUudHJhbnNmb3JtID0gJyc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwb3J0Zm9saW9XcmFwcGVyLmNsYXNzTGlzdC5hZGQoJ3BvcnRmb2xpby1wYWdlX193cmFwcGVyLS1hY3RpdmUnKTtcclxuICAgICAgICBwb3J0Zm9saW9QYWdlLmNsYXNzTGlzdC5hZGQoJ3BvcnRmb2xpby1wYWdlX19jb21wYW55LS1hY3RpdmUnKTtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gc2hvdygpIHtcclxuICAgICAgICAgIHBvcnRmb2xpb0JveC5jbGFzc0xpc3QuYWRkKCdwb3J0Zm9saW8tcGFnZV9fYm94LS1hY3RpdmUnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldFRpbWVvdXQoc2hvdywgNDAwKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBwb3J0Zm9saW9QYWdlLmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAocG9ydGZvbGlvUGFnZS5zY3JvbGxUb3AgPT09IDApIHtcclxuXHJcbiAgICAgICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPiAxMjAwKSB7XHJcbiAgICAgICAgICAgIHBvcnRmb2xpb0JveC5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlKDE4MCUsIC0xNTAlKSc7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKHdpbmRvdy5pbm5lcldpZHRoID4gMTAyMykge1xyXG4gICAgICAgICAgICBwb3J0Zm9saW9Cb3guc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZSgxNTMlLCAtMTMwJSknO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcG9ydGZvbGlvQm94LnN0eWxlLnRyYW5zZm9ybSA9ICcnO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHBvcnRmb2xpb1dyYXBwZXIuY2xhc3NMaXN0LnJlbW92ZSgncG9ydGZvbGlvLXBhZ2VfX3dyYXBwZXItLWFjdGl2ZScpO1xyXG4gICAgICAgICAgcG9ydGZvbGlvUGFnZS5jbGFzc0xpc3QucmVtb3ZlKCdwb3J0Zm9saW8tcGFnZV9fY29tcGFueS0tYWN0aXZlJyk7XHJcblxyXG4gICAgICAgICAgZnVuY3Rpb24gbm9uZSgpIHtcclxuICAgICAgICAgICAgcG9ydGZvbGlvQm94LmNsYXNzTGlzdC5yZW1vdmUoJ3BvcnRmb2xpby1wYWdlX19ib3gtLWFjdGl2ZScpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHNldFRpbWVvdXQobm9uZSwgNTAwKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG59KSgpOyJdLCJmaWxlIjoibWFpbi5qcyJ9
