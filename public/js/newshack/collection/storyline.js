'use strict';

define(['jquery'], function($) {

  var url = '/story/';

  return {
    get: function(story, success, error) {
      $.get(url + story, success, error);
    }
  };
});