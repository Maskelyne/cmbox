'use strict';

(function () {

  var blogsContainer = document.querySelector('.blog');

  if (blogsContainer) {

    var blogCards = document.querySelectorAll('.blog__card-box');

    function rotate(evt) {
      var blogItem = this.querySelector('.blog__card-text');
      var setHeight = blogItem.offsetHeight / 2;
      var setWidth = blogItem.offsetWidth / 2;

      blogItem.style.transform = 'rotateX(' + -(evt.offsetY - setHeight) / 15 + 'deg)' +
        'rotateY(' + (evt.offsetX - setWidth) / 15 + 'deg';
    }

    function rotateNone() {
      var cardItem = this.querySelector('.blog__card-text');

      cardItem.style.transform = 'rotateX(0deg)' + 'rotateY(0deg)';
    }

    for (var i = 0; i < blogCards.length; i++) {
      var item = blogCards[i];
      item.addEventListener('mousemove', rotate);
      item.addEventListener('mouseout', rotateNone);
    }
  }

})();