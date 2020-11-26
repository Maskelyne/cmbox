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
        servicesMenu.classList.remove('main-header__services-nav--opened');
        servicesMenu.classList.add('main-header__services-nav--closed');
        servicesMenuBtn.classList.remove('main-header__link-services--opened');
        servicesMenuBtn.classList.add('main-header__link-services--closed');
        stageMenu.classList.remove('main-header__stage-nav--opened');
        stageMenu.classList.add('main-header__stage-nav--closed');
        stageMenuBtn.classList.remove('main-header__link-stage--opened');
        stageMenuBtn.classList.add('main-header__link-stage--closed');
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
        menuBtn.classList.add('main-header__btn--closed');
        menuBtn.classList.remove('main-header__btn--opened');
        wrapMenu.classList.remove('main-header__wrap-menu--active');
        servicesMenu.classList.remove('main-header__services-nav--opened');
        servicesMenu.classList.add('main-header__services-nav--closed');
        servicesMenuBtn.classList.remove('main-header__link-services--opened');
        servicesMenuBtn.classList.add('main-header__link-services--closed');
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
        menuBtn.classList.add('main-header__btn--closed');
        menuBtn.classList.remove('main-header__btn--opened');
        wrapMenu.classList.remove('main-header__wrap-menu--active');
        stageMenu.classList.remove('main-header__stage-nav--opened');
        stageMenu.classList.add('main-header__stage-nav--closed');
        stageMenuBtn.classList.remove('main-header__link-stage--opened');
        stageMenuBtn.classList.add('main-header__link-stage--closed');
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
      spaceBetween: 30,
      // autoplay: {
      //   delay: 1200,
      // },
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

  $("#user_position").keyup(function () {
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

  $(document).on('mse2_load', function(e, data) {

    var cards = document.querySelectorAll(".portfolio__box-card");

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

})();
'use strict';

(function () {

  var articleContent = document.querySelector('.article__box-article');

  if (articleContent) {

    const DESKTOP_WIDTH = 1023;
    var articleCard = document.querySelector('.article__box-articles');

    var setHeight = function () {
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

  var servicesBoxWrapper = document.querySelector('.services');

  if (servicesBoxWrapper) {

    const TABLET_WIDTH = 767;
    var servicesBox = document.querySelector('.services__nav-box');

    var setHeight = function () {
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

  var stageWrapper = document.querySelector('.stages');

  if (stageWrapper) {

    const TABLET_WIDTH = 767;
    var stageBox = document.querySelector('.stages__nav-box');

    var setHeight = function () {
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

    const DESKTOP_WIDTH = 1023;

    var portfolioBox = document.querySelector('.portfolio-page__box');
    var portfolioBoxAdd = document.querySelector('.portfolio-page__box-add');
    var portfolioWrapper = document.querySelector('.portfolio-page__wrapper');
    var portfolioBoxImage = document.querySelector('.portfolio-page__box-image');
    var main = document.querySelector('.box-closed');
    var text = document.querySelector('.text-closed');

    if (window.innerWidth > DESKTOP_WIDTH) {

      document.body.style.overflow = 'hidden';

      var open = function () {
        portfolioBoxImage.style.transform = 'translateY(-170%)';
        portfolioBox.style.transform = 'translateY(-320%)';
        portfolioBox.style.transitionDelay = '';
        portfolioBoxImage.style.transitionDelay = '';
        portfolioPage.classList.add('portfolio-page__company--active');
        portfolioBoxAdd.classList.add('portfolio-page__box-add--active');
        setTimeout(gridOpen, 600);
      };

      var closed = function () {
        portfolioBoxImage.style.transform = '';
        portfolioBox.style.transform = '';
        portfolioBox.style.transitionDelay = '0.3s';
        portfolioBoxImage.style.transitionDelay = '0.3s';
        portfolioPage.classList.remove('portfolio-page__company--active');
        portfolioBoxAdd.classList.remove('portfolio-page__box-add--active');
        setTimeout(gridClosed, 400);
      };

      var closedMain = function (evt) {

        if (evt.target === main) {

          portfolioPage.classList.remove('portfolio-page__company--active');
          portfolioBoxAdd.classList.remove('portfolio-page__box-add--active');
          portfolioBoxImage.style.transform = '';
          portfolioBox.style.transform = '';
          portfolioBox.style.transitionDelay = '';
          portfolioBoxImage.style.transitionDelay = '';

        }

      };

      var closedText = function (evt) {

        if (evt.target === text) {

          portfolioPage.classList.remove('portfolio-page__company--active');
          portfolioBoxAdd.classList.remove('portfolio-page__box-add--active');
          portfolioBoxImage.style.transform = '';
          portfolioBox.style.transform = '';
          portfolioBox.style.transitionDelay = '';
          portfolioBoxImage.style.transitionDelay = '';

        }

      };

      window.addEventListener('wheel', function (evt) {

        if (evt.deltaY > 0 && window.innerWidth > DESKTOP_WIDTH) {
          open();
        } else if (portfolioPage.scrollTop === 0) {
          closed();
        }

      })

      main.addEventListener('click', closedMain);
      text.addEventListener('click', closedText);

      function gridOpen() {
        portfolioWrapper.style.gridTemplateColumns = '28% auto auto';
      }

      function gridClosed() {
        portfolioWrapper.style.gridTemplateColumns = '';
      }
    }
  }

})();
'use strict';

(function () {

  const KEY_CODE = 27;

  var overlayModal = document.querySelector('.modal');
  var modalConsultation = document.querySelector('.modal-consultation');

  if (modalConsultation) {

    // var modalThanks = document.querySelector('.modal-thanks');
    var modalConsultationBtn = document.querySelectorAll('.button--consultation');
    var modalClose = document.querySelectorAll('.modal__btn-closed');

    for(var y = 0; y < modalConsultationBtn.length; y++) {

      modalConsultationBtn[y].addEventListener('click', function (evt) {
        evt.preventDefault();

        modalConsultation.classList.add('modal-active');
        document.body.style.overflow = 'hidden';
      });

    }

    for (var i = 0; i < modalClose.length; i++) {
      modalClose[i].addEventListener('click', function (evt) {
        evt.preventDefault();

        // modalThanks.classList.remove('modal-active');
        modalConsultation.classList.remove('modal-active');
        document.body.style.overflow = '';
      });
    }

    window.addEventListener(`keydown`, function (evt) {

      if (evt.keyCode === KEY_CODE) {
        evt.preventDefault();

        modalConsultation.classList.contains(`modal-active`);
        modalConsultation.classList.remove(`modal-active`);
        // modalThanks.classList.contains('modal-active');
        // modalThanks.classList.remove('modal-active');
        document.body.style.overflow = ``;

      }

    });

    overlayModal.addEventListener(`click`, function (evt) {

      if (evt.target === overlayModal) {

        modalConsultation.classList.remove(`modal-active`);
        document.body.style.overflow = ``;

      }

    });

    // modalThanks.addEventListener('click', function (evt) {
    //
    //   if (evt.target === modalThanks) {
    //     modalThanks.classList.contains('modal-active');
    //     modalThanks.classList.remove('modal-active');
    //     document.body.style.overflow = ``;
    //   }
    //
    // })

  }

})();
'use strict';

(function () {

  $(document).on('mse2_load', function(e, data) {

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

  });

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

  const KEY_CODE = 27;

  var overlayModal = document.querySelector('.modal');
  var modalFeedback = document.querySelector('.modal-feedback');
  var modalFeedbackBtn = document.querySelector('.feedback-btn');
  // var modalThanks = document.querySelector('.modal-thanks');
  var modalClose = document.querySelectorAll('.modal__btn-closed');

  if (modalFeedbackBtn) {

    modalFeedbackBtn.addEventListener('click', function (evt) {
      evt.preventDefault();

      modalFeedback.classList.add('modal-active');
      document.body.style.overflow = 'hidden';
    });

    for (var i = 0; i < modalClose.length; i++) {
      modalClose[i].addEventListener('click', function (evt) {
        evt.preventDefault();

        // modalThanks.classList.remove('modal-active');
        modalFeedback.classList.remove('modal-active');
        document.body.style.overflow = '';
      });
    }

    window.addEventListener(`keydown`, function (evt) {

      if (evt.keyCode === KEY_CODE) {
        evt.preventDefault();

        modalFeedback.classList.contains(`modal-active`);
        modalFeedback.classList.remove(`modal-active`);
        // modalThanks.classList.contains('modal-active');
        // modalThanks.classList.remove('modal-active');
        document.body.style.overflow = ``;

      }

    });

    overlayModal.addEventListener(`click`, function (evt) {

      if (evt.target === overlayModal) {

        modalFeedback.classList.remove(`modal-active`);
        document.body.style.overflow = ``;

      }

    });

    // modalThanks.addEventListener('click', function (evt) {
    //
    //   if (evt.target === modalThanks) {
    //     modalThanks.classList.contains('modal-active');
    //     modalThanks.classList.remove('modal-active');
    //     document.body.style.overflow = ``;
    //   }
    //
    // })

  }

})();
'use strict';

(function () {

  const KEY_CODE = 27;

  var overlayModal = document.querySelector('.modal');
  var modalAnalysis = document.querySelector('.modal-analysis');
  var modalAnalysisBtn = document.querySelector('.analysis-btn');
  // var modalThanks = document.querySelector('.modal-thanks');
  var modalClose = document.querySelectorAll('.modal__btn-closed');

  if (modalAnalysisBtn) {

    modalAnalysisBtn.addEventListener('click', function (evt) {
      evt.preventDefault();

      modalAnalysis.classList.add('modal-active');
      document.body.style.overflow = 'hidden';
    });

    for (var i = 0; i < modalClose.length; i++) {
      modalClose[i].addEventListener('click', function (evt) {
        evt.preventDefault();

        // modalThanks.classList.remove('modal-active');
        modalAnalysis.classList.remove('modal-active');
        document.body.style.overflow = '';
      });
    }

    window.addEventListener(`keydown`, function (evt) {

      if (evt.keyCode === KEY_CODE) {
        evt.preventDefault();

        modalAnalysis.classList.contains(`modal-active`);
        modalAnalysis.classList.remove(`modal-active`);
        // modalThanks.classList.contains('modal-active');
        // modalThanks.classList.remove('modal-active');
        document.body.style.overflow = ``;

      }

    });

    overlayModal.addEventListener(`click`, function (evt) {

      if (evt.target === overlayModal) {

        modalAnalysis.classList.remove(`modal-active`);
        document.body.style.overflow = ``;

      }

    });

    // modalThanks.addEventListener('click', function (evt) {
    //
    //   if (evt.target === modalThanks) {
    //     modalThanks.classList.contains('modal-active');
    //     modalThanks.classList.remove('modal-active');
    //     document.body.style.overflow = ``;
    //   }
    //
    // })

  }

})();
'use strict';

(function () {

  const KEY_CODE = 27;

  var overlayModal = document.querySelector('.modal');
  var modalConsultation = document.querySelector('.modal-consultation');

  if (modalConsultation) {

    // var modalThanks = document.querySelector('.modal-thanks');
    var modalConsultationBtn = document.querySelector('.portfolio-modal-js');
    var modalClose = document.querySelectorAll('.modal__btn-closed');

      modalConsultationBtn.addEventListener('click', function (evt) {
        evt.preventDefault();

        modalConsultation.classList.add('modal-active');
        document.body.style.overflow = 'hidden';
      });

    for (var i = 0; i < modalClose.length; i++) {
      modalClose[i].addEventListener('click', function (evt) {
        evt.preventDefault();

        // modalThanks.classList.remove('modal-active');
        modalConsultation.classList.remove('modal-active');
        document.body.style.overflow = '';
      });
    }

    window.addEventListener(`keydown`, function (evt) {

      if (evt.keyCode === KEY_CODE) {
        evt.preventDefault();

        modalConsultation.classList.contains(`modal-active`);
        modalConsultation.classList.remove(`modal-active`);
        // modalThanks.classList.contains('modal-active');
        // modalThanks.classList.remove('modal-active');
        document.body.style.overflow = ``;

      }

    });

    overlayModal.addEventListener(`click`, function (evt) {

      if (evt.target === overlayModal) {

        modalConsultation.classList.remove(`modal-active`);
        document.body.style.overflow = ``;

      }

    });

    // modalThanks.addEventListener('click', function (evt) {
    //
    //   if (evt.target === modalThanks) {
    //     modalThanks.classList.contains('modal-active');
    //     modalThanks.classList.remove('modal-active');
    //     document.body.style.overflow = ``;
    //   }
    //
    // })

  }

})();
'use strict';

(function () {

  $(document).on('af_complete', function (event, response) {

    var modalConsultation = document.querySelector('.modal-consultation');
    var modalThanks = document.querySelector('.modal-thanks');
    var form = response.form;

    if (form.attr('id') === 'form') {

      modalThanks.classList.add('modal-active');
      modalConsultation.classList.remove('modal-active');
      document.body.style.overflow = '';
      // response.message = '';

    } else if (form.attr('id') === 'form_main') {
      modalThanks.classList.add('modal-active');
      modalConsultation.classList.remove('modal-active');
      document.body.style.overflow = '';
      // response.message = '';
    }

    else {
      console.log(response);
    }

  });

})();
'use strict';

(function () {

  var btn = document.querySelectorAll('a[href^="tel:"]');

  var resizeWindow = function (evt) {
    if (window.innerWidth <= 1023) {
      evt.stopPropagation();
    } else {
      evt.preventDefault();
    }
  };

  btn.forEach(function (item) {
    item.addEventListener('click', resizeWindow);
  });

  btn.forEach(function (item) {
    item.addEventListener('resize', resizeWindow);
  });

})();
'use strict';

(function () {

  var feedbackLogo = document.querySelector('.feedback__box-logotypes');

  if (feedbackLogo) {
    const DESKTOP_WIDTH = 1023;

    if (window.innerWidth > DESKTOP_WIDTH) {

      var feedbackBoxInfo = document.querySelectorAll('.feedback__box-info a');
      var feedbackArticle = document.querySelectorAll('.feedback__box article');

      var removeActive = function (array, activeClass) {
        array.forEach(function (item) {
          item.classList.remove(activeClass);
        });
        return;
      };

      if (feedbackBoxInfo) {
        feedbackBoxInfo.forEach(function (item, i) {
          item.addEventListener('click', function (evt) {
            evt.preventDefault();

            removeActive(feedbackBoxInfo, 'feedback__box-info--active');
            removeActive(feedbackArticle, 'feedback-active');
            feedbackBoxInfo[i].classList.add('feedback__box-info--active');
            feedbackArticle[i].classList.add('feedback-active');
          });
        });
      }
    }
  }

})();
'use strict';

$(function () {

  $('.lazyYT').lazyYT();

  $('[data-fancybox="photo"]').fancybox({
    buttons: [
      'slideShow',
      'share',
      'zoom',
      'fullScreen',
      'close'
    ],
  });

});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qXHJcblxyXG4gICog0L/QvtC00LrQu9GO0YfQtdC90LjQtSBqcy3QvNC+0LTRg9C70LXQuVxyXG4gICogLy89IG1vZHVsZXMvZmlsZS5qc1xyXG5cclxuKi9cclxuXHJcbid1c2Ugc3RyaWN0JztcclxuXHJcbihmdW5jdGlvbiAoKSB7XHJcbiAgdmFyIG1lbnVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1oZWFkZXJfX2J0bicpO1xyXG4gIHZhciB3cmFwTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi1oZWFkZXJfX3dyYXAtbWVudVwiKTtcclxuICB2YXIgc3RhZ2VNZW51QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4taGVhZGVyX19saW5rLXN0YWdlJyk7XHJcbiAgdmFyIHN0YWdlTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWhlYWRlcl9fc3RhZ2UtbmF2Jyk7XHJcbiAgdmFyIHNlcnZpY2VzTWVudUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWhlYWRlcl9fbGluay1zZXJ2aWNlcycpO1xyXG4gIHZhciBzZXJ2aWNlc01lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1oZWFkZXJfX3NlcnZpY2VzLW5hdicpO1xyXG5cclxuICBpZiAobWVudUJ0bikge1xyXG5cclxuICAgIG1lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZ0KSB7XHJcbiAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgaWYgKG1lbnVCdG4uY2xhc3NMaXN0LmNvbnRhaW5zKCdtYWluLWhlYWRlcl9fYnRuLS1jbG9zZWQnKSkge1xyXG4gICAgICAgIG1lbnVCdG4uY2xhc3NMaXN0LnJlbW92ZSgnbWFpbi1oZWFkZXJfX2J0bi0tY2xvc2VkJyk7XHJcbiAgICAgICAgbWVudUJ0bi5jbGFzc0xpc3QuYWRkKCdtYWluLWhlYWRlcl9fYnRuLS1vcGVuZWQnKTtcclxuICAgICAgICB3cmFwTWVudS5jbGFzc0xpc3QuYWRkKCdtYWluLWhlYWRlcl9fd3JhcC1tZW51LS1hY3RpdmUnKTtcclxuICAgICAgICBzZXJ2aWNlc01lbnUuY2xhc3NMaXN0LnJlbW92ZSgnbWFpbi1oZWFkZXJfX3NlcnZpY2VzLW5hdi0tb3BlbmVkJyk7XHJcbiAgICAgICAgc2VydmljZXNNZW51LmNsYXNzTGlzdC5hZGQoJ21haW4taGVhZGVyX19zZXJ2aWNlcy1uYXYtLWNsb3NlZCcpO1xyXG4gICAgICAgIHNlcnZpY2VzTWVudUJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdtYWluLWhlYWRlcl9fbGluay1zZXJ2aWNlcy0tb3BlbmVkJyk7XHJcbiAgICAgICAgc2VydmljZXNNZW51QnRuLmNsYXNzTGlzdC5hZGQoJ21haW4taGVhZGVyX19saW5rLXNlcnZpY2VzLS1jbG9zZWQnKTtcclxuICAgICAgICBzdGFnZU1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnbWFpbi1oZWFkZXJfX3N0YWdlLW5hdi0tb3BlbmVkJyk7XHJcbiAgICAgICAgc3RhZ2VNZW51LmNsYXNzTGlzdC5hZGQoJ21haW4taGVhZGVyX19zdGFnZS1uYXYtLWNsb3NlZCcpO1xyXG4gICAgICAgIHN0YWdlTWVudUJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdtYWluLWhlYWRlcl9fbGluay1zdGFnZS0tb3BlbmVkJyk7XHJcbiAgICAgICAgc3RhZ2VNZW51QnRuLmNsYXNzTGlzdC5hZGQoJ21haW4taGVhZGVyX19saW5rLXN0YWdlLS1jbG9zZWQnKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbWVudUJ0bi5jbGFzc0xpc3QuYWRkKCdtYWluLWhlYWRlcl9fYnRuLS1jbG9zZWQnKTtcclxuICAgICAgICBtZW51QnRuLmNsYXNzTGlzdC5yZW1vdmUoJ21haW4taGVhZGVyX19idG4tLW9wZW5lZCcpO1xyXG4gICAgICAgIHdyYXBNZW51LmNsYXNzTGlzdC5yZW1vdmUoJ21haW4taGVhZGVyX193cmFwLW1lbnUtLWFjdGl2ZScpO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnJztcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgc3RhZ2VNZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2dCkge1xyXG4gICAgICBldnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgIGlmIChzdGFnZU1lbnUuY2xhc3NMaXN0LmNvbnRhaW5zKCdtYWluLWhlYWRlcl9fc3RhZ2UtbmF2LS1jbG9zZWQnKSkge1xyXG4gICAgICAgIHN0YWdlTWVudS5jbGFzc0xpc3QucmVtb3ZlKCdtYWluLWhlYWRlcl9fc3RhZ2UtbmF2LS1jbG9zZWQnKTtcclxuICAgICAgICBzdGFnZU1lbnUuY2xhc3NMaXN0LmFkZCgnbWFpbi1oZWFkZXJfX3N0YWdlLW5hdi0tb3BlbmVkJyk7XHJcbiAgICAgICAgc3RhZ2VNZW51QnRuLmNsYXNzTGlzdC5yZW1vdmUoJ21haW4taGVhZGVyX19saW5rLXN0YWdlLS1jbG9zZWQnKTtcclxuICAgICAgICBzdGFnZU1lbnVCdG4uY2xhc3NMaXN0LmFkZCgnbWFpbi1oZWFkZXJfX2xpbmstc3RhZ2UtLW9wZW5lZCcpO1xyXG4gICAgICAgIG1lbnVCdG4uY2xhc3NMaXN0LmFkZCgnbWFpbi1oZWFkZXJfX2J0bi0tY2xvc2VkJyk7XHJcbiAgICAgICAgbWVudUJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdtYWluLWhlYWRlcl9fYnRuLS1vcGVuZWQnKTtcclxuICAgICAgICB3cmFwTWVudS5jbGFzc0xpc3QucmVtb3ZlKCdtYWluLWhlYWRlcl9fd3JhcC1tZW51LS1hY3RpdmUnKTtcclxuICAgICAgICBzZXJ2aWNlc01lbnUuY2xhc3NMaXN0LnJlbW92ZSgnbWFpbi1oZWFkZXJfX3NlcnZpY2VzLW5hdi0tb3BlbmVkJyk7XHJcbiAgICAgICAgc2VydmljZXNNZW51LmNsYXNzTGlzdC5hZGQoJ21haW4taGVhZGVyX19zZXJ2aWNlcy1uYXYtLWNsb3NlZCcpO1xyXG4gICAgICAgIHNlcnZpY2VzTWVudUJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdtYWluLWhlYWRlcl9fbGluay1zZXJ2aWNlcy0tb3BlbmVkJyk7XHJcbiAgICAgICAgc2VydmljZXNNZW51QnRuLmNsYXNzTGlzdC5hZGQoJ21haW4taGVhZGVyX19saW5rLXNlcnZpY2VzLS1jbG9zZWQnKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc3RhZ2VNZW51LmNsYXNzTGlzdC5hZGQoJ21haW4taGVhZGVyX19zdGFnZS1uYXYtLWNsb3NlZCcpO1xyXG4gICAgICAgIHN0YWdlTWVudS5jbGFzc0xpc3QucmVtb3ZlKCdtYWluLWhlYWRlcl9fc3RhZ2UtbmF2LS1vcGVuZWQnKTtcclxuICAgICAgICBzdGFnZU1lbnVCdG4uY2xhc3NMaXN0LmFkZCgnbWFpbi1oZWFkZXJfX2xpbmstc3RhZ2UtLWNsb3NlZCcpO1xyXG4gICAgICAgIHN0YWdlTWVudUJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdtYWluLWhlYWRlcl9fbGluay1zdGFnZS0tb3BlbmVkJyk7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICcnO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBzZXJ2aWNlc01lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZ0KSB7XHJcbiAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgaWYgKHNlcnZpY2VzTWVudS5jbGFzc0xpc3QuY29udGFpbnMoJ21haW4taGVhZGVyX19zZXJ2aWNlcy1uYXYtLWNsb3NlZCcpKSB7XHJcbiAgICAgICAgc2VydmljZXNNZW51LmNsYXNzTGlzdC5yZW1vdmUoJ21haW4taGVhZGVyX19zZXJ2aWNlcy1uYXYtLWNsb3NlZCcpO1xyXG4gICAgICAgIHNlcnZpY2VzTWVudS5jbGFzc0xpc3QuYWRkKCdtYWluLWhlYWRlcl9fc2VydmljZXMtbmF2LS1vcGVuZWQnKTtcclxuICAgICAgICBzZXJ2aWNlc01lbnVCdG4uY2xhc3NMaXN0LnJlbW92ZSgnbWFpbi1oZWFkZXJfX2xpbmstc2VydmljZXMtLWNsb3NlZCcpO1xyXG4gICAgICAgIHNlcnZpY2VzTWVudUJ0bi5jbGFzc0xpc3QuYWRkKCdtYWluLWhlYWRlcl9fbGluay1zZXJ2aWNlcy0tb3BlbmVkJyk7XHJcbiAgICAgICAgbWVudUJ0bi5jbGFzc0xpc3QuYWRkKCdtYWluLWhlYWRlcl9fYnRuLS1jbG9zZWQnKTtcclxuICAgICAgICBtZW51QnRuLmNsYXNzTGlzdC5yZW1vdmUoJ21haW4taGVhZGVyX19idG4tLW9wZW5lZCcpO1xyXG4gICAgICAgIHdyYXBNZW51LmNsYXNzTGlzdC5yZW1vdmUoJ21haW4taGVhZGVyX193cmFwLW1lbnUtLWFjdGl2ZScpO1xyXG4gICAgICAgIHN0YWdlTWVudS5jbGFzc0xpc3QucmVtb3ZlKCdtYWluLWhlYWRlcl9fc3RhZ2UtbmF2LS1vcGVuZWQnKTtcclxuICAgICAgICBzdGFnZU1lbnUuY2xhc3NMaXN0LmFkZCgnbWFpbi1oZWFkZXJfX3N0YWdlLW5hdi0tY2xvc2VkJyk7XHJcbiAgICAgICAgc3RhZ2VNZW51QnRuLmNsYXNzTGlzdC5yZW1vdmUoJ21haW4taGVhZGVyX19saW5rLXN0YWdlLS1vcGVuZWQnKTtcclxuICAgICAgICBzdGFnZU1lbnVCdG4uY2xhc3NMaXN0LmFkZCgnbWFpbi1oZWFkZXJfX2xpbmstc3RhZ2UtLWNsb3NlZCcpO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzZXJ2aWNlc01lbnUuY2xhc3NMaXN0LmFkZCgnbWFpbi1oZWFkZXJfX3NlcnZpY2VzLW5hdi0tY2xvc2VkJyk7XHJcbiAgICAgICAgc2VydmljZXNNZW51LmNsYXNzTGlzdC5yZW1vdmUoJ21haW4taGVhZGVyX19zZXJ2aWNlcy1uYXYtLW9wZW5lZCcpO1xyXG4gICAgICAgIHNlcnZpY2VzTWVudUJ0bi5jbGFzc0xpc3QuYWRkKCdtYWluLWhlYWRlcl9fbGluay1zZXJ2aWNlcy0tY2xvc2VkJyk7XHJcbiAgICAgICAgc2VydmljZXNNZW51QnRuLmNsYXNzTGlzdC5yZW1vdmUoJ21haW4taGVhZGVyX19saW5rLXNlcnZpY2VzLS1vcGVuZWQnKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJyc7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbn0pKCk7XHJcbid1c2Ugc3RyaWN0JztcclxuXHJcbihmdW5jdGlvbiAoKSB7XHJcblxyXG4gIGxldCBjbGllbnRzU2xpZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsaWVudHNfX3N3aXBlci1jb250YWluZXInKTtcclxuICBsZXQgc2VydmljZXNTbGlkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VydmljZXNfX3N3aXBlci1jb250YWluZXInKTtcclxuXHJcbiAgbGV0IGNsaWVudHNTbGlkZXJEZXNrID0gZnVuY3Rpb24gKGVsKSB7XHJcbiAgICByZXR1cm4gbmV3IFN3aXBlcihlbCwge1xyXG4gICAgICBsb29wOiB0cnVlLFxyXG4gICAgICBzcGVlZDogMTAwMCxcclxuICAgICAgYXV0b3BsYXk6IHtcclxuICAgICAgICBkZWxheTogMjUwMCxcclxuICAgICAgfSxcclxuICAgICAgbmF2aWdhdGlvbjoge1xyXG4gICAgICAgIG5leHRFbDogJy5zd2lwZXItYnV0dG9uLW5leHQnLFxyXG4gICAgICAgIHByZXZFbDogJy5zd2lwZXItYnV0dG9uLXByZXYnLFxyXG4gICAgICB9LFxyXG4gICAgICBicmVha3BvaW50czoge1xyXG4gICAgICAgIDMyMDoge1xyXG4gICAgICAgICAgc2xpZGVzUGVyVmlldzogMSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIDc2ODoge1xyXG4gICAgICAgICAgc2xpZGVzUGVyVmlldzogMixcclxuICAgICAgICB9LFxyXG4gICAgICAgIDk1MDoge1xyXG4gICAgICAgICAgc2xpZGVzUGVyVmlldzogMyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIDEyMDA6IHtcclxuICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDQsXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBpZiAoY2xpZW50c1NsaWRlcikge1xyXG4gICAgY2xpZW50c1NsaWRlckRlc2soY2xpZW50c1NsaWRlcik7XHJcbiAgfVxyXG5cclxuICBsZXQgc2VydmljZXNTbGlkZXJEZXNrID0gZnVuY3Rpb24gKGVsKSB7XHJcbiAgICByZXR1cm4gbmV3IFN3aXBlcihlbCwge1xyXG4gICAgICBsb29wOiB0cnVlLFxyXG4gICAgICBzcGVlZDogMTAwMCxcclxuICAgICAgc3BhY2VCZXR3ZWVuOiAzMCxcclxuICAgICAgLy8gYXV0b3BsYXk6IHtcclxuICAgICAgLy8gICBkZWxheTogMTIwMCxcclxuICAgICAgLy8gfSxcclxuICAgICAgbmF2aWdhdGlvbjoge1xyXG4gICAgICAgIG5leHRFbDogJy5zd2lwZXItYnV0dG9uLW5leHQnLFxyXG4gICAgICAgIHByZXZFbDogJy5zd2lwZXItYnV0dG9uLXByZXYnLFxyXG4gICAgICB9LFxyXG4gICAgICBicmVha3BvaW50czoge1xyXG4gICAgICAgIDMyMDoge1xyXG4gICAgICAgICAgc2xpZGVzUGVyVmlldzogMSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIDc2ODoge1xyXG4gICAgICAgICAgc2xpZGVzUGVyVmlldzogMixcclxuICAgICAgICB9LFxyXG4gICAgICAgIDEwMjQ6IHtcclxuICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDIsXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBpZiAoc2VydmljZXNTbGlkZXIpIHtcclxuICAgIHNlcnZpY2VzU2xpZGVyRGVzayhzZXJ2aWNlc1NsaWRlcik7XHJcbiAgfVxyXG5cclxufSkoKTtcclxuJ3VzZSBzdHJpY3QnO1xyXG5cclxuJChmdW5jdGlvbiAoKSB7XHJcblxyXG4gIGpRdWVyeShmdW5jdGlvbiAoJCkge1xyXG4gICAgJChcIiN1c2VyX3Bob25lXCIpLm1hc2soXCIrMzc1ICg5OSkgOTk5LTk5LTk5XCIpO1xyXG4gIH0pO1xyXG5cclxuICAkKFwiI3VzZXJfbmFtZVwiKS5rZXl1cChmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAoJCh0aGlzKS52YWwoKSkge1xyXG4gICAgICAkKHRoaXMpLmFkZENsYXNzKFwibm90LWVtcHR5XCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcyhcIm5vdC1lbXB0eVwiKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgJChcIiN1c2VyX2NvbXBhbnlcIikua2V5dXAoZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKCQodGhpcykudmFsKCkpIHtcclxuICAgICAgJCh0aGlzKS5hZGRDbGFzcyhcIm5vdC1lbXB0eVwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoXCJub3QtZW1wdHlcIik7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gICQoXCIjdXNlcl9waG9uZVwiKS5rZXl1cChmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAoJCh0aGlzKS52YWwoKSkge1xyXG4gICAgICAkKHRoaXMpLmFkZENsYXNzKFwibm90LWVtcHR5XCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcyhcIm5vdC1lbXB0eVwiKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgJChcIiN1c2VyX2VtYWlsXCIpLmtleXVwKGZ1bmN0aW9uICgpIHtcclxuICAgIGlmICgkKHRoaXMpLnZhbCgpKSB7XHJcbiAgICAgICQodGhpcykuYWRkQ2xhc3MoXCJub3QtZW1wdHlcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKFwibm90LWVtcHR5XCIpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICAkKFwiI3VzZXJfY29tbWVudFwiKS5rZXl1cChmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAoJCh0aGlzKS52YWwoKSkge1xyXG4gICAgICAkKHRoaXMpLmFkZENsYXNzKCdub3QtZW1wdHknKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ25vdC1lbXB0eScpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICAkKFwiI3VzZXJfY29tbWVudHNcIikua2V5dXAoZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKCQodGhpcykudmFsKCkpIHtcclxuICAgICAgJCh0aGlzKS5hZGRDbGFzcygnbm90LWVtcHR5Jyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdub3QtZW1wdHknKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgJChcIiN1c2VyX3Bvc2l0aW9uXCIpLmtleXVwKGZ1bmN0aW9uICgpIHtcclxuICAgIGlmICgkKHRoaXMpLnZhbCgpKSB7XHJcbiAgICAgICQodGhpcykuYWRkQ2xhc3MoJ25vdC1lbXB0eScpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnbm90LWVtcHR5Jyk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG59KTtcclxuJ3VzZSBzdHJpY3QnO1xyXG5cclxuKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgdmFyIGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3J0Zm9saW8nKTtcclxuXHJcbiAgaWYgKGNvbnRhaW5lcikge1xyXG5cclxuICAgIHZhciBjYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wb3J0Zm9saW9fX2JveC1jYXJkJyk7XHJcblxyXG4gICAgZnVuY3Rpb24gcm90YXRlKGV2dCkge1xyXG4gICAgICB2YXIgY2FyZEl0ZW0gPSB0aGlzLnF1ZXJ5U2VsZWN0b3IoJy5wb3J0Zm9saW9fX2NhcmQtcGVyc3BlY3RpdmUnKTtcclxuICAgICAgdmFyIGhhbGZIZWlnaHQgPSBjYXJkSXRlbS5vZmZzZXRIZWlnaHQgLyAyO1xyXG4gICAgICB2YXIgaGFsZldpZHRoID0gY2FyZEl0ZW0ub2Zmc2V0V2lkdGggLyAyO1xyXG5cclxuICAgICAgY2FyZEl0ZW0uc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZVgoJyArIC0oZXZ0Lm9mZnNldFkgLSBoYWxmSGVpZ2h0KSAvIDEyICsgJ2RlZyknICtcclxuICAgICAgICAncm90YXRlWSgnICsgKGV2dC5vZmZzZXRYIC0gaGFsZldpZHRoKSAvIDEyICsgJ2RlZyc7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcm90YXRlTm9uZSgpIHtcclxuICAgICAgdmFyIGNhcmRJdGVtID0gdGhpcy5xdWVyeVNlbGVjdG9yKCcucG9ydGZvbGlvX19jYXJkLXBlcnNwZWN0aXZlJyk7XHJcblxyXG4gICAgICBjYXJkSXRlbS5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlWCgwZGVnKScgKyAncm90YXRlWSgwZGVnKSc7XHJcbiAgICB9XHJcblxyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjYXJkcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICB2YXIgY2FyZCA9IGNhcmRzW2ldO1xyXG4gICAgICBjYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHJvdGF0ZSk7XHJcbiAgICAgIGNhcmQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCByb3RhdGVOb25lKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICQoZG9jdW1lbnQpLm9uKCdtc2UyX2xvYWQnLCBmdW5jdGlvbihlLCBkYXRhKSB7XHJcblxyXG4gICAgdmFyIGNhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wb3J0Zm9saW9fX2JveC1jYXJkXCIpO1xyXG5cclxuICAgIGZ1bmN0aW9uIHJvdGF0ZShldnQpIHtcclxuICAgICAgdmFyIGNhcmRJdGVtID0gdGhpcy5xdWVyeVNlbGVjdG9yKCcucG9ydGZvbGlvX19jYXJkLXBlcnNwZWN0aXZlJyk7XHJcbiAgICAgIHZhciBoYWxmSGVpZ2h0ID0gY2FyZEl0ZW0ub2Zmc2V0SGVpZ2h0IC8gMjtcclxuICAgICAgdmFyIGhhbGZXaWR0aCA9IGNhcmRJdGVtLm9mZnNldFdpZHRoIC8gMjtcclxuXHJcbiAgICAgIGNhcmRJdGVtLnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGVYKCcgKyAtKGV2dC5vZmZzZXRZIC0gaGFsZkhlaWdodCkgLyA3ICsgJ2RlZyknICtcclxuICAgICAgICAncm90YXRlWSgnICsgKGV2dC5vZmZzZXRYIC0gaGFsZldpZHRoKSAvIDcgKyAnZGVnJztcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByb3RhdGVOb25lKCkge1xyXG4gICAgICB2YXIgY2FyZEl0ZW0gPSB0aGlzLnF1ZXJ5U2VsZWN0b3IoJy5wb3J0Zm9saW9fX2NhcmQtcGVyc3BlY3RpdmUnKTtcclxuXHJcbiAgICAgIGNhcmRJdGVtLnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGVYKDBkZWcpJyArICdyb3RhdGVZKDBkZWcpJztcclxuICAgIH1cclxuXHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNhcmRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHZhciBjYXJkID0gY2FyZHNbaV07XHJcbiAgICAgIGNhcmQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgcm90YXRlKTtcclxuICAgICAgY2FyZC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIHJvdGF0ZU5vbmUpO1xyXG4gICAgfVxyXG5cclxuICB9KTtcclxuXHJcbn0pKCk7XHJcbid1c2Ugc3RyaWN0JztcclxuXHJcbihmdW5jdGlvbiAoKSB7XHJcblxyXG4gIHZhciBhcnRpY2xlQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hcnRpY2xlX19ib3gtYXJ0aWNsZScpO1xyXG5cclxuICBpZiAoYXJ0aWNsZUNvbnRlbnQpIHtcclxuXHJcbiAgICBjb25zdCBERVNLVE9QX1dJRFRIID0gMTAyMztcclxuICAgIHZhciBhcnRpY2xlQ2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hcnRpY2xlX19ib3gtYXJ0aWNsZXMnKTtcclxuXHJcbiAgICB2YXIgc2V0SGVpZ2h0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICBsZXQgaXNEZXNrdG9wID0gd2luZG93LmlubmVyV2lkdGggPiBERVNLVE9QX1dJRFRIO1xyXG5cclxuICAgICAgICBpZiAoaXNEZXNrdG9wKSB7XHJcbiAgICAgICAgICBsZXQgY29udGVudEhlaWdodCA9IGFydGljbGVDb250ZW50Lm9mZnNldEhlaWdodDtcclxuICAgICAgICAgIGFydGljbGVDYXJkLnN0eWxlLmhlaWdodCA9IGNvbnRlbnRIZWlnaHQgKyAncHgnO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBhcnRpY2xlQ2FyZC5zdHlsZS5oZWlnaHQgPSAnJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzZXRIZWlnaHQoKTtcclxuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgc2V0SGVpZ2h0KTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBzZXRIZWlnaHQpO1xyXG4gIH1cclxuXHJcbiAgdmFyIHNlcnZpY2VzQm94V3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZXJ2aWNlcycpO1xyXG5cclxuICBpZiAoc2VydmljZXNCb3hXcmFwcGVyKSB7XHJcblxyXG4gICAgY29uc3QgVEFCTEVUX1dJRFRIID0gNzY3O1xyXG4gICAgdmFyIHNlcnZpY2VzQm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlcnZpY2VzX19uYXYtYm94Jyk7XHJcblxyXG4gICAgdmFyIHNldEhlaWdodCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgbGV0IGlzVGFibGV0ID0gd2luZG93LmlubmVyV2lkdGggPiBUQUJMRVRfV0lEVEg7XHJcblxyXG4gICAgICAgIGlmIChpc1RhYmxldCkge1xyXG4gICAgICAgICAgbGV0IGNvbnRlbnRIZWlnaHQgPSBzZXJ2aWNlc0JveFdyYXBwZXIub2Zmc2V0SGVpZ2h0O1xyXG4gICAgICAgICAgc2VydmljZXNCb3guc3R5bGUuaGVpZ2h0ID0gY29udGVudEhlaWdodCArICdweCc7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHNlcnZpY2VzQm94LnN0eWxlLmhlaWdodCA9ICcnO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHNldEhlaWdodCgpO1xyXG5cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBzZXRIZWlnaHQpO1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHNldEhlaWdodCk7XHJcbiAgfVxyXG5cclxuICB2YXIgc3RhZ2VXcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YWdlcycpO1xyXG5cclxuICBpZiAoc3RhZ2VXcmFwcGVyKSB7XHJcblxyXG4gICAgY29uc3QgVEFCTEVUX1dJRFRIID0gNzY3O1xyXG4gICAgdmFyIHN0YWdlQm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YWdlc19fbmF2LWJveCcpO1xyXG5cclxuICAgIHZhciBzZXRIZWlnaHQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGxldCBpc1RhYmxldCA9IHdpbmRvdy5pbm5lcldpZHRoID4gVEFCTEVUX1dJRFRIO1xyXG5cclxuICAgICAgICBpZiAoaXNUYWJsZXQpIHtcclxuICAgICAgICAgIGxldCBjb250ZW50SGVpZ2h0ID0gc3RhZ2VXcmFwcGVyLm9mZnNldEhlaWdodDtcclxuICAgICAgICAgIHN0YWdlQm94LnN0eWxlLmhlaWdodCA9IGNvbnRlbnRIZWlnaHQgKyAncHgnO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBzdGFnZUJveC5zdHlsZS5oZWlnaHQgPSAnJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzZXRIZWlnaHQoKTtcclxuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgc2V0SGVpZ2h0KTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBzZXRIZWlnaHQpO1xyXG4gIH1cclxuXHJcbn0pKCk7XHJcbid1c2Ugc3RyaWN0JztcclxuXHJcbihmdW5jdGlvbiAoKSB7XHJcblxyXG4gIHZhciBtYWluU2xpZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmludHJvX19ib3gtc3dpcGVyLWNvbnRhaW5lcicpO1xyXG5cclxuICB2YXIgY3JlYXRlU2xpZGVyID0gZnVuY3Rpb24gKGVsKSB7XHJcbiAgICByZXR1cm4gbmV3IFN3aXBlcihlbCwge1xyXG4gICAgICBkaXJlY3Rpb246ICd2ZXJ0aWNhbCcsXHJcbiAgICAgIHNsaWRlc1BlclZpZXc6IDEsXHJcbiAgICAgIGxvb3A6IHRydWUsXHJcbiAgICAgIHNwZWVkOiAxMDAwLFxyXG4gICAgICBhdXRvcGxheToge1xyXG4gICAgICAgIGRlbGF5OiA3MDAwLFxyXG4gICAgICB9LFxyXG4gICAgICBtb3VzZXdoZWVsOiB0cnVlLFxyXG4gICAgICBwYWdpbmF0aW9uOiB7XHJcbiAgICAgICAgZWw6ICcuc3dpcGVyLXBhZ2luYXRpb24nLFxyXG4gICAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGlmIChtYWluU2xpZGVyKSB7XHJcbiAgICBjcmVhdGVTbGlkZXIobWFpblNsaWRlcik7XHJcbiAgfVxyXG5cclxufSkoKTtcclxuJ3VzZSBzdHJpY3QnO1xyXG5cclxuKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgdmFyIGJnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNiZ1wiKTtcclxuXHJcbiAgaWYgKGJnKSB7XHJcblxyXG4gICAgY29uc3QgTU9CSUxFX1dJRFRIID0gNzY3O1xyXG5cclxuICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+IE1PQklMRV9XSURUSCkge1xyXG5cclxuICAgICAgdmFyIHJlZnJlc2hEdXJhdGlvbiA9IDEwMDAwO1xyXG4gICAgICB2YXIgcmVmcmVzaFRpbWVvdXQ7XHJcbiAgICAgIHZhciBudW1Qb2ludHNYO1xyXG4gICAgICB2YXIgbnVtUG9pbnRzWTtcclxuICAgICAgdmFyIHVuaXRXaWR0aDtcclxuICAgICAgdmFyIHVuaXRIZWlnaHQ7XHJcbiAgICAgIHZhciBwb2ludHM7XHJcbiAgICAgIHZhciBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xyXG5cclxuICAgICAgZnVuY3Rpb24gb25Mb2FkKCkge1xyXG5cclxuICAgICAgICB2YXIgc2V0SGVpZ2h0ID0gbWFpbi5vZmZzZXRIZWlnaHQ7XHJcbiAgICAgICAgdmFyIHN2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAnc3ZnJyk7XHJcbiAgICAgICAgc3ZnLnNldEF0dHJpYnV0ZSgnd2lkdGgnLCB3aW5kb3cuaW5uZXJXaWR0aCk7XHJcbiAgICAgICAgc3ZnLnNldEF0dHJpYnV0ZSgnaGVpZ2h0Jywgc2V0SGVpZ2h0KTtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYmcnKS5hcHBlbmRDaGlsZChzdmcpO1xyXG5cclxuICAgICAgICB2YXIgdW5pdFNpemUgPSAod2luZG93LmlubmVyV2lkdGggKyBzZXRIZWlnaHQpIC8gNDA7XHJcbiAgICAgICAgbnVtUG9pbnRzWCA9IE1hdGguY2VpbCh3aW5kb3cuaW5uZXJXaWR0aCAvIHVuaXRTaXplKSArIDE7XHJcbiAgICAgICAgbnVtUG9pbnRzWSA9IE1hdGguY2VpbChzZXRIZWlnaHQgLyB1bml0U2l6ZSkgKyAxO1xyXG4gICAgICAgIHVuaXRXaWR0aCA9IE1hdGguY2VpbCh3aW5kb3cuaW5uZXJXaWR0aCAvIChudW1Qb2ludHNYIC0gMSkpO1xyXG4gICAgICAgIHVuaXRIZWlnaHQgPSBNYXRoLmNlaWwoc2V0SGVpZ2h0IC8gKG51bVBvaW50c1kgLSAxKSk7XHJcbiAgICAgICAgcG9pbnRzID0gW107XHJcblxyXG4gICAgICAgIGZvciAodmFyIHkgPSAwOyB5IDwgbnVtUG9pbnRzWTsgeSsrKSB7XHJcbiAgICAgICAgICBmb3IgKHZhciB4ID0gMDsgeCA8IG51bVBvaW50c1g7IHgrKykge1xyXG4gICAgICAgICAgICBwb2ludHMucHVzaCh7eDogdW5pdFdpZHRoICogeCwgeTogdW5pdEhlaWdodCAqIHksIG9yaWdpblg6IHVuaXRXaWR0aCAqIHgsIG9yaWdpblk6IHVuaXRIZWlnaHQgKiB5fSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByYW5kb21pemUoKTtcclxuXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwb2ludHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgIGlmIChwb2ludHNbaV0ub3JpZ2luWCAhPSB1bml0V2lkdGggKiAobnVtUG9pbnRzWCAtIDEpICYmIHBvaW50c1tpXS5vcmlnaW5ZICE9IHVuaXRIZWlnaHQgKiAobnVtUG9pbnRzWSAtIDEpKSB7XHJcbiAgICAgICAgICAgIHZhciB0b3BMZWZ0WCA9IHBvaW50c1tpXS54O1xyXG4gICAgICAgICAgICB2YXIgdG9wTGVmdFkgPSBwb2ludHNbaV0ueTtcclxuICAgICAgICAgICAgdmFyIHRvcFJpZ2h0WCA9IHBvaW50c1tpICsgMV0ueDtcclxuICAgICAgICAgICAgdmFyIHRvcFJpZ2h0WSA9IHBvaW50c1tpICsgMV0ueTtcclxuICAgICAgICAgICAgdmFyIGJvdHRvbUxlZnRYID0gcG9pbnRzW2kgKyBudW1Qb2ludHNYXS54O1xyXG4gICAgICAgICAgICB2YXIgYm90dG9tTGVmdFkgPSBwb2ludHNbaSArIG51bVBvaW50c1hdLnk7XHJcbiAgICAgICAgICAgIHZhciBib3R0b21SaWdodFggPSBwb2ludHNbaSArIG51bVBvaW50c1ggKyAxXS54O1xyXG4gICAgICAgICAgICB2YXIgYm90dG9tUmlnaHRZID0gcG9pbnRzW2kgKyBudW1Qb2ludHNYICsgMV0ueTtcclxuXHJcbiAgICAgICAgICAgIHZhciByYW5kbyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpO1xyXG5cclxuICAgICAgICAgICAgZm9yICh2YXIgbiA9IDA7IG4gPCAyOyBuKyspIHtcclxuICAgICAgICAgICAgICB2YXIgcG9seWdvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhzdmcubmFtZXNwYWNlVVJJLCAncG9seWdvbicpO1xyXG5cclxuICAgICAgICAgICAgICBpZiAocmFuZG8gPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKG4gPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICBwb2x5Z29uLnBvaW50MSA9IGk7XHJcbiAgICAgICAgICAgICAgICAgIHBvbHlnb24ucG9pbnQyID0gaSArIG51bVBvaW50c1g7XHJcbiAgICAgICAgICAgICAgICAgIHBvbHlnb24ucG9pbnQzID0gaSArIG51bVBvaW50c1ggKyAxO1xyXG4gICAgICAgICAgICAgICAgICBwb2x5Z29uLnNldEF0dHJpYnV0ZSgncG9pbnRzJywgdG9wTGVmdFggKyAnLCcgKyB0b3BMZWZ0WSArICcgJyArIGJvdHRvbUxlZnRYICsgJywnICsgYm90dG9tTGVmdFkgKyAnICcgKyBib3R0b21SaWdodFggKyAnLCcgKyBib3R0b21SaWdodFkpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChuID09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgcG9seWdvbi5wb2ludDEgPSBpO1xyXG4gICAgICAgICAgICAgICAgICBwb2x5Z29uLnBvaW50MiA9IGkgKyAxO1xyXG4gICAgICAgICAgICAgICAgICBwb2x5Z29uLnBvaW50MyA9IGkgKyBudW1Qb2ludHNYICsgMTtcclxuICAgICAgICAgICAgICAgICAgcG9seWdvbi5zZXRBdHRyaWJ1dGUoJ3BvaW50cycsIHRvcExlZnRYICsgJywnICsgdG9wTGVmdFkgKyAnICcgKyB0b3BSaWdodFggKyAnLCcgKyB0b3BSaWdodFkgKyAnICcgKyBib3R0b21SaWdodFggKyAnLCcgKyBib3R0b21SaWdodFkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAocmFuZG8gPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKG4gPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICBwb2x5Z29uLnBvaW50MSA9IGk7XHJcbiAgICAgICAgICAgICAgICAgIHBvbHlnb24ucG9pbnQyID0gaSArIG51bVBvaW50c1g7XHJcbiAgICAgICAgICAgICAgICAgIHBvbHlnb24ucG9pbnQzID0gaSArIDE7XHJcbiAgICAgICAgICAgICAgICAgIHBvbHlnb24uc2V0QXR0cmlidXRlKCdwb2ludHMnLCB0b3BMZWZ0WCArICcsJyArIHRvcExlZnRZICsgJyAnICsgYm90dG9tTGVmdFggKyAnLCcgKyBib3R0b21MZWZ0WSArICcgJyArIHRvcFJpZ2h0WCArICcsJyArIHRvcFJpZ2h0WSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG4gPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICBwb2x5Z29uLnBvaW50MSA9IGkgKyBudW1Qb2ludHNYO1xyXG4gICAgICAgICAgICAgICAgICBwb2x5Z29uLnBvaW50MiA9IGkgKyAxO1xyXG4gICAgICAgICAgICAgICAgICBwb2x5Z29uLnBvaW50MyA9IGkgKyBudW1Qb2ludHNYICsgMTtcclxuICAgICAgICAgICAgICAgICAgcG9seWdvbi5zZXRBdHRyaWJ1dGUoJ3BvaW50cycsIGJvdHRvbUxlZnRYICsgJywnICsgYm90dG9tTGVmdFkgKyAnICcgKyB0b3BSaWdodFggKyAnLCcgKyB0b3BSaWdodFkgKyAnICcgKyBib3R0b21SaWdodFggKyAnLCcgKyBib3R0b21SaWdodFkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB2YXIgaCA9IDIwNztcclxuICAgICAgICAgICAgICB2YXIgcyA9IDQ1O1xyXG4gICAgICAgICAgICAgIHZhciBsID0gODAgKyAoTWF0aC5yYW5kb20oKSAqIDEyKTtcclxuICAgICAgICAgICAgICBwb2x5Z29uLnNldEF0dHJpYnV0ZSgnZmlsbCcsICdoc2woJyArIGggKyAnLCAnICsgcyArICclLCAnICsgbCArICclKScpO1xyXG4gICAgICAgICAgICAgIHZhciBhbmltYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdhbmltYXRlJyk7XHJcbiAgICAgICAgICAgICAgYW5pbWF0ZS5zZXRBdHRyaWJ1dGUoJ2ZpbGwnLCAnZnJlZXplJyk7XHJcbiAgICAgICAgICAgICAgYW5pbWF0ZS5zZXRBdHRyaWJ1dGUoJ2F0dHJpYnV0ZU5hbWUnLCAncG9pbnRzJyk7XHJcbiAgICAgICAgICAgICAgYW5pbWF0ZS5zZXRBdHRyaWJ1dGUoJ2R1cicsIHJlZnJlc2hEdXJhdGlvbiArICdtcycpO1xyXG4gICAgICAgICAgICAgIGFuaW1hdGUuc2V0QXR0cmlidXRlKCdjYWxjTW9kZScsICdsaW5lYXInKTtcclxuICAgICAgICAgICAgICBwb2x5Z29uLmFwcGVuZENoaWxkKGFuaW1hdGUpO1xyXG4gICAgICAgICAgICAgIHN2Zy5hcHBlbmRDaGlsZChwb2x5Z29uKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmVmcmVzaCgpO1xyXG5cclxuICAgICAgfVxyXG5cclxuICAgICAgZnVuY3Rpb24gcmFuZG9taXplKCkge1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcG9pbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICBpZiAocG9pbnRzW2ldLm9yaWdpblggIT0gMCAmJiBwb2ludHNbaV0ub3JpZ2luWCAhPSB1bml0V2lkdGggKiAobnVtUG9pbnRzWCAtIDEpKSB7XHJcbiAgICAgICAgICAgIHBvaW50c1tpXS54ID0gcG9pbnRzW2ldLm9yaWdpblggKyBNYXRoLnJhbmRvbSgpICogdW5pdFdpZHRoIC0gdW5pdFdpZHRoIC8gMjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmIChwb2ludHNbaV0ub3JpZ2luWSAhPSAwICYmIHBvaW50c1tpXS5vcmlnaW5ZICE9IHVuaXRIZWlnaHQgKiAobnVtUG9pbnRzWSAtIDEpKSB7XHJcbiAgICAgICAgICAgIHBvaW50c1tpXS55ID0gcG9pbnRzW2ldLm9yaWdpblkgKyBNYXRoLnJhbmRvbSgpICogdW5pdEhlaWdodCAtIHVuaXRIZWlnaHQgLyAyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgZnVuY3Rpb24gcmVmcmVzaCgpIHtcclxuICAgICAgICByYW5kb21pemUoKTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNiZyBzdmcnKS5jaGlsZE5vZGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICB2YXIgcG9seWdvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNiZyBzdmcnKS5jaGlsZE5vZGVzW2ldO1xyXG4gICAgICAgICAgdmFyIGFuaW1hdGUgPSBwb2x5Z29uLmNoaWxkTm9kZXNbMF07XHJcbiAgICAgICAgICBpZiAoYW5pbWF0ZS5nZXRBdHRyaWJ1dGUoJ3RvJykpIHtcclxuICAgICAgICAgICAgYW5pbWF0ZS5zZXRBdHRyaWJ1dGUoJ2Zyb20nLCBhbmltYXRlLmdldEF0dHJpYnV0ZSgndG8nKSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBhbmltYXRlLnNldEF0dHJpYnV0ZSgndG8nLCBwb2ludHNbcG9seWdvbi5wb2ludDFdLnggKyAnLCcgKyBwb2ludHNbcG9seWdvbi5wb2ludDFdLnkgKyAnICcgKyBwb2ludHNbcG9seWdvbi5wb2ludDJdLnggKyAnLCcgKyBwb2ludHNbcG9seWdvbi5wb2ludDJdLnkgKyAnICcgKyBwb2ludHNbcG9seWdvbi5wb2ludDNdLnggKyAnLCcgKyBwb2ludHNbcG9seWdvbi5wb2ludDNdLnkpO1xyXG4gICAgICAgICAgYW5pbWF0ZS5iZWdpbkVsZW1lbnQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmVmcmVzaFRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIHJlZnJlc2goKTtcclxuICAgICAgICB9LCByZWZyZXNoRHVyYXRpb24pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBmdW5jdGlvbiBvblJlc2l6ZSgpIHtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYmcgc3ZnJykucmVtb3ZlKCk7XHJcbiAgICAgICAgY2xlYXJUaW1lb3V0KHJlZnJlc2hUaW1lb3V0KTtcclxuICAgICAgICBvbkxvYWQoKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgd2luZG93Lm9ubG9hZCA9IG9uTG9hZDtcclxuICAgICAgd2luZG93Lm9ucmVzaXplID0gb25SZXNpemU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufSkoKTtcclxuJ3VzZSBzdHJpY3QnO1xyXG5cclxuKGZ1bmN0aW9uICgpIHtcclxuICB2YXIgcG9ydGZvbGlvUGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3J0Zm9saW8tcGFnZV9fY29tcGFueScpO1xyXG5cclxuICBpZiAocG9ydGZvbGlvUGFnZSkge1xyXG5cclxuICAgIGNvbnN0IERFU0tUT1BfV0lEVEggPSAxMDIzO1xyXG5cclxuICAgIHZhciBwb3J0Zm9saW9Cb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9ydGZvbGlvLXBhZ2VfX2JveCcpO1xyXG4gICAgdmFyIHBvcnRmb2xpb0JveEFkZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3J0Zm9saW8tcGFnZV9fYm94LWFkZCcpO1xyXG4gICAgdmFyIHBvcnRmb2xpb1dyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9ydGZvbGlvLXBhZ2VfX3dyYXBwZXInKTtcclxuICAgIHZhciBwb3J0Zm9saW9Cb3hJbWFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3J0Zm9saW8tcGFnZV9fYm94LWltYWdlJyk7XHJcbiAgICB2YXIgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib3gtY2xvc2VkJyk7XHJcbiAgICB2YXIgdGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50ZXh0LWNsb3NlZCcpO1xyXG5cclxuICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+IERFU0tUT1BfV0lEVEgpIHtcclxuXHJcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcclxuXHJcbiAgICAgIHZhciBvcGVuID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHBvcnRmb2xpb0JveEltYWdlLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVZKC0xNzAlKSc7XHJcbiAgICAgICAgcG9ydGZvbGlvQm94LnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVZKC0zMjAlKSc7XHJcbiAgICAgICAgcG9ydGZvbGlvQm94LnN0eWxlLnRyYW5zaXRpb25EZWxheSA9ICcnO1xyXG4gICAgICAgIHBvcnRmb2xpb0JveEltYWdlLnN0eWxlLnRyYW5zaXRpb25EZWxheSA9ICcnO1xyXG4gICAgICAgIHBvcnRmb2xpb1BhZ2UuY2xhc3NMaXN0LmFkZCgncG9ydGZvbGlvLXBhZ2VfX2NvbXBhbnktLWFjdGl2ZScpO1xyXG4gICAgICAgIHBvcnRmb2xpb0JveEFkZC5jbGFzc0xpc3QuYWRkKCdwb3J0Zm9saW8tcGFnZV9fYm94LWFkZC0tYWN0aXZlJyk7XHJcbiAgICAgICAgc2V0VGltZW91dChncmlkT3BlbiwgNjAwKTtcclxuICAgICAgfTtcclxuXHJcbiAgICAgIHZhciBjbG9zZWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcG9ydGZvbGlvQm94SW1hZ2Uuc3R5bGUudHJhbnNmb3JtID0gJyc7XHJcbiAgICAgICAgcG9ydGZvbGlvQm94LnN0eWxlLnRyYW5zZm9ybSA9ICcnO1xyXG4gICAgICAgIHBvcnRmb2xpb0JveC5zdHlsZS50cmFuc2l0aW9uRGVsYXkgPSAnMC4zcyc7XHJcbiAgICAgICAgcG9ydGZvbGlvQm94SW1hZ2Uuc3R5bGUudHJhbnNpdGlvbkRlbGF5ID0gJzAuM3MnO1xyXG4gICAgICAgIHBvcnRmb2xpb1BhZ2UuY2xhc3NMaXN0LnJlbW92ZSgncG9ydGZvbGlvLXBhZ2VfX2NvbXBhbnktLWFjdGl2ZScpO1xyXG4gICAgICAgIHBvcnRmb2xpb0JveEFkZC5jbGFzc0xpc3QucmVtb3ZlKCdwb3J0Zm9saW8tcGFnZV9fYm94LWFkZC0tYWN0aXZlJyk7XHJcbiAgICAgICAgc2V0VGltZW91dChncmlkQ2xvc2VkLCA0MDApO1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgdmFyIGNsb3NlZE1haW4gPSBmdW5jdGlvbiAoZXZ0KSB7XHJcblxyXG4gICAgICAgIGlmIChldnQudGFyZ2V0ID09PSBtYWluKSB7XHJcblxyXG4gICAgICAgICAgcG9ydGZvbGlvUGFnZS5jbGFzc0xpc3QucmVtb3ZlKCdwb3J0Zm9saW8tcGFnZV9fY29tcGFueS0tYWN0aXZlJyk7XHJcbiAgICAgICAgICBwb3J0Zm9saW9Cb3hBZGQuY2xhc3NMaXN0LnJlbW92ZSgncG9ydGZvbGlvLXBhZ2VfX2JveC1hZGQtLWFjdGl2ZScpO1xyXG4gICAgICAgICAgcG9ydGZvbGlvQm94SW1hZ2Uuc3R5bGUudHJhbnNmb3JtID0gJyc7XHJcbiAgICAgICAgICBwb3J0Zm9saW9Cb3guc3R5bGUudHJhbnNmb3JtID0gJyc7XHJcbiAgICAgICAgICBwb3J0Zm9saW9Cb3guc3R5bGUudHJhbnNpdGlvbkRlbGF5ID0gJyc7XHJcbiAgICAgICAgICBwb3J0Zm9saW9Cb3hJbWFnZS5zdHlsZS50cmFuc2l0aW9uRGVsYXkgPSAnJztcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgfTtcclxuXHJcbiAgICAgIHZhciBjbG9zZWRUZXh0ID0gZnVuY3Rpb24gKGV2dCkge1xyXG5cclxuICAgICAgICBpZiAoZXZ0LnRhcmdldCA9PT0gdGV4dCkge1xyXG5cclxuICAgICAgICAgIHBvcnRmb2xpb1BhZ2UuY2xhc3NMaXN0LnJlbW92ZSgncG9ydGZvbGlvLXBhZ2VfX2NvbXBhbnktLWFjdGl2ZScpO1xyXG4gICAgICAgICAgcG9ydGZvbGlvQm94QWRkLmNsYXNzTGlzdC5yZW1vdmUoJ3BvcnRmb2xpby1wYWdlX19ib3gtYWRkLS1hY3RpdmUnKTtcclxuICAgICAgICAgIHBvcnRmb2xpb0JveEltYWdlLnN0eWxlLnRyYW5zZm9ybSA9ICcnO1xyXG4gICAgICAgICAgcG9ydGZvbGlvQm94LnN0eWxlLnRyYW5zZm9ybSA9ICcnO1xyXG4gICAgICAgICAgcG9ydGZvbGlvQm94LnN0eWxlLnRyYW5zaXRpb25EZWxheSA9ICcnO1xyXG4gICAgICAgICAgcG9ydGZvbGlvQm94SW1hZ2Uuc3R5bGUudHJhbnNpdGlvbkRlbGF5ID0gJyc7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgIH07XHJcblxyXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignd2hlZWwnLCBmdW5jdGlvbiAoZXZ0KSB7XHJcblxyXG4gICAgICAgIGlmIChldnQuZGVsdGFZID4gMCAmJiB3aW5kb3cuaW5uZXJXaWR0aCA+IERFU0tUT1BfV0lEVEgpIHtcclxuICAgICAgICAgIG9wZW4oKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHBvcnRmb2xpb1BhZ2Uuc2Nyb2xsVG9wID09PSAwKSB7XHJcbiAgICAgICAgICBjbG9zZWQoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICB9KVxyXG5cclxuICAgICAgbWFpbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlZE1haW4pO1xyXG4gICAgICB0ZXh0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VkVGV4dCk7XHJcblxyXG4gICAgICBmdW5jdGlvbiBncmlkT3BlbigpIHtcclxuICAgICAgICBwb3J0Zm9saW9XcmFwcGVyLnN0eWxlLmdyaWRUZW1wbGF0ZUNvbHVtbnMgPSAnMjglIGF1dG8gYXV0byc7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGZ1bmN0aW9uIGdyaWRDbG9zZWQoKSB7XHJcbiAgICAgICAgcG9ydGZvbGlvV3JhcHBlci5zdHlsZS5ncmlkVGVtcGxhdGVDb2x1bW5zID0gJyc7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG59KSgpO1xyXG4ndXNlIHN0cmljdCc7XHJcblxyXG4oZnVuY3Rpb24gKCkge1xyXG5cclxuICBjb25zdCBLRVlfQ09ERSA9IDI3O1xyXG5cclxuICB2YXIgb3ZlcmxheU1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsJyk7XHJcbiAgdmFyIG1vZGFsQ29uc3VsdGF0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLWNvbnN1bHRhdGlvbicpO1xyXG5cclxuICBpZiAobW9kYWxDb25zdWx0YXRpb24pIHtcclxuXHJcbiAgICAvLyB2YXIgbW9kYWxUaGFua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtdGhhbmtzJyk7XHJcbiAgICB2YXIgbW9kYWxDb25zdWx0YXRpb25CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYnV0dG9uLS1jb25zdWx0YXRpb24nKTtcclxuICAgIHZhciBtb2RhbENsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1vZGFsX19idG4tY2xvc2VkJyk7XHJcblxyXG4gICAgZm9yKHZhciB5ID0gMDsgeSA8IG1vZGFsQ29uc3VsdGF0aW9uQnRuLmxlbmd0aDsgeSsrKSB7XHJcblxyXG4gICAgICBtb2RhbENvbnN1bHRhdGlvbkJ0blt5XS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldnQpIHtcclxuICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgbW9kYWxDb25zdWx0YXRpb24uY2xhc3NMaXN0LmFkZCgnbW9kYWwtYWN0aXZlJyk7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtb2RhbENsb3NlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIG1vZGFsQ2xvc2VbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZ0KSB7XHJcbiAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIC8vIG1vZGFsVGhhbmtzLmNsYXNzTGlzdC5yZW1vdmUoJ21vZGFsLWFjdGl2ZScpO1xyXG4gICAgICAgIG1vZGFsQ29uc3VsdGF0aW9uLmNsYXNzTGlzdC5yZW1vdmUoJ21vZGFsLWFjdGl2ZScpO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnJztcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoYGtleWRvd25gLCBmdW5jdGlvbiAoZXZ0KSB7XHJcblxyXG4gICAgICBpZiAoZXZ0LmtleUNvZGUgPT09IEtFWV9DT0RFKSB7XHJcbiAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIG1vZGFsQ29uc3VsdGF0aW9uLmNsYXNzTGlzdC5jb250YWlucyhgbW9kYWwtYWN0aXZlYCk7XHJcbiAgICAgICAgbW9kYWxDb25zdWx0YXRpb24uY2xhc3NMaXN0LnJlbW92ZShgbW9kYWwtYWN0aXZlYCk7XHJcbiAgICAgICAgLy8gbW9kYWxUaGFua3MuY2xhc3NMaXN0LmNvbnRhaW5zKCdtb2RhbC1hY3RpdmUnKTtcclxuICAgICAgICAvLyBtb2RhbFRoYW5rcy5jbGFzc0xpc3QucmVtb3ZlKCdtb2RhbC1hY3RpdmUnKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gYGA7XHJcblxyXG4gICAgICB9XHJcblxyXG4gICAgfSk7XHJcblxyXG4gICAgb3ZlcmxheU1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoYGNsaWNrYCwgZnVuY3Rpb24gKGV2dCkge1xyXG5cclxuICAgICAgaWYgKGV2dC50YXJnZXQgPT09IG92ZXJsYXlNb2RhbCkge1xyXG5cclxuICAgICAgICBtb2RhbENvbnN1bHRhdGlvbi5jbGFzc0xpc3QucmVtb3ZlKGBtb2RhbC1hY3RpdmVgKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gYGA7XHJcblxyXG4gICAgICB9XHJcblxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gbW9kYWxUaGFua3MuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZ0KSB7XHJcbiAgICAvL1xyXG4gICAgLy8gICBpZiAoZXZ0LnRhcmdldCA9PT0gbW9kYWxUaGFua3MpIHtcclxuICAgIC8vICAgICBtb2RhbFRoYW5rcy5jbGFzc0xpc3QuY29udGFpbnMoJ21vZGFsLWFjdGl2ZScpO1xyXG4gICAgLy8gICAgIG1vZGFsVGhhbmtzLmNsYXNzTGlzdC5yZW1vdmUoJ21vZGFsLWFjdGl2ZScpO1xyXG4gICAgLy8gICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBgYDtcclxuICAgIC8vICAgfVxyXG4gICAgLy9cclxuICAgIC8vIH0pXHJcblxyXG4gIH1cclxuXHJcbn0pKCk7XHJcbid1c2Ugc3RyaWN0JztcclxuXHJcbihmdW5jdGlvbiAoKSB7XHJcblxyXG4gICQoZG9jdW1lbnQpLm9uKCdtc2UyX2xvYWQnLCBmdW5jdGlvbihlLCBkYXRhKSB7XHJcblxyXG4gICAgY29uc3QgS0VZX0NPREUgPSAyNztcclxuXHJcbiAgICB2YXIgb3ZlcmxheU1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsJyk7XHJcbiAgICB2YXIgcG9ydGZvbGlvQ2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tb2RhbHMtZGV2ZWxvcG1lbnQnKTtcclxuICAgIHZhciBtb2RhbERldmVsb3BtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLWRldmVsb3BtZW50Jyk7XHJcbiAgICB2YXIgbW9kYWxDbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tb2RhbF9fYnRuLWNsb3NlZCcpO1xyXG5cclxuICAgIGlmIChtb2RhbERldmVsb3BtZW50KSB7XHJcblxyXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG1vZGFsQ2xvc2UubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBtb2RhbENsb3NlW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2dCkge1xyXG4gICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgbW9kYWxEZXZlbG9wbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdtb2RhbC1hY3RpdmUnKTtcclxuICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnJztcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwb3J0Zm9saW9DYXJkLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgcG9ydGZvbGlvQ2FyZFtpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldnQpIHtcclxuICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgIG1vZGFsRGV2ZWxvcG1lbnQuY2xhc3NMaXN0LmFkZCgnbW9kYWwtYWN0aXZlJyk7XHJcbiAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihga2V5ZG93bmAsIGZ1bmN0aW9uIChldnQpIHtcclxuXHJcbiAgICAgICAgaWYgKGV2dC5rZXlDb2RlID09PSBLRVlfQ09ERSkge1xyXG4gICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgbW9kYWxEZXZlbG9wbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ21vZGFsLWFjdGl2ZScpO1xyXG4gICAgICAgICAgbW9kYWxEZXZlbG9wbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdtb2RhbC1hY3RpdmUnKTtcclxuICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBgYDtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgfSk7XHJcblxyXG4gICAgICBvdmVybGF5TW9kYWwuYWRkRXZlbnRMaXN0ZW5lcihgY2xpY2tgLCBmdW5jdGlvbiAoZXZ0KSB7XHJcblxyXG4gICAgICAgIGlmIChldnQudGFyZ2V0ID09PSBvdmVybGF5TW9kYWwpIHtcclxuXHJcbiAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gYGA7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgbW9kYWxEZXZlbG9wbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldnQpIHtcclxuXHJcbiAgICAgICAgaWYgKGV2dC50YXJnZXQgPT09IG1vZGFsRGV2ZWxvcG1lbnQpIHtcclxuICAgICAgICAgIG1vZGFsRGV2ZWxvcG1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdtb2RhbC1hY3RpdmUnKTtcclxuICAgICAgICAgIG1vZGFsRGV2ZWxvcG1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnbW9kYWwtYWN0aXZlJyk7XHJcbiAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gYGA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgfSlcclxuXHJcbiAgICB9XHJcblxyXG4gIH0pO1xyXG5cclxufSkoKTtcclxuJ3VzZSBzdHJpY3QnO1xyXG5cclxuKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgY29uc3QgS0VZX0NPREUgPSAyNztcclxuXHJcbiAgdmFyIG92ZXJsYXlNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpO1xyXG4gIHZhciBtb2RhbFRoYW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC10aGFua3MnKTtcclxuICB2YXIgbW9kYWxDbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tb2RhbF9fYnRuLWNsb3NlZCcpO1xyXG5cclxuICBpZiAobW9kYWxUaGFua3MpIHtcclxuXHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG1vZGFsQ2xvc2UubGVuZ3RoOyBpKyspIHtcclxuICAgICAgbW9kYWxDbG9zZVtpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldnQpIHtcclxuICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgbW9kYWxUaGFua3MuY2xhc3NMaXN0LnJlbW92ZSgnbW9kYWwtYWN0aXZlJyk7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICcnO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihga2V5ZG93bmAsIGZ1bmN0aW9uIChldnQpIHtcclxuXHJcbiAgICAgIGlmIChldnQua2V5Q29kZSA9PT0gS0VZX0NPREUpIHtcclxuICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgbW9kYWxUaGFua3MuY2xhc3NMaXN0LmNvbnRhaW5zKCdtb2RhbC1hY3RpdmUnKTtcclxuICAgICAgICBtb2RhbFRoYW5rcy5jbGFzc0xpc3QucmVtb3ZlKCdtb2RhbC1hY3RpdmUnKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gYGA7XHJcblxyXG4gICAgICB9XHJcblxyXG4gICAgfSk7XHJcblxyXG4gICAgb3ZlcmxheU1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoYGNsaWNrYCwgZnVuY3Rpb24gKGV2dCkge1xyXG5cclxuICAgICAgaWYgKGV2dC50YXJnZXQgPT09IG92ZXJsYXlNb2RhbCkge1xyXG5cclxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gYGA7XHJcblxyXG4gICAgICB9XHJcblxyXG4gICAgfSk7XHJcblxyXG4gICAgbW9kYWxUaGFua3MuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZ0KSB7XHJcblxyXG4gICAgICBpZiAoZXZ0LnRhcmdldCA9PT0gbW9kYWxUaGFua3MpIHtcclxuICAgICAgICBtb2RhbFRoYW5rcy5jbGFzc0xpc3QuY29udGFpbnMoJ21vZGFsLWFjdGl2ZScpO1xyXG4gICAgICAgIG1vZGFsVGhhbmtzLmNsYXNzTGlzdC5yZW1vdmUoJ21vZGFsLWFjdGl2ZScpO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBgYDtcclxuICAgICAgfVxyXG5cclxuICAgIH0pXHJcblxyXG4gIH1cclxuXHJcbn0pKCk7XHJcbid1c2Ugc3RyaWN0JztcclxuXHJcbihmdW5jdGlvbiAoKSB7XHJcblxyXG4gIGNvbnN0IEtFWV9DT0RFID0gMjc7XHJcblxyXG4gIHZhciBvdmVybGF5TW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKTtcclxuICB2YXIgbW9kYWxGZWVkYmFjayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1mZWVkYmFjaycpO1xyXG4gIHZhciBtb2RhbEZlZWRiYWNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZlZWRiYWNrLWJ0bicpO1xyXG4gIC8vIHZhciBtb2RhbFRoYW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC10aGFua3MnKTtcclxuICB2YXIgbW9kYWxDbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tb2RhbF9fYnRuLWNsb3NlZCcpO1xyXG5cclxuICBpZiAobW9kYWxGZWVkYmFja0J0bikge1xyXG5cclxuICAgIG1vZGFsRmVlZGJhY2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZ0KSB7XHJcbiAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgbW9kYWxGZWVkYmFjay5jbGFzc0xpc3QuYWRkKCdtb2RhbC1hY3RpdmUnKTtcclxuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtb2RhbENsb3NlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIG1vZGFsQ2xvc2VbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZ0KSB7XHJcbiAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIC8vIG1vZGFsVGhhbmtzLmNsYXNzTGlzdC5yZW1vdmUoJ21vZGFsLWFjdGl2ZScpO1xyXG4gICAgICAgIG1vZGFsRmVlZGJhY2suY2xhc3NMaXN0LnJlbW92ZSgnbW9kYWwtYWN0aXZlJyk7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICcnO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihga2V5ZG93bmAsIGZ1bmN0aW9uIChldnQpIHtcclxuXHJcbiAgICAgIGlmIChldnQua2V5Q29kZSA9PT0gS0VZX0NPREUpIHtcclxuICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgbW9kYWxGZWVkYmFjay5jbGFzc0xpc3QuY29udGFpbnMoYG1vZGFsLWFjdGl2ZWApO1xyXG4gICAgICAgIG1vZGFsRmVlZGJhY2suY2xhc3NMaXN0LnJlbW92ZShgbW9kYWwtYWN0aXZlYCk7XHJcbiAgICAgICAgLy8gbW9kYWxUaGFua3MuY2xhc3NMaXN0LmNvbnRhaW5zKCdtb2RhbC1hY3RpdmUnKTtcclxuICAgICAgICAvLyBtb2RhbFRoYW5rcy5jbGFzc0xpc3QucmVtb3ZlKCdtb2RhbC1hY3RpdmUnKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gYGA7XHJcblxyXG4gICAgICB9XHJcblxyXG4gICAgfSk7XHJcblxyXG4gICAgb3ZlcmxheU1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoYGNsaWNrYCwgZnVuY3Rpb24gKGV2dCkge1xyXG5cclxuICAgICAgaWYgKGV2dC50YXJnZXQgPT09IG92ZXJsYXlNb2RhbCkge1xyXG5cclxuICAgICAgICBtb2RhbEZlZWRiYWNrLmNsYXNzTGlzdC5yZW1vdmUoYG1vZGFsLWFjdGl2ZWApO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBgYDtcclxuXHJcbiAgICAgIH1cclxuXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBtb2RhbFRoYW5rcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldnQpIHtcclxuICAgIC8vXHJcbiAgICAvLyAgIGlmIChldnQudGFyZ2V0ID09PSBtb2RhbFRoYW5rcykge1xyXG4gICAgLy8gICAgIG1vZGFsVGhhbmtzLmNsYXNzTGlzdC5jb250YWlucygnbW9kYWwtYWN0aXZlJyk7XHJcbiAgICAvLyAgICAgbW9kYWxUaGFua3MuY2xhc3NMaXN0LnJlbW92ZSgnbW9kYWwtYWN0aXZlJyk7XHJcbiAgICAvLyAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IGBgO1xyXG4gICAgLy8gICB9XHJcbiAgICAvL1xyXG4gICAgLy8gfSlcclxuXHJcbiAgfVxyXG5cclxufSkoKTtcclxuJ3VzZSBzdHJpY3QnO1xyXG5cclxuKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgY29uc3QgS0VZX0NPREUgPSAyNztcclxuXHJcbiAgdmFyIG92ZXJsYXlNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpO1xyXG4gIHZhciBtb2RhbEFuYWx5c2lzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLWFuYWx5c2lzJyk7XHJcbiAgdmFyIG1vZGFsQW5hbHlzaXNCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYW5hbHlzaXMtYnRuJyk7XHJcbiAgLy8gdmFyIG1vZGFsVGhhbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLXRoYW5rcycpO1xyXG4gIHZhciBtb2RhbENsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1vZGFsX19idG4tY2xvc2VkJyk7XHJcblxyXG4gIGlmIChtb2RhbEFuYWx5c2lzQnRuKSB7XHJcblxyXG4gICAgbW9kYWxBbmFseXNpc0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldnQpIHtcclxuICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICBtb2RhbEFuYWx5c2lzLmNsYXNzTGlzdC5hZGQoJ21vZGFsLWFjdGl2ZScpO1xyXG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XHJcbiAgICB9KTtcclxuXHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG1vZGFsQ2xvc2UubGVuZ3RoOyBpKyspIHtcclxuICAgICAgbW9kYWxDbG9zZVtpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldnQpIHtcclxuICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgLy8gbW9kYWxUaGFua3MuY2xhc3NMaXN0LnJlbW92ZSgnbW9kYWwtYWN0aXZlJyk7XHJcbiAgICAgICAgbW9kYWxBbmFseXNpcy5jbGFzc0xpc3QucmVtb3ZlKCdtb2RhbC1hY3RpdmUnKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJyc7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKGBrZXlkb3duYCwgZnVuY3Rpb24gKGV2dCkge1xyXG5cclxuICAgICAgaWYgKGV2dC5rZXlDb2RlID09PSBLRVlfQ09ERSkge1xyXG4gICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICBtb2RhbEFuYWx5c2lzLmNsYXNzTGlzdC5jb250YWlucyhgbW9kYWwtYWN0aXZlYCk7XHJcbiAgICAgICAgbW9kYWxBbmFseXNpcy5jbGFzc0xpc3QucmVtb3ZlKGBtb2RhbC1hY3RpdmVgKTtcclxuICAgICAgICAvLyBtb2RhbFRoYW5rcy5jbGFzc0xpc3QuY29udGFpbnMoJ21vZGFsLWFjdGl2ZScpO1xyXG4gICAgICAgIC8vIG1vZGFsVGhhbmtzLmNsYXNzTGlzdC5yZW1vdmUoJ21vZGFsLWFjdGl2ZScpO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBgYDtcclxuXHJcbiAgICAgIH1cclxuXHJcbiAgICB9KTtcclxuXHJcbiAgICBvdmVybGF5TW9kYWwuYWRkRXZlbnRMaXN0ZW5lcihgY2xpY2tgLCBmdW5jdGlvbiAoZXZ0KSB7XHJcblxyXG4gICAgICBpZiAoZXZ0LnRhcmdldCA9PT0gb3ZlcmxheU1vZGFsKSB7XHJcblxyXG4gICAgICAgIG1vZGFsQW5hbHlzaXMuY2xhc3NMaXN0LnJlbW92ZShgbW9kYWwtYWN0aXZlYCk7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IGBgO1xyXG5cclxuICAgICAgfVxyXG5cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIG1vZGFsVGhhbmtzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2dCkge1xyXG4gICAgLy9cclxuICAgIC8vICAgaWYgKGV2dC50YXJnZXQgPT09IG1vZGFsVGhhbmtzKSB7XHJcbiAgICAvLyAgICAgbW9kYWxUaGFua3MuY2xhc3NMaXN0LmNvbnRhaW5zKCdtb2RhbC1hY3RpdmUnKTtcclxuICAgIC8vICAgICBtb2RhbFRoYW5rcy5jbGFzc0xpc3QucmVtb3ZlKCdtb2RhbC1hY3RpdmUnKTtcclxuICAgIC8vICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gYGA7XHJcbiAgICAvLyAgIH1cclxuICAgIC8vXHJcbiAgICAvLyB9KVxyXG5cclxuICB9XHJcblxyXG59KSgpO1xyXG4ndXNlIHN0cmljdCc7XHJcblxyXG4oZnVuY3Rpb24gKCkge1xyXG5cclxuICBjb25zdCBLRVlfQ09ERSA9IDI3O1xyXG5cclxuICB2YXIgb3ZlcmxheU1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsJyk7XHJcbiAgdmFyIG1vZGFsQ29uc3VsdGF0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLWNvbnN1bHRhdGlvbicpO1xyXG5cclxuICBpZiAobW9kYWxDb25zdWx0YXRpb24pIHtcclxuXHJcbiAgICAvLyB2YXIgbW9kYWxUaGFua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtdGhhbmtzJyk7XHJcbiAgICB2YXIgbW9kYWxDb25zdWx0YXRpb25CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9ydGZvbGlvLW1vZGFsLWpzJyk7XHJcbiAgICB2YXIgbW9kYWxDbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tb2RhbF9fYnRuLWNsb3NlZCcpO1xyXG5cclxuICAgICAgbW9kYWxDb25zdWx0YXRpb25CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZ0KSB7XHJcbiAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIG1vZGFsQ29uc3VsdGF0aW9uLmNsYXNzTGlzdC5hZGQoJ21vZGFsLWFjdGl2ZScpO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcclxuICAgICAgfSk7XHJcblxyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtb2RhbENsb3NlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIG1vZGFsQ2xvc2VbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZ0KSB7XHJcbiAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIC8vIG1vZGFsVGhhbmtzLmNsYXNzTGlzdC5yZW1vdmUoJ21vZGFsLWFjdGl2ZScpO1xyXG4gICAgICAgIG1vZGFsQ29uc3VsdGF0aW9uLmNsYXNzTGlzdC5yZW1vdmUoJ21vZGFsLWFjdGl2ZScpO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnJztcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoYGtleWRvd25gLCBmdW5jdGlvbiAoZXZ0KSB7XHJcblxyXG4gICAgICBpZiAoZXZ0LmtleUNvZGUgPT09IEtFWV9DT0RFKSB7XHJcbiAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIG1vZGFsQ29uc3VsdGF0aW9uLmNsYXNzTGlzdC5jb250YWlucyhgbW9kYWwtYWN0aXZlYCk7XHJcbiAgICAgICAgbW9kYWxDb25zdWx0YXRpb24uY2xhc3NMaXN0LnJlbW92ZShgbW9kYWwtYWN0aXZlYCk7XHJcbiAgICAgICAgLy8gbW9kYWxUaGFua3MuY2xhc3NMaXN0LmNvbnRhaW5zKCdtb2RhbC1hY3RpdmUnKTtcclxuICAgICAgICAvLyBtb2RhbFRoYW5rcy5jbGFzc0xpc3QucmVtb3ZlKCdtb2RhbC1hY3RpdmUnKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gYGA7XHJcblxyXG4gICAgICB9XHJcblxyXG4gICAgfSk7XHJcblxyXG4gICAgb3ZlcmxheU1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoYGNsaWNrYCwgZnVuY3Rpb24gKGV2dCkge1xyXG5cclxuICAgICAgaWYgKGV2dC50YXJnZXQgPT09IG92ZXJsYXlNb2RhbCkge1xyXG5cclxuICAgICAgICBtb2RhbENvbnN1bHRhdGlvbi5jbGFzc0xpc3QucmVtb3ZlKGBtb2RhbC1hY3RpdmVgKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gYGA7XHJcblxyXG4gICAgICB9XHJcblxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gbW9kYWxUaGFua3MuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZ0KSB7XHJcbiAgICAvL1xyXG4gICAgLy8gICBpZiAoZXZ0LnRhcmdldCA9PT0gbW9kYWxUaGFua3MpIHtcclxuICAgIC8vICAgICBtb2RhbFRoYW5rcy5jbGFzc0xpc3QuY29udGFpbnMoJ21vZGFsLWFjdGl2ZScpO1xyXG4gICAgLy8gICAgIG1vZGFsVGhhbmtzLmNsYXNzTGlzdC5yZW1vdmUoJ21vZGFsLWFjdGl2ZScpO1xyXG4gICAgLy8gICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBgYDtcclxuICAgIC8vICAgfVxyXG4gICAgLy9cclxuICAgIC8vIH0pXHJcblxyXG4gIH1cclxuXHJcbn0pKCk7XHJcbid1c2Ugc3RyaWN0JztcclxuXHJcbihmdW5jdGlvbiAoKSB7XHJcblxyXG4gICQoZG9jdW1lbnQpLm9uKCdhZl9jb21wbGV0ZScsIGZ1bmN0aW9uIChldmVudCwgcmVzcG9uc2UpIHtcclxuXHJcbiAgICB2YXIgbW9kYWxDb25zdWx0YXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtY29uc3VsdGF0aW9uJyk7XHJcbiAgICB2YXIgbW9kYWxUaGFua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtdGhhbmtzJyk7XHJcbiAgICB2YXIgZm9ybSA9IHJlc3BvbnNlLmZvcm07XHJcblxyXG4gICAgaWYgKGZvcm0uYXR0cignaWQnKSA9PT0gJ2Zvcm0nKSB7XHJcblxyXG4gICAgICBtb2RhbFRoYW5rcy5jbGFzc0xpc3QuYWRkKCdtb2RhbC1hY3RpdmUnKTtcclxuICAgICAgbW9kYWxDb25zdWx0YXRpb24uY2xhc3NMaXN0LnJlbW92ZSgnbW9kYWwtYWN0aXZlJyk7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnJztcclxuICAgICAgLy8gcmVzcG9uc2UubWVzc2FnZSA9ICcnO1xyXG5cclxuICAgIH0gZWxzZSBpZiAoZm9ybS5hdHRyKCdpZCcpID09PSAnZm9ybV9tYWluJykge1xyXG4gICAgICBtb2RhbFRoYW5rcy5jbGFzc0xpc3QuYWRkKCdtb2RhbC1hY3RpdmUnKTtcclxuICAgICAgbW9kYWxDb25zdWx0YXRpb24uY2xhc3NMaXN0LnJlbW92ZSgnbW9kYWwtYWN0aXZlJyk7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnJztcclxuICAgICAgLy8gcmVzcG9uc2UubWVzc2FnZSA9ICcnO1xyXG4gICAgfVxyXG5cclxuICAgIGVsc2Uge1xyXG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICB9XHJcblxyXG4gIH0pO1xyXG5cclxufSkoKTtcclxuJ3VzZSBzdHJpY3QnO1xyXG5cclxuKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgdmFyIGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2FbaHJlZl49XCJ0ZWw6XCJdJyk7XHJcblxyXG4gIHZhciByZXNpemVXaW5kb3cgPSBmdW5jdGlvbiAoZXZ0KSB7XHJcbiAgICBpZiAod2luZG93LmlubmVyV2lkdGggPD0gMTAyMykge1xyXG4gICAgICBldnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBldnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBidG4uZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlc2l6ZVdpbmRvdyk7XHJcbiAgfSk7XHJcblxyXG4gIGJ0bi5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHJlc2l6ZVdpbmRvdyk7XHJcbiAgfSk7XHJcblxyXG59KSgpO1xyXG4ndXNlIHN0cmljdCc7XHJcblxyXG4oZnVuY3Rpb24gKCkge1xyXG5cclxuICB2YXIgZmVlZGJhY2tMb2dvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZlZWRiYWNrX19ib3gtbG9nb3R5cGVzJyk7XHJcblxyXG4gIGlmIChmZWVkYmFja0xvZ28pIHtcclxuICAgIGNvbnN0IERFU0tUT1BfV0lEVEggPSAxMDIzO1xyXG5cclxuICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+IERFU0tUT1BfV0lEVEgpIHtcclxuXHJcbiAgICAgIHZhciBmZWVkYmFja0JveEluZm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZmVlZGJhY2tfX2JveC1pbmZvIGEnKTtcclxuICAgICAgdmFyIGZlZWRiYWNrQXJ0aWNsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mZWVkYmFja19fYm94IGFydGljbGUnKTtcclxuXHJcbiAgICAgIHZhciByZW1vdmVBY3RpdmUgPSBmdW5jdGlvbiAoYXJyYXksIGFjdGl2ZUNsYXNzKSB7XHJcbiAgICAgICAgYXJyYXkuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKGFjdGl2ZUNsYXNzKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH07XHJcblxyXG4gICAgICBpZiAoZmVlZGJhY2tCb3hJbmZvKSB7XHJcbiAgICAgICAgZmVlZGJhY2tCb3hJbmZvLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0sIGkpIHtcclxuICAgICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZ0KSB7XHJcbiAgICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgcmVtb3ZlQWN0aXZlKGZlZWRiYWNrQm94SW5mbywgJ2ZlZWRiYWNrX19ib3gtaW5mby0tYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIHJlbW92ZUFjdGl2ZShmZWVkYmFja0FydGljbGUsICdmZWVkYmFjay1hY3RpdmUnKTtcclxuICAgICAgICAgICAgZmVlZGJhY2tCb3hJbmZvW2ldLmNsYXNzTGlzdC5hZGQoJ2ZlZWRiYWNrX19ib3gtaW5mby0tYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIGZlZWRiYWNrQXJ0aWNsZVtpXS5jbGFzc0xpc3QuYWRkKCdmZWVkYmFjay1hY3RpdmUnKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufSkoKTtcclxuJ3VzZSBzdHJpY3QnO1xyXG5cclxuJChmdW5jdGlvbiAoKSB7XHJcblxyXG4gICQoJy5sYXp5WVQnKS5sYXp5WVQoKTtcclxuXHJcbiAgJCgnW2RhdGEtZmFuY3lib3g9XCJwaG90b1wiXScpLmZhbmN5Ym94KHtcclxuICAgIGJ1dHRvbnM6IFtcclxuICAgICAgJ3NsaWRlU2hvdycsXHJcbiAgICAgICdzaGFyZScsXHJcbiAgICAgICd6b29tJyxcclxuICAgICAgJ2Z1bGxTY3JlZW4nLFxyXG4gICAgICAnY2xvc2UnXHJcbiAgICBdLFxyXG4gIH0pO1xyXG5cclxufSk7Il0sImZpbGUiOiJtYWluLmpzIn0=
