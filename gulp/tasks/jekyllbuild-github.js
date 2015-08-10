var gulp        = require('gulp');
var browserSync = require('browser-sync');
var cp          = require("child_process");
var config      = require('../config').basePaths;

/*-------------------------------------------------------------------
Jekyll build
-------------------------------------------------------------------*/
var messages = {
    jekyllBuild: "<span style='color: grey'>Running:</span> $ jekyll build"
};

gulp.task("jekyll-build-github", function (done) {
    browserSync.notify(messages.jekyllBuild);
    return cp.exec("jekyll", ["build", "--config", config.html.base+"_config.yml"], {stdio: "inherit"})
    .on("close", done);
});