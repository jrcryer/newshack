'use strict';

require.config({
  baseUrl: 'js/newshack',
  paths: {
    jquery: '/lib/jquery/dist/jquery',
    underscore: '/lib/underscore/underscore',
    backbone: '/lib/backbone/backbone'
  }
});

require(['app'], function(App) {
  App.initialize();
});