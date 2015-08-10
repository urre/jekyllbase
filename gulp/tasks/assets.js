var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var pngcrush = require('imagemin-pngcrush');
var config  = require('../config').basePaths;

/*-------------------------------------------------------------------
Minify images
-------------------------------------------------------------------*/
gulp.task('imagemin', function() {
    return gulp.src(config.images.src)
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{
                removeViewBox: false
            }],
        }))
        .pipe(pngcrush({ reduce: true })())
        .pipe(gulp.dest(config.images.dist));
});