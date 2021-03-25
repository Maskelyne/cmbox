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

  // var checkCookies = function () {
  //   var cookieDate = localStorage.getItem('cookieDate');
  //   var cookieNotification = document.getElementById('cookie__notification');
  //   var cookieBtn = cookieNotification.querySelector('.cookie__accept');
  //   var cookieBtnClosed = cookieNotification.querySelector('.cookie__btn');
  //
  //   // Если записи про кукисы нет или она просрочена на 1 год, то показываем информацию про кукисы
  //   if (!cookieDate || (+cookieDate + 604800) < Date.now()) {
  //     cookieNotification.classList.add('show');
  //   }
  //
  //   // При клике на кнопку, в локальное хранилище записывается текущая дата в системе UNIX
  //   cookieBtn.addEventListener('click', function () {
  //     localStorage.setItem('cookieDate', Date.now());
  //     cookieNotification.classList.remove('show');
  //   });
  //
  //   cookieBtnClosed.addEventListener('click', function () {
  //     cookieNotification.classList.remove('show');
  //   });
  // };
  //
  // checkCookies();

  // document.ondragstart = test;
  // //запрет на перетаскивание
  // document.onselectstart = test;
  // //запрет на выделение элементов страницы
  // document.oncontextmenu = test;
  // //запрет на выведение контекстного меню
  // function test() {
  //   return false;
  // }

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

  $('#user_phone').change(function () {
    $('#user_phone').inputmask('remove');
    $('#user_phone').inputmasks(maskOpts);
  });

  $('#user_phone').change();

  $('#user_phone2').change(function () {
    $('#user_phone2').inputmask('remove');
    $('#user_phone2').inputmasks(maskOpts);
  });

  $('#user_phone2').change();

  $('#user_phone-question').change(function () {
    $('#user_phone-question').inputmask('remove');
    $('#user_phone-question').inputmasks(maskOpts);
  });

  $('#user_phone-question').change();

});

( function() {
  var youtube = document.querySelectorAll( ".youtube" );
  for (var i = 0; i < youtube.length; i++) {
    var source = "https://img.youtube.com/vi/"+ youtube[i].dataset.embed +"/sddefault.jpg";
    var image = new Image();
    image.src = source;
    image.addEventListener( "load", function() {
      youtube[ i ].appendChild( image );
    }( i ) );

    youtube[i].addEventListener( "click", function() {
      var iframe = document.createElement( "iframe" );
      iframe.setAttribute( "frameborder", "0" );
      iframe.setAttribute( "allowfullscreen", "" );
      iframe.setAttribute( "src", "https://www.youtube.com/embed/"+ this.dataset.embed +"?rel=0&showinfo=0&enablejsapi=1" );
      this.innerHTML = "";
      this.appendChild( iframe );
    } );
  };
} )();
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
  var mainSocialBox = document.querySelector('.main-header__social');
  var mainSocialBtn = document.querySelector('.main-header__social-btn');

  if (menuBtn) {

    menuBtn.addEventListener('click', function (evt) {
      evt.preventDefault();

      if (menuBtn.classList.contains('main-header__btn--closed')) {
        mainBoxPhone.classList.remove('main-header__tel--active');
        mainSocialBox.classList.remove('main-header__social--active');
        menuBtn.classList.remove('main-header__btn--closed');
        menuBtn.classList.add('main-header__btn--opened');
        wrapMenu.classList.add('main-header__wrap-menu--active');
        servicesMenu.classList.remove('main-header__services-nav--opened');
        servicesMenu.classList.add('main-header__services-nav--closed');
        servicesMenuBtn.classList.remove('main-header__link-services--opened');
        servicesMenuBtn.classList.add('main-header__link-services--closed');
        servicesWrapMenuBtn.classList.remove('main-header__services--opened');
        servicesWrapMenuBtn.classList.add('main-header__services--closed');
        stageMenu.classList.remove('main-header__stage-nav--opened');
        stageMenu.classList.add('main-header__stage-nav--closed');
        document.body.style.overflow = 'hidden';
      } else {
        mainBoxPhone.classList.remove('main-header__tel--active');
        mainSocialBox.classList.remove('main-header__social--active');
        menuBtn.classList.add('main-header__btn--closed');
        menuBtn.classList.remove('main-header__btn--opened');
        wrapMenu.classList.remove('main-header__wrap-menu--active');
        servicesMenu.classList.remove('main-header__services-nav--opened');
        servicesMenu.classList.add('main-header__services-nav--closed');
        servicesWrapMenuBtn.classList.remove('main-header__services--opened');
        servicesWrapMenuBtn.classList.add('main-header__services--closed');
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
          wrapMenu.classList.remove('main-header__wrap-menu--active');
          menuBtn.classList.remove('main-header__btn--opened');
          menuBtn.classList.add('main-header__btn--closed');
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

  mainPhone.addEventListener('click', function (evt) {
    evt.preventDefault();

    mainBoxPhone.classList.toggle('main-header__tel--active');

    if (mainSocialBox.classList.contains('main-header__social--active')) {
      mainSocialBox.classList.remove('main-header__social--active');
    }
  });

  mainSocialBtn.addEventListener('click', function (evt) {
    evt.preventDefault();

    mainSocialBox.classList.toggle('main-header__social--active');

    if (mainBoxPhone.classList.contains('main-header__tel--active')) {
      mainBoxPhone.classList.remove('main-header__tel--active');
    }
  });

})();
'use strict';

(function () {

  var mainSliderIntro = document.querySelector('.intro__box-swiper-container');
  var servicesSlider = document.querySelector('.services__swiper-container');
  var feedbackSlider = document.querySelector('.feedback-slider__swiper-container');

  var servicesSliderDesk = function (el) {
    return new Swiper(el, {
      loop: true,
      speed: 1000,
      spaceBetween: 30,
      navigation: {
        nextEl: '.services__swiper-button-next',
        prevEl: '.services__swiper-button-prev',
      },
      breakpoints: {
        768: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 2,
        }
      }
    });
  };

  if (servicesSlider) {
    servicesSliderDesk(servicesSlider);

    jQuery(function($){
      $(document).mouseup(function (e){
        var div = $(".swiper-slide");
        if (!div.is(e.target)
          && div.has(e.target).length === 0) {
          jQuery("iframe").each(function () {
            jQuery(this)[0].contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*')
          });
        }
      });
    });

    $(document).on('click', '.services__swiper-button-prev', function() {
      jQuery("iframe").each(function () {
        jQuery(this)[0].contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*')
      });
    });

    $(document).on('click', '.services__swiper-button-next', function() {
      jQuery("iframe").each(function () {
        jQuery(this)[0].contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*')
      });
    });
  }

  var mainSlider = function (el) {
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

  if (mainSliderIntro) {
    mainSlider(mainSliderIntro);
  }

  var createSlider = function (el) {
    return new Swiper(el, {
      loop: true,
      speed: 1000,
      spaceBetween: 30,
      allowTouchMove: true,
      slidesPerView: 1,
      navigation: {
        nextEl: '.feedback-slider__swiper-button-next',
        prevEl: '.feedback-slider__swiper-button-prev',
      },
      breakpoints: {
        768: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 2,
        }
      }
    });
  };

  if (feedbackSlider) {
    createSlider(feedbackSlider);

    jQuery(function($){
      $(document).mouseup(function (e){
        var div = $(".swiper-slide");
        if (!div.is(e.target)
          && div.has(e.target).length === 0) {
          jQuery("iframe").each(function () {
            jQuery(this)[0].contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*')
          });
        }
      });
    });

    $(document).on('click', '.feedback-slider__swiper-button-prev', function() {
      jQuery("iframe").each(function () {
        jQuery(this)[0].contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*')
      });
    });

    $(document).on('click', '.feedback-slider__swiper-button-next', function() {
      jQuery("iframe").each(function () {
        jQuery(this)[0].contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*')
      });
    });
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

    const DESKTOP_WIDTH = 1025;
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

  var servicesBoxWrapper = document.querySelector('.scroll-height');

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

})();
'use strict';

(function () {

  const DESKTOP_WIDTH = 1025;
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
      portfolioBoxImage.style.transform = 'translateY(-230%)';
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

  const DESKTOP_WIDTH = 1023;
  var feedbackLogo = document.querySelector('.feedback__box-logotypes');
  var feedbackActive = document.querySelector('.feedback__box-info--active')

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
        feedbackBoxInfo[0].classList.add('feedback__box-info--active');
        feedbackArticle[0].classList.add('feedback-active');
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

  jQuery(function($){
    $(document).mouseup(function (e){
      var div = $(".feedback__box-info--active");
      if (!div.is(e.target)
        && div.has(e.target).length === 0) {
        jQuery("iframe").each(function () {
          jQuery(this)[0].contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*')
        });
      }
    });
  });

})();
"use strict";

(function () {

  ymaps.ready(['AnimatedLine']).then(init);

  function init(ymaps) {
    var myMap = new ymaps.Map("map", {
      center: [53.94584848265721,27.637384904411103],
      zoom: 14
    }, {
      searchControlProvider: 'yandex#search'
    }),
    myGeoObject = new ymaps.GeoObject({
      geometry: {
        type: "Point",
        coordinates: [53.94584848265721,27.637384904411103]
      },
      properties: {
        iconContent: '<strong style="color: #C1122C;">Creative Marketing <span style="color: #0A3D76;">box</span></strong>',
      }
    }, {
      preset: 'islands#nightStretchyIcon'
    });

    myMap.geoObjects
      .add(myGeoObject);

    var firstPoint = new ymaps.Placemark([53.934553754850974,27.65181604365534], {}, {
      preset: 'islands#redRapidTransitCircleIcon'
    });

    var secondPoint = new ymaps.Placemark([53.945866374773246,27.637416782765623], {
      iconContent: '<strong style="color: #C1122C;">Creative Marketing <span style="color: #0A3D76;">box</span></strong>'
    }, {
      preset: 'islands#nightStretchyIcon'
    });

    var firstPoint2 = new ymaps.Placemark([53.93817995680188,27.67426527836589], {}, {
      preset: 'islands#redDotIconWithCaption'
    });

    var secondPoint2 = new ymaps.Placemark([53.945866374773246,27.637416782765623], {
      iconContent: '<strong style="color: #C1122C;">Creative Marketing <span style="color: #0A3D76;">box</span></strong>'
    }, {
      preset: 'islands#nightStretchyIcon'
    });

    var firstPoint3 = new ymaps.Placemark([53.96140071080269,27.622081066546055], {}, {
      preset: 'islands#redDotIconWithCaption'
    });

    var secondPoint3 = new ymaps.Placemark([53.94582563330561,27.63740142093737], {
      iconContent: '<strong style="color: #C1122C;">Creative Marketing <span style="color: #0A3D76;">box</span></strong>'
    }, {
      preset: 'islands#nightStretchyIcon'
    });

    var firstNumber = [
      [53.934553754850974,27.65181604365534],
      [53.935022239925225,27.653554115096988],
      [53.93566165021469,27.65593591670221],
      [53.93721898458482,27.654637727539008],
      [53.93768743959612,27.65443387965388],
      [53.93841543351884,27.6542407606048],
      [53.94018155704271,27.653811607162435],
      [53.94097280665829,27.653532657424883],
      [53.94133994135903,27.653210792343096],
      [53.941669093848326,27.652738723556467],
      [53.942150158177775,27.651976976196234],
      [53.94225143416855,27.651569280425974],
      [53.94225143416855,27.65118304232782],
      [53.941789360453186,27.6470524404449],
      [53.941764041196905,27.64562550524896],
      [53.94193494587724,27.644595536987257],
      [53.94240334769153,27.642954025070136],
      [53.94409334814974,27.642621431152296],
      [53.94521364761771,27.6420849893493],
      [53.94704358753966,27.6411933330586],
      [53.94752458960153,27.64010972061658],
      [53.94717016756995,27.639809313206896],
      [53.94704358753966,27.63896173515819],
      [53.94628409925314,27.63833946266675],
      [53.94606257921905,27.637931766896486],
      [53.945866374773246,27.637416782765623]
    ];
    var secondNumber = [
      [53.93817995680188,27.67426527836589],
      [53.941446295311565,27.67293490269448],
      [53.94183874505217,27.673128021743555],
      [53.941952681378915,27.673600090530183],
      [53.9422248613384,27.675617111709382],
      [53.94219321259758,27.675853146102696],
      [53.94202230898024,27.676046265151772],
      [53.941819755634015,27.67593897679117],
      [53.941667839975906,27.675724400069985],
      [53.93979265552001,27.669670215491767],
      [53.93577916771496,27.655797830466724],
      [53.93727319272114,27.654585471991997],
      [53.93781761220139,27.65439235294292],
      [53.94030144262354,27.653776773930964],
      [53.94106104035099,27.653454908849177],
      [53.9417383366061,27.652607330800475],
      [53.94218775138836,27.651856312276294],
      [53.94225737859551,27.651191124440615],
      [53.94178897513459,27.647060522557666],
      [53.94175931539808,27.645550860364974],
      [53.94195553925282,27.6444565190869],
      [53.94239229224572,27.64294375320249],
      [53.94424052941744,27.64255751510436],
      [53.94703804697479,27.641216410596897],
      [53.94739247013431,27.640519036253032],
      [53.94751272016169,27.640089882810667],
      [53.94716462702198,27.63982166190917],
      [53.94703804697479,27.638974083860465],
      [53.946284887714214,27.638341082532943],
      [53.94606969684447,27.637954844434812],
      [53.94583551727765,27.637386216123634]
    ];
    var thirdNumber = [
      [53.96140071080269,27.622081066546055],
      [53.960654139063394,27.624205376085857],
      [53.960206823799105,27.624628087049636],
      [53.95991578058212,27.624635822466246],
      [53.95807456857986,27.62364876954875],
      [53.955935291588595,27.621254597633715],
      [53.95572658677722,27.621685823360632],
      [53.95542285667201,27.622855266491122],
      [53.95525833527024,27.62445386306401],
      [53.955112796563505,27.62577350989934],
      [53.95449266939729,27.62776907340641],
      [53.95326504339508,27.6310628260767],
      [53.952050037579944,27.63361628905887],
      [53.95118305856242,27.635547479549594],
      [53.95048693091589,27.63790782348271],
      [53.9499236918216,27.63984974280949],
      [53.94948701805104,27.640525659481245],
      [53.948854149361196,27.641083558956346],
      [53.94753902043035,27.64115651355821],
      [53.947342822962064,27.640641529427374],
      [53.9475200336191,27.640126545296507],
      [53.947165611548606,27.639793951378643],
      [53.947032702492095,27.63891418682178],
      [53.94630664947877,27.638377745018783],
      [53.946072471248506,27.637894947396102],
      [53.94582563330561,27.63740142093737]
    ];

    var firstAnimatedLine = new ymaps.AnimatedLine(firstNumber, {}, {
      strokeColor: "#0A3D76",
      strokeWidth: 5,
      animationTime: 1000,
    });

    var secondAnimatedLine = new ymaps.AnimatedLine(secondNumber, {}, {
      strokeColor: "#0A3D76",
      strokeWidth: 5,
      animationTime: 1000
    });

    var thirdAnimatedLine = new ymaps.AnimatedLine(thirdNumber, {}, {
      strokeColor: "#0A3D76",
      strokeWidth: 5,
      animationTime: 1000
    });

    var btnVostok = document.querySelector('#btn-vostok');
    var btnMkad = document.querySelector('#btn-mkad');
    var btnLogoisk = document.querySelector('#btn-logoisk');
    var map = document.querySelector('.map');

    var firstLine = function () {
      map.classList.add('map--color-none');
      btnVostok.classList.add('btn-active');
      btnMkad.classList.remove('btn-active');
      btnLogoisk.classList.remove('btn-active');

      function setCenter () {
        myMap.setCenter([53.9415124518121,27.6444565190869]);
      }
      myMap.geoObjects.add(firstAnimatedLine);
      function playAnimation() {
        secondAnimatedLine.reset();
        thirdAnimatedLine.reset();
        myMap.geoObjects.remove(myGeoObject);
        myMap.geoObjects.remove(firstPoint2);
        myMap.geoObjects.remove(firstPoint3);
        myMap.geoObjects.remove(secondPoint2);
        myMap.geoObjects.remove(secondPoint3);
        myMap.geoObjects.add(firstPoint);
        firstAnimatedLine.animate()
          .then(function() {
            myMap.geoObjects.add(secondPoint);
          });
      }
      playAnimation();
      setCenter();
    };

    var secondLine = function () {
      map.classList.add('map--color-none');
      btnVostok.classList.remove('btn-active');
      btnLogoisk.classList.remove('btn-active');
      btnMkad.classList.add('btn-active');

      function setCenter () {
        myMap.setCenter([53.94224670842518,27.654842032392573]);
      }
      myMap.geoObjects.add(secondAnimatedLine);
      function playAnimation() {
        firstAnimatedLine.reset();
        thirdAnimatedLine.reset();
        myMap.geoObjects.remove(myGeoObject);
        myMap.geoObjects.remove(firstPoint);
        myMap.geoObjects.remove(firstPoint3);
        myMap.geoObjects.remove(secondPoint);
        myMap.geoObjects.remove(secondPoint3);
        myMap.geoObjects.add(firstPoint2);
        secondAnimatedLine.animate()
          .then(function() {
            myMap.geoObjects.add(secondPoint2);
          });
      }
      playAnimation();
      setCenter();
    };

    var thirdLine = function () {
      map.classList.add('map--color-none');
      btnVostok.classList.remove('btn-active');
      btnMkad.classList.remove('btn-active');
      btnLogoisk.classList.add('btn-active');

      function setCenter () {
        myMap.setCenter([53.95341684144641,27.632829761871292]);
      }
      myMap.geoObjects.add(thirdAnimatedLine);
      function playAnimation() {
        firstAnimatedLine.reset();
        secondAnimatedLine.reset();
        myMap.geoObjects.remove(myGeoObject);
        myMap.geoObjects.remove(firstPoint);
        myMap.geoObjects.remove(firstPoint2);
        myMap.geoObjects.remove(secondPoint);
        myMap.geoObjects.remove(secondPoint2);
        myMap.geoObjects.add(firstPoint3);
        thirdAnimatedLine.animate()
          .then(function() {
            myMap.geoObjects.add(secondPoint3);
          });
      }
      playAnimation();
      setCenter();
    };

    btnVostok.addEventListener('click', firstLine);
    btnMkad.addEventListener('click', secondLine);
    btnLogoisk.addEventListener('click', thirdLine);
  }

})();
"use strict";

(function () {

  ymaps.modules.define('AnimatedLine', [
    'util.defineClass',
    'Polyline',
    'vow'
  ], function(provide, defineClass, Polyline, vow) {
    /**
     * @fileOverview Анимированная линия.
     */
    /**
     * Создает экземпляр анимированной линии.
     * @class AnimatedLine. Представляет собой геообъект с геометрией geometry.LineString.
     * @param {Boolean} [options.animationTime = 4000] Длительность анимации.
     **/
    function AnimatedLine(geometry, properties, options) {
      AnimatedLine.superclass.constructor.call(this, geometry, properties, options);
      this._loopTime = 50;
      this._animationTime = this.options.get('animationTime', 10);
      // Вычислим длину переданной линии.
      var distance = 0;
      var previousElem = geometry[0];
      this.geometry.getCoordinates().forEach(function(elem) {
        distance += getDistance(elem, previousElem);
        previousElem = elem;
      });
      // Вычислим минимальный интервал отрисовки.
      this._animationInterval = distance / this._animationTime * this._loopTime;
      // Создадим массив с более частым расположением промежуточных точек.
      this._smoothCoords = generateSmoothCoords(geometry, this._animationInterval);
    }
    defineClass(AnimatedLine, Polyline, {
      // Анимировать линию.
      start: function() {
        var value = 0;
        var coords = this._smoothCoords;
        var line = this;
        var loopTime = this._loopTime;
        // Будем добавлять по одной точке каждые 50 мс.
        function loop(value, currentTime, previousTime) {
          if (value < coords.length) {
            if (!currentTime || (currentTime - previousTime) > loopTime) {
              line.geometry.set(value, coords[value]);
              value++;
              previousTime = currentTime;
            }
            requestAnimationFrame(function(time) {
              loop(value, time, previousTime || time)
            });
          } else {
            // Бросаем событие окончания отрисовки линии.
            line.events.fire('animationfinished');
          }
        }

        loop(value);
      },
      // Убрать отрисованную линию.
      reset: function() {
        this.geometry.setCoordinates([]);
      },
      // Запустить полный цикл анимации.
      animate: function() {
        this.reset();
        this.start();
        var deferred = vow.defer();
        this.events.once('animationfinished', function() {
          deferred.resolve();
        });
        return deferred.promise();
      }

    });
    // Функция генерации частых координат по заданной линии.
    function generateSmoothCoords(coords, interval) {
      var smoothCoords = [];
      smoothCoords.push(coords[0]);
      for (var i = 1; i < coords.length; i++) {
        var difference = [coords[i][0] - coords[i - 1][0], coords[i][1] - coords[i - 1][1]];
        var maxAmount = Math.max(Math.abs(difference[0] / interval), Math.abs(difference[1] / interval));
        var minDifference = [difference[0] / maxAmount, difference[1] / maxAmount];
        var lastCoord = coords[i - 1];
        while (maxAmount > 1) {
          lastCoord = [lastCoord[0] + minDifference[0], lastCoord[1] + minDifference[1]];
          smoothCoords.push(lastCoord);
          maxAmount--;
        }
        smoothCoords.push(coords[i])
      }
      return smoothCoords;
    }
    // Функция нахождения расстояния между двумя точками на плоскости.
    function getDistance(point1, point2) {
      return Math.sqrt(
        Math.pow((point2[0] - point1[0]), 2) +
        Math.pow((point2[1] - point1[1]), 2)
      );
    }
    provide(AnimatedLine);
  });

})();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qXHJcblxyXG4gICog0L/QvtC00LrQu9GO0YfQtdC90LjQtSBqcy3QvNC+0LTRg9C70LXQuVxyXG4gICogLy89IG1vZHVsZXMvZmlsZS5qc1xyXG5cclxuKi9cclxuXHJcbid1c2Ugc3RyaWN0JztcclxuXHJcbiQoZnVuY3Rpb24gKCkge1xyXG5cclxuICAkKFwiI3VzZXJfbmFtZVwiKS5rZXl1cChmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAoJCh0aGlzKS52YWwoKSkge1xyXG4gICAgICAkKHRoaXMpLmFkZENsYXNzKFwibm90LWVtcHR5XCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcyhcIm5vdC1lbXB0eVwiKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgJChcIiN1c2VyX25hbWUyXCIpLmtleXVwKGZ1bmN0aW9uICgpIHtcclxuICAgIGlmICgkKHRoaXMpLnZhbCgpKSB7XHJcbiAgICAgICQodGhpcykuYWRkQ2xhc3MoXCJub3QtZW1wdHlcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKFwibm90LWVtcHR5XCIpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICAkKFwiI3VzZXJfY29tcGFueVwiKS5rZXl1cChmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAoJCh0aGlzKS52YWwoKSkge1xyXG4gICAgICAkKHRoaXMpLmFkZENsYXNzKFwibm90LWVtcHR5XCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcyhcIm5vdC1lbXB0eVwiKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgJChcIiN1c2VyX3Bob25lXCIpLmtleXVwKGZ1bmN0aW9uICgpIHtcclxuICAgIGlmICgkKHRoaXMpLnZhbCgpKSB7XHJcbiAgICAgICQodGhpcykuYWRkQ2xhc3MoXCJub3QtZW1wdHlcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKFwibm90LWVtcHR5XCIpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICAkKFwiI3VzZXJfcGhvbmUyXCIpLmtleXVwKGZ1bmN0aW9uICgpIHtcclxuICAgIGlmICgkKHRoaXMpLnZhbCgpKSB7XHJcbiAgICAgICQodGhpcykuYWRkQ2xhc3MoXCJub3QtZW1wdHlcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKFwibm90LWVtcHR5XCIpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICAkKFwiI3VzZXJfZW1haWxcIikua2V5dXAoZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKCQodGhpcykudmFsKCkpIHtcclxuICAgICAgJCh0aGlzKS5hZGRDbGFzcyhcIm5vdC1lbXB0eVwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoXCJub3QtZW1wdHlcIik7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gICQoXCIjdXNlcl9jb21tZW50XCIpLmtleXVwKGZ1bmN0aW9uICgpIHtcclxuICAgIGlmICgkKHRoaXMpLnZhbCgpKSB7XHJcbiAgICAgICQodGhpcykuYWRkQ2xhc3MoJ25vdC1lbXB0eScpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnbm90LWVtcHR5Jyk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gICQoXCIjdXNlcl9jb21tZW50c1wiKS5rZXl1cChmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAoJCh0aGlzKS52YWwoKSkge1xyXG4gICAgICAkKHRoaXMpLmFkZENsYXNzKCdub3QtZW1wdHknKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ25vdC1lbXB0eScpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICAkKFwiI3VzZXJfcG9zaXRpb25cIikua2V5dXAoZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKCQodGhpcykudmFsKCkpIHtcclxuICAgICAgJCh0aGlzKS5hZGRDbGFzcygnbm90LWVtcHR5Jyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdub3QtZW1wdHknKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgJChcIiN1c2VyX3NpdGVcIikua2V5dXAoZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKCQodGhpcykudmFsKCkpIHtcclxuICAgICAgJCh0aGlzKS5hZGRDbGFzcygnbm90LWVtcHR5Jyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdub3QtZW1wdHknKTtcclxuICAgIH1cclxuICB9KTtcclxuICAkKFwiI3VzZXJfcGhvbmUtcXVlc3Rpb25cIikua2V5dXAoZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKCQodGhpcykudmFsKCkpIHtcclxuICAgICAgJCh0aGlzKS5hZGRDbGFzcygnbm90LWVtcHR5Jyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdub3QtZW1wdHknKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgJCgnLmxhenlZVCcpLmxhenlZVCgpO1xyXG5cclxuICAkKCdbZGF0YS1mYW5jeWJveD1cInBob3RvXCJdJykuZmFuY3lib3goe1xyXG4gICAgYnV0dG9uczogW1xyXG4gICAgICAnc2xpZGVTaG93JyxcclxuICAgICAgJ3NoYXJlJyxcclxuICAgICAgJ3pvb20nLFxyXG4gICAgICAnZnVsbFNjcmVlbicsXHJcbiAgICAgICdjbG9zZSdcclxuICAgIF0sXHJcbiAgfSk7XHJcblxyXG4gICAgJCgnI2Zvcm0tcG9ydGZvbGlvJykudmFsaWRhdGUoe1xyXG4gICAgICBtZXNzYWdlczoge1xyXG4gICAgICAgIG5hbWU6ICfQktCy0LXQtNC40YLQtSDQstCw0YjQtSDQuNC80Y8nLFxyXG4gICAgICAgIHBob25lOiAn0JLQstC10LTQuNGC0LUg0LLQsNGIINC90L7QvNC10YAg0YLQtdC70LXRhNC+0L3QsCcsXHJcbiAgICAgIH0sXHJcbiAgICAgIGVycm9yRWxlbWVudDogJ3NwYW4nLFxyXG4gICAgfSk7XHJcblxyXG4gICAgJCgnI2Zvcm0tb3JkZXInKS52YWxpZGF0ZSh7XHJcbiAgICAgIG1lc3NhZ2VzOiB7XHJcbiAgICAgICAgbmFtZTogJ9CS0LLQtdC00LjRgtC1INCy0LDRiNC1INC40LzRjycsXHJcbiAgICAgICAgcGhvbmU6ICfQktCy0LXQtNC40YLQtSDQstCw0Ygg0L3QvtC80LXRgCDRgtC10LvQtdGE0L7QvdCwJyxcclxuICAgICAgfSxcclxuICAgICAgZXJyb3JFbGVtZW50OiAnc3BhbicsXHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCcjZm9ybS1hbmFseXNpcycpLnZhbGlkYXRlKHtcclxuICAgICAgbWVzc2FnZXM6IHtcclxuICAgICAgICBuYW1lOiAn0JLQstC10LTQuNGC0LUg0LLQsNGI0LUg0LjQvNGPJyxcclxuICAgICAgICBwaG9uZTogJ9CS0LLQtdC00LjRgtC1INCy0LDRiCDQvdC+0LzQtdGAINGC0LXQu9C10YTQvtC90LAnLFxyXG4gICAgICB9LFxyXG4gICAgICBlcnJvckVsZW1lbnQ6ICdzcGFuJyxcclxuICAgIH0pO1xyXG5cclxuICAgICQoJyNmb3JtLXF1ZXN0aW9uJykudmFsaWRhdGUoe1xyXG4gICAgICBtZXNzYWdlczoge1xyXG4gICAgICAgIHBob25lOiAn0JLQstC10LTQuNGC0LUg0LLQsNGIINC90L7QvNC10YAg0YLQtdC70LXRhNC+0L3QsCcsXHJcbiAgICAgIH0sXHJcbiAgICAgIGVycm9yRWxlbWVudDogJ3NwYW4nLFxyXG4gICAgfSk7XHJcblxyXG4gICAgJCgnI2Zvcm0tbWFpbicpLnZhbGlkYXRlKHtcclxuICAgICAgbWVzc2FnZXM6IHtcclxuICAgICAgICBwaG9uZTogJ9CS0LLQtdC00LjRgtC1INCy0LDRiCDQvdC+0LzQtdGAINGC0LXQu9C10YTQvtC90LAnLFxyXG4gICAgICB9LFxyXG4gICAgICBlcnJvckVsZW1lbnQ6ICdzcGFuJyxcclxuICAgIH0pO1xyXG5cclxuICB2YXIgY2xpcGJvYXJkID0gbmV3IENsaXBib2FyZEpTKCcudXNlci1idXR0b24nKTtcclxuICB2YXIgdGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbGlwLXRleHQnKTtcclxuICBjbGlwYm9hcmQub24oJ3N1Y2Nlc3MnLCBmdW5jdGlvbihlKSB7XHJcbiAgICB0ZXh0LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgc2V0VGltZW91dChjbGlwVGV4dCwgNTAwMCk7XHJcbiAgICBlLmNsZWFyU2VsZWN0aW9uKCk7XHJcbiAgfSk7XHJcblxyXG4gIHZhciBjbGlwVGV4dCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHRleHQuc3R5bGUuZGlzcGxheSA9ICcnO1xyXG4gIH07XHJcblxyXG4gIC8vIHZhciBjaGVja0Nvb2tpZXMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgLy8gICB2YXIgY29va2llRGF0ZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjb29raWVEYXRlJyk7XHJcbiAgLy8gICB2YXIgY29va2llTm90aWZpY2F0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nvb2tpZV9fbm90aWZpY2F0aW9uJyk7XHJcbiAgLy8gICB2YXIgY29va2llQnRuID0gY29va2llTm90aWZpY2F0aW9uLnF1ZXJ5U2VsZWN0b3IoJy5jb29raWVfX2FjY2VwdCcpO1xyXG4gIC8vICAgdmFyIGNvb2tpZUJ0bkNsb3NlZCA9IGNvb2tpZU5vdGlmaWNhdGlvbi5xdWVyeVNlbGVjdG9yKCcuY29va2llX19idG4nKTtcclxuICAvL1xyXG4gIC8vICAgLy8g0JXRgdC70Lgg0LfQsNC/0LjRgdC4INC/0YDQviDQutGD0LrQuNGB0Ysg0L3QtdGCINC40LvQuCDQvtC90LAg0L/RgNC+0YHRgNC+0YfQtdC90LAg0L3QsCAxINCz0L7QtCwg0YLQviDQv9C+0LrQsNC30YvQstCw0LXQvCDQuNC90YTQvtGA0LzQsNGG0LjRjiDQv9GA0L4g0LrRg9C60LjRgdGLXHJcbiAgLy8gICBpZiAoIWNvb2tpZURhdGUgfHwgKCtjb29raWVEYXRlICsgNjA0ODAwKSA8IERhdGUubm93KCkpIHtcclxuICAvLyAgICAgY29va2llTm90aWZpY2F0aW9uLmNsYXNzTGlzdC5hZGQoJ3Nob3cnKTtcclxuICAvLyAgIH1cclxuICAvL1xyXG4gIC8vICAgLy8g0J/RgNC4INC60LvQuNC60LUg0L3QsCDQutC90L7Qv9C60YMsINCyINC70L7QutCw0LvRjNC90L7QtSDRhdGA0LDQvdC40LvQuNGJ0LUg0LfQsNC/0LjRgdGL0LLQsNC10YLRgdGPINGC0LXQutGD0YnQsNGPINC00LDRgtCwINCyINGB0LjRgdGC0LXQvNC1IFVOSVhcclxuICAvLyAgIGNvb2tpZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAvLyAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2Nvb2tpZURhdGUnLCBEYXRlLm5vdygpKTtcclxuICAvLyAgICAgY29va2llTm90aWZpY2F0aW9uLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcclxuICAvLyAgIH0pO1xyXG4gIC8vXHJcbiAgLy8gICBjb29raWVCdG5DbG9zZWQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgLy8gICAgIGNvb2tpZU5vdGlmaWNhdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7XHJcbiAgLy8gICB9KTtcclxuICAvLyB9O1xyXG4gIC8vXHJcbiAgLy8gY2hlY2tDb29raWVzKCk7XHJcblxyXG4gIC8vIGRvY3VtZW50Lm9uZHJhZ3N0YXJ0ID0gdGVzdDtcclxuICAvLyAvL9C30LDQv9GA0LXRgiDQvdCwINC/0LXRgNC10YLQsNGB0LrQuNCy0LDQvdC40LVcclxuICAvLyBkb2N1bWVudC5vbnNlbGVjdHN0YXJ0ID0gdGVzdDtcclxuICAvLyAvL9C30LDQv9GA0LXRgiDQvdCwINCy0YvQtNC10LvQtdC90LjQtSDRjdC70LXQvNC10L3RgtC+0LIg0YHRgtGA0LDQvdC40YbRi1xyXG4gIC8vIGRvY3VtZW50Lm9uY29udGV4dG1lbnUgPSB0ZXN0O1xyXG4gIC8vIC8v0LfQsNC/0YDQtdGCINC90LAg0LLRi9Cy0LXQtNC10L3QuNC1INC60L7QvdGC0LXQutGB0YLQvdC+0LPQviDQvNC10L3RjlxyXG4gIC8vIGZ1bmN0aW9uIHRlc3QoKSB7XHJcbiAgLy8gICByZXR1cm4gZmFsc2U7XHJcbiAgLy8gfVxyXG5cclxuICB2YXIgbWFza0xpc3QgPSAkLm1hc2tzU29ydCgkLm1hc2tzTG9hZChcImFzc2V0cy9qc29uL3Bob25lLWNvZGVzLmpzb25cIiksIFsnIyddLCAvWzAtOV18Iy8sIFwibWFza1wiKTtcclxuICB2YXIgbWFza09wdHMgPSB7XHJcbiAgICBpbnB1dG1hc2s6IHtcclxuICAgICAgZGVmaW5pdGlvbnM6IHtcclxuICAgICAgICAnIyc6IHtcclxuICAgICAgICAgIHZhbGlkYXRvcjogXCJbMC05XVwiLFxyXG4gICAgICAgICAgY2FyZGluYWxpdHk6IDFcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHNob3dNYXNrT25Ib3ZlcjogZmFsc2UsXHJcbiAgICAgIGF1dG9Vbm1hc2s6IHRydWUsXHJcbiAgICAgIGNsZWFyTWFza09uTG9zdEZvY3VzOiB0cnVlXHJcbiAgICB9LFxyXG4gICAgbWF0Y2g6IC9bMC05XS8sXHJcbiAgICByZXBsYWNlOiAnIycsXHJcbiAgICBsaXN0OiBtYXNrTGlzdCxcclxuICAgIGxpc3RLZXk6IFwibWFza1wiLFxyXG4gICAgb25NYXNrQ2hhbmdlOiBmdW5jdGlvbihtYXNrT2JqLCBkZXRlcm1pbmVkKSB7fVxyXG4gIH07XHJcblxyXG4gICQoJyN1c2VyX3Bob25lJykuY2hhbmdlKGZ1bmN0aW9uICgpIHtcclxuICAgICQoJyN1c2VyX3Bob25lJykuaW5wdXRtYXNrKCdyZW1vdmUnKTtcclxuICAgICQoJyN1c2VyX3Bob25lJykuaW5wdXRtYXNrcyhtYXNrT3B0cyk7XHJcbiAgfSk7XHJcblxyXG4gICQoJyN1c2VyX3Bob25lJykuY2hhbmdlKCk7XHJcblxyXG4gICQoJyN1c2VyX3Bob25lMicpLmNoYW5nZShmdW5jdGlvbiAoKSB7XHJcbiAgICAkKCcjdXNlcl9waG9uZTInKS5pbnB1dG1hc2soJ3JlbW92ZScpO1xyXG4gICAgJCgnI3VzZXJfcGhvbmUyJykuaW5wdXRtYXNrcyhtYXNrT3B0cyk7XHJcbiAgfSk7XHJcblxyXG4gICQoJyN1c2VyX3Bob25lMicpLmNoYW5nZSgpO1xyXG5cclxuICAkKCcjdXNlcl9waG9uZS1xdWVzdGlvbicpLmNoYW5nZShmdW5jdGlvbiAoKSB7XHJcbiAgICAkKCcjdXNlcl9waG9uZS1xdWVzdGlvbicpLmlucHV0bWFzaygncmVtb3ZlJyk7XHJcbiAgICAkKCcjdXNlcl9waG9uZS1xdWVzdGlvbicpLmlucHV0bWFza3MobWFza09wdHMpO1xyXG4gIH0pO1xyXG5cclxuICAkKCcjdXNlcl9waG9uZS1xdWVzdGlvbicpLmNoYW5nZSgpO1xyXG5cclxufSk7XHJcblxyXG4oIGZ1bmN0aW9uKCkge1xyXG4gIHZhciB5b3V0dWJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCggXCIueW91dHViZVwiICk7XHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB5b3V0dWJlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICB2YXIgc291cmNlID0gXCJodHRwczovL2ltZy55b3V0dWJlLmNvbS92aS9cIisgeW91dHViZVtpXS5kYXRhc2V0LmVtYmVkICtcIi9zZGRlZmF1bHQuanBnXCI7XHJcbiAgICB2YXIgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICAgIGltYWdlLnNyYyA9IHNvdXJjZTtcclxuICAgIGltYWdlLmFkZEV2ZW50TGlzdGVuZXIoIFwibG9hZFwiLCBmdW5jdGlvbigpIHtcclxuICAgICAgeW91dHViZVsgaSBdLmFwcGVuZENoaWxkKCBpbWFnZSApO1xyXG4gICAgfSggaSApICk7XHJcblxyXG4gICAgeW91dHViZVtpXS5hZGRFdmVudExpc3RlbmVyKCBcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICB2YXIgaWZyYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggXCJpZnJhbWVcIiApO1xyXG4gICAgICBpZnJhbWUuc2V0QXR0cmlidXRlKCBcImZyYW1lYm9yZGVyXCIsIFwiMFwiICk7XHJcbiAgICAgIGlmcmFtZS5zZXRBdHRyaWJ1dGUoIFwiYWxsb3dmdWxsc2NyZWVuXCIsIFwiXCIgKTtcclxuICAgICAgaWZyYW1lLnNldEF0dHJpYnV0ZSggXCJzcmNcIiwgXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC9cIisgdGhpcy5kYXRhc2V0LmVtYmVkICtcIj9yZWw9MCZzaG93aW5mbz0wJmVuYWJsZWpzYXBpPTFcIiApO1xyXG4gICAgICB0aGlzLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgIHRoaXMuYXBwZW5kQ2hpbGQoIGlmcmFtZSApO1xyXG4gICAgfSApO1xyXG4gIH07XHJcbn0gKSgpO1xyXG4ndXNlIHN0cmljdCc7XHJcblxyXG4oZnVuY3Rpb24gKCkge1xyXG5cclxuICB2YXIgYmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2JnXCIpO1xyXG5cclxuICBpZiAoYmcpIHtcclxuXHJcbiAgICBjb25zdCBNT0JJTEVfV0lEVEggPSA3Njc7XHJcblxyXG4gICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID4gTU9CSUxFX1dJRFRIKSB7XHJcblxyXG4gICAgICB2YXIgcmVmcmVzaER1cmF0aW9uID0gMTAwMDA7XHJcbiAgICAgIHZhciByZWZyZXNoVGltZW91dDtcclxuICAgICAgdmFyIG51bVBvaW50c1g7XHJcbiAgICAgIHZhciBudW1Qb2ludHNZO1xyXG4gICAgICB2YXIgdW5pdFdpZHRoO1xyXG4gICAgICB2YXIgdW5pdEhlaWdodDtcclxuICAgICAgdmFyIHBvaW50cztcclxuICAgICAgdmFyIG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XHJcblxyXG4gICAgICBmdW5jdGlvbiBvbkxvYWQoKSB7XHJcblxyXG4gICAgICAgIHZhciBzZXRIZWlnaHQgPSBtYWluLm9mZnNldEhlaWdodDtcclxuICAgICAgICB2YXIgc3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdzdmcnKTtcclxuICAgICAgICBzdmcuc2V0QXR0cmlidXRlKCd3aWR0aCcsIHdpbmRvdy5pbm5lcldpZHRoKTtcclxuICAgICAgICBzdmcuc2V0QXR0cmlidXRlKCdoZWlnaHQnLCBzZXRIZWlnaHQpO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNiZycpLmFwcGVuZENoaWxkKHN2Zyk7XHJcblxyXG4gICAgICAgIHZhciB1bml0U2l6ZSA9ICh3aW5kb3cuaW5uZXJXaWR0aCArIHNldEhlaWdodCkgLyA0MDtcclxuICAgICAgICBudW1Qb2ludHNYID0gTWF0aC5jZWlsKHdpbmRvdy5pbm5lcldpZHRoIC8gdW5pdFNpemUpICsgMTtcclxuICAgICAgICBudW1Qb2ludHNZID0gTWF0aC5jZWlsKHNldEhlaWdodCAvIHVuaXRTaXplKSArIDE7XHJcbiAgICAgICAgdW5pdFdpZHRoID0gTWF0aC5jZWlsKHdpbmRvdy5pbm5lcldpZHRoIC8gKG51bVBvaW50c1ggLSAxKSk7XHJcbiAgICAgICAgdW5pdEhlaWdodCA9IE1hdGguY2VpbChzZXRIZWlnaHQgLyAobnVtUG9pbnRzWSAtIDEpKTtcclxuICAgICAgICBwb2ludHMgPSBbXTtcclxuXHJcbiAgICAgICAgZm9yICh2YXIgeSA9IDA7IHkgPCBudW1Qb2ludHNZOyB5KyspIHtcclxuICAgICAgICAgIGZvciAodmFyIHggPSAwOyB4IDwgbnVtUG9pbnRzWDsgeCsrKSB7XHJcbiAgICAgICAgICAgIHBvaW50cy5wdXNoKHt4OiB1bml0V2lkdGggKiB4LCB5OiB1bml0SGVpZ2h0ICogeSwgb3JpZ2luWDogdW5pdFdpZHRoICogeCwgb3JpZ2luWTogdW5pdEhlaWdodCAqIHl9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJhbmRvbWl6ZSgpO1xyXG5cclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBvaW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgaWYgKHBvaW50c1tpXS5vcmlnaW5YICE9IHVuaXRXaWR0aCAqIChudW1Qb2ludHNYIC0gMSkgJiYgcG9pbnRzW2ldLm9yaWdpblkgIT0gdW5pdEhlaWdodCAqIChudW1Qb2ludHNZIC0gMSkpIHtcclxuICAgICAgICAgICAgdmFyIHRvcExlZnRYID0gcG9pbnRzW2ldLng7XHJcbiAgICAgICAgICAgIHZhciB0b3BMZWZ0WSA9IHBvaW50c1tpXS55O1xyXG4gICAgICAgICAgICB2YXIgdG9wUmlnaHRYID0gcG9pbnRzW2kgKyAxXS54O1xyXG4gICAgICAgICAgICB2YXIgdG9wUmlnaHRZID0gcG9pbnRzW2kgKyAxXS55O1xyXG4gICAgICAgICAgICB2YXIgYm90dG9tTGVmdFggPSBwb2ludHNbaSArIG51bVBvaW50c1hdLng7XHJcbiAgICAgICAgICAgIHZhciBib3R0b21MZWZ0WSA9IHBvaW50c1tpICsgbnVtUG9pbnRzWF0ueTtcclxuICAgICAgICAgICAgdmFyIGJvdHRvbVJpZ2h0WCA9IHBvaW50c1tpICsgbnVtUG9pbnRzWCArIDFdLng7XHJcbiAgICAgICAgICAgIHZhciBib3R0b21SaWdodFkgPSBwb2ludHNbaSArIG51bVBvaW50c1ggKyAxXS55O1xyXG5cclxuICAgICAgICAgICAgdmFyIHJhbmRvID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMik7XHJcblxyXG4gICAgICAgICAgICBmb3IgKHZhciBuID0gMDsgbiA8IDI7IG4rKykge1xyXG4gICAgICAgICAgICAgIHZhciBwb2x5Z29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKHN2Zy5uYW1lc3BhY2VVUkksICdwb2x5Z29uJyk7XHJcblxyXG4gICAgICAgICAgICAgIGlmIChyYW5kbyA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAobiA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgIHBvbHlnb24ucG9pbnQxID0gaTtcclxuICAgICAgICAgICAgICAgICAgcG9seWdvbi5wb2ludDIgPSBpICsgbnVtUG9pbnRzWDtcclxuICAgICAgICAgICAgICAgICAgcG9seWdvbi5wb2ludDMgPSBpICsgbnVtUG9pbnRzWCArIDE7XHJcbiAgICAgICAgICAgICAgICAgIHBvbHlnb24uc2V0QXR0cmlidXRlKCdwb2ludHMnLCB0b3BMZWZ0WCArICcsJyArIHRvcExlZnRZICsgJyAnICsgYm90dG9tTGVmdFggKyAnLCcgKyBib3R0b21MZWZ0WSArICcgJyArIGJvdHRvbVJpZ2h0WCArICcsJyArIGJvdHRvbVJpZ2h0WSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG4gPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICBwb2x5Z29uLnBvaW50MSA9IGk7XHJcbiAgICAgICAgICAgICAgICAgIHBvbHlnb24ucG9pbnQyID0gaSArIDE7XHJcbiAgICAgICAgICAgICAgICAgIHBvbHlnb24ucG9pbnQzID0gaSArIG51bVBvaW50c1ggKyAxO1xyXG4gICAgICAgICAgICAgICAgICBwb2x5Z29uLnNldEF0dHJpYnV0ZSgncG9pbnRzJywgdG9wTGVmdFggKyAnLCcgKyB0b3BMZWZ0WSArICcgJyArIHRvcFJpZ2h0WCArICcsJyArIHRvcFJpZ2h0WSArICcgJyArIGJvdHRvbVJpZ2h0WCArICcsJyArIGJvdHRvbVJpZ2h0WSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChyYW5kbyA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAobiA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgIHBvbHlnb24ucG9pbnQxID0gaTtcclxuICAgICAgICAgICAgICAgICAgcG9seWdvbi5wb2ludDIgPSBpICsgbnVtUG9pbnRzWDtcclxuICAgICAgICAgICAgICAgICAgcG9seWdvbi5wb2ludDMgPSBpICsgMTtcclxuICAgICAgICAgICAgICAgICAgcG9seWdvbi5zZXRBdHRyaWJ1dGUoJ3BvaW50cycsIHRvcExlZnRYICsgJywnICsgdG9wTGVmdFkgKyAnICcgKyBib3R0b21MZWZ0WCArICcsJyArIGJvdHRvbUxlZnRZICsgJyAnICsgdG9wUmlnaHRYICsgJywnICsgdG9wUmlnaHRZKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobiA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgIHBvbHlnb24ucG9pbnQxID0gaSArIG51bVBvaW50c1g7XHJcbiAgICAgICAgICAgICAgICAgIHBvbHlnb24ucG9pbnQyID0gaSArIDE7XHJcbiAgICAgICAgICAgICAgICAgIHBvbHlnb24ucG9pbnQzID0gaSArIG51bVBvaW50c1ggKyAxO1xyXG4gICAgICAgICAgICAgICAgICBwb2x5Z29uLnNldEF0dHJpYnV0ZSgncG9pbnRzJywgYm90dG9tTGVmdFggKyAnLCcgKyBib3R0b21MZWZ0WSArICcgJyArIHRvcFJpZ2h0WCArICcsJyArIHRvcFJpZ2h0WSArICcgJyArIGJvdHRvbVJpZ2h0WCArICcsJyArIGJvdHRvbVJpZ2h0WSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIHZhciBoID0gMjA3O1xyXG4gICAgICAgICAgICAgIHZhciBzID0gNDU7XHJcbiAgICAgICAgICAgICAgdmFyIGwgPSA4MCArIChNYXRoLnJhbmRvbSgpICogMTIpO1xyXG4gICAgICAgICAgICAgIHBvbHlnb24uc2V0QXR0cmlidXRlKCdmaWxsJywgJ2hzbCgnICsgaCArICcsICcgKyBzICsgJyUsICcgKyBsICsgJyUpJyk7XHJcbiAgICAgICAgICAgICAgdmFyIGFuaW1hdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ2FuaW1hdGUnKTtcclxuICAgICAgICAgICAgICBhbmltYXRlLnNldEF0dHJpYnV0ZSgnZmlsbCcsICdmcmVlemUnKTtcclxuICAgICAgICAgICAgICBhbmltYXRlLnNldEF0dHJpYnV0ZSgnYXR0cmlidXRlTmFtZScsICdwb2ludHMnKTtcclxuICAgICAgICAgICAgICBhbmltYXRlLnNldEF0dHJpYnV0ZSgnZHVyJywgcmVmcmVzaER1cmF0aW9uICsgJ21zJyk7XHJcbiAgICAgICAgICAgICAgYW5pbWF0ZS5zZXRBdHRyaWJ1dGUoJ2NhbGNNb2RlJywgJ2xpbmVhcicpO1xyXG4gICAgICAgICAgICAgIHBvbHlnb24uYXBwZW5kQ2hpbGQoYW5pbWF0ZSk7XHJcbiAgICAgICAgICAgICAgc3ZnLmFwcGVuZENoaWxkKHBvbHlnb24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZWZyZXNoKCk7XHJcblxyXG4gICAgICB9XHJcblxyXG4gICAgICBmdW5jdGlvbiByYW5kb21pemUoKSB7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwb2ludHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgIGlmIChwb2ludHNbaV0ub3JpZ2luWCAhPSAwICYmIHBvaW50c1tpXS5vcmlnaW5YICE9IHVuaXRXaWR0aCAqIChudW1Qb2ludHNYIC0gMSkpIHtcclxuICAgICAgICAgICAgcG9pbnRzW2ldLnggPSBwb2ludHNbaV0ub3JpZ2luWCArIE1hdGgucmFuZG9tKCkgKiB1bml0V2lkdGggLSB1bml0V2lkdGggLyAyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKHBvaW50c1tpXS5vcmlnaW5ZICE9IDAgJiYgcG9pbnRzW2ldLm9yaWdpblkgIT0gdW5pdEhlaWdodCAqIChudW1Qb2ludHNZIC0gMSkpIHtcclxuICAgICAgICAgICAgcG9pbnRzW2ldLnkgPSBwb2ludHNbaV0ub3JpZ2luWSArIE1hdGgucmFuZG9tKCkgKiB1bml0SGVpZ2h0IC0gdW5pdEhlaWdodCAvIDI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBmdW5jdGlvbiByZWZyZXNoKCkge1xyXG4gICAgICAgIHJhbmRvbWl6ZSgpO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2JnIHN2ZycpLmNoaWxkTm9kZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgIHZhciBwb2x5Z29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2JnIHN2ZycpLmNoaWxkTm9kZXNbaV07XHJcbiAgICAgICAgICB2YXIgYW5pbWF0ZSA9IHBvbHlnb24uY2hpbGROb2Rlc1swXTtcclxuICAgICAgICAgIGlmIChhbmltYXRlLmdldEF0dHJpYnV0ZSgndG8nKSkge1xyXG4gICAgICAgICAgICBhbmltYXRlLnNldEF0dHJpYnV0ZSgnZnJvbScsIGFuaW1hdGUuZ2V0QXR0cmlidXRlKCd0bycpKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGFuaW1hdGUuc2V0QXR0cmlidXRlKCd0bycsIHBvaW50c1twb2x5Z29uLnBvaW50MV0ueCArICcsJyArIHBvaW50c1twb2x5Z29uLnBvaW50MV0ueSArICcgJyArIHBvaW50c1twb2x5Z29uLnBvaW50Ml0ueCArICcsJyArIHBvaW50c1twb2x5Z29uLnBvaW50Ml0ueSArICcgJyArIHBvaW50c1twb2x5Z29uLnBvaW50M10ueCArICcsJyArIHBvaW50c1twb2x5Z29uLnBvaW50M10ueSk7XHJcbiAgICAgICAgICBhbmltYXRlLmJlZ2luRWxlbWVudCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZWZyZXNoVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgcmVmcmVzaCgpO1xyXG4gICAgICAgIH0sIHJlZnJlc2hEdXJhdGlvbik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGZ1bmN0aW9uIG9uUmVzaXplKCkge1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNiZyBzdmcnKS5yZW1vdmUoKTtcclxuICAgICAgICBjbGVhclRpbWVvdXQocmVmcmVzaFRpbWVvdXQpO1xyXG4gICAgICAgIG9uTG9hZCgpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB3aW5kb3cub25sb2FkID0gb25Mb2FkO1xyXG4gICAgICB3aW5kb3cub25yZXNpemUgPSBvblJlc2l6ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG59KSgpO1xyXG4ndXNlIHN0cmljdCc7XHJcblxyXG4oZnVuY3Rpb24gKCkge1xyXG4gIHZhciBtZW51QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4taGVhZGVyX19idG4nKTtcclxuICB2YXIgd3JhcE1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1oZWFkZXJfX3dyYXAtbWVudScpO1xyXG4gIHZhciBzdGFnZU1lbnVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1oZWFkZXJfX2xpbmstc3RhZ2UtLWNsb3NlZCcpO1xyXG4gIHZhciBzZXJ2aWNlc1dyYXBNZW51QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4taGVhZGVyX19zZXJ2aWNlcy0tY2xvc2VkJyk7XHJcbiAgdmFyIHNlcnZpY2VzTWVudUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWhlYWRlcl9fbGluay1zZXJ2aWNlcycpO1xyXG4gIHZhciBzZXJ2aWNlc1dyYXBNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4taGVhZGVyX19zZXJ2aWNlcy1uYXYtLWNsb3NlZCcpO1xyXG4gIHZhciBzZXJ2aWNlc01lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1oZWFkZXJfX3NlcnZpY2VzLW5hdicpO1xyXG4gIHZhciBzdGFnZU1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1oZWFkZXJfX3N0YWdlLW5hdi0tY2xvc2VkJyk7XHJcbiAgdmFyIHN0YWdlV3JhcE1lbnVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1oZWFkZXJfX3N0YWdlLWxpbmsnKTtcclxuICB2YXIgbWFpblBob25lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4taGVhZGVyX19ib3gtcGhvbmUnKTtcclxuICB2YXIgbWFpbkJveFBob25lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4taGVhZGVyX190ZWwnKTtcclxuICB2YXIgbWFpblNvY2lhbEJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWhlYWRlcl9fc29jaWFsJyk7XHJcbiAgdmFyIG1haW5Tb2NpYWxCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1oZWFkZXJfX3NvY2lhbC1idG4nKTtcclxuXHJcbiAgaWYgKG1lbnVCdG4pIHtcclxuXHJcbiAgICBtZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2dCkge1xyXG4gICAgICBldnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgIGlmIChtZW51QnRuLmNsYXNzTGlzdC5jb250YWlucygnbWFpbi1oZWFkZXJfX2J0bi0tY2xvc2VkJykpIHtcclxuICAgICAgICBtYWluQm94UGhvbmUuY2xhc3NMaXN0LnJlbW92ZSgnbWFpbi1oZWFkZXJfX3RlbC0tYWN0aXZlJyk7XHJcbiAgICAgICAgbWFpblNvY2lhbEJveC5jbGFzc0xpc3QucmVtb3ZlKCdtYWluLWhlYWRlcl9fc29jaWFsLS1hY3RpdmUnKTtcclxuICAgICAgICBtZW51QnRuLmNsYXNzTGlzdC5yZW1vdmUoJ21haW4taGVhZGVyX19idG4tLWNsb3NlZCcpO1xyXG4gICAgICAgIG1lbnVCdG4uY2xhc3NMaXN0LmFkZCgnbWFpbi1oZWFkZXJfX2J0bi0tb3BlbmVkJyk7XHJcbiAgICAgICAgd3JhcE1lbnUuY2xhc3NMaXN0LmFkZCgnbWFpbi1oZWFkZXJfX3dyYXAtbWVudS0tYWN0aXZlJyk7XHJcbiAgICAgICAgc2VydmljZXNNZW51LmNsYXNzTGlzdC5yZW1vdmUoJ21haW4taGVhZGVyX19zZXJ2aWNlcy1uYXYtLW9wZW5lZCcpO1xyXG4gICAgICAgIHNlcnZpY2VzTWVudS5jbGFzc0xpc3QuYWRkKCdtYWluLWhlYWRlcl9fc2VydmljZXMtbmF2LS1jbG9zZWQnKTtcclxuICAgICAgICBzZXJ2aWNlc01lbnVCdG4uY2xhc3NMaXN0LnJlbW92ZSgnbWFpbi1oZWFkZXJfX2xpbmstc2VydmljZXMtLW9wZW5lZCcpO1xyXG4gICAgICAgIHNlcnZpY2VzTWVudUJ0bi5jbGFzc0xpc3QuYWRkKCdtYWluLWhlYWRlcl9fbGluay1zZXJ2aWNlcy0tY2xvc2VkJyk7XHJcbiAgICAgICAgc2VydmljZXNXcmFwTWVudUJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdtYWluLWhlYWRlcl9fc2VydmljZXMtLW9wZW5lZCcpO1xyXG4gICAgICAgIHNlcnZpY2VzV3JhcE1lbnVCdG4uY2xhc3NMaXN0LmFkZCgnbWFpbi1oZWFkZXJfX3NlcnZpY2VzLS1jbG9zZWQnKTtcclxuICAgICAgICBzdGFnZU1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnbWFpbi1oZWFkZXJfX3N0YWdlLW5hdi0tb3BlbmVkJyk7XHJcbiAgICAgICAgc3RhZ2VNZW51LmNsYXNzTGlzdC5hZGQoJ21haW4taGVhZGVyX19zdGFnZS1uYXYtLWNsb3NlZCcpO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBtYWluQm94UGhvbmUuY2xhc3NMaXN0LnJlbW92ZSgnbWFpbi1oZWFkZXJfX3RlbC0tYWN0aXZlJyk7XHJcbiAgICAgICAgbWFpblNvY2lhbEJveC5jbGFzc0xpc3QucmVtb3ZlKCdtYWluLWhlYWRlcl9fc29jaWFsLS1hY3RpdmUnKTtcclxuICAgICAgICBtZW51QnRuLmNsYXNzTGlzdC5hZGQoJ21haW4taGVhZGVyX19idG4tLWNsb3NlZCcpO1xyXG4gICAgICAgIG1lbnVCdG4uY2xhc3NMaXN0LnJlbW92ZSgnbWFpbi1oZWFkZXJfX2J0bi0tb3BlbmVkJyk7XHJcbiAgICAgICAgd3JhcE1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnbWFpbi1oZWFkZXJfX3dyYXAtbWVudS0tYWN0aXZlJyk7XHJcbiAgICAgICAgc2VydmljZXNNZW51LmNsYXNzTGlzdC5yZW1vdmUoJ21haW4taGVhZGVyX19zZXJ2aWNlcy1uYXYtLW9wZW5lZCcpO1xyXG4gICAgICAgIHNlcnZpY2VzTWVudS5jbGFzc0xpc3QuYWRkKCdtYWluLWhlYWRlcl9fc2VydmljZXMtbmF2LS1jbG9zZWQnKTtcclxuICAgICAgICBzZXJ2aWNlc1dyYXBNZW51QnRuLmNsYXNzTGlzdC5yZW1vdmUoJ21haW4taGVhZGVyX19zZXJ2aWNlcy0tb3BlbmVkJyk7XHJcbiAgICAgICAgc2VydmljZXNXcmFwTWVudUJ0bi5jbGFzc0xpc3QuYWRkKCdtYWluLWhlYWRlcl9fc2VydmljZXMtLWNsb3NlZCcpO1xyXG4gICAgICAgIHN0YWdlTWVudS5jbGFzc0xpc3QucmVtb3ZlKCdtYWluLWhlYWRlcl9fc3RhZ2UtbmF2LS1vcGVuZWQnKTtcclxuICAgICAgICBzdGFnZU1lbnUuY2xhc3NMaXN0LmFkZCgnbWFpbi1oZWFkZXJfX3N0YWdlLW5hdi0tY2xvc2VkJyk7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICcnO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoc2VydmljZXNXcmFwTWVudUJ0bikge1xyXG5cclxuICAgICAgc2VydmljZXNXcmFwTWVudUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldnQpIHtcclxuICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgaWYgKHNlcnZpY2VzV3JhcE1lbnVCdG4uY2xhc3NMaXN0LmNvbnRhaW5zKCdtYWluLWhlYWRlcl9fc2VydmljZXMtLWNsb3NlZCcpKSB7XHJcbiAgICAgICAgICBzZXJ2aWNlc1dyYXBNZW51QnRuLmNsYXNzTGlzdC5yZW1vdmUoJ21haW4taGVhZGVyX19zZXJ2aWNlcy0tY2xvc2VkJyk7XHJcbiAgICAgICAgICBzZXJ2aWNlc1dyYXBNZW51QnRuLmNsYXNzTGlzdC5hZGQoJ21haW4taGVhZGVyX19zZXJ2aWNlcy0tb3BlbmVkJyk7XHJcbiAgICAgICAgICBzZXJ2aWNlc1dyYXBNZW51LmNsYXNzTGlzdC5yZW1vdmUoJ21haW4taGVhZGVyX19zZXJ2aWNlcy1uYXYtLWNsb3NlZCcpO1xyXG4gICAgICAgICAgc2VydmljZXNXcmFwTWVudS5jbGFzc0xpc3QuYWRkKCdtYWluLWhlYWRlcl9fc2VydmljZXMtbmF2LS1vcGVuZWQnKTtcclxuICAgICAgICAgIHdyYXBNZW51LmNsYXNzTGlzdC5yZW1vdmUoJ21haW4taGVhZGVyX193cmFwLW1lbnUtLWFjdGl2ZScpO1xyXG4gICAgICAgICAgbWVudUJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdtYWluLWhlYWRlcl9fYnRuLS1vcGVuZWQnKTtcclxuICAgICAgICAgIG1lbnVCdG4uY2xhc3NMaXN0LmFkZCgnbWFpbi1oZWFkZXJfX2J0bi0tY2xvc2VkJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHNlcnZpY2VzV3JhcE1lbnVCdG4uY2xhc3NMaXN0LmFkZCgnbWFpbi1oZWFkZXJfX3NlcnZpY2VzLS1jbG9zZWQnKTtcclxuICAgICAgICAgIHNlcnZpY2VzV3JhcE1lbnVCdG4uY2xhc3NMaXN0LnJlbW92ZSgnbWFpbi1oZWFkZXJfX3NlcnZpY2VzLS1vcGVuZWQnKTtcclxuICAgICAgICAgIHNlcnZpY2VzV3JhcE1lbnUuY2xhc3NMaXN0LmFkZCgnbWFpbi1oZWFkZXJfX3NlcnZpY2VzLW5hdi0tY2xvc2VkJyk7XHJcbiAgICAgICAgICBzZXJ2aWNlc1dyYXBNZW51LmNsYXNzTGlzdC5yZW1vdmUoJ21haW4taGVhZGVyX19zZXJ2aWNlcy1uYXYtLW9wZW5lZCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHN0YWdlTWVudUJ0biAmJiB3aW5kb3cuaW5uZXJXaWR0aCA8PSA3NjcpIHtcclxuXHJcbiAgICAgIHN0YWdlTWVudUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldnQpIHtcclxuICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgaWYgKHN0YWdlTWVudS5jbGFzc0xpc3QuY29udGFpbnMoJ21haW4taGVhZGVyX19zdGFnZS1uYXYtLWNsb3NlZCcpKSB7XHJcbiAgICAgICAgICBzdGFnZU1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnbWFpbi1oZWFkZXJfX3N0YWdlLW5hdi0tY2xvc2VkJyk7XHJcbiAgICAgICAgICBzdGFnZU1lbnUuY2xhc3NMaXN0LmFkZCgnbWFpbi1oZWFkZXJfX3N0YWdlLW5hdi0tb3BlbmVkJyk7XHJcbiAgICAgICAgICBzdGFnZU1lbnVCdG4uY2xhc3NMaXN0LnJlbW92ZSgnbWFpbi1oZWFkZXJfX2xpbmstc3RhZ2UtLWNsb3NlZCcpO1xyXG4gICAgICAgICAgc3RhZ2VNZW51QnRuLmNsYXNzTGlzdC5hZGQoJ21haW4taGVhZGVyX19saW5rLXN0YWdlLS1vcGVuZWQnKTtcclxuICAgICAgICAgIG1lbnVCdG4uY2xhc3NMaXN0LmFkZCgnbWFpbi1oZWFkZXJfX2J0bi0tY2xvc2VkJyk7XHJcbiAgICAgICAgICBtZW51QnRuLmNsYXNzTGlzdC5yZW1vdmUoJ21haW4taGVhZGVyX19idG4tLW9wZW5lZCcpO1xyXG4gICAgICAgICAgd3JhcE1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnbWFpbi1oZWFkZXJfX3dyYXAtbWVudS0tYWN0aXZlJyk7XHJcbiAgICAgICAgICBzZXJ2aWNlc01lbnUuY2xhc3NMaXN0LnJlbW92ZSgnbWFpbi1oZWFkZXJfX3NlcnZpY2VzLW5hdi0tb3BlbmVkJyk7XHJcbiAgICAgICAgICBzZXJ2aWNlc01lbnUuY2xhc3NMaXN0LmFkZCgnbWFpbi1oZWFkZXJfX3NlcnZpY2VzLW5hdi0tY2xvc2VkJyk7XHJcbiAgICAgICAgICBzZXJ2aWNlc01lbnVCdG4uY2xhc3NMaXN0LnJlbW92ZSgnbWFpbi1oZWFkZXJfX2xpbmstc2VydmljZXMtLW9wZW5lZCcpO1xyXG4gICAgICAgICAgc2VydmljZXNNZW51QnRuLmNsYXNzTGlzdC5hZGQoJ21haW4taGVhZGVyX19saW5rLXNlcnZpY2VzLS1jbG9zZWQnKTtcclxuICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgc3RhZ2VNZW51LmNsYXNzTGlzdC5hZGQoJ21haW4taGVhZGVyX19zdGFnZS1uYXYtLWNsb3NlZCcpO1xyXG4gICAgICAgICAgc3RhZ2VNZW51LmNsYXNzTGlzdC5yZW1vdmUoJ21haW4taGVhZGVyX19zdGFnZS1uYXYtLW9wZW5lZCcpO1xyXG4gICAgICAgICAgc3RhZ2VNZW51QnRuLmNsYXNzTGlzdC5hZGQoJ21haW4taGVhZGVyX19saW5rLXN0YWdlLS1jbG9zZWQnKTtcclxuICAgICAgICAgIHN0YWdlTWVudUJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdtYWluLWhlYWRlcl9fbGluay1zdGFnZS0tb3BlbmVkJyk7XHJcbiAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJyc7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHNlcnZpY2VzTWVudUJ0biAmJiB3aW5kb3cuaW5uZXJXaWR0aCA8PSA3NjcpIHtcclxuXHJcbiAgICAgIHNlcnZpY2VzTWVudUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldnQpIHtcclxuICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgaWYgKHNlcnZpY2VzTWVudS5jbGFzc0xpc3QuY29udGFpbnMoJ21haW4taGVhZGVyX19zZXJ2aWNlcy1uYXYtLWNsb3NlZCcpKSB7XHJcbiAgICAgICAgICBzZXJ2aWNlc01lbnUuY2xhc3NMaXN0LnJlbW92ZSgnbWFpbi1oZWFkZXJfX3NlcnZpY2VzLW5hdi0tY2xvc2VkJyk7XHJcbiAgICAgICAgICBzZXJ2aWNlc01lbnUuY2xhc3NMaXN0LmFkZCgnbWFpbi1oZWFkZXJfX3NlcnZpY2VzLW5hdi0tb3BlbmVkJyk7XHJcbiAgICAgICAgICBzZXJ2aWNlc01lbnVCdG4uY2xhc3NMaXN0LnJlbW92ZSgnbWFpbi1oZWFkZXJfX2xpbmstc2VydmljZXMtLWNsb3NlZCcpO1xyXG4gICAgICAgICAgc2VydmljZXNNZW51QnRuLmNsYXNzTGlzdC5hZGQoJ21haW4taGVhZGVyX19saW5rLXNlcnZpY2VzLS1vcGVuZWQnKTtcclxuICAgICAgICAgIHdyYXBNZW51LmNsYXNzTGlzdC5yZW1vdmUoJ21haW4taGVhZGVyX193cmFwLW1lbnUtLWFjdGl2ZScpO1xyXG4gICAgICAgICAgc3RhZ2VNZW51LmNsYXNzTGlzdC5yZW1vdmUoJ21haW4taGVhZGVyX19zdGFnZS1uYXYtLW9wZW5lZCcpO1xyXG4gICAgICAgICAgc3RhZ2VNZW51LmNsYXNzTGlzdC5hZGQoJ21haW4taGVhZGVyX19zdGFnZS1uYXYtLWNsb3NlZCcpO1xyXG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBzZXJ2aWNlc01lbnUuY2xhc3NMaXN0LmFkZCgnbWFpbi1oZWFkZXJfX3NlcnZpY2VzLW5hdi0tY2xvc2VkJyk7XHJcbiAgICAgICAgICBzZXJ2aWNlc01lbnUuY2xhc3NMaXN0LnJlbW92ZSgnbWFpbi1oZWFkZXJfX3NlcnZpY2VzLW5hdi0tb3BlbmVkJyk7XHJcbiAgICAgICAgICBzZXJ2aWNlc01lbnVCdG4uY2xhc3NMaXN0LmFkZCgnbWFpbi1oZWFkZXJfX2xpbmstc2VydmljZXMtLWNsb3NlZCcpO1xyXG4gICAgICAgICAgc2VydmljZXNNZW51QnRuLmNsYXNzTGlzdC5yZW1vdmUoJ21haW4taGVhZGVyX19saW5rLXNlcnZpY2VzLS1vcGVuZWQnKTtcclxuICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHN0YWdlV3JhcE1lbnVCdG4gJiYgd2luZG93LmlubmVyV2lkdGggPD0gNzY3KSB7XHJcblxyXG4gICAgICBzdGFnZVdyYXBNZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2dCkge1xyXG4gICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICBpZiAoc3RhZ2VNZW51LmNsYXNzTGlzdC5jb250YWlucygnbWFpbi1oZWFkZXJfX3N0YWdlLW5hdi0tY2xvc2VkJykpIHtcclxuICAgICAgICAgIHN0YWdlTWVudS5jbGFzc0xpc3QucmVtb3ZlKCdtYWluLWhlYWRlcl9fc3RhZ2UtbmF2LS1jbG9zZWQnKTtcclxuICAgICAgICAgIHN0YWdlTWVudS5jbGFzc0xpc3QuYWRkKCdtYWluLWhlYWRlcl9fc3RhZ2UtbmF2LS1vcGVuZWQnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgc3RhZ2VNZW51LmNsYXNzTGlzdC5hZGQoJ21haW4taGVhZGVyX19zdGFnZS1uYXYtLWNsb3NlZCcpO1xyXG4gICAgICAgICAgc3RhZ2VNZW51LmNsYXNzTGlzdC5yZW1vdmUoJ21haW4taGVhZGVyX19zdGFnZS1uYXYtLW9wZW5lZCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbWFpblBob25lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2dCkge1xyXG4gICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgbWFpbkJveFBob25lLmNsYXNzTGlzdC50b2dnbGUoJ21haW4taGVhZGVyX190ZWwtLWFjdGl2ZScpO1xyXG5cclxuICAgIGlmIChtYWluU29jaWFsQm94LmNsYXNzTGlzdC5jb250YWlucygnbWFpbi1oZWFkZXJfX3NvY2lhbC0tYWN0aXZlJykpIHtcclxuICAgICAgbWFpblNvY2lhbEJveC5jbGFzc0xpc3QucmVtb3ZlKCdtYWluLWhlYWRlcl9fc29jaWFsLS1hY3RpdmUnKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgbWFpblNvY2lhbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldnQpIHtcclxuICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIG1haW5Tb2NpYWxCb3guY2xhc3NMaXN0LnRvZ2dsZSgnbWFpbi1oZWFkZXJfX3NvY2lhbC0tYWN0aXZlJyk7XHJcblxyXG4gICAgaWYgKG1haW5Cb3hQaG9uZS5jbGFzc0xpc3QuY29udGFpbnMoJ21haW4taGVhZGVyX190ZWwtLWFjdGl2ZScpKSB7XHJcbiAgICAgIG1haW5Cb3hQaG9uZS5jbGFzc0xpc3QucmVtb3ZlKCdtYWluLWhlYWRlcl9fdGVsLS1hY3RpdmUnKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbn0pKCk7XHJcbid1c2Ugc3RyaWN0JztcclxuXHJcbihmdW5jdGlvbiAoKSB7XHJcblxyXG4gIHZhciBtYWluU2xpZGVySW50cm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW50cm9fX2JveC1zd2lwZXItY29udGFpbmVyJyk7XHJcbiAgdmFyIHNlcnZpY2VzU2xpZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlcnZpY2VzX19zd2lwZXItY29udGFpbmVyJyk7XHJcbiAgdmFyIGZlZWRiYWNrU2xpZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZlZWRiYWNrLXNsaWRlcl9fc3dpcGVyLWNvbnRhaW5lcicpO1xyXG5cclxuICB2YXIgc2VydmljZXNTbGlkZXJEZXNrID0gZnVuY3Rpb24gKGVsKSB7XHJcbiAgICByZXR1cm4gbmV3IFN3aXBlcihlbCwge1xyXG4gICAgICBsb29wOiB0cnVlLFxyXG4gICAgICBzcGVlZDogMTAwMCxcclxuICAgICAgc3BhY2VCZXR3ZWVuOiAzMCxcclxuICAgICAgbmF2aWdhdGlvbjoge1xyXG4gICAgICAgIG5leHRFbDogJy5zZXJ2aWNlc19fc3dpcGVyLWJ1dHRvbi1uZXh0JyxcclxuICAgICAgICBwcmV2RWw6ICcuc2VydmljZXNfX3N3aXBlci1idXR0b24tcHJldicsXHJcbiAgICAgIH0sXHJcbiAgICAgIGJyZWFrcG9pbnRzOiB7XHJcbiAgICAgICAgNzY4OiB7XHJcbiAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAxLFxyXG4gICAgICAgICAgc3BhY2VCZXR3ZWVuOiAyMCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIDEwMjQ6IHtcclxuICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDIsXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBpZiAoc2VydmljZXNTbGlkZXIpIHtcclxuICAgIHNlcnZpY2VzU2xpZGVyRGVzayhzZXJ2aWNlc1NsaWRlcik7XHJcblxyXG4gICAgalF1ZXJ5KGZ1bmN0aW9uKCQpe1xyXG4gICAgICAkKGRvY3VtZW50KS5tb3VzZXVwKGZ1bmN0aW9uIChlKXtcclxuICAgICAgICB2YXIgZGl2ID0gJChcIi5zd2lwZXItc2xpZGVcIik7XHJcbiAgICAgICAgaWYgKCFkaXYuaXMoZS50YXJnZXQpXHJcbiAgICAgICAgICAmJiBkaXYuaGFzKGUudGFyZ2V0KS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgIGpRdWVyeShcImlmcmFtZVwiKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgalF1ZXJ5KHRoaXMpWzBdLmNvbnRlbnRXaW5kb3cucG9zdE1lc3NhZ2UoJ3tcImV2ZW50XCI6XCJjb21tYW5kXCIsXCJmdW5jXCI6XCJwYXVzZVZpZGVvXCIsXCJhcmdzXCI6XCJcIn0nLCAnKicpXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5zZXJ2aWNlc19fc3dpcGVyLWJ1dHRvbi1wcmV2JywgZnVuY3Rpb24oKSB7XHJcbiAgICAgIGpRdWVyeShcImlmcmFtZVwiKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBqUXVlcnkodGhpcylbMF0uY29udGVudFdpbmRvdy5wb3N0TWVzc2FnZSgne1wiZXZlbnRcIjpcImNvbW1hbmRcIixcImZ1bmNcIjpcInBhdXNlVmlkZW9cIixcImFyZ3NcIjpcIlwifScsICcqJylcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLnNlcnZpY2VzX19zd2lwZXItYnV0dG9uLW5leHQnLCBmdW5jdGlvbigpIHtcclxuICAgICAgalF1ZXJ5KFwiaWZyYW1lXCIpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGpRdWVyeSh0aGlzKVswXS5jb250ZW50V2luZG93LnBvc3RNZXNzYWdlKCd7XCJldmVudFwiOlwiY29tbWFuZFwiLFwiZnVuY1wiOlwicGF1c2VWaWRlb1wiLFwiYXJnc1wiOlwiXCJ9JywgJyonKVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgdmFyIG1haW5TbGlkZXIgPSBmdW5jdGlvbiAoZWwpIHtcclxuICAgIHJldHVybiBuZXcgU3dpcGVyKGVsLCB7XHJcbiAgICAgIGRpcmVjdGlvbjogJ3ZlcnRpY2FsJyxcclxuICAgICAgc2xpZGVzUGVyVmlldzogMSxcclxuICAgICAgbG9vcDogdHJ1ZSxcclxuICAgICAgc3BlZWQ6IDEwMDAsXHJcbiAgICAgIGF1dG9wbGF5OiB7XHJcbiAgICAgICAgZGVsYXk6IDcwMDAsXHJcbiAgICAgIH0sXHJcbiAgICAgIG1vdXNld2hlZWw6IHRydWUsXHJcbiAgICAgIHBhZ2luYXRpb246IHtcclxuICAgICAgICBlbDogJy5zd2lwZXItcGFnaW5hdGlvbicsXHJcbiAgICAgICAgY2xpY2thYmxlOiB0cnVlLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgaWYgKG1haW5TbGlkZXJJbnRybykge1xyXG4gICAgbWFpblNsaWRlcihtYWluU2xpZGVySW50cm8pO1xyXG4gIH1cclxuXHJcbiAgdmFyIGNyZWF0ZVNsaWRlciA9IGZ1bmN0aW9uIChlbCkge1xyXG4gICAgcmV0dXJuIG5ldyBTd2lwZXIoZWwsIHtcclxuICAgICAgbG9vcDogdHJ1ZSxcclxuICAgICAgc3BlZWQ6IDEwMDAsXHJcbiAgICAgIHNwYWNlQmV0d2VlbjogMzAsXHJcbiAgICAgIGFsbG93VG91Y2hNb3ZlOiB0cnVlLFxyXG4gICAgICBzbGlkZXNQZXJWaWV3OiAxLFxyXG4gICAgICBuYXZpZ2F0aW9uOiB7XHJcbiAgICAgICAgbmV4dEVsOiAnLmZlZWRiYWNrLXNsaWRlcl9fc3dpcGVyLWJ1dHRvbi1uZXh0JyxcclxuICAgICAgICBwcmV2RWw6ICcuZmVlZGJhY2stc2xpZGVyX19zd2lwZXItYnV0dG9uLXByZXYnLFxyXG4gICAgICB9LFxyXG4gICAgICBicmVha3BvaW50czoge1xyXG4gICAgICAgIDc2ODoge1xyXG4gICAgICAgICAgc2xpZGVzUGVyVmlldzogMSxcclxuICAgICAgICAgIHNwYWNlQmV0d2VlbjogMjAsXHJcbiAgICAgICAgfSxcclxuICAgICAgICAxMDI0OiB7XHJcbiAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAyLFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgaWYgKGZlZWRiYWNrU2xpZGVyKSB7XHJcbiAgICBjcmVhdGVTbGlkZXIoZmVlZGJhY2tTbGlkZXIpO1xyXG5cclxuICAgIGpRdWVyeShmdW5jdGlvbigkKXtcclxuICAgICAgJChkb2N1bWVudCkubW91c2V1cChmdW5jdGlvbiAoZSl7XHJcbiAgICAgICAgdmFyIGRpdiA9ICQoXCIuc3dpcGVyLXNsaWRlXCIpO1xyXG4gICAgICAgIGlmICghZGl2LmlzKGUudGFyZ2V0KVxyXG4gICAgICAgICAgJiYgZGl2LmhhcyhlLnRhcmdldCkubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICBqUXVlcnkoXCJpZnJhbWVcIikuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGpRdWVyeSh0aGlzKVswXS5jb250ZW50V2luZG93LnBvc3RNZXNzYWdlKCd7XCJldmVudFwiOlwiY29tbWFuZFwiLFwiZnVuY1wiOlwicGF1c2VWaWRlb1wiLFwiYXJnc1wiOlwiXCJ9JywgJyonKVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuZmVlZGJhY2stc2xpZGVyX19zd2lwZXItYnV0dG9uLXByZXYnLCBmdW5jdGlvbigpIHtcclxuICAgICAgalF1ZXJ5KFwiaWZyYW1lXCIpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGpRdWVyeSh0aGlzKVswXS5jb250ZW50V2luZG93LnBvc3RNZXNzYWdlKCd7XCJldmVudFwiOlwiY29tbWFuZFwiLFwiZnVuY1wiOlwicGF1c2VWaWRlb1wiLFwiYXJnc1wiOlwiXCJ9JywgJyonKVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuZmVlZGJhY2stc2xpZGVyX19zd2lwZXItYnV0dG9uLW5leHQnLCBmdW5jdGlvbigpIHtcclxuICAgICAgalF1ZXJ5KFwiaWZyYW1lXCIpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGpRdWVyeSh0aGlzKVswXS5jb250ZW50V2luZG93LnBvc3RNZXNzYWdlKCd7XCJldmVudFwiOlwiY29tbWFuZFwiLFwiZnVuY1wiOlwicGF1c2VWaWRlb1wiLFwiYXJnc1wiOlwiXCJ9JywgJyonKVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbn0pKCk7XHJcbid1c2Ugc3RyaWN0JztcclxuXHJcbihmdW5jdGlvbiAoKSB7XHJcblxyXG4gIHZhciBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9ydGZvbGlvJyk7XHJcblxyXG4gIGlmIChjb250YWluZXIgJiYgd2luZG93LmlubmVyV2lkdGggPiAxMDIzKSB7XHJcblxyXG4gICAgdmFyIGNhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBvcnRmb2xpb19fYm94LWNhcmQnKTtcclxuXHJcbiAgICBmdW5jdGlvbiByb3RhdGUoZXZ0KSB7XHJcbiAgICAgIHZhciBjYXJkSXRlbSA9IHRoaXMucXVlcnlTZWxlY3RvcignLnBvcnRmb2xpb19fY2FyZC1wZXJzcGVjdGl2ZScpO1xyXG4gICAgICB2YXIgaGFsZkhlaWdodCA9IGNhcmRJdGVtLm9mZnNldEhlaWdodCAvIDI7XHJcbiAgICAgIHZhciBoYWxmV2lkdGggPSBjYXJkSXRlbS5vZmZzZXRXaWR0aCAvIDI7XHJcblxyXG4gICAgICBjYXJkSXRlbS5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlWCgnICsgLShldnQub2Zmc2V0WSAtIGhhbGZIZWlnaHQpIC8gMTIgKyAnZGVnKScgK1xyXG4gICAgICAgICdyb3RhdGVZKCcgKyAoZXZ0Lm9mZnNldFggLSBoYWxmV2lkdGgpIC8gMTIgKyAnZGVnJztcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByb3RhdGVOb25lKCkge1xyXG4gICAgICB2YXIgY2FyZEl0ZW0gPSB0aGlzLnF1ZXJ5U2VsZWN0b3IoJy5wb3J0Zm9saW9fX2NhcmQtcGVyc3BlY3RpdmUnKTtcclxuXHJcbiAgICAgIGNhcmRJdGVtLnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGVYKDBkZWcpJyArICdyb3RhdGVZKDBkZWcpJztcclxuICAgIH1cclxuXHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNhcmRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHZhciBjYXJkID0gY2FyZHNbaV07XHJcbiAgICAgIGNhcmQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgcm90YXRlKTtcclxuICAgICAgY2FyZC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIHJvdGF0ZU5vbmUpO1xyXG4gICAgfVxyXG5cclxuICAgICQoZG9jdW1lbnQpLm9uKCdtc2UyX2xvYWQnLCBmdW5jdGlvbiAoZSwgZGF0YSkge1xyXG5cclxuICAgICAgdmFyIGNhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wb3J0Zm9saW9fX2JveC1jYXJkXCIpO1xyXG5cclxuICAgICAgZnVuY3Rpb24gcm90YXRlKGV2dCkge1xyXG4gICAgICAgIHZhciBjYXJkSXRlbSA9IHRoaXMucXVlcnlTZWxlY3RvcignLnBvcnRmb2xpb19fY2FyZC1wZXJzcGVjdGl2ZScpO1xyXG4gICAgICAgIHZhciBoYWxmSGVpZ2h0ID0gY2FyZEl0ZW0ub2Zmc2V0SGVpZ2h0IC8gMjtcclxuICAgICAgICB2YXIgaGFsZldpZHRoID0gY2FyZEl0ZW0ub2Zmc2V0V2lkdGggLyAyO1xyXG5cclxuICAgICAgICBjYXJkSXRlbS5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlWCgnICsgLShldnQub2Zmc2V0WSAtIGhhbGZIZWlnaHQpIC8gNyArICdkZWcpJyArXHJcbiAgICAgICAgICAncm90YXRlWSgnICsgKGV2dC5vZmZzZXRYIC0gaGFsZldpZHRoKSAvIDcgKyAnZGVnJztcclxuICAgICAgfVxyXG5cclxuICAgICAgZnVuY3Rpb24gcm90YXRlTm9uZSgpIHtcclxuICAgICAgICB2YXIgY2FyZEl0ZW0gPSB0aGlzLnF1ZXJ5U2VsZWN0b3IoJy5wb3J0Zm9saW9fX2NhcmQtcGVyc3BlY3RpdmUnKTtcclxuXHJcbiAgICAgICAgY2FyZEl0ZW0uc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZVgoMGRlZyknICsgJ3JvdGF0ZVkoMGRlZyknO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNhcmRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgdmFyIGNhcmQgPSBjYXJkc1tpXTtcclxuICAgICAgICBjYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHJvdGF0ZSk7XHJcbiAgICAgICAgY2FyZC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIHJvdGF0ZU5vbmUpO1xyXG4gICAgICB9XHJcblxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxufSkoKTtcclxuJ3VzZSBzdHJpY3QnO1xyXG5cclxuKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgdmFyIGFydGljbGVDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFydGljbGVfX2JveC1hcnRpY2xlJyk7XHJcblxyXG4gIGlmIChhcnRpY2xlQ29udGVudCkge1xyXG5cclxuICAgIGNvbnN0IERFU0tUT1BfV0lEVEggPSAxMDI1O1xyXG4gICAgdmFyIGFydGljbGVDYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFydGljbGVfX2JveC1hcnRpY2xlcycpO1xyXG5cclxuICAgIHZhciBzZXRIZWlnaHQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGxldCBpc0Rlc2t0b3AgPSB3aW5kb3cuaW5uZXJXaWR0aCA+IERFU0tUT1BfV0lEVEg7XHJcblxyXG4gICAgICAgIGlmIChpc0Rlc2t0b3ApIHtcclxuICAgICAgICAgIGxldCBjb250ZW50SGVpZ2h0ID0gYXJ0aWNsZUNvbnRlbnQub2Zmc2V0SGVpZ2h0O1xyXG4gICAgICAgICAgYXJ0aWNsZUNhcmQuc3R5bGUuaGVpZ2h0ID0gY29udGVudEhlaWdodCArICdweCc7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGFydGljbGVDYXJkLnN0eWxlLmhlaWdodCA9ICcnO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHNldEhlaWdodCgpO1xyXG5cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBzZXRIZWlnaHQpO1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHNldEhlaWdodCk7XHJcbiAgfVxyXG5cclxuICB2YXIgc2VydmljZXNCb3hXcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNjcm9sbC1oZWlnaHQnKTtcclxuXHJcbiAgaWYgKHNlcnZpY2VzQm94V3JhcHBlcikge1xyXG5cclxuICAgIGNvbnN0IFRBQkxFVF9XSURUSCA9IDc2NztcclxuICAgIHZhciBzZXJ2aWNlc0JveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZXJ2aWNlc19fbmF2LWJveCcpO1xyXG5cclxuICAgIHZhciBzZXRIZWlnaHQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGxldCBpc1RhYmxldCA9IHdpbmRvdy5pbm5lcldpZHRoID4gVEFCTEVUX1dJRFRIO1xyXG5cclxuICAgICAgICBpZiAoaXNUYWJsZXQpIHtcclxuICAgICAgICAgIGxldCBjb250ZW50SGVpZ2h0ID0gc2VydmljZXNCb3hXcmFwcGVyLm9mZnNldEhlaWdodDtcclxuICAgICAgICAgIHNlcnZpY2VzQm94LnN0eWxlLmhlaWdodCA9IGNvbnRlbnRIZWlnaHQgKyAncHgnO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBzZXJ2aWNlc0JveC5zdHlsZS5oZWlnaHQgPSAnJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzZXRIZWlnaHQoKTtcclxuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgc2V0SGVpZ2h0KTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBzZXRIZWlnaHQpO1xyXG4gIH1cclxuXHJcbn0pKCk7XHJcbid1c2Ugc3RyaWN0JztcclxuXHJcbihmdW5jdGlvbiAoKSB7XHJcblxyXG4gIGNvbnN0IERFU0tUT1BfV0lEVEggPSAxMDI1O1xyXG4gIHZhciBwb3J0Zm9saW9QYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcnRmb2xpby1wYWdlX19jb21wYW55Jyk7XHJcblxyXG4gIGlmIChwb3J0Zm9saW9QYWdlICYmIHdpbmRvdy5pbm5lcldpZHRoID4gREVTS1RPUF9XSURUSCkge1xyXG5cclxuICAgIHZhciBwb3J0Zm9saW9Cb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9ydGZvbGlvLXBhZ2VfX2JveCcpO1xyXG4gICAgdmFyIHBvcnRmb2xpb0JveEFkZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3J0Zm9saW8tcGFnZV9fYm94LWFkZCcpO1xyXG4gICAgdmFyIHBvcnRmb2xpb1dyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9ydGZvbGlvLXBhZ2VfX3dyYXBwZXInKTtcclxuICAgIHZhciBwb3J0Zm9saW9Cb3hJbWFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3J0Zm9saW8tcGFnZV9fYm94LWltYWdlJyk7XHJcbiAgICB2YXIgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib3gtY2xvc2VkJyk7XHJcbiAgICB2YXIgdGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50ZXh0LWNsb3NlZCcpO1xyXG5cclxuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcclxuXHJcbiAgICB2YXIgb3BlbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgcG9ydGZvbGlvQm94SW1hZ2Uuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVkoLTIzMCUpJztcclxuICAgICAgcG9ydGZvbGlvQm94LnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVZKC0zMjAlKSc7XHJcbiAgICAgIHBvcnRmb2xpb0JveC5zdHlsZS50cmFuc2l0aW9uRGVsYXkgPSAnJztcclxuICAgICAgcG9ydGZvbGlvQm94SW1hZ2Uuc3R5bGUudHJhbnNpdGlvbkRlbGF5ID0gJyc7XHJcbiAgICAgIHBvcnRmb2xpb1BhZ2UuY2xhc3NMaXN0LmFkZCgncG9ydGZvbGlvLXBhZ2VfX2NvbXBhbnktLWFjdGl2ZScpO1xyXG4gICAgICBwb3J0Zm9saW9Cb3hBZGQuY2xhc3NMaXN0LmFkZCgncG9ydGZvbGlvLXBhZ2VfX2JveC1hZGQtLWFjdGl2ZScpO1xyXG4gICAgICBzZXRUaW1lb3V0KGdyaWRPcGVuLCA2MDApO1xyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgY2xvc2VkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICBwb3J0Zm9saW9Cb3hJbWFnZS5zdHlsZS50cmFuc2Zvcm0gPSAnJztcclxuICAgICAgcG9ydGZvbGlvQm94LnN0eWxlLnRyYW5zZm9ybSA9ICcnO1xyXG4gICAgICBwb3J0Zm9saW9Cb3guc3R5bGUudHJhbnNpdGlvbkRlbGF5ID0gJzAuM3MnO1xyXG4gICAgICBwb3J0Zm9saW9Cb3hJbWFnZS5zdHlsZS50cmFuc2l0aW9uRGVsYXkgPSAnMC4zcyc7XHJcbiAgICAgIHBvcnRmb2xpb1BhZ2UuY2xhc3NMaXN0LnJlbW92ZSgncG9ydGZvbGlvLXBhZ2VfX2NvbXBhbnktLWFjdGl2ZScpO1xyXG4gICAgICBwb3J0Zm9saW9Cb3hBZGQuY2xhc3NMaXN0LnJlbW92ZSgncG9ydGZvbGlvLXBhZ2VfX2JveC1hZGQtLWFjdGl2ZScpO1xyXG4gICAgICBzZXRUaW1lb3V0KGdyaWRDbG9zZWQsIDQwMCk7XHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBjbG9zZWRNYWluID0gZnVuY3Rpb24gKGV2dCkge1xyXG5cclxuICAgICAgaWYgKGV2dC50YXJnZXQgPT09IG1haW4pIHtcclxuXHJcbiAgICAgICAgcG9ydGZvbGlvUGFnZS5jbGFzc0xpc3QucmVtb3ZlKCdwb3J0Zm9saW8tcGFnZV9fY29tcGFueS0tYWN0aXZlJyk7XHJcbiAgICAgICAgcG9ydGZvbGlvQm94QWRkLmNsYXNzTGlzdC5yZW1vdmUoJ3BvcnRmb2xpby1wYWdlX19ib3gtYWRkLS1hY3RpdmUnKTtcclxuICAgICAgICBwb3J0Zm9saW9Cb3hJbWFnZS5zdHlsZS50cmFuc2Zvcm0gPSAnJztcclxuICAgICAgICBwb3J0Zm9saW9Cb3guc3R5bGUudHJhbnNmb3JtID0gJyc7XHJcbiAgICAgICAgcG9ydGZvbGlvQm94LnN0eWxlLnRyYW5zaXRpb25EZWxheSA9ICcnO1xyXG4gICAgICAgIHBvcnRmb2xpb0JveEltYWdlLnN0eWxlLnRyYW5zaXRpb25EZWxheSA9ICcnO1xyXG5cclxuICAgICAgfVxyXG5cclxuICAgIH07XHJcblxyXG4gICAgdmFyIGNsb3NlZFRleHQgPSBmdW5jdGlvbiAoZXZ0KSB7XHJcblxyXG4gICAgICBpZiAoZXZ0LnRhcmdldCA9PT0gdGV4dCkge1xyXG5cclxuICAgICAgICBwb3J0Zm9saW9QYWdlLmNsYXNzTGlzdC5yZW1vdmUoJ3BvcnRmb2xpby1wYWdlX19jb21wYW55LS1hY3RpdmUnKTtcclxuICAgICAgICBwb3J0Zm9saW9Cb3hBZGQuY2xhc3NMaXN0LnJlbW92ZSgncG9ydGZvbGlvLXBhZ2VfX2JveC1hZGQtLWFjdGl2ZScpO1xyXG4gICAgICAgIHBvcnRmb2xpb0JveEltYWdlLnN0eWxlLnRyYW5zZm9ybSA9ICcnO1xyXG4gICAgICAgIHBvcnRmb2xpb0JveC5zdHlsZS50cmFuc2Zvcm0gPSAnJztcclxuICAgICAgICBwb3J0Zm9saW9Cb3guc3R5bGUudHJhbnNpdGlvbkRlbGF5ID0gJyc7XHJcbiAgICAgICAgcG9ydGZvbGlvQm94SW1hZ2Uuc3R5bGUudHJhbnNpdGlvbkRlbGF5ID0gJyc7XHJcblxyXG4gICAgICB9XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignd2hlZWwnLCBmdW5jdGlvbiAoZXZ0KSB7XHJcblxyXG4gICAgICBpZiAoZXZ0LmRlbHRhWSA+IDAgJiYgd2luZG93LmlubmVyV2lkdGggPiBERVNLVE9QX1dJRFRIKSB7XHJcbiAgICAgICAgb3BlbigpO1xyXG4gICAgICB9IGVsc2UgaWYgKHBvcnRmb2xpb1BhZ2Uuc2Nyb2xsVG9wID09PSAwKSB7XHJcbiAgICAgICAgY2xvc2VkKCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICB9KVxyXG5cclxuICAgIG1haW4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZWRNYWluKTtcclxuICAgIHRleHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZWRUZXh0KTtcclxuXHJcbiAgICBmdW5jdGlvbiBncmlkT3BlbigpIHtcclxuICAgICAgcG9ydGZvbGlvV3JhcHBlci5zdHlsZS5ncmlkVGVtcGxhdGVDb2x1bW5zID0gJzI4JSBhdXRvIGF1dG8nO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdyaWRDbG9zZWQoKSB7XHJcbiAgICAgIHBvcnRmb2xpb1dyYXBwZXIuc3R5bGUuZ3JpZFRlbXBsYXRlQ29sdW1ucyA9ICcnO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn0pKCk7XHJcbid1c2Ugc3RyaWN0JztcclxuXHJcbihmdW5jdGlvbiAoKSB7XHJcblxyXG4gIGNvbnN0IEtFWV9DT0RFID0gMjc7XHJcblxyXG4gIHZhciBvdmVybGF5TW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKTtcclxuICB2YXIgbW9kYWxDb25zdWx0YXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtY29uc3VsdGF0aW9uJyk7XHJcblxyXG4gIGlmIChtb2RhbENvbnN1bHRhdGlvbikge1xyXG5cclxuICAgIHZhciBtb2RhbENvbnN1bHRhdGlvbkJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idXR0b24tLWNvbnN1bHRhdGlvbicpO1xyXG4gICAgdmFyIG1vZGFsQ2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubW9kYWxfX2J0bi1jbG9zZWQnKTtcclxuXHJcbiAgICBmb3IodmFyIHkgPSAwOyB5IDwgbW9kYWxDb25zdWx0YXRpb25CdG4ubGVuZ3RoOyB5KyspIHtcclxuXHJcbiAgICAgIG1vZGFsQ29uc3VsdGF0aW9uQnRuW3ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2dCkge1xyXG4gICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICBtb2RhbENvbnN1bHRhdGlvbi5jbGFzc0xpc3QuYWRkKCdtb2RhbC1hY3RpdmUnKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG1vZGFsQ2xvc2UubGVuZ3RoOyBpKyspIHtcclxuICAgICAgbW9kYWxDbG9zZVtpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldnQpIHtcclxuICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgbW9kYWxDb25zdWx0YXRpb24uY2xhc3NMaXN0LnJlbW92ZSgnbW9kYWwtYWN0aXZlJyk7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICcnO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihga2V5ZG93bmAsIGZ1bmN0aW9uIChldnQpIHtcclxuXHJcbiAgICAgIGlmIChldnQua2V5Q29kZSA9PT0gS0VZX0NPREUpIHtcclxuICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgbW9kYWxDb25zdWx0YXRpb24uY2xhc3NMaXN0LmNvbnRhaW5zKGBtb2RhbC1hY3RpdmVgKTtcclxuICAgICAgICBtb2RhbENvbnN1bHRhdGlvbi5jbGFzc0xpc3QucmVtb3ZlKGBtb2RhbC1hY3RpdmVgKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gYGA7XHJcblxyXG4gICAgICB9XHJcblxyXG4gICAgfSk7XHJcblxyXG4gICAgb3ZlcmxheU1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoYGNsaWNrYCwgZnVuY3Rpb24gKGV2dCkge1xyXG5cclxuICAgICAgaWYgKGV2dC50YXJnZXQgPT09IG92ZXJsYXlNb2RhbCkge1xyXG5cclxuICAgICAgICBtb2RhbENvbnN1bHRhdGlvbi5jbGFzc0xpc3QucmVtb3ZlKGBtb2RhbC1hY3RpdmVgKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gYGA7XHJcblxyXG4gICAgICB9XHJcblxyXG4gICAgfSk7XHJcblxyXG4gIH1cclxuXHJcbn0pKCk7XHJcbid1c2Ugc3RyaWN0JztcclxuXHJcbihmdW5jdGlvbiAoKSB7XHJcblxyXG4gICQoZG9jdW1lbnQpLm9uKCdtc2UyX2xvYWQnLCBmdW5jdGlvbihlLCBkYXRhKSB7XHJcblxyXG4gICAgY29uc3QgS0VZX0NPREUgPSAyNztcclxuXHJcbiAgICB2YXIgb3ZlcmxheU1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsJyk7XHJcbiAgICB2YXIgcG9ydGZvbGlvQ2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tb2RhbHMtZGV2ZWxvcG1lbnQnKTtcclxuICAgIHZhciBtb2RhbERldmVsb3BtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLWRldmVsb3BtZW50Jyk7XHJcbiAgICB2YXIgbW9kYWxDbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tb2RhbF9fYnRuLWNsb3NlZCcpO1xyXG5cclxuICAgIGlmIChtb2RhbERldmVsb3BtZW50KSB7XHJcblxyXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG1vZGFsQ2xvc2UubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBtb2RhbENsb3NlW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2dCkge1xyXG4gICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgbW9kYWxEZXZlbG9wbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdtb2RhbC1hY3RpdmUnKTtcclxuICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnJztcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwb3J0Zm9saW9DYXJkLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgcG9ydGZvbGlvQ2FyZFtpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldnQpIHtcclxuICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgIG1vZGFsRGV2ZWxvcG1lbnQuY2xhc3NMaXN0LmFkZCgnbW9kYWwtYWN0aXZlJyk7XHJcbiAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihga2V5ZG93bmAsIGZ1bmN0aW9uIChldnQpIHtcclxuXHJcbiAgICAgICAgaWYgKGV2dC5rZXlDb2RlID09PSBLRVlfQ09ERSkge1xyXG4gICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgbW9kYWxEZXZlbG9wbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ21vZGFsLWFjdGl2ZScpO1xyXG4gICAgICAgICAgbW9kYWxEZXZlbG9wbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdtb2RhbC1hY3RpdmUnKTtcclxuICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBgYDtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgfSk7XHJcblxyXG4gICAgICBvdmVybGF5TW9kYWwuYWRkRXZlbnRMaXN0ZW5lcihgY2xpY2tgLCBmdW5jdGlvbiAoZXZ0KSB7XHJcblxyXG4gICAgICAgIGlmIChldnQudGFyZ2V0ID09PSBvdmVybGF5TW9kYWwpIHtcclxuXHJcbiAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gYGA7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgbW9kYWxEZXZlbG9wbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldnQpIHtcclxuXHJcbiAgICAgICAgaWYgKGV2dC50YXJnZXQgPT09IG1vZGFsRGV2ZWxvcG1lbnQpIHtcclxuICAgICAgICAgIG1vZGFsRGV2ZWxvcG1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdtb2RhbC1hY3RpdmUnKTtcclxuICAgICAgICAgIG1vZGFsRGV2ZWxvcG1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnbW9kYWwtYWN0aXZlJyk7XHJcbiAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gYGA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgfSlcclxuXHJcbiAgICB9XHJcblxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBLRVlfQ09ERSA9IDI3O1xyXG5cclxuICB2YXIgb3ZlcmxheU1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsJyk7XHJcbiAgdmFyIHBvcnRmb2xpb0NhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubW9kYWxzLWRldmVsb3BtZW50Jyk7XHJcbiAgdmFyIG1vZGFsRGV2ZWxvcG1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtZGV2ZWxvcG1lbnQnKTtcclxuICB2YXIgbW9kYWxDbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tb2RhbF9fYnRuLWNsb3NlZCcpO1xyXG5cclxuICBpZiAobW9kYWxEZXZlbG9wbWVudCkge1xyXG5cclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbW9kYWxDbG9zZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICBtb2RhbENsb3NlW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2dCkge1xyXG4gICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICBtb2RhbERldmVsb3BtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ21vZGFsLWFjdGl2ZScpO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnJztcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwb3J0Zm9saW9DYXJkLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHBvcnRmb2xpb0NhcmRbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZ0KSB7XHJcbiAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIG1vZGFsRGV2ZWxvcG1lbnQuY2xhc3NMaXN0LmFkZCgnbW9kYWwtYWN0aXZlJyk7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xyXG5cclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoYGtleWRvd25gLCBmdW5jdGlvbiAoZXZ0KSB7XHJcblxyXG4gICAgICBpZiAoZXZ0LmtleUNvZGUgPT09IEtFWV9DT0RFKSB7XHJcbiAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIG1vZGFsRGV2ZWxvcG1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdtb2RhbC1hY3RpdmUnKTtcclxuICAgICAgICBtb2RhbERldmVsb3BtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ21vZGFsLWFjdGl2ZScpO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBgYDtcclxuXHJcbiAgICAgIH1cclxuXHJcbiAgICB9KTtcclxuXHJcbiAgICBvdmVybGF5TW9kYWwuYWRkRXZlbnRMaXN0ZW5lcihgY2xpY2tgLCBmdW5jdGlvbiAoZXZ0KSB7XHJcblxyXG4gICAgICBpZiAoZXZ0LnRhcmdldCA9PT0gb3ZlcmxheU1vZGFsKSB7XHJcblxyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBgYDtcclxuXHJcbiAgICAgIH1cclxuXHJcbiAgICB9KTtcclxuXHJcbiAgICBtb2RhbERldmVsb3BtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2dCkge1xyXG5cclxuICAgICAgaWYgKGV2dC50YXJnZXQgPT09IG1vZGFsRGV2ZWxvcG1lbnQpIHtcclxuICAgICAgICBtb2RhbERldmVsb3BtZW50LmNsYXNzTGlzdC5jb250YWlucygnbW9kYWwtYWN0aXZlJyk7XHJcbiAgICAgICAgbW9kYWxEZXZlbG9wbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdtb2RhbC1hY3RpdmUnKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gYGA7XHJcbiAgICAgIH1cclxuXHJcbiAgICB9KVxyXG5cclxuICB9XHJcblxyXG59KSgpO1xyXG4ndXNlIHN0cmljdCc7XHJcblxyXG4oZnVuY3Rpb24gKCkge1xyXG5cclxuICBjb25zdCBLRVlfQ09ERSA9IDI3O1xyXG5cclxuICB2YXIgb3ZlcmxheU1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsJyk7XHJcbiAgdmFyIG1vZGFsVGhhbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLXRoYW5rcycpO1xyXG4gIHZhciBtb2RhbENsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1vZGFsX19idG4tY2xvc2VkJyk7XHJcblxyXG4gIGlmIChtb2RhbFRoYW5rcykge1xyXG5cclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbW9kYWxDbG9zZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICBtb2RhbENsb3NlW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2dCkge1xyXG4gICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICBtb2RhbFRoYW5rcy5jbGFzc0xpc3QucmVtb3ZlKCdtb2RhbC1hY3RpdmUnKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJyc7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKGBrZXlkb3duYCwgZnVuY3Rpb24gKGV2dCkge1xyXG5cclxuICAgICAgaWYgKGV2dC5rZXlDb2RlID09PSBLRVlfQ09ERSkge1xyXG4gICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICBtb2RhbFRoYW5rcy5jbGFzc0xpc3QuY29udGFpbnMoJ21vZGFsLWFjdGl2ZScpO1xyXG4gICAgICAgIG1vZGFsVGhhbmtzLmNsYXNzTGlzdC5yZW1vdmUoJ21vZGFsLWFjdGl2ZScpO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBgYDtcclxuXHJcbiAgICAgIH1cclxuXHJcbiAgICB9KTtcclxuXHJcbiAgICBvdmVybGF5TW9kYWwuYWRkRXZlbnRMaXN0ZW5lcihgY2xpY2tgLCBmdW5jdGlvbiAoZXZ0KSB7XHJcblxyXG4gICAgICBpZiAoZXZ0LnRhcmdldCA9PT0gb3ZlcmxheU1vZGFsKSB7XHJcblxyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBgYDtcclxuXHJcbiAgICAgIH1cclxuXHJcbiAgICB9KTtcclxuXHJcbiAgICBtb2RhbFRoYW5rcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldnQpIHtcclxuXHJcbiAgICAgIGlmIChldnQudGFyZ2V0ID09PSBtb2RhbFRoYW5rcykge1xyXG4gICAgICAgIG1vZGFsVGhhbmtzLmNsYXNzTGlzdC5jb250YWlucygnbW9kYWwtYWN0aXZlJyk7XHJcbiAgICAgICAgbW9kYWxUaGFua3MuY2xhc3NMaXN0LnJlbW92ZSgnbW9kYWwtYWN0aXZlJyk7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IGBgO1xyXG4gICAgICB9XHJcblxyXG4gICAgfSlcclxuXHJcbiAgfVxyXG5cclxufSkoKTtcclxuJ3VzZSBzdHJpY3QnO1xyXG5cclxuKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgY29uc3QgS0VZX0NPREUgPSAyNztcclxuXHJcbiAgdmFyIG92ZXJsYXlNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpO1xyXG4gIHZhciBtb2RhbEZlZWRiYWNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLWZlZWRiYWNrJyk7XHJcbiAgdmFyIG1vZGFsRmVlZGJhY2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmVlZGJhY2stYnRuJyk7XHJcbiAgdmFyIG1vZGFsQ2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubW9kYWxfX2J0bi1jbG9zZWQnKTtcclxuXHJcbiAgaWYgKG1vZGFsRmVlZGJhY2tCdG4pIHtcclxuXHJcbiAgICBtb2RhbEZlZWRiYWNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2dCkge1xyXG4gICAgICBldnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgIG1vZGFsRmVlZGJhY2suY2xhc3NMaXN0LmFkZCgnbW9kYWwtYWN0aXZlJyk7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcclxuICAgIH0pO1xyXG5cclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbW9kYWxDbG9zZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICBtb2RhbENsb3NlW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2dCkge1xyXG4gICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICBtb2RhbEZlZWRiYWNrLmNsYXNzTGlzdC5yZW1vdmUoJ21vZGFsLWFjdGl2ZScpO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnJztcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoYGtleWRvd25gLCBmdW5jdGlvbiAoZXZ0KSB7XHJcblxyXG4gICAgICBpZiAoZXZ0LmtleUNvZGUgPT09IEtFWV9DT0RFKSB7XHJcbiAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIG1vZGFsRmVlZGJhY2suY2xhc3NMaXN0LmNvbnRhaW5zKGBtb2RhbC1hY3RpdmVgKTtcclxuICAgICAgICBtb2RhbEZlZWRiYWNrLmNsYXNzTGlzdC5yZW1vdmUoYG1vZGFsLWFjdGl2ZWApO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBgYDtcclxuXHJcbiAgICAgIH1cclxuXHJcbiAgICB9KTtcclxuXHJcbiAgICBvdmVybGF5TW9kYWwuYWRkRXZlbnRMaXN0ZW5lcihgY2xpY2tgLCBmdW5jdGlvbiAoZXZ0KSB7XHJcblxyXG4gICAgICBpZiAoZXZ0LnRhcmdldCA9PT0gb3ZlcmxheU1vZGFsKSB7XHJcblxyXG4gICAgICAgIG1vZGFsRmVlZGJhY2suY2xhc3NMaXN0LnJlbW92ZShgbW9kYWwtYWN0aXZlYCk7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IGBgO1xyXG5cclxuICAgICAgfVxyXG5cclxuICAgIH0pO1xyXG5cclxuICB9XHJcblxyXG59KSgpO1xyXG4ndXNlIHN0cmljdCc7XHJcblxyXG4oZnVuY3Rpb24gKCkge1xyXG5cclxuICBjb25zdCBLRVlfQ09ERSA9IDI3O1xyXG5cclxuICB2YXIgb3ZlcmxheU1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsJyk7XHJcbiAgdmFyIG1vZGFsQW5hbHlzaXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtYW5hbHlzaXMnKTtcclxuICB2YXIgbW9kYWxBbmFseXNpc0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbmFseXNpcy1idG4nKTtcclxuICB2YXIgbW9kYWxDbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tb2RhbF9fYnRuLWNsb3NlZCcpO1xyXG5cclxuICBpZiAobW9kYWxBbmFseXNpc0J0bikge1xyXG5cclxuICAgIG1vZGFsQW5hbHlzaXNCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZ0KSB7XHJcbiAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgbW9kYWxBbmFseXNpcy5jbGFzc0xpc3QuYWRkKCdtb2RhbC1hY3RpdmUnKTtcclxuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtb2RhbENsb3NlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIG1vZGFsQ2xvc2VbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZ0KSB7XHJcbiAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIG1vZGFsQW5hbHlzaXMuY2xhc3NMaXN0LnJlbW92ZSgnbW9kYWwtYWN0aXZlJyk7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICcnO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihga2V5ZG93bmAsIGZ1bmN0aW9uIChldnQpIHtcclxuXHJcbiAgICAgIGlmIChldnQua2V5Q29kZSA9PT0gS0VZX0NPREUpIHtcclxuICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgbW9kYWxBbmFseXNpcy5jbGFzc0xpc3QuY29udGFpbnMoYG1vZGFsLWFjdGl2ZWApO1xyXG4gICAgICAgIG1vZGFsQW5hbHlzaXMuY2xhc3NMaXN0LnJlbW92ZShgbW9kYWwtYWN0aXZlYCk7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IGBgO1xyXG5cclxuICAgICAgfVxyXG5cclxuICAgIH0pO1xyXG5cclxuICAgIG92ZXJsYXlNb2RhbC5hZGRFdmVudExpc3RlbmVyKGBjbGlja2AsIGZ1bmN0aW9uIChldnQpIHtcclxuXHJcbiAgICAgIGlmIChldnQudGFyZ2V0ID09PSBvdmVybGF5TW9kYWwpIHtcclxuXHJcbiAgICAgICAgbW9kYWxBbmFseXNpcy5jbGFzc0xpc3QucmVtb3ZlKGBtb2RhbC1hY3RpdmVgKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gYGA7XHJcblxyXG4gICAgICB9XHJcblxyXG4gICAgfSk7XHJcblxyXG4gIH1cclxuXHJcbn0pKCk7XHJcbid1c2Ugc3RyaWN0JztcclxuXHJcbihmdW5jdGlvbiAoKSB7XHJcblxyXG4gIGNvbnN0IEtFWV9DT0RFID0gMjc7XHJcblxyXG4gIHZhciBvdmVybGF5TW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKTtcclxuICB2YXIgbW9kYWxDb25zdWx0YXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtY29uc3VsdGF0aW9uJyk7XHJcbiAgdmFyIG1vZGFsQ29uc3VsdGF0aW9uQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcnRmb2xpby1tb2RhbC1qcycpO1xyXG5cclxuICBpZiAobW9kYWxDb25zdWx0YXRpb25CdG4pIHtcclxuXHJcbiAgICB2YXIgbW9kYWxDbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tb2RhbF9fYnRuLWNsb3NlZCcpO1xyXG5cclxuICAgICAgbW9kYWxDb25zdWx0YXRpb25CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZ0KSB7XHJcbiAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIG1vZGFsQ29uc3VsdGF0aW9uLmNsYXNzTGlzdC5hZGQoJ21vZGFsLWFjdGl2ZScpO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcclxuICAgICAgfSk7XHJcblxyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtb2RhbENsb3NlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIG1vZGFsQ2xvc2VbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZ0KSB7XHJcbiAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIG1vZGFsQ29uc3VsdGF0aW9uLmNsYXNzTGlzdC5yZW1vdmUoJ21vZGFsLWFjdGl2ZScpO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnJztcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoYGtleWRvd25gLCBmdW5jdGlvbiAoZXZ0KSB7XHJcblxyXG4gICAgICBpZiAoZXZ0LmtleUNvZGUgPT09IEtFWV9DT0RFKSB7XHJcbiAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIG1vZGFsQ29uc3VsdGF0aW9uLmNsYXNzTGlzdC5jb250YWlucyhgbW9kYWwtYWN0aXZlYCk7XHJcbiAgICAgICAgbW9kYWxDb25zdWx0YXRpb24uY2xhc3NMaXN0LnJlbW92ZShgbW9kYWwtYWN0aXZlYCk7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IGBgO1xyXG5cclxuICAgICAgfVxyXG5cclxuICAgIH0pO1xyXG5cclxuICAgIG92ZXJsYXlNb2RhbC5hZGRFdmVudExpc3RlbmVyKGBjbGlja2AsIGZ1bmN0aW9uIChldnQpIHtcclxuXHJcbiAgICAgIGlmIChldnQudGFyZ2V0ID09PSBvdmVybGF5TW9kYWwpIHtcclxuXHJcbiAgICAgICAgbW9kYWxDb25zdWx0YXRpb24uY2xhc3NMaXN0LnJlbW92ZShgbW9kYWwtYWN0aXZlYCk7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IGBgO1xyXG5cclxuICAgICAgfVxyXG5cclxuICAgIH0pO1xyXG5cclxuICB9XHJcblxyXG4gICQoZG9jdW1lbnQpLm9uKCdtc2UyX2xvYWQnLCBmdW5jdGlvbihlLCBkYXRhKSB7XHJcblxyXG4gICAgY29uc3QgS0VZX0NPREUgPSAyNztcclxuXHJcbiAgICB2YXIgb3ZlcmxheU1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsJyk7XHJcbiAgICB2YXIgbW9kYWxDb25zdWx0YXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtY29uc3VsdGF0aW9uJyk7XHJcbiAgICB2YXIgbW9kYWxDb25zdWx0YXRpb25CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9ydGZvbGlvLW1vZGFsLWpzJyk7XHJcblxyXG4gICAgaWYgKG1vZGFsQ29uc3VsdGF0aW9uQnRuKSB7XHJcblxyXG4gICAgICB2YXIgbW9kYWxDbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tb2RhbF9fYnRuLWNsb3NlZCcpO1xyXG5cclxuICAgICAgbW9kYWxDb25zdWx0YXRpb25CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZ0KSB7XHJcbiAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIG1vZGFsQ29uc3VsdGF0aW9uLmNsYXNzTGlzdC5hZGQoJ21vZGFsLWFjdGl2ZScpO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG1vZGFsQ2xvc2UubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBtb2RhbENsb3NlW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2dCkge1xyXG4gICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgbW9kYWxDb25zdWx0YXRpb24uY2xhc3NMaXN0LnJlbW92ZSgnbW9kYWwtYWN0aXZlJyk7XHJcbiAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJyc7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKGBrZXlkb3duYCwgZnVuY3Rpb24gKGV2dCkge1xyXG5cclxuICAgICAgICBpZiAoZXZ0LmtleUNvZGUgPT09IEtFWV9DT0RFKSB7XHJcbiAgICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICBtb2RhbENvbnN1bHRhdGlvbi5jbGFzc0xpc3QuY29udGFpbnMoYG1vZGFsLWFjdGl2ZWApO1xyXG4gICAgICAgICAgbW9kYWxDb25zdWx0YXRpb24uY2xhc3NMaXN0LnJlbW92ZShgbW9kYWwtYWN0aXZlYCk7XHJcbiAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gYGA7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgb3ZlcmxheU1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoYGNsaWNrYCwgZnVuY3Rpb24gKGV2dCkge1xyXG5cclxuICAgICAgICBpZiAoZXZ0LnRhcmdldCA9PT0gb3ZlcmxheU1vZGFsKSB7XHJcblxyXG4gICAgICAgICAgbW9kYWxDb25zdWx0YXRpb24uY2xhc3NMaXN0LnJlbW92ZShgbW9kYWwtYWN0aXZlYCk7XHJcbiAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gYGA7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcbiAgfSk7XHJcblxyXG59KSgpO1xyXG4ndXNlIHN0cmljdCc7XHJcblxyXG4oZnVuY3Rpb24gKCkge1xyXG5cclxuICBjb25zdCBLRVlfQ09ERSA9IDI3O1xyXG5cclxuICB2YXIgb3ZlcmxheU1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsJyk7XHJcbiAgdmFyIG1vZGFsUXVlc3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtcXVlc3Rpb24nKTtcclxuICB2YXIgbW9kYWxDbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tb2RhbF9fYnRuLWNsb3NlZCcpO1xyXG4gIHZhciBsaW5rUGhvbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGluay1tb2RhbC1xdWVzdGlvbicpO1xyXG5cclxuICBpZiAobW9kYWxRdWVzdGlvbikge1xyXG5cclxuICAgIHZhciBtb2RhbFNob3cgPSBmdW5jdGlvbiAoZXZ0KSB7XHJcbiAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgbW9kYWxRdWVzdGlvbi5jbGFzc0xpc3QuYWRkKCdtb2RhbC1hY3RpdmUnKTtcclxuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xyXG4gICAgfTtcclxuXHJcbiAgICBsaW5rUGhvbmUuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSwgaSkge1xyXG4gICAgICBsaW5rUGhvbmVbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBtb2RhbFNob3cpO1xyXG4gICAgfSlcclxuXHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG1vZGFsQ2xvc2UubGVuZ3RoOyBpKyspIHtcclxuICAgICAgbW9kYWxDbG9zZVtpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldnQpIHtcclxuICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgbW9kYWxRdWVzdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCdtb2RhbC1hY3RpdmUnKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJyc7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKGBrZXlkb3duYCwgZnVuY3Rpb24gKGV2dCkge1xyXG5cclxuICAgICAgaWYgKGV2dC5rZXlDb2RlID09PSBLRVlfQ09ERSkge1xyXG4gICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICBtb2RhbFF1ZXN0aW9uLmNsYXNzTGlzdC5jb250YWlucygnbW9kYWwtYWN0aXZlJyk7XHJcbiAgICAgICAgbW9kYWxRdWVzdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCdtb2RhbC1hY3RpdmUnKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gYGA7XHJcblxyXG4gICAgICB9XHJcblxyXG4gICAgfSk7XHJcblxyXG4gICAgb3ZlcmxheU1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoYGNsaWNrYCwgZnVuY3Rpb24gKGV2dCkge1xyXG5cclxuICAgICAgaWYgKGV2dC50YXJnZXQgPT09IG92ZXJsYXlNb2RhbCkge1xyXG5cclxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gYGA7XHJcblxyXG4gICAgICB9XHJcblxyXG4gICAgfSk7XHJcblxyXG4gICAgbW9kYWxRdWVzdGlvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldnQpIHtcclxuXHJcbiAgICAgIGlmIChldnQudGFyZ2V0ID09PSBtb2RhbFF1ZXN0aW9uKSB7XHJcbiAgICAgICAgbW9kYWxRdWVzdGlvbi5jbGFzc0xpc3QuY29udGFpbnMoJ21vZGFsLWFjdGl2ZScpO1xyXG4gICAgICAgIG1vZGFsUXVlc3Rpb24uY2xhc3NMaXN0LnJlbW92ZSgnbW9kYWwtYWN0aXZlJyk7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IGBgO1xyXG4gICAgICB9XHJcblxyXG4gICAgfSlcclxuXHJcbiAgfVxyXG5cclxufSkoKTtcclxuJ3VzZSBzdHJpY3QnO1xyXG5cclxuKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgY29uc3QgS0VZX0NPREUgPSAyNztcclxuXHJcbiAgdmFyIHNlcnZpY2VzTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtc2VydmljZXMtb3JkZXInKTtcclxuXHJcbiAgaWYgKHNlcnZpY2VzTW9kYWwpIHtcclxuXHJcbiAgICB2YXIgbW9kYWxTZXJ2aWNlc0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zZXJ2aWNlcy1tb2RhbC1qcycpO1xyXG4gICAgdmFyIG1vZGFsQ2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubW9kYWxfX2J0bi1jbG9zZWQnKTtcclxuICAgIHZhciBzZXJ2aWNlc0Jhbm5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZXJ2aWNlc19faW1hZ2Utc2VvIGltZycpO1xyXG5cclxuICAgIGlmIChzZXJ2aWNlc0Jhbm5lcikge1xyXG5cclxuICAgICAgc2VydmljZXNCYW5uZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgc2VydmljZXNNb2RhbC5jbGFzc0xpc3QuYWRkKCdtb2RhbC1hY3RpdmUnKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZvciAodmFyIHkgPSAwOyB5IDwgbW9kYWxTZXJ2aWNlc0J0bi5sZW5ndGg7IHkrKykge1xyXG5cclxuICAgICAgbW9kYWxTZXJ2aWNlc0J0blt5XS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldnQpIHtcclxuICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgc2VydmljZXNNb2RhbC5jbGFzc0xpc3QuYWRkKCdtb2RhbC1hY3RpdmUnKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG1vZGFsQ2xvc2UubGVuZ3RoOyBpKyspIHtcclxuICAgICAgbW9kYWxDbG9zZVtpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldnQpIHtcclxuICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgc2VydmljZXNNb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdtb2RhbC1hY3RpdmUnKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJyc7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKGBrZXlkb3duYCwgZnVuY3Rpb24gKGV2dCkge1xyXG5cclxuICAgICAgaWYgKGV2dC5rZXlDb2RlID09PSBLRVlfQ09ERSkge1xyXG4gICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICBzZXJ2aWNlc01vZGFsLmNsYXNzTGlzdC5jb250YWlucyhgbW9kYWwtYWN0aXZlYCk7XHJcbiAgICAgICAgc2VydmljZXNNb2RhbC5jbGFzc0xpc3QucmVtb3ZlKGBtb2RhbC1hY3RpdmVgKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gYGA7XHJcblxyXG4gICAgICB9XHJcblxyXG4gICAgfSk7XHJcblxyXG4gICAgc2VydmljZXNNb2RhbC5hZGRFdmVudExpc3RlbmVyKGBjbGlja2AsIGZ1bmN0aW9uIChldnQpIHtcclxuXHJcbiAgICAgIGlmIChldnQudGFyZ2V0ID09PSBzZXJ2aWNlc01vZGFsKSB7XHJcblxyXG4gICAgICAgIHNlcnZpY2VzTW9kYWwuY2xhc3NMaXN0LnJlbW92ZShgbW9kYWwtYWN0aXZlYCk7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IGBgO1xyXG5cclxuICAgICAgfVxyXG5cclxuICAgIH0pO1xyXG5cclxuICB9XHJcblxyXG59KSgpO1xyXG4ndXNlIHN0cmljdCc7XHJcblxyXG4oZnVuY3Rpb24gKCkge1xyXG5cclxuICAkKCcuc2VydmljZXNfX2J0bi10b29sdGlwJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoJ3NlcnZpY2VzX19idG4tdG9vbHRpcC0tYWN0aXZlJykpIHtcclxuICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnc2VydmljZXNfX2J0bi10b29sdGlwLS1hY3RpdmUnKTtcclxuXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkKFwiLnNlcnZpY2VzX19idG4tdG9vbHRpcFwiKS5yZW1vdmVDbGFzcygnc2VydmljZXNfX2J0bi10b29sdGlwLS1hY3RpdmUnKTtcclxuICAgICAgJCh0aGlzKS5hZGRDbGFzcygnc2VydmljZXNfX2J0bi10b29sdGlwLS1hY3RpdmUnKTtcclxuICAgIH1cclxuICAgIGlmICgkKHRoaXMpLnBhcmVudCgpLnBhcmVudCgpLnBhcmVudCgpLmZpbmQoJy5zZXJ2aWNlc19fdGV4dC1ib3gnKS5oYXNDbGFzcygnc2VydmljZXNfX3RleHQtYm94LS1hY3RpdmUnKSkge1xyXG4gICAgICAkKHRoaXMpLnBhcmVudCgpLnBhcmVudCgpLnBhcmVudCgpLmZpbmQoJy5zZXJ2aWNlc19fdGV4dC1ib3gnKS5yZW1vdmVDbGFzcygnc2VydmljZXNfX3RleHQtYm94LS1hY3RpdmUnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQoJy5zZXJ2aWNlc19fdGV4dC1ib3gnKS5yZW1vdmVDbGFzcygnc2VydmljZXNfX3RleHQtYm94LS1hY3RpdmUnKTtcclxuICAgICAgJCh0aGlzKS5wYXJlbnQoKS5wYXJlbnQoKS5wYXJlbnQoKS5maW5kKCcuc2VydmljZXNfX3RleHQtYm94JykuYWRkQ2xhc3MoJ3NlcnZpY2VzX190ZXh0LWJveC0tYWN0aXZlJyk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gICQoJy5zZXJ2aWNlc19fYnRuLW1vcmUnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcygnc2VydmljZXNfX2J0bi1tb3JlLS1hY3RpdmUnKSkge1xyXG4gICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdzZXJ2aWNlc19fYnRuLW1vcmUtLWFjdGl2ZScpO1xyXG5cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQoXCIuc2VydmljZXNfX2J0bi1tb3JlXCIpLnJlbW92ZUNsYXNzKCdzZXJ2aWNlc19fYnRuLW1vcmUtLWFjdGl2ZScpO1xyXG4gICAgICAkKHRoaXMpLmFkZENsYXNzKCdzZXJ2aWNlc19fYnRuLW1vcmUtLWFjdGl2ZScpO1xyXG4gICAgfVxyXG4gICAgaWYgKCQodGhpcykucGFyZW50KCkuZmluZCgnLnNlcnZpY2VzX19wcmljZS13cmFwJykuaGFzQ2xhc3MoJ3NlcnZpY2VzX19wcmljZS13cmFwLS1hY3RpdmUnKSkge1xyXG4gICAgICAkKHRoaXMpLnBhcmVudCgpLmZpbmQoJy5zZXJ2aWNlc19fcHJpY2Utd3JhcCcpLnJlbW92ZUNsYXNzKCdzZXJ2aWNlc19fcHJpY2Utd3JhcC0tYWN0aXZlJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkKCcuc2VydmljZXNfX3ByaWNlLXdyYXAnKS5yZW1vdmVDbGFzcygnc2VydmljZXNfX3ByaWNlLXdyYXAtLWFjdGl2ZScpO1xyXG4gICAgICAkKHRoaXMpLnBhcmVudCgpLmZpbmQoJy5zZXJ2aWNlc19fcHJpY2Utd3JhcCcpLmFkZENsYXNzKCdzZXJ2aWNlc19fcHJpY2Utd3JhcC0tYWN0aXZlJyk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG59KSgpO1xyXG4ndXNlIHN0cmljdCc7XHJcblxyXG4oZnVuY3Rpb24gKCkge1xyXG5cclxuICAkKGRvY3VtZW50KS5vbignYWZfY29tcGxldGUnLCBmdW5jdGlvbiAoZXZlbnQsIHJlc3BvbnNlKSB7XHJcblxyXG4gICAgdmFyIG1vZGFsQ29uc3VsdGF0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLWNvbnN1bHRhdGlvbicpO1xyXG4gICAgdmFyIG1vZGFsRmVlZGJhY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtZmVlZGJhY2snKTtcclxuICAgIHZhciBtb2RhbEFuYWx5c2lzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLWFuYWx5c2lzJyk7XHJcbiAgICB2YXIgbW9kYWxRdWVzdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1xdWVzdGlvbicpO1xyXG4gICAgdmFyIG1vZGFsU2VydmljZXNPcmRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1zZXJ2aWNlcy1vcmRlcicpO1xyXG4gICAgdmFyIG1vZGFsVGhhbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLXRoYW5rcycpO1xyXG4gICAgdmFyIGZvcm0gPSByZXNwb25zZS5mb3JtO1xyXG5cclxuICAgIGlmIChmb3JtLmF0dHIoJ2lkJykgPT09ICdmb3JtLWNvbnRhY3RzJykge1xyXG4gICAgICBtb2RhbFRoYW5rcy5jbGFzc0xpc3QuYWRkKCdtb2RhbC1hY3RpdmUnKTtcclxuICAgICAgcmVzcG9uc2UubWVzc2FnZSA9ICcnO1xyXG5cclxuICAgIH0gZWxzZSBpZiAoZm9ybS5hdHRyKCdpZCcpID09PSAnZm9ybS1wb3J0Zm9saW8nKSB7XHJcbiAgICAgIG1vZGFsVGhhbmtzLmNsYXNzTGlzdC5hZGQoJ21vZGFsLWFjdGl2ZScpO1xyXG4gICAgICBtb2RhbENvbnN1bHRhdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCdtb2RhbC1hY3RpdmUnKTtcclxuICAgICAgcmVzcG9uc2UubWVzc2FnZSA9ICcnO1xyXG5cclxuICAgIH0gZWxzZSBpZiAoZm9ybS5hdHRyKCdpZCcpID09PSAnZm9ybS1tYWluJykge1xyXG4gICAgICBtb2RhbFRoYW5rcy5jbGFzc0xpc3QuYWRkKCdtb2RhbC1hY3RpdmUnKTtcclxuICAgICAgcmVzcG9uc2UubWVzc2FnZSA9ICcnO1xyXG5cclxuICAgIH0gZWxzZSBpZiAoZm9ybS5hdHRyKCdpZCcpID09PSAnZm9ybS1mZWVkYmFjaycpIHtcclxuICAgICAgbW9kYWxGZWVkYmFjay5jbGFzc0xpc3QucmVtb3ZlKCdtb2RhbC1hY3RpdmUnKTtcclxuICAgICAgbW9kYWxUaGFua3MuY2xhc3NMaXN0LmFkZCgnbW9kYWwtYWN0aXZlJyk7XHJcbiAgICAgIHJlc3BvbnNlLm1lc3NhZ2UgPSAnJztcclxuXHJcbiAgICB9IGVsc2UgaWYgKGZvcm0uYXR0cignaWQnKSA9PT0gJ2Zvcm0tYW5hbHlzaXMnKSB7XHJcbiAgICAgIG1vZGFsQW5hbHlzaXMuY2xhc3NMaXN0LnJlbW92ZSgnbW9kYWwtYWN0aXZlJyk7XHJcbiAgICAgIG1vZGFsVGhhbmtzLmNsYXNzTGlzdC5hZGQoJ21vZGFsLWFjdGl2ZScpO1xyXG4gICAgICByZXNwb25zZS5tZXNzYWdlID0gJyc7XHJcblxyXG4gICAgfSBlbHNlIGlmIChmb3JtLmF0dHIoJ2lkJykgPT09ICdmb3JtLXF1ZXN0aW9uJykge1xyXG4gICAgICBtb2RhbFF1ZXN0aW9uLmNsYXNzTGlzdC5yZW1vdmUoJ21vZGFsLWFjdGl2ZScpO1xyXG4gICAgICBtb2RhbFRoYW5rcy5jbGFzc0xpc3QuYWRkKCdtb2RhbC1hY3RpdmUnKTtcclxuICAgICAgcmVzcG9uc2UubWVzc2FnZSA9ICcnO1xyXG4gICAgfSBlbHNlIGlmIChmb3JtLmF0dHIoJ2lkJykgPT09ICdmb3JtLW9yZGVyJykge1xyXG4gICAgICBtb2RhbFNlcnZpY2VzT3JkZXIuY2xhc3NMaXN0LnJlbW92ZSgnbW9kYWwtYWN0aXZlJyk7XHJcbiAgICAgIG1vZGFsVGhhbmtzLmNsYXNzTGlzdC5hZGQoJ21vZGFsLWFjdGl2ZScpO1xyXG4gICAgICByZXNwb25zZS5tZXNzYWdlID0gJyc7XHJcbiAgICB9XHJcblxyXG4gICAgZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgIH1cclxuXHJcbiAgfSk7XHJcblxyXG59KSgpO1xyXG4ndXNlIHN0cmljdCc7XHJcblxyXG4oZnVuY3Rpb24gKCkge1xyXG5cclxuICBjb25zdCBERVNLVE9QX1dJRFRIID0gMTAyMztcclxuICB2YXIgZmVlZGJhY2tMb2dvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZlZWRiYWNrX19ib3gtbG9nb3R5cGVzJyk7XHJcbiAgdmFyIGZlZWRiYWNrQWN0aXZlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZlZWRiYWNrX19ib3gtaW5mby0tYWN0aXZlJylcclxuXHJcbiAgaWYgKGZlZWRiYWNrTG9nbyAmJiB3aW5kb3cuaW5uZXJXaWR0aCA+IERFU0tUT1BfV0lEVEgpIHtcclxuXHJcbiAgICB2YXIgZmVlZGJhY2tCb3hJbmZvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZlZWRiYWNrX19ib3gtaW5mbyBhJyk7XHJcbiAgICB2YXIgZmVlZGJhY2tBcnRpY2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZlZWRiYWNrX19ib3ggYXJ0aWNsZScpO1xyXG5cclxuICAgIHZhciByZW1vdmVBY3RpdmUgPSBmdW5jdGlvbiAoYXJyYXksIGFjdGl2ZUNsYXNzKSB7XHJcbiAgICAgIGFycmF5LmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoYWN0aXZlQ2xhc3MpO1xyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfTtcclxuXHJcbiAgICBpZiAoZmVlZGJhY2tCb3hJbmZvKSB7XHJcbiAgICAgIGZlZWRiYWNrQm94SW5mby5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtLCBpKSB7XHJcbiAgICAgICAgZmVlZGJhY2tCb3hJbmZvWzBdLmNsYXNzTGlzdC5hZGQoJ2ZlZWRiYWNrX19ib3gtaW5mby0tYWN0aXZlJyk7XHJcbiAgICAgICAgZmVlZGJhY2tBcnRpY2xlWzBdLmNsYXNzTGlzdC5hZGQoJ2ZlZWRiYWNrLWFjdGl2ZScpO1xyXG4gICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZ0KSB7XHJcbiAgICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICByZW1vdmVBY3RpdmUoZmVlZGJhY2tCb3hJbmZvLCAnZmVlZGJhY2tfX2JveC1pbmZvLS1hY3RpdmUnKTtcclxuICAgICAgICAgIHJlbW92ZUFjdGl2ZShmZWVkYmFja0FydGljbGUsICdmZWVkYmFjay1hY3RpdmUnKTtcclxuICAgICAgICAgIGZlZWRiYWNrQm94SW5mb1tpXS5jbGFzc0xpc3QuYWRkKCdmZWVkYmFja19fYm94LWluZm8tLWFjdGl2ZScpO1xyXG4gICAgICAgICAgZmVlZGJhY2tBcnRpY2xlW2ldLmNsYXNzTGlzdC5hZGQoJ2ZlZWRiYWNrLWFjdGl2ZScpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGpRdWVyeShmdW5jdGlvbigkKXtcclxuICAgICQoZG9jdW1lbnQpLm1vdXNldXAoZnVuY3Rpb24gKGUpe1xyXG4gICAgICB2YXIgZGl2ID0gJChcIi5mZWVkYmFja19fYm94LWluZm8tLWFjdGl2ZVwiKTtcclxuICAgICAgaWYgKCFkaXYuaXMoZS50YXJnZXQpXHJcbiAgICAgICAgJiYgZGl2LmhhcyhlLnRhcmdldCkubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgalF1ZXJ5KFwiaWZyYW1lXCIpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgalF1ZXJ5KHRoaXMpWzBdLmNvbnRlbnRXaW5kb3cucG9zdE1lc3NhZ2UoJ3tcImV2ZW50XCI6XCJjb21tYW5kXCIsXCJmdW5jXCI6XCJwYXVzZVZpZGVvXCIsXCJhcmdzXCI6XCJcIn0nLCAnKicpXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxufSkoKTtcclxuXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4oZnVuY3Rpb24gKCkge1xyXG5cclxuICB5bWFwcy5yZWFkeShbJ0FuaW1hdGVkTGluZSddKS50aGVuKGluaXQpO1xyXG5cclxuICBmdW5jdGlvbiBpbml0KHltYXBzKSB7XHJcbiAgICB2YXIgbXlNYXAgPSBuZXcgeW1hcHMuTWFwKFwibWFwXCIsIHtcclxuICAgICAgY2VudGVyOiBbNTMuOTQ1ODQ4NDgyNjU3MjEsMjcuNjM3Mzg0OTA0NDExMTAzXSxcclxuICAgICAgem9vbTogMTRcclxuICAgIH0sIHtcclxuICAgICAgc2VhcmNoQ29udHJvbFByb3ZpZGVyOiAneWFuZGV4I3NlYXJjaCdcclxuICAgIH0pLFxyXG4gICAgbXlHZW9PYmplY3QgPSBuZXcgeW1hcHMuR2VvT2JqZWN0KHtcclxuICAgICAgZ2VvbWV0cnk6IHtcclxuICAgICAgICB0eXBlOiBcIlBvaW50XCIsXHJcbiAgICAgICAgY29vcmRpbmF0ZXM6IFs1My45NDU4NDg0ODI2NTcyMSwyNy42MzczODQ5MDQ0MTExMDNdXHJcbiAgICAgIH0sXHJcbiAgICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBpY29uQ29udGVudDogJzxzdHJvbmcgc3R5bGU9XCJjb2xvcjogI0MxMTIyQztcIj5DcmVhdGl2ZSBNYXJrZXRpbmcgPHNwYW4gc3R5bGU9XCJjb2xvcjogIzBBM0Q3NjtcIj5ib3g8L3NwYW4+PC9zdHJvbmc+JyxcclxuICAgICAgfVxyXG4gICAgfSwge1xyXG4gICAgICBwcmVzZXQ6ICdpc2xhbmRzI25pZ2h0U3RyZXRjaHlJY29uJ1xyXG4gICAgfSk7XHJcblxyXG4gICAgbXlNYXAuZ2VvT2JqZWN0c1xyXG4gICAgICAuYWRkKG15R2VvT2JqZWN0KTtcclxuXHJcbiAgICB2YXIgZmlyc3RQb2ludCA9IG5ldyB5bWFwcy5QbGFjZW1hcmsoWzUzLjkzNDU1Mzc1NDg1MDk3NCwyNy42NTE4MTYwNDM2NTUzNF0sIHt9LCB7XHJcbiAgICAgIHByZXNldDogJ2lzbGFuZHMjcmVkUmFwaWRUcmFuc2l0Q2lyY2xlSWNvbidcclxuICAgIH0pO1xyXG5cclxuICAgIHZhciBzZWNvbmRQb2ludCA9IG5ldyB5bWFwcy5QbGFjZW1hcmsoWzUzLjk0NTg2NjM3NDc3MzI0NiwyNy42Mzc0MTY3ODI3NjU2MjNdLCB7XHJcbiAgICAgIGljb25Db250ZW50OiAnPHN0cm9uZyBzdHlsZT1cImNvbG9yOiAjQzExMjJDO1wiPkNyZWF0aXZlIE1hcmtldGluZyA8c3BhbiBzdHlsZT1cImNvbG9yOiAjMEEzRDc2O1wiPmJveDwvc3Bhbj48L3N0cm9uZz4nXHJcbiAgICB9LCB7XHJcbiAgICAgIHByZXNldDogJ2lzbGFuZHMjbmlnaHRTdHJldGNoeUljb24nXHJcbiAgICB9KTtcclxuXHJcbiAgICB2YXIgZmlyc3RQb2ludDIgPSBuZXcgeW1hcHMuUGxhY2VtYXJrKFs1My45MzgxNzk5NTY4MDE4OCwyNy42NzQyNjUyNzgzNjU4OV0sIHt9LCB7XHJcbiAgICAgIHByZXNldDogJ2lzbGFuZHMjcmVkRG90SWNvbldpdGhDYXB0aW9uJ1xyXG4gICAgfSk7XHJcblxyXG4gICAgdmFyIHNlY29uZFBvaW50MiA9IG5ldyB5bWFwcy5QbGFjZW1hcmsoWzUzLjk0NTg2NjM3NDc3MzI0NiwyNy42Mzc0MTY3ODI3NjU2MjNdLCB7XHJcbiAgICAgIGljb25Db250ZW50OiAnPHN0cm9uZyBzdHlsZT1cImNvbG9yOiAjQzExMjJDO1wiPkNyZWF0aXZlIE1hcmtldGluZyA8c3BhbiBzdHlsZT1cImNvbG9yOiAjMEEzRDc2O1wiPmJveDwvc3Bhbj48L3N0cm9uZz4nXHJcbiAgICB9LCB7XHJcbiAgICAgIHByZXNldDogJ2lzbGFuZHMjbmlnaHRTdHJldGNoeUljb24nXHJcbiAgICB9KTtcclxuXHJcbiAgICB2YXIgZmlyc3RQb2ludDMgPSBuZXcgeW1hcHMuUGxhY2VtYXJrKFs1My45NjE0MDA3MTA4MDI2OSwyNy42MjIwODEwNjY1NDYwNTVdLCB7fSwge1xyXG4gICAgICBwcmVzZXQ6ICdpc2xhbmRzI3JlZERvdEljb25XaXRoQ2FwdGlvbidcclxuICAgIH0pO1xyXG5cclxuICAgIHZhciBzZWNvbmRQb2ludDMgPSBuZXcgeW1hcHMuUGxhY2VtYXJrKFs1My45NDU4MjU2MzMzMDU2MSwyNy42Mzc0MDE0MjA5MzczN10sIHtcclxuICAgICAgaWNvbkNvbnRlbnQ6ICc8c3Ryb25nIHN0eWxlPVwiY29sb3I6ICNDMTEyMkM7XCI+Q3JlYXRpdmUgTWFya2V0aW5nIDxzcGFuIHN0eWxlPVwiY29sb3I6ICMwQTNENzY7XCI+Ym94PC9zcGFuPjwvc3Ryb25nPidcclxuICAgIH0sIHtcclxuICAgICAgcHJlc2V0OiAnaXNsYW5kcyNuaWdodFN0cmV0Y2h5SWNvbidcclxuICAgIH0pO1xyXG5cclxuICAgIHZhciBmaXJzdE51bWJlciA9IFtcclxuICAgICAgWzUzLjkzNDU1Mzc1NDg1MDk3NCwyNy42NTE4MTYwNDM2NTUzNF0sXHJcbiAgICAgIFs1My45MzUwMjIyMzk5MjUyMjUsMjcuNjUzNTU0MTE1MDk2OTg4XSxcclxuICAgICAgWzUzLjkzNTY2MTY1MDIxNDY5LDI3LjY1NTkzNTkxNjcwMjIxXSxcclxuICAgICAgWzUzLjkzNzIxODk4NDU4NDgyLDI3LjY1NDYzNzcyNzUzOTAwOF0sXHJcbiAgICAgIFs1My45Mzc2ODc0Mzk1OTYxMiwyNy42NTQ0MzM4Nzk2NTM4OF0sXHJcbiAgICAgIFs1My45Mzg0MTU0MzM1MTg4NCwyNy42NTQyNDA3NjA2MDQ4XSxcclxuICAgICAgWzUzLjk0MDE4MTU1NzA0MjcxLDI3LjY1MzgxMTYwNzE2MjQzNV0sXHJcbiAgICAgIFs1My45NDA5NzI4MDY2NTgyOSwyNy42NTM1MzI2NTc0MjQ4ODNdLFxyXG4gICAgICBbNTMuOTQxMzM5OTQxMzU5MDMsMjcuNjUzMjEwNzkyMzQzMDk2XSxcclxuICAgICAgWzUzLjk0MTY2OTA5Mzg0ODMyNiwyNy42NTI3Mzg3MjM1NTY0NjddLFxyXG4gICAgICBbNTMuOTQyMTUwMTU4MTc3Nzc1LDI3LjY1MTk3Njk3NjE5NjIzNF0sXHJcbiAgICAgIFs1My45NDIyNTE0MzQxNjg1NSwyNy42NTE1NjkyODA0MjU5NzRdLFxyXG4gICAgICBbNTMuOTQyMjUxNDM0MTY4NTUsMjcuNjUxMTgzMDQyMzI3ODJdLFxyXG4gICAgICBbNTMuOTQxNzg5MzYwNDUzMTg2LDI3LjY0NzA1MjQ0MDQ0NDldLFxyXG4gICAgICBbNTMuOTQxNzY0MDQxMTk2OTA1LDI3LjY0NTYyNTUwNTI0ODk2XSxcclxuICAgICAgWzUzLjk0MTkzNDk0NTg3NzI0LDI3LjY0NDU5NTUzNjk4NzI1N10sXHJcbiAgICAgIFs1My45NDI0MDMzNDc2OTE1MywyNy42NDI5NTQwMjUwNzAxMzZdLFxyXG4gICAgICBbNTMuOTQ0MDkzMzQ4MTQ5NzQsMjcuNjQyNjIxNDMxMTUyMjk2XSxcclxuICAgICAgWzUzLjk0NTIxMzY0NzYxNzcxLDI3LjY0MjA4NDk4OTM0OTNdLFxyXG4gICAgICBbNTMuOTQ3MDQzNTg3NTM5NjYsMjcuNjQxMTkzMzMzMDU4Nl0sXHJcbiAgICAgIFs1My45NDc1MjQ1ODk2MDE1MywyNy42NDAxMDk3MjA2MTY1OF0sXHJcbiAgICAgIFs1My45NDcxNzAxNjc1Njk5NSwyNy42Mzk4MDkzMTMyMDY4OTZdLFxyXG4gICAgICBbNTMuOTQ3MDQzNTg3NTM5NjYsMjcuNjM4OTYxNzM1MTU4MTldLFxyXG4gICAgICBbNTMuOTQ2Mjg0MDk5MjUzMTQsMjcuNjM4MzM5NDYyNjY2NzVdLFxyXG4gICAgICBbNTMuOTQ2MDYyNTc5MjE5MDUsMjcuNjM3OTMxNzY2ODk2NDg2XSxcclxuICAgICAgWzUzLjk0NTg2NjM3NDc3MzI0NiwyNy42Mzc0MTY3ODI3NjU2MjNdXHJcbiAgICBdO1xyXG4gICAgdmFyIHNlY29uZE51bWJlciA9IFtcclxuICAgICAgWzUzLjkzODE3OTk1NjgwMTg4LDI3LjY3NDI2NTI3ODM2NTg5XSxcclxuICAgICAgWzUzLjk0MTQ0NjI5NTMxMTU2NSwyNy42NzI5MzQ5MDI2OTQ0OF0sXHJcbiAgICAgIFs1My45NDE4Mzg3NDUwNTIxNywyNy42NzMxMjgwMjE3NDM1NTVdLFxyXG4gICAgICBbNTMuOTQxOTUyNjgxMzc4OTE1LDI3LjY3MzYwMDA5MDUzMDE4M10sXHJcbiAgICAgIFs1My45NDIyMjQ4NjEzMzg0LDI3LjY3NTYxNzExMTcwOTM4Ml0sXHJcbiAgICAgIFs1My45NDIxOTMyMTI1OTc1OCwyNy42NzU4NTMxNDYxMDI2OTZdLFxyXG4gICAgICBbNTMuOTQyMDIyMzA4OTgwMjQsMjcuNjc2MDQ2MjY1MTUxNzcyXSxcclxuICAgICAgWzUzLjk0MTgxOTc1NTYzNDAxNSwyNy42NzU5Mzg5NzY3OTExN10sXHJcbiAgICAgIFs1My45NDE2Njc4Mzk5NzU5MDYsMjcuNjc1NzI0NDAwMDY5OTg1XSxcclxuICAgICAgWzUzLjkzOTc5MjY1NTUyMDAxLDI3LjY2OTY3MDIxNTQ5MTc2N10sXHJcbiAgICAgIFs1My45MzU3NzkxNjc3MTQ5NiwyNy42NTU3OTc4MzA0NjY3MjRdLFxyXG4gICAgICBbNTMuOTM3MjczMTkyNzIxMTQsMjcuNjU0NTg1NDcxOTkxOTk3XSxcclxuICAgICAgWzUzLjkzNzgxNzYxMjIwMTM5LDI3LjY1NDM5MjM1Mjk0MjkyXSxcclxuICAgICAgWzUzLjk0MDMwMTQ0MjYyMzU0LDI3LjY1Mzc3Njc3MzkzMDk2NF0sXHJcbiAgICAgIFs1My45NDEwNjEwNDAzNTA5OSwyNy42NTM0NTQ5MDg4NDkxNzddLFxyXG4gICAgICBbNTMuOTQxNzM4MzM2NjA2MSwyNy42NTI2MDczMzA4MDA0NzVdLFxyXG4gICAgICBbNTMuOTQyMTg3NzUxMzg4MzYsMjcuNjUxODU2MzEyMjc2Mjk0XSxcclxuICAgICAgWzUzLjk0MjI1NzM3ODU5NTUxLDI3LjY1MTE5MTEyNDQ0MDYxNV0sXHJcbiAgICAgIFs1My45NDE3ODg5NzUxMzQ1OSwyNy42NDcwNjA1MjI1NTc2NjZdLFxyXG4gICAgICBbNTMuOTQxNzU5MzE1Mzk4MDgsMjcuNjQ1NTUwODYwMzY0OTc0XSxcclxuICAgICAgWzUzLjk0MTk1NTUzOTI1MjgyLDI3LjY0NDQ1NjUxOTA4NjldLFxyXG4gICAgICBbNTMuOTQyMzkyMjkyMjQ1NzIsMjcuNjQyOTQzNzUzMjAyNDldLFxyXG4gICAgICBbNTMuOTQ0MjQwNTI5NDE3NDQsMjcuNjQyNTU3NTE1MTA0MzZdLFxyXG4gICAgICBbNTMuOTQ3MDM4MDQ2OTc0NzksMjcuNjQxMjE2NDEwNTk2ODk3XSxcclxuICAgICAgWzUzLjk0NzM5MjQ3MDEzNDMxLDI3LjY0MDUxOTAzNjI1MzAzMl0sXHJcbiAgICAgIFs1My45NDc1MTI3MjAxNjE2OSwyNy42NDAwODk4ODI4MTA2NjddLFxyXG4gICAgICBbNTMuOTQ3MTY0NjI3MDIxOTgsMjcuNjM5ODIxNjYxOTA5MTddLFxyXG4gICAgICBbNTMuOTQ3MDM4MDQ2OTc0NzksMjcuNjM4OTc0MDgzODYwNDY1XSxcclxuICAgICAgWzUzLjk0NjI4NDg4NzcxNDIxNCwyNy42MzgzNDEwODI1MzI5NDNdLFxyXG4gICAgICBbNTMuOTQ2MDY5Njk2ODQ0NDcsMjcuNjM3OTU0ODQ0NDM0ODEyXSxcclxuICAgICAgWzUzLjk0NTgzNTUxNzI3NzY1LDI3LjYzNzM4NjIxNjEyMzYzNF1cclxuICAgIF07XHJcbiAgICB2YXIgdGhpcmROdW1iZXIgPSBbXHJcbiAgICAgIFs1My45NjE0MDA3MTA4MDI2OSwyNy42MjIwODEwNjY1NDYwNTVdLFxyXG4gICAgICBbNTMuOTYwNjU0MTM5MDYzMzk0LDI3LjYyNDIwNTM3NjA4NTg1N10sXHJcbiAgICAgIFs1My45NjAyMDY4MjM3OTkxMDUsMjcuNjI0NjI4MDg3MDQ5NjM2XSxcclxuICAgICAgWzUzLjk1OTkxNTc4MDU4MjEyLDI3LjYyNDYzNTgyMjQ2NjI0Nl0sXHJcbiAgICAgIFs1My45NTgwNzQ1Njg1Nzk4NiwyNy42MjM2NDg3Njk1NDg3NV0sXHJcbiAgICAgIFs1My45NTU5MzUyOTE1ODg1OTUsMjcuNjIxMjU0NTk3NjMzNzE1XSxcclxuICAgICAgWzUzLjk1NTcyNjU4Njc3NzIyLDI3LjYyMTY4NTgyMzM2MDYzMl0sXHJcbiAgICAgIFs1My45NTU0MjI4NTY2NzIwMSwyNy42MjI4NTUyNjY0OTExMjJdLFxyXG4gICAgICBbNTMuOTU1MjU4MzM1MjcwMjQsMjcuNjI0NDUzODYzMDY0MDFdLFxyXG4gICAgICBbNTMuOTU1MTEyNzk2NTYzNTA1LDI3LjYyNTc3MzUwOTg5OTM0XSxcclxuICAgICAgWzUzLjk1NDQ5MjY2OTM5NzI5LDI3LjYyNzc2OTA3MzQwNjQxXSxcclxuICAgICAgWzUzLjk1MzI2NTA0MzM5NTA4LDI3LjYzMTA2MjgyNjA3NjddLFxyXG4gICAgICBbNTMuOTUyMDUwMDM3NTc5OTQ0LDI3LjYzMzYxNjI4OTA1ODg3XSxcclxuICAgICAgWzUzLjk1MTE4MzA1ODU2MjQyLDI3LjYzNTU0NzQ3OTU0OTU5NF0sXHJcbiAgICAgIFs1My45NTA0ODY5MzA5MTU4OSwyNy42Mzc5MDc4MjM0ODI3MV0sXHJcbiAgICAgIFs1My45NDk5MjM2OTE4MjE2LDI3LjYzOTg0OTc0MjgwOTQ5XSxcclxuICAgICAgWzUzLjk0OTQ4NzAxODA1MTA0LDI3LjY0MDUyNTY1OTQ4MTI0NV0sXHJcbiAgICAgIFs1My45NDg4NTQxNDkzNjExOTYsMjcuNjQxMDgzNTU4OTU2MzQ2XSxcclxuICAgICAgWzUzLjk0NzUzOTAyMDQzMDM1LDI3LjY0MTE1NjUxMzU1ODIxXSxcclxuICAgICAgWzUzLjk0NzM0MjgyMjk2MjA2NCwyNy42NDA2NDE1Mjk0MjczNzRdLFxyXG4gICAgICBbNTMuOTQ3NTIwMDMzNjE5MSwyNy42NDAxMjY1NDUyOTY1MDddLFxyXG4gICAgICBbNTMuOTQ3MTY1NjExNTQ4NjA2LDI3LjYzOTc5Mzk1MTM3ODY0M10sXHJcbiAgICAgIFs1My45NDcwMzI3MDI0OTIwOTUsMjcuNjM4OTE0MTg2ODIxNzhdLFxyXG4gICAgICBbNTMuOTQ2MzA2NjQ5NDc4NzcsMjcuNjM4Mzc3NzQ1MDE4NzgzXSxcclxuICAgICAgWzUzLjk0NjA3MjQ3MTI0ODUwNiwyNy42Mzc4OTQ5NDczOTYxMDJdLFxyXG4gICAgICBbNTMuOTQ1ODI1NjMzMzA1NjEsMjcuNjM3NDAxNDIwOTM3MzddXHJcbiAgICBdO1xyXG5cclxuICAgIHZhciBmaXJzdEFuaW1hdGVkTGluZSA9IG5ldyB5bWFwcy5BbmltYXRlZExpbmUoZmlyc3ROdW1iZXIsIHt9LCB7XHJcbiAgICAgIHN0cm9rZUNvbG9yOiBcIiMwQTNENzZcIixcclxuICAgICAgc3Ryb2tlV2lkdGg6IDUsXHJcbiAgICAgIGFuaW1hdGlvblRpbWU6IDEwMDAsXHJcbiAgICB9KTtcclxuXHJcbiAgICB2YXIgc2Vjb25kQW5pbWF0ZWRMaW5lID0gbmV3IHltYXBzLkFuaW1hdGVkTGluZShzZWNvbmROdW1iZXIsIHt9LCB7XHJcbiAgICAgIHN0cm9rZUNvbG9yOiBcIiMwQTNENzZcIixcclxuICAgICAgc3Ryb2tlV2lkdGg6IDUsXHJcbiAgICAgIGFuaW1hdGlvblRpbWU6IDEwMDBcclxuICAgIH0pO1xyXG5cclxuICAgIHZhciB0aGlyZEFuaW1hdGVkTGluZSA9IG5ldyB5bWFwcy5BbmltYXRlZExpbmUodGhpcmROdW1iZXIsIHt9LCB7XHJcbiAgICAgIHN0cm9rZUNvbG9yOiBcIiMwQTNENzZcIixcclxuICAgICAgc3Ryb2tlV2lkdGg6IDUsXHJcbiAgICAgIGFuaW1hdGlvblRpbWU6IDEwMDBcclxuICAgIH0pO1xyXG5cclxuICAgIHZhciBidG5Wb3N0b2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnRuLXZvc3RvaycpO1xyXG4gICAgdmFyIGJ0bk1rYWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnRuLW1rYWQnKTtcclxuICAgIHZhciBidG5Mb2dvaXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J0bi1sb2dvaXNrJyk7XHJcbiAgICB2YXIgbWFwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1hcCcpO1xyXG5cclxuICAgIHZhciBmaXJzdExpbmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIG1hcC5jbGFzc0xpc3QuYWRkKCdtYXAtLWNvbG9yLW5vbmUnKTtcclxuICAgICAgYnRuVm9zdG9rLmNsYXNzTGlzdC5hZGQoJ2J0bi1hY3RpdmUnKTtcclxuICAgICAgYnRuTWthZC5jbGFzc0xpc3QucmVtb3ZlKCdidG4tYWN0aXZlJyk7XHJcbiAgICAgIGJ0bkxvZ29pc2suY2xhc3NMaXN0LnJlbW92ZSgnYnRuLWFjdGl2ZScpO1xyXG5cclxuICAgICAgZnVuY3Rpb24gc2V0Q2VudGVyICgpIHtcclxuICAgICAgICBteU1hcC5zZXRDZW50ZXIoWzUzLjk0MTUxMjQ1MTgxMjEsMjcuNjQ0NDU2NTE5MDg2OV0pO1xyXG4gICAgICB9XHJcbiAgICAgIG15TWFwLmdlb09iamVjdHMuYWRkKGZpcnN0QW5pbWF0ZWRMaW5lKTtcclxuICAgICAgZnVuY3Rpb24gcGxheUFuaW1hdGlvbigpIHtcclxuICAgICAgICBzZWNvbmRBbmltYXRlZExpbmUucmVzZXQoKTtcclxuICAgICAgICB0aGlyZEFuaW1hdGVkTGluZS5yZXNldCgpO1xyXG4gICAgICAgIG15TWFwLmdlb09iamVjdHMucmVtb3ZlKG15R2VvT2JqZWN0KTtcclxuICAgICAgICBteU1hcC5nZW9PYmplY3RzLnJlbW92ZShmaXJzdFBvaW50Mik7XHJcbiAgICAgICAgbXlNYXAuZ2VvT2JqZWN0cy5yZW1vdmUoZmlyc3RQb2ludDMpO1xyXG4gICAgICAgIG15TWFwLmdlb09iamVjdHMucmVtb3ZlKHNlY29uZFBvaW50Mik7XHJcbiAgICAgICAgbXlNYXAuZ2VvT2JqZWN0cy5yZW1vdmUoc2Vjb25kUG9pbnQzKTtcclxuICAgICAgICBteU1hcC5nZW9PYmplY3RzLmFkZChmaXJzdFBvaW50KTtcclxuICAgICAgICBmaXJzdEFuaW1hdGVkTGluZS5hbmltYXRlKClcclxuICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBteU1hcC5nZW9PYmplY3RzLmFkZChzZWNvbmRQb2ludCk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgICBwbGF5QW5pbWF0aW9uKCk7XHJcbiAgICAgIHNldENlbnRlcigpO1xyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgc2Vjb25kTGluZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgbWFwLmNsYXNzTGlzdC5hZGQoJ21hcC0tY29sb3Itbm9uZScpO1xyXG4gICAgICBidG5Wb3N0b2suY2xhc3NMaXN0LnJlbW92ZSgnYnRuLWFjdGl2ZScpO1xyXG4gICAgICBidG5Mb2dvaXNrLmNsYXNzTGlzdC5yZW1vdmUoJ2J0bi1hY3RpdmUnKTtcclxuICAgICAgYnRuTWthZC5jbGFzc0xpc3QuYWRkKCdidG4tYWN0aXZlJyk7XHJcblxyXG4gICAgICBmdW5jdGlvbiBzZXRDZW50ZXIgKCkge1xyXG4gICAgICAgIG15TWFwLnNldENlbnRlcihbNTMuOTQyMjQ2NzA4NDI1MTgsMjcuNjU0ODQyMDMyMzkyNTczXSk7XHJcbiAgICAgIH1cclxuICAgICAgbXlNYXAuZ2VvT2JqZWN0cy5hZGQoc2Vjb25kQW5pbWF0ZWRMaW5lKTtcclxuICAgICAgZnVuY3Rpb24gcGxheUFuaW1hdGlvbigpIHtcclxuICAgICAgICBmaXJzdEFuaW1hdGVkTGluZS5yZXNldCgpO1xyXG4gICAgICAgIHRoaXJkQW5pbWF0ZWRMaW5lLnJlc2V0KCk7XHJcbiAgICAgICAgbXlNYXAuZ2VvT2JqZWN0cy5yZW1vdmUobXlHZW9PYmplY3QpO1xyXG4gICAgICAgIG15TWFwLmdlb09iamVjdHMucmVtb3ZlKGZpcnN0UG9pbnQpO1xyXG4gICAgICAgIG15TWFwLmdlb09iamVjdHMucmVtb3ZlKGZpcnN0UG9pbnQzKTtcclxuICAgICAgICBteU1hcC5nZW9PYmplY3RzLnJlbW92ZShzZWNvbmRQb2ludCk7XHJcbiAgICAgICAgbXlNYXAuZ2VvT2JqZWN0cy5yZW1vdmUoc2Vjb25kUG9pbnQzKTtcclxuICAgICAgICBteU1hcC5nZW9PYmplY3RzLmFkZChmaXJzdFBvaW50Mik7XHJcbiAgICAgICAgc2Vjb25kQW5pbWF0ZWRMaW5lLmFuaW1hdGUoKVxyXG4gICAgICAgICAgLnRoZW4oZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIG15TWFwLmdlb09iamVjdHMuYWRkKHNlY29uZFBvaW50Mik7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgICBwbGF5QW5pbWF0aW9uKCk7XHJcbiAgICAgIHNldENlbnRlcigpO1xyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgdGhpcmRMaW5lID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICBtYXAuY2xhc3NMaXN0LmFkZCgnbWFwLS1jb2xvci1ub25lJyk7XHJcbiAgICAgIGJ0blZvc3Rvay5jbGFzc0xpc3QucmVtb3ZlKCdidG4tYWN0aXZlJyk7XHJcbiAgICAgIGJ0bk1rYWQuY2xhc3NMaXN0LnJlbW92ZSgnYnRuLWFjdGl2ZScpO1xyXG4gICAgICBidG5Mb2dvaXNrLmNsYXNzTGlzdC5hZGQoJ2J0bi1hY3RpdmUnKTtcclxuXHJcbiAgICAgIGZ1bmN0aW9uIHNldENlbnRlciAoKSB7XHJcbiAgICAgICAgbXlNYXAuc2V0Q2VudGVyKFs1My45NTM0MTY4NDE0NDY0MSwyNy42MzI4Mjk3NjE4NzEyOTJdKTtcclxuICAgICAgfVxyXG4gICAgICBteU1hcC5nZW9PYmplY3RzLmFkZCh0aGlyZEFuaW1hdGVkTGluZSk7XHJcbiAgICAgIGZ1bmN0aW9uIHBsYXlBbmltYXRpb24oKSB7XHJcbiAgICAgICAgZmlyc3RBbmltYXRlZExpbmUucmVzZXQoKTtcclxuICAgICAgICBzZWNvbmRBbmltYXRlZExpbmUucmVzZXQoKTtcclxuICAgICAgICBteU1hcC5nZW9PYmplY3RzLnJlbW92ZShteUdlb09iamVjdCk7XHJcbiAgICAgICAgbXlNYXAuZ2VvT2JqZWN0cy5yZW1vdmUoZmlyc3RQb2ludCk7XHJcbiAgICAgICAgbXlNYXAuZ2VvT2JqZWN0cy5yZW1vdmUoZmlyc3RQb2ludDIpO1xyXG4gICAgICAgIG15TWFwLmdlb09iamVjdHMucmVtb3ZlKHNlY29uZFBvaW50KTtcclxuICAgICAgICBteU1hcC5nZW9PYmplY3RzLnJlbW92ZShzZWNvbmRQb2ludDIpO1xyXG4gICAgICAgIG15TWFwLmdlb09iamVjdHMuYWRkKGZpcnN0UG9pbnQzKTtcclxuICAgICAgICB0aGlyZEFuaW1hdGVkTGluZS5hbmltYXRlKClcclxuICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBteU1hcC5nZW9PYmplY3RzLmFkZChzZWNvbmRQb2ludDMpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgcGxheUFuaW1hdGlvbigpO1xyXG4gICAgICBzZXRDZW50ZXIoKTtcclxuICAgIH07XHJcblxyXG4gICAgYnRuVm9zdG9rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZmlyc3RMaW5lKTtcclxuICAgIGJ0bk1rYWQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzZWNvbmRMaW5lKTtcclxuICAgIGJ0bkxvZ29pc2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlyZExpbmUpO1xyXG4gIH1cclxuXHJcbn0pKCk7XHJcblwidXNlIHN0cmljdFwiO1xyXG5cclxuKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgeW1hcHMubW9kdWxlcy5kZWZpbmUoJ0FuaW1hdGVkTGluZScsIFtcclxuICAgICd1dGlsLmRlZmluZUNsYXNzJyxcclxuICAgICdQb2x5bGluZScsXHJcbiAgICAndm93J1xyXG4gIF0sIGZ1bmN0aW9uKHByb3ZpZGUsIGRlZmluZUNsYXNzLCBQb2x5bGluZSwgdm93KSB7XHJcbiAgICAvKipcclxuICAgICAqIEBmaWxlT3ZlcnZpZXcg0JDQvdC40LzQuNGA0L7QstCw0L3QvdCw0Y8g0LvQuNC90LjRjy5cclxuICAgICAqL1xyXG4gICAgLyoqXHJcbiAgICAgKiDQodC+0LfQtNCw0LXRgiDRjdC60LfQtdC80L/Qu9GP0YAg0LDQvdC40LzQuNGA0L7QstCw0L3QvdC+0Lkg0LvQuNC90LjQuC5cclxuICAgICAqIEBjbGFzcyBBbmltYXRlZExpbmUuINCf0YDQtdC00YHRgtCw0LLQu9GP0LXRgiDRgdC+0LHQvtC5INCz0LXQvtC+0LHRitC10LrRgiDRgSDQs9C10L7QvNC10YLRgNC40LXQuSBnZW9tZXRyeS5MaW5lU3RyaW5nLlxyXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5hbmltYXRpb25UaW1lID0gNDAwMF0g0JTQu9C40YLQtdC70YzQvdC+0YHRgtGMINCw0L3QuNC80LDRhtC40LguXHJcbiAgICAgKiovXHJcbiAgICBmdW5jdGlvbiBBbmltYXRlZExpbmUoZ2VvbWV0cnksIHByb3BlcnRpZXMsIG9wdGlvbnMpIHtcclxuICAgICAgQW5pbWF0ZWRMaW5lLnN1cGVyY2xhc3MuY29uc3RydWN0b3IuY2FsbCh0aGlzLCBnZW9tZXRyeSwgcHJvcGVydGllcywgb3B0aW9ucyk7XHJcbiAgICAgIHRoaXMuX2xvb3BUaW1lID0gNTA7XHJcbiAgICAgIHRoaXMuX2FuaW1hdGlvblRpbWUgPSB0aGlzLm9wdGlvbnMuZ2V0KCdhbmltYXRpb25UaW1lJywgMTApO1xyXG4gICAgICAvLyDQktGL0YfQuNGB0LvQuNC8INC00LvQuNC90YMg0L/QtdGA0LXQtNCw0L3QvdC+0Lkg0LvQuNC90LjQuC5cclxuICAgICAgdmFyIGRpc3RhbmNlID0gMDtcclxuICAgICAgdmFyIHByZXZpb3VzRWxlbSA9IGdlb21ldHJ5WzBdO1xyXG4gICAgICB0aGlzLmdlb21ldHJ5LmdldENvb3JkaW5hdGVzKCkuZm9yRWFjaChmdW5jdGlvbihlbGVtKSB7XHJcbiAgICAgICAgZGlzdGFuY2UgKz0gZ2V0RGlzdGFuY2UoZWxlbSwgcHJldmlvdXNFbGVtKTtcclxuICAgICAgICBwcmV2aW91c0VsZW0gPSBlbGVtO1xyXG4gICAgICB9KTtcclxuICAgICAgLy8g0JLRi9GH0LjRgdC70LjQvCDQvNC40L3QuNC80LDQu9GM0L3Ri9C5INC40L3RgtC10YDQstCw0Lsg0L7RgtGA0LjRgdC+0LLQutC4LlxyXG4gICAgICB0aGlzLl9hbmltYXRpb25JbnRlcnZhbCA9IGRpc3RhbmNlIC8gdGhpcy5fYW5pbWF0aW9uVGltZSAqIHRoaXMuX2xvb3BUaW1lO1xyXG4gICAgICAvLyDQodC+0LfQtNCw0LTQuNC8INC80LDRgdGB0LjQsiDRgSDQsdC+0LvQtdC1INGH0LDRgdGC0YvQvCDRgNCw0YHQv9C+0LvQvtC20LXQvdC40LXQvCDQv9GA0L7QvNC10LbRg9GC0L7Rh9C90YvRhSDRgtC+0YfQtdC6LlxyXG4gICAgICB0aGlzLl9zbW9vdGhDb29yZHMgPSBnZW5lcmF0ZVNtb290aENvb3JkcyhnZW9tZXRyeSwgdGhpcy5fYW5pbWF0aW9uSW50ZXJ2YWwpO1xyXG4gICAgfVxyXG4gICAgZGVmaW5lQ2xhc3MoQW5pbWF0ZWRMaW5lLCBQb2x5bGluZSwge1xyXG4gICAgICAvLyDQkNC90LjQvNC40YDQvtCy0LDRgtGMINC70LjQvdC40Y4uXHJcbiAgICAgIHN0YXJ0OiBmdW5jdGlvbigpIHtcclxuICAgICAgICB2YXIgdmFsdWUgPSAwO1xyXG4gICAgICAgIHZhciBjb29yZHMgPSB0aGlzLl9zbW9vdGhDb29yZHM7XHJcbiAgICAgICAgdmFyIGxpbmUgPSB0aGlzO1xyXG4gICAgICAgIHZhciBsb29wVGltZSA9IHRoaXMuX2xvb3BUaW1lO1xyXG4gICAgICAgIC8vINCR0YPQtNC10Lwg0LTQvtCx0LDQstC70Y/RgtGMINC/0L4g0L7QtNC90L7QuSDRgtC+0YfQutC1INC60LDQttC00YvQtSA1MCDQvNGBLlxyXG4gICAgICAgIGZ1bmN0aW9uIGxvb3AodmFsdWUsIGN1cnJlbnRUaW1lLCBwcmV2aW91c1RpbWUpIHtcclxuICAgICAgICAgIGlmICh2YWx1ZSA8IGNvb3Jkcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgaWYgKCFjdXJyZW50VGltZSB8fCAoY3VycmVudFRpbWUgLSBwcmV2aW91c1RpbWUpID4gbG9vcFRpbWUpIHtcclxuICAgICAgICAgICAgICBsaW5lLmdlb21ldHJ5LnNldCh2YWx1ZSwgY29vcmRzW3ZhbHVlXSk7XHJcbiAgICAgICAgICAgICAgdmFsdWUrKztcclxuICAgICAgICAgICAgICBwcmV2aW91c1RpbWUgPSBjdXJyZW50VGltZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24odGltZSkge1xyXG4gICAgICAgICAgICAgIGxvb3AodmFsdWUsIHRpbWUsIHByZXZpb3VzVGltZSB8fCB0aW1lKVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vINCR0YDQvtGB0LDQtdC8INGB0L7QsdGL0YLQuNC1INC+0LrQvtC90YfQsNC90LjRjyDQvtGC0YDQuNGB0L7QstC60Lgg0LvQuNC90LjQuC5cclxuICAgICAgICAgICAgbGluZS5ldmVudHMuZmlyZSgnYW5pbWF0aW9uZmluaXNoZWQnKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxvb3AodmFsdWUpO1xyXG4gICAgICB9LFxyXG4gICAgICAvLyDQo9Cx0YDQsNGC0Ywg0L7RgtGA0LjRgdC+0LLQsNC90L3Rg9GOINC70LjQvdC40Y4uXHJcbiAgICAgIHJlc2V0OiBmdW5jdGlvbigpIHtcclxuICAgICAgICB0aGlzLmdlb21ldHJ5LnNldENvb3JkaW5hdGVzKFtdKTtcclxuICAgICAgfSxcclxuICAgICAgLy8g0JfQsNC/0YPRgdGC0LjRgtGMINC/0L7Qu9C90YvQuSDRhtC40LrQuyDQsNC90LjQvNCw0YbQuNC4LlxyXG4gICAgICBhbmltYXRlOiBmdW5jdGlvbigpIHtcclxuICAgICAgICB0aGlzLnJlc2V0KCk7XHJcbiAgICAgICAgdGhpcy5zdGFydCgpO1xyXG4gICAgICAgIHZhciBkZWZlcnJlZCA9IHZvdy5kZWZlcigpO1xyXG4gICAgICAgIHRoaXMuZXZlbnRzLm9uY2UoJ2FuaW1hdGlvbmZpbmlzaGVkJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2UoKTtcclxuICAgICAgfVxyXG5cclxuICAgIH0pO1xyXG4gICAgLy8g0KTRg9C90LrRhtC40Y8g0LPQtdC90LXRgNCw0YbQuNC4INGH0LDRgdGC0YvRhSDQutC+0L7RgNC00LjQvdCw0YIg0L/QviDQt9Cw0LTQsNC90L3QvtC5INC70LjQvdC40LguXHJcbiAgICBmdW5jdGlvbiBnZW5lcmF0ZVNtb290aENvb3Jkcyhjb29yZHMsIGludGVydmFsKSB7XHJcbiAgICAgIHZhciBzbW9vdGhDb29yZHMgPSBbXTtcclxuICAgICAgc21vb3RoQ29vcmRzLnB1c2goY29vcmRzWzBdKTtcclxuICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBjb29yZHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICB2YXIgZGlmZmVyZW5jZSA9IFtjb29yZHNbaV1bMF0gLSBjb29yZHNbaSAtIDFdWzBdLCBjb29yZHNbaV1bMV0gLSBjb29yZHNbaSAtIDFdWzFdXTtcclxuICAgICAgICB2YXIgbWF4QW1vdW50ID0gTWF0aC5tYXgoTWF0aC5hYnMoZGlmZmVyZW5jZVswXSAvIGludGVydmFsKSwgTWF0aC5hYnMoZGlmZmVyZW5jZVsxXSAvIGludGVydmFsKSk7XHJcbiAgICAgICAgdmFyIG1pbkRpZmZlcmVuY2UgPSBbZGlmZmVyZW5jZVswXSAvIG1heEFtb3VudCwgZGlmZmVyZW5jZVsxXSAvIG1heEFtb3VudF07XHJcbiAgICAgICAgdmFyIGxhc3RDb29yZCA9IGNvb3Jkc1tpIC0gMV07XHJcbiAgICAgICAgd2hpbGUgKG1heEFtb3VudCA+IDEpIHtcclxuICAgICAgICAgIGxhc3RDb29yZCA9IFtsYXN0Q29vcmRbMF0gKyBtaW5EaWZmZXJlbmNlWzBdLCBsYXN0Q29vcmRbMV0gKyBtaW5EaWZmZXJlbmNlWzFdXTtcclxuICAgICAgICAgIHNtb290aENvb3Jkcy5wdXNoKGxhc3RDb29yZCk7XHJcbiAgICAgICAgICBtYXhBbW91bnQtLTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc21vb3RoQ29vcmRzLnB1c2goY29vcmRzW2ldKVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBzbW9vdGhDb29yZHM7XHJcbiAgICB9XHJcbiAgICAvLyDQpNGD0L3QutGG0LjRjyDQvdCw0YXQvtC20LTQtdC90LjRjyDRgNCw0YHRgdGC0L7Rj9C90LjRjyDQvNC10LbQtNGDINC00LLRg9C80Y8g0YLQvtGH0LrQsNC80Lgg0L3QsCDQv9C70L7RgdC60L7RgdGC0LguXHJcbiAgICBmdW5jdGlvbiBnZXREaXN0YW5jZShwb2ludDEsIHBvaW50Mikge1xyXG4gICAgICByZXR1cm4gTWF0aC5zcXJ0KFxyXG4gICAgICAgIE1hdGgucG93KChwb2ludDJbMF0gLSBwb2ludDFbMF0pLCAyKSArXHJcbiAgICAgICAgTWF0aC5wb3coKHBvaW50MlsxXSAtIHBvaW50MVsxXSksIDIpXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICBwcm92aWRlKEFuaW1hdGVkTGluZSk7XHJcbiAgfSk7XHJcblxyXG59KSgpOyJdLCJmaWxlIjoibWFpbi5qcyJ9
