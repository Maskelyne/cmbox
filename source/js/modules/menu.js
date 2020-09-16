'use strict';

(function () {

  var cards = document.querySelectorAll(".portfolio__box-card");

  function rotate (evt) {
    var cardItem = this.querySelector('.portfolio__card-perspective');
    var halfHeight = cardItem.offsetHeight / 2;
    var halfWidth = cardItem.offsetWidth / 2;

      cardItem.style.transform = 'rotateX(' + -(evt.offsetY - halfHeight) / 7 + 'deg)' +
        'rotateY(' + (evt.offsetX - halfWidth) / 7 + 'deg';
  }

  function rotateNone () {
    var cardItem = this.querySelector('.portfolio__card-perspective');

    cardItem.style.transform = 'rotateX(0deg)' + 'rotateY(0deg)';
  }

  for (var i = 0; i < cards.length; i++) {
    var card = cards[i];
    card.addEventListener('mousemove', rotate);
    card.addEventListener('mouseout', rotateNone);
  }

})();
