'use strict';

module.exports = function() {
    $.gulp.task('copy:fonts', function() {
        return $.gulp.src('./dev/fonts/**/*.*', { since: $.gulp.lastRun('copy:fonts') })
            .pipe($.gulp.dest($.config.root + '/fonts'));
    });
};