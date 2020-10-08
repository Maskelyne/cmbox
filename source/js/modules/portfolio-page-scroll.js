'use strict';

(function () {

  var portfolioPage = document.querySelector('.portfolio-page__company');

  if (portfolioPage) {
    var portfolioBox = document.querySelector('.portfolio-page__box');
    var portfolioWrapper = document.querySelector('.portfolio-page__wrapper');

    window.addEventListener('wheel', function () {
      portfolioBox.style.transform = 'translate(0%, 10%)';
      portfolioWrapper.classList.add('portfolio-page__wrapper--active');
      portfolioPage.classList.add('portfolio-page__company--active');

      function show() {
        portfolioBox.classList.add('portfolio-page__box--active');
      }

      setTimeout(show, 500);
    });

    portfolioPage.addEventListener('scroll', function () {
      if (portfolioPage.scrollTop === 0) {
        portfolioBox.style.transform = 'translate(130%, -150%)';
        portfolioWrapper.classList.remove('portfolio-page__wrapper--active');
        portfolioPage.classList.remove('portfolio-page__company--active');

        function none() {
          portfolioBox.classList.remove('portfolio-page__box--active');
        }

        setTimeout(none, 600);
      }
    });
  }

})();
