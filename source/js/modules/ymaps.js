"use strict";

(function () {

  // Функция ymaps.ready() будет вызвана, когда
  // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
  ymaps.ready(init);

    function init () {
      // Создание карты.
      var myMap = new ymaps.Map("map", {
        // Координаты центра карты.
        // Порядок по умолчанию: «широта, долгота».
        // Чтобы не определять координаты центра карты вручную,
        // воспользуйтесь инструментом Определение координат.
        center: [53.945968, 27.637272],
        // Уровень масштабирования. Допустимые значения:
        // от 0 (весь мир) до 19.
        zoom: 7,
      }),
        myGeoObject = new ymaps.GeoObject({
          // Описание геометрии.
          geometry: {
            type: "Point",
            coordinates: [53.945968, 27.637272]
          },
          // Свойства.
          properties: {
            // Контент метки.
            iconContent: 'Я тащусь',
            hintContent: 'Ну давай уже тащи'
          }
        }, {
          // Опции.
          // Иконка метки будет растягиваться под размер ее содержимого.
          preset: 'islands#blackStretchyIcon',
          // Метку можно перемещать.
          draggable: true
        });
      myMap.geoObjects
        .add(new ymaps.Placemark([53.945968, 27.637272], {
          balloonContent: 'цвет <strong>носика Гены</strong>',
          iconCaption: 'Очень длиннный, но невероятно интересный текст'
        }, {
          preset: 'islands#redDotIconWithCaption'
        }));
    }

})();
