/*-------------------------------------------------------------------
Paths
-------------------------------------------------------------------*/

module.exports = {
  basePaths : {
    assets: {
      src: './_assets/',
      dist: './assets/'
    },
    vendor: {
      base: './js/vendor/',
    },
    scripts: {
      base: './_assets/js/',
      dist: './js/'
    },
    bowerjs: {
      base: './bower_components/',
    },
    fonts: {
      src: './_assets/fonts/'
    },
    scss: {
      src: './_assets/scss/**/*.{sass,scss}',
      base: './_assets/scss/',
      dist: './css/',
    },
    html: {
      base: './',
      dist: './'
    },
    jekyll: {
      html: '**/*.html', 
      posts: '_posts/**/*.md',
      nonsitehtml: '!_site/**/*.html'
    },
    site: {
      dist: './_site/',
      css: './_site/css/',
      js: './_site/js/',
      images: './_site/images/',
    },
    images: {
      src: './_assets/images/**/*.{png,jpg}',
      base: './_assets/images/',
      dist: './_assets/images/'
    }
  }
};