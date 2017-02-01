$(function () {
    $('.team__name').on('click', function(e){
        e.preventDefault();

        var $this = $(this),
            item = $this.closest('.team__item'),
            container = $this.closest('.team__list'),
            items = container.find('.team__item'),
            content = item.find('.team__content'),
            otherContent = container.find('.team__content');

        if (!item.hasClass('team__item_active')) {
            items.removeClass('team__item_active');
            item.addClass('team__item_active');
            otherContent.slideUp();
            content.slideDown();

        } else {
            item.removeClass('team__item_active');
            content.slideUp();
        }
    });
});