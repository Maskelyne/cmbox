// jQuery(document).ready(function () {
//   $('.rf').each(function() {
//
//     var item = $(this),
//
//       btn = item.find('.btn');
//
//     function checkInput() {
//
//       item.find('input[type=tel]').each(function() {
//
//         if ($(this).val() != '') {
//           // Если поле не пустое удаляем класс-указание
//           $(this).removeClass('error');
//         } else {
//           // Если поле пустое добавляем класс-указание
//           $(this).addClass('error');
//           $('.error_name').show();
//
//         }
//       });
//
//     }
//
//     btn.click(function() {
//       checkInput();
//       var sizeEmpty = item.find('.error:visible').length;
//       if (sizeEmpty > 0) {
//         return false;
//       } else {
//         item.submit();
//         $.fancybox.close();
//       }
//     });
//
//   });
//
//   $('select').change(function() {
//     if ($(this).val() == '') {
//       $(this).parents('.form-group').removeClass('selected');
//
//     } else {
//       $(this).parents('.form-group').addClass('selected');
//       $(this).parents('.form-group').removeClass('error');
//     }
//   });
// })
