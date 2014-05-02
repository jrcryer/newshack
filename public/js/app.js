'use strict';

require.config({
  baseUrl: '/js/newshack',
  paths: {
    jquery: '/lib/jquery/dist/jquery',
    handlebars: '/lib/handlebars/handlebars',
    moment: '/lib/momentjs/moment',
    underscore: '/lib/underscore/underscore',
    backbone: '/lib/backbone/backbone'
  },
  shim: {
    underscore: {
      exports: '_'
    },

    backbone: {
      deps: ['jquery', 'underscore'],
      exports: 'Backbone'
    },

    handlebars: {
      exports: 'Handlebars'
    },

    moment: {
      exports: 'moment'
    }
  }
});

require(['app'], function(App) {
  App.initialize();
});

