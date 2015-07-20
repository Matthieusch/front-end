'use strict';

var gulp = require('gulp'),
    watch = require('gulp-watch'),
    batch = require('gulp-batch');

var config = require('../config');

gulp.task('watch', function () {

  // css
  watch(config.css.src, function () {
    gulp.start('css');
  });

  // drupal
  watch(config.drupal.src, function() {
    gulp.start('drupal');
  });

});