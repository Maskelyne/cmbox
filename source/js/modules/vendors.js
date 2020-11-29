'use strict';

$(function () {

  jQuery(function ($) {
    $("#user_phone").mask("+375 (99) 999-99-99",{autoclear: false});
    $("#user_phone2").mask("+375 (99) 999-99-99",{autoclear: false});
  });

  $("#user_name").keyup(function () {
    if ($(this).val()) {
      $(this).addClass("not-empty");
    } else {
      $(this).removeClass("not-empty");
    }
  });

  $("#user_name2").keyup(function () {
    if ($(this).val()) {
      $(this).addClass("not-empty");
    } else {
      $(this).removeClass("not-empty");
    }
  });

  $("#user_company").keyup(function () {
    if ($(this).val()) {
      $(this).addClass("not-empty");
    } else {
      $(this).removeClass("not-empty");
    }
  });

  $("#user_phone").keyup(function () {
    if ($(this).val()) {
      $(this).addClass("not-empty");
    } else {
      $(this).removeClass("not-empty");
    }
  });

  $("#user_phone2").keyup(function () {
    if ($(this).val()) {
      $(this).addClass("not-empty");
    } else {
      $(this).removeClass("not-empty");
    }
  });

  $("#user_email").keyup(function () {
    if ($(this).val()) {
      $(this).addClass("not-empty");
    } else {
      $(this).removeClass("not-empty");
    }
  });

  $("#user_comment").keyup(function () {
    if ($(this).val()) {
      $(this).addClass('not-empty');
    } else {
      $(this).removeClass('not-empty');
    }
  });

  $("#user_comments").keyup(function () {
    if ($(this).val()) {
      $(this).addClass('not-empty');
    } else {
      $(this).removeClass('not-empty');
    }
  });

  $("#user_position").keyup(function () {
    if ($(this).val()) {
      $(this).addClass('not-empty');
    } else {
      $(this).removeClass('not-empty');
    }
  });

  $("#user_site").keyup(function () {
    if ($(this).val()) {
      $(this).addClass('not-empty');
    } else {
      $(this).removeClass('not-empty');
    }
  });

  $('.lazyYT').lazyYT();

  $('[data-fancybox="photo"]').fancybox({
    buttons: [
      'slideShow',
      'share',
      'zoom',
      'fullScreen',
      'close'
    ],
  });

    $('form').validate({
      messages: {
        name: 'Введите ваше имя',
        phone: 'Введите ваш номер телефона'
      },
      errorElement: "span",
    });

});
