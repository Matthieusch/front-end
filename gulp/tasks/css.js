'use strict';

var gulp          = require('gulp'),
    rename        = require('gulp-rename'),
    sass          = require('gulp-sass'),
    autoprefixer  = require('gulp-autoprefixer'),
    plumber       = require('gulp-plumber'),
    minifycss     = require('gulp-minify-css');

var config = require('../config').css;

gulp.task('css', function() {
  gulp.src(config.src)
    .pipe(plumber({
      errorHandler: function (err) {
        console.log(err);
        this.emit('end');
      }
    }))
    .pipe(sass({
      errLogToConsole: true
    }))
    .pipe(autoprefixer("last 2 versions", "> 1%", "Explorer 9"))
    .pipe(minifycss())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest(config.dest));
});