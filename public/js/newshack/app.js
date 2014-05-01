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

        Store.get(story, function(data) {
          new Views.Header(data).render();
          new Views.Title(data.storyline).render();
          new Views.Topics(data.storyline.topics).render();
          new Views.Storyline(data).render();

          $('.widget').each(function() {
            var widget = $(this);
            var header = $('.header', widget).height();
            var title  = $('.title', widget).height();
            var topics = $('.topics', widget).height();
            var height = header + title + topics;
            $('.content', widget).height((480 - height) + 'px');
          });

        });
      });

    }
  };
});