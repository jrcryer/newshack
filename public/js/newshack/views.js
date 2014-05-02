'use strict';

define([
  'view/header',
  'view/navigation',
  'view/story',
  'view/storyline',
  'view/title',
  'view/topics'
], function(Header, Navigation, Story, Storyline, Title, Topics) {
  return {
    Header: Header,
    Navigation: Navigation,
    Story: Story,
    Storyline: Storyline,
    Title: Title,
    Topics: Topics
  };
});