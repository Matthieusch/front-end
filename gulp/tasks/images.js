'use strict';

var gulp          = require('gulp'),
    changed       = require('gulp-changed'),
    rename        = require('gulp-rename'),
    imageResize   = require('gulp-image-resize'),
    imagemin      = require('gulp-imagemin'),
    jpegtran      = require('imagemin-jpegtran');

var config = require('../config').images;

gulp.task('images', ['images-retina'], function () {
  gulp.src(config.src)
    .pipe(changed(config.dest))
    .pipe(imageResize({
      width : '50%',
      height : '50%'
    }))
    .pipe(imagemin({
      progressive: true,
      use: [jpegtran()]
    }))
    .pipe(gulp.dest(config.dest));
});

gulp.task('images-retina', function () {
  gulp.src(config.src)
    .pipe(changed(config.dest))
    .pipe(imagemin({
      progressive: true,
      use: [jpegtran()]
    }))
    .pipe(rename({suffix: '_2x'}))
    .pipe(gulp.dest(config.dest));
});