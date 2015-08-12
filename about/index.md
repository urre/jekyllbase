---
layout: default
title: About
description: About Jekyllbase
---

### About

Minimal Jekyll starter using Basscss and Gulp.

Also checkout [Jekyllbase AWS](https://github.com/urre/jekyllbase-aws)

## Features
+ [Basscss](http://www.basscss.com/)
+ [Gulp](http://gulpjs.com/) workflow using partials
+ [Sass](http://sass-lang.com/) using [gulp-sass](https://www.npmjs.com/package/gulp-sass)
+ Concatinate and minify Javascript
+ [HTML compression using native Liquid](https://github.com/penibelst/jekyll-compress-html)
+ Synchronised browser testing using [BrowserSync](http://www.browsersync.io/) and [xip.io](http://xip.io/)
+ [Autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer)
+ Some helpers: plumber, size, csslint, jshint, cssmin, imagemin...

## Setup

Install Ruby Gems with Bundler

	bundle install 

Install NPM dependencies

	npm install

Install Bower dependencies

	bower install

## Develop

With a single command you have the site spinning locally at [http://localhost:3000/](http://localhost:3000/). [BrowserSync](http://www.browsersync.io) injects and reloads on file changes (Sass files, Markdown files and html files/partials).

    gulp

## Build

### Build for production for use on Github Pages

No special build required. Github is doing the work for you.

## Deploy

### Deploy to Github Pages (using gh-pages branch)

	git push origin gh-pages

Also set ``gh-pages`` as default branch when pushing to Github Pages.

#### Tips for Github Pages

If using a project site (not the "main" repo using the same name as the github user/organization), you'll need to set your baseurl to your project repo name. Also, deploy to ``gh-pages`` branch. 

For example this project repo is called jekyllbase, and the site url is [http://urre.github.io/jekyllbase](http://urre.github.io/jekyllbase/). 

Https is supported on project sites, so you can use [https://urre.github.io/jekyllbase/](https://urre.github.io/jekyllbase/). Just make sure all references is https. Otherwise you'll get cerfificate warnings/issues.

[Read more](https://pages.github.com/)

#### Custom domain?

Yup, [read](https://help.github.com/articles/setting-up-a-custom-domain-with-github-pages/)