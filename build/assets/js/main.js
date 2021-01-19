/*

  * подключение js-модулей
  * //= modules/file.js

*/

'use strict';

$(function () {

  $("#user_name").keyup(function () {
    if ($(this).val()) {
      $(this).addClass("not-empty");
    } else {
      $(this).removeClass("not-empty");
    }
  });

  $("#user_name2").keyup(function () {
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

  $("#user_phone2").keyup(function () {
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

  $("#user_site").keyup(function () {
    if ($(this).val()) {
      $(this).addClass('not-empty');
    } else {
      $(this).removeClass('not-empty');
    }
  });
  $("#user_phone-question").keyup(function () {
    if ($(this).val()) {
      $(this).addClass('not-empty');
    } else {
      $(this).removeClass('not-empty');
    }
  });

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

    $('#form-portfolio').validate({
      messages: {
        name: 'Введите ваше имя',
        phone: 'Введите ваш номер телефона',
      },
      errorElement: 'span',
    });

    $('#form-order').validate({
      messages: {
        name: 'Введите ваше имя',
        phone: 'Введите ваш номер телефона',
      },
      errorElement: 'span',
    });

    $('#form-analysis').validate({
      messages: {
        name: 'Введите ваше имя',
        phone: 'Введите ваш номер телефона',
      },
      errorElement: 'span',
    });

    $('#form-question').validate({
      messages: {
        phone: 'Введите ваш номер телефона',
      },
      errorElement: 'span',
    });

    $('#form-main').validate({
      messages: {
        phone: 'Введите ваш номер телефона',
      },
      errorElement: 'span',
    });

  var clipboard = new ClipboardJS('.user-button');
  var text = document.querySelector('.clip-text');
  clipboard.on('success', function(e) {
    text.style.display = 'block';
    setTimeout(clipText, 5000);
    e.clearSelection();
  });

  var clipText = function () {
    text.style.display = '';
  };

  document.ondragstart = test;
  //запрет на перетаскивание
  document.onselectstart = test;
  //запрет на выделение элементов страницы
  document.oncontextmenu = test;
  //запрет на выведение контекстного меню
  function test() {
    return false;
  }

  var maskList = $.masksSort($.masksLoad("assets/json/phone-codes.json"), ['#'], /[0-9]|#/, "mask");
  var maskOpts = {
    inputmask: {
      definitions: {
        '#': {
          validator: "[0-9]",
          cardinality: 1
        }
      },
      showMaskOnHover: false,
      autoUnmask: true,
      clearMaskOnLostFocus: true
    },
    match: /[0-9]/,
    replace: '#',
    list: maskList,
    listKey: "mask",
    onMaskChange: function(maskObj, determined) {}
  };

  $('#user_phone').change(function() {
    $('#user_phone').inputmask("remove");
    $('#user_phone').inputmasks(maskOpts);
  });

  $('#user_phone').change();

  $('#user_phone2').change(function() {
    $('#user_phone2').inputmask("remove");
    $('#user_phone2').inputmasks(maskOpts);
  });

  $('#user_phone2').change();

  $('#user_phone-question').change(function() {
    $('#user_phone-question').inputmask("remove");
    $('#user_phone-question').inputmasks(maskOpts);
  });

  $('#user_phone-question').change();


});
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
  var menuBtn = document.querySelector('.main-header__btn');
  var wrapMenu = document.querySelector('.main-header__wrap-menu');
  var stageMenuBtn = document.querySelector('.main-header__link-stage--closed');
  var servicesWrapMenuBtn = document.querySelector('.main-header__services--closed');
  var servicesMenuBtn = document.querySelector('.main-header__link-services');
  var servicesWrapMenu = document.querySelector('.main-header__services-nav--closed');
  var servicesMenu = document.querySelector('.main-header__services-nav');
  var stageMenu = document.querySelector('.main-header__stage-nav--closed');
  var stageWrapMenuBtn = document.querySelector('.main-header__stage-link');
  var mainPhone = document.querySelector('.main-header__box-phone');
  var mainBoxPhone = document.querySelector('.main-header__tel');

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
        document.body.style.overflow = 'hidden';
      } else {
        menuBtn.classList.add('main-header__btn--closed');
        menuBtn.classList.remove('main-header__btn--opened');
        wrapMenu.classList.remove('main-header__wrap-menu--active');
        servicesMenu.classList.remove('main-header__services-nav--opened');
        servicesMenu.classList.add('main-header__services-nav--closed');
        stageMenu.classList.remove('main-header__stage-nav--opened');
        stageMenu.classList.add('main-header__stage-nav--closed');
        document.body.style.overflow = '';
      }
    });

    if (servicesWrapMenuBtn) {

      servicesWrapMenuBtn.addEventListener('click', function (evt) {
        evt.preventDefault();

        if (servicesWrapMenuBtn.classList.contains('main-header__services--closed')) {
          servicesWrapMenuBtn.classList.remove('main-header__services--closed');
          servicesWrapMenuBtn.classList.add('main-header__services--opened');
          servicesWrapMenu.classList.remove('main-header__services-nav--closed');
          servicesWrapMenu.classList.add('main-header__services-nav--opened');
        } else {
          servicesWrapMenuBtn.classList.add('main-header__services--closed');
          servicesWrapMenuBtn.classList.remove('main-header__services--opened');
          servicesWrapMenu.classList.add('main-header__services-nav--closed');
          servicesWrapMenu.classList.remove('main-header__services-nav--opened');
        }
      });
    }

    if (stageMenuBtn && window.innerWidth <= 767) {

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

    }

    if (servicesMenuBtn && window.innerWidth <= 767) {

      servicesMenuBtn.addEventListener('click', function (evt) {
        evt.preventDefault();

        if (servicesMenu.classList.contains('main-header__services-nav--closed')) {
          servicesMenu.classList.remove('main-header__services-nav--closed');
          servicesMenu.classList.add('main-header__services-nav--opened');
          servicesMenuBtn.classList.remove('main-header__link-services--closed');
          servicesMenuBtn.classList.add('main-header__link-services--opened');
          wrapMenu.classList.remove('main-header__wrap-menu--active');
          stageMenu.classList.remove('main-header__stage-nav--opened');
          stageMenu.classList.add('main-header__stage-nav--closed');
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

    if (stageWrapMenuBtn && window.innerWidth <= 767) {

      stageWrapMenuBtn.addEventListener('click', function (evt) {
        evt.preventDefault();

        if (stageMenu.classList.contains('main-header__stage-nav--closed')) {
          stageMenu.classList.remove('main-header__stage-nav--closed');
          stageMenu.classList.add('main-header__stage-nav--opened');
        } else {
          stageMenu.classList.add('main-header__stage-nav--closed');
          stageMenu.classList.remove('main-header__stage-nav--opened');
        }
      });

    }
  }

  if (window.innerWidth <= 1023) {

    mainPhone.addEventListener('click', function (evt) {
      evt.preventDefault();

      mainBoxPhone.classList.toggle('main-header__tel--active');
    });

  }

})();
'use strict';

(function () {

  var mainSlider = document.querySelector('.intro__box-swiper-container');
  var servicesSlider = document.querySelector('.services__swiper-container');

  var servicesSliderDesk = function (el) {
    return new Swiper(el, {
      loop: true,
      speed: 1000,
      spaceBetween: 30,
      autoplay: {
        delay: 1200,
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
        1024: {
          slidesPerView: 2,
        }
      }
    });
  };

  if (servicesSlider) {
    servicesSliderDesk(servicesSlider);
  }

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

  var container = document.querySelector('.portfolio');

  if (container && window.innerWidth > 1023) {

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

    $(document).on('mse2_load', function (e, data) {

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
  }

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

  const DESKTOP_WIDTH = 1023;
  var portfolioPage = document.querySelector('.portfolio-page__company');

  if (portfolioPage && window.innerWidth > DESKTOP_WIDTH) {

    var portfolioBox = document.querySelector('.portfolio-page__box');
    var portfolioBoxAdd = document.querySelector('.portfolio-page__box-add');
    var portfolioWrapper = document.querySelector('.portfolio-page__wrapper');
    var portfolioBoxImage = document.querySelector('.portfolio-page__box-image');
    var main = document.querySelector('.box-closed');
    var text = document.querySelector('.text-closed');

    document.body.style.overflow = 'hidden';

    var open = function () {
      portfolioBoxImage.style.transform = 'translateY(-220%)';
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

})();
'use strict';

(function () {

  const KEY_CODE = 27;

  var overlayModal = document.querySelector('.modal');
  var modalConsultation = document.querySelector('.modal-consultation');

  if (modalConsultation) {

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

        modalConsultation.classList.remove('modal-active');
        document.body.style.overflow = '';
      });
    }

    window.addEventListener(`keydown`, function (evt) {

      if (evt.keyCode === KEY_CODE) {
        evt.preventDefault();

        modalConsultation.classList.contains(`modal-active`);
        modalConsultation.classList.remove(`modal-active`);
        document.body.style.overflow = ``;

      }

    });

    overlayModal.addEventListener(`click`, function (evt) {

      if (evt.target === overlayModal) {

        modalConsultation.classList.remove(`modal-active`);
        document.body.style.overflow = ``;

      }

    });

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

        modalFeedback.classList.remove('modal-active');
        document.body.style.overflow = '';
      });
    }

    window.addEventListener(`keydown`, function (evt) {

      if (evt.keyCode === KEY_CODE) {
        evt.preventDefault();

        modalFeedback.classList.contains(`modal-active`);
        modalFeedback.classList.remove(`modal-active`);
        document.body.style.overflow = ``;

      }

    });

    overlayModal.addEventListener(`click`, function (evt) {

      if (evt.target === overlayModal) {

        modalFeedback.classList.remove(`modal-active`);
        document.body.style.overflow = ``;

      }

    });

  }

})();
'use strict';

(function () {

  const KEY_CODE = 27;

  var overlayModal = document.querySelector('.modal');
  var modalAnalysis = document.querySelector('.modal-analysis');
  var modalAnalysisBtn = document.querySelector('.analysis-btn');
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

        modalAnalysis.classList.remove('modal-active');
        document.body.style.overflow = '';
      });
    }

    window.addEventListener(`keydown`, function (evt) {

      if (evt.keyCode === KEY_CODE) {
        evt.preventDefault();

        modalAnalysis.classList.contains(`modal-active`);
        modalAnalysis.classList.remove(`modal-active`);
        document.body.style.overflow = ``;

      }

    });

    overlayModal.addEventListener(`click`, function (evt) {

      if (evt.target === overlayModal) {

        modalAnalysis.classList.remove(`modal-active`);
        document.body.style.overflow = ``;

      }

    });

  }

})();
'use strict';

(function () {

  const KEY_CODE = 27;

  var overlayModal = document.querySelector('.modal');
  var modalConsultation = document.querySelector('.modal-consultation');
  var modalConsultationBtn = document.querySelector('.portfolio-modal-js');

  if (modalConsultationBtn) {

    var modalClose = document.querySelectorAll('.modal__btn-closed');

      modalConsultationBtn.addEventListener('click', function (evt) {
        evt.preventDefault();

        modalConsultation.classList.add('modal-active');
        document.body.style.overflow = 'hidden';
      });

    for (var i = 0; i < modalClose.length; i++) {
      modalClose[i].addEventListener('click', function (evt) {
        evt.preventDefault();

        modalConsultation.classList.remove('modal-active');
        document.body.style.overflow = '';
      });
    }

    window.addEventListener(`keydown`, function (evt) {

      if (evt.keyCode === KEY_CODE) {
        evt.preventDefault();

        modalConsultation.classList.contains(`modal-active`);
        modalConsultation.classList.remove(`modal-active`);
        document.body.style.overflow = ``;

      }

    });

    overlayModal.addEventListener(`click`, function (evt) {

      if (evt.target === overlayModal) {

        modalConsultation.classList.remove(`modal-active`);
        document.body.style.overflow = ``;

      }

    });

  }

  $(document).on('mse2_load', function(e, data) {

    const KEY_CODE = 27;

    var overlayModal = document.querySelector('.modal');
    var modalConsultation = document.querySelector('.modal-consultation');
    var modalConsultationBtn = document.querySelector('.portfolio-modal-js');

    if (modalConsultationBtn) {

      var modalClose = document.querySelectorAll('.modal__btn-closed');

      modalConsultationBtn.addEventListener('click', function (evt) {
        evt.preventDefault();

        modalConsultation.classList.add('modal-active');
        document.body.style.overflow = 'hidden';
      });

      for (var i = 0; i < modalClose.length; i++) {
        modalClose[i].addEventListener('click', function (evt) {
          evt.preventDefault();

          modalConsultation.classList.remove('modal-active');
          document.body.style.overflow = '';
        });
      }

      window.addEventListener(`keydown`, function (evt) {

        if (evt.keyCode === KEY_CODE) {
          evt.preventDefault();

          modalConsultation.classList.contains(`modal-active`);
          modalConsultation.classList.remove(`modal-active`);
          document.body.style.overflow = ``;

        }

      });

      overlayModal.addEventListener(`click`, function (evt) {

        if (evt.target === overlayModal) {

          modalConsultation.classList.remove(`modal-active`);
          document.body.style.overflow = ``;

        }

      });

    }

  });

})();
'use strict';

(function () {

  const KEY_CODE = 27;

  var overlayModal = document.querySelector('.modal');
  var modalQuestion = document.querySelector('.modal-question');
  var modalClose = document.querySelectorAll('.modal__btn-closed');
  var linkPhone = document.querySelectorAll('.link-modal-question');

  if (modalQuestion) {

    var modalShow = function (evt) {
      evt.preventDefault();

      modalQuestion.classList.add('modal-active');
      document.body.style.overflow = 'hidden';
    };

    linkPhone.forEach(function (item, i) {
      linkPhone[i].addEventListener('click', modalShow);
    })

    for (var i = 0; i < modalClose.length; i++) {
      modalClose[i].addEventListener('click', function (evt) {
        evt.preventDefault();

        modalQuestion.classList.remove('modal-active');
        document.body.style.overflow = '';
      });
    }

    window.addEventListener(`keydown`, function (evt) {

      if (evt.keyCode === KEY_CODE) {
        evt.preventDefault();

        modalQuestion.classList.contains('modal-active');
        modalQuestion.classList.remove('modal-active');
        document.body.style.overflow = ``;

      }

    });

    overlayModal.addEventListener(`click`, function (evt) {

      if (evt.target === overlayModal) {

        document.body.style.overflow = ``;

      }

    });

    modalQuestion.addEventListener('click', function (evt) {

      if (evt.target === modalQuestion) {
        modalQuestion.classList.contains('modal-active');
        modalQuestion.classList.remove('modal-active');
        document.body.style.overflow = ``;
      }

    })

  }

})();
'use strict';

(function () {

  const KEY_CODE = 27;

  var servicesModal = document.querySelector('.modal-services-order');

  if (servicesModal) {

    var modalServicesBtn = document.querySelectorAll('.services-modal-js');
    var modalClose = document.querySelectorAll('.modal__btn-closed');
    var servicesBanner = document.querySelector('.services__image-seo img');

    if (servicesBanner) {

      servicesBanner.addEventListener('click', function () {
        servicesModal.classList.add('modal-active');
        document.body.style.overflow = 'hidden';
      });
    }

    for (var y = 0; y < modalServicesBtn.length; y++) {

      modalServicesBtn[y].addEventListener('click', function (evt) {
        evt.preventDefault();

        servicesModal.classList.add('modal-active');
        document.body.style.overflow = 'hidden';
      });

    }

    for (var i = 0; i < modalClose.length; i++) {
      modalClose[i].addEventListener('click', function (evt) {
        evt.preventDefault();

        servicesModal.classList.remove('modal-active');
        document.body.style.overflow = '';
      });
    }

    window.addEventListener(`keydown`, function (evt) {

      if (evt.keyCode === KEY_CODE) {
        evt.preventDefault();

        servicesModal.classList.contains(`modal-active`);
        servicesModal.classList.remove(`modal-active`);
        document.body.style.overflow = ``;

      }

    });

    servicesModal.addEventListener(`click`, function (evt) {

      if (evt.target === servicesModal) {

        servicesModal.classList.remove(`modal-active`);
        document.body.style.overflow = ``;

      }

    });

  }

})();
'use strict';

(function () {

  $('.services__btn-tooltip').on('click', function () {
    if ($(this).hasClass('services__btn-tooltip--active')) {
      $(this).removeClass('services__btn-tooltip--active');

    } else {
      $(".services__btn-tooltip").removeClass('services__btn-tooltip--active');
      $(this).addClass('services__btn-tooltip--active');
    }
    if ($(this).parent().parent().parent().find('.services__text-box').hasClass('services__text-box--active')) {
      $(this).parent().parent().parent().find('.services__text-box').removeClass('services__text-box--active');
    } else {
      $('.services__text-box').removeClass('services__text-box--active');
      $(this).parent().parent().parent().find('.services__text-box').addClass('services__text-box--active');
    }
  });

  $('.services__btn-more').on('click', function () {
    if ($(this).hasClass('services__btn-more--active')) {
      $(this).removeClass('services__btn-more--active');

    } else {
      $(".services__btn-more").removeClass('services__btn-more--active');
      $(this).addClass('services__btn-more--active');
    }
    if ($(this).parent().find('.services__price-wrap').hasClass('services__price-wrap--active')) {
      $(this).parent().find('.services__price-wrap').removeClass('services__price-wrap--active');
    } else {
      $('.services__price-wrap').removeClass('services__price-wrap--active');
      $(this).parent().find('.services__price-wrap').addClass('services__price-wrap--active');
    }
  });

})();
'use strict';

(function () {

  $(document).on('af_complete', function (event, response) {

    var modalConsultation = document.querySelector('.modal-consultation');
    var modalFeedback = document.querySelector('.modal-feedback');
    var modalAnalysis = document.querySelector('.modal-analysis');
    var modalQuestion = document.querySelector('.modal-question');
    var modalServicesOrder = document.querySelector('.modal-services-order');
    var modalThanks = document.querySelector('.modal-thanks');
    var form = response.form;

    if (form.attr('id') === 'form-contacts') {
      modalThanks.classList.add('modal-active');
      response.message = '';

    } else if (form.attr('id') === 'form-portfolio') {
      modalThanks.classList.add('modal-active');
      modalConsultation.classList.remove('modal-active');
      response.message = '';

    } else if (form.attr('id') === 'form-main') {
      modalThanks.classList.add('modal-active');
      response.message = '';

    } else if (form.attr('id') === 'form-feedback') {
      modalFeedback.classList.remove('modal-active');
      modalThanks.classList.add('modal-active');
      response.message = '';

    } else if (form.attr('id') === 'form-analysis') {
      modalAnalysis.classList.remove('modal-active');
      modalThanks.classList.add('modal-active');
      response.message = '';

    } else if (form.attr('id') === 'form-question') {
      modalQuestion.classList.remove('modal-active');
      modalThanks.classList.add('modal-active');
      response.message = '';
    } else if (form.attr('id') === 'form-order') {
      modalServicesOrder.classList.remove('modal-active');
      modalThanks.classList.add('modal-active');
      response.message = '';
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

  const DESKTOP_WIDTH = 1023;
  var feedbackLogo = document.querySelector('.feedback__box-logotypes');

  if (feedbackLogo && window.innerWidth > DESKTOP_WIDTH) {

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

})();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qXHJcblxyXG4gICog0L/QvtC00LrQu9GO0YfQtdC90LjQtSBqcy3QvNC+0LTRg9C70LXQuVxyXG4gICogLy89IG1vZHVsZXMvZmlsZS5qc1xyXG5cclxuKi9cclxuXHJcbid1c2Ugc3RyaWN0JztcclxuXHJcbiQoZnVuY3Rpb24gKCkge1xyXG5cclxuICAkKFwiI3VzZXJfbmFtZVwiKS5rZXl1cChmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAoJCh0aGlzKS52YWwoKSkge1xyXG4gICAgICAkKHRoaXMpLmFkZENsYXNzKFwibm90LWVtcHR5XCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcyhcIm5vdC1lbXB0eVwiKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgJChcIiN1c2VyX25hbWUyXCIpLmtleXVwKGZ1bmN0aW9uICgpIHtcclxuICAgIGlmICgkKHRoaXMpLnZhbCgpKSB7XHJcbiAgICAgICQodGhpcykuYWRkQ2xhc3MoXCJub3QtZW1wdHlcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKFwibm90LWVtcHR5XCIpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICAkKFwiI3VzZXJfY29tcGFueVwiKS5rZXl1cChmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAoJCh0aGlzKS52YWwoKSkge1xyXG4gICAgICAkKHRoaXMpLmFkZENsYXNzKFwibm90LWVtcHR5XCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcyhcIm5vdC1lbXB0eVwiKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgJChcIiN1c2VyX3Bob25lXCIpLmtleXVwKGZ1bmN0aW9uICgpIHtcclxuICAgIGlmICgkKHRoaXMpLnZhbCgpKSB7XHJcbiAgICAgICQodGhpcykuYWRkQ2xhc3MoXCJub3QtZW1wdHlcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKFwibm90LWVtcHR5XCIpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICAkKFwiI3VzZXJfcGhvbmUyXCIpLmtleXVwKGZ1bmN0aW9uICgpIHtcclxuICAgIGlmICgkKHRoaXMpLnZhbCgpKSB7XHJcbiAgICAgICQodGhpcykuYWRkQ2xhc3MoXCJub3QtZW1wdHlcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKFwibm90LWVtcHR5XCIpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICAkKFwiI3VzZXJfZW1haWxcIikua2V5dXAoZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKCQodGhpcykudmFsKCkpIHtcclxuICAgICAgJCh0aGlzKS5hZGRDbGFzcyhcIm5vdC1lbXB0eVwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoXCJub3QtZW1wdHlcIik7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gICQoXCIjdXNlcl9jb21tZW50XCIpLmtleXVwKGZ1bmN0aW9uICgpIHtcclxuICAgIGlmICgkKHRoaXMpLnZhbCgpKSB7XHJcbiAgICAgICQodGhpcykuYWRkQ2xhc3MoJ25vdC1lbXB0eScpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnbm90LWVtcHR5Jyk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gICQoXCIjdXNlcl9jb21tZW50c1wiKS5rZXl1cChmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAoJCh0aGlzKS52YWwoKSkge1xyXG4gICAgICAkKHRoaXMpLmFkZENsYXNzKCdub3QtZW1wdHknKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ25vdC1lbXB0eScpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICAkKFwiI3VzZXJfcG9zaXRpb25cIikua2V5dXAoZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKCQodGhpcykudmFsKCkpIHtcclxuICAgICAgJCh0aGlzKS5hZGRDbGFzcygnbm90LWVtcHR5Jyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdub3QtZW1wdHknKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgJChcIiN1c2VyX3NpdGVcIikua2V5dXAoZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKCQodGhpcykudmFsKCkpIHtcclxuICAgICAgJCh0aGlzKS5hZGRDbGFzcygnbm90LWVtcHR5Jyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdub3QtZW1wdHknKTtcclxuICAgIH1cclxuICB9KTtcclxuICAkKFwiI3VzZXJfcGhvbmUtcXVlc3Rpb25cIikua2V5dXAoZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKCQodGhpcykudmFsKCkpIHtcclxuICAgICAgJCh0aGlzKS5hZGRDbGFzcygnbm90LWVtcHR5Jyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdub3QtZW1wdHknKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgJCgnLmxhenlZVCcpLmxhenlZVCgpO1xyXG5cclxuICAkKCdbZGF0YS1mYW5jeWJveD1cInBob3RvXCJdJykuZmFuY3lib3goe1xyXG4gICAgYnV0dG9uczogW1xyXG4gICAgICAnc2xpZGVTaG93JyxcclxuICAgICAgJ3NoYXJlJyxcclxuICAgICAgJ3pvb20nLFxyXG4gICAgICAnZnVsbFNjcmVlbicsXHJcbiAgICAgICdjbG9zZSdcclxuICAgIF0sXHJcbiAgfSk7XHJcblxyXG4gICAgJCgnI2Zvcm0tcG9ydGZvbGlvJykudmFsaWRhdGUoe1xyXG4gICAgICBtZXNzYWdlczoge1xyXG4gICAgICAgIG5hbWU6ICfQktCy0LXQtNC40YLQtSDQstCw0YjQtSDQuNC80Y8nLFxyXG4gICAgICAgIHBob25lOiAn0JLQstC10LTQuNGC0LUg0LLQsNGIINC90L7QvNC10YAg0YLQtdC70LXRhNC+0L3QsCcsXHJcbiAgICAgIH0sXHJcbiAgICAgIGVycm9yRWxlbWVudDogJ3NwYW4nLFxyXG4gICAgfSk7XHJcblxyXG4gICAgJCgnI2Zvcm0tb3JkZXInKS52YWxpZGF0ZSh7XHJcbiAgICAgIG1lc3NhZ2VzOiB7XHJcbiAgICAgICAgbmFtZTogJ9CS0LLQtdC00LjRgtC1INCy0LDRiNC1INC40LzRjycsXHJcbiAgICAgICAgcGhvbmU6ICfQktCy0LXQtNC40YLQtSDQstCw0Ygg0L3QvtC80LXRgCDRgtC10LvQtdGE0L7QvdCwJyxcclxuICAgICAgfSxcclxuICAgICAgZXJyb3JFbGVtZW50OiAnc3BhbicsXHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCcjZm9ybS1hbmFseXNpcycpLnZhbGlkYXRlKHtcclxuICAgICAgbWVzc2FnZXM6IHtcclxuICAgICAgICBuYW1lOiAn0JLQstC10LTQuNGC0LUg0LLQsNGI0LUg0LjQvNGPJyxcclxuICAgICAgICBwaG9uZTogJ9CS0LLQtdC00LjRgtC1INCy0LDRiCDQvdC+0LzQtdGAINGC0LXQu9C10YTQvtC90LAnLFxyXG4gICAgICB9LFxyXG4gICAgICBlcnJvckVsZW1lbnQ6ICdzcGFuJyxcclxuICAgIH0pO1xyXG5cclxuICAgICQoJyNmb3JtLXF1ZXN0aW9uJykudmFsaWRhdGUoe1xyXG4gICAgICBtZXNzYWdlczoge1xyXG4gICAgICAgIHBob25lOiAn0JLQstC10LTQuNGC0LUg0LLQsNGIINC90L7QvNC10YAg0YLQtdC70LXRhNC+0L3QsCcsXHJcbiAgICAgIH0sXHJcbiAgICAgIGVycm9yRWxlbWVudDogJ3NwYW4nLFxyXG4gICAgfSk7XHJcblxyXG4gICAgJCgnI2Zvcm0tbWFpbicpLnZhbGlkYXRlKHtcclxuICAgICAgbWVzc2FnZXM6IHtcclxuICAgICAgICBwaG9uZTogJ9CS0LLQtdC00LjRgtC1INCy0LDRiCDQvdC+0LzQtdGAINGC0LXQu9C10YTQvtC90LAnLFxyXG4gICAgICB9LFxyXG4gICAgICBlcnJvckVsZW1lbnQ6ICdzcGFuJyxcclxuICAgIH0pO1xyXG5cclxuICB2YXIgY2xpcGJvYXJkID0gbmV3IENsaXBib2FyZEpTKCcudXNlci1idXR0b24nKTtcclxuICB2YXIgdGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbGlwLXRleHQnKTtcclxuICBjbGlwYm9hcmQub24oJ3N1Y2Nlc3MnLCBmdW5jdGlvbihlKSB7XHJcbiAgICB0ZXh0LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgc2V0VGltZW91dChjbGlwVGV4dCwgNTAwMCk7XHJcbiAgICBlLmNsZWFyU2VsZWN0aW9uKCk7XHJcbiAgfSk7XHJcblxyXG4gIHZhciBjbGlwVGV4dCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHRleHQuc3R5bGUuZGlzcGxheSA9ICcnO1xyXG4gIH07XHJcblxyXG4gIGRvY3VtZW50Lm9uZHJhZ3N0YXJ0ID0gdGVzdDtcclxuICAvL9C30LDQv9GA0LXRgiDQvdCwINC/0LXRgNC10YLQsNGB0LrQuNCy0LDQvdC40LVcclxuICBkb2N1bWVudC5vbnNlbGVjdHN0YXJ0ID0gdGVzdDtcclxuICAvL9C30LDQv9GA0LXRgiDQvdCwINCy0YvQtNC10LvQtdC90LjQtSDRjdC70LXQvNC10L3RgtC+0LIg0YHRgtGA0LDQvdC40YbRi1xyXG4gIGRvY3VtZW50Lm9uY29udGV4dG1lbnUgPSB0ZXN0O1xyXG4gIC8v0LfQsNC/0YDQtdGCINC90LAg0LLRi9Cy0LXQtNC10L3QuNC1INC60L7QvdGC0LXQutGB0YLQvdC+0LPQviDQvNC10L3RjlxyXG4gIGZ1bmN0aW9uIHRlc3QoKSB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICB2YXIgbWFza0xpc3QgPSAkLm1hc2tzU29ydCgkLm1hc2tzTG9hZChcImFzc2V0cy9qc29uL3Bob25lLWNvZGVzLmpzb25cIiksIFsnIyddLCAvWzAtOV18Iy8sIFwibWFza1wiKTtcclxuICB2YXIgbWFza09wdHMgPSB7XHJcbiAgICBpbnB1dG1hc2s6IHtcclxuICAgICAgZGVmaW5pdGlvbnM6IHtcclxuICAgICAgICAnIyc6IHtcclxuICAgICAgICAgIHZhbGlkYXRvcjogXCJbMC05XVwiLFxyXG4gICAgICAgICAgY2FyZGluYWxpdHk6IDFcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHNob3dNYXNrT25Ib3ZlcjogZmFsc2UsXHJcbiAgICAgIGF1dG9Vbm1hc2s6IHRydWUsXHJcbiAgICAgIGNsZWFyTWFza09uTG9zdEZvY3VzOiB0cnVlXHJcbiAgICB9LFxyXG4gICAgbWF0Y2g6IC9bMC05XS8sXHJcbiAgICByZXBsYWNlOiAnIycsXHJcbiAgICBsaXN0OiBtYXNrTGlzdCxcclxuICAgIGxpc3RLZXk6IFwibWFza1wiLFxyXG4gICAgb25NYXNrQ2hhbmdlOiBmdW5jdGlvbihtYXNrT2JqLCBkZXRlcm1pbmVkKSB7fVxyXG4gIH07XHJcblxyXG4gICQoJyN1c2VyX3Bob25lJykuY2hhbmdlKGZ1bmN0aW9uKCkge1xyXG4gICAgJCgnI3VzZXJfcGhvbmUnKS5pbnB1dG1hc2soXCJyZW1vdmVcIik7XHJcbiAgICAkKCcjdXNlcl9waG9uZScpLmlucHV0bWFza3MobWFza09wdHMpO1xyXG4gIH0pO1xyXG5cclxuICAkKCcjdXNlcl9waG9uZScpLmNoYW5nZSgpO1xyXG5cclxuICAkKCcjdXNlcl9waG9uZTInKS5jaGFuZ2UoZnVuY3Rpb24oKSB7XHJcbiAgICAkKCcjdXNlcl9waG9uZTInKS5pbnB1dG1hc2soXCJyZW1vdmVcIik7XHJcbiAgICAkKCcjdXNlcl9waG9uZTInKS5pbnB1dG1hc2tzKG1hc2tPcHRzKTtcclxuICB9KTtcclxuXHJcbiAgJCgnI3VzZXJfcGhvbmUyJykuY2hhbmdlKCk7XHJcblxyXG4gICQoJyN1c2VyX3Bob25lLXF1ZXN0aW9uJykuY2hhbmdlKGZ1bmN0aW9uKCkge1xyXG4gICAgJCgnI3VzZXJfcGhvbmUtcXVlc3Rpb24nKS5pbnB1dG1hc2soXCJyZW1vdmVcIik7XHJcbiAgICAkKCcjdXNlcl9waG9uZS1xdWVzdGlvbicpLmlucHV0bWFza3MobWFza09wdHMpO1xyXG4gIH0pO1xyXG5cclxuICAkKCcjdXNlcl9waG9uZS1xdWVzdGlvbicpLmNoYW5nZSgpO1xyXG5cclxuXHJcbn0pO1xyXG4ndXNlIHN0cmljdCc7XHJcblxyXG4oZnVuY3Rpb24gKCkge1xyXG5cclxuICB2YXIgYmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2JnXCIpO1xyXG5cclxuICBpZiAoYmcpIHtcclxuXHJcbiAgICBjb25zdCBNT0JJTEVfV0lEVEggPSA3Njc7XHJcblxyXG4gICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID4gTU9CSUxFX1dJRFRIKSB7XHJcblxyXG4gICAgICB2YXIgcmVmcmVzaER1cmF0aW9uID0gMTAwMDA7XHJcbiAgICAgIHZhciByZWZyZXNoVGltZW91dDtcclxuICAgICAgdmFyIG51bVBvaW50c1g7XHJcbiAgICAgIHZhciBudW1Qb2ludHNZO1xyXG4gICAgICB2YXIgdW5pdFdpZHRoO1xyXG4gICAgICB2YXIgdW5pdEhlaWdodDtcclxuICAgICAgdmFyIHBvaW50cztcclxuICAgICAgdmFyIG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XHJcblxyXG4gICAgICBmdW5jdGlvbiBvbkxvYWQoKSB7XHJcblxyXG4gICAgICAgIHZhciBzZXRIZWlnaHQgPSBtYWluLm9mZnNldEhlaWdodDtcclxuICAgICAgICB2YXIgc3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdzdmcnKTtcclxuICAgICAgICBzdmcuc2V0QXR0cmlidXRlKCd3aWR0aCcsIHdpbmRvdy5pbm5lcldpZHRoKTtcclxuICAgICAgICBzdmcuc2V0QXR0cmlidXRlKCdoZWlnaHQnLCBzZXRIZWlnaHQpO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNiZycpLmFwcGVuZENoaWxkKHN2Zyk7XHJcblxyXG4gICAgICAgIHZhciB1bml0U2l6ZSA9ICh3aW5kb3cuaW5uZXJXaWR0aCArIHNldEhlaWdodCkgLyA0MDtcclxuICAgICAgICBudW1Qb2ludHNYID0gTWF0aC5jZWlsKHdpbmRvdy5pbm5lcldpZHRoIC8gdW5pdFNpemUpICsgMTtcclxuICAgICAgICBudW1Qb2ludHNZID0gTWF0aC5jZWlsKHNldEhlaWdodCAvIHVuaXRTaXplKSArIDE7XHJcbiAgICAgICAgdW5pdFdpZHRoID0gTWF0aC5jZWlsKHdpbmRvdy5pbm5lcldpZHRoIC8gKG51bVBvaW50c1ggLSAxKSk7XHJcbiAgICAgICAgdW5pdEhlaWdodCA9IE1hdGguY2VpbChzZXRIZWlnaHQgLyAobnVtUG9pbnRzWSAtIDEpKTtcclxuICAgICAgICBwb2ludHMgPSBbXTtcclxuXHJcbiAgICAgICAgZm9yICh2YXIgeSA9IDA7IHkgPCBudW1Qb2ludHNZOyB5KyspIHtcclxuICAgICAgICAgIGZvciAodmFyIHggPSAwOyB4IDwgbnVtUG9pbnRzWDsgeCsrKSB7XHJcbiAgICAgICAgICAgIHBvaW50cy5wdXNoKHt4OiB1bml0V2lkdGggKiB4LCB5OiB1bml0SGVpZ2h0ICogeSwgb3JpZ2luWDogdW5pdFdpZHRoICogeCwgb3JpZ2luWTogdW5pdEhlaWdodCAqIHl9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJhbmRvbWl6ZSgpO1xyXG5cclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBvaW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgaWYgKHBvaW50c1tpXS5vcmlnaW5YICE9IHVuaXRXaWR0aCAqIChudW1Qb2ludHNYIC0gMSkgJiYgcG9pbnRzW2ldLm9yaWdpblkgIT0gdW5pdEhlaWdodCAqIChudW1Qb2ludHNZIC0gMSkpIHtcclxuICAgICAgICAgICAgdmFyIHRvcExlZnRYID0gcG9pbnRzW2ldLng7XHJcbiAgICAgICAgICAgIHZhciB0b3BMZWZ0WSA9IHBvaW50c1tpXS55O1xyXG4gICAgICAgICAgICB2YXIgdG9wUmlnaHRYID0gcG9pbnRzW2kgKyAxXS54O1xyXG4gICAgICAgICAgICB2YXIgdG9wUmlnaHRZID0gcG9pbnRzW2kgKyAxXS55O1xyXG4gICAgICAgICAgICB2YXIgYm90dG9tTGVmdFggPSBwb2ludHNbaSArIG51bVBvaW50c1hdLng7XHJcbiAgICAgICAgICAgIHZhciBib3R0b21MZWZ0WSA9IHBvaW50c1tpICsgbnVtUG9pbnRzWF0ueTtcclxuICAgICAgICAgICAgdmFyIGJvdHRvbVJpZ2h0WCA9IHBvaW50c1tpICsgbnVtUG9pbnRzWCArIDFdLng7XHJcbiAgICAgICAgICAgIHZhciBib3R0b21SaWdodFkgPSBwb2ludHNbaSArIG51bVBvaW50c1ggKyAxXS55O1xyXG5cclxuICAgICAgICAgICAgdmFyIHJhbmRvID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMik7XHJcblxyXG4gICAgICAgICAgICBmb3IgKHZhciBuID0gMDsgbiA8IDI7IG4rKykge1xyXG4gICAgICAgICAgICAgIHZhciBwb2x5Z29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKHN2Zy5uYW1lc3BhY2VVUkksICdwb2x5Z29uJyk7XHJcblxyXG4gICAgICAgICAgICAgIGlmIChyYW5kbyA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAobiA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgIHBvbHlnb24ucG9pbnQxID0gaTtcclxuICAgICAgICAgICAgICAgICAgcG9seWdvbi5wb2ludDIgPSBpICsgbnVtUG9pbnRzWDtcclxuICAgICAgICAgICAgICAgICAgcG9seWdvbi5wb2ludDMgPSBpICsgbnVtUG9pbnRzWCArIDE7XHJcbiAgICAgICAgICAgICAgICAgIHBvbHlnb24uc2V0QXR0cmlidXRlKCdwb2ludHMnLCB0b3BMZWZ0WCArICcsJyArIHRvcExlZnRZICsgJyAnICsgYm90dG9tTGVmdFggKyAnLCcgKyBib3R0b21MZWZ0WSArICcgJyArIGJvdHRvbVJpZ2h0WCArICcsJyArIGJvdHRvbVJpZ2h0WSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG4gPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICBwb2x5Z29uLnBvaW50MSA9IGk7XHJcbiAgICAgICAgICAgICAgICAgIHBvbHlnb24ucG9pbnQyID0gaSArIDE7XHJcbiAgICAgICAgICAgICAgICAgIHBvbHlnb24ucG9pbnQzID0gaSArIG51bVBvaW50c1ggKyAxO1xyXG4gICAgICAgICAgICAgICAgICBwb2x5Z29uLnNldEF0dHJpYnV0ZSgncG9pbnRzJywgdG9wTGVmdFggKyAnLCcgKyB0b3BMZWZ0WSArICcgJyArIHRvcFJpZ2h0WCArICcsJyArIHRvcFJpZ2h0WSArICcgJyArIGJvdHRvbVJpZ2h0WCArICcsJyArIGJvdHRvbVJpZ2h0WSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChyYW5kbyA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAobiA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgIHBvbHlnb24ucG9pbnQxID0gaTtcclxuICAgICAgICAgICAgICAgICAgcG9seWdvbi5wb2ludDIgPSBpICsgbnVtUG9pbnRzWDtcclxuICAgICAgICAgICAgICAgICAgcG9seWdvbi5wb2ludDMgPSBpICsgMTtcclxuICAgICAgICAgICAgICAgICAgcG9seWdvbi5zZXRBdHRyaWJ1dGUoJ3BvaW50cycsIHRvcExlZnRYICsgJywnICsgdG9wTGVmdFkgKyAnICcgKyBib3R0b21MZWZ0WCArICcsJyArIGJvdHRvbUxlZnRZICsgJyAnICsgdG9wUmlnaHRYICsgJywnICsgdG9wUmlnaHRZKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobiA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgIHBvbHlnb24ucG9pbnQxID0gaSArIG51bVBvaW50c1g7XHJcbiAgICAgICAgICAgICAgICAgIHBvbHlnb24ucG9pbnQyID0gaSArIDE7XHJcbiAgICAgICAgICAgICAgICAgIHBvbHlnb24ucG9pbnQzID0gaSArIG51bVBvaW50c1ggKyAxO1xyXG4gICAgICAgICAgICAgICAgICBwb2x5Z29uLnNldEF0dHJpYnV0ZSgncG9pbnRzJywgYm90dG9tTGVmdFggKyAnLCcgKyBib3R0b21MZWZ0WSArICcgJyArIHRvcFJpZ2h0WCArICcsJyArIHRvcFJpZ2h0WSArICcgJyArIGJvdHRvbVJpZ2h0WCArICcsJyArIGJvdHRvbVJpZ2h0WSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIHZhciBoID0gMjA3O1xyXG4gICAgICAgICAgICAgIHZhciBzID0gNDU7XHJcbiAgICAgICAgICAgICAgdmFyIGwgPSA4MCArIChNYXRoLnJhbmRvbSgpICogMTIpO1xyXG4gICAgICAgICAgICAgIHBvbHlnb24uc2V0QXR0cmlidXRlKCdmaWxsJywgJ2hzbCgnICsgaCArICcsICcgKyBzICsgJyUsICcgKyBsICsgJyUpJyk7XHJcbiAgICAgICAgICAgICAgdmFyIGFuaW1hdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ2FuaW1hdGUnKTtcclxuICAgICAgICAgICAgICBhbmltYXRlLnNldEF0dHJpYnV0ZSgnZmlsbCcsICdmcmVlemUnKTtcclxuICAgICAgICAgICAgICBhbmltYXRlLnNldEF0dHJpYnV0ZSgnYXR0cmlidXRlTmFtZScsICdwb2ludHMnKTtcclxuICAgICAgICAgICAgICBhbmltYXRlLnNldEF0dHJpYnV0ZSgnZHVyJywgcmVmcmVzaER1cmF0aW9uICsgJ21zJyk7XHJcbiAgICAgICAgICAgICAgYW5pbWF0ZS5zZXRBdHRyaWJ1dGUoJ2NhbGNNb2RlJywgJ2xpbmVhcicpO1xyXG4gICAgICAgICAgICAgIHBvbHlnb24uYXBwZW5kQ2hpbGQoYW5pbWF0ZSk7XHJcbiAgICAgICAgICAgICAgc3ZnLmFwcGVuZENoaWxkKHBvbHlnb24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZWZyZXNoKCk7XHJcblxyXG4gICAgICB9XHJcblxyXG4gICAgICBmdW5jdGlvbiByYW5kb21pemUoKSB7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwb2ludHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgIGlmIChwb2ludHNbaV0ub3JpZ2luWCAhPSAwICYmIHBvaW50c1tpXS5vcmlnaW5YICE9IHVuaXRXaWR0aCAqIChudW1Qb2ludHNYIC0gMSkpIHtcclxuICAgICAgICAgICAgcG9pbnRzW2ldLnggPSBwb2ludHNbaV0ub3JpZ2luWCArIE1hdGgucmFuZG9tKCkgKiB1bml0V2lkdGggLSB1bml0V2lkdGggLyAyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKHBvaW50c1tpXS5vcmlnaW5ZICE9IDAgJiYgcG9pbnRzW2ldLm9yaWdpblkgIT0gdW5pdEhlaWdodCAqIChudW1Qb2ludHNZIC0gMSkpIHtcclxuICAgICAgICAgICAgcG9pbnRzW2ldLnkgPSBwb2ludHNbaV0ub3JpZ2luWSArIE1hdGgucmFuZG9tKCkgKiB1bml0SGVpZ2h0IC0gdW5pdEhlaWdodCAvIDI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBmdW5jdGlvbiByZWZyZXNoKCkge1xyXG4gICAgICAgIHJhbmRvbWl6ZSgpO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2JnIHN2ZycpLmNoaWxkTm9kZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgIHZhciBwb2x5Z29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2JnIHN2ZycpLmNoaWxkTm9kZXNbaV07XHJcbiAgICAgICAgICB2YXIgYW5pbWF0ZSA9IHBvbHlnb24uY2hpbGROb2Rlc1swXTtcclxuICAgICAgICAgIGlmIChhbmltYXRlLmdldEF0dHJpYnV0ZSgndG8nKSkge1xyXG4gICAgICAgICAgICBhbmltYXRlLnNldEF0dHJpYnV0ZSgnZnJvbScsIGFuaW1hdGUuZ2V0QXR0cmlidXRlKCd0bycpKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGFuaW1hdGUuc2V0QXR0cmlidXRlKCd0bycsIHBvaW50c1twb2x5Z29uLnBvaW50MV0ueCArICcsJyArIHBvaW50c1twb2x5Z29uLnBvaW50MV0ueSArICcgJyArIHBvaW50c1twb2x5Z29uLnBvaW50Ml0ueCArICcsJyArIHBvaW50c1twb2x5Z29uLnBvaW50Ml0ueSArICcgJyArIHBvaW50c1twb2x5Z29uLnBvaW50M10ueCArICcsJyArIHBvaW50c1twb2x5Z29uLnBvaW50M10ueSk7XHJcbiAgICAgICAgICBhbmltYXRlLmJlZ2luRWxlbWVudCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZWZyZXNoVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgcmVmcmVzaCgpO1xyXG4gICAgICAgIH0sIHJlZnJlc2hEdXJhdGlvbik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGZ1bmN0aW9uIG9uUmVzaXplKCkge1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNiZyBzdmcnKS5yZW1vdmUoKTtcclxuICAgICAgICBjbGVhclRpbWVvdXQocmVmcmVzaFRpbWVvdXQpO1xyXG4gICAgICAgIG9uTG9hZCgpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB3aW5kb3cub25sb2FkID0gb25Mb2FkO1xyXG4gICAgICB3aW5kb3cub25yZXNpemUgPSBvblJlc2l6ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG59KSgpO1xyXG4ndXNlIHN0cmljdCc7XHJcblxyXG4oZnVuY3Rpb24gKCkge1xyXG4gIHZhciBtZW51QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4taGVhZGVyX19idG4nKTtcclxuICB2YXIgd3JhcE1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1oZWFkZXJfX3dyYXAtbWVudScpO1xyXG4gIHZhciBzdGFnZU1lbnVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1oZWFkZXJfX2xpbmstc3RhZ2UtLWNsb3NlZCcpO1xyXG4gIHZhciBzZXJ2aWNlc1dyYXBNZW51QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4taGVhZGVyX19zZXJ2aWNlcy0tY2xvc2VkJyk7XHJcbiAgdmFyIHNlcnZpY2VzTWVudUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWhlYWRlcl9fbGluay1zZXJ2aWNlcycpO1xyXG4gIHZhciBzZXJ2aWNlc1dyYXBNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4taGVhZGVyX19zZXJ2aWNlcy1uYXYtLWNsb3NlZCcpO1xyXG4gIHZhciBzZXJ2aWNlc01lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1oZWFkZXJfX3NlcnZpY2VzLW5hdicpO1xyXG4gIHZhciBzdGFnZU1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1oZWFkZXJfX3N0YWdlLW5hdi0tY2xvc2VkJyk7XHJcbiAgdmFyIHN0YWdlV3JhcE1lbnVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1oZWFkZXJfX3N0YWdlLWxpbmsnKTtcclxuICB2YXIgbWFpblBob25lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4taGVhZGVyX19ib3gtcGhvbmUnKTtcclxuICB2YXIgbWFpbkJveFBob25lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4taGVhZGVyX190ZWwnKTtcclxuXHJcbiAgaWYgKG1lbnVCdG4pIHtcclxuXHJcbiAgICBtZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2dCkge1xyXG4gICAgICBldnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgIGlmIChtZW51QnRuLmNsYXNzTGlzdC5jb250YWlucygnbWFpbi1oZWFkZXJfX2J0bi0tY2xvc2VkJykpIHtcclxuICAgICAgICBtZW51QnRuLmNsYXNzTGlzdC5yZW1vdmUoJ21haW4taGVhZGVyX19idG4tLWNsb3NlZCcpO1xyXG4gICAgICAgIG1lbnVCdG4uY2xhc3NMaXN0LmFkZCgnbWFpbi1oZWFkZXJfX2J0bi0tb3BlbmVkJyk7XHJcbiAgICAgICAgd3JhcE1lbnUuY2xhc3NMaXN0LmFkZCgnbWFpbi1oZWFkZXJfX3dyYXAtbWVudS0tYWN0aXZlJyk7XHJcbiAgICAgICAgc2VydmljZXNNZW51LmNsYXNzTGlzdC5yZW1vdmUoJ21haW4taGVhZGVyX19zZXJ2aWNlcy1uYXYtLW9wZW5lZCcpO1xyXG4gICAgICAgIHNlcnZpY2VzTWVudS5jbGFzc0xpc3QuYWRkKCdtYWluLWhlYWRlcl9fc2VydmljZXMtbmF2LS1jbG9zZWQnKTtcclxuICAgICAgICBzZXJ2aWNlc01lbnVCdG4uY2xhc3NMaXN0LnJlbW92ZSgnbWFpbi1oZWFkZXJfX2xpbmstc2VydmljZXMtLW9wZW5lZCcpO1xyXG4gICAgICAgIHNlcnZpY2VzTWVudUJ0bi5jbGFzc0xpc3QuYWRkKCdtYWluLWhlYWRlcl9fbGluay1zZXJ2aWNlcy0tY2xvc2VkJyk7XHJcbiAgICAgICAgc3RhZ2VNZW51LmNsYXNzTGlzdC5yZW1vdmUoJ21haW4taGVhZGVyX19zdGFnZS1uYXYtLW9wZW5lZCcpO1xyXG4gICAgICAgIHN0YWdlTWVudS5jbGFzc0xpc3QuYWRkKCdtYWluLWhlYWRlcl9fc3RhZ2UtbmF2LS1jbG9zZWQnKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbWVudUJ0bi5jbGFzc0xpc3QuYWRkKCdtYWluLWhlYWRlcl9fYnRuLS1jbG9zZWQnKTtcclxuICAgICAgICBtZW51QnRuLmNsYXNzTGlzdC5yZW1vdmUoJ21haW4taGVhZGVyX19idG4tLW9wZW5lZCcpO1xyXG4gICAgICAgIHdyYXBNZW51LmNsYXNzTGlzdC5yZW1vdmUoJ21haW4taGVhZGVyX193cmFwLW1lbnUtLWFjdGl2ZScpO1xyXG4gICAgICAgIHNlcnZpY2VzTWVudS5jbGFzc0xpc3QucmVtb3ZlKCdtYWluLWhlYWRlcl9fc2VydmljZXMtbmF2LS1vcGVuZWQnKTtcclxuICAgICAgICBzZXJ2aWNlc01lbnUuY2xhc3NMaXN0LmFkZCgnbWFpbi1oZWFkZXJfX3NlcnZpY2VzLW5hdi0tY2xvc2VkJyk7XHJcbiAgICAgICAgc3RhZ2VNZW51LmNsYXNzTGlzdC5yZW1vdmUoJ21haW4taGVhZGVyX19zdGFnZS1uYXYtLW9wZW5lZCcpO1xyXG4gICAgICAgIHN0YWdlTWVudS5jbGFzc0xpc3QuYWRkKCdtYWluLWhlYWRlcl9fc3RhZ2UtbmF2LS1jbG9zZWQnKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJyc7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGlmIChzZXJ2aWNlc1dyYXBNZW51QnRuKSB7XHJcblxyXG4gICAgICBzZXJ2aWNlc1dyYXBNZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2dCkge1xyXG4gICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICBpZiAoc2VydmljZXNXcmFwTWVudUJ0bi5jbGFzc0xpc3QuY29udGFpbnMoJ21haW4taGVhZGVyX19zZXJ2aWNlcy0tY2xvc2VkJykpIHtcclxuICAgICAgICAgIHNlcnZpY2VzV3JhcE1lbnVCdG4uY2xhc3NMaXN0LnJlbW92ZSgnbWFpbi1oZWFkZXJfX3NlcnZpY2VzLS1jbG9zZWQnKTtcclxuICAgICAgICAgIHNlcnZpY2VzV3JhcE1lbnVCdG4uY2xhc3NMaXN0LmFkZCgnbWFpbi1oZWFkZXJfX3NlcnZpY2VzLS1vcGVuZWQnKTtcclxuICAgICAgICAgIHNlcnZpY2VzV3JhcE1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnbWFpbi1oZWFkZXJfX3NlcnZpY2VzLW5hdi0tY2xvc2VkJyk7XHJcbiAgICAgICAgICBzZXJ2aWNlc1dyYXBNZW51LmNsYXNzTGlzdC5hZGQoJ21haW4taGVhZGVyX19zZXJ2aWNlcy1uYXYtLW9wZW5lZCcpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBzZXJ2aWNlc1dyYXBNZW51QnRuLmNsYXNzTGlzdC5hZGQoJ21haW4taGVhZGVyX19zZXJ2aWNlcy0tY2xvc2VkJyk7XHJcbiAgICAgICAgICBzZXJ2aWNlc1dyYXBNZW51QnRuLmNsYXNzTGlzdC5yZW1vdmUoJ21haW4taGVhZGVyX19zZXJ2aWNlcy0tb3BlbmVkJyk7XHJcbiAgICAgICAgICBzZXJ2aWNlc1dyYXBNZW51LmNsYXNzTGlzdC5hZGQoJ21haW4taGVhZGVyX19zZXJ2aWNlcy1uYXYtLWNsb3NlZCcpO1xyXG4gICAgICAgICAgc2VydmljZXNXcmFwTWVudS5jbGFzc0xpc3QucmVtb3ZlKCdtYWluLWhlYWRlcl9fc2VydmljZXMtbmF2LS1vcGVuZWQnKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChzdGFnZU1lbnVCdG4gJiYgd2luZG93LmlubmVyV2lkdGggPD0gNzY3KSB7XHJcblxyXG4gICAgICBzdGFnZU1lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZ0KSB7XHJcbiAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIGlmIChzdGFnZU1lbnUuY2xhc3NMaXN0LmNvbnRhaW5zKCdtYWluLWhlYWRlcl9fc3RhZ2UtbmF2LS1jbG9zZWQnKSkge1xyXG4gICAgICAgICAgc3RhZ2VNZW51LmNsYXNzTGlzdC5yZW1vdmUoJ21haW4taGVhZGVyX19zdGFnZS1uYXYtLWNsb3NlZCcpO1xyXG4gICAgICAgICAgc3RhZ2VNZW51LmNsYXNzTGlzdC5hZGQoJ21haW4taGVhZGVyX19zdGFnZS1uYXYtLW9wZW5lZCcpO1xyXG4gICAgICAgICAgc3RhZ2VNZW51QnRuLmNsYXNzTGlzdC5yZW1vdmUoJ21haW4taGVhZGVyX19saW5rLXN0YWdlLS1jbG9zZWQnKTtcclxuICAgICAgICAgIHN0YWdlTWVudUJ0bi5jbGFzc0xpc3QuYWRkKCdtYWluLWhlYWRlcl9fbGluay1zdGFnZS0tb3BlbmVkJyk7XHJcbiAgICAgICAgICBtZW51QnRuLmNsYXNzTGlzdC5hZGQoJ21haW4taGVhZGVyX19idG4tLWNsb3NlZCcpO1xyXG4gICAgICAgICAgbWVudUJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdtYWluLWhlYWRlcl9fYnRuLS1vcGVuZWQnKTtcclxuICAgICAgICAgIHdyYXBNZW51LmNsYXNzTGlzdC5yZW1vdmUoJ21haW4taGVhZGVyX193cmFwLW1lbnUtLWFjdGl2ZScpO1xyXG4gICAgICAgICAgc2VydmljZXNNZW51LmNsYXNzTGlzdC5yZW1vdmUoJ21haW4taGVhZGVyX19zZXJ2aWNlcy1uYXYtLW9wZW5lZCcpO1xyXG4gICAgICAgICAgc2VydmljZXNNZW51LmNsYXNzTGlzdC5hZGQoJ21haW4taGVhZGVyX19zZXJ2aWNlcy1uYXYtLWNsb3NlZCcpO1xyXG4gICAgICAgICAgc2VydmljZXNNZW51QnRuLmNsYXNzTGlzdC5yZW1vdmUoJ21haW4taGVhZGVyX19saW5rLXNlcnZpY2VzLS1vcGVuZWQnKTtcclxuICAgICAgICAgIHNlcnZpY2VzTWVudUJ0bi5jbGFzc0xpc3QuYWRkKCdtYWluLWhlYWRlcl9fbGluay1zZXJ2aWNlcy0tY2xvc2VkJyk7XHJcbiAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHN0YWdlTWVudS5jbGFzc0xpc3QuYWRkKCdtYWluLWhlYWRlcl9fc3RhZ2UtbmF2LS1jbG9zZWQnKTtcclxuICAgICAgICAgIHN0YWdlTWVudS5jbGFzc0xpc3QucmVtb3ZlKCdtYWluLWhlYWRlcl9fc3RhZ2UtbmF2LS1vcGVuZWQnKTtcclxuICAgICAgICAgIHN0YWdlTWVudUJ0bi5jbGFzc0xpc3QuYWRkKCdtYWluLWhlYWRlcl9fbGluay1zdGFnZS0tY2xvc2VkJyk7XHJcbiAgICAgICAgICBzdGFnZU1lbnVCdG4uY2xhc3NMaXN0LnJlbW92ZSgnbWFpbi1oZWFkZXJfX2xpbmstc3RhZ2UtLW9wZW5lZCcpO1xyXG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICcnO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGlmIChzZXJ2aWNlc01lbnVCdG4gJiYgd2luZG93LmlubmVyV2lkdGggPD0gNzY3KSB7XHJcblxyXG4gICAgICBzZXJ2aWNlc01lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZ0KSB7XHJcbiAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIGlmIChzZXJ2aWNlc01lbnUuY2xhc3NMaXN0LmNvbnRhaW5zKCdtYWluLWhlYWRlcl9fc2VydmljZXMtbmF2LS1jbG9zZWQnKSkge1xyXG4gICAgICAgICAgc2VydmljZXNNZW51LmNsYXNzTGlzdC5yZW1vdmUoJ21haW4taGVhZGVyX19zZXJ2aWNlcy1uYXYtLWNsb3NlZCcpO1xyXG4gICAgICAgICAgc2VydmljZXNNZW51LmNsYXNzTGlzdC5hZGQoJ21haW4taGVhZGVyX19zZXJ2aWNlcy1uYXYtLW9wZW5lZCcpO1xyXG4gICAgICAgICAgc2VydmljZXNNZW51QnRuLmNsYXNzTGlzdC5yZW1vdmUoJ21haW4taGVhZGVyX19saW5rLXNlcnZpY2VzLS1jbG9zZWQnKTtcclxuICAgICAgICAgIHNlcnZpY2VzTWVudUJ0bi5jbGFzc0xpc3QuYWRkKCdtYWluLWhlYWRlcl9fbGluay1zZXJ2aWNlcy0tb3BlbmVkJyk7XHJcbiAgICAgICAgICB3cmFwTWVudS5jbGFzc0xpc3QucmVtb3ZlKCdtYWluLWhlYWRlcl9fd3JhcC1tZW51LS1hY3RpdmUnKTtcclxuICAgICAgICAgIHN0YWdlTWVudS5jbGFzc0xpc3QucmVtb3ZlKCdtYWluLWhlYWRlcl9fc3RhZ2UtbmF2LS1vcGVuZWQnKTtcclxuICAgICAgICAgIHN0YWdlTWVudS5jbGFzc0xpc3QuYWRkKCdtYWluLWhlYWRlcl9fc3RhZ2UtbmF2LS1jbG9zZWQnKTtcclxuICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgc2VydmljZXNNZW51LmNsYXNzTGlzdC5hZGQoJ21haW4taGVhZGVyX19zZXJ2aWNlcy1uYXYtLWNsb3NlZCcpO1xyXG4gICAgICAgICAgc2VydmljZXNNZW51LmNsYXNzTGlzdC5yZW1vdmUoJ21haW4taGVhZGVyX19zZXJ2aWNlcy1uYXYtLW9wZW5lZCcpO1xyXG4gICAgICAgICAgc2VydmljZXNNZW51QnRuLmNsYXNzTGlzdC5hZGQoJ21haW4taGVhZGVyX19saW5rLXNlcnZpY2VzLS1jbG9zZWQnKTtcclxuICAgICAgICAgIHNlcnZpY2VzTWVudUJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdtYWluLWhlYWRlcl9fbGluay1zZXJ2aWNlcy0tb3BlbmVkJyk7XHJcbiAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJyc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGlmIChzdGFnZVdyYXBNZW51QnRuICYmIHdpbmRvdy5pbm5lcldpZHRoIDw9IDc2Nykge1xyXG5cclxuICAgICAgc3RhZ2VXcmFwTWVudUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldnQpIHtcclxuICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgaWYgKHN0YWdlTWVudS5jbGFzc0xpc3QuY29udGFpbnMoJ21haW4taGVhZGVyX19zdGFnZS1uYXYtLWNsb3NlZCcpKSB7XHJcbiAgICAgICAgICBzdGFnZU1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnbWFpbi1oZWFkZXJfX3N0YWdlLW5hdi0tY2xvc2VkJyk7XHJcbiAgICAgICAgICBzdGFnZU1lbnUuY2xhc3NMaXN0LmFkZCgnbWFpbi1oZWFkZXJfX3N0YWdlLW5hdi0tb3BlbmVkJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHN0YWdlTWVudS5jbGFzc0xpc3QuYWRkKCdtYWluLWhlYWRlcl9fc3RhZ2UtbmF2LS1jbG9zZWQnKTtcclxuICAgICAgICAgIHN0YWdlTWVudS5jbGFzc0xpc3QucmVtb3ZlKCdtYWluLWhlYWRlcl9fc3RhZ2UtbmF2LS1vcGVuZWQnKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8PSAxMDIzKSB7XHJcblxyXG4gICAgbWFpblBob25lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2dCkge1xyXG4gICAgICBldnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgIG1haW5Cb3hQaG9uZS5jbGFzc0xpc3QudG9nZ2xlKCdtYWluLWhlYWRlcl9fdGVsLS1hY3RpdmUnKTtcclxuICAgIH0pO1xyXG5cclxuICB9XHJcblxyXG59KSgpO1xyXG4ndXNlIHN0cmljdCc7XHJcblxyXG4oZnVuY3Rpb24gKCkge1xyXG5cclxuICB2YXIgbWFpblNsaWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnRyb19fYm94LXN3aXBlci1jb250YWluZXInKTtcclxuICB2YXIgc2VydmljZXNTbGlkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VydmljZXNfX3N3aXBlci1jb250YWluZXInKTtcclxuXHJcbiAgdmFyIHNlcnZpY2VzU2xpZGVyRGVzayA9IGZ1bmN0aW9uIChlbCkge1xyXG4gICAgcmV0dXJuIG5ldyBTd2lwZXIoZWwsIHtcclxuICAgICAgbG9vcDogdHJ1ZSxcclxuICAgICAgc3BlZWQ6IDEwMDAsXHJcbiAgICAgIHNwYWNlQmV0d2VlbjogMzAsXHJcbiAgICAgIGF1dG9wbGF5OiB7XHJcbiAgICAgICAgZGVsYXk6IDEyMDAsXHJcbiAgICAgIH0sXHJcbiAgICAgIG5hdmlnYXRpb246IHtcclxuICAgICAgICBuZXh0RWw6ICcuc3dpcGVyLWJ1dHRvbi1uZXh0JyxcclxuICAgICAgICBwcmV2RWw6ICcuc3dpcGVyLWJ1dHRvbi1wcmV2JyxcclxuICAgICAgfSxcclxuICAgICAgYnJlYWtwb2ludHM6IHtcclxuICAgICAgICAzMjA6IHtcclxuICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDEsXHJcbiAgICAgICAgfSxcclxuICAgICAgICA3Njg6IHtcclxuICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICAxMDI0OiB7XHJcbiAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAyLFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgaWYgKHNlcnZpY2VzU2xpZGVyKSB7XHJcbiAgICBzZXJ2aWNlc1NsaWRlckRlc2soc2VydmljZXNTbGlkZXIpO1xyXG4gIH1cclxuXHJcbiAgdmFyIGNyZWF0ZVNsaWRlciA9IGZ1bmN0aW9uIChlbCkge1xyXG4gICAgcmV0dXJuIG5ldyBTd2lwZXIoZWwsIHtcclxuICAgICAgZGlyZWN0aW9uOiAndmVydGljYWwnLFxyXG4gICAgICBzbGlkZXNQZXJWaWV3OiAxLFxyXG4gICAgICBsb29wOiB0cnVlLFxyXG4gICAgICBzcGVlZDogMTAwMCxcclxuICAgICAgYXV0b3BsYXk6IHtcclxuICAgICAgICBkZWxheTogNzAwMCxcclxuICAgICAgfSxcclxuICAgICAgbW91c2V3aGVlbDogdHJ1ZSxcclxuICAgICAgcGFnaW5hdGlvbjoge1xyXG4gICAgICAgIGVsOiAnLnN3aXBlci1wYWdpbmF0aW9uJyxcclxuICAgICAgICBjbGlja2FibGU6IHRydWUsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBpZiAobWFpblNsaWRlcikge1xyXG4gICAgY3JlYXRlU2xpZGVyKG1haW5TbGlkZXIpO1xyXG4gIH1cclxuXHJcbn0pKCk7XHJcbid1c2Ugc3RyaWN0JztcclxuXHJcbihmdW5jdGlvbiAoKSB7XHJcblxyXG4gIHZhciBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9ydGZvbGlvJyk7XHJcblxyXG4gIGlmIChjb250YWluZXIgJiYgd2luZG93LmlubmVyV2lkdGggPiAxMDIzKSB7XHJcblxyXG4gICAgdmFyIGNhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBvcnRmb2xpb19fYm94LWNhcmQnKTtcclxuXHJcbiAgICBmdW5jdGlvbiByb3RhdGUoZXZ0KSB7XHJcbiAgICAgIHZhciBjYXJkSXRlbSA9IHRoaXMucXVlcnlTZWxlY3RvcignLnBvcnRmb2xpb19fY2FyZC1wZXJzcGVjdGl2ZScpO1xyXG4gICAgICB2YXIgaGFsZkhlaWdodCA9IGNhcmRJdGVtLm9mZnNldEhlaWdodCAvIDI7XHJcbiAgICAgIHZhciBoYWxmV2lkdGggPSBjYXJkSXRlbS5vZmZzZXRXaWR0aCAvIDI7XHJcblxyXG4gICAgICBjYXJkSXRlbS5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlWCgnICsgLShldnQub2Zmc2V0WSAtIGhhbGZIZWlnaHQpIC8gMTIgKyAnZGVnKScgK1xyXG4gICAgICAgICdyb3RhdGVZKCcgKyAoZXZ0Lm9mZnNldFggLSBoYWxmV2lkdGgpIC8gMTIgKyAnZGVnJztcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByb3RhdGVOb25lKCkge1xyXG4gICAgICB2YXIgY2FyZEl0ZW0gPSB0aGlzLnF1ZXJ5U2VsZWN0b3IoJy5wb3J0Zm9saW9fX2NhcmQtcGVyc3BlY3RpdmUnKTtcclxuXHJcbiAgICAgIGNhcmRJdGVtLnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGVYKDBkZWcpJyArICdyb3RhdGVZKDBkZWcpJztcclxuICAgIH1cclxuXHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNhcmRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHZhciBjYXJkID0gY2FyZHNbaV07XHJcbiAgICAgIGNhcmQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgcm90YXRlKTtcclxuICAgICAgY2FyZC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIHJvdGF0ZU5vbmUpO1xyXG4gICAgfVxyXG5cclxuICAgICQoZG9jdW1lbnQpLm9uKCdtc2UyX2xvYWQnLCBmdW5jdGlvbiAoZSwgZGF0YSkge1xyXG5cclxuICAgICAgdmFyIGNhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wb3J0Zm9saW9fX2JveC1jYXJkXCIpO1xyXG5cclxuICAgICAgZnVuY3Rpb24gcm90YXRlKGV2dCkge1xyXG4gICAgICAgIHZhciBjYXJkSXRlbSA9IHRoaXMucXVlcnlTZWxlY3RvcignLnBvcnRmb2xpb19fY2FyZC1wZXJzcGVjdGl2ZScpO1xyXG4gICAgICAgIHZhciBoYWxmSGVpZ2h0ID0gY2FyZEl0ZW0ub2Zmc2V0SGVpZ2h0IC8gMjtcclxuICAgICAgICB2YXIgaGFsZldpZHRoID0gY2FyZEl0ZW0ub2Zmc2V0V2lkdGggLyAyO1xyXG5cclxuICAgICAgICBjYXJkSXRlbS5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlWCgnICsgLShldnQub2Zmc2V0WSAtIGhhbGZIZWlnaHQpIC8gNyArICdkZWcpJyArXHJcbiAgICAgICAgICAncm90YXRlWSgnICsgKGV2dC5vZmZzZXRYIC0gaGFsZldpZHRoKSAvIDcgKyAnZGVnJztcclxuICAgICAgfVxyXG5cclxuICAgICAgZnVuY3Rpb24gcm90YXRlTm9uZSgpIHtcclxuICAgICAgICB2YXIgY2FyZEl0ZW0gPSB0aGlzLnF1ZXJ5U2VsZWN0b3IoJy5wb3J0Zm9saW9fX2NhcmQtcGVyc3BlY3RpdmUnKTtcclxuXHJcbiAgICAgICAgY2FyZEl0ZW0uc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZVgoMGRlZyknICsgJ3JvdGF0ZVkoMGRlZyknO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNhcmRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgdmFyIGNhcmQgPSBjYXJkc1tpXTtcclxuICAgICAgICBjYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHJvdGF0ZSk7XHJcbiAgICAgICAgY2FyZC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIHJvdGF0ZU5vbmUpO1xyXG4gICAgICB9XHJcblxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxufSkoKTtcclxuJ3VzZSBzdHJpY3QnO1xyXG5cclxuKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgdmFyIGFydGljbGVDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFydGljbGVfX2JveC1hcnRpY2xlJyk7XHJcblxyXG4gIGlmIChhcnRpY2xlQ29udGVudCkge1xyXG5cclxuICAgIGNvbnN0IERFU0tUT1BfV0lEVEggPSAxMDIzO1xyXG4gICAgdmFyIGFydGljbGVDYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFydGljbGVfX2JveC1hcnRpY2xlcycpO1xyXG5cclxuICAgIHZhciBzZXRIZWlnaHQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGxldCBpc0Rlc2t0b3AgPSB3aW5kb3cuaW5uZXJXaWR0aCA+IERFU0tUT1BfV0lEVEg7XHJcblxyXG4gICAgICAgIGlmIChpc0Rlc2t0b3ApIHtcclxuICAgICAgICAgIGxldCBjb250ZW50SGVpZ2h0ID0gYXJ0aWNsZUNvbnRlbnQub2Zmc2V0SGVpZ2h0O1xyXG4gICAgICAgICAgYXJ0aWNsZUNhcmQuc3R5bGUuaGVpZ2h0ID0gY29udGVudEhlaWdodCArICdweCc7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGFydGljbGVDYXJkLnN0eWxlLmhlaWdodCA9ICcnO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHNldEhlaWdodCgpO1xyXG5cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBzZXRIZWlnaHQpO1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHNldEhlaWdodCk7XHJcbiAgfVxyXG5cclxuICB2YXIgc2VydmljZXNCb3hXcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlcnZpY2VzJyk7XHJcblxyXG4gIGlmIChzZXJ2aWNlc0JveFdyYXBwZXIpIHtcclxuXHJcbiAgICBjb25zdCBUQUJMRVRfV0lEVEggPSA3Njc7XHJcbiAgICB2YXIgc2VydmljZXNCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VydmljZXNfX25hdi1ib3gnKTtcclxuXHJcbiAgICB2YXIgc2V0SGVpZ2h0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICBsZXQgaXNUYWJsZXQgPSB3aW5kb3cuaW5uZXJXaWR0aCA+IFRBQkxFVF9XSURUSDtcclxuXHJcbiAgICAgICAgaWYgKGlzVGFibGV0KSB7XHJcbiAgICAgICAgICBsZXQgY29udGVudEhlaWdodCA9IHNlcnZpY2VzQm94V3JhcHBlci5vZmZzZXRIZWlnaHQ7XHJcbiAgICAgICAgICBzZXJ2aWNlc0JveC5zdHlsZS5oZWlnaHQgPSBjb250ZW50SGVpZ2h0ICsgJ3B4JztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgc2VydmljZXNCb3guc3R5bGUuaGVpZ2h0ID0gJyc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc2V0SGVpZ2h0KCk7XHJcblxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHNldEhlaWdodCk7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgc2V0SGVpZ2h0KTtcclxuICB9XHJcblxyXG4gIHZhciBzdGFnZVdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhZ2VzJyk7XHJcblxyXG4gIGlmIChzdGFnZVdyYXBwZXIpIHtcclxuXHJcbiAgICBjb25zdCBUQUJMRVRfV0lEVEggPSA3Njc7XHJcbiAgICB2YXIgc3RhZ2VCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhZ2VzX19uYXYtYm94Jyk7XHJcblxyXG4gICAgdmFyIHNldEhlaWdodCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgbGV0IGlzVGFibGV0ID0gd2luZG93LmlubmVyV2lkdGggPiBUQUJMRVRfV0lEVEg7XHJcblxyXG4gICAgICAgIGlmIChpc1RhYmxldCkge1xyXG4gICAgICAgICAgbGV0IGNvbnRlbnRIZWlnaHQgPSBzdGFnZVdyYXBwZXIub2Zmc2V0SGVpZ2h0O1xyXG4gICAgICAgICAgc3RhZ2VCb3guc3R5bGUuaGVpZ2h0ID0gY29udGVudEhlaWdodCArICdweCc7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHN0YWdlQm94LnN0eWxlLmhlaWdodCA9ICcnO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHNldEhlaWdodCgpO1xyXG5cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBzZXRIZWlnaHQpO1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHNldEhlaWdodCk7XHJcbiAgfVxyXG5cclxufSkoKTtcclxuJ3VzZSBzdHJpY3QnO1xyXG5cclxuKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgY29uc3QgREVTS1RPUF9XSURUSCA9IDEwMjM7XHJcbiAgdmFyIHBvcnRmb2xpb1BhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9ydGZvbGlvLXBhZ2VfX2NvbXBhbnknKTtcclxuXHJcbiAgaWYgKHBvcnRmb2xpb1BhZ2UgJiYgd2luZG93LmlubmVyV2lkdGggPiBERVNLVE9QX1dJRFRIKSB7XHJcblxyXG4gICAgdmFyIHBvcnRmb2xpb0JveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3J0Zm9saW8tcGFnZV9fYm94Jyk7XHJcbiAgICB2YXIgcG9ydGZvbGlvQm94QWRkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcnRmb2xpby1wYWdlX19ib3gtYWRkJyk7XHJcbiAgICB2YXIgcG9ydGZvbGlvV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3J0Zm9saW8tcGFnZV9fd3JhcHBlcicpO1xyXG4gICAgdmFyIHBvcnRmb2xpb0JveEltYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcnRmb2xpby1wYWdlX19ib3gtaW1hZ2UnKTtcclxuICAgIHZhciBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJveC1jbG9zZWQnKTtcclxuICAgIHZhciB0ZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRleHQtY2xvc2VkJyk7XHJcblxyXG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xyXG5cclxuICAgIHZhciBvcGVuID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICBwb3J0Zm9saW9Cb3hJbWFnZS5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWSgtMjIwJSknO1xyXG4gICAgICBwb3J0Zm9saW9Cb3guc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVkoLTMyMCUpJztcclxuICAgICAgcG9ydGZvbGlvQm94LnN0eWxlLnRyYW5zaXRpb25EZWxheSA9ICcnO1xyXG4gICAgICBwb3J0Zm9saW9Cb3hJbWFnZS5zdHlsZS50cmFuc2l0aW9uRGVsYXkgPSAnJztcclxuICAgICAgcG9ydGZvbGlvUGFnZS5jbGFzc0xpc3QuYWRkKCdwb3J0Zm9saW8tcGFnZV9fY29tcGFueS0tYWN0aXZlJyk7XHJcbiAgICAgIHBvcnRmb2xpb0JveEFkZC5jbGFzc0xpc3QuYWRkKCdwb3J0Zm9saW8tcGFnZV9fYm94LWFkZC0tYWN0aXZlJyk7XHJcbiAgICAgIHNldFRpbWVvdXQoZ3JpZE9wZW4sIDYwMCk7XHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBjbG9zZWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHBvcnRmb2xpb0JveEltYWdlLnN0eWxlLnRyYW5zZm9ybSA9ICcnO1xyXG4gICAgICBwb3J0Zm9saW9Cb3guc3R5bGUudHJhbnNmb3JtID0gJyc7XHJcbiAgICAgIHBvcnRmb2xpb0JveC5zdHlsZS50cmFuc2l0aW9uRGVsYXkgPSAnMC4zcyc7XHJcbiAgICAgIHBvcnRmb2xpb0JveEltYWdlLnN0eWxlLnRyYW5zaXRpb25EZWxheSA9ICcwLjNzJztcclxuICAgICAgcG9ydGZvbGlvUGFnZS5jbGFzc0xpc3QucmVtb3ZlKCdwb3J0Zm9saW8tcGFnZV9fY29tcGFueS0tYWN0aXZlJyk7XHJcbiAgICAgIHBvcnRmb2xpb0JveEFkZC5jbGFzc0xpc3QucmVtb3ZlKCdwb3J0Zm9saW8tcGFnZV9fYm94LWFkZC0tYWN0aXZlJyk7XHJcbiAgICAgIHNldFRpbWVvdXQoZ3JpZENsb3NlZCwgNDAwKTtcclxuICAgIH07XHJcblxyXG4gICAgdmFyIGNsb3NlZE1haW4gPSBmdW5jdGlvbiAoZXZ0KSB7XHJcblxyXG4gICAgICBpZiAoZXZ0LnRhcmdldCA9PT0gbWFpbikge1xyXG5cclxuICAgICAgICBwb3J0Zm9saW9QYWdlLmNsYXNzTGlzdC5yZW1vdmUoJ3BvcnRmb2xpby1wYWdlX19jb21wYW55LS1hY3RpdmUnKTtcclxuICAgICAgICBwb3J0Zm9saW9Cb3hBZGQuY2xhc3NMaXN0LnJlbW92ZSgncG9ydGZvbGlvLXBhZ2VfX2JveC1hZGQtLWFjdGl2ZScpO1xyXG4gICAgICAgIHBvcnRmb2xpb0JveEltYWdlLnN0eWxlLnRyYW5zZm9ybSA9ICcnO1xyXG4gICAgICAgIHBvcnRmb2xpb0JveC5zdHlsZS50cmFuc2Zvcm0gPSAnJztcclxuICAgICAgICBwb3J0Zm9saW9Cb3guc3R5bGUudHJhbnNpdGlvbkRlbGF5ID0gJyc7XHJcbiAgICAgICAgcG9ydGZvbGlvQm94SW1hZ2Uuc3R5bGUudHJhbnNpdGlvbkRlbGF5ID0gJyc7XHJcblxyXG4gICAgICB9XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgY2xvc2VkVGV4dCA9IGZ1bmN0aW9uIChldnQpIHtcclxuXHJcbiAgICAgIGlmIChldnQudGFyZ2V0ID09PSB0ZXh0KSB7XHJcblxyXG4gICAgICAgIHBvcnRmb2xpb1BhZ2UuY2xhc3NMaXN0LnJlbW92ZSgncG9ydGZvbGlvLXBhZ2VfX2NvbXBhbnktLWFjdGl2ZScpO1xyXG4gICAgICAgIHBvcnRmb2xpb0JveEFkZC5jbGFzc0xpc3QucmVtb3ZlKCdwb3J0Zm9saW8tcGFnZV9fYm94LWFkZC0tYWN0aXZlJyk7XHJcbiAgICAgICAgcG9ydGZvbGlvQm94SW1hZ2Uuc3R5bGUudHJhbnNmb3JtID0gJyc7XHJcbiAgICAgICAgcG9ydGZvbGlvQm94LnN0eWxlLnRyYW5zZm9ybSA9ICcnO1xyXG4gICAgICAgIHBvcnRmb2xpb0JveC5zdHlsZS50cmFuc2l0aW9uRGVsYXkgPSAnJztcclxuICAgICAgICBwb3J0Zm9saW9Cb3hJbWFnZS5zdHlsZS50cmFuc2l0aW9uRGVsYXkgPSAnJztcclxuXHJcbiAgICAgIH1cclxuXHJcbiAgICB9O1xyXG5cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd3aGVlbCcsIGZ1bmN0aW9uIChldnQpIHtcclxuXHJcbiAgICAgIGlmIChldnQuZGVsdGFZID4gMCAmJiB3aW5kb3cuaW5uZXJXaWR0aCA+IERFU0tUT1BfV0lEVEgpIHtcclxuICAgICAgICBvcGVuKCk7XHJcbiAgICAgIH0gZWxzZSBpZiAocG9ydGZvbGlvUGFnZS5zY3JvbGxUb3AgPT09IDApIHtcclxuICAgICAgICBjbG9zZWQoKTtcclxuICAgICAgfVxyXG5cclxuICAgIH0pXHJcblxyXG4gICAgbWFpbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlZE1haW4pO1xyXG4gICAgdGV4dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlZFRleHQpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGdyaWRPcGVuKCkge1xyXG4gICAgICBwb3J0Zm9saW9XcmFwcGVyLnN0eWxlLmdyaWRUZW1wbGF0ZUNvbHVtbnMgPSAnMjglIGF1dG8gYXV0byc7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ3JpZENsb3NlZCgpIHtcclxuICAgICAgcG9ydGZvbGlvV3JhcHBlci5zdHlsZS5ncmlkVGVtcGxhdGVDb2x1bW5zID0gJyc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufSkoKTtcclxuJ3VzZSBzdHJpY3QnO1xyXG5cclxuKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgY29uc3QgS0VZX0NPREUgPSAyNztcclxuXHJcbiAgdmFyIG92ZXJsYXlNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpO1xyXG4gIHZhciBtb2RhbENvbnN1bHRhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1jb25zdWx0YXRpb24nKTtcclxuXHJcbiAgaWYgKG1vZGFsQ29uc3VsdGF0aW9uKSB7XHJcblxyXG4gICAgdmFyIG1vZGFsQ29uc3VsdGF0aW9uQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJ1dHRvbi0tY29uc3VsdGF0aW9uJyk7XHJcbiAgICB2YXIgbW9kYWxDbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tb2RhbF9fYnRuLWNsb3NlZCcpO1xyXG5cclxuICAgIGZvcih2YXIgeSA9IDA7IHkgPCBtb2RhbENvbnN1bHRhdGlvbkJ0bi5sZW5ndGg7IHkrKykge1xyXG5cclxuICAgICAgbW9kYWxDb25zdWx0YXRpb25CdG5beV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZ0KSB7XHJcbiAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIG1vZGFsQ29uc3VsdGF0aW9uLmNsYXNzTGlzdC5hZGQoJ21vZGFsLWFjdGl2ZScpO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcclxuICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbW9kYWxDbG9zZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICBtb2RhbENsb3NlW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2dCkge1xyXG4gICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICBtb2RhbENvbnN1bHRhdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCdtb2RhbC1hY3RpdmUnKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJyc7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKGBrZXlkb3duYCwgZnVuY3Rpb24gKGV2dCkge1xyXG5cclxuICAgICAgaWYgKGV2dC5rZXlDb2RlID09PSBLRVlfQ09ERSkge1xyXG4gICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICBtb2RhbENvbnN1bHRhdGlvbi5jbGFzc0xpc3QuY29udGFpbnMoYG1vZGFsLWFjdGl2ZWApO1xyXG4gICAgICAgIG1vZGFsQ29uc3VsdGF0aW9uLmNsYXNzTGlzdC5yZW1vdmUoYG1vZGFsLWFjdGl2ZWApO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBgYDtcclxuXHJcbiAgICAgIH1cclxuXHJcbiAgICB9KTtcclxuXHJcbiAgICBvdmVybGF5TW9kYWwuYWRkRXZlbnRMaXN0ZW5lcihgY2xpY2tgLCBmdW5jdGlvbiAoZXZ0KSB7XHJcblxyXG4gICAgICBpZiAoZXZ0LnRhcmdldCA9PT0gb3ZlcmxheU1vZGFsKSB7XHJcblxyXG4gICAgICAgIG1vZGFsQ29uc3VsdGF0aW9uLmNsYXNzTGlzdC5yZW1vdmUoYG1vZGFsLWFjdGl2ZWApO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBgYDtcclxuXHJcbiAgICAgIH1cclxuXHJcbiAgICB9KTtcclxuXHJcbiAgfVxyXG5cclxufSkoKTtcclxuJ3VzZSBzdHJpY3QnO1xyXG5cclxuKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgJChkb2N1bWVudCkub24oJ21zZTJfbG9hZCcsIGZ1bmN0aW9uKGUsIGRhdGEpIHtcclxuXHJcbiAgICBjb25zdCBLRVlfQ09ERSA9IDI3O1xyXG5cclxuICAgIHZhciBvdmVybGF5TW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKTtcclxuICAgIHZhciBwb3J0Zm9saW9DYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1vZGFscy1kZXZlbG9wbWVudCcpO1xyXG4gICAgdmFyIG1vZGFsRGV2ZWxvcG1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtZGV2ZWxvcG1lbnQnKTtcclxuICAgIHZhciBtb2RhbENsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1vZGFsX19idG4tY2xvc2VkJyk7XHJcblxyXG4gICAgaWYgKG1vZGFsRGV2ZWxvcG1lbnQpIHtcclxuXHJcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbW9kYWxDbG9zZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIG1vZGFsQ2xvc2VbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZ0KSB7XHJcbiAgICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICBtb2RhbERldmVsb3BtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ21vZGFsLWFjdGl2ZScpO1xyXG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICcnO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBvcnRmb2xpb0NhcmQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBwb3J0Zm9saW9DYXJkW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2dCkge1xyXG4gICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgbW9kYWxEZXZlbG9wbWVudC5jbGFzc0xpc3QuYWRkKCdtb2RhbC1hY3RpdmUnKTtcclxuICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKGBrZXlkb3duYCwgZnVuY3Rpb24gKGV2dCkge1xyXG5cclxuICAgICAgICBpZiAoZXZ0LmtleUNvZGUgPT09IEtFWV9DT0RFKSB7XHJcbiAgICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICBtb2RhbERldmVsb3BtZW50LmNsYXNzTGlzdC5jb250YWlucygnbW9kYWwtYWN0aXZlJyk7XHJcbiAgICAgICAgICBtb2RhbERldmVsb3BtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ21vZGFsLWFjdGl2ZScpO1xyXG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IGBgO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIG92ZXJsYXlNb2RhbC5hZGRFdmVudExpc3RlbmVyKGBjbGlja2AsIGZ1bmN0aW9uIChldnQpIHtcclxuXHJcbiAgICAgICAgaWYgKGV2dC50YXJnZXQgPT09IG92ZXJsYXlNb2RhbCkge1xyXG5cclxuICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBgYDtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgfSk7XHJcblxyXG4gICAgICBtb2RhbERldmVsb3BtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2dCkge1xyXG5cclxuICAgICAgICBpZiAoZXZ0LnRhcmdldCA9PT0gbW9kYWxEZXZlbG9wbWVudCkge1xyXG4gICAgICAgICAgbW9kYWxEZXZlbG9wbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ21vZGFsLWFjdGl2ZScpO1xyXG4gICAgICAgICAgbW9kYWxEZXZlbG9wbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdtb2RhbC1hY3RpdmUnKTtcclxuICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBgYDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICB9KVxyXG5cclxuICAgIH1cclxuXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IEtFWV9DT0RFID0gMjc7XHJcblxyXG4gIHZhciBvdmVybGF5TW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKTtcclxuICB2YXIgcG9ydGZvbGlvQ2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tb2RhbHMtZGV2ZWxvcG1lbnQnKTtcclxuICB2YXIgbW9kYWxEZXZlbG9wbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1kZXZlbG9wbWVudCcpO1xyXG4gIHZhciBtb2RhbENsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1vZGFsX19idG4tY2xvc2VkJyk7XHJcblxyXG4gIGlmIChtb2RhbERldmVsb3BtZW50KSB7XHJcblxyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtb2RhbENsb3NlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIG1vZGFsQ2xvc2VbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZ0KSB7XHJcbiAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIG1vZGFsRGV2ZWxvcG1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnbW9kYWwtYWN0aXZlJyk7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICcnO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBvcnRmb2xpb0NhcmQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgcG9ydGZvbGlvQ2FyZFtpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldnQpIHtcclxuICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgbW9kYWxEZXZlbG9wbWVudC5jbGFzc0xpc3QuYWRkKCdtb2RhbC1hY3RpdmUnKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XHJcblxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihga2V5ZG93bmAsIGZ1bmN0aW9uIChldnQpIHtcclxuXHJcbiAgICAgIGlmIChldnQua2V5Q29kZSA9PT0gS0VZX0NPREUpIHtcclxuICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgbW9kYWxEZXZlbG9wbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ21vZGFsLWFjdGl2ZScpO1xyXG4gICAgICAgIG1vZGFsRGV2ZWxvcG1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnbW9kYWwtYWN0aXZlJyk7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IGBgO1xyXG5cclxuICAgICAgfVxyXG5cclxuICAgIH0pO1xyXG5cclxuICAgIG92ZXJsYXlNb2RhbC5hZGRFdmVudExpc3RlbmVyKGBjbGlja2AsIGZ1bmN0aW9uIChldnQpIHtcclxuXHJcbiAgICAgIGlmIChldnQudGFyZ2V0ID09PSBvdmVybGF5TW9kYWwpIHtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IGBgO1xyXG5cclxuICAgICAgfVxyXG5cclxuICAgIH0pO1xyXG5cclxuICAgIG1vZGFsRGV2ZWxvcG1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZ0KSB7XHJcblxyXG4gICAgICBpZiAoZXZ0LnRhcmdldCA9PT0gbW9kYWxEZXZlbG9wbWVudCkge1xyXG4gICAgICAgIG1vZGFsRGV2ZWxvcG1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdtb2RhbC1hY3RpdmUnKTtcclxuICAgICAgICBtb2RhbERldmVsb3BtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ21vZGFsLWFjdGl2ZScpO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBgYDtcclxuICAgICAgfVxyXG5cclxuICAgIH0pXHJcblxyXG4gIH1cclxuXHJcbn0pKCk7XHJcbid1c2Ugc3RyaWN0JztcclxuXHJcbihmdW5jdGlvbiAoKSB7XHJcblxyXG4gIGNvbnN0IEtFWV9DT0RFID0gMjc7XHJcblxyXG4gIHZhciBvdmVybGF5TW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKTtcclxuICB2YXIgbW9kYWxUaGFua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtdGhhbmtzJyk7XHJcbiAgdmFyIG1vZGFsQ2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubW9kYWxfX2J0bi1jbG9zZWQnKTtcclxuXHJcbiAgaWYgKG1vZGFsVGhhbmtzKSB7XHJcblxyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtb2RhbENsb3NlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIG1vZGFsQ2xvc2VbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZ0KSB7XHJcbiAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIG1vZGFsVGhhbmtzLmNsYXNzTGlzdC5yZW1vdmUoJ21vZGFsLWFjdGl2ZScpO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnJztcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoYGtleWRvd25gLCBmdW5jdGlvbiAoZXZ0KSB7XHJcblxyXG4gICAgICBpZiAoZXZ0LmtleUNvZGUgPT09IEtFWV9DT0RFKSB7XHJcbiAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIG1vZGFsVGhhbmtzLmNsYXNzTGlzdC5jb250YWlucygnbW9kYWwtYWN0aXZlJyk7XHJcbiAgICAgICAgbW9kYWxUaGFua3MuY2xhc3NMaXN0LnJlbW92ZSgnbW9kYWwtYWN0aXZlJyk7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IGBgO1xyXG5cclxuICAgICAgfVxyXG5cclxuICAgIH0pO1xyXG5cclxuICAgIG92ZXJsYXlNb2RhbC5hZGRFdmVudExpc3RlbmVyKGBjbGlja2AsIGZ1bmN0aW9uIChldnQpIHtcclxuXHJcbiAgICAgIGlmIChldnQudGFyZ2V0ID09PSBvdmVybGF5TW9kYWwpIHtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IGBgO1xyXG5cclxuICAgICAgfVxyXG5cclxuICAgIH0pO1xyXG5cclxuICAgIG1vZGFsVGhhbmtzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2dCkge1xyXG5cclxuICAgICAgaWYgKGV2dC50YXJnZXQgPT09IG1vZGFsVGhhbmtzKSB7XHJcbiAgICAgICAgbW9kYWxUaGFua3MuY2xhc3NMaXN0LmNvbnRhaW5zKCdtb2RhbC1hY3RpdmUnKTtcclxuICAgICAgICBtb2RhbFRoYW5rcy5jbGFzc0xpc3QucmVtb3ZlKCdtb2RhbC1hY3RpdmUnKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gYGA7XHJcbiAgICAgIH1cclxuXHJcbiAgICB9KVxyXG5cclxuICB9XHJcblxyXG59KSgpO1xyXG4ndXNlIHN0cmljdCc7XHJcblxyXG4oZnVuY3Rpb24gKCkge1xyXG5cclxuICBjb25zdCBLRVlfQ09ERSA9IDI3O1xyXG5cclxuICB2YXIgb3ZlcmxheU1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsJyk7XHJcbiAgdmFyIG1vZGFsRmVlZGJhY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtZmVlZGJhY2snKTtcclxuICB2YXIgbW9kYWxGZWVkYmFja0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mZWVkYmFjay1idG4nKTtcclxuICB2YXIgbW9kYWxDbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tb2RhbF9fYnRuLWNsb3NlZCcpO1xyXG5cclxuICBpZiAobW9kYWxGZWVkYmFja0J0bikge1xyXG5cclxuICAgIG1vZGFsRmVlZGJhY2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZ0KSB7XHJcbiAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgbW9kYWxGZWVkYmFjay5jbGFzc0xpc3QuYWRkKCdtb2RhbC1hY3RpdmUnKTtcclxuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtb2RhbENsb3NlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIG1vZGFsQ2xvc2VbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZ0KSB7XHJcbiAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIG1vZGFsRmVlZGJhY2suY2xhc3NMaXN0LnJlbW92ZSgnbW9kYWwtYWN0aXZlJyk7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICcnO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihga2V5ZG93bmAsIGZ1bmN0aW9uIChldnQpIHtcclxuXHJcbiAgICAgIGlmIChldnQua2V5Q29kZSA9PT0gS0VZX0NPREUpIHtcclxuICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgbW9kYWxGZWVkYmFjay5jbGFzc0xpc3QuY29udGFpbnMoYG1vZGFsLWFjdGl2ZWApO1xyXG4gICAgICAgIG1vZGFsRmVlZGJhY2suY2xhc3NMaXN0LnJlbW92ZShgbW9kYWwtYWN0aXZlYCk7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IGBgO1xyXG5cclxuICAgICAgfVxyXG5cclxuICAgIH0pO1xyXG5cclxuICAgIG92ZXJsYXlNb2RhbC5hZGRFdmVudExpc3RlbmVyKGBjbGlja2AsIGZ1bmN0aW9uIChldnQpIHtcclxuXHJcbiAgICAgIGlmIChldnQudGFyZ2V0ID09PSBvdmVybGF5TW9kYWwpIHtcclxuXHJcbiAgICAgICAgbW9kYWxGZWVkYmFjay5jbGFzc0xpc3QucmVtb3ZlKGBtb2RhbC1hY3RpdmVgKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gYGA7XHJcblxyXG4gICAgICB9XHJcblxyXG4gICAgfSk7XHJcblxyXG4gIH1cclxuXHJcbn0pKCk7XHJcbid1c2Ugc3RyaWN0JztcclxuXHJcbihmdW5jdGlvbiAoKSB7XHJcblxyXG4gIGNvbnN0IEtFWV9DT0RFID0gMjc7XHJcblxyXG4gIHZhciBvdmVybGF5TW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKTtcclxuICB2YXIgbW9kYWxBbmFseXNpcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1hbmFseXNpcycpO1xyXG4gIHZhciBtb2RhbEFuYWx5c2lzQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFuYWx5c2lzLWJ0bicpO1xyXG4gIHZhciBtb2RhbENsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1vZGFsX19idG4tY2xvc2VkJyk7XHJcblxyXG4gIGlmIChtb2RhbEFuYWx5c2lzQnRuKSB7XHJcblxyXG4gICAgbW9kYWxBbmFseXNpc0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldnQpIHtcclxuICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICBtb2RhbEFuYWx5c2lzLmNsYXNzTGlzdC5hZGQoJ21vZGFsLWFjdGl2ZScpO1xyXG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XHJcbiAgICB9KTtcclxuXHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG1vZGFsQ2xvc2UubGVuZ3RoOyBpKyspIHtcclxuICAgICAgbW9kYWxDbG9zZVtpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldnQpIHtcclxuICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgbW9kYWxBbmFseXNpcy5jbGFzc0xpc3QucmVtb3ZlKCdtb2RhbC1hY3RpdmUnKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJyc7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKGBrZXlkb3duYCwgZnVuY3Rpb24gKGV2dCkge1xyXG5cclxuICAgICAgaWYgKGV2dC5rZXlDb2RlID09PSBLRVlfQ09ERSkge1xyXG4gICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICBtb2RhbEFuYWx5c2lzLmNsYXNzTGlzdC5jb250YWlucyhgbW9kYWwtYWN0aXZlYCk7XHJcbiAgICAgICAgbW9kYWxBbmFseXNpcy5jbGFzc0xpc3QucmVtb3ZlKGBtb2RhbC1hY3RpdmVgKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gYGA7XHJcblxyXG4gICAgICB9XHJcblxyXG4gICAgfSk7XHJcblxyXG4gICAgb3ZlcmxheU1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoYGNsaWNrYCwgZnVuY3Rpb24gKGV2dCkge1xyXG5cclxuICAgICAgaWYgKGV2dC50YXJnZXQgPT09IG92ZXJsYXlNb2RhbCkge1xyXG5cclxuICAgICAgICBtb2RhbEFuYWx5c2lzLmNsYXNzTGlzdC5yZW1vdmUoYG1vZGFsLWFjdGl2ZWApO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBgYDtcclxuXHJcbiAgICAgIH1cclxuXHJcbiAgICB9KTtcclxuXHJcbiAgfVxyXG5cclxufSkoKTtcclxuJ3VzZSBzdHJpY3QnO1xyXG5cclxuKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgY29uc3QgS0VZX0NPREUgPSAyNztcclxuXHJcbiAgdmFyIG92ZXJsYXlNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpO1xyXG4gIHZhciBtb2RhbENvbnN1bHRhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1jb25zdWx0YXRpb24nKTtcclxuICB2YXIgbW9kYWxDb25zdWx0YXRpb25CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9ydGZvbGlvLW1vZGFsLWpzJyk7XHJcblxyXG4gIGlmIChtb2RhbENvbnN1bHRhdGlvbkJ0bikge1xyXG5cclxuICAgIHZhciBtb2RhbENsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1vZGFsX19idG4tY2xvc2VkJyk7XHJcblxyXG4gICAgICBtb2RhbENvbnN1bHRhdGlvbkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldnQpIHtcclxuICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgbW9kYWxDb25zdWx0YXRpb24uY2xhc3NMaXN0LmFkZCgnbW9kYWwtYWN0aXZlJyk7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG1vZGFsQ2xvc2UubGVuZ3RoOyBpKyspIHtcclxuICAgICAgbW9kYWxDbG9zZVtpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldnQpIHtcclxuICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgbW9kYWxDb25zdWx0YXRpb24uY2xhc3NMaXN0LnJlbW92ZSgnbW9kYWwtYWN0aXZlJyk7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICcnO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihga2V5ZG93bmAsIGZ1bmN0aW9uIChldnQpIHtcclxuXHJcbiAgICAgIGlmIChldnQua2V5Q29kZSA9PT0gS0VZX0NPREUpIHtcclxuICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgbW9kYWxDb25zdWx0YXRpb24uY2xhc3NMaXN0LmNvbnRhaW5zKGBtb2RhbC1hY3RpdmVgKTtcclxuICAgICAgICBtb2RhbENvbnN1bHRhdGlvbi5jbGFzc0xpc3QucmVtb3ZlKGBtb2RhbC1hY3RpdmVgKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gYGA7XHJcblxyXG4gICAgICB9XHJcblxyXG4gICAgfSk7XHJcblxyXG4gICAgb3ZlcmxheU1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoYGNsaWNrYCwgZnVuY3Rpb24gKGV2dCkge1xyXG5cclxuICAgICAgaWYgKGV2dC50YXJnZXQgPT09IG92ZXJsYXlNb2RhbCkge1xyXG5cclxuICAgICAgICBtb2RhbENvbnN1bHRhdGlvbi5jbGFzc0xpc3QucmVtb3ZlKGBtb2RhbC1hY3RpdmVgKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gYGA7XHJcblxyXG4gICAgICB9XHJcblxyXG4gICAgfSk7XHJcblxyXG4gIH1cclxuXHJcbiAgJChkb2N1bWVudCkub24oJ21zZTJfbG9hZCcsIGZ1bmN0aW9uKGUsIGRhdGEpIHtcclxuXHJcbiAgICBjb25zdCBLRVlfQ09ERSA9IDI3O1xyXG5cclxuICAgIHZhciBvdmVybGF5TW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKTtcclxuICAgIHZhciBtb2RhbENvbnN1bHRhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1jb25zdWx0YXRpb24nKTtcclxuICAgIHZhciBtb2RhbENvbnN1bHRhdGlvbkJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3J0Zm9saW8tbW9kYWwtanMnKTtcclxuXHJcbiAgICBpZiAobW9kYWxDb25zdWx0YXRpb25CdG4pIHtcclxuXHJcbiAgICAgIHZhciBtb2RhbENsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1vZGFsX19idG4tY2xvc2VkJyk7XHJcblxyXG4gICAgICBtb2RhbENvbnN1bHRhdGlvbkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldnQpIHtcclxuICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgbW9kYWxDb25zdWx0YXRpb24uY2xhc3NMaXN0LmFkZCgnbW9kYWwtYWN0aXZlJyk7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbW9kYWxDbG9zZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIG1vZGFsQ2xvc2VbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZ0KSB7XHJcbiAgICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICBtb2RhbENvbnN1bHRhdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCdtb2RhbC1hY3RpdmUnKTtcclxuICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnJztcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoYGtleWRvd25gLCBmdW5jdGlvbiAoZXZ0KSB7XHJcblxyXG4gICAgICAgIGlmIChldnQua2V5Q29kZSA9PT0gS0VZX0NPREUpIHtcclxuICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgIG1vZGFsQ29uc3VsdGF0aW9uLmNsYXNzTGlzdC5jb250YWlucyhgbW9kYWwtYWN0aXZlYCk7XHJcbiAgICAgICAgICBtb2RhbENvbnN1bHRhdGlvbi5jbGFzc0xpc3QucmVtb3ZlKGBtb2RhbC1hY3RpdmVgKTtcclxuICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBgYDtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgfSk7XHJcblxyXG4gICAgICBvdmVybGF5TW9kYWwuYWRkRXZlbnRMaXN0ZW5lcihgY2xpY2tgLCBmdW5jdGlvbiAoZXZ0KSB7XHJcblxyXG4gICAgICAgIGlmIChldnQudGFyZ2V0ID09PSBvdmVybGF5TW9kYWwpIHtcclxuXHJcbiAgICAgICAgICBtb2RhbENvbnN1bHRhdGlvbi5jbGFzc0xpc3QucmVtb3ZlKGBtb2RhbC1hY3RpdmVgKTtcclxuICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBgYDtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG5cclxuICB9KTtcclxuXHJcbn0pKCk7XHJcbid1c2Ugc3RyaWN0JztcclxuXHJcbihmdW5jdGlvbiAoKSB7XHJcblxyXG4gIGNvbnN0IEtFWV9DT0RFID0gMjc7XHJcblxyXG4gIHZhciBvdmVybGF5TW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKTtcclxuICB2YXIgbW9kYWxRdWVzdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1xdWVzdGlvbicpO1xyXG4gIHZhciBtb2RhbENsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1vZGFsX19idG4tY2xvc2VkJyk7XHJcbiAgdmFyIGxpbmtQaG9uZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5saW5rLW1vZGFsLXF1ZXN0aW9uJyk7XHJcblxyXG4gIGlmIChtb2RhbFF1ZXN0aW9uKSB7XHJcblxyXG4gICAgdmFyIG1vZGFsU2hvdyA9IGZ1bmN0aW9uIChldnQpIHtcclxuICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICBtb2RhbFF1ZXN0aW9uLmNsYXNzTGlzdC5hZGQoJ21vZGFsLWFjdGl2ZScpO1xyXG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XHJcbiAgICB9O1xyXG5cclxuICAgIGxpbmtQaG9uZS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtLCBpKSB7XHJcbiAgICAgIGxpbmtQaG9uZVtpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG1vZGFsU2hvdyk7XHJcbiAgICB9KVxyXG5cclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbW9kYWxDbG9zZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICBtb2RhbENsb3NlW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2dCkge1xyXG4gICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICBtb2RhbFF1ZXN0aW9uLmNsYXNzTGlzdC5yZW1vdmUoJ21vZGFsLWFjdGl2ZScpO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnJztcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoYGtleWRvd25gLCBmdW5jdGlvbiAoZXZ0KSB7XHJcblxyXG4gICAgICBpZiAoZXZ0LmtleUNvZGUgPT09IEtFWV9DT0RFKSB7XHJcbiAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIG1vZGFsUXVlc3Rpb24uY2xhc3NMaXN0LmNvbnRhaW5zKCdtb2RhbC1hY3RpdmUnKTtcclxuICAgICAgICBtb2RhbFF1ZXN0aW9uLmNsYXNzTGlzdC5yZW1vdmUoJ21vZGFsLWFjdGl2ZScpO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBgYDtcclxuXHJcbiAgICAgIH1cclxuXHJcbiAgICB9KTtcclxuXHJcbiAgICBvdmVybGF5TW9kYWwuYWRkRXZlbnRMaXN0ZW5lcihgY2xpY2tgLCBmdW5jdGlvbiAoZXZ0KSB7XHJcblxyXG4gICAgICBpZiAoZXZ0LnRhcmdldCA9PT0gb3ZlcmxheU1vZGFsKSB7XHJcblxyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBgYDtcclxuXHJcbiAgICAgIH1cclxuXHJcbiAgICB9KTtcclxuXHJcbiAgICBtb2RhbFF1ZXN0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2dCkge1xyXG5cclxuICAgICAgaWYgKGV2dC50YXJnZXQgPT09IG1vZGFsUXVlc3Rpb24pIHtcclxuICAgICAgICBtb2RhbFF1ZXN0aW9uLmNsYXNzTGlzdC5jb250YWlucygnbW9kYWwtYWN0aXZlJyk7XHJcbiAgICAgICAgbW9kYWxRdWVzdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCdtb2RhbC1hY3RpdmUnKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gYGA7XHJcbiAgICAgIH1cclxuXHJcbiAgICB9KVxyXG5cclxuICB9XHJcblxyXG59KSgpO1xyXG4ndXNlIHN0cmljdCc7XHJcblxyXG4oZnVuY3Rpb24gKCkge1xyXG5cclxuICBjb25zdCBLRVlfQ09ERSA9IDI3O1xyXG5cclxuICB2YXIgc2VydmljZXNNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1zZXJ2aWNlcy1vcmRlcicpO1xyXG5cclxuICBpZiAoc2VydmljZXNNb2RhbCkge1xyXG5cclxuICAgIHZhciBtb2RhbFNlcnZpY2VzQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNlcnZpY2VzLW1vZGFsLWpzJyk7XHJcbiAgICB2YXIgbW9kYWxDbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tb2RhbF9fYnRuLWNsb3NlZCcpO1xyXG4gICAgdmFyIHNlcnZpY2VzQmFubmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlcnZpY2VzX19pbWFnZS1zZW8gaW1nJyk7XHJcblxyXG4gICAgaWYgKHNlcnZpY2VzQmFubmVyKSB7XHJcblxyXG4gICAgICBzZXJ2aWNlc0Jhbm5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBzZXJ2aWNlc01vZGFsLmNsYXNzTGlzdC5hZGQoJ21vZGFsLWFjdGl2ZScpO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZm9yICh2YXIgeSA9IDA7IHkgPCBtb2RhbFNlcnZpY2VzQnRuLmxlbmd0aDsgeSsrKSB7XHJcblxyXG4gICAgICBtb2RhbFNlcnZpY2VzQnRuW3ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2dCkge1xyXG4gICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICBzZXJ2aWNlc01vZGFsLmNsYXNzTGlzdC5hZGQoJ21vZGFsLWFjdGl2ZScpO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcclxuICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbW9kYWxDbG9zZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICBtb2RhbENsb3NlW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2dCkge1xyXG4gICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICBzZXJ2aWNlc01vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ21vZGFsLWFjdGl2ZScpO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnJztcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoYGtleWRvd25gLCBmdW5jdGlvbiAoZXZ0KSB7XHJcblxyXG4gICAgICBpZiAoZXZ0LmtleUNvZGUgPT09IEtFWV9DT0RFKSB7XHJcbiAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIHNlcnZpY2VzTW9kYWwuY2xhc3NMaXN0LmNvbnRhaW5zKGBtb2RhbC1hY3RpdmVgKTtcclxuICAgICAgICBzZXJ2aWNlc01vZGFsLmNsYXNzTGlzdC5yZW1vdmUoYG1vZGFsLWFjdGl2ZWApO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBgYDtcclxuXHJcbiAgICAgIH1cclxuXHJcbiAgICB9KTtcclxuXHJcbiAgICBzZXJ2aWNlc01vZGFsLmFkZEV2ZW50TGlzdGVuZXIoYGNsaWNrYCwgZnVuY3Rpb24gKGV2dCkge1xyXG5cclxuICAgICAgaWYgKGV2dC50YXJnZXQgPT09IHNlcnZpY2VzTW9kYWwpIHtcclxuXHJcbiAgICAgICAgc2VydmljZXNNb2RhbC5jbGFzc0xpc3QucmVtb3ZlKGBtb2RhbC1hY3RpdmVgKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gYGA7XHJcblxyXG4gICAgICB9XHJcblxyXG4gICAgfSk7XHJcblxyXG4gIH1cclxuXHJcbn0pKCk7XHJcbid1c2Ugc3RyaWN0JztcclxuXHJcbihmdW5jdGlvbiAoKSB7XHJcblxyXG4gICQoJy5zZXJ2aWNlc19fYnRuLXRvb2x0aXAnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcygnc2VydmljZXNfX2J0bi10b29sdGlwLS1hY3RpdmUnKSkge1xyXG4gICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdzZXJ2aWNlc19fYnRuLXRvb2x0aXAtLWFjdGl2ZScpO1xyXG5cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQoXCIuc2VydmljZXNfX2J0bi10b29sdGlwXCIpLnJlbW92ZUNsYXNzKCdzZXJ2aWNlc19fYnRuLXRvb2x0aXAtLWFjdGl2ZScpO1xyXG4gICAgICAkKHRoaXMpLmFkZENsYXNzKCdzZXJ2aWNlc19fYnRuLXRvb2x0aXAtLWFjdGl2ZScpO1xyXG4gICAgfVxyXG4gICAgaWYgKCQodGhpcykucGFyZW50KCkucGFyZW50KCkucGFyZW50KCkuZmluZCgnLnNlcnZpY2VzX190ZXh0LWJveCcpLmhhc0NsYXNzKCdzZXJ2aWNlc19fdGV4dC1ib3gtLWFjdGl2ZScpKSB7XHJcbiAgICAgICQodGhpcykucGFyZW50KCkucGFyZW50KCkucGFyZW50KCkuZmluZCgnLnNlcnZpY2VzX190ZXh0LWJveCcpLnJlbW92ZUNsYXNzKCdzZXJ2aWNlc19fdGV4dC1ib3gtLWFjdGl2ZScpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJCgnLnNlcnZpY2VzX190ZXh0LWJveCcpLnJlbW92ZUNsYXNzKCdzZXJ2aWNlc19fdGV4dC1ib3gtLWFjdGl2ZScpO1xyXG4gICAgICAkKHRoaXMpLnBhcmVudCgpLnBhcmVudCgpLnBhcmVudCgpLmZpbmQoJy5zZXJ2aWNlc19fdGV4dC1ib3gnKS5hZGRDbGFzcygnc2VydmljZXNfX3RleHQtYm94LS1hY3RpdmUnKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgJCgnLnNlcnZpY2VzX19idG4tbW9yZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgIGlmICgkKHRoaXMpLmhhc0NsYXNzKCdzZXJ2aWNlc19fYnRuLW1vcmUtLWFjdGl2ZScpKSB7XHJcbiAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ3NlcnZpY2VzX19idG4tbW9yZS0tYWN0aXZlJyk7XHJcblxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJChcIi5zZXJ2aWNlc19fYnRuLW1vcmVcIikucmVtb3ZlQ2xhc3MoJ3NlcnZpY2VzX19idG4tbW9yZS0tYWN0aXZlJyk7XHJcbiAgICAgICQodGhpcykuYWRkQ2xhc3MoJ3NlcnZpY2VzX19idG4tbW9yZS0tYWN0aXZlJyk7XHJcbiAgICB9XHJcbiAgICBpZiAoJCh0aGlzKS5wYXJlbnQoKS5maW5kKCcuc2VydmljZXNfX3ByaWNlLXdyYXAnKS5oYXNDbGFzcygnc2VydmljZXNfX3ByaWNlLXdyYXAtLWFjdGl2ZScpKSB7XHJcbiAgICAgICQodGhpcykucGFyZW50KCkuZmluZCgnLnNlcnZpY2VzX19wcmljZS13cmFwJykucmVtb3ZlQ2xhc3MoJ3NlcnZpY2VzX19wcmljZS13cmFwLS1hY3RpdmUnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQoJy5zZXJ2aWNlc19fcHJpY2Utd3JhcCcpLnJlbW92ZUNsYXNzKCdzZXJ2aWNlc19fcHJpY2Utd3JhcC0tYWN0aXZlJyk7XHJcbiAgICAgICQodGhpcykucGFyZW50KCkuZmluZCgnLnNlcnZpY2VzX19wcmljZS13cmFwJykuYWRkQ2xhc3MoJ3NlcnZpY2VzX19wcmljZS13cmFwLS1hY3RpdmUnKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbn0pKCk7XHJcbid1c2Ugc3RyaWN0JztcclxuXHJcbihmdW5jdGlvbiAoKSB7XHJcblxyXG4gICQoZG9jdW1lbnQpLm9uKCdhZl9jb21wbGV0ZScsIGZ1bmN0aW9uIChldmVudCwgcmVzcG9uc2UpIHtcclxuXHJcbiAgICB2YXIgbW9kYWxDb25zdWx0YXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtY29uc3VsdGF0aW9uJyk7XHJcbiAgICB2YXIgbW9kYWxGZWVkYmFjayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1mZWVkYmFjaycpO1xyXG4gICAgdmFyIG1vZGFsQW5hbHlzaXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtYW5hbHlzaXMnKTtcclxuICAgIHZhciBtb2RhbFF1ZXN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLXF1ZXN0aW9uJyk7XHJcbiAgICB2YXIgbW9kYWxTZXJ2aWNlc09yZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLXNlcnZpY2VzLW9yZGVyJyk7XHJcbiAgICB2YXIgbW9kYWxUaGFua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtdGhhbmtzJyk7XHJcbiAgICB2YXIgZm9ybSA9IHJlc3BvbnNlLmZvcm07XHJcblxyXG4gICAgaWYgKGZvcm0uYXR0cignaWQnKSA9PT0gJ2Zvcm0tY29udGFjdHMnKSB7XHJcbiAgICAgIG1vZGFsVGhhbmtzLmNsYXNzTGlzdC5hZGQoJ21vZGFsLWFjdGl2ZScpO1xyXG4gICAgICByZXNwb25zZS5tZXNzYWdlID0gJyc7XHJcblxyXG4gICAgfSBlbHNlIGlmIChmb3JtLmF0dHIoJ2lkJykgPT09ICdmb3JtLXBvcnRmb2xpbycpIHtcclxuICAgICAgbW9kYWxUaGFua3MuY2xhc3NMaXN0LmFkZCgnbW9kYWwtYWN0aXZlJyk7XHJcbiAgICAgIG1vZGFsQ29uc3VsdGF0aW9uLmNsYXNzTGlzdC5yZW1vdmUoJ21vZGFsLWFjdGl2ZScpO1xyXG4gICAgICByZXNwb25zZS5tZXNzYWdlID0gJyc7XHJcblxyXG4gICAgfSBlbHNlIGlmIChmb3JtLmF0dHIoJ2lkJykgPT09ICdmb3JtLW1haW4nKSB7XHJcbiAgICAgIG1vZGFsVGhhbmtzLmNsYXNzTGlzdC5hZGQoJ21vZGFsLWFjdGl2ZScpO1xyXG4gICAgICByZXNwb25zZS5tZXNzYWdlID0gJyc7XHJcblxyXG4gICAgfSBlbHNlIGlmIChmb3JtLmF0dHIoJ2lkJykgPT09ICdmb3JtLWZlZWRiYWNrJykge1xyXG4gICAgICBtb2RhbEZlZWRiYWNrLmNsYXNzTGlzdC5yZW1vdmUoJ21vZGFsLWFjdGl2ZScpO1xyXG4gICAgICBtb2RhbFRoYW5rcy5jbGFzc0xpc3QuYWRkKCdtb2RhbC1hY3RpdmUnKTtcclxuICAgICAgcmVzcG9uc2UubWVzc2FnZSA9ICcnO1xyXG5cclxuICAgIH0gZWxzZSBpZiAoZm9ybS5hdHRyKCdpZCcpID09PSAnZm9ybS1hbmFseXNpcycpIHtcclxuICAgICAgbW9kYWxBbmFseXNpcy5jbGFzc0xpc3QucmVtb3ZlKCdtb2RhbC1hY3RpdmUnKTtcclxuICAgICAgbW9kYWxUaGFua3MuY2xhc3NMaXN0LmFkZCgnbW9kYWwtYWN0aXZlJyk7XHJcbiAgICAgIHJlc3BvbnNlLm1lc3NhZ2UgPSAnJztcclxuXHJcbiAgICB9IGVsc2UgaWYgKGZvcm0uYXR0cignaWQnKSA9PT0gJ2Zvcm0tcXVlc3Rpb24nKSB7XHJcbiAgICAgIG1vZGFsUXVlc3Rpb24uY2xhc3NMaXN0LnJlbW92ZSgnbW9kYWwtYWN0aXZlJyk7XHJcbiAgICAgIG1vZGFsVGhhbmtzLmNsYXNzTGlzdC5hZGQoJ21vZGFsLWFjdGl2ZScpO1xyXG4gICAgICByZXNwb25zZS5tZXNzYWdlID0gJyc7XHJcbiAgICB9IGVsc2UgaWYgKGZvcm0uYXR0cignaWQnKSA9PT0gJ2Zvcm0tb3JkZXInKSB7XHJcbiAgICAgIG1vZGFsU2VydmljZXNPcmRlci5jbGFzc0xpc3QucmVtb3ZlKCdtb2RhbC1hY3RpdmUnKTtcclxuICAgICAgbW9kYWxUaGFua3MuY2xhc3NMaXN0LmFkZCgnbW9kYWwtYWN0aXZlJyk7XHJcbiAgICAgIHJlc3BvbnNlLm1lc3NhZ2UgPSAnJztcclxuICAgIH1cclxuXHJcbiAgICBlbHNlIHtcclxuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgfVxyXG5cclxuICB9KTtcclxuXHJcbn0pKCk7XHJcbid1c2Ugc3RyaWN0JztcclxuXHJcbihmdW5jdGlvbiAoKSB7XHJcblxyXG4gIHZhciBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdhW2hyZWZePVwidGVsOlwiXScpO1xyXG5cclxuICB2YXIgcmVzaXplV2luZG93ID0gZnVuY3Rpb24gKGV2dCkge1xyXG4gICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDw9IDEwMjMpIHtcclxuICAgICAgZXZ0LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgYnRuLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZXNpemVXaW5kb3cpO1xyXG4gIH0pO1xyXG5cclxuICBidG4uZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCByZXNpemVXaW5kb3cpO1xyXG4gIH0pO1xyXG5cclxufSkoKTtcclxuJ3VzZSBzdHJpY3QnO1xyXG5cclxuKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgY29uc3QgREVTS1RPUF9XSURUSCA9IDEwMjM7XHJcbiAgdmFyIGZlZWRiYWNrTG9nbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mZWVkYmFja19fYm94LWxvZ290eXBlcycpO1xyXG5cclxuICBpZiAoZmVlZGJhY2tMb2dvICYmIHdpbmRvdy5pbm5lcldpZHRoID4gREVTS1RPUF9XSURUSCkge1xyXG5cclxuICAgIHZhciBmZWVkYmFja0JveEluZm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZmVlZGJhY2tfX2JveC1pbmZvIGEnKTtcclxuICAgIHZhciBmZWVkYmFja0FydGljbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZmVlZGJhY2tfX2JveCBhcnRpY2xlJyk7XHJcblxyXG4gICAgdmFyIHJlbW92ZUFjdGl2ZSA9IGZ1bmN0aW9uIChhcnJheSwgYWN0aXZlQ2xhc3MpIHtcclxuICAgICAgYXJyYXkuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShhY3RpdmVDbGFzcyk7XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9O1xyXG5cclxuICAgIGlmIChmZWVkYmFja0JveEluZm8pIHtcclxuICAgICAgZmVlZGJhY2tCb3hJbmZvLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0sIGkpIHtcclxuICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2dCkge1xyXG4gICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgcmVtb3ZlQWN0aXZlKGZlZWRiYWNrQm94SW5mbywgJ2ZlZWRiYWNrX19ib3gtaW5mby0tYWN0aXZlJyk7XHJcbiAgICAgICAgICByZW1vdmVBY3RpdmUoZmVlZGJhY2tBcnRpY2xlLCAnZmVlZGJhY2stYWN0aXZlJyk7XHJcbiAgICAgICAgICBmZWVkYmFja0JveEluZm9baV0uY2xhc3NMaXN0LmFkZCgnZmVlZGJhY2tfX2JveC1pbmZvLS1hY3RpdmUnKTtcclxuICAgICAgICAgIGZlZWRiYWNrQXJ0aWNsZVtpXS5jbGFzc0xpc3QuYWRkKCdmZWVkYmFjay1hY3RpdmUnKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufSkoKTsiXSwiZmlsZSI6Im1haW4uanMifQ==
