var gulp = require('gulp');
var size = require('gulp-size');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var header = require('gulp-header');
var plumber = require('gulp-plumber');
var config  = require('../config').basePaths;

/*-------------------------------------------------------------------
Concatinate and uglify javascript
-------------------------------------------------------------------*/
gulp.task("js", function() {
    gulp.src([
        config.bowerjs.base+"jquery/dist/jquery.js",
        config.assets.src+"js/main.js",
        ])
    .pipe(plumber())
    .on("error", function(err) {
        console.log(err.message);
    })
    .pipe(concat("main.js"))
    .pipe(uglify())
    .pipe(size())
    .pipe(gulp.dest(config.site.js))
    .pipe(gulp.dest(config.scripts.dist))
});

