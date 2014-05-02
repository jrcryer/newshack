'use strict';

define(['jquery', 'backbone', 'template'], function($, Backbone, Template) {
  return Backbone.View.extend({

    el: '.widget .topics',

    /**
     * @var data
     */
    topics: null,

    /**
     * @var template
     */
    template: Template['app/template/topics.hbs'],

    /**
     * Event
     */
    events: {
      'click .topic': 'onTopicClick'
    },

    /**
     * Set the storyline
     */
    initialize: function(topics) {
      this.topics = topics;
    },

    render: function() {
      this.$el.html(
        this.template({topics: this.topics})
      );
      return this;
    },

    onTopicClick: function(e) {
      var uri = $(e.currentTarget).data('id');
      Backbone.trigger('topic:show', uri);
      e.preventDefault();
    }
  });
});