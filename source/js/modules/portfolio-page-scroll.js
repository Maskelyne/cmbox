'use strict';

(function () {

  var portfolioPage = document.querySelector('.portfolio-page__company');

  if (portfolioPage) {
    var portfolioPageBox = document.querySelector('.portfolio-page');
    var portfolioBox = document.querySelector('.portfolio-page__box');
    var portfolioWrapper = document.querySelector('.portfolio-page__wrapper');
    var portfolioBoxImage = document.querySelector('.portfolio-page__box-image');
    var main = document.querySelector('.box-closed');
    var text = document.querySelector('.text-closed');

    if (window.innerWidth > 1023) {

      document.body.style.overflow = 'hidden';

      window.addEventListener('wheel', function (evt) {

        if (evt.deltaY > 0 && window.innerWidth > 1200) {
          portfolioWrapper.classList.add('portfolio-page__wrapper--active');
          portfolioPage.classList.add('portfolio-page__company--active');
          portfolioBox.style.transform = 'translate(-54%, 10%)';
          portfolioBoxImage.style.transform = 'translate(0%, 0%)';
          setTimeout(show, 400);
          // setTimeout(grid, 500);
        } else if (evt.deltaY > 0 && window.innerWidth > 1023) {
          portfolioWrapper.classList.add('portfolio-page__wrapper--active');
          portfolioPage.classList.add('portfolio-page__company--active');
          portfolioBox.style.transform = 'translate(0%, 10%)';
          portfolioBoxImage.style.transform = 'translate(0, 0)';
          setTimeout(show, 400);
        } else if (portfolioPage.scrollTop === 0) {
          portfolioWrapper.classList.remove('portfolio-page__wrapper--active');
          portfolioPage.classList.remove('portfolio-page__company--active');
          portfolioBox.style.transform = '';
          portfolioBoxImage.style.transform = '';
          setTimeout(none, 500);
        }

        function none() {
          portfolioBox.classList.remove('portfolio-page__box--active');
          portfolioPageBox.style.display = '';
        }

        function show() {
          portfolioBox.classList.add('portfolio-page__box--active');
        }

        function grid() {
          portfolioPageBox.style.display = 'grid';
          portfolioPageBox.style.gridTemplateColumns = '30% auto';
          portfolioBoxImage.style.transform = 'translate(0%, 0)';
        }

      });

      main.addEventListener('click', function (evt) {

        if (evt.target === main) {

          portfolioWrapper.classList.remove('portfolio-page__wrapper--active');
          portfolioPage.classList.remove('portfolio-page__company--active');
          portfolioBox.classList.remove('portfolio-page__box--active');
          portfolioBox.style.transform = '';

        }

      });

      text.addEventListener('click', function (evt) {

        if (evt.target === text) {

          portfolioWrapper.classList.remove('portfolio-page__wrapper--active');
          portfolioPage.classList.remove('portfolio-page__company--active');
          portfolioBox.classList.remove('portfolio-page__box--active');
          portfolioBox.style.transform = '';

        }

      });
    }
  }

})();
