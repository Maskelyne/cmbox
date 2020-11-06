'use strict';

(function () {

  var portfolioPage = document.querySelector('.portfolio-page__company');

  if (portfolioPage) {
    var portfolioBox = document.querySelector('.portfolio-page__box');
    var portfolioBoxAdd = document.querySelector('.portfolio-page__box-add');
    var portfolioWrapper = document.querySelector('.portfolio-page__wrapper');
    var portfolioBoxImage = document.querySelector('.portfolio-page__box-image');
    var main = document.querySelector('.box-closed');
    var text = document.querySelector('.text-closed');

    if (window.innerWidth > 1023) {

      document.body.style.overflow = 'hidden';

      var open = function () {
        portfolioPage.classList.add('portfolio-page__company--active');
        portfolioBoxAdd.classList.add('portfolio-page__box-add--active');
      };

      var closed = function () {
        portfolioPage.classList.remove('portfolio-page__company--active');
        portfolioBoxAdd.classList.remove('portfolio-page__box-add--active');
      }

      window.addEventListener('wheel', function (evt) {
        if (evt.deltaY > 0 && window.innerWidth > 1200) {
          open();
        } else if (portfolioPage.scrollTop === 0) {
          closed();
        }

      });


      main.addEventListener('click', function (evt) {

        if (evt.target === main) {

          portfolioPage.classList.remove('portfolio-page__company--active');
          portfolioBoxAdd.classList.remove('portfolio-page__box-add--active');

        }

      });

      text.addEventListener('click', function (evt) {

        if (evt.target === text) {

          portfolioPage.classList.remove('portfolio-page__company--active');
          portfolioBoxAdd.classList.remove('portfolio-page__box-add--active');

        }

      });
    }
  }

})();
