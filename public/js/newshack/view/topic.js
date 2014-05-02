'use strict';

define(['jquery', 'backbone', 'template'], function($, Backbone, Template) {
  return Backbone.View.extend({

    /**
     * @var data
     */
    topic: null,

    /**
     * @var template
     */
    template: Template['app/template/topic.hbs'],

    /**
     * Set the storyline
     */
    initialize: function(topic) {
      this.topic = topic;
    },

    render: function() {
      return this.template(this.topic);
    }
  });
});