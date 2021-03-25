'use strict';

$(function () {

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
  $("#user_phone-question").keyup(function () {
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

    $('#form-portfolio').validate({
      messages: {
        name: 'Введите ваше имя',
        phone: 'Введите ваш номер телефона',
      },
      errorElement: 'span',
    });

    $('#form-order').validate({
      messages: {
        name: 'Введите ваше имя',
        phone: 'Введите ваш номер телефона',
      },
      errorElement: 'span',
    });

    $('#form-analysis').validate({
      messages: {
        name: 'Введите ваше имя',
        phone: 'Введите ваш номер телефона',
      },
      errorElement: 'span',
    });

    $('#form-question').validate({
      messages: {
        phone: 'Введите ваш номер телефона',
      },
      errorElement: 'span',
    });

    $('#form-main').validate({
      messages: {
        phone: 'Введите ваш номер телефона',
      },
      errorElement: 'span',
    });

  var clipboard = new ClipboardJS('.user-button');
  var text = document.querySelector('.clip-text');
  clipboard.on('success', function(e) {
    text.style.display = 'block';
    setTimeout(clipText, 5000);
    e.clearSelection();
  });

  var clipText = function () {
    text.style.display = '';
  };

  // var checkCookies = function () {
  //   var cookieDate = localStorage.getItem('cookieDate');
  //   var cookieNotification = document.getElementById('cookie__notification');
  //   var cookieBtn = cookieNotification.querySelector('.cookie__accept');
  //   var cookieBtnClosed = cookieNotification.querySelector('.cookie__btn');
  //
  //   // Если записи про кукисы нет или она просрочена на 1 год, то показываем информацию про кукисы
  //   if (!cookieDate || (+cookieDate + 604800) < Date.now()) {
  //     cookieNotification.classList.add('show');
  //   }
  //
  //   // При клике на кнопку, в локальное хранилище записывается текущая дата в системе UNIX
  //   cookieBtn.addEventListener('click', function () {
  //     localStorage.setItem('cookieDate', Date.now());
  //     cookieNotification.classList.remove('show');
  //   });
  //
  //   cookieBtnClosed.addEventListener('click', function () {
  //     cookieNotification.classList.remove('show');
  //   });
  // };
  //
  // checkCookies();

  // document.ondragstart = test;
  // //запрет на перетаскивание
  // document.onselectstart = test;
  // //запрет на выделение элементов страницы
  // document.oncontextmenu = test;
  // //запрет на выведение контекстного меню
  // function test() {
  //   return false;
  // }

  var maskList = $.masksSort($.masksLoad("assets/json/phone-codes.json"), ['#'], /[0-9]|#/, "mask");
  var maskOpts = {
    inputmask: {
      definitions: {
        '#': {
          validator: "[0-9]",
          cardinality: 1
        }
      },
      showMaskOnHover: false,
      autoUnmask: true,
      clearMaskOnLostFocus: true
    },
    match: /[0-9]/,
    replace: '#',
    list: maskList,
    listKey: "mask",
    onMaskChange: function(maskObj, determined) {}
  };

  $('#user_phone').change(function () {
    $('#user_phone').inputmask('remove');
    $('#user_phone').inputmasks(maskOpts);
  });

  $('#user_phone').change();

  $('#user_phone2').change(function () {
    $('#user_phone2').inputmask('remove');
    $('#user_phone2').inputmasks(maskOpts);
  });

  $('#user_phone2').change();

  $('#user_phone-question').change(function () {
    $('#user_phone-question').inputmask('remove');
    $('#user_phone-question').inputmasks(maskOpts);
  });

  $('#user_phone-question').change();

});

( function() {
  var youtube = document.querySelectorAll( ".youtube" );
  for (var i = 0; i < youtube.length; i++) {
    var source = "https://img.youtube.com/vi/"+ youtube[i].dataset.embed +"/sddefault.jpg";
    var image = new Image();
    image.src = source;
    image.addEventListener( "load", function() {
      youtube[ i ].appendChild( image );
    }( i ) );

    youtube[i].addEventListener( "click", function() {
      var iframe = document.createElement( "iframe" );
      iframe.setAttribute( "frameborder", "0" );
      iframe.setAttribute( "allowfullscreen", "" );
      iframe.setAttribute( "src", "https://www.youtube.com/embed/"+ this.dataset.embed +"?rel=0&showinfo=0&enablejsapi=1" );
      this.innerHTML = "";
      this.appendChild( iframe );
    } );
  };
} )();
