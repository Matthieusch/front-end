(function() {
  'use strict';

  var window,
      document,
      $ = jQuery.noConflict();

  app.console('Sample widget!');

  var s;
  app.SampleWidget = {

    settings: {
      output: 'What did you do man? Let me sleep!',
      elBody: $('body')
    },

    init: function() {
      s = this.settings;

      this.bindUIActions();
    },

    bindUIActions: function() {
      var self = this;

      s.elBody.bind('click', function() {
        self.returnUserEvent(s.output);
      });
    },

    returnUserEvent: function(outputReturn) {
      app.console(outputReturn);
    }
  };

  app.SampleWidget.init();
})();