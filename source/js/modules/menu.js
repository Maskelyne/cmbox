'use strict';
(function () {
  var title = Array.from(document.getElementsByClassName('project__posts'));

  var accordion = function (element) {
    var list = element.nextElementSibling;
    if (list.classList.contains('project__names--open')) {
      element.classList.toggle('project__posts--open');
      list.classList.toggle('project__names--open');
    } else {
      title.forEach(function (it) {
        var openList = it.nextElementSibling;
        if (openList.classList.contains('project__names--open')) {
          it.classList.remove('project__posts--open');
          openList.classList.remove('project__names--open');
        }
      });
      element.classList.toggle('project__posts--open');
      list.classList.toggle('project__names--open');
    }
  };

  if (title) {
    title.forEach(function (item) {
      item.addEventListener('click', function () {
        accordion(item);
      });
    });
  }
})();
