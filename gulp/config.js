// Configurations :
var theme = {};
theme.name = 'avoxa-cip';
theme.dest = './../www/sites/default/themes/' + theme.name + '/';

module.exports = {
  clean: {
    dist: theme.dest
  },
  css: {
    src : [
      './sources/sass/*.scss',
      './sources/sass/**/*.scss'
    ],
    dest : theme.dest + '/assets/css/'
  },
  drupal: {
    src: [
      './sources/drupal/*',
      './sources/drupal/**/*',
      './sources/drupal/**/**/*',
      '!./sources/drupal/*tmp*',
      '!./sources/drupal/**/*tmp*',
      '!./sources/drupal/**/**/*tmp*',
    ],
    dest: theme.dest
  },
  fonts: {
    src: './sources/fonts/**/*',
    dest: theme.dest  + '/assets/fonts/'
  },
  icons: {
    src: './sources/images/svg/*.svg',
    pngDest: './sources/images/png/',
    scssDest: './sources/sass/partials',
    templateSrc: './templates/_icons.scss.mustache'
  },
  images: {
    src: [
      './sources/images/*.jpeg',
      './sources/images/*.jpg',
      '!./sources/images/._*.jpg'
    ],
    dest: theme.dest  + '/assets/images/'
  },
  js: {
    scriptSrc: ['./sources/js/main.js', './sources/**/*.js'],
    headSrc: [
      './bower_components/modernizr/modernizr.js',
      './bower_components/jquery/jquery.js'
    ],
    vendorSrc: './bower_components/bootstrap-sass/assets/javascripts/bootstrap.js',
    dest : theme.dest + '/assets/js/'
  }
};