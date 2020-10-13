'use strict';

(function () {

  var portfolioPage = document.querySelector('.portfolio-page__company');

  if (portfolioPage) {
    var portfolioBox = document.querySelector('.portfolio-page__box');
    var portfolioWrapper = document.querySelector('.portfolio-page__wrapper');
    var main = document.querySelector('.box-closed');
    var text = document.querySelector('.text-closed');

    if (window.innerWidth > 1023) {

      document.body.style.overflow = 'hidden';

      window.addEventListener('wheel', function (evt) {
        // console.log(evt.deltaY);

        if (evt.deltaY > 0 && window.innerWidth > 1200) {
          portfolioWrapper.classList.add('portfolio-page__wrapper--active');
          portfolioPage.classList.add('portfolio-page__company--active');
          portfolioBox.style.transform = 'translate(-10%, 10%)';
          setTimeout(show, 400);
        } else if (evt.deltaY > 0 && window.innerWidth > 1023) {
          portfolioWrapper.classList.add('portfolio-page__wrapper--active');
          portfolioPage.classList.add('portfolio-page__company--active');
          portfolioBox.style.transform = 'translate(0%, 10%)';
          setTimeout(show, 400);
        } else if (portfolioPage.scrollTop === 0) {
          portfolioWrapper.classList.remove('portfolio-page__wrapper--active');
          portfolioPage.classList.remove('portfolio-page__company--active');
          portfolioBox.style.transform = '';
          setTimeout(none, 500);
        }

        function none() {
          portfolioBox.classList.remove('portfolio-page__box--active');
        }

        function show() {
          portfolioBox.classList.add('portfolio-page__box--active');
        }
        // } else if (window.innerWidth > 1023) {
        //   portfolioBox.style.transform = 'translate(0%, 10%)';
        // } else {
        //   portfolioBox.style.transform = '';
        // }

        // portfolioWrapper.classList.add('portfolio-page__wrapper--active');
        // portfolioPage.classList.add('portfolio-page__company--active');
        //

      });

      // portfolioPage.addEventListener('scroll', function () {
      //   if (portfolioPage.scrollTop === 0) {
      //
      //     if (window.innerWidth > 1200) {
      //       portfolioBox.style.transform = 'translate(180%, -150%)';
      //     } else if (window.innerWidth > 1023) {
      //       portfolioBox.style.transform = 'translate(153%, -130%)';
      //     } else {
      //       portfolioBox.style.transform = '';
      //     }
      //
      //     portfolioWrapper.classList.remove('portfolio-page__wrapper--active');
      //     portfolioPage.classList.remove('portfolio-page__company--active');
      //
      //     // function none() {
      //     //   portfolioBox.classList.remove('portfolio-page__box--active');
      //     // }
      //     //
      //     // setTimeout(none, 500);
      //   }
      //
      // });

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
