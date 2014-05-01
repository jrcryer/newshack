'use strict';

define(['jquery', 'backbone', 'template'], function($, Backbone, Template) {
  return Backbone.View.extend({

    el: '#widget .title',

    /**
     * @var data
     */
    storyline: null,

    /**
     * @var string
     */
    date: null,

    /**
     * @var template
     */
    template: Template['app/template/title.hbs'],

    /**
     * Set the storyline
     */
    initialize: function(storyline) {
      this.storyline = storyline;
      Backbone.on("date:change", this.onDateChange, this);
    },

    render: function() {
      if (this.date === null) {
        this.$el.html(
          this.template({title: this.storyline.title})
        );
        return this;
      }
      this.$el.html(
        this.template({title: this.storyline.title, date: this.date})
      );
      return this;
    },

    onDateChange: function(date) {
      this.date = date;
      this.render();
    }
  });
});