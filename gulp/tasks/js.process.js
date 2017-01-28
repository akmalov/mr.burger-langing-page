'use strict';

module.exports = function() {
    $.gulp.task('js:process', function() {
        return $.browserify({
            entries: $.path.app,
            debug: true
        })
            .transform($.babel, {presets: ["es2015"]})
            .bundle()
            .on('error', $.gp.notify.onError({ title: 'JS' }))
            .pipe($.source('main.js'))
            .pipe($.buffer())
            .pipe($.gp.sourcemaps.init({
                loadMaps: true
            }))
            .pipe($.gp.uglify())
            .pipe($.gp.sourcemaps.write('./maps'))
            .pipe($.gulp.dest($.config.root + '/js'))
    })
};