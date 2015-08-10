var gulp        = require('gulp');
var browserSync = require('browser-sync');
var reload      = browserSync.reload;
var config      = require('../config').basePaths;

/*-------------------------------------------------------------------
Wait for jekyll-build, then launch the Server
-------------------------------------------------------------------*/
gulp.task("browser-sync", ["sass", "js", "jekyll-build"], function() {
    browserSync({
        server: {
            baseDir: config.site.dist
        },
        notify: false,
    });
});