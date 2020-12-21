'use strict';

(function () {
  var menuBtn = document.querySelector('.main-header__btn');
  var wrapMenu = document.querySelector('.main-header__wrap-menu');
  var stageMenuBtn = document.querySelector('.main-header__link-stage');
  var stageMenu = document.querySelector('.main-header__stage-nav');
  var servicesMenuBtn = document.querySelector('.main-header__link-services');
  var servicesMenu = document.querySelector('.main-header__services-nav');
  var mainPhone = document.querySelector('.main-header__box-phone');
  var mainBoxPhone = document.querySelector('.main-header__tel');

  if (menuBtn) {

    mainPhone.addEventListener('click', function (evt) {
      evt.preventDefault();

      mainBoxPhone.classList.toggle('main-header__tel--active');
    });

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
        servicesMenu.classList.remove('main-header__services-nav--opened');
        servicesMenu.classList.add('main-header__services-nav--closed');
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
