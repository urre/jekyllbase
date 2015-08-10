var gulp = require('gulp');

/*-------------------------------------------------------------------
Default task. Start BrowserSync and watch for changes
Usage: gulp
-------------------------------------------------------------------*/
gulp.task("default", ["jekyll-build", "browser-sync", "watch"]);