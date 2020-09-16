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
