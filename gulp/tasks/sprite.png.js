'use strict';

module.exports = function () {
    $.gulp.task('sprite:png', function () {
        var spriteData = $.gulp.src('./dev/sprite/png/*.png').pipe($.gp.spritesmith({
            imgName: 'sprite.png', // итоговый спрайт
            cssName: 'sprite.scss', // файл стилей
            algorithm: 'left-right',
            padding: 20
        }));
        var imgStream = spriteData.img
            .pipe($.gulp.dest('./dev/images')); // путь куда записываем спрайт

        var cssStream = spriteData.css
            .pipe($.gulp.dest('./dev/style/common')); // путь куда записываем файл стилей для спрайта

        return $.merge(imgStream, cssStream);
    })

};