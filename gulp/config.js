// Configurations :
var theme = {};
theme.name = 'avoxa-cip';
theme.destination = './../www/sites/default/themes/' + theme.name + '/';

module.exports = {
  css: {
    src : [
      './sources/sass/*.scss',
      './sources/sass/**/*.scss'
    ],
    dest : theme.destination + '/assets/css/'
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
    dest: theme.destination
  }
};