'use strict';

(function () {

  const DESKTOP_WIDTH = 1023;
  var feedbackLogo = document.querySelector('.feedback__box-logotypes');
  var feedbackActive = document.querySelector('.feedback__box-info--active')

  if (feedbackLogo && window.innerWidth > DESKTOP_WIDTH) {

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
        feedbackBoxInfo[0].classList.add('feedback__box-info--active');
        feedbackArticle[0].classList.add('feedback-active');
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

  jQuery(function($){
    $(document).mouseup(function (e){
      var div = $(".feedback__box-info--active");
      if (!div.is(e.target)
        && div.has(e.target).length === 0) {
        jQuery("iframe").each(function () {
          jQuery(this)[0].contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*')
        });
      }
    });
  });

})();
