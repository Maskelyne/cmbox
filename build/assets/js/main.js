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
      loop: true,
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
          slidesPerView: 2,
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

    var cards = document.querySelectorAll('.portfolio__box-card');

    function rotate(evt) {
      var cardItem = this.querySelector('.portfolio__card-perspective');
      var halfHeight = cardItem.offsetHeight / 2;
      var halfWidth = cardItem.offsetWidth / 2;

      cardItem.style.transform = 'rotateX(' + -(evt.offsetY - halfHeight) / 12 + 'deg)' +
        'rotateY(' + (evt.offsetX - halfWidth) / 12 + 'deg';
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
  }

})();
'use strict';

(function () {

  var blogsContainer = document.querySelector('.blog');

  if (blogsContainer) {

    var blogCards = document.querySelectorAll('.blog__card-box');

    function rotate(evt) {
      var blogItem = this.querySelector('.blog__card-text');
      var setHeight = blogItem.offsetHeight / 2;
      var setWidth = blogItem.offsetWidth / 2;

      blogItem.style.transform = 'rotateX(' + -(evt.offsetY - setHeight) / 15 + 'deg)' +
        'rotateY(' + (evt.offsetX - setWidth) / 15 + 'deg';
    }

    function rotateNone() {
      var cardItem = this.querySelector('.blog__card-text');

      cardItem.style.transform = 'rotateX(0deg)' + 'rotateY(0deg)';
    }

    for (var i = 0; i < blogCards.length; i++) {
      var item = blogCards[i];
      item.addEventListener('mousemove', rotate);
      item.addEventListener('mouseout', rotateNone);
    }
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
      speed: 1000,
      autoplay: {
        delay: 5000,
      },
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
    var main = document.querySelector('.box-closed');
    var text = document.querySelector('.text-closed');

    if (window.innerWidth > 1023) {

      document.body.style.overflow = 'hidden';

      window.addEventListener('wheel', function (evt) {

        if (evt.deltaY > 0 && window.innerWidth > 1200) {
          portfolioWrapper.classList.add('portfolio-page__wrapper--active');
          portfolioPage.classList.add('portfolio-page__company--active');
          portfolioBox.style.transform = 'translate(-10%, 10%)';
          setTimeout(show, 400);
        } else if (evt.deltaY > 0 && window.innerWidth > 1023) {
          portfolioWrapper.classList.add('portfolio-page__wrapper--active');
          portfolioPage.classList.add('portfolio-page__company--active');
          portfolioBox.style.transform = 'translate(0%, 10%)';
          setTimeout(show, 400);
        } else if (portfolioPage.scrollTop === 0) {
          portfolioWrapper.classList.remove('portfolio-page__wrapper--active');
          portfolioPage.classList.remove('portfolio-page__company--active');
          portfolioBox.style.transform = '';
          setTimeout(none, 500);
        }

        function none() {
          portfolioBox.classList.remove('portfolio-page__box--active');
        }

        function show() {
          portfolioBox.classList.add('portfolio-page__box--active');
        }

      });

      main.addEventListener('click', function (evt) {

        if (evt.target === main) {

          portfolioWrapper.classList.remove('portfolio-page__wrapper--active');
          portfolioPage.classList.remove('portfolio-page__company--active');
          portfolioBox.classList.remove('portfolio-page__box--active');
          portfolioBox.style.transform = '';

        }

      });

      text.addEventListener('click', function (evt) {

        if (evt.target === text) {

          portfolioWrapper.classList.remove('portfolio-page__wrapper--active');
          portfolioPage.classList.remove('portfolio-page__company--active');
          portfolioBox.classList.remove('portfolio-page__box--active');
          portfolioBox.style.transform = '';

        }

      });
    }
  }

})();
'use strict';

(function () {

  const KEY_CODE = 27;

  var overlayModal = document.querySelector('.modal');
  var modalConsultation = document.querySelector('.modal-consultation');
  var modalThanks = document.querySelector('.modal-thanks');
  var modalConsultationBtn = document.querySelector('.button--consultation');
  var modalClose = document.querySelectorAll('.modal__btn-closed');

  if (modalConsultationBtn) {

    modalConsultationBtn.addEventListener('click', function (evt) {
      evt.preventDefault();

      modalConsultation.classList.add('modal-active');
      document.body.style.overflow = 'hidden';
    });

    for (var i = 0; i < modalClose.length; i++) {
      modalClose[i].addEventListener('click', function (evt) {
        evt.preventDefault();

        modalThanks.classList.remove('modal-active');
        modalConsultation.classList.remove('modal-active');
        document.body.style.overflow = '';
      });
    }

    window.addEventListener(`keydown`, function (evt) {

      if (evt.keyCode === KEY_CODE) {
        evt.preventDefault();

        modalConsultation.classList.contains(`modal-active`);
        modalConsultation.classList.remove(`modal-active`);
        modalThanks.classList.contains('modal-active');
        modalThanks.classList.remove('modal-active');
        document.body.style.overflow = ``;

      }

    });

    overlayModal.addEventListener(`click`, function (evt) {

      if (evt.target === overlayModal) {

        modalConsultation.classList.remove(`modal-active`);
        modalConsultation.classList.add(`modal-closed`);
        document.body.style.overflow = ``;

      }

    });

    modalThanks.addEventListener('click', function (evt) {

      if (evt.target === modalThanks) {
        modalThanks.classList.contains('modal-active');
        modalThanks.classList.remove('modal-active');
        document.body.style.overflow = ``;
      }

    })

  }

})();
'use strict';

(function () {

  const KEY_CODE = 27;

  var overlayModal = document.querySelector('.modal');
  var portfolioCard = document.querySelectorAll('.modals-development');
  var modalDevelopment = document.querySelector('.modal-development');
  var modalClose = document.querySelectorAll('.modal__btn-closed');

  if (modalDevelopment) {

    for (var i = 0; i < modalClose.length; i++) {
      modalClose[i].addEventListener('click', function (evt) {
        evt.preventDefault();

        modalDevelopment.classList.remove('modal-active');
        document.body.style.overflow = '';
      });
    }

    for (var i = 0; i < portfolioCard.length; i++) {
      portfolioCard[i].addEventListener('click', function (evt) {
        evt.preventDefault();

        modalDevelopment.classList.add('modal-active');
        document.body.style.overflow = 'hidden';

      });
    }

    window.addEventListener(`keydown`, function (evt) {

      if (evt.keyCode === KEY_CODE) {
        evt.preventDefault();

        modalDevelopment.classList.contains('modal-active');
        modalDevelopment.classList.remove('modal-active');
        document.body.style.overflow = ``;

      }

    });

    overlayModal.addEventListener(`click`, function (evt) {

      if (evt.target === overlayModal) {

        modalDevelopment.classList.add(`modal-closed`);
        document.body.style.overflow = ``;

      }

    });

    modalDevelopment.addEventListener('click', function (evt) {

      if (evt.target === modalDevelopment) {
        modalDevelopment.classList.contains('modal-active');
        modalDevelopment.classList.remove('modal-active');
        document.body.style.overflow = ``;
      }

    })

  }

})();
'use strict';

(function () {

  const KEY_CODE = 27;

  var overlayModal = document.querySelector('.modal');
  var modalThanks = document.querySelector('.modal-thanks');
  var modalClose = document.querySelectorAll('.modal__btn-closed');

  if (modalThanks) {

    for (var i = 0; i < modalClose.length; i++) {
      modalClose[i].addEventListener('click', function (evt) {
        evt.preventDefault();

        modalThanks.classList.remove('modal-active');
        document.body.style.overflow = '';
      });
    }

    window.addEventListener(`keydown`, function (evt) {

      if (evt.keyCode === KEY_CODE) {
        evt.preventDefault();

        modalThanks.classList.contains('modal-active');
        modalThanks.classList.remove('modal-active');
        document.body.style.overflow = ``;

      }

    });

    overlayModal.addEventListener(`click`, function (evt) {

      if (evt.target === overlayModal) {

        document.body.style.overflow = ``;

      }

    });

    modalThanks.addEventListener('click', function (evt) {

      if (evt.target === modalThanks) {
        modalThanks.classList.contains('modal-active');
        modalThanks.classList.remove('modal-active');
        document.body.style.overflow = ``;
      }

    })

  }

})();
'use strict';

(function () {

  $(document).on('af_complete', function(event, response) {

    var modalConsultation = document.querySelector('.modal-consultation');
    var modalThanks = document.querySelector('.modal-thanks');
    var form = response.form;

    if (form.attr('id') === 'form') {

      modalThanks.classList.add('modal-active');
      modalConsultation.classList.remove('modal-active');
      document.body.style.overflow = '';
      response.message = '';

    } else if (form.attr('id') === 'form_main') {
      modalThanks.classList.add('modal-active');
      modalConsultation.classList.remove('modal-active');
      document.body.style.overflow = '';
      response.message = '';
    }

    else {
      console.log(response);
    }

  });

})();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qXHJcblxyXG4gICog0L/QvtC00LrQu9GO0YfQtdC90LjQtSBqcy3QvNC+0LTRg9C70LXQuVxyXG4gICogLy89IG1vZHVsZXMvZmlsZS5qc1xyXG5cclxuKi9cclxuXHJcbid1c2Ugc3RyaWN0JztcclxuXHJcbihmdW5jdGlvbiAoKSB7XHJcbiAgdmFyIG1lbnVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1oZWFkZXJfX2J0bicpO1xyXG4gIHZhciB3cmFwTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi1oZWFkZXJfX3dyYXAtbWVudVwiKTtcclxuICB2YXIgc3RhZ2VNZW51QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4taGVhZGVyX19saW5rLXN0YWdlJyk7XHJcbiAgdmFyIHN0YWdlTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWhlYWRlcl9fc3RhZ2UtbmF2Jyk7XHJcbiAgdmFyIHNlcnZpY2VzTWVudUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWhlYWRlcl9fbGluay1zZXJ2aWNlcycpO1xyXG4gIHZhciBzZXJ2aWNlc01lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1oZWFkZXJfX3NlcnZpY2VzLW5hdicpO1xyXG5cclxuICBpZiAobWVudUJ0bikge1xyXG5cclxuICAgIG1lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZ0KSB7XHJcbiAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgaWYgKG1lbnVCdG4uY2xhc3NMaXN0LmNvbnRhaW5zKCdtYWluLWhlYWRlcl9fYnRuLS1jbG9zZWQnKSkge1xyXG4gICAgICAgIG1lbnVCdG4uY2xhc3NMaXN0LnJlbW92ZSgnbWFpbi1oZWFkZXJfX2J0bi0tY2xvc2VkJyk7XHJcbiAgICAgICAgbWVudUJ0bi5jbGFzc0xpc3QuYWRkKCdtYWluLWhlYWRlcl9fYnRuLS1vcGVuZWQnKTtcclxuICAgICAgICB3cmFwTWVudS5jbGFzc0xpc3QuYWRkKCdtYWluLWhlYWRlcl9fd3JhcC1tZW51LS1hY3RpdmUnKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbWVudUJ0bi5jbGFzc0xpc3QuYWRkKCdtYWluLWhlYWRlcl9fYnRuLS1jbG9zZWQnKTtcclxuICAgICAgICBtZW51QnRuLmNsYXNzTGlzdC5yZW1vdmUoJ21haW4taGVhZGVyX19idG4tLW9wZW5lZCcpO1xyXG4gICAgICAgIHdyYXBNZW51LmNsYXNzTGlzdC5yZW1vdmUoJ21haW4taGVhZGVyX193cmFwLW1lbnUtLWFjdGl2ZScpO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnJztcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgc3RhZ2VNZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2dCkge1xyXG4gICAgICBldnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgIGlmIChzdGFnZU1lbnUuY2xhc3NMaXN0LmNvbnRhaW5zKCdtYWluLWhlYWRlcl9fc3RhZ2UtbmF2LS1jbG9zZWQnKSkge1xyXG4gICAgICAgIHN0YWdlTWVudS5jbGFzc0xpc3QucmVtb3ZlKCdtYWluLWhlYWRlcl9fc3RhZ2UtbmF2LS1jbG9zZWQnKTtcclxuICAgICAgICBzdGFnZU1lbnUuY2xhc3NMaXN0LmFkZCgnbWFpbi1oZWFkZXJfX3N0YWdlLW5hdi0tb3BlbmVkJyk7XHJcbiAgICAgICAgc3RhZ2VNZW51QnRuLmNsYXNzTGlzdC5yZW1vdmUoJ21haW4taGVhZGVyX19saW5rLXN0YWdlLS1jbG9zZWQnKTtcclxuICAgICAgICBzdGFnZU1lbnVCdG4uY2xhc3NMaXN0LmFkZCgnbWFpbi1oZWFkZXJfX2xpbmstc3RhZ2UtLW9wZW5lZCcpO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzdGFnZU1lbnUuY2xhc3NMaXN0LmFkZCgnbWFpbi1oZWFkZXJfX3N0YWdlLW5hdi0tY2xvc2VkJyk7XHJcbiAgICAgICAgc3RhZ2VNZW51LmNsYXNzTGlzdC5yZW1vdmUoJ21haW4taGVhZGVyX19zdGFnZS1uYXYtLW9wZW5lZCcpO1xyXG4gICAgICAgIHN0YWdlTWVudUJ0bi5jbGFzc0xpc3QuYWRkKCdtYWluLWhlYWRlcl9fbGluay1zdGFnZS0tY2xvc2VkJyk7XHJcbiAgICAgICAgc3RhZ2VNZW51QnRuLmNsYXNzTGlzdC5yZW1vdmUoJ21haW4taGVhZGVyX19saW5rLXN0YWdlLS1vcGVuZWQnKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJyc7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHNlcnZpY2VzTWVudUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldnQpIHtcclxuICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICBpZiAoc2VydmljZXNNZW51LmNsYXNzTGlzdC5jb250YWlucygnbWFpbi1oZWFkZXJfX3NlcnZpY2VzLW5hdi0tY2xvc2VkJykpIHtcclxuICAgICAgICBzZXJ2aWNlc01lbnUuY2xhc3NMaXN0LnJlbW92ZSgnbWFpbi1oZWFkZXJfX3NlcnZpY2VzLW5hdi0tY2xvc2VkJyk7XHJcbiAgICAgICAgc2VydmljZXNNZW51LmNsYXNzTGlzdC5hZGQoJ21haW4taGVhZGVyX19zZXJ2aWNlcy1uYXYtLW9wZW5lZCcpO1xyXG4gICAgICAgIHNlcnZpY2VzTWVudUJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdtYWluLWhlYWRlcl9fbGluay1zZXJ2aWNlcy0tY2xvc2VkJyk7XHJcbiAgICAgICAgc2VydmljZXNNZW51QnRuLmNsYXNzTGlzdC5hZGQoJ21haW4taGVhZGVyX19saW5rLXNlcnZpY2VzLS1vcGVuZWQnKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2VydmljZXNNZW51LmNsYXNzTGlzdC5hZGQoJ21haW4taGVhZGVyX19zZXJ2aWNlcy1uYXYtLWNsb3NlZCcpO1xyXG4gICAgICAgIHNlcnZpY2VzTWVudS5jbGFzc0xpc3QucmVtb3ZlKCdtYWluLWhlYWRlcl9fc2VydmljZXMtbmF2LS1vcGVuZWQnKTtcclxuICAgICAgICBzZXJ2aWNlc01lbnVCdG4uY2xhc3NMaXN0LmFkZCgnbWFpbi1oZWFkZXJfX2xpbmstc2VydmljZXMtLWNsb3NlZCcpO1xyXG4gICAgICAgIHNlcnZpY2VzTWVudUJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdtYWluLWhlYWRlcl9fbGluay1zZXJ2aWNlcy0tb3BlbmVkJyk7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICcnO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG59KSgpO1xyXG4ndXNlIHN0cmljdCc7XHJcblxyXG4oZnVuY3Rpb24gKCkge1xyXG5cclxuICBsZXQgY2xpZW50c1NsaWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbGllbnRzX19zd2lwZXItY29udGFpbmVyJyk7XHJcbiAgbGV0IHNlcnZpY2VzU2xpZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlcnZpY2VzX19zd2lwZXItY29udGFpbmVyJyk7XHJcblxyXG4gIGxldCBjbGllbnRzU2xpZGVyRGVzayA9IGZ1bmN0aW9uIChlbCkge1xyXG4gICAgcmV0dXJuIG5ldyBTd2lwZXIoZWwsIHtcclxuICAgICAgbG9vcDogdHJ1ZSxcclxuICAgICAgc3BlZWQ6IDEwMDAsXHJcbiAgICAgIGF1dG9wbGF5OiB7XHJcbiAgICAgICAgZGVsYXk6IDI1MDAsXHJcbiAgICAgIH0sXHJcbiAgICAgIG5hdmlnYXRpb246IHtcclxuICAgICAgICBuZXh0RWw6ICcuc3dpcGVyLWJ1dHRvbi1uZXh0JyxcclxuICAgICAgICBwcmV2RWw6ICcuc3dpcGVyLWJ1dHRvbi1wcmV2JyxcclxuICAgICAgfSxcclxuICAgICAgYnJlYWtwb2ludHM6IHtcclxuICAgICAgICAzMjA6IHtcclxuICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDEsXHJcbiAgICAgICAgfSxcclxuICAgICAgICA3Njg6IHtcclxuICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICA5NTA6IHtcclxuICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDMsXHJcbiAgICAgICAgfSxcclxuICAgICAgICAxMjAwOiB7XHJcbiAgICAgICAgICBzbGlkZXNQZXJWaWV3OiA0LFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgaWYgKGNsaWVudHNTbGlkZXIpIHtcclxuICAgIGNsaWVudHNTbGlkZXJEZXNrKGNsaWVudHNTbGlkZXIpO1xyXG4gIH1cclxuXHJcbiAgbGV0IHNlcnZpY2VzU2xpZGVyRGVzayA9IGZ1bmN0aW9uIChlbCkge1xyXG4gICAgcmV0dXJuIG5ldyBTd2lwZXIoZWwsIHtcclxuICAgICAgbG9vcDogdHJ1ZSxcclxuICAgICAgc3BlZWQ6IDEwMDAsXHJcbiAgICAgIG5hdmlnYXRpb246IHtcclxuICAgICAgICBuZXh0RWw6ICcuc3dpcGVyLWJ1dHRvbi1uZXh0JyxcclxuICAgICAgICBwcmV2RWw6ICcuc3dpcGVyLWJ1dHRvbi1wcmV2JyxcclxuICAgICAgfSxcclxuICAgICAgYnJlYWtwb2ludHM6IHtcclxuICAgICAgICAzMjA6IHtcclxuICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDEsXHJcbiAgICAgICAgfSxcclxuICAgICAgICA3Njg6IHtcclxuICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICAxMDI0OiB7XHJcbiAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAyLFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgaWYgKHNlcnZpY2VzU2xpZGVyKSB7XHJcbiAgICBzZXJ2aWNlc1NsaWRlckRlc2soc2VydmljZXNTbGlkZXIpO1xyXG4gIH1cclxuXHJcbn0pKCk7XHJcbid1c2Ugc3RyaWN0JztcclxuXHJcbiQoZnVuY3Rpb24gKCkge1xyXG5cclxuICBqUXVlcnkoZnVuY3Rpb24gKCQpIHtcclxuICAgICQoXCIjdXNlcl9waG9uZVwiKS5tYXNrKFwiKzM3NSAoOTkpIDk5OS05OS05OVwiKTtcclxuICB9KTtcclxuXHJcbiAgJChcIiN1c2VyX25hbWVcIikua2V5dXAoZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKCQodGhpcykudmFsKCkpIHtcclxuICAgICAgJCh0aGlzKS5hZGRDbGFzcyhcIm5vdC1lbXB0eVwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoXCJub3QtZW1wdHlcIik7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gICQoXCIjdXNlcl9jb21wYW55XCIpLmtleXVwKGZ1bmN0aW9uICgpIHtcclxuICAgIGlmICgkKHRoaXMpLnZhbCgpKSB7XHJcbiAgICAgICQodGhpcykuYWRkQ2xhc3MoXCJub3QtZW1wdHlcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKFwibm90LWVtcHR5XCIpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICAkKFwiI3VzZXJfcGhvbmVcIikua2V5dXAoZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKCQodGhpcykudmFsKCkpIHtcclxuICAgICAgJCh0aGlzKS5hZGRDbGFzcyhcIm5vdC1lbXB0eVwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoXCJub3QtZW1wdHlcIik7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gICQoXCIjdXNlcl9lbWFpbFwiKS5rZXl1cChmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAoJCh0aGlzKS52YWwoKSkge1xyXG4gICAgICAkKHRoaXMpLmFkZENsYXNzKFwibm90LWVtcHR5XCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcyhcIm5vdC1lbXB0eVwiKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgJChcIiN1c2VyX2NvbW1lbnRcIikua2V5dXAoZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKCQodGhpcykudmFsKCkpIHtcclxuICAgICAgJCh0aGlzKS5hZGRDbGFzcygnbm90LWVtcHR5Jyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdub3QtZW1wdHknKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgJChcIiN1c2VyX2NvbW1lbnRzXCIpLmtleXVwKGZ1bmN0aW9uICgpIHtcclxuICAgIGlmICgkKHRoaXMpLnZhbCgpKSB7XHJcbiAgICAgICQodGhpcykuYWRkQ2xhc3MoJ25vdC1lbXB0eScpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnbm90LWVtcHR5Jyk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn0pO1xyXG4ndXNlIHN0cmljdCc7XHJcblxyXG4oZnVuY3Rpb24gKCkge1xyXG5cclxuICB2YXIgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcnRmb2xpbycpO1xyXG5cclxuICBpZiAoY29udGFpbmVyKSB7XHJcblxyXG4gICAgdmFyIGNhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBvcnRmb2xpb19fYm94LWNhcmQnKTtcclxuXHJcbiAgICBmdW5jdGlvbiByb3RhdGUoZXZ0KSB7XHJcbiAgICAgIHZhciBjYXJkSXRlbSA9IHRoaXMucXVlcnlTZWxlY3RvcignLnBvcnRmb2xpb19fY2FyZC1wZXJzcGVjdGl2ZScpO1xyXG4gICAgICB2YXIgaGFsZkhlaWdodCA9IGNhcmRJdGVtLm9mZnNldEhlaWdodCAvIDI7XHJcbiAgICAgIHZhciBoYWxmV2lkdGggPSBjYXJkSXRlbS5vZmZzZXRXaWR0aCAvIDI7XHJcblxyXG4gICAgICBjYXJkSXRlbS5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlWCgnICsgLShldnQub2Zmc2V0WSAtIGhhbGZIZWlnaHQpIC8gMTIgKyAnZGVnKScgK1xyXG4gICAgICAgICdyb3RhdGVZKCcgKyAoZXZ0Lm9mZnNldFggLSBoYWxmV2lkdGgpIC8gMTIgKyAnZGVnJztcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByb3RhdGVOb25lKCkge1xyXG4gICAgICB2YXIgY2FyZEl0ZW0gPSB0aGlzLnF1ZXJ5U2VsZWN0b3IoJy5wb3J0Zm9saW9fX2NhcmQtcGVyc3BlY3RpdmUnKTtcclxuXHJcbiAgICAgIGNhcmRJdGVtLnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGVYKDBkZWcpJyArICdyb3RhdGVZKDBkZWcpJztcclxuICAgIH1cclxuXHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNhcmRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHZhciBjYXJkID0gY2FyZHNbaV07XHJcbiAgICAgIGNhcmQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgcm90YXRlKTtcclxuICAgICAgY2FyZC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIHJvdGF0ZU5vbmUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn0pKCk7XHJcbid1c2Ugc3RyaWN0JztcclxuXHJcbihmdW5jdGlvbiAoKSB7XHJcblxyXG4gIHZhciBibG9nc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ibG9nJyk7XHJcblxyXG4gIGlmIChibG9nc0NvbnRhaW5lcikge1xyXG5cclxuICAgIHZhciBibG9nQ2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYmxvZ19fY2FyZC1ib3gnKTtcclxuXHJcbiAgICBmdW5jdGlvbiByb3RhdGUoZXZ0KSB7XHJcbiAgICAgIHZhciBibG9nSXRlbSA9IHRoaXMucXVlcnlTZWxlY3RvcignLmJsb2dfX2NhcmQtdGV4dCcpO1xyXG4gICAgICB2YXIgc2V0SGVpZ2h0ID0gYmxvZ0l0ZW0ub2Zmc2V0SGVpZ2h0IC8gMjtcclxuICAgICAgdmFyIHNldFdpZHRoID0gYmxvZ0l0ZW0ub2Zmc2V0V2lkdGggLyAyO1xyXG5cclxuICAgICAgYmxvZ0l0ZW0uc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZVgoJyArIC0oZXZ0Lm9mZnNldFkgLSBzZXRIZWlnaHQpIC8gMTUgKyAnZGVnKScgK1xyXG4gICAgICAgICdyb3RhdGVZKCcgKyAoZXZ0Lm9mZnNldFggLSBzZXRXaWR0aCkgLyAxNSArICdkZWcnO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJvdGF0ZU5vbmUoKSB7XHJcbiAgICAgIHZhciBjYXJkSXRlbSA9IHRoaXMucXVlcnlTZWxlY3RvcignLmJsb2dfX2NhcmQtdGV4dCcpO1xyXG5cclxuICAgICAgY2FyZEl0ZW0uc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZVgoMGRlZyknICsgJ3JvdGF0ZVkoMGRlZyknO1xyXG4gICAgfVxyXG5cclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYmxvZ0NhcmRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHZhciBpdGVtID0gYmxvZ0NhcmRzW2ldO1xyXG4gICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHJvdGF0ZSk7XHJcbiAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCByb3RhdGVOb25lKTtcclxuICAgIH1cclxuICB9XHJcblxyXG59KSgpO1xyXG4ndXNlIHN0cmljdCc7XHJcblxyXG4oZnVuY3Rpb24gKCkge1xyXG5cclxuICBsZXQgYXJ0aWNsZUNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXJ0aWNsZV9fYm94LWFydGljbGUnKTtcclxuXHJcbiAgaWYgKGFydGljbGVDb250ZW50KSB7XHJcblxyXG4gICAgY29uc3QgREVTS1RPUF9XSURUSCA9IDEwMjM7XHJcbiAgICBsZXQgYXJ0aWNsZUNhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXJ0aWNsZV9fYm94LWFydGljbGVzJyk7XHJcblxyXG4gICAgbGV0IHNldEhlaWdodCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgbGV0IGlzRGVza3RvcCA9IHdpbmRvdy5pbm5lcldpZHRoID4gREVTS1RPUF9XSURUSDtcclxuXHJcbiAgICAgICAgaWYgKGlzRGVza3RvcCkge1xyXG4gICAgICAgICAgbGV0IGNvbnRlbnRIZWlnaHQgPSBhcnRpY2xlQ29udGVudC5vZmZzZXRIZWlnaHQ7XHJcbiAgICAgICAgICBhcnRpY2xlQ2FyZC5zdHlsZS5oZWlnaHQgPSBjb250ZW50SGVpZ2h0ICsgJ3B4JztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgYXJ0aWNsZUNhcmQuc3R5bGUuaGVpZ2h0ID0gJyc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc2V0SGVpZ2h0KCk7XHJcblxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHNldEhlaWdodCk7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgc2V0SGVpZ2h0KTtcclxuICB9XHJcblxyXG4gIGxldCBzZXJ2aWNlc0JveFdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VydmljZXMnKTtcclxuXHJcbiAgaWYgKHNlcnZpY2VzQm94V3JhcHBlcikge1xyXG5cclxuICAgIGNvbnN0IFRBQkxFVF9XSURUSCA9IDc2NztcclxuICAgIGxldCBzZXJ2aWNlc0JveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZXJ2aWNlc19fbmF2LWJveCcpO1xyXG5cclxuICAgIGxldCBzZXRIZWlnaHQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGxldCBpc1RhYmxldCA9IHdpbmRvdy5pbm5lcldpZHRoID4gVEFCTEVUX1dJRFRIO1xyXG5cclxuICAgICAgICBpZiAoaXNUYWJsZXQpIHtcclxuICAgICAgICAgIGxldCBjb250ZW50SGVpZ2h0ID0gc2VydmljZXNCb3hXcmFwcGVyLm9mZnNldEhlaWdodDtcclxuICAgICAgICAgIHNlcnZpY2VzQm94LnN0eWxlLmhlaWdodCA9IGNvbnRlbnRIZWlnaHQgKyAncHgnO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBzZXJ2aWNlc0JveC5zdHlsZS5oZWlnaHQgPSAnJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzZXRIZWlnaHQoKTtcclxuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgc2V0SGVpZ2h0KTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBzZXRIZWlnaHQpO1xyXG4gIH1cclxuXHJcbiAgbGV0IHN0YWdlV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGFnZXMnKTtcclxuXHJcbiAgaWYgKHN0YWdlV3JhcHBlcikge1xyXG5cclxuICAgIGNvbnN0IFRBQkxFVF9XSURUSCA9IDc2NztcclxuICAgIGxldCBzdGFnZUJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGFnZV9fbmF2LWJveCcpO1xyXG5cclxuICAgIGxldCBzZXRIZWlnaHQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGxldCBpc1RhYmxldCA9IHdpbmRvdy5pbm5lcldpZHRoID4gVEFCTEVUX1dJRFRIO1xyXG5cclxuICAgICAgICBpZiAoaXNUYWJsZXQpIHtcclxuICAgICAgICAgIGxldCBjb250ZW50SGVpZ2h0ID0gc3RhZ2VXcmFwcGVyLm9mZnNldEhlaWdodDtcclxuICAgICAgICAgIHN0YWdlQm94LnN0eWxlLmhlaWdodCA9IGNvbnRlbnRIZWlnaHQgKyAncHgnO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBzdGFnZUJveC5zdHlsZS5oZWlnaHQgPSAnJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzZXRIZWlnaHQoKTtcclxuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgc2V0SGVpZ2h0KTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBzZXRIZWlnaHQpO1xyXG4gIH1cclxuXHJcbn0pKCk7XHJcbid1c2Ugc3RyaWN0JztcclxuXHJcbihmdW5jdGlvbiAoKSB7XHJcblxyXG4gIHZhciBtYWluU2xpZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmludHJvX19ib3gtc3dpcGVyLWNvbnRhaW5lcicpO1xyXG5cclxuICB2YXIgY3JlYXRlU2xpZGVyID0gZnVuY3Rpb24gKGVsKSB7XHJcbiAgICByZXR1cm4gbmV3IFN3aXBlcihlbCwge1xyXG4gICAgICBkaXJlY3Rpb246ICd2ZXJ0aWNhbCcsXHJcbiAgICAgIHNsaWRlc1BlclZpZXc6IDEsXHJcbiAgICAgIHNwYWNlQmV0d2VlbjogMzAsXHJcbiAgICAgIGxvb3A6IHRydWUsXHJcbiAgICAgIHNwZWVkOiAxMDAwLFxyXG4gICAgICBhdXRvcGxheToge1xyXG4gICAgICAgIGRlbGF5OiA1MDAwLFxyXG4gICAgICB9LFxyXG4gICAgICBtb3VzZXdoZWVsOiB0cnVlLFxyXG4gICAgICBwYWdpbmF0aW9uOiB7XHJcbiAgICAgICAgZWw6ICcuc3dpcGVyLXBhZ2luYXRpb24nLFxyXG4gICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGlmIChtYWluU2xpZGVyKSB7XHJcbiAgICBjcmVhdGVTbGlkZXIobWFpblNsaWRlcik7XHJcbiAgfVxyXG5cclxufSkoKTtcclxuJ3VzZSBzdHJpY3QnO1xyXG5cclxuKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgdmFyIGJnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNiZ1wiKTtcclxuXHJcbiAgaWYgKGJnKSB7XHJcblxyXG4gICAgY29uc3QgTU9CSUxFX1dJRFRIID0gNzY3O1xyXG5cclxuICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+IE1PQklMRV9XSURUSCkge1xyXG5cclxuICAgICAgdmFyIHJlZnJlc2hEdXJhdGlvbiA9IDEwMDAwO1xyXG4gICAgICB2YXIgcmVmcmVzaFRpbWVvdXQ7XHJcbiAgICAgIHZhciBudW1Qb2ludHNYO1xyXG4gICAgICB2YXIgbnVtUG9pbnRzWTtcclxuICAgICAgdmFyIHVuaXRXaWR0aDtcclxuICAgICAgdmFyIHVuaXRIZWlnaHQ7XHJcbiAgICAgIHZhciBwb2ludHM7XHJcbiAgICAgIHZhciBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xyXG5cclxuICAgICAgZnVuY3Rpb24gb25Mb2FkKCkge1xyXG5cclxuICAgICAgICB2YXIgc2V0SGVpZ2h0ID0gbWFpbi5vZmZzZXRIZWlnaHQ7XHJcbiAgICAgICAgdmFyIHN2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAnc3ZnJyk7XHJcbiAgICAgICAgc3ZnLnNldEF0dHJpYnV0ZSgnd2lkdGgnLCB3aW5kb3cuaW5uZXJXaWR0aCk7XHJcbiAgICAgICAgc3ZnLnNldEF0dHJpYnV0ZSgnaGVpZ2h0Jywgc2V0SGVpZ2h0KTtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYmcnKS5hcHBlbmRDaGlsZChzdmcpO1xyXG5cclxuICAgICAgICB2YXIgdW5pdFNpemUgPSAod2luZG93LmlubmVyV2lkdGggKyBzZXRIZWlnaHQpIC8gNDA7XHJcbiAgICAgICAgbnVtUG9pbnRzWCA9IE1hdGguY2VpbCh3aW5kb3cuaW5uZXJXaWR0aCAvIHVuaXRTaXplKSArIDE7XHJcbiAgICAgICAgbnVtUG9pbnRzWSA9IE1hdGguY2VpbChzZXRIZWlnaHQgLyB1bml0U2l6ZSkgKyAxO1xyXG4gICAgICAgIHVuaXRXaWR0aCA9IE1hdGguY2VpbCh3aW5kb3cuaW5uZXJXaWR0aCAvIChudW1Qb2ludHNYIC0gMSkpO1xyXG4gICAgICAgIHVuaXRIZWlnaHQgPSBNYXRoLmNlaWwoc2V0SGVpZ2h0IC8gKG51bVBvaW50c1kgLSAxKSk7XHJcbiAgICAgICAgcG9pbnRzID0gW107XHJcblxyXG4gICAgICAgIGZvciAodmFyIHkgPSAwOyB5IDwgbnVtUG9pbnRzWTsgeSsrKSB7XHJcbiAgICAgICAgICBmb3IgKHZhciB4ID0gMDsgeCA8IG51bVBvaW50c1g7IHgrKykge1xyXG4gICAgICAgICAgICBwb2ludHMucHVzaCh7eDogdW5pdFdpZHRoICogeCwgeTogdW5pdEhlaWdodCAqIHksIG9yaWdpblg6IHVuaXRXaWR0aCAqIHgsIG9yaWdpblk6IHVuaXRIZWlnaHQgKiB5fSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByYW5kb21pemUoKTtcclxuXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwb2ludHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgIGlmIChwb2ludHNbaV0ub3JpZ2luWCAhPSB1bml0V2lkdGggKiAobnVtUG9pbnRzWCAtIDEpICYmIHBvaW50c1tpXS5vcmlnaW5ZICE9IHVuaXRIZWlnaHQgKiAobnVtUG9pbnRzWSAtIDEpKSB7XHJcbiAgICAgICAgICAgIHZhciB0b3BMZWZ0WCA9IHBvaW50c1tpXS54O1xyXG4gICAgICAgICAgICB2YXIgdG9wTGVmdFkgPSBwb2ludHNbaV0ueTtcclxuICAgICAgICAgICAgdmFyIHRvcFJpZ2h0WCA9IHBvaW50c1tpICsgMV0ueDtcclxuICAgICAgICAgICAgdmFyIHRvcFJpZ2h0WSA9IHBvaW50c1tpICsgMV0ueTtcclxuICAgICAgICAgICAgdmFyIGJvdHRvbUxlZnRYID0gcG9pbnRzW2kgKyBudW1Qb2ludHNYXS54O1xyXG4gICAgICAgICAgICB2YXIgYm90dG9tTGVmdFkgPSBwb2ludHNbaSArIG51bVBvaW50c1hdLnk7XHJcbiAgICAgICAgICAgIHZhciBib3R0b21SaWdodFggPSBwb2ludHNbaSArIG51bVBvaW50c1ggKyAxXS54O1xyXG4gICAgICAgICAgICB2YXIgYm90dG9tUmlnaHRZID0gcG9pbnRzW2kgKyBudW1Qb2ludHNYICsgMV0ueTtcclxuXHJcbiAgICAgICAgICAgIHZhciByYW5kbyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpO1xyXG5cclxuICAgICAgICAgICAgZm9yICh2YXIgbiA9IDA7IG4gPCAyOyBuKyspIHtcclxuICAgICAgICAgICAgICB2YXIgcG9seWdvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhzdmcubmFtZXNwYWNlVVJJLCAncG9seWdvbicpO1xyXG5cclxuICAgICAgICAgICAgICBpZiAocmFuZG8gPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKG4gPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICBwb2x5Z29uLnBvaW50MSA9IGk7XHJcbiAgICAgICAgICAgICAgICAgIHBvbHlnb24ucG9pbnQyID0gaSArIG51bVBvaW50c1g7XHJcbiAgICAgICAgICAgICAgICAgIHBvbHlnb24ucG9pbnQzID0gaSArIG51bVBvaW50c1ggKyAxO1xyXG4gICAgICAgICAgICAgICAgICBwb2x5Z29uLnNldEF0dHJpYnV0ZSgncG9pbnRzJywgdG9wTGVmdFggKyAnLCcgKyB0b3BMZWZ0WSArICcgJyArIGJvdHRvbUxlZnRYICsgJywnICsgYm90dG9tTGVmdFkgKyAnICcgKyBib3R0b21SaWdodFggKyAnLCcgKyBib3R0b21SaWdodFkpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChuID09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgcG9seWdvbi5wb2ludDEgPSBpO1xyXG4gICAgICAgICAgICAgICAgICBwb2x5Z29uLnBvaW50MiA9IGkgKyAxO1xyXG4gICAgICAgICAgICAgICAgICBwb2x5Z29uLnBvaW50MyA9IGkgKyBudW1Qb2ludHNYICsgMTtcclxuICAgICAgICAgICAgICAgICAgcG9seWdvbi5zZXRBdHRyaWJ1dGUoJ3BvaW50cycsIHRvcExlZnRYICsgJywnICsgdG9wTGVmdFkgKyAnICcgKyB0b3BSaWdodFggKyAnLCcgKyB0b3BSaWdodFkgKyAnICcgKyBib3R0b21SaWdodFggKyAnLCcgKyBib3R0b21SaWdodFkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAocmFuZG8gPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKG4gPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICBwb2x5Z29uLnBvaW50MSA9IGk7XHJcbiAgICAgICAgICAgICAgICAgIHBvbHlnb24ucG9pbnQyID0gaSArIG51bVBvaW50c1g7XHJcbiAgICAgICAgICAgICAgICAgIHBvbHlnb24ucG9pbnQzID0gaSArIDE7XHJcbiAgICAgICAgICAgICAgICAgIHBvbHlnb24uc2V0QXR0cmlidXRlKCdwb2ludHMnLCB0b3BMZWZ0WCArICcsJyArIHRvcExlZnRZICsgJyAnICsgYm90dG9tTGVmdFggKyAnLCcgKyBib3R0b21MZWZ0WSArICcgJyArIHRvcFJpZ2h0WCArICcsJyArIHRvcFJpZ2h0WSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG4gPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICBwb2x5Z29uLnBvaW50MSA9IGkgKyBudW1Qb2ludHNYO1xyXG4gICAgICAgICAgICAgICAgICBwb2x5Z29uLnBvaW50MiA9IGkgKyAxO1xyXG4gICAgICAgICAgICAgICAgICBwb2x5Z29uLnBvaW50MyA9IGkgKyBudW1Qb2ludHNYICsgMTtcclxuICAgICAgICAgICAgICAgICAgcG9seWdvbi5zZXRBdHRyaWJ1dGUoJ3BvaW50cycsIGJvdHRvbUxlZnRYICsgJywnICsgYm90dG9tTGVmdFkgKyAnICcgKyB0b3BSaWdodFggKyAnLCcgKyB0b3BSaWdodFkgKyAnICcgKyBib3R0b21SaWdodFggKyAnLCcgKyBib3R0b21SaWdodFkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB2YXIgaCA9IDIwNztcclxuICAgICAgICAgICAgICB2YXIgcyA9IDQ1O1xyXG4gICAgICAgICAgICAgIHZhciBsID0gODAgKyAoTWF0aC5yYW5kb20oKSAqIDEyKTtcclxuICAgICAgICAgICAgICBwb2x5Z29uLnNldEF0dHJpYnV0ZSgnZmlsbCcsICdoc2woJyArIGggKyAnLCAnICsgcyArICclLCAnICsgbCArICclKScpO1xyXG4gICAgICAgICAgICAgIHZhciBhbmltYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdhbmltYXRlJyk7XHJcbiAgICAgICAgICAgICAgYW5pbWF0ZS5zZXRBdHRyaWJ1dGUoJ2ZpbGwnLCAnZnJlZXplJyk7XHJcbiAgICAgICAgICAgICAgYW5pbWF0ZS5zZXRBdHRyaWJ1dGUoJ2F0dHJpYnV0ZU5hbWUnLCAncG9pbnRzJyk7XHJcbiAgICAgICAgICAgICAgYW5pbWF0ZS5zZXRBdHRyaWJ1dGUoJ2R1cicsIHJlZnJlc2hEdXJhdGlvbiArICdtcycpO1xyXG4gICAgICAgICAgICAgIGFuaW1hdGUuc2V0QXR0cmlidXRlKCdjYWxjTW9kZScsICdsaW5lYXInKTtcclxuICAgICAgICAgICAgICBwb2x5Z29uLmFwcGVuZENoaWxkKGFuaW1hdGUpO1xyXG4gICAgICAgICAgICAgIHN2Zy5hcHBlbmRDaGlsZChwb2x5Z29uKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmVmcmVzaCgpO1xyXG5cclxuICAgICAgfVxyXG5cclxuICAgICAgZnVuY3Rpb24gcmFuZG9taXplKCkge1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcG9pbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICBpZiAocG9pbnRzW2ldLm9yaWdpblggIT0gMCAmJiBwb2ludHNbaV0ub3JpZ2luWCAhPSB1bml0V2lkdGggKiAobnVtUG9pbnRzWCAtIDEpKSB7XHJcbiAgICAgICAgICAgIHBvaW50c1tpXS54ID0gcG9pbnRzW2ldLm9yaWdpblggKyBNYXRoLnJhbmRvbSgpICogdW5pdFdpZHRoIC0gdW5pdFdpZHRoIC8gMjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmIChwb2ludHNbaV0ub3JpZ2luWSAhPSAwICYmIHBvaW50c1tpXS5vcmlnaW5ZICE9IHVuaXRIZWlnaHQgKiAobnVtUG9pbnRzWSAtIDEpKSB7XHJcbiAgICAgICAgICAgIHBvaW50c1tpXS55ID0gcG9pbnRzW2ldLm9yaWdpblkgKyBNYXRoLnJhbmRvbSgpICogdW5pdEhlaWdodCAtIHVuaXRIZWlnaHQgLyAyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgZnVuY3Rpb24gcmVmcmVzaCgpIHtcclxuICAgICAgICByYW5kb21pemUoKTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNiZyBzdmcnKS5jaGlsZE5vZGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICB2YXIgcG9seWdvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNiZyBzdmcnKS5jaGlsZE5vZGVzW2ldO1xyXG4gICAgICAgICAgdmFyIGFuaW1hdGUgPSBwb2x5Z29uLmNoaWxkTm9kZXNbMF07XHJcbiAgICAgICAgICBpZiAoYW5pbWF0ZS5nZXRBdHRyaWJ1dGUoJ3RvJykpIHtcclxuICAgICAgICAgICAgYW5pbWF0ZS5zZXRBdHRyaWJ1dGUoJ2Zyb20nLCBhbmltYXRlLmdldEF0dHJpYnV0ZSgndG8nKSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBhbmltYXRlLnNldEF0dHJpYnV0ZSgndG8nLCBwb2ludHNbcG9seWdvbi5wb2ludDFdLnggKyAnLCcgKyBwb2ludHNbcG9seWdvbi5wb2ludDFdLnkgKyAnICcgKyBwb2ludHNbcG9seWdvbi5wb2ludDJdLnggKyAnLCcgKyBwb2ludHNbcG9seWdvbi5wb2ludDJdLnkgKyAnICcgKyBwb2ludHNbcG9seWdvbi5wb2ludDNdLnggKyAnLCcgKyBwb2ludHNbcG9seWdvbi5wb2ludDNdLnkpO1xyXG4gICAgICAgICAgYW5pbWF0ZS5iZWdpbkVsZW1lbnQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmVmcmVzaFRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIHJlZnJlc2goKTtcclxuICAgICAgICB9LCByZWZyZXNoRHVyYXRpb24pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBmdW5jdGlvbiBvblJlc2l6ZSgpIHtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYmcgc3ZnJykucmVtb3ZlKCk7XHJcbiAgICAgICAgY2xlYXJUaW1lb3V0KHJlZnJlc2hUaW1lb3V0KTtcclxuICAgICAgICBvbkxvYWQoKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgd2luZG93Lm9ubG9hZCA9IG9uTG9hZDtcclxuICAgICAgd2luZG93Lm9ucmVzaXplID0gb25SZXNpemU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufSkoKTtcclxuJ3VzZSBzdHJpY3QnO1xyXG5cclxuKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgdmFyIHBvcnRmb2xpb1BhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9ydGZvbGlvLXBhZ2VfX2NvbXBhbnknKTtcclxuXHJcbiAgaWYgKHBvcnRmb2xpb1BhZ2UpIHtcclxuICAgIHZhciBwb3J0Zm9saW9Cb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9ydGZvbGlvLXBhZ2VfX2JveCcpO1xyXG4gICAgdmFyIHBvcnRmb2xpb1dyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9ydGZvbGlvLXBhZ2VfX3dyYXBwZXInKTtcclxuICAgIHZhciBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJveC1jbG9zZWQnKTtcclxuICAgIHZhciB0ZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRleHQtY2xvc2VkJyk7XHJcblxyXG4gICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID4gMTAyMykge1xyXG5cclxuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xyXG5cclxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3doZWVsJywgZnVuY3Rpb24gKGV2dCkge1xyXG5cclxuICAgICAgICBpZiAoZXZ0LmRlbHRhWSA+IDAgJiYgd2luZG93LmlubmVyV2lkdGggPiAxMjAwKSB7XHJcbiAgICAgICAgICBwb3J0Zm9saW9XcmFwcGVyLmNsYXNzTGlzdC5hZGQoJ3BvcnRmb2xpby1wYWdlX193cmFwcGVyLS1hY3RpdmUnKTtcclxuICAgICAgICAgIHBvcnRmb2xpb1BhZ2UuY2xhc3NMaXN0LmFkZCgncG9ydGZvbGlvLXBhZ2VfX2NvbXBhbnktLWFjdGl2ZScpO1xyXG4gICAgICAgICAgcG9ydGZvbGlvQm94LnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGUoLTEwJSwgMTAlKSc7XHJcbiAgICAgICAgICBzZXRUaW1lb3V0KHNob3csIDQwMCk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChldnQuZGVsdGFZID4gMCAmJiB3aW5kb3cuaW5uZXJXaWR0aCA+IDEwMjMpIHtcclxuICAgICAgICAgIHBvcnRmb2xpb1dyYXBwZXIuY2xhc3NMaXN0LmFkZCgncG9ydGZvbGlvLXBhZ2VfX3dyYXBwZXItLWFjdGl2ZScpO1xyXG4gICAgICAgICAgcG9ydGZvbGlvUGFnZS5jbGFzc0xpc3QuYWRkKCdwb3J0Zm9saW8tcGFnZV9fY29tcGFueS0tYWN0aXZlJyk7XHJcbiAgICAgICAgICBwb3J0Zm9saW9Cb3guc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZSgwJSwgMTAlKSc7XHJcbiAgICAgICAgICBzZXRUaW1lb3V0KHNob3csIDQwMCk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChwb3J0Zm9saW9QYWdlLnNjcm9sbFRvcCA9PT0gMCkge1xyXG4gICAgICAgICAgcG9ydGZvbGlvV3JhcHBlci5jbGFzc0xpc3QucmVtb3ZlKCdwb3J0Zm9saW8tcGFnZV9fd3JhcHBlci0tYWN0aXZlJyk7XHJcbiAgICAgICAgICBwb3J0Zm9saW9QYWdlLmNsYXNzTGlzdC5yZW1vdmUoJ3BvcnRmb2xpby1wYWdlX19jb21wYW55LS1hY3RpdmUnKTtcclxuICAgICAgICAgIHBvcnRmb2xpb0JveC5zdHlsZS50cmFuc2Zvcm0gPSAnJztcclxuICAgICAgICAgIHNldFRpbWVvdXQobm9uZSwgNTAwKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIG5vbmUoKSB7XHJcbiAgICAgICAgICBwb3J0Zm9saW9Cb3guY2xhc3NMaXN0LnJlbW92ZSgncG9ydGZvbGlvLXBhZ2VfX2JveC0tYWN0aXZlJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBzaG93KCkge1xyXG4gICAgICAgICAgcG9ydGZvbGlvQm94LmNsYXNzTGlzdC5hZGQoJ3BvcnRmb2xpby1wYWdlX19ib3gtLWFjdGl2ZScpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgbWFpbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldnQpIHtcclxuXHJcbiAgICAgICAgaWYgKGV2dC50YXJnZXQgPT09IG1haW4pIHtcclxuXHJcbiAgICAgICAgICBwb3J0Zm9saW9XcmFwcGVyLmNsYXNzTGlzdC5yZW1vdmUoJ3BvcnRmb2xpby1wYWdlX193cmFwcGVyLS1hY3RpdmUnKTtcclxuICAgICAgICAgIHBvcnRmb2xpb1BhZ2UuY2xhc3NMaXN0LnJlbW92ZSgncG9ydGZvbGlvLXBhZ2VfX2NvbXBhbnktLWFjdGl2ZScpO1xyXG4gICAgICAgICAgcG9ydGZvbGlvQm94LmNsYXNzTGlzdC5yZW1vdmUoJ3BvcnRmb2xpby1wYWdlX19ib3gtLWFjdGl2ZScpO1xyXG4gICAgICAgICAgcG9ydGZvbGlvQm94LnN0eWxlLnRyYW5zZm9ybSA9ICcnO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHRleHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZ0KSB7XHJcblxyXG4gICAgICAgIGlmIChldnQudGFyZ2V0ID09PSB0ZXh0KSB7XHJcblxyXG4gICAgICAgICAgcG9ydGZvbGlvV3JhcHBlci5jbGFzc0xpc3QucmVtb3ZlKCdwb3J0Zm9saW8tcGFnZV9fd3JhcHBlci0tYWN0aXZlJyk7XHJcbiAgICAgICAgICBwb3J0Zm9saW9QYWdlLmNsYXNzTGlzdC5yZW1vdmUoJ3BvcnRmb2xpby1wYWdlX19jb21wYW55LS1hY3RpdmUnKTtcclxuICAgICAgICAgIHBvcnRmb2xpb0JveC5jbGFzc0xpc3QucmVtb3ZlKCdwb3J0Zm9saW8tcGFnZV9fYm94LS1hY3RpdmUnKTtcclxuICAgICAgICAgIHBvcnRmb2xpb0JveC5zdHlsZS50cmFuc2Zvcm0gPSAnJztcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufSkoKTtcclxuJ3VzZSBzdHJpY3QnO1xyXG5cclxuKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgY29uc3QgS0VZX0NPREUgPSAyNztcclxuXHJcbiAgdmFyIG92ZXJsYXlNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpO1xyXG4gIHZhciBtb2RhbENvbnN1bHRhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1jb25zdWx0YXRpb24nKTtcclxuICB2YXIgbW9kYWxUaGFua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtdGhhbmtzJyk7XHJcbiAgdmFyIG1vZGFsQ29uc3VsdGF0aW9uQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1dHRvbi0tY29uc3VsdGF0aW9uJyk7XHJcbiAgdmFyIG1vZGFsQ2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubW9kYWxfX2J0bi1jbG9zZWQnKTtcclxuXHJcbiAgaWYgKG1vZGFsQ29uc3VsdGF0aW9uQnRuKSB7XHJcblxyXG4gICAgbW9kYWxDb25zdWx0YXRpb25CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZ0KSB7XHJcbiAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgbW9kYWxDb25zdWx0YXRpb24uY2xhc3NMaXN0LmFkZCgnbW9kYWwtYWN0aXZlJyk7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcclxuICAgIH0pO1xyXG5cclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbW9kYWxDbG9zZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICBtb2RhbENsb3NlW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2dCkge1xyXG4gICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICBtb2RhbFRoYW5rcy5jbGFzc0xpc3QucmVtb3ZlKCdtb2RhbC1hY3RpdmUnKTtcclxuICAgICAgICBtb2RhbENvbnN1bHRhdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCdtb2RhbC1hY3RpdmUnKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJyc7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKGBrZXlkb3duYCwgZnVuY3Rpb24gKGV2dCkge1xyXG5cclxuICAgICAgaWYgKGV2dC5rZXlDb2RlID09PSBLRVlfQ09ERSkge1xyXG4gICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICBtb2RhbENvbnN1bHRhdGlvbi5jbGFzc0xpc3QuY29udGFpbnMoYG1vZGFsLWFjdGl2ZWApO1xyXG4gICAgICAgIG1vZGFsQ29uc3VsdGF0aW9uLmNsYXNzTGlzdC5yZW1vdmUoYG1vZGFsLWFjdGl2ZWApO1xyXG4gICAgICAgIG1vZGFsVGhhbmtzLmNsYXNzTGlzdC5jb250YWlucygnbW9kYWwtYWN0aXZlJyk7XHJcbiAgICAgICAgbW9kYWxUaGFua3MuY2xhc3NMaXN0LnJlbW92ZSgnbW9kYWwtYWN0aXZlJyk7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IGBgO1xyXG5cclxuICAgICAgfVxyXG5cclxuICAgIH0pO1xyXG5cclxuICAgIG92ZXJsYXlNb2RhbC5hZGRFdmVudExpc3RlbmVyKGBjbGlja2AsIGZ1bmN0aW9uIChldnQpIHtcclxuXHJcbiAgICAgIGlmIChldnQudGFyZ2V0ID09PSBvdmVybGF5TW9kYWwpIHtcclxuXHJcbiAgICAgICAgbW9kYWxDb25zdWx0YXRpb24uY2xhc3NMaXN0LnJlbW92ZShgbW9kYWwtYWN0aXZlYCk7XHJcbiAgICAgICAgbW9kYWxDb25zdWx0YXRpb24uY2xhc3NMaXN0LmFkZChgbW9kYWwtY2xvc2VkYCk7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IGBgO1xyXG5cclxuICAgICAgfVxyXG5cclxuICAgIH0pO1xyXG5cclxuICAgIG1vZGFsVGhhbmtzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2dCkge1xyXG5cclxuICAgICAgaWYgKGV2dC50YXJnZXQgPT09IG1vZGFsVGhhbmtzKSB7XHJcbiAgICAgICAgbW9kYWxUaGFua3MuY2xhc3NMaXN0LmNvbnRhaW5zKCdtb2RhbC1hY3RpdmUnKTtcclxuICAgICAgICBtb2RhbFRoYW5rcy5jbGFzc0xpc3QucmVtb3ZlKCdtb2RhbC1hY3RpdmUnKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gYGA7XHJcbiAgICAgIH1cclxuXHJcbiAgICB9KVxyXG5cclxuICB9XHJcblxyXG59KSgpO1xyXG4ndXNlIHN0cmljdCc7XHJcblxyXG4oZnVuY3Rpb24gKCkge1xyXG5cclxuICBjb25zdCBLRVlfQ09ERSA9IDI3O1xyXG5cclxuICB2YXIgb3ZlcmxheU1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsJyk7XHJcbiAgdmFyIHBvcnRmb2xpb0NhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubW9kYWxzLWRldmVsb3BtZW50Jyk7XHJcbiAgdmFyIG1vZGFsRGV2ZWxvcG1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtZGV2ZWxvcG1lbnQnKTtcclxuICB2YXIgbW9kYWxDbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tb2RhbF9fYnRuLWNsb3NlZCcpO1xyXG5cclxuICBpZiAobW9kYWxEZXZlbG9wbWVudCkge1xyXG5cclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbW9kYWxDbG9zZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICBtb2RhbENsb3NlW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2dCkge1xyXG4gICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICBtb2RhbERldmVsb3BtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ21vZGFsLWFjdGl2ZScpO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnJztcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwb3J0Zm9saW9DYXJkLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHBvcnRmb2xpb0NhcmRbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZ0KSB7XHJcbiAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIG1vZGFsRGV2ZWxvcG1lbnQuY2xhc3NMaXN0LmFkZCgnbW9kYWwtYWN0aXZlJyk7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xyXG5cclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoYGtleWRvd25gLCBmdW5jdGlvbiAoZXZ0KSB7XHJcblxyXG4gICAgICBpZiAoZXZ0LmtleUNvZGUgPT09IEtFWV9DT0RFKSB7XHJcbiAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIG1vZGFsRGV2ZWxvcG1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdtb2RhbC1hY3RpdmUnKTtcclxuICAgICAgICBtb2RhbERldmVsb3BtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ21vZGFsLWFjdGl2ZScpO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBgYDtcclxuXHJcbiAgICAgIH1cclxuXHJcbiAgICB9KTtcclxuXHJcbiAgICBvdmVybGF5TW9kYWwuYWRkRXZlbnRMaXN0ZW5lcihgY2xpY2tgLCBmdW5jdGlvbiAoZXZ0KSB7XHJcblxyXG4gICAgICBpZiAoZXZ0LnRhcmdldCA9PT0gb3ZlcmxheU1vZGFsKSB7XHJcblxyXG4gICAgICAgIG1vZGFsRGV2ZWxvcG1lbnQuY2xhc3NMaXN0LmFkZChgbW9kYWwtY2xvc2VkYCk7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IGBgO1xyXG5cclxuICAgICAgfVxyXG5cclxuICAgIH0pO1xyXG5cclxuICAgIG1vZGFsRGV2ZWxvcG1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZ0KSB7XHJcblxyXG4gICAgICBpZiAoZXZ0LnRhcmdldCA9PT0gbW9kYWxEZXZlbG9wbWVudCkge1xyXG4gICAgICAgIG1vZGFsRGV2ZWxvcG1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdtb2RhbC1hY3RpdmUnKTtcclxuICAgICAgICBtb2RhbERldmVsb3BtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ21vZGFsLWFjdGl2ZScpO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBgYDtcclxuICAgICAgfVxyXG5cclxuICAgIH0pXHJcblxyXG4gIH1cclxuXHJcbn0pKCk7XHJcbid1c2Ugc3RyaWN0JztcclxuXHJcbihmdW5jdGlvbiAoKSB7XHJcblxyXG4gIGNvbnN0IEtFWV9DT0RFID0gMjc7XHJcblxyXG4gIHZhciBvdmVybGF5TW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKTtcclxuICB2YXIgbW9kYWxUaGFua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtdGhhbmtzJyk7XHJcbiAgdmFyIG1vZGFsQ2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubW9kYWxfX2J0bi1jbG9zZWQnKTtcclxuXHJcbiAgaWYgKG1vZGFsVGhhbmtzKSB7XHJcblxyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtb2RhbENsb3NlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIG1vZGFsQ2xvc2VbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZ0KSB7XHJcbiAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIG1vZGFsVGhhbmtzLmNsYXNzTGlzdC5yZW1vdmUoJ21vZGFsLWFjdGl2ZScpO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnJztcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoYGtleWRvd25gLCBmdW5jdGlvbiAoZXZ0KSB7XHJcblxyXG4gICAgICBpZiAoZXZ0LmtleUNvZGUgPT09IEtFWV9DT0RFKSB7XHJcbiAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIG1vZGFsVGhhbmtzLmNsYXNzTGlzdC5jb250YWlucygnbW9kYWwtYWN0aXZlJyk7XHJcbiAgICAgICAgbW9kYWxUaGFua3MuY2xhc3NMaXN0LnJlbW92ZSgnbW9kYWwtYWN0aXZlJyk7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IGBgO1xyXG5cclxuICAgICAgfVxyXG5cclxuICAgIH0pO1xyXG5cclxuICAgIG92ZXJsYXlNb2RhbC5hZGRFdmVudExpc3RlbmVyKGBjbGlja2AsIGZ1bmN0aW9uIChldnQpIHtcclxuXHJcbiAgICAgIGlmIChldnQudGFyZ2V0ID09PSBvdmVybGF5TW9kYWwpIHtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IGBgO1xyXG5cclxuICAgICAgfVxyXG5cclxuICAgIH0pO1xyXG5cclxuICAgIG1vZGFsVGhhbmtzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2dCkge1xyXG5cclxuICAgICAgaWYgKGV2dC50YXJnZXQgPT09IG1vZGFsVGhhbmtzKSB7XHJcbiAgICAgICAgbW9kYWxUaGFua3MuY2xhc3NMaXN0LmNvbnRhaW5zKCdtb2RhbC1hY3RpdmUnKTtcclxuICAgICAgICBtb2RhbFRoYW5rcy5jbGFzc0xpc3QucmVtb3ZlKCdtb2RhbC1hY3RpdmUnKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gYGA7XHJcbiAgICAgIH1cclxuXHJcbiAgICB9KVxyXG5cclxuICB9XHJcblxyXG59KSgpO1xyXG4ndXNlIHN0cmljdCc7XHJcblxyXG4oZnVuY3Rpb24gKCkge1xyXG5cclxuICAkKGRvY3VtZW50KS5vbignYWZfY29tcGxldGUnLCBmdW5jdGlvbihldmVudCwgcmVzcG9uc2UpIHtcclxuXHJcbiAgICB2YXIgbW9kYWxDb25zdWx0YXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtY29uc3VsdGF0aW9uJyk7XHJcbiAgICB2YXIgbW9kYWxUaGFua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtdGhhbmtzJyk7XHJcbiAgICB2YXIgZm9ybSA9IHJlc3BvbnNlLmZvcm07XHJcblxyXG4gICAgaWYgKGZvcm0uYXR0cignaWQnKSA9PT0gJ2Zvcm0nKSB7XHJcblxyXG4gICAgICBtb2RhbFRoYW5rcy5jbGFzc0xpc3QuYWRkKCdtb2RhbC1hY3RpdmUnKTtcclxuICAgICAgbW9kYWxDb25zdWx0YXRpb24uY2xhc3NMaXN0LnJlbW92ZSgnbW9kYWwtYWN0aXZlJyk7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnJztcclxuICAgICAgcmVzcG9uc2UubWVzc2FnZSA9ICcnO1xyXG5cclxuICAgIH0gZWxzZSBpZiAoZm9ybS5hdHRyKCdpZCcpID09PSAnZm9ybV9tYWluJykge1xyXG4gICAgICBtb2RhbFRoYW5rcy5jbGFzc0xpc3QuYWRkKCdtb2RhbC1hY3RpdmUnKTtcclxuICAgICAgbW9kYWxDb25zdWx0YXRpb24uY2xhc3NMaXN0LnJlbW92ZSgnbW9kYWwtYWN0aXZlJyk7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnJztcclxuICAgICAgcmVzcG9uc2UubWVzc2FnZSA9ICcnO1xyXG4gICAgfVxyXG5cclxuICAgIGVsc2Uge1xyXG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICB9XHJcblxyXG4gIH0pO1xyXG5cclxufSkoKTsiXSwiZmlsZSI6Im1haW4uanMifQ==
