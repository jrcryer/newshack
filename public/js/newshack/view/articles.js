'use strict';

define(['jquery', 'underscore', 'backbone', 'template'], function($, _, Backbone, Template) {
  return Backbone.View.extend({

    el: '.widget .news-articles',

    /**
     * @var data
     */
    storyline: null,

    /**
     * @var template
     */
    template: Template['app/template/newsarticles.hbs'],

    /**
     * Set the storyline
     */
    initialize: function(storyline) {
      this.storyline = storyline;
    },

    render: function() {

      var items = this.storyline.newsItems;

      if (items === undefined) {
        items = [];
      }
      this.$el.html(
        this.template({
          summary: this.storyline.synopsis,
          first: _.first(items),
          articles: _.rest(items, 1),
          thumbnail: this.storyline.thumbnail
        })
      );
      return this;
    }
  });
});