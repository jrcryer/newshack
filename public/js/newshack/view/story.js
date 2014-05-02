'use strict';

define(['jquery', 'backbone', 'template'], function($, Backbone, Template) {
  return Backbone.View.extend({

    /**
     * @var data
     */
    story: null,

    /**
     * @var template
     */
    template: Template['app/template/story.hbs'],

    /**
     * Set the storyline
     */
    initialize: function(story) {
      this.story = story;
    },

    render: function() {
      return this.template(this.story);
    }
  });
});