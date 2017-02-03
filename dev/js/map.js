ymaps.ready(function () {

    var myMap = new ymaps.Map('map', {
            center: [59.9182,30.3056], // Санкт-Петербург
            zoom: 12,
            controls : []
        }, {
            searchControlProvider: 'yandex#search'
        }),

        myPlacemark1 = new ymaps.Placemark([59.8962,30.4245], {
            hintContent: 'Mr. Burger',
            balloonContent: 'ул. Бабушкина д. 12/1'
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'img/icons/map-marker.svg',
            iconImageSize: [46, 58],
            iconImageOffset: [-22, -57]
        }),

        myPlacemark2 = new ymaps.Placemark([59.9584,30.3024], {
            hintContent: 'Mr. Burger',
            balloonContent: 'ул. Большая Пушкарская д. 22'
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'img/icons/map-marker.svg',
            iconImageSize: [46, 58],
            iconImageOffset: [-22, -57]
        }),

        myPlacemark3 = new ymaps.Placemark([59.9592,30.4193], {
            hintContent: 'Mr. Burger',
            balloonContent: 'шоссе Революции д. 15'
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'img/icons/map-marker.svg',
            iconImageSize: [46, 58],
            iconImageOffset: [-22, -57]
        });
    myMap.geoObjects.add(myPlacemark1).add(myPlacemark2).add(myPlacemark3);
    myMap.behaviors.disable('scrollZoom');
});