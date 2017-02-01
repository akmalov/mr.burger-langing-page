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