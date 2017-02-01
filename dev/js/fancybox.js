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