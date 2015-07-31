'use strict';

var gulp          = require('gulp'),
    jshint        = require('gulp-jshint'),
    concat        = require('gulp-concat'),
    uglify        = require('gulp-uglify'),
    rename        = require('gulp-rename'),
    sourcemaps    = require('gulp-sourcemaps'),
    runSequence   = require('run-sequence');

var config = require('../config').js;

// Lint Task
gulp.task('script-lint', function() {
  return gulp.src(config.scriptSrc)
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

// Concatenate & Minify Custom JS
gulp.task('script-custom', function() {
  return gulp.src(config.scriptSrc)
    .pipe(sourcemaps.init())
      .pipe(concat('main.js'))
      .pipe(rename({suffix: '.min'}))
      .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(config.dest));
});

// Concatenate & Minify Vendor JS
gulp.task('script-vendor', function() {
  return gulp.src(config.vendorSrc)
    .pipe(sourcemaps.init())
      .pipe(concat('vendor.js'))
      .pipe(rename({suffix: '.min'}))
      //.pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(config.dest));
});

// Minify Modernizr JS
gulp.task('script-head', function() {
  return gulp.src(config.headSrc)
    .pipe(sourcemaps.init())
      .pipe(concat('head.js'))
      .pipe(rename({suffix: '.min'}))
      .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(config.dest));
});

// Synthetize script tasks in one
gulp.task('script', function(callback) {
  runSequence('script-lint', ['script-head', 'script-vendor', 'script-custom'], callback);
});

