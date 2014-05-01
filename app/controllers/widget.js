'use strict';

exports.render = function(req, res) {
  res.render('widget/index', {
    layout: 'widget',
    story: req.params.id
  });
};
