$(function () {
    var
        sections = $('.section'),
        display = $('.maincontent'),
        screen = 0,
        inscroll = false;

    sections.filter(':first-child').addClass('fixed-menu__item_active');

    var scrollToSection = function (sectionEq) {
        var position = 0;

        if (!inscroll) {
            inscroll = true;

            position = (sections.eq(sectionEq).index() * -100) + '%';

            sections.eq(sectionEq).addClass('fixed-menu__item_active')
                .siblings().removeClass('fixed-menu__item_active');

            display.css({
                'transform' :  'translate3d(0,' + position + ', 0)'
            });

            setTimeout(function () {
                inscroll = false;

                $('.fixed-menu__item').eq(sectionEq).addClass('fixed-menu__item_active')
                    .siblings().removeClass('fixed-menu__item_active');
            }, 1300)
        }
    };

    document.querySelector('.wrapper')
        .addEventListener('wheel', function (e) {
            e.preventDefault();

            var activeSection = sections.filter('.fixed-menu__item_active');

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

    $('.nav__link, .order-link, .fixed-menu__link, .slider__link')
        .on('click', function(e){
            e.preventDefault();

            scrollToSection(parseInt($(this).attr('href')));
        });
});