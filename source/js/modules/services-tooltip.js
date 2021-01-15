'use strict';

(function () {

  $('.services__btn-tooltip').on('click', function () {
    if ($(this).hasClass('services__btn-tooltip--active')) {
      $(this).removeClass('services__btn-tooltip--active');

    } else {
      $(".services__btn-tooltip").removeClass('services__btn-tooltip--active');
      $(this).addClass('services__btn-tooltip--active');
    }
    if ($(this).parent().parent().parent().find('.services__text-box').hasClass('services__text-box--active')) {
      $(this).parent().parent().parent().find('.services__text-box').removeClass('services__text-box--active');
    } else {
      $('.services__text-box').removeClass('services__text-box--active');
      $(this).parent().parent().parent().find('.services__text-box').addClass('services__text-box--active');
    }
  });

  $('.services__btn-more').on('click', function () {
    if ($(this).hasClass('services__btn-more--active')) {
      $(this).removeClass('services__btn-more--active');

    } else {
      $(".services__btn-more").removeClass('services__btn-more--active');
      $(this).addClass('services__btn-more--active');
    }
    if ($(this).parent().find('.services__price-wrap').hasClass('services__price-wrap--active')) {
      $(this).parent().find('.services__price-wrap').removeClass('services__price-wrap--active');
    } else {
      $('.services__price-wrap').removeClass('services__price-wrap--active');
      $(this).parent().find('.services__price-wrap').addClass('services__price-wrap--active');
    }
  });

})();
