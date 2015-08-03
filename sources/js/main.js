var app;

(function() {
  'use strict';

  var window,
      document,
      $ = jQuery.noConflict();

  var s;
  app = {

    settings: {
      // Properties
      version: '0.0.0',
      author: 'http://matthieu-schneider.fr',
      timerStart: Date.now(),

      // Debug
      debug: true,
      alertFallback: false,
      debugLoadMessages: [],
      debugEventMessages: [],
    },

    // Initialisation
    init: function() {
      var self = this,
          s = self.settings;

      // Fallback ie8 for console.log()
      if (typeof console === "undefined" || typeof console.log === "undefined") {
        console = {};
        if (s.alertFallback) {
          console.log = function(msg) {
            alert(msg);
          };
        }
        else {
         console.log = function() {};
        }
        console.clear = function() {};
      }

      console.log('%cInformations\nversion: '+s.version + '\nauthor :' + s.author, 'color: #ae81bc');

      // Calculate time to load DOMready and everything loaded
      $(document).ready(function() {
        s.debugLoadMessages.push("Time until DOMready : " + (Date.now()-s.timerStart)/1000+"sec");

        // events.js
        // All events listeners
        // self.functions.events();
      });
      $(window).load(function() {
        s.debugLoadMessages.push("Time until everything loaded : " + (Date.now()-s.timerStart)/1000+"sec");

        // All is loaded
        self.loaded();
      });
    },

    // All is loaded
    loaded: function(){

      var self = this;

      /**
       * functions.js
       * @name: sample()
       * @desc: sample
       */
      // self.functions.sample();
    },

    // debugEvent
    console: function(messages) {
      var self = this,
          s = self.settings;

      if(s.debug){
        var date = new Date();

        s.debugEventMessages.push(messages);

        console.clear();

        console.log('%cEvent - '+date.getHours()+'h'+date.getMinutes()+'mn'+date.getSeconds()+'s', 'color: #a6c628');
        for(var key in s.debugEventMessages){
          if(typeof s.debugEventMessages[key] === 'object'){
            console.log(s.debugEventMessages[key]);
          } else {
            console.log('%c→ '+s.debugEventMessages[key], 'color: #fd971f');
          }
        }
        console.log('%cEnd', 'color: #a6c628');
      } else {
        return;
      }
    }

  };

  app.init();
})();