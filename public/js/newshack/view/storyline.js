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
     * Event
     */
    events: {
      'click .story': 'onStoryInteracted'
    },

    /**
     * Set the storyline
     */
    initialize: function(storyline) {
      this.storyline = storyline.storyline;
    },

    render: function() {
      var data = this.storyline.events;

      if (data.length > 0) {
        this.renderMultipleEvents(data);
        return this;
      }
      this.renderEvents(data);
      return this;
    },

    renderMultipleEvents: function(data) {
      var years = _.map(data, function(event) {
        return new Date(event.startDate).getFullYear();
      });

      if (years.length === 1) {
        return this.renderEvents(data);
      }
      years = _.groupBy(data, function(event) {
        return new Date(event.startDate).getFullYear();
      });
      this.$el.html(
        this.template({years: years})
      );
    },

    renderEvents: function(data) {
      this.$el.html(
        this.template({items: data})
      );
    },

    onStoryInteracted: function(e) {
      var hash = $(e.currentTarget).data('id');
      Backbone.trigger('story:show', {uri: hash});
      e.preventDefault();
    }
  });
});