'use strict';

exports.render = function(req, res) {
  res.render('widget', {
    layout: 'widget'
  });
};
