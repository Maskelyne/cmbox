"use strict";

(function () {

  ymaps.ready(['AnimatedLine']).then(init);

  function init(ymaps) {
    var myMap = new ymaps.Map("map", {
      center: [53.94584848265721,27.637384904411103],
      zoom: 14
    }, {
      searchControlProvider: 'yandex#search'
    }),
    myGeoObject = new ymaps.GeoObject({
      geometry: {
        type: "Point",
        coordinates: [53.94584848265721,27.637384904411103]
      },
      properties: {
        iconContent: '<strong style="color: #C1122C;">Creative Marketing <span style="color: #0A3D76;">box</span></strong>',
      }
    }, {
      preset: 'islands#nightStretchyIcon'
    });
    myMap.behaviors.disable('scrollZoom');
    myMap.geoObjects
      .add(myGeoObject);

    var firstPoint = new ymaps.Placemark([53.934553754850974,27.65181604365534], {}, {
      preset: 'islands#redRapidTransitCircleIcon'
    });

    var secondPoint = new ymaps.Placemark([53.945866374773246,27.637416782765623], {
      iconContent: '<strong style="color: #C1122C;">Creative Marketing <span style="color: #0A3D76;">box</span></strong>'
    }, {
      preset: 'islands#nightStretchyIcon'
    });

    var firstPoint2 = new ymaps.Placemark([53.93817995680188,27.67426527836589], {}, {
      preset: 'islands#redDotIconWithCaption'
    });

    var secondPoint2 = new ymaps.Placemark([53.945866374773246,27.637416782765623], {
      iconContent: '<strong style="color: #C1122C;">Creative Marketing <span style="color: #0A3D76;">box</span></strong>'
    }, {
      preset: 'islands#nightStretchyIcon'
    });

    var firstPoint3 = new ymaps.Placemark([53.96140071080269,27.622081066546055], {}, {
      preset: 'islands#redDotIconWithCaption'
    });

    var secondPoint3 = new ymaps.Placemark([53.94582563330561,27.63740142093737], {
      iconContent: '<strong style="color: #C1122C;">Creative Marketing <span style="color: #0A3D76;">box</span></strong>'
    }, {
      preset: 'islands#nightStretchyIcon'
    });

    var firstNumber = [
      [53.934553754850974,27.65181604365534],
      [53.935022239925225,27.653554115096988],
      [53.93566165021469,27.65593591670221],
      [53.93721898458482,27.654637727539008],
      [53.93768743959612,27.65443387965388],
      [53.93841543351884,27.6542407606048],
      [53.94018155704271,27.653811607162435],
      [53.94097280665829,27.653532657424883],
      [53.94133994135903,27.653210792343096],
      [53.941669093848326,27.652738723556467],
      [53.942150158177775,27.651976976196234],
      [53.94225143416855,27.651569280425974],
      [53.94225143416855,27.65118304232782],
      [53.941789360453186,27.6470524404449],
      [53.941764041196905,27.64562550524896],
      [53.94193494587724,27.644595536987257],
      [53.94240334769153,27.642954025070136],
      [53.94409334814974,27.642621431152296],
      [53.94521364761771,27.6420849893493],
      [53.94704358753966,27.6411933330586],
      [53.94752458960153,27.64010972061658],
      [53.94717016756995,27.639809313206896],
      [53.94704358753966,27.63896173515819],
      [53.94628409925314,27.63833946266675],
      [53.94606257921905,27.637931766896486],
      [53.945866374773246,27.637416782765623]
    ];
    var secondNumber = [
      [53.93817995680188,27.67426527836589],
      [53.941446295311565,27.67293490269448],
      [53.94183874505217,27.673128021743555],
      [53.941952681378915,27.673600090530183],
      [53.9422248613384,27.675617111709382],
      [53.94219321259758,27.675853146102696],
      [53.94202230898024,27.676046265151772],
      [53.941819755634015,27.67593897679117],
      [53.941667839975906,27.675724400069985],
      [53.93979265552001,27.669670215491767],
      [53.93577916771496,27.655797830466724],
      [53.93727319272114,27.654585471991997],
      [53.93781761220139,27.65439235294292],
      [53.94030144262354,27.653776773930964],
      [53.94106104035099,27.653454908849177],
      [53.9417383366061,27.652607330800475],
      [53.94218775138836,27.651856312276294],
      [53.94225737859551,27.651191124440615],
      [53.94178897513459,27.647060522557666],
      [53.94175931539808,27.645550860364974],
      [53.94195553925282,27.6444565190869],
      [53.94239229224572,27.64294375320249],
      [53.94424052941744,27.64255751510436],
      [53.94703804697479,27.641216410596897],
      [53.94739247013431,27.640519036253032],
      [53.94751272016169,27.640089882810667],
      [53.94716462702198,27.63982166190917],
      [53.94703804697479,27.638974083860465],
      [53.946284887714214,27.638341082532943],
      [53.94606969684447,27.637954844434812],
      [53.94583551727765,27.637386216123634]
    ];
    var thirdNumber = [
      [53.96140071080269,27.622081066546055],
      [53.960654139063394,27.624205376085857],
      [53.960206823799105,27.624628087049636],
      [53.95991578058212,27.624635822466246],
      [53.95807456857986,27.62364876954875],
      [53.955935291588595,27.621254597633715],
      [53.95572658677722,27.621685823360632],
      [53.95542285667201,27.622855266491122],
      [53.95525833527024,27.62445386306401],
      [53.955112796563505,27.62577350989934],
      [53.95449266939729,27.62776907340641],
      [53.95326504339508,27.6310628260767],
      [53.952050037579944,27.63361628905887],
      [53.95118305856242,27.635547479549594],
      [53.95048693091589,27.63790782348271],
      [53.9499236918216,27.63984974280949],
      [53.94948701805104,27.640525659481245],
      [53.948854149361196,27.641083558956346],
      [53.94753902043035,27.64115651355821],
      [53.947342822962064,27.640641529427374],
      [53.9475200336191,27.640126545296507],
      [53.947165611548606,27.639793951378643],
      [53.947032702492095,27.63891418682178],
      [53.94630664947877,27.638377745018783],
      [53.946072471248506,27.637894947396102],
      [53.94582563330561,27.63740142093737]
    ];

    var firstAnimatedLine = new ymaps.AnimatedLine(firstNumber, {}, {
      strokeColor: "#0A3D76",
      strokeWidth: 5,
      animationTime: 1000,
    });

    var secondAnimatedLine = new ymaps.AnimatedLine(secondNumber, {}, {
      strokeColor: "#0A3D76",
      strokeWidth: 5,
      animationTime: 1000
    });

    var thirdAnimatedLine = new ymaps.AnimatedLine(thirdNumber, {}, {
      strokeColor: "#0A3D76",
      strokeWidth: 5,
      animationTime: 1000
    });

    var btnVostok = document.querySelector('#btn-vostok');
    var btnMkad = document.querySelector('#btn-mkad');
    var btnLogoisk = document.querySelector('#btn-logoisk');
    var map = document.querySelector('.map');

    var firstLine = function () {
      map.classList.add('map--color-none');
      btnVostok.classList.add('btn-active');
      btnMkad.classList.remove('btn-active');
      btnLogoisk.classList.remove('btn-active');

      function setCenter () {
        myMap.setCenter([53.9415124518121,27.6444565190869]);
      }
      myMap.geoObjects.add(firstAnimatedLine);
      function playAnimation() {
        secondAnimatedLine.reset();
        thirdAnimatedLine.reset();
        myMap.geoObjects.remove(myGeoObject);
        myMap.geoObjects.remove(firstPoint2);
        myMap.geoObjects.remove(firstPoint3);
        myMap.geoObjects.remove(secondPoint2);
        myMap.geoObjects.remove(secondPoint3);
        myMap.geoObjects.add(firstPoint);
        firstAnimatedLine.animate()
          .then(function() {
            myMap.geoObjects.add(secondPoint);
          });
      }
      playAnimation();
      setCenter();
    };

    var secondLine = function () {
      map.classList.add('map--color-none');
      btnVostok.classList.remove('btn-active');
      btnLogoisk.classList.remove('btn-active');
      btnMkad.classList.add('btn-active');

      function setCenter () {
        myMap.setCenter([53.94224670842518,27.654842032392573]);
      }
      myMap.geoObjects.add(secondAnimatedLine);
      function playAnimation() {
        firstAnimatedLine.reset();
        thirdAnimatedLine.reset();
        myMap.geoObjects.remove(myGeoObject);
        myMap.geoObjects.remove(firstPoint);
        myMap.geoObjects.remove(firstPoint3);
        myMap.geoObjects.remove(secondPoint);
        myMap.geoObjects.remove(secondPoint3);
        myMap.geoObjects.add(firstPoint2);
        secondAnimatedLine.animate()
          .then(function() {
            myMap.geoObjects.add(secondPoint2);
          });
      }
      playAnimation();
      setCenter();
    };

    var thirdLine = function () {
      map.classList.add('map--color-none');
      btnVostok.classList.remove('btn-active');
      btnMkad.classList.remove('btn-active');
      btnLogoisk.classList.add('btn-active');

      function setCenter () {
        myMap.setCenter([53.95341684144641,27.632829761871292]);
      }
      myMap.geoObjects.add(thirdAnimatedLine);
      function playAnimation() {
        firstAnimatedLine.reset();
        secondAnimatedLine.reset();
        myMap.geoObjects.remove(myGeoObject);
        myMap.geoObjects.remove(firstPoint);
        myMap.geoObjects.remove(firstPoint2);
        myMap.geoObjects.remove(secondPoint);
        myMap.geoObjects.remove(secondPoint2);
        myMap.geoObjects.add(firstPoint3);
        thirdAnimatedLine.animate()
          .then(function() {
            myMap.geoObjects.add(secondPoint3);
          });
      }
      playAnimation();
      setCenter();
    };

    btnVostok.addEventListener('click', firstLine);
    btnMkad.addEventListener('click', secondLine);
    btnLogoisk.addEventListener('click', thirdLine);
  }

})();
