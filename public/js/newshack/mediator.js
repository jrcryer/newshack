'use strict';

define([
  'underscore',
  'backbone',
  'views'
  ], function(_, Backbone, Views) {

  var storyline, widget = null;

  var showStory = function(uri) {
    var story = _.findWhere(storyline.storyline.events, {id: uri});
    Backbone.trigger('push', {
      prev: storyline,
      next: story,
      title: story.preferredLabel,
      type: 'story',
      view: new Views.Story(story).render()
    });
  };

  var showTopic = function(uri) {
    var topic = _.findWhere(storyline.storyline.topics, {id: uri});

    Backbone.trigger('push', {
      prev: storyline,
      next: topic,
      title: topic.preferredLabel,
      type: 'topic',
      view: new Views.Topic(topic).render()
    });
  };

  var showStoryLine = function(data) {
    widget.find('.second').html(new Views.Storyline(storyline, data).render());
  };

  var showStoryLineFromPreviousPage = function() {
    widget.find('.content').removeClass('forward');
    Backbone.trigger('disable-navigation');
  };

  var forward = function(data) {
    widget.find('.third').html(data.view);
    widget.find('.content').addClass('forward');
    history.pushState(data, data.title);

    Backbone.trigger('enable-navigation');
  };

  var back = function(data) {
    widget.find('.first').html(data.view);
    widget.find('.content').addClass('back');
    history.pushState(data, data.title);
    Backbone.trigger('enable-navigation');
  };

  var initialize = function(el, data) {
    widget    = el;
    storyline = data;

    Backbone.on('story:show', showStory);
    Backbone.on('topic:show', showTopic);
    Backbone.on('storyline:show', showStoryLine);
    Backbone.on('navigate-back', showStoryLineFromPreviousPage);
    Backbone.on('push', forward);
    Backbone.on('pop', back);
  };

  return {
    init: initialize
  };
});