'use strict';

var gulp          = require('gulp'),
    runSequence   = require('run-sequence');

// Launch all tasks bear hug now!
gulp.task('build', function(callback) {
  runSequence('clean', ['icons', 'drupal', 'script', 'fonts', 'images'], function() {
    // Wait 2 seconds: because icons run asynchronous tasks
    // Sorry for that...
    setTimeout(function() {
      runSequence('css');
    }, 2000);
  });
});