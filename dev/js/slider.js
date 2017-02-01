$(function () {
    let burgerCarousel = $('.slider__list').owlCarousel({
        items : 1,
        nav : true,
        navContainer: $('.slider__controls'),
        navText: ['', ''],
        loop: true
    });

    $('.slider__btn_right').on('click', function(e) {
        e.preventDefault();
        burgerCarousel.trigger('next.owl.carousel');
    });

    $('.slider__btn_left').on('click', function(e) {
        e.preventDefault();
        burgerCarousel.trigger('prev.owl.carousel');
    });
});