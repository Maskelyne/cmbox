'use strict';

(function () {

  var portfolioPage = document.querySelector('.portfolio-page__company');

  if (portfolioPage) {
    var portfolioBox = document.querySelector('.portfolio-page__box');

    document.body.style.overflow = 'hidden';

    window.addEventListener('mousewheel', function () {
      portfolioPage.style.transition = 'all 0.7s linear';
      portfolioPage.style.width = 'calc(100% / 1.5)';
      portfolioPage.style.position = 'fixed';
      portfolioPage.style.top = '75px';
      portfolioPage.style.right = '0px';
      portfolioBox.style.transform = 'translate(-220%, 100%)';
      portfolioBox.style.transition = 'all 0.7s linear';
    });
  }

})();
