'use strict';

define([
  'jquery',
  'underscore',
  'backbone',
  'collection/storyline',
  'view/storyline',
], function($, _, Backbone, Store, Storyline){

  return {
    initialize: function() {
      Store.get('sample', function(storyline) {
        new Storyline(storyline).render();
      }, function() {
        console.log('failed request');
      });
    }
  };
});