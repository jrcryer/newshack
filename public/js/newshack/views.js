'use strict';

define([
  'view/header',
  'view/navigation',
  'view/story',
  'view/storyline',
  'view/title',
  'view/topic',
  'view/topics'
], function(Header, Navigation, Story, Storyline, Title, Topic, Topics) {
  return {
    Header: Header,
    Navigation: Navigation,
    Story: Story,
    Storyline: Storyline,
    Title: Title,
    Topic: Topic,
    Topics: Topics
  };
});