'use strict';

module.exports = function(app) {

  var index = require('../app/controllers/home');
  app.get('/', index.render);

  var widget = require('../app/controllers/widget');
  app.get('/widget/:id', widget.render);

  var story = require('../app/controllers/story');
  app.get('/story/:id', story.render);

  var preview = require('../app/controllers/preview');
  app.get('/preview/side/:id', preview.side);
  app.get('/preview/full/:id', preview.full);
  app.get('/preview/stream/:id', preview.stream);
};