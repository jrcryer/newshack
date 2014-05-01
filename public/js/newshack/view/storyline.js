'use strict';

define(['jquery', 'backbone', 'template'], function($, Backbone, Template) {
  return Backbone.View.extend({

    el: '#widget',

    /**
     * @var data
     */
    storyline: null,

    /**
     * @var template
     */
    template: null,

    /**
     * Set the storyline
     */
    initialize: function(engine, storyline) {
      this.storyline = storyline;
    },

    render: function() {
      this.$el.html(
        Template['app/template/widget.hbs']({
          storyline: this.storyline
        }
      ));
      return this;
    }
  });
});