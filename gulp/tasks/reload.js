var gulp = require('gulp');
var browserSync = require('browser-sync');
var config  = require('../config').basePaths;

/*-------------------------------------------------------------------
BrowserSync manual reload for js files
-------------------------------------------------------------------*/
gulp.task("bs-reload", function() {
    browserSync.reload();
});