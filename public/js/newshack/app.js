'use strict';

define([
  'jquery',
  'underscore',
  'backbone',
  'handlebars',
  'moment',
  'mediator',
  'collection/storyline',
  'views'
], function($, _, Backbone, Handlebars, moment, Mediator, Store, Views) {

  Handlebars.registerHelper('day', function(context, block) {
    return moment(new Date(context)).format('DD');
  });

  Handlebars.registerHelper('month', function(context, block) {
    return moment(new Date(context)).format('MMM');
  });

  Mediator.init();

  return {
    initialize: function() {
      $(function() {
        var story = $('.widget').data('story');
        console.log('Loading story' + story);
        Store.get(story, function(data) {
          new Views.Header(data).render();
          new Views.Title(data.storyline).render();
          new Views.Topics(data.storyline.topics).render();
          new Views.Storyline(data).render();
        });
      });

    }
  };
});