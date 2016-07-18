
'use strict';

var port = process.env.PORT;
var restify = require('restify');

var server = restify.createServer();

server.get('/', function (req, res, next) {
  res.send(200, 'up & running on ' + port);
  return next();
});

server.listen(port, function () {
  console.log('Server started on %s', port);
});
