$(function(){
    $('.menu__trigger').on('click', function(e){
        e.preventDefault();

        let $this = $(this),
            container = $this.closest('.menu__list'),
            item = $this.closest('.menu__item'),
            items = container.find('.menu__item'),
            activeItem = items.filter('.menu__item_active'),
            content = item.find('.menu__content'),
            activeContent = activeItem.find('.menu__content');

        if (!item.hasClass('menu__item_active')) {

            items.removeClass('menu__item_active');
            item.addClass('menu__item_active');

            activeContent.animate({
                'width' : '0px'
            });

            content.animate({
                'width' : '550px'
            });

        } else {

            item.removeClass('menu__item_active');
            content.animate({
                'width' : '0px'
            });

        }
    });

    $(document).on('click', function (e) {
        let $this = $(e.target);

        if (!$this.closest('.menu__list').length) {
            $('.menu__content').animate({
                'width' : '0px'
            });

            $('.menu__item').removeClass('menu__item_active');
        }
    });
});