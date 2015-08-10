var gulp = require('gulp');
var jshint = require('gulp-jshint');
var config  = require('../config').basePaths;

/*-------------------------------------------------------------------
JS hint
-------------------------------------------------------------------*/
gulp.task('jshint', function() {
    gulp.src([
        config.scripts.base+'main.js',
    ])
        .pipe(jshint('.jshintrc'))
        .pipe(jshint.reporter('default'))
});