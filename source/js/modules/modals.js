'use strict';

(function () {

  const KEY_CODE = 27;

  var overlayModal = document.querySelector('.modal');
  var modalConsultation = document.querySelector('.modal-consultation');
  var modalThanks = document.querySelector('.modal-thanks');
  var modalConsultationBtn = document.querySelector('.button');
  var modalClose = document.querySelectorAll('.modal__btn-closed');

  if (modalThanks) {

    modalConsultationBtn.addEventListener('click', function (evt) {
      evt.preventDefault();

      modalConsultation.classList.add('modal-active');
      document.body.style.overflow = 'hidden';
    });

    for (var i = 0; i < modalClose.length; i++) {
      modalClose[i].addEventListener('click', function (evt) {
        evt.preventDefault();

        modalThanks.classList.remove('modal-active');
        modalConsultation.classList.remove('modal-active');
        document.body.style.overflow = '';
      });
    }

    window.addEventListener(`keydown`, function (evt) {

      if (evt.keyCode === KEY_CODE) {
        evt.preventDefault();

        modalConsultation.classList.contains(`modal-active`);
        modalConsultation.classList.remove(`modal-active`);
        modalThanks.classList.contains('modal-active');
        modalThanks.classList.remove('modal-active');
        document.body.style.overflow = ``;

      }

    });

    overlayModal.addEventListener(`click`, function (evt) {

      if (evt.target === overlayModal) {

        modalConsultation.classList.remove(`modal-active`);
        modalConsultation.classList.add(`modal-closed`);
        document.body.style.overflow = ``;

      }

    });

    modalThanks.addEventListener('click', function (evt) {

      if (evt.target === modalThanks) {
        modalThanks.classList.contains('modal-active');
        modalThanks.classList.remove('modal-active');
        document.body.style.overflow = ``;
      }

    })

  }

})();
