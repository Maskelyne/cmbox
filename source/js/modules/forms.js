'use strict';

(function () {

  $(document).on('af_complete', function(event, response) {

    var modalConsultation = document.querySelector('.modal-consultation');
    var modalThanks = document.querySelector('.modal-thanks');
    var form = response.form;

    if (form.attr('id') === 'form') {

      modalThanks.classList.add('modal-active');
      modalConsultation.classList.remove('modal-active');
      document.body.style.overflow = '';
      response.message = '';

    } else if (form.attr('id') === 'form_main') {
      modalThanks.classList.add('modal-active');
      modalConsultation.classList.remove('modal-active');
      document.body.style.overflow = '';
      response.message = '';
    }

    else {
      console.log(response);
    }

  });

})();
