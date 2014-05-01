'use strict';

var request    = require('request');
var serivceUrl = 'http://newshack-api.herokuapp.com/api/projects/';

exports.render = function(req, res) {

  var url = serivceUrl + req.params.id;

  request.get(url, function (error, response, body) {
    if (!error && response.statusCode === 200) {
      res.send(JSON.parse(body));
    } else {
      res.send('{}');
    }
  });
};
