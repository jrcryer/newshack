'use strict';

define([
  'view/header',
  'view/story',
  'view/storyline',
  'view/title',
  'view/topics'
], function(Header, Story, Storyline, Title, Topics){
  return {
    Header: Header,
    Story: Story,
    Storyline: Storyline,
    Title: Title,
    Topics: Topics
  };
});