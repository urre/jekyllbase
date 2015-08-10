var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var config  = require('../config').basePaths;


/*-------------------------------------------------------------------
    Rebuild Jekyll & do page reload
-------------------------------------------------------------------*/
gulp.task("jekyll-rebuild", ["jekyll-build"], function () {
    browserSync.reload();
});