'use strict';

define(['jquery', 'backbone', 'template'], function($, Backbone, Template) {
  return Backbone.View.extend({

    el: '#widget-creative',

    /**
     * @var data
     */
    storyline: null,

    /**
     * @var template
     */
    template: Template['app/template/creative.hbs'],

    /**
     * Set the storyline
     */
    initialize: function(storyline) {
      this.storyline = storyline;
    },

    render: function() {
      this.$el.html(
        this.template({storyline: this.storyline})
      );
      return this;
    }
  });
});