var SampleWidget;

(function() {
  'use strict';

  var window,
      document,
      $ = jQuery.noConflict();

  app.console('Sample widget!');

  var s;
  SampleWidget = {

    settings: {
      output: 'What did you do man? Let me sleep!',
      elBody: $('body')
    },

    init: function() {
      s = this.settings;
      this.bindUIActions();
    },

    bindUIActions: function() {
      s.elBody.bind('click', function() {
        SampleWidget.returnUserEvent(s.output);
      });
    },

    returnUserEvent: function(outputReturn) {
      app.console(outputReturn);
    }
  };

  SampleWidget.init();
})();