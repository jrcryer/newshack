'use strict';

define(['jquery', 'underscore', 'backbone', 'template'], function($, _, Backbone, Template) {
  return Backbone.View.extend({

    /**
     * @var data
     */
    storyline: null,

    /**
     * @var show key events only
     */
    showKeyEventsOnly: false,

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
    initialize: function(storyline, data) {
      this.storyline = storyline.storyline;
      this.showKeyEventsOnly = data.showKeyEventsOnly;
    },

    render: function() {
      var data = this.storyline.events;

      if (this.showKeyEventsOnly) {
        data = _.filter(data, function(event) {
          return event.isKey;
        });
      }
      if (data.length > 0) {
        return this.renderMultipleEvents(data);
      }
      return this.renderEvents(data);
    },

    renderMultipleEvents: function(data) {
      var years = _.map(data, function(event) {
        return new Date(event.eventStartDate).getFullYear();
      });

      if (years.length === 1) {
        return this.renderEvents(data);
      }
      years = _.groupBy(data, function(event) {
        return new Date(event.eventStartDate).getFullYear();
      });
      return this.$el.html(
        this.template({years: years})
      );
    },

    renderEvents: function(data) {
      return this.$el.html(
        this.template({items: data})
      );
    },

    onStoryInteracted: function(e) {
      var uri = $(e.currentTarget).data('id');
      Backbone.trigger('story:show', uri);
      e.preventDefault();
    }
  });
});