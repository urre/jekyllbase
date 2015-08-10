var gulp = require('gulp');
var sass = require('gulp-sass');
var cssmin = require('gulp-cssmin');
var size = require('gulp-size');
var plumber = require('gulp-plumber');
var prefix = require('gulp-autoprefixer');
var header = require('gulp-header');
var config  = require('../config').basePaths;


/*-------------------------------------------------------------------
Watch scss files for changes & recompile
Watch html/md files, run jekyll & reload BrowserSync
-------------------------------------------------------------------*/
gulp.task("watch", function () {
    gulp.watch([config.scss.src], ["sass"]);
    gulp.watch([config.scripts.base+"main.js"], ["js"], ["bs-reload"], ["jekyll-rebuild"]);
    gulp.watch([config.jekyll.html], ["jekyll-rebuild"], ["bs-reload"]);
    gulp.watch([config.jekyll.posts], ["jekyll-rebuild"], ["bs-reload"]);
    gulp.watch([config.jekyll.nonsitehtml], ["jekyll-rebuild"], ["bs-reload"]);
});