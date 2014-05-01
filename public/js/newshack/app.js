'use strict';

define([
  'jquery',
  'underscore',
  'backbone',
  'handlebars',
  'collection/storyline',
  'views'
], function($, _, Backbone, Handlebars, Store, Views) {

  return {
    initialize: function() {
      Store.get('sample', function(data) {
        new Views.Header(data).render();
        new Views.Title(data.storyline).render();
        new Views.Topics(data.storyline.topics).render();
        new Views.Storyline(data.storyline).render();
      });
    }
  };
});