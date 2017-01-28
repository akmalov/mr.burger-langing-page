'use strict';

module.exports = function() {
  $.gulp.task('watch', function() {
    $.gulp.watch('./dev/js/**/*.js', $.gulp.series('js:process'));
    $.gulp.watch('./dev/style/**/*.scss', $.gulp.series('sass'));
    $.gulp.watch('./dev/template/**/*.pug', $.gulp.series('pug'));
    $.gulp.watch('./dev/images/**/*.*', $.gulp.series('copy:image'));
  });
};
