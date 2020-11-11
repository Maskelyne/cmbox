'use strict';

(function () {

  var feedbackLogo = document.querySelector('.feedback__box-logotypes');

  if (feedbackLogo) {
    const DESKTOP_WIDTH = 1023;

    if (window.innerWidth > DESKTOP_WIDTH) {

      var feedbackBoxInfo = document.querySelectorAll('.feedback__box-info a');
      var feedbackArticle = document.querySelectorAll('.feedback__box article');

      var removeActive = function (array, activeClass) {
        array.forEach(function (item) {
          item.classList.remove(activeClass);
        });
        return;
      };

      if (feedbackBoxInfo) {
        feedbackBoxInfo.forEach(function (item, i) {
          item.addEventListener('click', function (evt) {
            evt.preventDefault();

            removeActive(feedbackBoxInfo, 'feedback__box-info--active');
            removeActive(feedbackArticle, 'feedback-active');
            feedbackBoxInfo[i].classList.add('feedback__box-info--active');
            feedbackArticle[i].classList.add('feedback-active');
          });
        });
      }
    }
  }

})();
