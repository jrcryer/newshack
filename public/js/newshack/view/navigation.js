'use strict';

define(['jquery', 'backbone', 'template'], function($, Backbone, Template) {
  return Backbone.View.extend({

    el: '.widget .navigation',

    /**
     * @var data
     */
    display: false,

    /**
     * @var template
     */
    template: Template['app/template/navigation.hbs'],

    /**
     * @var events
     */
    events: {
      'click .back' : 'onBack'
    },

    /**
     * Set the storyline
     */
    initialize: function() {
      Backbone.on('enable-navigation', this.onNavigationEnabled, this);
    },

    render: function() {
      if (this.display === false) {
        this.$el.html('');
        return this;
      }
      var self = this;
      this.$el.html(this.template());
      setTimeout(function() {
        this.$el.find('.fadeIn').removeClass('.fadeIn');
      }, 300);
      return this;
    },

    onNavigationEnabled: function() {
      this.display = true;
      this.render();
    },

    onNavigationDisabled: function() {
      this.display = false;
      this.render();
    },

    onBack: function() {
      Backbone.trigger('navigate-back');
    }
  });
});