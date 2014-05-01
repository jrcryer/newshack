'use strict';

define(['jquery'], function($) {

  var url = '/story/';

  return {
    get: function(story, callback) {
      $.get(url + story, callback);
    }
  };
});