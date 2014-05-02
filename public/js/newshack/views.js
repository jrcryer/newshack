'use strict';

define([
  'view/articles',
  'view/header',
  'view/navigation',
  'view/story',
  'view/storyline',
  'view/title',
  'view/topic',
  'view/topics'
], function(Articles, Header, Navigation, Story, Storyline, Title, Topic, Topics) {
  return {
    Articles: Articles,
    Header: Header,
    Navigation: Navigation,
    Story: Story,
    Storyline: Storyline,
    Title: Title,
    Topic: Topic,
    Topics: Topics
  };
});