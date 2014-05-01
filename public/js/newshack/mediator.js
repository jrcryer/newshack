'use strict';

define(['underscore', 'backbone'], function(_, Backbone) {

  var showStory = function(uri) {
    console.log(uri);
  };

  var showTopic = function(uri) {
    console.log(uri);
  };
  var initialize = function() {
    Backbone.on('story:show', showStory);
    Backbone.on('topic:show', showStory);
  };

  return {
    init: initialize
  };
});