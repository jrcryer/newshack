'use strict';

define(['jquery', 'underscore', 'backbone', 'template'], function($, _, Backbone, Template) {
  return Backbone.View.extend({

    el: '.widget .content',

    /**
     * @var data
     */
    storyline: null,

    /**
     * @var template
     */
    template: Template['app/template/storyline.hbs'],

    /**
     * Set the storyline
     */
    initialize: function(storyline) {
      this.storyline = storyline;
    },

    render: function() {
      var events = this.storyline.events;

      if (events.length > 0) {
        this.renderMultipleEvents(events);
        return this;
      }
      this.renderEvents(events);
      return this;
    },

    renderMultipleEvents: function(events) {
      var years = _.map(events, function(event) {
        return new Date(event.startDate).getFullYear();
      });

      if (years.length === 1) {
        return this.renderEvents(events);
      }
      years = _.groupBy(events, function(event) {
        return new Date(event.startDate).getFullYear();
      });
      this.$el.html(
        this.template({years: years})
      );
    },

    renderEvents: function(events) {
      this.$el.html(
        this.template({events: events})
      );
    }
  });
});