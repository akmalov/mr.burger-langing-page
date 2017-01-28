'use strict';

module.exports = function() {
  $.gulp.task('js:foundation', function() {
    return $.gulp.src($.path.jsFoundation)
      .pipe($.gp.concat('vendor.js'))
      .pipe($.gp.uglify())
      .pipe($.gulp.dest($.config.root + '/js'))
  })
};
