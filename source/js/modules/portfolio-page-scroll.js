'use strict';

(function () {

  var portfolioPage = document.querySelector('.portfolio-page__company');

  if (portfolioPage) {
    var portfolioBox = document.querySelector('.portfolio-page__box');
    var portfolioWrapper = document.querySelector('.portfolio-page__wrapper');

    if (window.innerWidth > 1023) {

      document.body.style.overflow = 'hidden';

      window.addEventListener('wheel', function () {

        if (window.innerWidth > 1200) {
          portfolioBox.style.transform = 'translate(-10%, 10%)';
        } else if (window.innerWidth > 1023) {
          portfolioBox.style.transform = 'translate(0%, 10%)';
        } else {
          portfolioBox.style.transform = '';
        }

        portfolioWrapper.classList.add('portfolio-page__wrapper--active');
        portfolioPage.classList.add('portfolio-page__company--active');

        function show() {
          portfolioBox.classList.add('portfolio-page__box--active');
        }

        setTimeout(show, 400);
      });

      portfolioPage.addEventListener('scroll', function () {
        if (portfolioPage.scrollTop === 0) {

          if (window.innerWidth > 1200) {
            portfolioBox.style.transform = 'translate(180%, -150%)';
          } else if (window.innerWidth > 1023) {
            portfolioBox.style.transform = 'translate(153%, -130%)';
          } else {
            portfolioBox.style.transform = '';
          }

          portfolioWrapper.classList.remove('portfolio-page__wrapper--active');
          portfolioPage.classList.remove('portfolio-page__company--active');

          function none() {
            portfolioBox.classList.remove('portfolio-page__box--active');
          }

          setTimeout(none, 500);
        }

      });
    }
  }

})();
