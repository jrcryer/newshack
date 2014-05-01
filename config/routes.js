var async = require('async');

module.exports = function(app) {

    var index = require('../app/controllers/home');
    app.get('/', index.render);

    var widget = require('../app/controllers/widget');
    app.get('/widget', widget.render);
};