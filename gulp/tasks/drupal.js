'use strict';

var gulp          = require('gulp');

var config = require('../config').drupal;

gulp.task('drupal', function() {
  gulp.src(config.src)
    .pipe(gulp.dest(config.dest));
});