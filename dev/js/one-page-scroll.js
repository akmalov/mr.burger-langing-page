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
    };

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