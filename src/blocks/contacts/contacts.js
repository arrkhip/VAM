// yandex map
  if ($('#contacts-map').length > 0) {
    ymaps.ready(function(){
      var myMap = new ymaps.Map("contacts-map", {
        center: [53.153120, 50.659448],
        zoom: 12,
        // controls: []
      });
      
      var myGeoObject = new ymaps.GeoObject({
        geometry: {
          type: "Point", 
          coordinates: [53.153120, 50.659448] 
        }
      });
  
      var myPlacemark = new ymaps.Placemark([53.153120, 50.659448], {}, {
        iconLayout: 'default#image',
        iconImageHref: '../img/map-pin-black.svg',
        iconImageSize: [32, 39],
  
    });
  
      myMap.geoObjects.add(myPlacemark);
      // myMap.behaviors.disable('scrollZoom');
  
      $(window).resize(function() {
        if ($(window).width() < 768) {
         myMap.behaviors.disable('drag');
       }
     });
  
    });
  }