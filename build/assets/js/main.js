/*

  * подключение js-модулей
  * //= modules/file.js

*/

'use strict';

$(function () {

  jQuery(function ($) {
    $("#user_phone").mask("+375 (99) 999-99-99",{autoclear: false});
    $("#user_phone2").mask("+375 (99) 999-99-99",{autoclear: false});
    $("#user_phone-question").mask("+375 (99) 999-99-99",{autoclear: false});
  });

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

    $('#form-question').validate({
      messages: {
        phone: 'Введите ваш номер телефона',
      },
      errorElement: 'span',
    });

    $('form').validate({
      messages: {
        name: 'Введите ваше имя',
        phone: 'Введите ваш номер телефона',
        position: 'Введите вашу должность',
        company: 'Введите название компании'
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

  // document.ondragstart = test;
  // //запрет на перетаскивание
  // document.onselectstart = test;
  // //запрет на выделение элементов страницы
  // document.oncontextmenu = test;
  // //запрет на выведение контекстного меню
  // function test() {
  //   return false;
  // }

});
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
  var modalQuestion = document.querySelector('.link-modal-question');

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

  mainPhone.addEventListener('click', function (evt) {
    evt.preventDefault();

    mainBoxPhone.classList.toggle('main-header__tel--active');
  });

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

    var modalShow = function () {
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

  $(document).on('af_complete', function (event, response) {

    var modalConsultation = document.querySelector('.modal-consultation');
    var modalFeedback = document.querySelector('.modal-feedback');
    var modalAnalysis = document.querySelector('.modal-analysis');
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qXHJcblxyXG4gICog0L/QvtC00LrQu9GO0YfQtdC90LjQtSBqcy3QvNC+0LTRg9C70LXQuVxyXG4gICogLy89IG1vZHVsZXMvZmlsZS5qc1xyXG5cclxuKi9cclxuXHJcbid1c2Ugc3RyaWN0JztcclxuXHJcbiQoZnVuY3Rpb24gKCkge1xyXG5cclxuICBqUXVlcnkoZnVuY3Rpb24gKCQpIHtcclxuICAgICQoXCIjdXNlcl9waG9uZVwiKS5tYXNrKFwiKzM3NSAoOTkpIDk5OS05OS05OVwiLHthdXRvY2xlYXI6IGZhbHNlfSk7XHJcbiAgICAkKFwiI3VzZXJfcGhvbmUyXCIpLm1hc2soXCIrMzc1ICg5OSkgOTk5LTk5LTk5XCIse2F1dG9jbGVhcjogZmFsc2V9KTtcclxuICAgICQoXCIjdXNlcl9waG9uZS1xdWVzdGlvblwiKS5tYXNrKFwiKzM3NSAoOTkpIDk5OS05OS05OVwiLHthdXRvY2xlYXI6IGZhbHNlfSk7XHJcbiAgfSk7XHJcblxyXG4gICQoXCIjdXNlcl9uYW1lXCIpLmtleXVwKGZ1bmN0aW9uICgpIHtcclxuICAgIGlmICgkKHRoaXMpLnZhbCgpKSB7XHJcbiAgICAgICQodGhpcykuYWRkQ2xhc3MoXCJub3QtZW1wdHlcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKFwibm90LWVtcHR5XCIpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICAkKFwiI3VzZXJfbmFtZTJcIikua2V5dXAoZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKCQodGhpcykudmFsKCkpIHtcclxuICAgICAgJCh0aGlzKS5hZGRDbGFzcyhcIm5vdC1lbXB0eVwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoXCJub3QtZW1wdHlcIik7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gICQoXCIjdXNlcl9jb21wYW55XCIpLmtleXVwKGZ1bmN0aW9uICgpIHtcclxuICAgIGlmICgkKHRoaXMpLnZhbCgpKSB7XHJcbiAgICAgICQodGhpcykuYWRkQ2xhc3MoXCJub3QtZW1wdHlcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKFwibm90LWVtcHR5XCIpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICAkKFwiI3VzZXJfcGhvbmVcIikua2V5dXAoZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKCQodGhpcykudmFsKCkpIHtcclxuICAgICAgJCh0aGlzKS5hZGRDbGFzcyhcIm5vdC1lbXB0eVwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoXCJub3QtZW1wdHlcIik7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gICQoXCIjdXNlcl9waG9uZTJcIikua2V5dXAoZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKCQodGhpcykudmFsKCkpIHtcclxuICAgICAgJCh0aGlzKS5hZGRDbGFzcyhcIm5vdC1lbXB0eVwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoXCJub3QtZW1wdHlcIik7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gICQoXCIjdXNlcl9lbWFpbFwiKS5rZXl1cChmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAoJCh0aGlzKS52YWwoKSkge1xyXG4gICAgICAkKHRoaXMpLmFkZENsYXNzKFwibm90LWVtcHR5XCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcyhcIm5vdC1lbXB0eVwiKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgJChcIiN1c2VyX2NvbW1lbnRcIikua2V5dXAoZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKCQodGhpcykudmFsKCkpIHtcclxuICAgICAgJCh0aGlzKS5hZGRDbGFzcygnbm90LWVtcHR5Jyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdub3QtZW1wdHknKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgJChcIiN1c2VyX2NvbW1lbnRzXCIpLmtleXVwKGZ1bmN0aW9uICgpIHtcclxuICAgIGlmICgkKHRoaXMpLnZhbCgpKSB7XHJcbiAgICAgICQodGhpcykuYWRkQ2xhc3MoJ25vdC1lbXB0eScpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnbm90LWVtcHR5Jyk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gICQoXCIjdXNlcl9wb3NpdGlvblwiKS5rZXl1cChmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAoJCh0aGlzKS52YWwoKSkge1xyXG4gICAgICAkKHRoaXMpLmFkZENsYXNzKCdub3QtZW1wdHknKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ25vdC1lbXB0eScpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICAkKFwiI3VzZXJfc2l0ZVwiKS5rZXl1cChmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAoJCh0aGlzKS52YWwoKSkge1xyXG4gICAgICAkKHRoaXMpLmFkZENsYXNzKCdub3QtZW1wdHknKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ25vdC1lbXB0eScpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gICQoXCIjdXNlcl9waG9uZS1xdWVzdGlvblwiKS5rZXl1cChmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAoJCh0aGlzKS52YWwoKSkge1xyXG4gICAgICAkKHRoaXMpLmFkZENsYXNzKCdub3QtZW1wdHknKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ25vdC1lbXB0eScpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICAkKCcubGF6eVlUJykubGF6eVlUKCk7XHJcblxyXG4gICQoJ1tkYXRhLWZhbmN5Ym94PVwicGhvdG9cIl0nKS5mYW5jeWJveCh7XHJcbiAgICBidXR0b25zOiBbXHJcbiAgICAgICdzbGlkZVNob3cnLFxyXG4gICAgICAnc2hhcmUnLFxyXG4gICAgICAnem9vbScsXHJcbiAgICAgICdmdWxsU2NyZWVuJyxcclxuICAgICAgJ2Nsb3NlJ1xyXG4gICAgXSxcclxuICB9KTtcclxuXHJcbiAgICAkKCcjZm9ybS1wb3J0Zm9saW8nKS52YWxpZGF0ZSh7XHJcbiAgICAgIG1lc3NhZ2VzOiB7XHJcbiAgICAgICAgbmFtZTogJ9CS0LLQtdC00LjRgtC1INCy0LDRiNC1INC40LzRjycsXHJcbiAgICAgICAgcGhvbmU6ICfQktCy0LXQtNC40YLQtSDQstCw0Ygg0L3QvtC80LXRgCDRgtC10LvQtdGE0L7QvdCwJyxcclxuICAgICAgfSxcclxuICAgICAgZXJyb3JFbGVtZW50OiAnc3BhbicsXHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCcjZm9ybS1xdWVzdGlvbicpLnZhbGlkYXRlKHtcclxuICAgICAgbWVzc2FnZXM6IHtcclxuICAgICAgICBwaG9uZTogJ9CS0LLQtdC00LjRgtC1INCy0LDRiCDQvdC+0LzQtdGAINGC0LXQu9C10YTQvtC90LAnLFxyXG4gICAgICB9LFxyXG4gICAgICBlcnJvckVsZW1lbnQ6ICdzcGFuJyxcclxuICAgIH0pO1xyXG5cclxuICAgICQoJ2Zvcm0nKS52YWxpZGF0ZSh7XHJcbiAgICAgIG1lc3NhZ2VzOiB7XHJcbiAgICAgICAgbmFtZTogJ9CS0LLQtdC00LjRgtC1INCy0LDRiNC1INC40LzRjycsXHJcbiAgICAgICAgcGhvbmU6ICfQktCy0LXQtNC40YLQtSDQstCw0Ygg0L3QvtC80LXRgCDRgtC10LvQtdGE0L7QvdCwJyxcclxuICAgICAgICBwb3NpdGlvbjogJ9CS0LLQtdC00LjRgtC1INCy0LDRiNGDINC00L7Qu9C20L3QvtGB0YLRjCcsXHJcbiAgICAgICAgY29tcGFueTogJ9CS0LLQtdC00LjRgtC1INC90LDQt9Cy0LDQvdC40LUg0LrQvtC80L/QsNC90LjQuCdcclxuICAgICAgfSxcclxuICAgICAgZXJyb3JFbGVtZW50OiAnc3BhbicsXHJcbiAgICB9KTtcclxuXHJcbiAgdmFyIGNsaXBib2FyZCA9IG5ldyBDbGlwYm9hcmRKUygnLnVzZXItYnV0dG9uJyk7XHJcbiAgdmFyIHRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xpcC10ZXh0Jyk7XHJcbiAgY2xpcGJvYXJkLm9uKCdzdWNjZXNzJywgZnVuY3Rpb24oZSkge1xyXG4gICAgdGV4dC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgIHNldFRpbWVvdXQoY2xpcFRleHQsIDUwMDApO1xyXG4gICAgZS5jbGVhclNlbGVjdGlvbigpO1xyXG4gIH0pO1xyXG5cclxuICB2YXIgY2xpcFRleHQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB0ZXh0LnN0eWxlLmRpc3BsYXkgPSAnJztcclxuICB9O1xyXG5cclxuICAvLyBkb2N1bWVudC5vbmRyYWdzdGFydCA9IHRlc3Q7XHJcbiAgLy8gLy/Qt9Cw0L/RgNC10YIg0L3QsCDQv9C10YDQtdGC0LDRgdC60LjQstCw0L3QuNC1XHJcbiAgLy8gZG9jdW1lbnQub25zZWxlY3RzdGFydCA9IHRlc3Q7XHJcbiAgLy8gLy/Qt9Cw0L/RgNC10YIg0L3QsCDQstGL0LTQtdC70LXQvdC40LUg0Y3Qu9C10LzQtdC90YLQvtCyINGB0YLRgNCw0L3QuNGG0YtcclxuICAvLyBkb2N1bWVudC5vbmNvbnRleHRtZW51ID0gdGVzdDtcclxuICAvLyAvL9C30LDQv9GA0LXRgiDQvdCwINCy0YvQstC10LTQtdC90LjQtSDQutC+0L3RgtC10LrRgdGC0L3QvtCz0L4g0LzQtdC90Y5cclxuICAvLyBmdW5jdGlvbiB0ZXN0KCkge1xyXG4gIC8vICAgcmV0dXJuIGZhbHNlO1xyXG4gIC8vIH1cclxuXHJcbn0pO1xyXG4ndXNlIHN0cmljdCc7XHJcblxyXG4oZnVuY3Rpb24gKCkge1xyXG4gIHZhciBtZW51QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4taGVhZGVyX19idG4nKTtcclxuICB2YXIgd3JhcE1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1oZWFkZXJfX3dyYXAtbWVudScpO1xyXG4gIHZhciBzdGFnZU1lbnVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1oZWFkZXJfX2xpbmstc3RhZ2UtLWNsb3NlZCcpO1xyXG4gIHZhciBzZXJ2aWNlc1dyYXBNZW51QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4taGVhZGVyX19zZXJ2aWNlcy0tY2xvc2VkJyk7XHJcbiAgdmFyIHNlcnZpY2VzTWVudUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWhlYWRlcl9fbGluay1zZXJ2aWNlcycpO1xyXG4gIHZhciBzZXJ2aWNlc1dyYXBNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4taGVhZGVyX19zZXJ2aWNlcy1uYXYtLWNsb3NlZCcpO1xyXG4gIHZhciBzZXJ2aWNlc01lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1oZWFkZXJfX3NlcnZpY2VzLW5hdicpO1xyXG4gIHZhciBzdGFnZU1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1oZWFkZXJfX3N0YWdlLW5hdi0tY2xvc2VkJyk7XHJcbiAgdmFyIHN0YWdlV3JhcE1lbnVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1oZWFkZXJfX3N0YWdlLWxpbmsnKTtcclxuICB2YXIgbWFpblBob25lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4taGVhZGVyX19ib3gtcGhvbmUnKTtcclxuICB2YXIgbWFpbkJveFBob25lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4taGVhZGVyX190ZWwnKTtcclxuICB2YXIgbW9kYWxRdWVzdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saW5rLW1vZGFsLXF1ZXN0aW9uJyk7XHJcblxyXG4gIGlmIChtZW51QnRuKSB7XHJcblxyXG4gICAgbWVudUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldnQpIHtcclxuICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICBpZiAobWVudUJ0bi5jbGFzc0xpc3QuY29udGFpbnMoJ21haW4taGVhZGVyX19idG4tLWNsb3NlZCcpKSB7XHJcbiAgICAgICAgbWVudUJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdtYWluLWhlYWRlcl9fYnRuLS1jbG9zZWQnKTtcclxuICAgICAgICBtZW51QnRuLmNsYXNzTGlzdC5hZGQoJ21haW4taGVhZGVyX19idG4tLW9wZW5lZCcpO1xyXG4gICAgICAgIHdyYXBNZW51LmNsYXNzTGlzdC5hZGQoJ21haW4taGVhZGVyX193cmFwLW1lbnUtLWFjdGl2ZScpO1xyXG4gICAgICAgIHNlcnZpY2VzTWVudS5jbGFzc0xpc3QucmVtb3ZlKCdtYWluLWhlYWRlcl9fc2VydmljZXMtbmF2LS1vcGVuZWQnKTtcclxuICAgICAgICBzZXJ2aWNlc01lbnUuY2xhc3NMaXN0LmFkZCgnbWFpbi1oZWFkZXJfX3NlcnZpY2VzLW5hdi0tY2xvc2VkJyk7XHJcbiAgICAgICAgc2VydmljZXNNZW51QnRuLmNsYXNzTGlzdC5yZW1vdmUoJ21haW4taGVhZGVyX19saW5rLXNlcnZpY2VzLS1vcGVuZWQnKTtcclxuICAgICAgICBzZXJ2aWNlc01lbnVCdG4uY2xhc3NMaXN0LmFkZCgnbWFpbi1oZWFkZXJfX2xpbmstc2VydmljZXMtLWNsb3NlZCcpO1xyXG4gICAgICAgIHN0YWdlTWVudS5jbGFzc0xpc3QucmVtb3ZlKCdtYWluLWhlYWRlcl9fc3RhZ2UtbmF2LS1vcGVuZWQnKTtcclxuICAgICAgICBzdGFnZU1lbnUuY2xhc3NMaXN0LmFkZCgnbWFpbi1oZWFkZXJfX3N0YWdlLW5hdi0tY2xvc2VkJyk7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG1lbnVCdG4uY2xhc3NMaXN0LmFkZCgnbWFpbi1oZWFkZXJfX2J0bi0tY2xvc2VkJyk7XHJcbiAgICAgICAgbWVudUJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdtYWluLWhlYWRlcl9fYnRuLS1vcGVuZWQnKTtcclxuICAgICAgICB3cmFwTWVudS5jbGFzc0xpc3QucmVtb3ZlKCdtYWluLWhlYWRlcl9fd3JhcC1tZW51LS1hY3RpdmUnKTtcclxuICAgICAgICBzZXJ2aWNlc01lbnUuY2xhc3NMaXN0LnJlbW92ZSgnbWFpbi1oZWFkZXJfX3NlcnZpY2VzLW5hdi0tb3BlbmVkJyk7XHJcbiAgICAgICAgc2VydmljZXNNZW51LmNsYXNzTGlzdC5hZGQoJ21haW4taGVhZGVyX19zZXJ2aWNlcy1uYXYtLWNsb3NlZCcpO1xyXG4gICAgICAgIHN0YWdlTWVudS5jbGFzc0xpc3QucmVtb3ZlKCdtYWluLWhlYWRlcl9fc3RhZ2UtbmF2LS1vcGVuZWQnKTtcclxuICAgICAgICBzdGFnZU1lbnUuY2xhc3NMaXN0LmFkZCgnbWFpbi1oZWFkZXJfX3N0YWdlLW5hdi0tY2xvc2VkJyk7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICcnO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoc2VydmljZXNXcmFwTWVudUJ0bikge1xyXG5cclxuICAgICAgc2VydmljZXNXcmFwTWVudUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldnQpIHtcclxuICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgaWYgKHNlcnZpY2VzV3JhcE1lbnVCdG4uY2xhc3NMaXN0LmNvbnRhaW5zKCdtYWluLWhlYWRlcl9fc2VydmljZXMtLWNsb3NlZCcpKSB7XHJcbiAgICAgICAgICBzZXJ2aWNlc1dyYXBNZW51QnRuLmNsYXNzTGlzdC5yZW1vdmUoJ21haW4taGVhZGVyX19zZXJ2aWNlcy0tY2xvc2VkJyk7XHJcbiAgICAgICAgICBzZXJ2aWNlc1dyYXBNZW51QnRuLmNsYXNzTGlzdC5hZGQoJ21haW4taGVhZGVyX19zZXJ2aWNlcy0tb3BlbmVkJyk7XHJcbiAgICAgICAgICBzZXJ2aWNlc1dyYXBNZW51LmNsYXNzTGlzdC5yZW1vdmUoJ21haW4taGVhZGVyX19zZXJ2aWNlcy1uYXYtLWNsb3NlZCcpO1xyXG4gICAgICAgICAgc2VydmljZXNXcmFwTWVudS5jbGFzc0xpc3QuYWRkKCdtYWluLWhlYWRlcl9fc2VydmljZXMtbmF2LS1vcGVuZWQnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgc2VydmljZXNXcmFwTWVudUJ0bi5jbGFzc0xpc3QuYWRkKCdtYWluLWhlYWRlcl9fc2VydmljZXMtLWNsb3NlZCcpO1xyXG4gICAgICAgICAgc2VydmljZXNXcmFwTWVudUJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdtYWluLWhlYWRlcl9fc2VydmljZXMtLW9wZW5lZCcpO1xyXG4gICAgICAgICAgc2VydmljZXNXcmFwTWVudS5jbGFzc0xpc3QuYWRkKCdtYWluLWhlYWRlcl9fc2VydmljZXMtbmF2LS1jbG9zZWQnKTtcclxuICAgICAgICAgIHNlcnZpY2VzV3JhcE1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnbWFpbi1oZWFkZXJfX3NlcnZpY2VzLW5hdi0tb3BlbmVkJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoc3RhZ2VNZW51QnRuICYmIHdpbmRvdy5pbm5lcldpZHRoIDw9IDc2Nykge1xyXG5cclxuICAgICAgc3RhZ2VNZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2dCkge1xyXG4gICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICBpZiAoc3RhZ2VNZW51LmNsYXNzTGlzdC5jb250YWlucygnbWFpbi1oZWFkZXJfX3N0YWdlLW5hdi0tY2xvc2VkJykpIHtcclxuICAgICAgICAgIHN0YWdlTWVudS5jbGFzc0xpc3QucmVtb3ZlKCdtYWluLWhlYWRlcl9fc3RhZ2UtbmF2LS1jbG9zZWQnKTtcclxuICAgICAgICAgIHN0YWdlTWVudS5jbGFzc0xpc3QuYWRkKCdtYWluLWhlYWRlcl9fc3RhZ2UtbmF2LS1vcGVuZWQnKTtcclxuICAgICAgICAgIHN0YWdlTWVudUJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdtYWluLWhlYWRlcl9fbGluay1zdGFnZS0tY2xvc2VkJyk7XHJcbiAgICAgICAgICBzdGFnZU1lbnVCdG4uY2xhc3NMaXN0LmFkZCgnbWFpbi1oZWFkZXJfX2xpbmstc3RhZ2UtLW9wZW5lZCcpO1xyXG4gICAgICAgICAgbWVudUJ0bi5jbGFzc0xpc3QuYWRkKCdtYWluLWhlYWRlcl9fYnRuLS1jbG9zZWQnKTtcclxuICAgICAgICAgIG1lbnVCdG4uY2xhc3NMaXN0LnJlbW92ZSgnbWFpbi1oZWFkZXJfX2J0bi0tb3BlbmVkJyk7XHJcbiAgICAgICAgICB3cmFwTWVudS5jbGFzc0xpc3QucmVtb3ZlKCdtYWluLWhlYWRlcl9fd3JhcC1tZW51LS1hY3RpdmUnKTtcclxuICAgICAgICAgIHNlcnZpY2VzTWVudS5jbGFzc0xpc3QucmVtb3ZlKCdtYWluLWhlYWRlcl9fc2VydmljZXMtbmF2LS1vcGVuZWQnKTtcclxuICAgICAgICAgIHNlcnZpY2VzTWVudS5jbGFzc0xpc3QuYWRkKCdtYWluLWhlYWRlcl9fc2VydmljZXMtbmF2LS1jbG9zZWQnKTtcclxuICAgICAgICAgIHNlcnZpY2VzTWVudUJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdtYWluLWhlYWRlcl9fbGluay1zZXJ2aWNlcy0tb3BlbmVkJyk7XHJcbiAgICAgICAgICBzZXJ2aWNlc01lbnVCdG4uY2xhc3NMaXN0LmFkZCgnbWFpbi1oZWFkZXJfX2xpbmstc2VydmljZXMtLWNsb3NlZCcpO1xyXG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBzdGFnZU1lbnUuY2xhc3NMaXN0LmFkZCgnbWFpbi1oZWFkZXJfX3N0YWdlLW5hdi0tY2xvc2VkJyk7XHJcbiAgICAgICAgICBzdGFnZU1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnbWFpbi1oZWFkZXJfX3N0YWdlLW5hdi0tb3BlbmVkJyk7XHJcbiAgICAgICAgICBzdGFnZU1lbnVCdG4uY2xhc3NMaXN0LmFkZCgnbWFpbi1oZWFkZXJfX2xpbmstc3RhZ2UtLWNsb3NlZCcpO1xyXG4gICAgICAgICAgc3RhZ2VNZW51QnRuLmNsYXNzTGlzdC5yZW1vdmUoJ21haW4taGVhZGVyX19saW5rLXN0YWdlLS1vcGVuZWQnKTtcclxuICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnJztcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBpZiAoc2VydmljZXNNZW51QnRuICYmIHdpbmRvdy5pbm5lcldpZHRoIDw9IDc2Nykge1xyXG5cclxuICAgICAgc2VydmljZXNNZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2dCkge1xyXG4gICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICBpZiAoc2VydmljZXNNZW51LmNsYXNzTGlzdC5jb250YWlucygnbWFpbi1oZWFkZXJfX3NlcnZpY2VzLW5hdi0tY2xvc2VkJykpIHtcclxuICAgICAgICAgIHNlcnZpY2VzTWVudS5jbGFzc0xpc3QucmVtb3ZlKCdtYWluLWhlYWRlcl9fc2VydmljZXMtbmF2LS1jbG9zZWQnKTtcclxuICAgICAgICAgIHNlcnZpY2VzTWVudS5jbGFzc0xpc3QuYWRkKCdtYWluLWhlYWRlcl9fc2VydmljZXMtbmF2LS1vcGVuZWQnKTtcclxuICAgICAgICAgIHNlcnZpY2VzTWVudUJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdtYWluLWhlYWRlcl9fbGluay1zZXJ2aWNlcy0tY2xvc2VkJyk7XHJcbiAgICAgICAgICBzZXJ2aWNlc01lbnVCdG4uY2xhc3NMaXN0LmFkZCgnbWFpbi1oZWFkZXJfX2xpbmstc2VydmljZXMtLW9wZW5lZCcpO1xyXG4gICAgICAgICAgd3JhcE1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnbWFpbi1oZWFkZXJfX3dyYXAtbWVudS0tYWN0aXZlJyk7XHJcbiAgICAgICAgICBzdGFnZU1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnbWFpbi1oZWFkZXJfX3N0YWdlLW5hdi0tb3BlbmVkJyk7XHJcbiAgICAgICAgICBzdGFnZU1lbnUuY2xhc3NMaXN0LmFkZCgnbWFpbi1oZWFkZXJfX3N0YWdlLW5hdi0tY2xvc2VkJyk7XHJcbiAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHNlcnZpY2VzTWVudS5jbGFzc0xpc3QuYWRkKCdtYWluLWhlYWRlcl9fc2VydmljZXMtbmF2LS1jbG9zZWQnKTtcclxuICAgICAgICAgIHNlcnZpY2VzTWVudS5jbGFzc0xpc3QucmVtb3ZlKCdtYWluLWhlYWRlcl9fc2VydmljZXMtbmF2LS1vcGVuZWQnKTtcclxuICAgICAgICAgIHNlcnZpY2VzTWVudUJ0bi5jbGFzc0xpc3QuYWRkKCdtYWluLWhlYWRlcl9fbGluay1zZXJ2aWNlcy0tY2xvc2VkJyk7XHJcbiAgICAgICAgICBzZXJ2aWNlc01lbnVCdG4uY2xhc3NMaXN0LnJlbW92ZSgnbWFpbi1oZWFkZXJfX2xpbmstc2VydmljZXMtLW9wZW5lZCcpO1xyXG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICcnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBpZiAoc3RhZ2VXcmFwTWVudUJ0biAmJiB3aW5kb3cuaW5uZXJXaWR0aCA8PSA3NjcpIHtcclxuXHJcbiAgICAgIHN0YWdlV3JhcE1lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZ0KSB7XHJcbiAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIGlmIChzdGFnZU1lbnUuY2xhc3NMaXN0LmNvbnRhaW5zKCdtYWluLWhlYWRlcl9fc3RhZ2UtbmF2LS1jbG9zZWQnKSkge1xyXG4gICAgICAgICAgc3RhZ2VNZW51LmNsYXNzTGlzdC5yZW1vdmUoJ21haW4taGVhZGVyX19zdGFnZS1uYXYtLWNsb3NlZCcpO1xyXG4gICAgICAgICAgc3RhZ2VNZW51LmNsYXNzTGlzdC5hZGQoJ21haW4taGVhZGVyX19zdGFnZS1uYXYtLW9wZW5lZCcpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBzdGFnZU1lbnUuY2xhc3NMaXN0LmFkZCgnbWFpbi1oZWFkZXJfX3N0YWdlLW5hdi0tY2xvc2VkJyk7XHJcbiAgICAgICAgICBzdGFnZU1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnbWFpbi1oZWFkZXJfX3N0YWdlLW5hdi0tb3BlbmVkJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBtYWluUGhvbmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZ0KSB7XHJcbiAgICBldnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBtYWluQm94UGhvbmUuY2xhc3NMaXN0LnRvZ2dsZSgnbWFpbi1oZWFkZXJfX3RlbC0tYWN0aXZlJyk7XHJcbiAgfSk7XHJcblxyXG59KSgpO1xyXG4ndXNlIHN0cmljdCc7XHJcblxyXG4oZnVuY3Rpb24gKCkge1xyXG5cclxuICB2YXIgbWFpblNsaWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnRyb19fYm94LXN3aXBlci1jb250YWluZXInKTtcclxuICB2YXIgc2VydmljZXNTbGlkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VydmljZXNfX3N3aXBlci1jb250YWluZXInKTtcclxuXHJcbiAgdmFyIHNlcnZpY2VzU2xpZGVyRGVzayA9IGZ1bmN0aW9uIChlbCkge1xyXG4gICAgcmV0dXJuIG5ldyBTd2lwZXIoZWwsIHtcclxuICAgICAgbG9vcDogdHJ1ZSxcclxuICAgICAgc3BlZWQ6IDEwMDAsXHJcbiAgICAgIHNwYWNlQmV0d2VlbjogMzAsXHJcbiAgICAgIGF1dG9wbGF5OiB7XHJcbiAgICAgICAgZGVsYXk6IDEyMDAsXHJcbiAgICAgIH0sXHJcbiAgICAgIG5hdmlnYXRpb246IHtcclxuICAgICAgICBuZXh0RWw6ICcuc3dpcGVyLWJ1dHRvbi1uZXh0JyxcclxuICAgICAgICBwcmV2RWw6ICcuc3dpcGVyLWJ1dHRvbi1wcmV2JyxcclxuICAgICAgfSxcclxuICAgICAgYnJlYWtwb2ludHM6IHtcclxuICAgICAgICAzMjA6IHtcclxuICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDEsXHJcbiAgICAgICAgfSxcclxuICAgICAgICA3Njg6IHtcclxuICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICAxMDI0OiB7XHJcbiAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAyLFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgaWYgKHNlcnZpY2VzU2xpZGVyKSB7XHJcbiAgICBzZXJ2aWNlc1NsaWRlckRlc2soc2VydmljZXNTbGlkZXIpO1xyXG4gIH1cclxuXHJcbiAgdmFyIGNyZWF0ZVNsaWRlciA9IGZ1bmN0aW9uIChlbCkge1xyXG4gICAgcmV0dXJuIG5ldyBTd2lwZXIoZWwsIHtcclxuICAgICAgZGlyZWN0aW9uOiAndmVydGljYWwnLFxyXG4gICAgICBzbGlkZXNQZXJWaWV3OiAxLFxyXG4gICAgICBsb29wOiB0cnVlLFxyXG4gICAgICBzcGVlZDogMTAwMCxcclxuICAgICAgYXV0b3BsYXk6IHtcclxuICAgICAgICBkZWxheTogNzAwMCxcclxuICAgICAgfSxcclxuICAgICAgbW91c2V3aGVlbDogdHJ1ZSxcclxuICAgICAgcGFnaW5hdGlvbjoge1xyXG4gICAgICAgIGVsOiAnLnN3aXBlci1wYWdpbmF0aW9uJyxcclxuICAgICAgICBjbGlja2FibGU6IHRydWUsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBpZiAobWFpblNsaWRlcikge1xyXG4gICAgY3JlYXRlU2xpZGVyKG1haW5TbGlkZXIpO1xyXG4gIH1cclxuXHJcbn0pKCk7XHJcbid1c2Ugc3RyaWN0JztcclxuXHJcbihmdW5jdGlvbiAoKSB7XHJcblxyXG4gIHZhciBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9ydGZvbGlvJyk7XHJcblxyXG4gIGlmIChjb250YWluZXIgJiYgd2luZG93LmlubmVyV2lkdGggPiAxMDIzKSB7XHJcblxyXG4gICAgdmFyIGNhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBvcnRmb2xpb19fYm94LWNhcmQnKTtcclxuXHJcbiAgICBmdW5jdGlvbiByb3RhdGUoZXZ0KSB7XHJcbiAgICAgIHZhciBjYXJkSXRlbSA9IHRoaXMucXVlcnlTZWxlY3RvcignLnBvcnRmb2xpb19fY2FyZC1wZXJzcGVjdGl2ZScpO1xyXG4gICAgICB2YXIgaGFsZkhlaWdodCA9IGNhcmRJdGVtLm9mZnNldEhlaWdodCAvIDI7XHJcbiAgICAgIHZhciBoYWxmV2lkdGggPSBjYXJkSXRlbS5vZmZzZXRXaWR0aCAvIDI7XHJcblxyXG4gICAgICBjYXJkSXRlbS5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlWCgnICsgLShldnQub2Zmc2V0WSAtIGhhbGZIZWlnaHQpIC8gMTIgKyAnZGVnKScgK1xyXG4gICAgICAgICdyb3RhdGVZKCcgKyAoZXZ0Lm9mZnNldFggLSBoYWxmV2lkdGgpIC8gMTIgKyAnZGVnJztcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByb3RhdGVOb25lKCkge1xyXG4gICAgICB2YXIgY2FyZEl0ZW0gPSB0aGlzLnF1ZXJ5U2VsZWN0b3IoJy5wb3J0Zm9saW9fX2NhcmQtcGVyc3BlY3RpdmUnKTtcclxuXHJcbiAgICAgIGNhcmRJdGVtLnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGVYKDBkZWcpJyArICdyb3RhdGVZKDBkZWcpJztcclxuICAgIH1cclxuXHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNhcmRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHZhciBjYXJkID0gY2FyZHNbaV07XHJcbiAgICAgIGNhcmQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgcm90YXRlKTtcclxuICAgICAgY2FyZC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIHJvdGF0ZU5vbmUpO1xyXG4gICAgfVxyXG5cclxuICAgICQoZG9jdW1lbnQpLm9uKCdtc2UyX2xvYWQnLCBmdW5jdGlvbiAoZSwgZGF0YSkge1xyXG5cclxuICAgICAgdmFyIGNhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wb3J0Zm9saW9fX2JveC1jYXJkXCIpO1xyXG5cclxuICAgICAgZnVuY3Rpb24gcm90YXRlKGV2dCkge1xyXG4gICAgICAgIHZhciBjYXJkSXRlbSA9IHRoaXMucXVlcnlTZWxlY3RvcignLnBvcnRmb2xpb19fY2FyZC1wZXJzcGVjdGl2ZScpO1xyXG4gICAgICAgIHZhciBoYWxmSGVpZ2h0ID0gY2FyZEl0ZW0ub2Zmc2V0SGVpZ2h0IC8gMjtcclxuICAgICAgICB2YXIgaGFsZldpZHRoID0gY2FyZEl0ZW0ub2Zmc2V0V2lkdGggLyAyO1xyXG5cclxuICAgICAgICBjYXJkSXRlbS5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlWCgnICsgLShldnQub2Zmc2V0WSAtIGhhbGZIZWlnaHQpIC8gNyArICdkZWcpJyArXHJcbiAgICAgICAgICAncm90YXRlWSgnICsgKGV2dC5vZmZzZXRYIC0gaGFsZldpZHRoKSAvIDcgKyAnZGVnJztcclxuICAgICAgfVxyXG5cclxuICAgICAgZnVuY3Rpb24gcm90YXRlTm9uZSgpIHtcclxuICAgICAgICB2YXIgY2FyZEl0ZW0gPSB0aGlzLnF1ZXJ5U2VsZWN0b3IoJy5wb3J0Zm9saW9fX2NhcmQtcGVyc3BlY3RpdmUnKTtcclxuXHJcbiAgICAgICAgY2FyZEl0ZW0uc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZVgoMGRlZyknICsgJ3JvdGF0ZVkoMGRlZyknO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNhcmRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgdmFyIGNhcmQgPSBjYXJkc1tpXTtcclxuICAgICAgICBjYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHJvdGF0ZSk7XHJcbiAgICAgICAgY2FyZC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIHJvdGF0ZU5vbmUpO1xyXG4gICAgICB9XHJcblxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxufSkoKTtcclxuJ3VzZSBzdHJpY3QnO1xyXG5cclxuKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgdmFyIGFydGljbGVDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFydGljbGVfX2JveC1hcnRpY2xlJyk7XHJcblxyXG4gIGlmIChhcnRpY2xlQ29udGVudCkge1xyXG5cclxuICAgIGNvbnN0IERFU0tUT1BfV0lEVEggPSAxMDIzO1xyXG4gICAgdmFyIGFydGljbGVDYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFydGljbGVfX2JveC1hcnRpY2xlcycpO1xyXG5cclxuICAgIHZhciBzZXRIZWlnaHQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGxldCBpc0Rlc2t0b3AgPSB3aW5kb3cuaW5uZXJXaWR0aCA+IERFU0tUT1BfV0lEVEg7XHJcblxyXG4gICAgICAgIGlmIChpc0Rlc2t0b3ApIHtcclxuICAgICAgICAgIGxldCBjb250ZW50SGVpZ2h0ID0gYXJ0aWNsZUNvbnRlbnQub2Zmc2V0SGVpZ2h0O1xyXG4gICAgICAgICAgYXJ0aWNsZUNhcmQuc3R5bGUuaGVpZ2h0ID0gY29udGVudEhlaWdodCArICdweCc7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGFydGljbGVDYXJkLnN0eWxlLmhlaWdodCA9ICcnO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHNldEhlaWdodCgpO1xyXG5cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBzZXRIZWlnaHQpO1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHNldEhlaWdodCk7XHJcbiAgfVxyXG5cclxuICB2YXIgc2VydmljZXNCb3hXcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlcnZpY2VzJyk7XHJcblxyXG4gIGlmIChzZXJ2aWNlc0JveFdyYXBwZXIpIHtcclxuXHJcbiAgICBjb25zdCBUQUJMRVRfV0lEVEggPSA3Njc7XHJcbiAgICB2YXIgc2VydmljZXNCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VydmljZXNfX25hdi1ib3gnKTtcclxuXHJcbiAgICB2YXIgc2V0SGVpZ2h0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICBsZXQgaXNUYWJsZXQgPSB3aW5kb3cuaW5uZXJXaWR0aCA+IFRBQkxFVF9XSURUSDtcclxuXHJcbiAgICAgICAgaWYgKGlzVGFibGV0KSB7XHJcbiAgICAgICAgICBsZXQgY29udGVudEhlaWdodCA9IHNlcnZpY2VzQm94V3JhcHBlci5vZmZzZXRIZWlnaHQ7XHJcbiAgICAgICAgICBzZXJ2aWNlc0JveC5zdHlsZS5oZWlnaHQgPSBjb250ZW50SGVpZ2h0ICsgJ3B4JztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgc2VydmljZXNCb3guc3R5bGUuaGVpZ2h0ID0gJyc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc2V0SGVpZ2h0KCk7XHJcblxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHNldEhlaWdodCk7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgc2V0SGVpZ2h0KTtcclxuICB9XHJcblxyXG4gIHZhciBzdGFnZVdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhZ2VzJyk7XHJcblxyXG4gIGlmIChzdGFnZVdyYXBwZXIpIHtcclxuXHJcbiAgICBjb25zdCBUQUJMRVRfV0lEVEggPSA3Njc7XHJcbiAgICB2YXIgc3RhZ2VCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhZ2VzX19uYXYtYm94Jyk7XHJcblxyXG4gICAgdmFyIHNldEhlaWdodCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgbGV0IGlzVGFibGV0ID0gd2luZG93LmlubmVyV2lkdGggPiBUQUJMRVRfV0lEVEg7XHJcblxyXG4gICAgICAgIGlmIChpc1RhYmxldCkge1xyXG4gICAgICAgICAgbGV0IGNvbnRlbnRIZWlnaHQgPSBzdGFnZVdyYXBwZXIub2Zmc2V0SGVpZ2h0O1xyXG4gICAgICAgICAgc3RhZ2VCb3guc3R5bGUuaGVpZ2h0ID0gY29udGVudEhlaWdodCArICdweCc7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHN0YWdlQm94LnN0eWxlLmhlaWdodCA9ICcnO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHNldEhlaWdodCgpO1xyXG5cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBzZXRIZWlnaHQpO1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHNldEhlaWdodCk7XHJcbiAgfVxyXG5cclxufSkoKTtcclxuJ3VzZSBzdHJpY3QnO1xyXG5cclxuKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgY29uc3QgREVTS1RPUF9XSURUSCA9IDEwMjM7XHJcbiAgdmFyIHBvcnRmb2xpb1BhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9ydGZvbGlvLXBhZ2VfX2NvbXBhbnknKTtcclxuXHJcbiAgaWYgKHBvcnRmb2xpb1BhZ2UgJiYgd2luZG93LmlubmVyV2lkdGggPiBERVNLVE9QX1dJRFRIKSB7XHJcblxyXG4gICAgdmFyIHBvcnRmb2xpb0JveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3J0Zm9saW8tcGFnZV9fYm94Jyk7XHJcbiAgICB2YXIgcG9ydGZvbGlvQm94QWRkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcnRmb2xpby1wYWdlX19ib3gtYWRkJyk7XHJcbiAgICB2YXIgcG9ydGZvbGlvV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3J0Zm9saW8tcGFnZV9fd3JhcHBlcicpO1xyXG4gICAgdmFyIHBvcnRmb2xpb0JveEltYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcnRmb2xpby1wYWdlX19ib3gtaW1hZ2UnKTtcclxuICAgIHZhciBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJveC1jbG9zZWQnKTtcclxuICAgIHZhciB0ZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRleHQtY2xvc2VkJyk7XHJcblxyXG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xyXG5cclxuICAgIHZhciBvcGVuID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICBwb3J0Zm9saW9Cb3hJbWFnZS5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWSgtMTcwJSknO1xyXG4gICAgICBwb3J0Zm9saW9Cb3guc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVkoLTMyMCUpJztcclxuICAgICAgcG9ydGZvbGlvQm94LnN0eWxlLnRyYW5zaXRpb25EZWxheSA9ICcnO1xyXG4gICAgICBwb3J0Zm9saW9Cb3hJbWFnZS5zdHlsZS50cmFuc2l0aW9uRGVsYXkgPSAnJztcclxuICAgICAgcG9ydGZvbGlvUGFnZS5jbGFzc0xpc3QuYWRkKCdwb3J0Zm9saW8tcGFnZV9fY29tcGFueS0tYWN0aXZlJyk7XHJcbiAgICAgIHBvcnRmb2xpb0JveEFkZC5jbGFzc0xpc3QuYWRkKCdwb3J0Zm9saW8tcGFnZV9fYm94LWFkZC0tYWN0aXZlJyk7XHJcbiAgICAgIHNldFRpbWVvdXQoZ3JpZE9wZW4sIDYwMCk7XHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBjbG9zZWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHBvcnRmb2xpb0JveEltYWdlLnN0eWxlLnRyYW5zZm9ybSA9ICcnO1xyXG4gICAgICBwb3J0Zm9saW9Cb3guc3R5bGUudHJhbnNmb3JtID0gJyc7XHJcbiAgICAgIHBvcnRmb2xpb0JveC5zdHlsZS50cmFuc2l0aW9uRGVsYXkgPSAnMC4zcyc7XHJcbiAgICAgIHBvcnRmb2xpb0JveEltYWdlLnN0eWxlLnRyYW5zaXRpb25EZWxheSA9ICcwLjNzJztcclxuICAgICAgcG9ydGZvbGlvUGFnZS5jbGFzc0xpc3QucmVtb3ZlKCdwb3J0Zm9saW8tcGFnZV9fY29tcGFueS0tYWN0aXZlJyk7XHJcbiAgICAgIHBvcnRmb2xpb0JveEFkZC5jbGFzc0xpc3QucmVtb3ZlKCdwb3J0Zm9saW8tcGFnZV9fYm94LWFkZC0tYWN0aXZlJyk7XHJcbiAgICAgIHNldFRpbWVvdXQoZ3JpZENsb3NlZCwgNDAwKTtcclxuICAgIH07XHJcblxyXG4gICAgdmFyIGNsb3NlZE1haW4gPSBmdW5jdGlvbiAoZXZ0KSB7XHJcblxyXG4gICAgICBpZiAoZXZ0LnRhcmdldCA9PT0gbWFpbikge1xyXG5cclxuICAgICAgICBwb3J0Zm9saW9QYWdlLmNsYXNzTGlzdC5yZW1vdmUoJ3BvcnRmb2xpby1wYWdlX19jb21wYW55LS1hY3RpdmUnKTtcclxuICAgICAgICBwb3J0Zm9saW9Cb3hBZGQuY2xhc3NMaXN0LnJlbW92ZSgncG9ydGZvbGlvLXBhZ2VfX2JveC1hZGQtLWFjdGl2ZScpO1xyXG4gICAgICAgIHBvcnRmb2xpb0JveEltYWdlLnN0eWxlLnRyYW5zZm9ybSA9ICcnO1xyXG4gICAgICAgIHBvcnRmb2xpb0JveC5zdHlsZS50cmFuc2Zvcm0gPSAnJztcclxuICAgICAgICBwb3J0Zm9saW9Cb3guc3R5bGUudHJhbnNpdGlvbkRlbGF5ID0gJyc7XHJcbiAgICAgICAgcG9ydGZvbGlvQm94SW1hZ2Uuc3R5bGUudHJhbnNpdGlvbkRlbGF5ID0gJyc7XHJcblxyXG4gICAgICB9XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgY2xvc2VkVGV4dCA9IGZ1bmN0aW9uIChldnQpIHtcclxuXHJcbiAgICAgIGlmIChldnQudGFyZ2V0ID09PSB0ZXh0KSB7XHJcblxyXG4gICAgICAgIHBvcnRmb2xpb1BhZ2UuY2xhc3NMaXN0LnJlbW92ZSgncG9ydGZvbGlvLXBhZ2VfX2NvbXBhbnktLWFjdGl2ZScpO1xyXG4gICAgICAgIHBvcnRmb2xpb0JveEFkZC5jbGFzc0xpc3QucmVtb3ZlKCdwb3J0Zm9saW8tcGFnZV9fYm94LWFkZC0tYWN0aXZlJyk7XHJcbiAgICAgICAgcG9ydGZvbGlvQm94SW1hZ2Uuc3R5bGUudHJhbnNmb3JtID0gJyc7XHJcbiAgICAgICAgcG9ydGZvbGlvQm94LnN0eWxlLnRyYW5zZm9ybSA9ICcnO1xyXG4gICAgICAgIHBvcnRmb2xpb0JveC5zdHlsZS50cmFuc2l0aW9uRGVsYXkgPSAnJztcclxuICAgICAgICBwb3J0Zm9saW9Cb3hJbWFnZS5zdHlsZS50cmFuc2l0aW9uRGVsYXkgPSAnJztcclxuXHJcbiAgICAgIH1cclxuXHJcbiAgICB9O1xyXG5cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd3aGVlbCcsIGZ1bmN0aW9uIChldnQpIHtcclxuXHJcbiAgICAgIGlmIChldnQuZGVsdGFZID4gMCAmJiB3aW5kb3cuaW5uZXJXaWR0aCA+IERFU0tUT1BfV0lEVEgpIHtcclxuICAgICAgICBvcGVuKCk7XHJcbiAgICAgIH0gZWxzZSBpZiAocG9ydGZvbGlvUGFnZS5zY3JvbGxUb3AgPT09IDApIHtcclxuICAgICAgICBjbG9zZWQoKTtcclxuICAgICAgfVxyXG5cclxuICAgIH0pXHJcblxyXG4gICAgbWFpbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlZE1haW4pO1xyXG4gICAgdGV4dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlZFRleHQpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGdyaWRPcGVuKCkge1xyXG4gICAgICBwb3J0Zm9saW9XcmFwcGVyLnN0eWxlLmdyaWRUZW1wbGF0ZUNvbHVtbnMgPSAnMjglIGF1dG8gYXV0byc7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ3JpZENsb3NlZCgpIHtcclxuICAgICAgcG9ydGZvbGlvV3JhcHBlci5zdHlsZS5ncmlkVGVtcGxhdGVDb2x1bW5zID0gJyc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufSkoKTtcclxuJ3VzZSBzdHJpY3QnO1xyXG5cclxuKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgY29uc3QgS0VZX0NPREUgPSAyNztcclxuXHJcbiAgdmFyIG92ZXJsYXlNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpO1xyXG4gIHZhciBtb2RhbENvbnN1bHRhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1jb25zdWx0YXRpb24nKTtcclxuXHJcbiAgaWYgKG1vZGFsQ29uc3VsdGF0aW9uKSB7XHJcblxyXG4gICAgdmFyIG1vZGFsQ29uc3VsdGF0aW9uQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJ1dHRvbi0tY29uc3VsdGF0aW9uJyk7XHJcbiAgICB2YXIgbW9kYWxDbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tb2RhbF9fYnRuLWNsb3NlZCcpO1xyXG5cclxuICAgIGZvcih2YXIgeSA9IDA7IHkgPCBtb2RhbENvbnN1bHRhdGlvbkJ0bi5sZW5ndGg7IHkrKykge1xyXG5cclxuICAgICAgbW9kYWxDb25zdWx0YXRpb25CdG5beV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZ0KSB7XHJcbiAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIG1vZGFsQ29uc3VsdGF0aW9uLmNsYXNzTGlzdC5hZGQoJ21vZGFsLWFjdGl2ZScpO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcclxuICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbW9kYWxDbG9zZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICBtb2RhbENsb3NlW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2dCkge1xyXG4gICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICBtb2RhbENvbnN1bHRhdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCdtb2RhbC1hY3RpdmUnKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJyc7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKGBrZXlkb3duYCwgZnVuY3Rpb24gKGV2dCkge1xyXG5cclxuICAgICAgaWYgKGV2dC5rZXlDb2RlID09PSBLRVlfQ09ERSkge1xyXG4gICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICBtb2RhbENvbnN1bHRhdGlvbi5jbGFzc0xpc3QuY29udGFpbnMoYG1vZGFsLWFjdGl2ZWApO1xyXG4gICAgICAgIG1vZGFsQ29uc3VsdGF0aW9uLmNsYXNzTGlzdC5yZW1vdmUoYG1vZGFsLWFjdGl2ZWApO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBgYDtcclxuXHJcbiAgICAgIH1cclxuXHJcbiAgICB9KTtcclxuXHJcbiAgICBvdmVybGF5TW9kYWwuYWRkRXZlbnRMaXN0ZW5lcihgY2xpY2tgLCBmdW5jdGlvbiAoZXZ0KSB7XHJcblxyXG4gICAgICBpZiAoZXZ0LnRhcmdldCA9PT0gb3ZlcmxheU1vZGFsKSB7XHJcblxyXG4gICAgICAgIG1vZGFsQ29uc3VsdGF0aW9uLmNsYXNzTGlzdC5yZW1vdmUoYG1vZGFsLWFjdGl2ZWApO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBgYDtcclxuXHJcbiAgICAgIH1cclxuXHJcbiAgICB9KTtcclxuXHJcbiAgfVxyXG5cclxufSkoKTtcclxuJ3VzZSBzdHJpY3QnO1xyXG5cclxuKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgJChkb2N1bWVudCkub24oJ21zZTJfbG9hZCcsIGZ1bmN0aW9uKGUsIGRhdGEpIHtcclxuXHJcbiAgICBjb25zdCBLRVlfQ09ERSA9IDI3O1xyXG5cclxuICAgIHZhciBvdmVybGF5TW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKTtcclxuICAgIHZhciBwb3J0Zm9saW9DYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1vZGFscy1kZXZlbG9wbWVudCcpO1xyXG4gICAgdmFyIG1vZGFsRGV2ZWxvcG1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtZGV2ZWxvcG1lbnQnKTtcclxuICAgIHZhciBtb2RhbENsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1vZGFsX19idG4tY2xvc2VkJyk7XHJcblxyXG4gICAgaWYgKG1vZGFsRGV2ZWxvcG1lbnQpIHtcclxuXHJcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbW9kYWxDbG9zZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIG1vZGFsQ2xvc2VbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZ0KSB7XHJcbiAgICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICBtb2RhbERldmVsb3BtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ21vZGFsLWFjdGl2ZScpO1xyXG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICcnO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBvcnRmb2xpb0NhcmQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBwb3J0Zm9saW9DYXJkW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2dCkge1xyXG4gICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgbW9kYWxEZXZlbG9wbWVudC5jbGFzc0xpc3QuYWRkKCdtb2RhbC1hY3RpdmUnKTtcclxuICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKGBrZXlkb3duYCwgZnVuY3Rpb24gKGV2dCkge1xyXG5cclxuICAgICAgICBpZiAoZXZ0LmtleUNvZGUgPT09IEtFWV9DT0RFKSB7XHJcbiAgICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICBtb2RhbERldmVsb3BtZW50LmNsYXNzTGlzdC5jb250YWlucygnbW9kYWwtYWN0aXZlJyk7XHJcbiAgICAgICAgICBtb2RhbERldmVsb3BtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ21vZGFsLWFjdGl2ZScpO1xyXG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IGBgO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIG92ZXJsYXlNb2RhbC5hZGRFdmVudExpc3RlbmVyKGBjbGlja2AsIGZ1bmN0aW9uIChldnQpIHtcclxuXHJcbiAgICAgICAgaWYgKGV2dC50YXJnZXQgPT09IG92ZXJsYXlNb2RhbCkge1xyXG5cclxuICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBgYDtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgfSk7XHJcblxyXG4gICAgICBtb2RhbERldmVsb3BtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2dCkge1xyXG5cclxuICAgICAgICBpZiAoZXZ0LnRhcmdldCA9PT0gbW9kYWxEZXZlbG9wbWVudCkge1xyXG4gICAgICAgICAgbW9kYWxEZXZlbG9wbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ21vZGFsLWFjdGl2ZScpO1xyXG4gICAgICAgICAgbW9kYWxEZXZlbG9wbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdtb2RhbC1hY3RpdmUnKTtcclxuICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBgYDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICB9KVxyXG5cclxuICAgIH1cclxuXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IEtFWV9DT0RFID0gMjc7XHJcblxyXG4gIHZhciBvdmVybGF5TW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKTtcclxuICB2YXIgcG9ydGZvbGlvQ2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tb2RhbHMtZGV2ZWxvcG1lbnQnKTtcclxuICB2YXIgbW9kYWxEZXZlbG9wbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1kZXZlbG9wbWVudCcpO1xyXG4gIHZhciBtb2RhbENsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1vZGFsX19idG4tY2xvc2VkJyk7XHJcblxyXG4gIGlmIChtb2RhbERldmVsb3BtZW50KSB7XHJcblxyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtb2RhbENsb3NlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIG1vZGFsQ2xvc2VbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZ0KSB7XHJcbiAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIG1vZGFsRGV2ZWxvcG1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnbW9kYWwtYWN0aXZlJyk7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICcnO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBvcnRmb2xpb0NhcmQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgcG9ydGZvbGlvQ2FyZFtpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldnQpIHtcclxuICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgbW9kYWxEZXZlbG9wbWVudC5jbGFzc0xpc3QuYWRkKCdtb2RhbC1hY3RpdmUnKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XHJcblxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihga2V5ZG93bmAsIGZ1bmN0aW9uIChldnQpIHtcclxuXHJcbiAgICAgIGlmIChldnQua2V5Q29kZSA9PT0gS0VZX0NPREUpIHtcclxuICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgbW9kYWxEZXZlbG9wbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ21vZGFsLWFjdGl2ZScpO1xyXG4gICAgICAgIG1vZGFsRGV2ZWxvcG1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnbW9kYWwtYWN0aXZlJyk7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IGBgO1xyXG5cclxuICAgICAgfVxyXG5cclxuICAgIH0pO1xyXG5cclxuICAgIG92ZXJsYXlNb2RhbC5hZGRFdmVudExpc3RlbmVyKGBjbGlja2AsIGZ1bmN0aW9uIChldnQpIHtcclxuXHJcbiAgICAgIGlmIChldnQudGFyZ2V0ID09PSBvdmVybGF5TW9kYWwpIHtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IGBgO1xyXG5cclxuICAgICAgfVxyXG5cclxuICAgIH0pO1xyXG5cclxuICAgIG1vZGFsRGV2ZWxvcG1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZ0KSB7XHJcblxyXG4gICAgICBpZiAoZXZ0LnRhcmdldCA9PT0gbW9kYWxEZXZlbG9wbWVudCkge1xyXG4gICAgICAgIG1vZGFsRGV2ZWxvcG1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdtb2RhbC1hY3RpdmUnKTtcclxuICAgICAgICBtb2RhbERldmVsb3BtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ21vZGFsLWFjdGl2ZScpO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBgYDtcclxuICAgICAgfVxyXG5cclxuICAgIH0pXHJcblxyXG4gIH1cclxuXHJcbn0pKCk7XHJcbid1c2Ugc3RyaWN0JztcclxuXHJcbihmdW5jdGlvbiAoKSB7XHJcblxyXG4gIGNvbnN0IEtFWV9DT0RFID0gMjc7XHJcblxyXG4gIHZhciBvdmVybGF5TW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKTtcclxuICB2YXIgbW9kYWxUaGFua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtdGhhbmtzJyk7XHJcbiAgdmFyIG1vZGFsQ2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubW9kYWxfX2J0bi1jbG9zZWQnKTtcclxuXHJcbiAgaWYgKG1vZGFsVGhhbmtzKSB7XHJcblxyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtb2RhbENsb3NlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIG1vZGFsQ2xvc2VbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZ0KSB7XHJcbiAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIG1vZGFsVGhhbmtzLmNsYXNzTGlzdC5yZW1vdmUoJ21vZGFsLWFjdGl2ZScpO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnJztcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoYGtleWRvd25gLCBmdW5jdGlvbiAoZXZ0KSB7XHJcblxyXG4gICAgICBpZiAoZXZ0LmtleUNvZGUgPT09IEtFWV9DT0RFKSB7XHJcbiAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIG1vZGFsVGhhbmtzLmNsYXNzTGlzdC5jb250YWlucygnbW9kYWwtYWN0aXZlJyk7XHJcbiAgICAgICAgbW9kYWxUaGFua3MuY2xhc3NMaXN0LnJlbW92ZSgnbW9kYWwtYWN0aXZlJyk7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IGBgO1xyXG5cclxuICAgICAgfVxyXG5cclxuICAgIH0pO1xyXG5cclxuICAgIG92ZXJsYXlNb2RhbC5hZGRFdmVudExpc3RlbmVyKGBjbGlja2AsIGZ1bmN0aW9uIChldnQpIHtcclxuXHJcbiAgICAgIGlmIChldnQudGFyZ2V0ID09PSBvdmVybGF5TW9kYWwpIHtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IGBgO1xyXG5cclxuICAgICAgfVxyXG5cclxuICAgIH0pO1xyXG5cclxuICAgIG1vZGFsVGhhbmtzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2dCkge1xyXG5cclxuICAgICAgaWYgKGV2dC50YXJnZXQgPT09IG1vZGFsVGhhbmtzKSB7XHJcbiAgICAgICAgbW9kYWxUaGFua3MuY2xhc3NMaXN0LmNvbnRhaW5zKCdtb2RhbC1hY3RpdmUnKTtcclxuICAgICAgICBtb2RhbFRoYW5rcy5jbGFzc0xpc3QucmVtb3ZlKCdtb2RhbC1hY3RpdmUnKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gYGA7XHJcbiAgICAgIH1cclxuXHJcbiAgICB9KVxyXG5cclxuICB9XHJcblxyXG59KSgpO1xyXG4ndXNlIHN0cmljdCc7XHJcblxyXG4oZnVuY3Rpb24gKCkge1xyXG5cclxuICBjb25zdCBLRVlfQ09ERSA9IDI3O1xyXG5cclxuICB2YXIgb3ZlcmxheU1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsJyk7XHJcbiAgdmFyIG1vZGFsRmVlZGJhY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtZmVlZGJhY2snKTtcclxuICB2YXIgbW9kYWxGZWVkYmFja0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mZWVkYmFjay1idG4nKTtcclxuICB2YXIgbW9kYWxDbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tb2RhbF9fYnRuLWNsb3NlZCcpO1xyXG5cclxuICBpZiAobW9kYWxGZWVkYmFja0J0bikge1xyXG5cclxuICAgIG1vZGFsRmVlZGJhY2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZ0KSB7XHJcbiAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgbW9kYWxGZWVkYmFjay5jbGFzc0xpc3QuYWRkKCdtb2RhbC1hY3RpdmUnKTtcclxuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtb2RhbENsb3NlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIG1vZGFsQ2xvc2VbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZ0KSB7XHJcbiAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIG1vZGFsRmVlZGJhY2suY2xhc3NMaXN0LnJlbW92ZSgnbW9kYWwtYWN0aXZlJyk7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICcnO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihga2V5ZG93bmAsIGZ1bmN0aW9uIChldnQpIHtcclxuXHJcbiAgICAgIGlmIChldnQua2V5Q29kZSA9PT0gS0VZX0NPREUpIHtcclxuICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgbW9kYWxGZWVkYmFjay5jbGFzc0xpc3QuY29udGFpbnMoYG1vZGFsLWFjdGl2ZWApO1xyXG4gICAgICAgIG1vZGFsRmVlZGJhY2suY2xhc3NMaXN0LnJlbW92ZShgbW9kYWwtYWN0aXZlYCk7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IGBgO1xyXG5cclxuICAgICAgfVxyXG5cclxuICAgIH0pO1xyXG5cclxuICAgIG92ZXJsYXlNb2RhbC5hZGRFdmVudExpc3RlbmVyKGBjbGlja2AsIGZ1bmN0aW9uIChldnQpIHtcclxuXHJcbiAgICAgIGlmIChldnQudGFyZ2V0ID09PSBvdmVybGF5TW9kYWwpIHtcclxuXHJcbiAgICAgICAgbW9kYWxGZWVkYmFjay5jbGFzc0xpc3QucmVtb3ZlKGBtb2RhbC1hY3RpdmVgKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gYGA7XHJcblxyXG4gICAgICB9XHJcblxyXG4gICAgfSk7XHJcblxyXG4gIH1cclxuXHJcbn0pKCk7XHJcbid1c2Ugc3RyaWN0JztcclxuXHJcbihmdW5jdGlvbiAoKSB7XHJcblxyXG4gIGNvbnN0IEtFWV9DT0RFID0gMjc7XHJcblxyXG4gIHZhciBvdmVybGF5TW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKTtcclxuICB2YXIgbW9kYWxBbmFseXNpcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1hbmFseXNpcycpO1xyXG4gIHZhciBtb2RhbEFuYWx5c2lzQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFuYWx5c2lzLWJ0bicpO1xyXG4gIHZhciBtb2RhbENsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1vZGFsX19idG4tY2xvc2VkJyk7XHJcblxyXG4gIGlmIChtb2RhbEFuYWx5c2lzQnRuKSB7XHJcblxyXG4gICAgbW9kYWxBbmFseXNpc0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldnQpIHtcclxuICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICBtb2RhbEFuYWx5c2lzLmNsYXNzTGlzdC5hZGQoJ21vZGFsLWFjdGl2ZScpO1xyXG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XHJcbiAgICB9KTtcclxuXHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG1vZGFsQ2xvc2UubGVuZ3RoOyBpKyspIHtcclxuICAgICAgbW9kYWxDbG9zZVtpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldnQpIHtcclxuICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgbW9kYWxBbmFseXNpcy5jbGFzc0xpc3QucmVtb3ZlKCdtb2RhbC1hY3RpdmUnKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJyc7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKGBrZXlkb3duYCwgZnVuY3Rpb24gKGV2dCkge1xyXG5cclxuICAgICAgaWYgKGV2dC5rZXlDb2RlID09PSBLRVlfQ09ERSkge1xyXG4gICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICBtb2RhbEFuYWx5c2lzLmNsYXNzTGlzdC5jb250YWlucyhgbW9kYWwtYWN0aXZlYCk7XHJcbiAgICAgICAgbW9kYWxBbmFseXNpcy5jbGFzc0xpc3QucmVtb3ZlKGBtb2RhbC1hY3RpdmVgKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gYGA7XHJcblxyXG4gICAgICB9XHJcblxyXG4gICAgfSk7XHJcblxyXG4gICAgb3ZlcmxheU1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoYGNsaWNrYCwgZnVuY3Rpb24gKGV2dCkge1xyXG5cclxuICAgICAgaWYgKGV2dC50YXJnZXQgPT09IG92ZXJsYXlNb2RhbCkge1xyXG5cclxuICAgICAgICBtb2RhbEFuYWx5c2lzLmNsYXNzTGlzdC5yZW1vdmUoYG1vZGFsLWFjdGl2ZWApO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBgYDtcclxuXHJcbiAgICAgIH1cclxuXHJcbiAgICB9KTtcclxuXHJcbiAgfVxyXG5cclxufSkoKTtcclxuJ3VzZSBzdHJpY3QnO1xyXG5cclxuKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgY29uc3QgS0VZX0NPREUgPSAyNztcclxuXHJcbiAgdmFyIG92ZXJsYXlNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpO1xyXG4gIHZhciBtb2RhbENvbnN1bHRhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1jb25zdWx0YXRpb24nKTtcclxuICB2YXIgbW9kYWxDb25zdWx0YXRpb25CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9ydGZvbGlvLW1vZGFsLWpzJyk7XHJcblxyXG4gIGlmIChtb2RhbENvbnN1bHRhdGlvbkJ0bikge1xyXG5cclxuICAgIHZhciBtb2RhbENsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1vZGFsX19idG4tY2xvc2VkJyk7XHJcblxyXG4gICAgICBtb2RhbENvbnN1bHRhdGlvbkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldnQpIHtcclxuICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgbW9kYWxDb25zdWx0YXRpb24uY2xhc3NMaXN0LmFkZCgnbW9kYWwtYWN0aXZlJyk7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG1vZGFsQ2xvc2UubGVuZ3RoOyBpKyspIHtcclxuICAgICAgbW9kYWxDbG9zZVtpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldnQpIHtcclxuICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgbW9kYWxDb25zdWx0YXRpb24uY2xhc3NMaXN0LnJlbW92ZSgnbW9kYWwtYWN0aXZlJyk7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICcnO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihga2V5ZG93bmAsIGZ1bmN0aW9uIChldnQpIHtcclxuXHJcbiAgICAgIGlmIChldnQua2V5Q29kZSA9PT0gS0VZX0NPREUpIHtcclxuICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgbW9kYWxDb25zdWx0YXRpb24uY2xhc3NMaXN0LmNvbnRhaW5zKGBtb2RhbC1hY3RpdmVgKTtcclxuICAgICAgICBtb2RhbENvbnN1bHRhdGlvbi5jbGFzc0xpc3QucmVtb3ZlKGBtb2RhbC1hY3RpdmVgKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gYGA7XHJcblxyXG4gICAgICB9XHJcblxyXG4gICAgfSk7XHJcblxyXG4gICAgb3ZlcmxheU1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoYGNsaWNrYCwgZnVuY3Rpb24gKGV2dCkge1xyXG5cclxuICAgICAgaWYgKGV2dC50YXJnZXQgPT09IG92ZXJsYXlNb2RhbCkge1xyXG5cclxuICAgICAgICBtb2RhbENvbnN1bHRhdGlvbi5jbGFzc0xpc3QucmVtb3ZlKGBtb2RhbC1hY3RpdmVgKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gYGA7XHJcblxyXG4gICAgICB9XHJcblxyXG4gICAgfSk7XHJcblxyXG4gIH1cclxuXHJcbiAgJChkb2N1bWVudCkub24oJ21zZTJfbG9hZCcsIGZ1bmN0aW9uKGUsIGRhdGEpIHtcclxuXHJcbiAgICBjb25zdCBLRVlfQ09ERSA9IDI3O1xyXG5cclxuICAgIHZhciBvdmVybGF5TW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKTtcclxuICAgIHZhciBtb2RhbENvbnN1bHRhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1jb25zdWx0YXRpb24nKTtcclxuICAgIHZhciBtb2RhbENvbnN1bHRhdGlvbkJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3J0Zm9saW8tbW9kYWwtanMnKTtcclxuXHJcbiAgICBpZiAobW9kYWxDb25zdWx0YXRpb25CdG4pIHtcclxuXHJcbiAgICAgIHZhciBtb2RhbENsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1vZGFsX19idG4tY2xvc2VkJyk7XHJcblxyXG4gICAgICBtb2RhbENvbnN1bHRhdGlvbkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldnQpIHtcclxuICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgbW9kYWxDb25zdWx0YXRpb24uY2xhc3NMaXN0LmFkZCgnbW9kYWwtYWN0aXZlJyk7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbW9kYWxDbG9zZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIG1vZGFsQ2xvc2VbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZ0KSB7XHJcbiAgICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICBtb2RhbENvbnN1bHRhdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCdtb2RhbC1hY3RpdmUnKTtcclxuICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnJztcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoYGtleWRvd25gLCBmdW5jdGlvbiAoZXZ0KSB7XHJcblxyXG4gICAgICAgIGlmIChldnQua2V5Q29kZSA9PT0gS0VZX0NPREUpIHtcclxuICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgIG1vZGFsQ29uc3VsdGF0aW9uLmNsYXNzTGlzdC5jb250YWlucyhgbW9kYWwtYWN0aXZlYCk7XHJcbiAgICAgICAgICBtb2RhbENvbnN1bHRhdGlvbi5jbGFzc0xpc3QucmVtb3ZlKGBtb2RhbC1hY3RpdmVgKTtcclxuICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBgYDtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgfSk7XHJcblxyXG4gICAgICBvdmVybGF5TW9kYWwuYWRkRXZlbnRMaXN0ZW5lcihgY2xpY2tgLCBmdW5jdGlvbiAoZXZ0KSB7XHJcblxyXG4gICAgICAgIGlmIChldnQudGFyZ2V0ID09PSBvdmVybGF5TW9kYWwpIHtcclxuXHJcbiAgICAgICAgICBtb2RhbENvbnN1bHRhdGlvbi5jbGFzc0xpc3QucmVtb3ZlKGBtb2RhbC1hY3RpdmVgKTtcclxuICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBgYDtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG5cclxuICB9KTtcclxuXHJcbn0pKCk7XHJcbid1c2Ugc3RyaWN0JztcclxuXHJcbihmdW5jdGlvbiAoKSB7XHJcblxyXG4gIGNvbnN0IEtFWV9DT0RFID0gMjc7XHJcblxyXG4gIHZhciBvdmVybGF5TW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKTtcclxuICB2YXIgbW9kYWxRdWVzdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1xdWVzdGlvbicpO1xyXG4gIHZhciBtb2RhbENsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1vZGFsX19idG4tY2xvc2VkJyk7XHJcbiAgdmFyIGxpbmtQaG9uZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5saW5rLW1vZGFsLXF1ZXN0aW9uJyk7XHJcblxyXG4gIGlmIChtb2RhbFF1ZXN0aW9uKSB7XHJcblxyXG4gICAgdmFyIG1vZGFsU2hvdyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgbW9kYWxRdWVzdGlvbi5jbGFzc0xpc3QuYWRkKCdtb2RhbC1hY3RpdmUnKTtcclxuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xyXG4gICAgfTtcclxuXHJcbiAgICBsaW5rUGhvbmUuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSwgaSkge1xyXG4gICAgICBsaW5rUGhvbmVbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBtb2RhbFNob3cpO1xyXG4gICAgfSlcclxuXHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG1vZGFsQ2xvc2UubGVuZ3RoOyBpKyspIHtcclxuICAgICAgbW9kYWxDbG9zZVtpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldnQpIHtcclxuICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgbW9kYWxRdWVzdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCdtb2RhbC1hY3RpdmUnKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJyc7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKGBrZXlkb3duYCwgZnVuY3Rpb24gKGV2dCkge1xyXG5cclxuICAgICAgaWYgKGV2dC5rZXlDb2RlID09PSBLRVlfQ09ERSkge1xyXG4gICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICBtb2RhbFF1ZXN0aW9uLmNsYXNzTGlzdC5jb250YWlucygnbW9kYWwtYWN0aXZlJyk7XHJcbiAgICAgICAgbW9kYWxRdWVzdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCdtb2RhbC1hY3RpdmUnKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gYGA7XHJcblxyXG4gICAgICB9XHJcblxyXG4gICAgfSk7XHJcblxyXG4gICAgb3ZlcmxheU1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoYGNsaWNrYCwgZnVuY3Rpb24gKGV2dCkge1xyXG5cclxuICAgICAgaWYgKGV2dC50YXJnZXQgPT09IG92ZXJsYXlNb2RhbCkge1xyXG5cclxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gYGA7XHJcblxyXG4gICAgICB9XHJcblxyXG4gICAgfSk7XHJcblxyXG4gICAgbW9kYWxRdWVzdGlvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChldnQpIHtcclxuXHJcbiAgICAgIGlmIChldnQudGFyZ2V0ID09PSBtb2RhbFF1ZXN0aW9uKSB7XHJcbiAgICAgICAgbW9kYWxRdWVzdGlvbi5jbGFzc0xpc3QuY29udGFpbnMoJ21vZGFsLWFjdGl2ZScpO1xyXG4gICAgICAgIG1vZGFsUXVlc3Rpb24uY2xhc3NMaXN0LnJlbW92ZSgnbW9kYWwtYWN0aXZlJyk7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IGBgO1xyXG4gICAgICB9XHJcblxyXG4gICAgfSlcclxuXHJcbiAgfVxyXG5cclxufSkoKTtcclxuJ3VzZSBzdHJpY3QnO1xyXG5cclxuKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgJChkb2N1bWVudCkub24oJ2FmX2NvbXBsZXRlJywgZnVuY3Rpb24gKGV2ZW50LCByZXNwb25zZSkge1xyXG5cclxuICAgIHZhciBtb2RhbENvbnN1bHRhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1jb25zdWx0YXRpb24nKTtcclxuICAgIHZhciBtb2RhbEZlZWRiYWNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLWZlZWRiYWNrJyk7XHJcbiAgICB2YXIgbW9kYWxBbmFseXNpcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1hbmFseXNpcycpO1xyXG4gICAgdmFyIG1vZGFsVGhhbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLXRoYW5rcycpO1xyXG4gICAgdmFyIGZvcm0gPSByZXNwb25zZS5mb3JtO1xyXG5cclxuICAgIGlmIChmb3JtLmF0dHIoJ2lkJykgPT09ICdmb3JtLWNvbnRhY3RzJykge1xyXG5cclxuICAgICAgbW9kYWxUaGFua3MuY2xhc3NMaXN0LmFkZCgnbW9kYWwtYWN0aXZlJyk7XHJcbiAgICAgIHJlc3BvbnNlLm1lc3NhZ2UgPSAnJztcclxuXHJcbiAgICB9IGVsc2UgaWYgKGZvcm0uYXR0cignaWQnKSA9PT0gJ2Zvcm0tcG9ydGZvbGlvJykge1xyXG4gICAgICBtb2RhbFRoYW5rcy5jbGFzc0xpc3QuYWRkKCdtb2RhbC1hY3RpdmUnKTtcclxuICAgICAgbW9kYWxDb25zdWx0YXRpb24uY2xhc3NMaXN0LnJlbW92ZSgnbW9kYWwtYWN0aXZlJyk7XHJcbiAgICAgIHJlc3BvbnNlLm1lc3NhZ2UgPSAnJztcclxuXHJcbiAgICB9IGVsc2UgaWYgKGZvcm0uYXR0cignaWQnKSA9PT0gJ2Zvcm0tbWFpbicpIHtcclxuICAgICAgbW9kYWxUaGFua3MuY2xhc3NMaXN0LmFkZCgnbW9kYWwtYWN0aXZlJyk7XHJcbiAgICAgIHJlc3BvbnNlLm1lc3NhZ2UgPSAnJztcclxuXHJcbiAgICB9IGVsc2UgaWYgKGZvcm0uYXR0cignaWQnKSA9PT0gJ2Zvcm0tZmVlZGJhY2snKSB7XHJcbiAgICAgIG1vZGFsRmVlZGJhY2suY2xhc3NMaXN0LnJlbW92ZSgnbW9kYWwtYWN0aXZlJyk7XHJcbiAgICAgIG1vZGFsVGhhbmtzLmNsYXNzTGlzdC5hZGQoJ21vZGFsLWFjdGl2ZScpO1xyXG4gICAgICByZXNwb25zZS5tZXNzYWdlID0gJyc7XHJcblxyXG4gICAgfSBlbHNlIGlmIChmb3JtLmF0dHIoJ2lkJykgPT09ICdmb3JtLWFuYWx5c2lzJykge1xyXG4gICAgICBtb2RhbEFuYWx5c2lzLmNsYXNzTGlzdC5yZW1vdmUoJ21vZGFsLWFjdGl2ZScpO1xyXG4gICAgICBtb2RhbFRoYW5rcy5jbGFzc0xpc3QuYWRkKCdtb2RhbC1hY3RpdmUnKTtcclxuICAgICAgcmVzcG9uc2UubWVzc2FnZSA9ICcnO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBlbHNlIHtcclxuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgfVxyXG5cclxuICB9KTtcclxuXHJcbn0pKCk7XHJcbid1c2Ugc3RyaWN0JztcclxuXHJcbihmdW5jdGlvbiAoKSB7XHJcblxyXG4gIHZhciBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdhW2hyZWZePVwidGVsOlwiXScpO1xyXG5cclxuICB2YXIgcmVzaXplV2luZG93ID0gZnVuY3Rpb24gKGV2dCkge1xyXG4gICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDw9IDEwMjMpIHtcclxuICAgICAgZXZ0LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgYnRuLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZXNpemVXaW5kb3cpO1xyXG4gIH0pO1xyXG5cclxuICBidG4uZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCByZXNpemVXaW5kb3cpO1xyXG4gIH0pO1xyXG5cclxufSkoKTtcclxuJ3VzZSBzdHJpY3QnO1xyXG5cclxuKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgY29uc3QgREVTS1RPUF9XSURUSCA9IDEwMjM7XHJcbiAgdmFyIGZlZWRiYWNrTG9nbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mZWVkYmFja19fYm94LWxvZ290eXBlcycpO1xyXG5cclxuICBpZiAoZmVlZGJhY2tMb2dvICYmIHdpbmRvdy5pbm5lcldpZHRoID4gREVTS1RPUF9XSURUSCkge1xyXG5cclxuICAgIHZhciBmZWVkYmFja0JveEluZm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZmVlZGJhY2tfX2JveC1pbmZvIGEnKTtcclxuICAgIHZhciBmZWVkYmFja0FydGljbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZmVlZGJhY2tfX2JveCBhcnRpY2xlJyk7XHJcblxyXG4gICAgdmFyIHJlbW92ZUFjdGl2ZSA9IGZ1bmN0aW9uIChhcnJheSwgYWN0aXZlQ2xhc3MpIHtcclxuICAgICAgYXJyYXkuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShhY3RpdmVDbGFzcyk7XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9O1xyXG5cclxuICAgIGlmIChmZWVkYmFja0JveEluZm8pIHtcclxuICAgICAgZmVlZGJhY2tCb3hJbmZvLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0sIGkpIHtcclxuICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2dCkge1xyXG4gICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgcmVtb3ZlQWN0aXZlKGZlZWRiYWNrQm94SW5mbywgJ2ZlZWRiYWNrX19ib3gtaW5mby0tYWN0aXZlJyk7XHJcbiAgICAgICAgICByZW1vdmVBY3RpdmUoZmVlZGJhY2tBcnRpY2xlLCAnZmVlZGJhY2stYWN0aXZlJyk7XHJcbiAgICAgICAgICBmZWVkYmFja0JveEluZm9baV0uY2xhc3NMaXN0LmFkZCgnZmVlZGJhY2tfX2JveC1pbmZvLS1hY3RpdmUnKTtcclxuICAgICAgICAgIGZlZWRiYWNrQXJ0aWNsZVtpXS5jbGFzc0xpc3QuYWRkKCdmZWVkYmFjay1hY3RpdmUnKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufSkoKTsiXSwiZmlsZSI6Im1haW4uanMifQ==
