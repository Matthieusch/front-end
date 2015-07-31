'use strict';

var gulp = require('gulp'),
    watch = require('gulp-watch'),
    batch = require('gulp-batch');

var config = require('../config');

gulp.task('watch', function () {

  // css
  watch(config.css.src, function () {
    setTimeout(function() {
      gulp.start('css');
    }, 1500);
  });

  // drupal
  watch(config.drupal.src, function() {
    setTimeout(function() {
      gulp.start('drupal');
    }, 1500);
  });

  // fonts
  watch(config.fonts.src, function() {
    setTimeout(function() {
      gulp.start('fonts');
    }, 1500);
  });

  // icons
  watch(config.icons.src, function() {
    setTimeout(function() {
      gulp.start('icons');
    }, 1500);
  });

  // images
  watch(config.images.src, function() {
    setTimeout(function() {
      gulp.start('images');
    }, 7500);
  });

  // script
  watch(config.js.scriptSrc, function() {
    setTimeout(function() {
      gulp.start('script');
    }, 1500);
  });

});