'use strict';

define(['underscore', 'backbone', 'model/story'], function(_, Backbone, Story) {
  return Backbone.Collection.extend({
    model: Story
  });
});