'use strict';

(function () {

  var portfolioPage = document.querySelector('.portfolio-page__company');

  if (portfolioPage) {
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
          portfolioBox.style.opacity = '0';
          portfolioBoxImage.style.transform = 'translate(31.5%, -210%)';
          setTimeout(show, 800);
          setTimeout(none, 1000);
        } else if (evt.deltaY > 0 && window.innerWidth > 1023) {
          portfolioWrapper.classList.add('portfolio-page__wrapper--active');
          portfolioPage.classList.add('portfolio-page__company--active');
          portfolioBoxImage.style.transform = 'translate(31.5%, -210%)';
          setTimeout(show, 800);
        } else if (portfolioPage.scrollTop === 0) {
          portfolioWrapper.classList.remove('portfolio-page__wrapper--active');
          portfolioPage.classList.remove('portfolio-page__company--active');
          portfolioBox.style.transform = '';
          portfolioBox.classList.remove('portfolio-page__box--active');
          setTimeout(opacity, 1300);
          setTimeout(gh, 1000);
        }
      });

      main.addEventListener('click', function (evt) {

        if (evt.target === main) {

          portfolioWrapper.classList.remove('portfolio-page__wrapper--active');
          portfolioPage.classList.remove('portfolio-page__company--active');
          portfolioBox.classList.remove('portfolio-page__box--active');
          portfolioBox.style.transform = '';
          setTimeout(opacity, 800);

        }

      });

      text.addEventListener('click', function (evt) {

        if (evt.target === text) {

          portfolioWrapper.classList.remove('portfolio-page__wrapper--active');
          portfolioPage.classList.remove('portfolio-page__company--active');
          portfolioBox.classList.remove('portfolio-page__box--active');
          portfolioBox.style.transform = '';
          setTimeout(opacity, 800);

        }

      });
    }
  }

  function gh() {
    portfolioBoxImage.style.transform = '';
    portfolioBoxImage.style.display = '';
    // portfolioWrapper.style.maxWidth = '';
  }

  function none() {
    portfolioBoxImage.style.display = 'none';
    portfolioWrapper.style.maxWidth = '100%';
  }

  function show() {
    portfolioBox.classList.add('portfolio-page__box--active');
  }

  function opacity() {
    portfolioBox.style.opacity = '1';
  }

})();
