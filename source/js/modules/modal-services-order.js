'use strict';

(function () {

  const KEY_CODE = 27;

  var overlayModal = document.querySelector('.modal');
  var servicesModal = document.querySelector('.modal-services-order');

  if (servicesModal) {

    var modalServicesBtn = document.querySelectorAll('.services-modal-js');
    var modalClose = document.querySelectorAll('.modal__btn-closed');

    for(var y = 0; y < modalServicesBtn.length; y++) {

      modalServicesBtn[y].addEventListener('click', function (evt) {
        evt.preventDefault();

        servicesModal.classList.add('modal-active');
        document.body.style.overflow = 'hidden';
      });

    }

    for (var i = 0; i < modalClose.length; i++) {
      modalClose[i].addEventListener('click', function (evt) {
        evt.preventDefault();

        servicesModal.classList.remove('modal-active');
        document.body.style.overflow = '';
      });
    }

    window.addEventListener(`keydown`, function (evt) {

      if (evt.keyCode === KEY_CODE) {
        evt.preventDefault();

        servicesModal.classList.contains(`modal-active`);
        servicesModal.classList.remove(`modal-active`);
        document.body.style.overflow = ``;

      }

    });

    overlayModal.addEventListener(`click`, function (evt) {

      if (evt.target === overlayModal) {

        servicesModal.classList.remove(`modal-active`);
        document.body.style.overflow = ``;

      }

    });

  }

})();
