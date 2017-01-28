//slider//

$(function () {
    var burgerCarousel = $('.burgers__slider__list').owlCarousel({
        items : 1,
        nav : true,
        navContainer: $('.burgers__slider__controls'),
        navText: ['', ''],
        loop: true
    });

    $('.burgers__slider__btn_right').on('click', function(e) {
        e.preventDefault();
        burgerCarousel.trigger('next.owl.carousel');
    });

    $('.burgers__slider__btn_left').on('click', function(e) {
        e.preventDefault();
        burgerCarousel.trigger('prev.owl.carousel');
    });
});

//vertical accordion//

$(function () {
    $('.team__name').on('click', function(e){
        e.preventDefault();

        var $this = $(this),
            item = $this.closest('.team__item'),
            container = $this.closest('.team__list'),
            items = container.find('.team__item'),
            content = item.find('.team__content'),
            otherContent = container.find('.team__content');

        if (!item.hasClass('active')) {
            items.removeClass('active');
            item.addClass('active');
            otherContent.slideUp();
            content.slideDown();

        } else {
            item.removeClass('active');
            content.slideUp();
        }
    });
});

//horizontal accordion//

$(function(){
    $('.menu-accordion__trigger').on('click', function(e){
        e.preventDefault();

        var $this = $(this),
            container = $this.closest('.menu-accordion'),
            item = $this.closest('.menu-accordion__item'),
            items = container.find('.menu-accordion__item'),
            activeItem = items.filter('.active'),
            content = item.find('.menu-accordion__content'),
            activeContent = activeItem.find('.menu-accordion__content');

        if (!item.hasClass('active')) {

            items.removeClass('active');
            item.addClass('active');

            activeContent.animate({
                'width' : '0px'
            });

            content.animate({
                'width' : '550px'
            });

        } else {

            item.removeClass('active');
            content.animate({
                'width' : '0px'
            });

        }
    });

    $(document).on('click', function (e) {
        var $this = $(e.target);

        if (!$this.closest('.menu-accordion').length) {
            $('.menu-accordion__content').animate({
                'width' : '0px'
            });

            $('.menu-accordion__item').removeClass('active');
        }
    });
});

//fancybox//

$(function () {
    $('.review__view').fancybox({
        type: 'inline',
        maxWidth : 460,
        fitToView : false,
        padding : 0
    });

    $('.full-review__close').on('click', function(e){
        e.preventDefault();
        $.fancybox.close();
    });
});

//input mask//

$(function(){
    $('.phone-mask').inputmask('+7 (999) 999 99 99');
});

//one page scroll//

$(function () {
    var
        sections = $('.section'),
        display = $('.maincontent'),
        screen = 0,
        inscroll = false;

    sections.filter(':first-child').addClass('active');

    var scrollToSection = function (sectionEq) {
        var position = 0;

        if (!inscroll) {
            inscroll = true;

            position = (sections.eq(sectionEq).index() * -100) + '%';

            sections.eq(sectionEq).addClass('active')
                .siblings().removeClass('active');

            display.css({
                'transform' :  'translate3d(0,' + position + ', 0)'
            });

            setTimeout(function () {
                inscroll = false;

                $('.fixed-menu__item').eq(sectionEq).addClass('active')
                    .siblings().removeClass('active');
            }, 1300)
        }
    }

    document.querySelector('.wrapper')
        .addEventListener('wheel', function (e) {
            e.preventDefault();

            var activeSection = sections.filter('.active');

            if (!inscroll) {

                if (e.deltaY > 0) {
                    if (activeSection.next().length) {
                        screen = activeSection.next().index();
                    }
                }

                if (e.deltaY < 0) {
                    if (activeSection.prev().length) {
                        screen = activeSection.prev().index()
                    }
                }

                scrollToSection(screen);
            }
        });

    $('.down-scroll').on('click', function(e){
        e.preventDefault();

        scrollToSection(1);
    });

    $('.header__nav__link, .header__order-link, .fixed-menu__link, .burgers__burger__right__order__link')
        .on('click', function(e){
            e.preventDefault();

            scrollToSection(parseInt($(this).attr('href')));
        });
});

// map //

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
            iconImageOffset: [-3, -42]
        }),

        myPlacemark2 = new ymaps.Placemark([59.9584,30.3024], {
            hintContent: 'Mr. Burger',
            balloonContent: 'ул. Большая Пушкарская д. 22'
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'img/icons/map-marker.svg',
            iconImageSize: [46, 58],
            iconImageOffset: [-3, -42]
        }),

        myPlacemark3 = new ymaps.Placemark([59.9592,30.4193], {
            hintContent: 'Mr. Burger',
            balloonContent: 'шоссе Революции д. 15'
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'img/icons/map-marker.svg',
            iconImageSize: [46, 58],
            iconImageOffset: [-3, -42]
        });
    myMap.geoObjects.add(myPlacemark1).add(myPlacemark2).add(myPlacemark3);
    myMap.behaviors.disable('scrollZoom');
});

// form //

$(function(){
    $('#order-form').on('submit', function(e){
        e.preventDefault();

        var
            form = $(this),
            formData = form.serialize();

        $.ajax({
            url: '../mail.php',
            type: 'POST',
            data: formData,
            success: function (data) {
                var popup = data.status ? '#success' : '#error';

                $.fancybox.open([
                    {href: popup}
                ], {
                    type: 'inline',
                    maxWidth: 250,
                    fitToView: false,
                    padding: 0,
                    afterClose : function () {
                        form.trigger('reset');
                    }
                });
            }
        })
    });

    $('.status-popup__close').on('click', function(e) {
        e.preventDefault();
        $.fancybox.close();
    });
});