var gulp = require('gulp');

/*-------------------------------------------------------------------
Build for production
Usage: gulp github
-------------------------------------------------------------------*/
gulp.task("github", ["sass", "js", "jekyll-build-github"]);