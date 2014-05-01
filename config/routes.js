'use strict';

module.exports = function(app) {

  var index = require('../app/controllers/home');
  app.get('/', index.render);

  var widget = require('../app/controllers/widget');
  app.get('/widget', widget.render);

  var story = require('../app/controllers/story');
  app.get('/story/:id', story.render);
};