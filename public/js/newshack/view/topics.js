'use strict';

define(['jquery', 'backbone', 'template'], function($, Backbone, Template) {
  return Backbone.View.extend({

    el: '#widget .topics',

    /**
     * @var data
     */
    topics: null,

    /**
     * @var template
     */
    template: Template['app/template/topics.hbs'],

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
    }
  });
});