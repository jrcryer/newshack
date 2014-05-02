'use strict';


exports.side = function(req, res) {
  res.render('preview/index', {
    layout: 'preview',
    story: req.params.id
  });
};

exports.full = function(req, res) {
  res.render('preview/index', {
    layout: 'preview',
    story: req.params.id
  });
};
