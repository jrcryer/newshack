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

  Handlebars.registerHelper('date', function(context, block) {
    return moment(new Date(context)).format('MMM DD YYYY');
  });

  return {
    initialize: function() {
      $(function() {
        $('.widget').each(function() {
          var widget = $(this);
          var story  = $('.widget').data('story');

          if (story === undefined) {
            return;
          }

          Store.get(story, function(data) {
            Mediator.init(widget, data);
            new Views.Header(data).render();
            new Views.Title(data.storyline).render();
            new Views.Navigation().render();
            new Views.Topics(data.storyline.topics).render();
            Backbone.trigger('storyline:show');

            var header = $('.header', widget).height();
            var title  = $('.title', widget).height();
            var topics = $('.topics', widget).height();
            var height = (480 - (header + title + topics)) + 'px';
            $('.content', widget).height(height);
            $('.slide', widget).height(height);
          });
        });
      });
    }
  };
});