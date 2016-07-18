
'use strict';

var connect = require('connect');

var app = connect();

var port = process.env.PORT;

app.use(function (req, res) {
  res.end('up & running on ' + port);
});

app.listen(port);

console.log('Server started on %s', port);
