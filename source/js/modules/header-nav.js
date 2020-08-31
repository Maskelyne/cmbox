'use strict';
(function () {
  var menuBtn = document.querySelector('.main-header__btn');
  var wrapMenu = document.querySelector(".main-header__wrap-menu");

  menuBtn.addEventListener('click', function (evt) {
    evt.preventDefault();

    if (menuBtn.classList.contains('main-header__btn--closed')) {
      menuBtn.classList.remove('main-header__btn--closed');
      menuBtn.classList.add('main-header__btn--opened');
      wrapMenu.classList.add('main-header__wrap-menu--active');
    } else {
      menuBtn.classList.add('main-header__btn--closed');
      menuBtn.classList.remove('main-header__btn--opened');
      wrapMenu.classList.remove('main-header__wrap-menu--active');
    }
  });

})();
