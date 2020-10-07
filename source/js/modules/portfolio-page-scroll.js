'use strict';

(function () {

  var portfolioPage = document.querySelector('.portfolio-page__company');

  if (portfolioPage) {
    var portfolioBox = document.querySelector('.portfolio-page__box');
    var portfolioWrapper = document.querySelector('.portfolio-page__wrapper');

    document.body.style.overflow = 'hidden';

    window.addEventListener('wheel', function () {
      portfolioWrapper.classList.add('portfolio-page__wrapper--active');
      portfolioBox.classList.add('portfolio-page__box--active');
      portfolioPage.classList.add('portfolio-page__company--active');
    });
  }

})();
