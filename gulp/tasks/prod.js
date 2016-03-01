var gulp = require('gulp');

/*-------------------------------------------------------------------
Build for production
Usage: gulp prod
-------------------------------------------------------------------*/
gulp.task("prod", ["sass", "js", "jekyll-build-prod"]);