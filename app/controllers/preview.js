'use strict';


exports.side = function(req, res) {
  res.render('preview/side', {
    layout: 'preview',
    story: req.params.id,
    title: req.query.title,
    size: 'small'
  });
};

exports.full = function(req, res) {
  res.render('preview/full', {
    layout: 'preview',
    story: req.params.id,
    title: req.query.title,
    size: 'large'
  });
};

exports.stream = function(req, res) {
  res.render('preview/stream', {
    layout: 'preview',
    story: req.params.id,
    title: req.query.title,
    size: 'small'
  });
};