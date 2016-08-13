var http = require('http');
var path_processor = require('./path_processor');
var workhorse = require('./workhorse');

var server = http.createServer().listen(9999);

server.on('request', function(request, response) {
  var task = path_processor.process(request.url);
  var result = workhorse.work(task);

  response.end(result);
})