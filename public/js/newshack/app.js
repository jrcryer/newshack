'use strict';

define([
  'jquery',
  'underscore',
  'backbone',
  'handlebars',
  'collection/storyline',
  'view/storyline',
], function($, _, Backbone, Handlebars, Store, Storyline){

  return {
    initialize: function() {
      Store.get('sample', function(storyline) {
        new Storyline(Handlebars, storyline).render();
      });
    }
  };
});