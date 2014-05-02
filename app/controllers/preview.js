'use strict';


exports.side = function(req, res) {
  res.render('preview/side', {
    layout: 'preview',
    story: req.params.id,
    size: 'small'
  });
};

exports.full = function(req, res) {
  res.render('preview/full', {
    layout: 'preview',
    story: req.params.id,
    size: 'large'
  });
};
