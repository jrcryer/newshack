'use strict';

define([
  'jquery',
  'underscore',
  'backbone',
  'handlebars',
  'moment',
  'collection/storyline',
  'views'
], function($, _, Backbone, Handlebars, moment, Store, Views) {

  Handlebars.registerHelper('day', function(context, block) {
    return moment(new Date(context)).format('DD');
  });

  Handlebars.registerHelper('month', function(context, block) {
    return moment(new Date(context)).format('MMM');
  });

  return {
    initialize: function() {
      $(function() {
        var story = $('.widget').data('story');
        console.log('Loading story' + story);
        Store.get(story, function(data) {
          new Views.Header(data).render();
          new Views.Title(data.storyline).render();
          new Views.Topics(data.storyline.topics).render();
          new Views.Storyline(data.storyline).render();
        });
      });

    }
  };
});