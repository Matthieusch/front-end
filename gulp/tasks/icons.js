'use strict';

var gulp          = require('gulp'),
    iconify       = require('gulp-iconify');

var config = require('../config').icons;

gulp.task('icons', function() {
  iconify({
    src: config.src,
    cssOutput: false,
    pngOutput: config.pngDest,
    scssOutput: config.scssDest,
    styleTemplate: config.templateSrc,
    svgoOptions: {
      enabled: true,
      options: {
        plugins: [
          { removeUnknownsAndDefaults: false },
          { mergePaths: false }
        ]
      }
    }
  });
});