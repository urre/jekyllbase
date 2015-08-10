var gulp = require('gulp');
var gulp = require('gulp');
var del = require('del');
var config  = require('../config').basePaths;

/*-------------------------------------------------------------------
Remove _site folder
-------------------------------------------------------------------*/
gulp.task('clean', function (cb) {
  del([
    config.site.dist,
  ], cb);
});