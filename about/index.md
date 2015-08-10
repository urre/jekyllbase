---
layout: default
title: About
description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis eros elit. 
---

### About

Minimal Jekyll starter using Basscss and Gulp. By [@urre](http://github.com/urre)

### Features
+ [Basscss](http://www.basscss.com/)
+ [Gulp](http://gulpjs.com/) workflow using partials
+ [Sass](http://sass-lang.com/) using [gulp-sass](https://www.npmjs.com/package/gulp-sass)
+ Concatinate and minify Javascript
+ [HTML compression using native Liquid](https://github.com/penibelst/jekyll-compress-html)
+ Synchronised browser testing using [BrowserSync](http://www.browsersync.io/) and [xip.io](http://xip.io/)
+ [Autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer)
+ [Jekyll Assets](https://github.com/jekyll-assets/jekyll-assets) (optional (not compatible with Github Pages))
+ Some helpers: plumber, size, csslint, jshint, cssmin, imagemin...

## Setup

	bundle install && npm install && bower install

## Develop

With a single command you have the site spinning locally at [http://localhost:3000/](http://localhost:3000/). [BrowserSync](http://www.browsersync.io) injects and reloads on file changes (Sass files, Markdown files and html files/partials).

    gulp

## Build

### Build for production for use on Github Pages

	gulp github

### Build for production for use on AWS or separate hosting/VPS

	gulp prod

Note: If using this alternative you can use Jekyll Assets for fingerprinted files. Include ``head-jekyll-assets.html`` and ``footer-jekyll-assets.html`` instead of ``head.html`` and ``footer.html`` in the default template

## Deploy

### Deploy to Github Pages (using gh-pages branch)

	git push origin gh-pages

Also set ``gh-pages`` as default branch when pushing to Github Pages.

### Deploy to Amazon S3 (using [s3_website](https://github.com/laurilehmijoki/s3_website))

First read credentials via an ``.env`` file to ``s3_website.yml``. Don't version control your credentials.

	s3_website push