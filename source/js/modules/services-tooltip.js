'use strict';

(function () {

  let boxMore = document.querySelectorAll('.services__text-box');
  let btnMore = document.querySelectorAll('.services__btn-tooltip');

  // btnMore.forEach(function(btn) {
  //   btn.addEventListener('click', function(evt) {
  //     boxMore.forEach(function(box, i) {
  //       box.classList.toggle('services__text-box--active', (evt.target == btnMore[i]));
  //     });
  //   });
  // });

  // btnMore.forEach((btn) => {
  //   btn.addEventListener('click', function() {
  //     boxMore.forEach((box) => {
  //       if (box != this.parentElement) { box.classList.remove('services__text-box--active'); }
  //     });
  //     this.parentElement.classList.toggle('services__text-box--active');
  //   });
  // });

  $(function() {

    $(".services__btn-tooltip").click(function() {
      $(this).next().toggleClass("services__text-box--active");
      $(this).toggleClass("active-tab");

      $(".services__text-box").not($(this).next()).removeClass("services__text-box--active");
      $(".services__btn-tooltip").not(jQuery(this)).removeClass("active-tab");
    });
  }); // jQuery load


})();
